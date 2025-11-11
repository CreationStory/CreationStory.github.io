(() => {
  class NetworkPatch {
    static #ALLOWED_METHODS = Object.freeze(new Set(["GET", "HEAD"]));
    static #DISALLOWED_FILETYPES = Object.freeze(new Set(["exe", "dat", "msi"]));
    static #MAX_REDIRECTS_HIGH_CLOSE = 14;
    static #MAX_REDIRECTS_OUTSIDE = 1;
    static #HOST_HIGH = Symbol("HIGH");
    static #HOST_CLOSE = Symbol("CLOSE");
    static #HOST_OUTSIDE = Symbol("OUTSIDE");
    #hostHigh = Object.freeze(new Set(["localhost", "127.0.0.1"]));
    #hostClose = Object.freeze(new Set(["gstatic.com"]));
    #compiledHighPatterns = [];
    #compiledClosePatterns = [];
    #originalFetch = globalThis.fetch?.bind(globalThis) ?? null;
    #patched = false;
    constructor() {
      console.info("[NetworkPatch] Constructor invoked: Starting initialization.");
      if (this.#originalFetch === null) {
        console.error("[NetworkPatch] Fatal: Global fetch API not found.");
        throw new Error("Global fetch API not available");
      }
      try {
        this.#compileHostPatterns();
        this.#patchFetch();
        Object.freeze(this);
        console.info("[NetworkPatch] Initialization complete: Instance frozen and ready.");
      } catch (error) {
        console.error("[NetworkPatch] Initialization failed with error:", error);
        throw new Error(`NetworkPatch initialization failed: ${error.message}`);
      }
    }
    #compileHostSetToRegExpList(hostSet) {
      console.debug("[NetworkPatch] Compiling host patterns for set:", hostSet);
      if (!hostSet || !(hostSet instanceof Set)) {
        const msg = "[NetworkPatch] Invalid hostSet argument: must be a non-empty Set";
        console.error(msg, hostSet);
        throw new TypeError(msg);
      }
      const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      try {
        const patterns = [...hostSet].map(host => {
          if (typeof host !== "string" || !host.trim()) {
            const errMsg = "[NetworkPatch] Host must be a non-empty string";
            console.error(errMsg, host);
            throw new TypeError(errMsg);
          }
          const regex = new RegExp(`^${escapeRegExp(host)}$`, "iu");
          console.debug(`[NetworkPatch] Compiled RegExp for host "${host}":`, regex);
          return regex;
        });
        console.info("[NetworkPatch] Host patterns compilation successful:", patterns);
        return Object.freeze(patterns);
      } catch (error) {
        console.error("[NetworkPatch] Failed to compile host patterns:", error);
        throw new Error(`Failed to compile host patterns: ${error.message}`);
      }
    }
    #compileHostPatterns() {
      console.info("[NetworkPatch] Starting compilation of host patterns.");
      try {
        this.#compiledHighPatterns = this.#compileHostSetToRegExpList(this.#hostHigh);
        this.#compiledClosePatterns = this.#compileHostSetToRegExpList(this.#hostClose);
        console.info("[NetworkPatch] Compiled high and close host patterns stored.");
      } catch (error) {
        console.error("[NetworkPatch] Host pattern compilation failed:", error);
        throw new Error(`Host pattern compilation failed: ${error.message}`);
      }
    }
    #resolveHostPolicy(hostname) {
      console.debug(`[NetworkPatch] Resolving host policy for hostname: "${hostname}"`);
      if (typeof hostname !== "string" || !hostname.trim()) {
        const msg = "[NetworkPatch] Hostname must be a non-empty string";
        console.error(msg, hostname);
        throw new TypeError(msg);
      }
      try {
        if (this.#compiledHighPatterns.some(pattern => pattern.test(hostname))) {
          console.info(`[NetworkPatch] Hostname "${hostname}" categorized as HIGH`);
          return {
            category: NetworkPatch.#HOST_HIGH,
            maxRedirects: NetworkPatch.#MAX_REDIRECTS_HIGH_CLOSE,
          };
        }
        if (this.#compiledClosePatterns.some(pattern => pattern.test(hostname))) {
          console.info(`[NetworkPatch] Hostname "${hostname}" categorized as CLOSE`);
          return {
            category: NetworkPatch.#HOST_CLOSE,
            maxRedirects: NetworkPatch.#MAX_REDIRECTS_HIGH_CLOSE,
          };
        }
        console.info(`[NetworkPatch] Hostname "${hostname}" categorized as OUTSIDE`);
        return {
          category: NetworkPatch.#HOST_OUTSIDE,
          maxRedirects: NetworkPatch.#MAX_REDIRECTS_OUTSIDE,
        };
      } catch (error) {
        console.error("[NetworkPatch] Host policy resolution failed:", error);
        throw new Error(`Host policy resolution failed: ${error.message}`);
      }
    }
    #isDisallowedFiletype(urlStr) {
      console.debug(`[NetworkPatch] Checking disallowed filetype for URL: "${urlStr}"`);
      if (typeof urlStr !== "string" || !urlStr.trim()) {
        console.warn("[NetworkPatch] URL is empty or invalid, treating as disallowed filetype");
        return true;
      }
      try {
        const url = new URL(urlStr);
        const pathname = url.pathname;
        const extension = pathname.includes(".")
          ? pathname.split(".").pop()?.toLowerCase() ?? ""
          : "";
        const isDisallowed = NetworkPatch.#DISALLOWED_FILETYPES.has(extension);
        console.info(`[NetworkPatch] File extension "${extension}" is ${isDisallowed ? "disallowed" : "allowed"}`);
        return isDisallowed;
      } catch (error) {
        console.warn("[NetworkPatch] URL parsing failed, treating as disallowed filetype:", error);
        return true;
      }
    }
    async #patchedFetch(input, init = {}, depth = 0) {
      console.info(`[NetworkPatch] fetch called - depth ${depth}, input:`, input, ", init:", init);
      try {
        depth = Number.isInteger(depth) && depth >= 0 ? depth : 0;
        let url;
        try {
          url = typeof input === "string"
            ? new URL(input, location?.origin ?? undefined)
            : input?.url
            ? new URL(input.url)
            : null;
          if (!url) {
            throw new TypeError("[NetworkPatch] Invalid fetch input: must be string or Request object with url");
          }
          console.debug("[NetworkPatch] Resolved URL object:", url.href);
        } catch (error) {
          console.error("[NetworkPatch] Invalid URL passed to fetch:", error);
          throw new TypeError(`[NetworkPatch] Invalid URL passed to fetch: ${error.message}`);
        }
        const { category, maxRedirects } = this.#resolveHostPolicy(url.hostname);
        const method = (init?.method ?? "GET").toUpperCase();
        console.debug(`[NetworkPatch] Method: "${method}", Host category: "${category.description ?? category.toString()}"`);
        if (category === NetworkPatch.#HOST_OUTSIDE) {
          if (!NetworkPatch.#ALLOWED_METHODS.has(method)) {
            const msg = `[NetworkPatch] Disallowed method "${method}" to external host "${url.hostname}"`;
            console.error(msg);
            throw new Error(msg);
          }
          if (init?.body) {
            const msg = `[NetworkPatch] Data submission (body) to external host "${url.hostname}" is not allowed`;
            console.error(msg);
            throw new Error(msg);
          }
          if (this.#isDisallowedFiletype(url.href)) {
            const msg = `[NetworkPatch] Disallowed file type in URL: ${url.href}`;
            console.error(msg);
            throw new Error(msg);
          }
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.warn("[NetworkPatch] Fetch aborted due to timeout (14 seconds)");
          controller.abort();
        }, 14000);
        try {
          if (init?.signal) {
            init.signal.addEventListener("abort", () => {
              console.info("[NetworkPatch] External abort signal triggered, aborting patched fetch");
              controller.abort();
            }, { once: true });
          }
          console.info(`[NetworkPatch] Initiating original fetch for URL: ${url.href}`);
          const response = await this.#originalFetch(input, {
            ...init,
            signal: controller.signal,
          }).catch(error => {
            console.error("[NetworkPatch] Original fetch failed:", error);
            throw new Error(`[NetworkPatch] Fetch failed: ${error.message}`);
          });
          console.info("[NetworkPatch] Fetch response received:", response);
          const redirectLocation = response.headers?.get("location");
          if (redirectLocation) {
            console.info(`[NetworkPatch] Redirect detected to "${redirectLocation}"`);
            try {
              const nextUrl = new URL(redirectLocation, url);
              if (depth >= maxRedirects) {
                const errMsg = `[NetworkPatch] Redirect limit reached (${maxRedirects}) at depth ${depth}`;
                console.error(errMsg);
                throw new Error(errMsg);
              }
              if (category === NetworkPatch.#HOST_OUTSIDE) {
                const errMsg = "[NetworkPatch] Redirect not allowed from external host";
                console.error(errMsg);
                throw new Error(errMsg);
              }
              console.info(`[NetworkPatch] Following redirect to: ${nextUrl.href}`);
              return this.#patchedFetch(nextUrl.href, init, depth + 1);
            } catch (error) {
              console.error("[NetworkPatch] Redirect processing failed:", error);
              throw new Error(`[NetworkPatch] Redirect processing failed: ${error.message}`);
            }
          }
          console.info("[NetworkPatch] Returning final fetch response.");
          return response;
        } finally {
          clearTimeout(timeoutId);
          console.debug("[NetworkPatch] Timeout cleared.");
        }
      } catch (error) {
        console.error("[NetworkPatch] Patched fetch error encountered:", error);
        throw error;
      }
    }
    #getGlobalToPatch() {
      console.info("[NetworkPatch] Searching global objects for fetch to patch.");
      const globalsToCheck = [globalThis, window, self];
      for (const globalObj of globalsToCheck) {
        try {
          if (globalObj?.fetch) {
            console.info(`[NetworkPatch] Found global fetch in: ${globalObj.constructor.name || "unknown global object"}`);
            return globalObj;
          }
        } catch (error) {
          console.warn("[NetworkPatch] Access to global object failed, continuing search:", error);
          continue;
        }
      }
      const errMsg = "[NetworkPatch] No suitable global object with fetch found";
      console.error(errMsg);
      throw new Error(errMsg);
    }
    #patchFetch() {
      if (this.#patched) {
        console.info("[NetworkPatch] fetch is already patched, skipping patching.");
        return;
      }
      try {
        const target = this.#getGlobalToPatch();
        if (target.fetch === this.#patchedFetch) {
          console.info("[NetworkPatch] Global fetch is already patched by NetworkPatch.");
          return;
        }
        Object.defineProperty(target, "fetch", {
          value: this.#patchedFetch.bind(this),
          writable: false,
          configurable: false,
          enumerable: true,
        });
        this.#patched = true;
        console.info("[NetworkPatch] Global fetch patched successfully.");
      } catch (error) {
        console.error("[NetworkPatch] Failed to patch fetch:", error);
        throw new Error(`Failed to patch fetch: ${error.message}`);
      }
    }
    static preventExtensions() {
      try {
        Object.freeze(NetworkPatch.prototype);
        Object.freeze(NetworkPatch);
        console.info("[NetworkPatch] NetworkPatch class and prototype frozen.");
      } catch (error) {
        console.error("[NetworkPatch] Failed to freeze NetworkPatch:", error);
        throw new Error(`Failed to freeze NetworkPatch: ${error.message}`);
      }
    }
  }
  try {
    console.info("[NetworkPatch] Preventing extensions on NetworkPatch class.");
    Object.preventExtensions(NetworkPatch);
    NetworkPatch.preventExtensions();
    console.info("[NetworkPatch] Creating new NetworkPatch instance.");
    new NetworkPatch();
    console.info("[NetworkPatch] NetworkPatch initialization complete and active.");
  } catch (error) {
    console.error("[NetworkPatch] Initialization failed:", error);
    throw error;
  }
})();