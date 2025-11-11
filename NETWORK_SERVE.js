const CACHE_NAMES = {
  SHARPFAITH: "CACHE_SHARPFAITH",
  BOOKS: "CACHE_BOOKS"
};

const HOSTS = new Set(["127.0.0.1"]);

const ASSETS = [
  "/",
  "/index.html",
  "/Write/SCRIPT.css",
  "/Write/CAST_C14.js",
  "/NETWORK_SERVE.js",
  "/FALLBACK.html"
];

function HOSTS_ALLOWED(hostname) {
  return true;
  return Array.from(HOSTS).some(HOST => hostname === HOST || hostname.endsWith("." + HOST));
}

const createConcurrencyLimiter = (max = 8) => {
  const queue = [];
  let active = 0;

  const run = async (task) => {
    if (active >= max) {
      await new Promise(resolve => queue.push(resolve));
    }
    active++;
    try {
      return await task();
    } finally {
      active--;
      if (queue.length > 0) {
        const next = queue.shift();
        if (next) next();
      }
    }
  };

  return run;
};

const precacheLimiter = createConcurrencyLimiter();
const backgroundWriteLimiter = createConcurrencyLimiter();

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    try {
      const validKeys = new Set(Object.values(CACHE_NAMES));
      const existingKeys = await caches.keys();
      await Promise.all(existingKeys.filter((key) => !validKeys.has(key)).map((key) => caches.delete(key)));
      await Promise.all(Object.values(CACHE_NAMES).map((key) => caches.open(key)));
      await precacheAssets();
      self.skipWaiting();
    } catch {}
  })());
});

self.addEventListener("activate", (event) => { event.waitUntil((async () => { try { await self.clients.claim(); } catch {} })()); });

self.addEventListener("fetch", (event) => {
if (event.request.method !== "GET") return;
event.respondWith((async () => { try { return await handleFetch(event); } catch { return handleFallback(event); } })());
});

async function precacheAssets() {
  const cache = await caches.open(CACHE_NAMES.SHARPFAITH);
  await Promise.allSettled(ASSETS.map((path) =>
    precacheLimiter(async () => {
      try {
        const url = new URL(path, self.location.origin);
        const response = await fetchWithTimeout(url.href);
        if (response.ok && response.type !== "opaque") await cache.put(url.href, response.clone());
      } catch (error) { console.error(path, error); }
    })
  ));
}


async function handleFetch(event) {
  const { request } = event;
  const url = new URL(request.url);
  const cache = await caches.open(url.pathname.startsWith("/VECTORS/") ? CACHE_NAMES.BOOKS : CACHE_NAMES.SHARPFAITH);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetchWithTimeout(request);
  if (HOSTS_ALLOWED(url.hostname) && response.ok) backgroundCacheWrite(cache, request, response.clone());
  return response;
}

async function handleFallback(event) {
  const HTMLpage = ((event.request.mode === "navigate" || event.request.headers.get("accept")?.includes("text/html")) &&
  !new URL(event.request.url).pathname.startsWith("/VECTORS/"));
  const cache = await caches.open(CACHE_NAMES.SHARPFAITH);

  if (HTMLpage) {
    const fallback = await cache.match("/FALLBACK.html");
    return fallback || new Response("<h1>Offline</h1><p>No fallback page found.</p>", {
      status: 503,
      headers: { "Content-Type": "text/html" }
    });
  }

  let file = ((file_) => file_ ? ` ${file_.replace(/[\/\-_]/g, ":")} ` : " ")((new URL(event.request.url)).pathname.split("/").pop() || " ");
  return new Response("SHARP.FAITH", { status: 503, statusText: `The file${file}did not already exist, and was not obtainable through the network` });
}

function getRetryDelay(attempt) {
  if (attempt === 0) return 0;
  if (attempt === 1) return 2800;
  if (attempt === 2) return 1400;
  return 280;
}

async function backgroundCacheWrite(cache, request, response) {
  await backgroundWriteLimiter(async () => {
    for (let attempt = 0; attempt <= 8; attempt++) {
      try {
        await cache.put(request, response.clone());
        console.log(`${request.url}`);
        return;
      } catch (error) {
        console.error(error);
        if (attempt === 8) return;
        await new Promise(resolve => setTimeout(resolve, getRetryDelay(attempt)));
      }
    }
  });
}

async function fetchWithTimeout(resource, options = {}) {
  if (!resource || (typeof resource !== "string" && !(resource instanceof Request))) return;

  const urlString = typeof resource === "string" ? resource : resource.url;
  const isVector = new URL(urlString, self.location.origin).pathname.startsWith("/VECTORS/");
  const attempts = isVector ? 1 : 8;

  for (let attempt = 0; attempt < attempts; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7400);

    try {
      const response = await fetch(resource, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`The file ${typeof resource === "string" ? resource : resource.url} did not already exist, and was not obtainable through the network.\n${response.status} ${response.statusText}`);
      return response;
    } catch (error) {
      console.error(typeof resource === "string" ? resource : resource.url, error);
      if (attempt === attempts - 1) throw error;
      if (attempt > 0) await new Promise(resolve => setTimeout(resolve, getRetryDelay(attempt)));
    } finally { clearTimeout(timeoutId); }
  }

}

