"use strict";

class CAST_VECTOR_INIT {
  constructor() {
    this.CAST_VECTOR_INSTANCE = 0;
    this.CAST_VECTOR_FINAL = null;
    this.CAST_VECTOR_TIMING = null;
    this.CAST_VECTOR_OBSERVER = null;
    this.CAST_VECTOR_INIT_FLOW();
  }

  RUNTIME() {
    try {
      this.CAST_VECTOR_INSTANCE++;
      const CAST_VECTOR_RUNTIME_INSTANCE = this.CAST_VECTOR_INSTANCE;

      const HEIGHT = Math.ceil(window.innerHeight) + 1.04;
      const WIDTH = Math.ceil(window.innerWidth) + 1.04;
      const HEIGHT_ = Math.ceil(window.innerHeight);
      const WIDTH_ = Math.ceil(window.innerWidth);

      document.documentElement.style.setProperty("--HEIGHT", HEIGHT + "px");
      document.documentElement.style.setProperty("--WIDTH", WIDTH + "px");
      document.documentElement.style.setProperty("--HEIGHT_", HEIGHT_ + "px");
      document.documentElement.style.setProperty("--WIDTH_", WIDTH_ + "px");

      this.INSTANCEFINAL(CAST_VECTOR_RUNTIME_INSTANCE);
      this.CAST_VECTOR_FINAL = setTimeout(() => this.FINAL(CAST_VECTOR_RUNTIME_INSTANCE), 7400);
    } catch { this.FINAL_(); }
  }

  INSTANCEFINAL(INSTANCE) {
    setTimeout(() => (INSTANCE == this.CAST_VECTOR_INSTANCE ? this.FINAL(INSTANCE) : this.RUNTIME_RELAY()), 14);
  }

  FINAL(INSTANCE) {
    try {
      if (INSTANCE !== this.CAST_VECTOR_INSTANCE) {
        this.RUNTIME_RELAY();
        return
      }

      const HEIGHT = Math.ceil(window.innerHeight) + 1.04;
      const WIDTH = Math.ceil(window.innerWidth) + 1.04;
      const HEIGHT_ = Math.ceil(window.innerHeight);
      const WIDTH_ = Math.ceil(window.innerWidth);

      const HEIGHT_INSTANCE = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--HEIGHT")) || Math.ceil(window.innerHeight) + .28;
      const WIDTH_INSTANCE = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--WIDTH")) || Math.ceil(window.innerWidth) + .28;
      const HEIGHT_INSTANCE_ = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--HEIGHT_")) || Math.ceil(window.innerHeight);
      const WIDTH_INSTANCE_ = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--WIDTH_")) || Math.ceil(window.innerWidth);

      if (HEIGHT_INSTANCE !== HEIGHT || WIDTH_INSTANCE !== WIDTH || HEIGHT_INSTANCE_ !== HEIGHT_ || WIDTH_INSTANCE_ !== WIDTH_) this.RUNTIME_RELAY();
    } catch { this.FINAL_(); }
  }

  RUNTIME_RELAY() {
    clearTimeout(this.CAST_VECTOR_TIMING);
    clearTimeout(this.CAST_VECTOR_FINAL);
    this.CAST_VECTOR_TIMING = setTimeout(() => this.RUNTIME(), 140);
  }

  FINAL_() {
    document.body.style.height = `${window.innerHeight}px`;
    document.body.style.width = `${window.innerWidth}px`;
  }

  CAST_VECTOR_INIT_FLOW() {
    document.body.style.height = "var(--HEIGHT, 100vh)";
    document.body.style.width = "var(--WIDTH, 100vw)";

    requestAnimationFrame(() => this.RUNTIME());

    ["load", "resize", "scroll", "focus", "blur"].forEach(event => window.addEventListener(event, () => this.RUNTIME_RELAY()));

    if (typeof window.ResizeObserver !== "undefined") {
      this.CAST_VECTOR_OBSERVER = new ResizeObserver(() => this.RUNTIME_RELAY());
      this.CAST_VECTOR_OBSERVER.observe(document.documentElement);
      this.CAST_VECTOR_OBSERVER.observe(document.body);
    }
  }
}
new CAST_VECTOR_INIT();

window.onload = async () => {
  class VECTOR_ {
    constructor() {
      this.VECTOR_KEY = "SHARP.FAITH";

      this.VECTOR_languagePtrs = [
        "English",
        "Cymraeg",
        "Français",
        "Deutsch",
        "Norsk",
        "Íslenska",
        "Suomi",
        "Русский",
        "عربي"
      ];

      this.VECTOR_languageNames = {
        "en": "English",
        "en-gb": "English",
        "en-ie": "English",
        "en-fr": "Français",
        "en-de": "Deutsch",
        "en-no": "Norsk",
        "en-se": "Norsk",
        "en-ca": "English",
        "en-us": "English",
        "en-au": "English",
        "en-nz": "English",
        "en-jm": "English",
        "en-is": "Íslenska",
        "en-fi": "Suomi",
        "en-ru": "Русский",
        "en-ae": "عربي",
        "en-001": "English",
        "cy": "Cymraeg",
        "cy-gb": "Cymraeg",
        "gd": "English",
        "gd-gb": "English",
        "ga": "English",
        "fr": "Français",
        "fr-fr": "Français",
        "fr-be": "Français",
        "fr-ca": "Français",
        "fr-cf": "Français",
        "fr-ch": "Français",
        "fr-lu": "Français",
        "de": "Deutsch",
        "de-de": "Deutsch",
        "de-at": "Deutsch",
        "de-be": "Deutsch",
        "de-ch": "Deutsch",
        "de-li": "Deutsch",
        "de-lu": "Deutsch",
        "no": "Norsk",
        "nb": "Norsk",
        "nb-no": "Norsk",
        "nn": "Norsk",
        "nn-no": "Norsk",
        "sv": "Norsk",
        "sv-se": "Norsk",
        "sv-fi": "Suomi",
        "se": "Norsk",
        "se-no": "Norsk",
        "se-se": "Norsk",
        "se-fi": "Suomi",
        "da": "Norsk",
        "is": "Íslenska",
        "is-is": "Íslenska",
        "fo" : "Íslenska",
        "fo-fo" : "Íslenska",
        "fi": "Suomi",
        "fi-fi": "Suomi",
        "ru": "Русский",
        "ru-ru": "Русский",
        "ru-by": "Русский",
        "ru-kz": "Русский",
        "ru-kg": "Русский",
        "ru-md": "Русский",
        "ru-ua": "Русский",
        "uk": "Русский",
        "uk-ua": "Русский",
        "ar": "عربي",
        "ar-ae": "عربي",
        "ar-bh": "عربي",
        "ar-dz": "عربي",
        "ar-eg": "عربي",
        "ar-iq": "عربي",
        "ar-jo": "عربي",
        "ar-kw": "عربي",
        "ar-lb": "عربي",
        "ar-ly": "عربي",
        "ar-ma": "عربي",
        "ar-mr": "عربي",
        "ar-om": "عربي",
        "ar-qa": "عربي",
        "ar-sa": "عربي",
        "ar-sd": "عربي",
        "ar-sy": "عربي",
        "ar-td": "عربي",
        "ar-ye": "عربي",
        "ar-001": "عربي"
      };

      this.VECTOR_languageNames_ = {
        en: "English",
        cy: "Cymraeg",
        fr: "Français",
        de: "Deutsch",
        no: "Norsk",
        nb: "Norsk",
        nn: "Norsk",
        sv: "Norsk",
        se: "Norsk",
        da: "Norsk",
        is: "Íslenska",
        fo: "Íslenska",
        fi: "Suomi",
        ru: "Русский",
        uk: "Русский",
        ar: "عربي"
      };

      this.STORAGE = [];
      if (typeof window.localStorage !== "undefined") this.STORAGE.push(this.VECTOR_STORAGE_LOCAL());
      if (typeof window.sessionStorage !== "undefined") this.STORAGE.push(this.VECTOR_STORAGE_SESSION());
      if (navigator.cookieEnabled) this.STORAGE.push(this.VECTOR_STORAGE_ENVIRONMENT());
    }

    VECTOR_STORAGE_LOCAL() {
      return {
        instance: () => localStorage.getItem(this.VECTOR_KEY),
        save: (VECTOR) => localStorage.setItem(this.VECTOR_KEY, VECTOR)
      };
    }

    VECTOR_STORAGE_SESSION() {
      return {
        instance: () => sessionStorage.getItem(this.VECTOR_KEY),
        save: (VECTOR) => sessionStorage.setItem(this.VECTOR_KEY, VECTOR)
      };
    }

    VECTOR_STORAGE_ENVIRONMENT() {
      return {
        instance: () => {
          const VECTOR = document.cookie.split("; ").find(instance => instance.startsWith(this.VECTOR_KEY + "="));
          return VECTOR ? decodeURIComponent(VECTOR.split("=")[1]) : null;
        },
        save: VECTOR => {
          const lengthStr = new Date();
          lengthStr.setFullYear(lengthStr.getFullYear() + 1);
          document.cookie = `${this.VECTOR_KEY}=${encodeURIComponent(VECTOR)}; expires=${lengthStr.toUTCString()}; path=/`;
        }
      };
    }

    VECTOR_FLOW_SAVE(VECTOR) {
      for (const STORAGE of this.STORAGE) try { STORAGE.save(VECTOR); } catch {}
    }

    VECTOR_FLOW_ENVIRONMENT(VECTOR_) {
      const VECTOR = VECTOR_.toLowerCase();
      return this.VECTOR_languageNames[VECTOR] ?? this.VECTOR_languageNames_[VECTOR.split("-")[0]] ?? "English";
    }

    VECTOR() {
      let VECTOR = null;
      for (const STORAGE of this.STORAGE) {
        try {
          const VECTOR_ = STORAGE.instance();
          if (VECTOR_ && this.VECTOR_languagePtrs.includes(VECTOR_)) {
            VECTOR = VECTOR_;
            break;
          }
        } catch {}
      }
      if (!VECTOR) {
        const VECTOR_ = navigator.language;
        VECTOR = this.VECTOR_FLOW_ENVIRONMENT(VECTOR_);
      }
      this.VECTOR_FLOW_SAVE(VECTOR);
      return VECTOR;
    }
  }
  const VECTOR = new VECTOR_();

  class userPreferences_ {
    constructor() {
      this.localStorage = this.localStorage_();
      this.cookieStorage = this.cookieStorage_();
      this.sessionStorage = this.sessionStorage_();
    }

    localStorage_() {
      return this.execute(() => {
        if (typeof window.localStorage === 'undefined') return false;
        localStorage.setItem("LOCALSTORAGE", "true");
        const result = localStorage.getItem("LOCALSTORAGE") === "true";
        localStorage.removeItem("LOCALSTORAGE");
        return result;
      });
    }

    cookieStorage_() {
      return this.execute(() => {
        if (typeof navigator === 'undefined' || !navigator.cookieEnabled) return false;
        document.cookie = `COOKIESTORAGE=1; path=/`;
        const result = document.cookie.split("; ").some(cookie => cookie.startsWith("COOKIESTORAGE="));
        const resetDate = new Date();
        resetDate.setFullYear(resetDate.getFullYear() - 1);
        document.cookie = `COOKIESTORAGE=; expires=${resetDate.toUTCString()}; path=/`;
        return result;
      });
    }

    sessionStorage_() {
      return this.execute(() => {
        if (typeof window.sessionStorage === 'undefined') return false;
        sessionStorage.setItem("SESSIONSTORAGE", "true");
        const result = sessionStorage.getItem("SESSIONSTORAGE") === "true";
        sessionStorage.removeItem("SESSIONSTORAGE");
        return result;
      });
    }

    makeSpace() {
      ['localStorage', 'sessionStorage'].forEach(storage => {
        const store = window[storage];
        for (let i = store.length - 1; i >= 0; i--) {
          const key = store.key(i);
          if (key?.startsWith("RESUME_")) store.removeItem(key);
        }
      });
    }

    execute(fn) {
      try {
        return fn();
      } catch (error) {
        if (error.name === 'QuotaExceededError') {
          this.makeSpace();
          try { return fn(); }
          catch { return null; }
        }
      }
    }

    instance(key_) {
      let key = this.execute(() => {
        if (this.localStorage) return localStorage.getItem(key_);
        return null;
      });
      if (key) return key;

      key = this.execute(() => {
        if (this.cookieStorage) {
          return document.cookie.split("; ").find(cookie => cookie.startsWith(key_ + "="))?.split("=")[1];
        }
        return null;
      });
      if (key) return key;

      key = this.execute(() => {
        if (this.sessionStorage) return sessionStorage.getItem(key_);
        return null;
      });
      if (key) return key;

      return null;
    }

    save(key, value, optimized = false) {
      let saved = false;
      this.execute(() => {
        if (this.localStorage) {
          localStorage.setItem(key, value);
          if (localStorage.getItem(key) === value) saved = true;
        }
      });
      this.execute(() => {
        if (this.cookieStorage && !optimized) {
          const expiresDate = new Date();
          expiresDate.setFullYear(expiresDate.getFullYear() + 1);
          document.cookie = `${key}=${value}; expires=${expiresDate.toUTCString()}; path=/`;
          const stored = document.cookie.split("; ").find(cookie => cookie.startsWith(key + "="))?.split("=")[1];
          if (stored === value) saved = true;
        }
      });
      this.execute(() => {
        if (this.sessionStorage) {
          sessionStorage.setItem(key, value);
          if (sessionStorage.getItem(key) === value) saved = true;
        }
      });
      return saved;
    }

    delete(key) {
      this.execute(() => {
        if (this.localStorage) localStorage.removeItem(key);
      });

      this.execute(() => {
        if (this.cookieStorage) {
          const resetDate = new Date();
          resetDate.setFullYear(resetDate.getFullYear() - 1);
          document.cookie = `${key}=FALSE; expires=${resetDate.toUTCString()}; path=/`;
        }
      });

      this.execute(() => {
        if (this.sessionStorage) sessionStorage.removeItem(key);
      });
    }
  }
  const userPreferences = new userPreferences_();

///////////////////////////////////////////////////////////////////////
//                            PAGE STRUCTURE
///////////////////////////////////////////////////////////////////////
  const CAST_VECTOR = Object.freeze(await VECTOR.VECTOR());
  window.VECTOR = CAST_VECTOR;

  const struct_CANVAS_MAIN = document.getElementById("CastRender");
  const struct_CAST_VECTOR_wrapper = document.querySelector('.CAST_VECTOR_wrapper');
  const struct_WRITE___ = document.querySelector('.WRITE___');
  const struct_LANGUAGEAREA_wrapper = document.querySelector('.LANGUAGEAREA_wrapper');
  const LANGUAGEAREA_languageNames_wrapper = document.querySelector('.LANGUAGEAREA_languageNames_wrapper');
  const struct_LANGUAGEAREA_languageNames_names = LANGUAGEAREA_languageNames_wrapper.querySelectorAll("[LANGUAGE]");
  const struct_VERSEREADING_wrapper = document.querySelector('.VERSEREADING_wrapper');
  const struct_BOOKTEXTURE = document.querySelector('.BOOKS .TEXTURE');
  const struct_BOOKOPENAREA = document.querySelector('.BOOKOPENAREA');
  const struct_BOOKOPENAREA_wrapper = document.querySelector('.BOOKOPENAREA_wrapper');
  const struct_BOOKOPENAREA_VECTOR = struct_BOOKOPENAREA_wrapper.querySelector('VECTOR');
  const struct_BOOKS = document.querySelector(".BOOKS");

  const struct_BORDERFRONT_wrapper = document.querySelector(".borderfront_wrapper");
  const struct_BORDERFRONT = document.querySelector(".borderfront");
  const struct_BORDERBACK_wrapper = document.querySelector(".borderback_wrapper");
  const struct_BORDERBACK = document.querySelector(".borderback");

  const struct_bookNames = document.querySelectorAll(".Book");

  // UI
  const struct_CHAPTERLIST = document.querySelector(".SETTINGSAREA .chapterlist");
  const struct_VERSELIST = document.querySelector(".SETTINGSAREA .verselist");

  // LINK
  const link_TABIMAGE = document.getElementById("TABIMAGE");

  let page_inMainVector = true;
  let page_smokeSimulation = false;

  const ENVIRONMENT = (() => {
    const ua = (navigator.userAgent || "").toLowerCase();
    const platform = (navigator.userAgentData?.platform || navigator.platform || "").toLowerCase();

    const PLATFORM = /win/.test(platform) ? "SYSTEM"
        : /linux/.test(platform) ? "SYSTEM_"
        : /mac/.test(platform) ? (/safari/.test(ua) && navigator.maxTouchPoints > 1 ? "SYSTEM____" : "SYSTEM__")
        : /android/.test(ua + platform) ? "SYSTEM_____"
        : /iphone|ipad|ipod|ios/.test(ua + platform) ? "SYSTEM____"
        : "UNKNOWN";

    const NAME = /(chrome|crios)\//.test(ua) && !/edg|opr/.test(ua) ? "CHROME"
        : /edg\//.test(ua) ? "EDGE"
        : /firefox\//.test(ua) ? "FIREFOX"
        : /opr\//.test(ua) ? "OPERA"
        : /version\/\d+.*safari/.test(ua) ? "SAFARI"
        : "UNKNOWN";

    const ENGINE_MAP = { CHROME: "ENGINE_", EDGE: "ENGINE__", FIREFOX: "ENGINE___", OPERA: "ENGINE____", SAFARI: "ENGINE_____" };
    const RUNNING = PLATFORM === "SYSTEM____" ? "ENGINE______" : ENGINE_MAP[NAME] || "UNKNOWN";

    const VERSION = (ua.match({
      CHROME: /(chrome|crios)\/(\d+)/,
      EDGE: /edg\/(\d+)/,
      FIREFOX: /firefox\/(\d+)/,
      OPERA: /opr\/(\d+)/,
      SAFARI: /version\/(\d+)/
  }[NAME])?.[1]) || "UNKNOWN";

    return { RUNNING, NAME, VERSION, PLATFORM };
})();
console.log(ENVIRONMENT.RUNNING, ENVIRONMENT.NAME);

  const link_TABIMAGE_redShow="data:image/svg+xml,%3Csvg height%3D%22420%22 width%3D%22404%22 xmlns%3D%22http://www.w3.org/2000/svg%22 version%3D%221.1%22%3E%3Cdefs%3E%3Cfilter id%3D%22CAST%22 x%3D%220%22 y%3D%220%22 width%3D%22140%25%22 height%3D%22140%25%22%3E%3CfeDropShadow dx%3D%224.8%22 dy%3D%227.4%22 stdDeviation%3D%221.4%22 flood-color%3D%22%23000000%22/%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Cpath fill%3D%22%23FFF%22 filter%3D%22url(%23CAST)%22 d%3D%22m1,33c3.26,1.54 5.93,3.44 8.77,5.68 34.98,27.47 77.98,45.48 119.23,61.32 1.17,0.45 2.34,0.9 3.77,1.37 41.95,16.06 41.95,16.06 85.37,27.15 43.18,8.4 66.05,41.83 66.05,84.48 15.63,3.13 26.19-14.69 34.02-25.89 23.09-32.94 55.02-36.18 84.98-8.11 1,4 1,4-1.46,4.66-23.99,6.87-34.59,18.4-37.43,42.26-6.01,36.88-15.73,73.18-43.11,100.08-0.76,0.76-1.52,1.52-2.3,2.3-21.29,20.08-47.31,24.23-75.28,24.26-6.23,0.01-12.45,0.09-18.68,0.18-1.21,0.01-2.42,0.03-3.66,0.05-24.66,0.4-51.68,1.94-74.08,13.21-1.34,0.64-1.34,0.64-2.7,1.3-21.1,10.73-43.69,31.49-54.3,52.7-38.44-7.69-47.44-52.68-37-84 0.83-0.2 1.66-0.39 2.51-0.59 71.12-15.83 71.12-15.83 127.49-58.41-1.24-0.23-2.47-0.47-3.75-0.71-6.02-1.34-8.92789-3.80059-17.31-5.91-1.11-0.45-2.21-0.9-3.34-1.36-8.1-3.32-15.97-6.91-23.69-11.02-2.01-1.06-4.03-2.08-6.05-3.11-22.44-11.46-43.34-26.01-61.44-43.14-1.85-1.75-3.77-3.39-5.72-5.03-4.67-4.05-8.69-8.61-12.69-13.31-0.45-0.59-0.91-1.06-1.38-1.61-23.91-28.21-39.49-61.93-45.62-98.39-0.12-0.68-0.23-1.37-0.34-2.07-3.05-18.74-2.78-39.13-0.65-57.93z%22/%3E%3Cpath fill%3D%22%23FFF%22 d%3D%22m306,0c-0.75,7.71-2.66,15.01-4.65,22.48-4.48,17.76-5.86,34.81-5.74,54.07 0.02,2.95 0,5.9-0.02,8.84-0.02,18.38 2.05,36.45 6.22,54.36 0.26,1.12 0.51,2.23 0.77,3.38 2.28,9.8 5.15,19.36 8.42,28.87-1,7-1,7-2.16,8.51-1.74,2.27-3.48,4.54-5.22,6.8-0.6,0.79-1.2,1.57-1.82,2.38-0.58,0.76-1.16,1.52-1.76,2.3-0.54,0.69-1.07,1.39-1.62,2.11-1.19,1.59-2.31,3.24-3.42,4.9-3-1-3-1-3-20-8.12-37.88-34.46-58.4-73-65 2.79-29.95 18.46-55.67 39-77 0.5-0.59 1-1.06 1.52-1.6 33.81-34.4 33.81-34.4 46.48-34.4z%22/%3E%3C/g%3E%3C/svg%3E";
  const link_TABIMAGE_lightShow="data:image/svg+xml,%3Csvg height%3D%22420%22 width%3D%22404%22 xmlns%3D%22http://www.w3.org/2000/svg%22 version%3D%221.1%22%3E%3Cdefs%3E%3CradialGradient id%3D%22VECTOR%22 r%3D%220.74%22 cx%3D%220.74%22 cy%3D%220.28%22 spreadMethod%3D%22pad%22%3E%3Cstop offset%3D%220%22 stop-color%3D%22%23FF0000%22 stop-opacity%3D%221%22/%3E%3Cstop offset%3D%221%22 stop-color%3D%22%23C40000%22 stop-opacity%3D%221%22/%3E%3C/radialGradient%3E%3Cfilter id%3D%22CAST%22 x%3D%220%22 y%3D%220%22 width%3D%22140%25%22 height%3D%22140%25%22%3E%3CfeDropShadow dx%3D%224.8%22 dy%3D%227.4%22 stdDeviation%3D%221.4%22 flood-color%3D%22%23000000%22/%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Cpath fill%3D%22url(%23VECTOR)%22 filter%3D%22url(%23CAST)%22 d%3D%22m1,33c3.26,1.54 5.93,3.44 8.77,5.68 34.98,27.47 77.98,45.48 119.23,61.32 1.17,0.45 2.34,0.9 3.77,1.37 41.95,16.06 41.95,16.06 85.37,27.15 43.18,8.4 66.05,41.83 66.05,84.48 15.63,3.13 26.19-14.69 34.02-25.89 23.09-32.94 55.02-36.18 84.98-8.11 1,4 1,4-1.46,4.66-23.99,6.87-34.59,18.4-37.43,42.26-6.01,36.88-15.73,73.18-43.11,100.08-0.76,0.76-1.52,1.52-2.3,2.3-21.29,20.08-47.31,24.23-75.28,24.26-6.23,0.01-12.45,0.09-18.68,0.18-1.21,0.01-2.42,0.03-3.66,0.05-24.66,0.4-51.68,1.94-74.08,13.21-1.34,0.64-1.34,0.64-2.7,1.3-21.1,10.73-43.69,31.49-54.3,52.7-38.44-7.69-47.44-52.68-37-84 0.83-0.2 1.66-0.39 2.51-0.59 71.12-15.83 71.12-15.83 127.49-58.41-1.24-0.23-2.47-0.47-3.75-0.71-6.02-1.34-8.92789-3.80059-17.31-5.91-1.11-0.45-2.21-0.9-3.34-1.36-8.1-3.32-15.97-6.91-23.69-11.02-2.01-1.06-4.03-2.08-6.05-3.11-22.44-11.46-43.34-26.01-61.44-43.14-1.85-1.75-3.77-3.39-5.72-5.03-4.67-4.05-8.69-8.61-12.69-13.31-0.45-0.59-0.91-1.06-1.38-1.61-23.91-28.21-39.49-61.93-45.62-98.39-0.12-0.68-0.23-1.37-0.34-2.07-3.05-18.74-2.78-39.13-0.65-57.93z%22/%3E%3Cpath fill%3D%22url(%23VECTOR)%22 d%3D%22m306,0c-0.75,7.71-2.66,15.01-4.65,22.48-4.48,17.76-5.86,34.81-5.74,54.07 0.02,2.95 0,5.9-0.02,8.84-0.02,18.38 2.05,36.45 6.22,54.36 0.26,1.12 0.51,2.23 0.77,3.38 2.28,9.8 5.15,19.36 8.42,28.87-1,7-1,7-2.16,8.51-1.74,2.27-3.48,4.54-5.22,6.8-0.6,0.79-1.2,1.57-1.82,2.38-0.58,0.76-1.16,1.52-1.76,2.3-0.54,0.69-1.07,1.39-1.62,2.11-1.19,1.59-2.31,3.24-3.42,4.9-3-1-3-1-3-20-8.12-37.88-34.46-58.4-73-65 2.79-29.95 18.46-55.67 39-77 0.5-0.59 1-1.06 1.52-1.6 33.81-34.4 33.81-34.4 46.48-34.4z%22/%3E%3C/g%3E%3C/svg%3E";
  const link_TABIMAGE_lightBack="data:image/svg+xml,%3Csvg height%3D%22480%22 width%3D%22480%22 xmlns%3D%22http://www.w3.org/2000/svg%22 version%3D%221.1%22%3E%3Cpath d%3D%22M0 0C0 480 0 480-480 480C-480 0-480 0 0 0Z M-146.25 27.81C-146.87 28.22-147.49 28.62-148.13 29.03C-160.06 36.9-170.69 46.15-181 56C-181.73 56.67-182.45 57.35-183.2 58.04C-191.86 66.3-237.96 131.2-219.66 135.85C-195.54 142.15-172.52 151.72-159 174C-158.54 174.76-158.08 175.51-157.6 176.29C-150.27 189.56-149.32 204.17-149 219C-144.97 215.15-141.49 211.06-138.12 206.62C-137.61 205.99-137.1 205.36-136.58 204.7C-131.25 197.64-133.9 192.03-136.27 184.12C-139.64 172.87-142.24 161.6-144.38 150.06C-144.5 149.38-144.63 148.7-144.76 148C-146.88 136.61-148.15 125.56-148.24 113.96C-148.25 112.42-148.25 112.42-148.27 110.85C-148.58 69.21-148.58 69.21-144 50C-143.55 48.01-143.1 46.02-142.66 44.04C-141.65 39.67-140.59 35.32-139.49 30.98C-137.3 22.07-139.66 23.54-146.25 27.81Z M-442.17 69.8C-442.17 70.55-442.17 71.31-442.18 72.09C-442.18 73.68-442.19 75.28-442.19 76.88C-442.19 79.27-442.21 81.65-442.22 84.04C-442.33 114.06-435.35 144.1-422 171C-421.68 171.65-421.37 172.29-421.04 172.96C-406.22 203.12-382.22 230.48-355 250C-353.69 250.97-352.38 251.93-351.07 252.9C-340.47 260.63-329.4 267.49-318 274C-317.25 274.43-316.5 274.86-315.73 275.3C-305.45 281.14-294.79 285.93-283.88 290.44C-283.25 290.7-282.63 290.95-281.99 291.22C-270.35 296.62-270.35 296.62-258 299C-288.16 329.64-333.66 344.84-374.33 355.24C-376.56 355.82-378.78 356.41-381 357C-381.93 357.23-382.86 357.47-383.81 357.71C-388.69 359.09-391.04 359.85-392 365.25C-392.28 366.62-392.28 366.62-392.56 368.02C-392.78 369.49-392.78 369.49-393 371C-393.18 372.1-393.36 373.21-393.54 374.35C-396.19 395.51-382.36 440.6-354 441C-352.03 439.04-352.03 439.04-350.31 436.25C-312.47 381.36-261.81 373.72-198.76 373.62C-154.1 373.5-120.85 355.99-100 316C-99.42 314.9-98.83 313.8-98.23 312.66C-87.41 290.94-82.78 267.38-79.17 243.58C-79.05 242.76-78.92 241.95-78.79 241.11C-78.57 239.65-78.36 238.19-78.16 236.73C-77.02 229.05-73.87 223.07-68 218C-67.46 217.53-66.92 217.06-66.36 216.57C-58.95 210.55-50.04 206.88-41 204C-60.62 159.98-108.32 186.55-127.15 213.28C-143.48 236.32-143.48 236.32-159 236C-159.04 234.89-159.07 233.77-159.11 232.62C-161.12 182.68-191.54 157.59-238.59 148.74C-242.58 147.87-246.22 146.57-250.02 145.09C-253.65 143.76-257.34 142.69-261.06 141.62C-267.27 139.84-273.43 137.92-279.56 135.88C-280.29 135.63-281.01 135.39-281.76 135.14C-285.77 133.79-289.74 132.37-293.69 130.88C-296.52 129.8-299.37 128.75-302.21 127.69C-318.66 121.53-334.9 115.02-351 108C-351.91 107.61-352.82 107.21-353.76 106.81C-366.15 101.43-378.14 95.46-390 89C-391.16 88.37-391.16 88.37-392.35 87.73C-406.56 80.05-419.97 71.79-432.76 61.9C-433.4 61.41-434.04 60.91-434.7 60.41C-435.26 59.97-435.83 59.53-436.41 59.07C-443.92 54-442.16 64.43-442.17 69.8Z%22 fill%3D%22%23740000%22 transform%3D%22translate(480,0)%22/%3E%3Cpath d%3D%22M0 0C11.05 8.23 22.39 15.57 34.38 22.38C35.75 23.16 35.75 23.16 37.15 23.96C59.67 36.68 83.02 47.2 107 56.82C108.25 57.32 108.25 57.32 109.52 57.84C119.01 61.64 128.52 65.18 138.24 68.35C142.95 69.89 147.56 71.59 152.14 73.48C156.26 75.14 160.47 76.5 164.69 77.88C165.6 78.18 166.51 78.49 167.45 78.8C173.51 80.79 179.58 82.72 185.68 84.56C187.52 85.12 189.33 85.73 191.14 86.38C194.48 87.42 197.76 88.06 201.2 88.68C228.83 93.64 254.92 106.96 267.38 133.38C267.77 134.19 268.16 135.01 268.56 135.84C273.9 147.93 273.82 161.39 274.38 174.38C290.65 174.79 297.66 163.56 306.38 151.24C329.01 119.55 363.55 105.2 392.38 140.38C392.38 143.76 389.49 143.61 386.56 144.63C368.29 151.39 357.86 159.26 354.74 179.04C352.55 192.94 350.34 206.86 346.38 220.38C345.99 221.71 345.99 221.71 345.6 223.06C339.72 242.79 331.82 261.56 318.38 277.38C317.6 278.32 316.82 279.26 316.02 280.23C298.33 300.7 272.86 311.6 246.03 311.73C244.86 311.74 243.69 311.76 242.48 311.77C238.76 311.82 235.04 311.85 231.31 311.88C217.11 312.01 202.96 312.17 188.79 313.3C187.81 313.38 186.83 313.46 185.81 313.54C159.26 315.85 134.7 322.42 114.38 340.38C113.17 341.43 113.17 341.43 111.93 342.5C99.29 353.64 88.62 365.29 79.38 379.38C49.67 370.67 25.71 325.88 44.38 297.38C46.5 296.47 46.5 296.47 49.15 295.89C50.13 295.66 51.11 295.44 52.12 295.2C53.17 294.97 54.23 294.74 55.31 294.51C57.52 293.99 59.73 293.47 61.94 292.94C63.03 292.68 64.13 292.42 65.26 292.15C72.76 290.3 80.07 287.87 87.38 285.38C88.33 285.06 89.28 284.74 90.27 284.4C119.05 274.58 145.46 262.34 169.38 243.38C170.33 242.65 171.28 241.92 172.26 241.16C176.25 238.02 176.25 238.02 171.62 236.67C165.66 235.34 160.14 233.12 154.5 230.82C153.4 230.37 152.3 229.93 151.17 229.47C116.17 215.12 83.75 195.64 56.38 169.38C55.76 168.8 55.14 168.22 54.51 167.61C44.35 157.96 35.45 147.84 27.38 136.38C26.96 135.8 26.55 135.21 26.12 134.61C2.53 100.74-8.86 61.38-8.76 20.37C-8.75 17.93-8.76 15.48-8.76 13.03C-8.76 11.46-8.76 9.89-8.76 8.32C-8.76 7.6-8.76 6.88-8.76 6.13C-8.72-3.64-8.21-6.21 0 0Z%22 fill%3D%22%23FFF%22 transform%3D%22translate(46.625,61.617)%22/%3E%3Cpath d%3D%22M0 0C-2.39 9.08-4.28 18.21-5.99 27.45C-6.2 28.61-6.42 29.76-6.64 30.95C-8.4 40.64-9.46 49.83-9.47 59.68C-9.47 60.74-9.48 61.81-9.48 62.9C-9.48 65.15-9.49 67.4-9.49 69.65C-9.49 73.04-9.51 76.44-9.53 79.84C-9.55 90.92-9.34 101.53-7.3 112.45C-6.96 114.62-6.63 116.79-6.29 118.96C-4 132.8-0.99 146.1 3.2 159.48C3.53 160.58 3.87 161.68 4.22 162.82C4.53 163.79 4.84 164.76 5.16 165.76C6.39 171.89 3.47 175.68-0.05 180.45C-0.48 181.05-0.91 181.66-1.36 182.28C-4.07 186.01-6.95 189.27-10.3 192.45C-10.33 191.26-10.35 190.08-10.38 188.86C-11.82 142.61-41.32 118.05-84.3 108.45C-83.37 95.2-79.39 83.17-73.3 71.45C-72.97 70.82-72.65 70.19-72.31 69.54C-64.33 54.29-54.17 41.83-42.3 29.45C-41.59 28.7-40.88 27.95-40.15 27.17C-32.68 19.46-24.16 13.01-15.55 6.64C-14.63 5.95-14.63 5.95-13.69 5.25C1.63-5.95 1.63-5.95 0 0Z%22 fill%3D%22%23FFF%22 transform%3D%22translate(341.3,26.55)%22/%3E%3C/svg%3E";
  (() => {
    try {
      const instance = () => { try { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "red" : "light"; } catch { return "light"; } };
      function draw() {
        const instance_ = instance(),
              background = document.hidden || !document.hasFocus();
        if (instance_ === "light") {
          link_TABIMAGE.href = background ? link_TABIMAGE_lightBack : link_TABIMAGE_lightShow;
        } else {
          link_TABIMAGE.href = background ? link_TABIMAGE_lightShow : link_TABIMAGE_redShow;
        }
      }
      ["visibilitychange", "focus", "blur"].forEach(event => (event==="visibilitychange" ? document : window).addEventListener(event, draw));
    }
    catch {
      if (!link_TABIMAGE.href || (!link_TABIMAGE.href.endsWith(".png") && !link_TABIMAGE.href.endsWith(".svg"))) {
        link_TABIMAGE.setAttribute("type", "image/png");
        link_TABIMAGE.href = "Write/TABIMAGE_.png";
      }
    }
  })();






///////////////////////////////////////////////////////////////////////
//                       Translation
///////////////////////////////////////////////////////////////////////
  const STRINGS_index_NAME = {
    Genesis: {
      English: "Genesis",
      Cymraeg: "Genesis",
      Norsk: "Genesis",
      Deutsch: "Genesis",
      Français: "Genèse",
      Русский: "Бытие",
      Suomi: "Genesis",
      Íslenska: "Genesis",
      عربي: "التكوين"
    },
    Exodus: {
      English: "Exodus",
      Cymraeg: "Exodus",
      Norsk: "Exodus",
      Deutsch: "Exodus",
      Français: "Exode",
      Русский: "Исход",
      Suomi: "Exodus",
      Íslenska: "Exodus",
      عربي: "الخروج"
    },
    Leviticus: {
      English: "Leviticus",
      Cymraeg: "Lefiticus",
      Norsk: "Leviticus",
      Deutsch: "Levitikus",
      Français: "Lévitique",
      Русский: "Левит",
      Suomi: "Leviticus",
      Íslenska: "Leviticus",
      عربي: "اللاويين"
    },
    Numbers: {
      English: "Numbers",
      Cymraeg: "Numeri",
      Norsk: "Numeri",
      Deutsch: "Numeri",
      Français: "Nombres",
      Русский: "Числа",
      Suomi: "Numeri",
      Íslenska: "Numeri",
      عربي: "الأعداد"
    },
    Deuteronomy: {
      English: "Deuteronomy",
      Cymraeg: "Deuteronomium",
      Norsk: "Deuteronomium",
      Deutsch: "Deuteronomium",
      Français: "Deutéronome",
      Русский: "Второзаконие",
      Suomi: "Deuteronomium",
      Íslenska: "Deuteronomium",
      عربي: "التثنية"
    },
    Joshua: {
      English: "Joshua",
      Cymraeg: "Josua",
      Norsk: "Josva",
      Deutsch: "Josua",
      Français: "Josué",
      Русский: "Иошуа",
      Suomi: "Joosua",
      Íslenska: "Jósúa",
      عربي: "يشوع"
    },
    Judges: {
      English: "Judges",
      Cymraeg: "Barnwyr",
      Norsk: "Dommerne",
      Deutsch: "Richter",
      Français: "Juges",
      Русский: "Судьи",
      Suomi: "Tuomarien",
      Íslenska: "Dómarar",
      عربي: "القضاة"
    },
    Ruth: {
      English: "Ruth",
      Cymraeg: "Ruth",
      Norsk: "Rut",
      Deutsch: "Ruth",
      Français: "Ruth",
      Русский: "Руфь",
      Suomi: "Ruut",
      Íslenska: "Rut",
      عربي: "راعوث"
    },
    Samuel: {
      English: "Samuel",
      Cymraeg: "Samuel",
      Norsk: "Samuel",
      Deutsch: "Samuel",
      Français: "Samuel",
      Русский: "Самуил",
      Suomi: "Samuel",
      Íslenska: "Samúel",
      عربي: "صموئيل"
    },
    Samuel2: {
      English: "Samuel 2",
      Cymraeg: "Samuel 2",
      Norsk: "Samuel 2",
      Deutsch: "Samuel 2",
      Français: "Samuel 2",
      Русский: "Самуил 2",
      Suomi: "Samuel 2",
      Íslenska: "Samúel 2",
      عربي: "صموئيل 2"
    },
    Kings: {
      English: "Kings",
      Cymraeg: "Brenhinoedd",
      Norsk: "Kongebøkene",
      Deutsch: "Könige",
      Français: "Rois",
      Русский: "Царств",
      Suomi: "Kuninkaiden",
      Íslenska: "Konungar",
      عربي: "الملوك"
    },
    Kings2: {
      English: "Kings 2",
      Cymraeg: "Brenhinoedd 2",
      Norsk: "Kongebøkene 2",
      Deutsch: "Könige 2",
      Français: "Rois 2",
      Русский: "Царств 2",
      Suomi: "Kuninkaiden 2",
      Íslenska: "Konungar 2",
      عربي: "الملوك 2"
    },
    Chronicles: {
      English: "Chronicles",
      Cymraeg: "Chronicl",
      Norsk: "Krønikebøkene",
      Deutsch: "Chronik",
      Français: "Chroniques",
      Русский: "Летописи",
      Suomi: "Aikakirja",
      Íslenska: "Kroníkur",
      عربي: "أخبار الأيام"
    },
    Chronicles2: {
      English: "Chronicles 2",
      Cymraeg: "Chronicl 2",
      Norsk: "Krønikebøkene 2",
      Deutsch: "Chronik 2",
      Français: "Chroniques 2",
      Русский: "Летописи 2",
      Suomi: "Aikakirja 2",
      Íslenska: "Kroníkur 2",
      عربي: "أخبار الأيام 2"
    },
    Ezra: {
      English: "Ezra",
      Cymraeg: "Ezra",
      Norsk: "Esra",
      Deutsch: "Esra",
      Français: "Ezra",
      Русский: "Ездра",
      Suomi: "Esra",
      Íslenska: "Esra",
      عربي: "عزرا"
    },
    Nehemiah: {
      English: "Nehemiah",
      Cymraeg: "Nehemiah",
      Norsk: "Nehemja",
      Deutsch: "Nehemia",
      Français: "Néhémie",
      Русский: "Неемия",
      Suomi: "Nehemia",
      Íslenska: "Nehemía",
      عربي: "نحميا"
    },
    Esther: {
      English: "Esther",
      Cymraeg: "Esther",
      Norsk: "Ester",
      Deutsch: "Esther",
      Français: "Esther",
      Русский: "Есфирь",
      Suomi: "Ester",
      Íslenska: "Ester",
      عربي: "أستير"
    },
    Job: {
      English: "Job",
      Cymraeg: "Job",
      Norsk: "Job",
      Deutsch: "Hiob",
      Français: "Job",
      Русский: "Иов",
      Suomi: "Job",
      Íslenska: "Job",
      عربي: "أيوب"
    },
    Psalms: {
      English: "Psalms",
      Cymraeg: "Psalmau",
      Norsk: "Salmene",
      Deutsch: "Psalmen",
      Français: "Psaumes",
      Русский: "Псалмы",
      Suomi: "Psalmit",
      Íslenska: "Sálmar",
      عربي: "المزامير"
    },
    Proverbs: {
      English: "Proverbs",
      Cymraeg: "Diarhebion",
      Norsk: "Ordspråk",
      Deutsch: "Sprüche",
      Français: "Proverbes",
      Русский: "Притчи",
      Suomi: "Sananlaskut",
      Íslenska: "Orðskviðir",
      عربي: "الأمثال"
    },
    Ecclesiastes: {
      English: "Ecclesiastes",
      Cymraeg: "Pregethwr",
      Norsk: "Forkynneren",
      Deutsch: "Prediger",
      Français: "Ecclésiaste",
      Русский: "Екклесиаст",
      Suomi: "Saarnaaja",
      Íslenska: "Prédikarinn",
      عربي: "الجامعة"
    },
    SongofSolomon: {
      English: "Song of Solomon",
      Cymraeg: "Caniad Solomon",
      Norsk: "Salomos Sang",
      Deutsch: "Hohelied Salomos",
      Français: "Cantique de Salomon",
      Русский: "Песнь Соломона",
      Suomi: "Salomon Veisu",
      Íslenska: "Söngur Salómons",
      عربي: "نشيد سليمان"
    },
    Isaiah: {
      English: "Isaiah",
      Cymraeg: "Esaiah",
      Norsk: "Jesaja",
      Deutsch: "Isaias",
      Français: "Ésaïe",
      Русский: "Исаия",
      Suomi: "Jesaja",
      Íslenska: "Jesaja",
      عربي: "إشعياء"
    },
    Jeremiah: {
      English: "Jeremiah",
      Cymraeg: "Jeremiah",
      Norsk: "Jeremia",
      Deutsch: "Jeremias",
      Français: "Jérémie",
      Русский: "Иеремия",
      Suomi: "Jeremia",
      Íslenska: "Jeremía",
      عربي: "إرميا"
    },
    Lamentations: {
      English: "Lamentations",
      Cymraeg: "Galarnad",
      Norsk: "Klagesangene",
      Deutsch: "Klagelieder",
      Français: "Lamentations",
      Русский: "Плач",
      Suomi: "Valitusvirret",
      Íslenska: "Harmar",
      عربي: "مراثي"
    },
    Ezekiel: {
      English: "Ezekiel",
      Cymraeg: "Ezeciel",
      Norsk: "Esekiel",
      Deutsch: "Hesekiel",
      Français: "Ézéchiel",
      Русский: "Иезекииль",
      Suomi: "Hesekiel",
      Íslenska: "Esekíel",
      عربي: "حزقيال"
    },
    Daniel: {
      English: "Daniel",
      Cymraeg: "Daniel",
      Norsk: "Daniel",
      Deutsch: "Daniel",
      Français: "Daniel",
      Русский: "Даниил",
      Suomi: "Daniel",
      Íslenska: "Daníel",
      عربي: "دانيال"
    },
    Hosea: {
      English: "Hosea",
      Cymraeg: "Hosea",
      Norsk: "Hosea",
      Deutsch: "Hoschea",
      Français: "Osée",
      Русский: "Осия",
      Suomi: "Hoosea",
      Íslenska: "Hósea",
      عربي: "هوشع"
    },
    Joel: {
      English: "Joel",
      Cymraeg: "Joel",
      Norsk: "Joel",
      Deutsch: "Joel",
      Français: "Joël",
      Русский: "Иоиль",
      Suomi: "Joel",
      Íslenska: "Jóel",
      عربي: "يوئيل"
    },
    Amos: {
      English: "Amos",
      Cymraeg: "Amos",
      Norsk: "Amos",
      Deutsch: "Amos",
      Français: "Amos",
      Русский: "Амос",
      Suomi: "Aamos",
      Íslenska: "Amos",
      عربي: "عاموس"
    },
    Obadiah: {
      English: "Obadiah",
      Cymraeg: "Obadiah",
      Norsk: "Obadja",
      Deutsch: "Obadja",
      Français: "Obadia",
      Русский: "Овадия",
      Suomi: "Obadja",
      Íslenska: "Óbadía",
      عربي: "عوبديا"
    },
    Jonah: {
      English: "Jonah",
      Cymraeg: "Jonah",
      Norsk: "Jona",
      Deutsch: "Jona",
      Français: "Jonas",
      Русский: "Иона",
      Suomi: "Joona",
      Íslenska: "Jónas",
      عربي: "يونس"
    },
    Micah: {
      English: "Micah",
      Cymraeg: "Micha",
      Norsk: "Mika",
      Deutsch: "Micha",
      Français: "Micah",
      Русский: "Михей",
      Suomi: "Miika",
      Íslenska: "Míka",
      عربي: "ميخا"
    },
    Nahum: {
      English: "Nahum",
      Cymraeg: "Nahum",
      Norsk: "Nahum",
      Deutsch: "Nahum",
      Français: "Nahum",
      Русский: "Наум",
      Suomi: "Nahum",
      Íslenska: "Nahúm",
      عربي: "ناحوم"
    },
    Habakkuk: {
      English: "Habakkuk",
      Cymraeg: "Habacuc",
      Norsk: "Habakkuk",
      Deutsch: "Habakuk",
      Français: "Habaquq",
      Русский: "Аввакум",
      Suomi: "Habakuk",
      Íslenska: "Habakkuk",
      عربي: "حبقوق"
    },
    Zephaniah: {
      English: "Zephaniah",
      Cymraeg: "Sephaniah",
      Norsk: "Sefanja",
      Deutsch: "Zephania",
      Français: "Sophonie",
      Русский: "Софония",
      Suomi: "Sefanja",
      Íslenska: "Sefanía",
      عربي: "صفنيا"
    },
    Haggai: {
      English: "Haggai",
      Cymraeg: "Haggai",
      Norsk: "Haggai",
      Deutsch: "Haggai",
      Français: "Aggée",
      Русский: "Аггей",
      Suomi: "Haggai",
      Íslenska: "Haggaí",
      عربي: "حجاي"
    },
    Zechariah: {
      English: "Zechariah",
      Cymraeg: "Zechariah",
      Norsk: "Sakarja",
      Deutsch: "Secharja",
      Français: "Zacharie",
      Русский: "Захария",
      Suomi: "Sakarja",
      Íslenska: "Sakaría",
      عربي: "زكريا"
    },
    Malachi: {
      English: "Malachi",
      Cymraeg: "Malachi",
      Norsk: "Malaki",
      Deutsch: "Maleachi",
      Français: "Malachie",
      Русский: "Малахия",
      Suomi: "Malakia",
      Íslenska: "Malakí",
      عربي: "ملاخي"
    },
    Matthew: {
      English: "Matthew",
      Cymraeg: "Matthew",
      Norsk: "Matteus",
      Deutsch: "Matthäus",
      Français: "Matthieu",
      Русский: "Матфей",
      Suomi: "Matteus",
      Íslenska: "Matteus",
      عربي: "متى"
    },
    Mark: {
      English: "Mark",
      Cymraeg: "Marc",
      Norsk: "Markus",
      Deutsch: "Markus",
      Français: "Marc",
      Русский: "Марк",
      Suomi: "Markus",
      Íslenska: "Markús",
      عربي: "مرقس"
    },
    Luke: {
      English: "Luke",
      Cymraeg: "Luc",
      Norsk: "Lukas",
      Deutsch: "Lukas",
      Français: "Luc",
      Русский: "Лука",
      Suomi: "Luukas",
      Íslenska: "Lúkas",
      عربي: "لوقا"
    },
    John: {
      English: "John",
      Cymraeg: "Ioan",
      Norsk: "Johannes",
      Deutsch: "Johannes",
      Français: "Jean",
      Русский: "Иоанн",
      Suomi: "Johannes",
      Íslenska: "Jóhannes",
      عربي: "يوحنا"
    },
    Acts: {
      English: "Acts",
      Cymraeg: "Actau",
      Norsk: "Gjerninger",
      Deutsch: "Taten",
      Français: "Actes",
      Русский: "Деяния",
      Suomi: "Teot",
      Íslenska: "Gjörðirnar",
      عربي: "أعمال"
    },
    Romans: {
      English: "Romans",
      Cymraeg: "Rhufeiniaid",
      Norsk: "Romerne",
      Deutsch: "Römer",
      Français: "Romains",
      Русский: "Римлянам",
      Suomi: "Roomalaisille",
      Íslenska: "Rómverjar",
      عربي: "رومية"
    },
    Corinthians: {
      English: "Corinthians",
      Cymraeg: "Corinthiaid",
      Norsk: "Korinterne",
      Deutsch: "Korinther",
      Français: "Corinthiens",
      Русский: "Коринфянам",
      Suomi: "Korinttilaisille",
      Íslenska: "Korintubúar",
      عربي: "كورنثيون"
    },
    Corinthians2: {
      English: "Corinthians 2",
      Cymraeg: "Corinthiaid 2",
      Norsk: "Korinterne 2",
      Deutsch: "Korinther 2",
      Français: "Corinthiens 2",
      Русский: "Коринфянам 2",
      Suomi: "Korinttilaisille 2",
      Íslenska: "Korintubúar 2",
      عربي: "كورنثيون 2"
    },
    Galatians: {
      English: "Galatians",
      Cymraeg: "Galatiaid",
      Norsk: "Galaterne",
      Deutsch: "Galater",
      Français: "Galates",
      Русский: "Галатам",
      Suomi: "Galatalaisille",
      Íslenska: "Galatabúar",
      عربي: "غلاطيون"
    },
    Ephesians: {
      English: "Ephesians",
      Cymraeg: "Ephesiaid",
      Norsk: "Efeserne",
      Deutsch: "Epheser",
      Français: "Éphésiens",
      Русский: "Ефесянам",
      Suomi: "Efesolaisille",
      Íslenska: "Efesusbúar",
      عربي: "أفسسيون"
    },
    Philippians: {
      English: "Philippians",
      Cymraeg: "Philippiaid",
      Norsk: "Filipperne",
      Deutsch: "Philipper",
      Français: "Philippiens",
      Русский: "Филиппийцам",
      Suomi: "Filippiläisille",
      Íslenska: "Filippíbúar",
      عربي: "فيلبيون"
    },
    Colossians: {
      English: "Colossians",
      Cymraeg: "Colossiaid",
      Norsk: "Kolosserne",
      Deutsch: "Kolosser",
      Français: "Colossiens",
      Русский: "Колоссянам",
      Suomi: "Kolossalaisille",
      Íslenska: "Kólossubúar",
      عربي: "كولوسيون"
    },
    Thessalonians: {
      English: "Thessalonians",
      Cymraeg: "Thessaloniaid",
      Norsk: "Tessalonikerne",
      Deutsch: "Thessalonicher",
      Français: "Thessaloniciens",
      Русский: "Фессалоникийцам",
      Suomi: "Tessalonikalaisille",
      Íslenska: "Þessaloníkubúar",
      عربي: "تسالونيكيون"
    },
    Thessalonians2: {
      English: "Thessalonians 2",
      Cymraeg: "Thessaloniaid 2",
      Norsk: "Tessalonikerne 2",
      Deutsch: "Thessalonicher 2",
      Français: "Thessaloniciens 2",
      Русский: "Фессалоникийцам 2",
      Suomi: "Tessalonikalaisille 2",
      Íslenska: "Þessaloníkubúar 2",
      عربي: "تسالونيكيون 2"
    },
    Timothy: {
      English: "Timothy",
      Cymraeg: "Timotheus",
      Norsk: "Timoteus",
      Deutsch: "Timotheus",
      Français: "Timothée",
      Русский: "Тимофей",
      Suomi: "Timoteus",
      Íslenska: "Tímóteus",
      عربي: "تيموثاوس"
    },
    Timothy2: {
      English: "Timothy 2",
      Cymraeg: "Timotheus 2",
      Norsk: "Timoteus 2",
      Deutsch: "Timotheus 2",
      Français: "Timothée 2",
      Русский: "Тимофей 2",
      Suomi: "Timoteus 2",
      Íslenska: "Tímóteus 2",
      عربي: "تيموثاوس 2"
    },
    Titus: {
      English: "Titus",
      Cymraeg: "Titus",
      Norsk: "Titus",
      Deutsch: "Titus",
      Français: "Tite",
      Русский: "Тит",
      Suomi: "Titus",
      Íslenska: "Titusar",
      عربي: "تيطس"
    },
    Philemon: {
      English: "Philemon",
      Cymraeg: "Philemon",
      Norsk: "Filemon",
      Deutsch: "Philemon",
      Français: "Philémon",
      Русский: "Филимон",
      Suomi: "Filemon",
      Íslenska: "Fílemon",
      عربي: "فليمون"
    },
    Hebrews: {
      English: "Hebrews",
      Cymraeg: "Hebreaid",
      Norsk: "Hebreerne",
      Deutsch: "Hebräer",
      Français: "Hébreux",
      Русский: "Евреям",
      Suomi: "Heprealaisille",
      Íslenska: "Hebrear",
      عربي: "عبرانيين"
    },
    James: {
      English: "James",
      Cymraeg: "Iago",
      Norsk: "Jakob",
      Deutsch: "Jakobus",
      Français: "Jacques",
      Русский: "Иаков",
      Suomi: "Jaakob",
      Íslenska: "Jakob",
      عربي: "يعقوب"
    },
    Peter: {
      English: "Peter",
      Cymraeg: "Petr",
      Norsk: "Peter",
      Deutsch: "Petrus",
      Français: "Pierre",
      Русский: "Пётр",
      Suomi: "Pietar",
      Íslenska: "Pétur",
      عربي: "بطرس"
    },
    Peter2: {
      English: "Peter 2",
      Cymraeg: "Petr 2",
      Norsk: "Peter 2",
      Deutsch: "Petrus 2",
      Français: "Pierre 2",
      Русский: "Пётр 2",
      Suomi: "Pietar 2",
      Íslenska: "Pétur 2",
      عربي: "بطرس 2"
    },
    FirstEpistleofJohn: {
      English: "<p><i>THE</i></p>First Epistle of<br>John",
      Cymraeg: "Epistol Cyntaf Ioan",
      Norsk: "Første Johannesbrev",
      Deutsch: "Erster Brief des Johannes",
      Français: "Première épître de Jean",
      Русский: "Первое послание Иоанна",
      Suomi: "Ensimmäinen Johanneksen kirje",
      Íslenska: "Fyrsta bréf Jóhannesar",
      عربي: "رسالة يوحنا الأولى"
    },
    SecondEpistleofJohn: {
      English: "<p><i>THE</i></p>Second Epistle of<br>John",
      Cymraeg: "Ail Epistol Ioan",
      Norsk: "Andre Johannesbrev",
      Deutsch: "Zweiter Brief des Johannes",
      Français: "Deuxième épître de Jean",
      Русский: "Второе послание Иоанна",
      Suomi: "Toinen Johanneksen kirje",
      Íslenska: "Annað bréf Jóhannesar",
      عربي: "رسالة يوحنا الثانية"
    },
    ThirdEpistleofJohn: {
      English: "<p><i>THE</i></p>Third Epistle of<br>John",
      Cymraeg: "Trydydd Epistol Ioan",
      Norsk: "Tredje Johannesbrev",
      Deutsch: "Dritter Brief des Johannes",
      Français: "Troisième épître de Jean",
      Русский: "Третье послание Иоанна",
      Suomi: "Kolmas Johanneksen kirje",
      Íslenska: "Þriðja bréf Jóhannesar",
      عربي: "رسالة يوحنا الثالثة"
    },
    Jude: {
      English: "Jude",
      Cymraeg: "Judas",
      Norsk: "Judas",
      Deutsch: "Judas",
      Français: "Jude",
      Русский: "Иуда",
      Suomi: "Juudas",
      Íslenska: "Júdas",
      عربي: "يهوذا"
    },
    Revelation: {
      English: "<p><i><b>The Book</b> of</i><br></p>Revelation",
      Cymraeg: "Datguddiad",
      Norsk: "Åpenbaring",
      Deutsch: "Offenbarung",
      Français: "Révélation",
      Русский: "Откровение",
      Suomi: "Ilmestys",
      Íslenska: "Opinberun",
      عربي: "وَحْي"
    }
  };

  const STRINGS_index_NAME_SHORT = {
    FirstEpistleofJohn: {
      English: "First Epistle of John",
    },
    SecondEpistleofJohn: {
      English: "Second Epistle of John",
    },
    ThirdEpistleofJohn: {
      English: "Third Epsitle of John",
    },
    Revelation: {
      English: "Revelation",
    }
  };

  const STRINGS_index_BOOK_NAMEPATH = {
    Genesis: {
        English: ["Genesis", "another name for genesis"],
        Cymraeg: ["Genesis", ""],
        Norsk: ["Genesis", ""],
        Deutsch: ["Genesis", ""],
        Français: ["Genèse", ""],
        Русский: ["Бытие", ""],
        Suomi: ["Genesis", ""],
        Íslenska: ["Genesis", ""],
        عربي: ["التكوين", ""]
    },
    Exodus: {
        English: ["Exodus", ""],
        Cymraeg: ["Exodus", ""],
        Norsk: ["Exodus", ""],
        Deutsch: ["Exodus", ""],
        Français: ["Exode", ""],
        Русский: ["Исход", ""],
        Suomi: ["Exodus", ""],
        Íslenska: ["Exodus", ""],
        عربي: ["الخروج", ""]
    },
    Leviticus: {
        English: ["Leviticus", ""],
        Cymraeg: ["Lefiticus", ""],
        Norsk: ["Leviticus", ""],
        Deutsch: ["Levitikus", ""],
        Français: ["Lévitique", ""],
        Русский: ["Левит", ""],
        Suomi: ["Leviticus", ""],
        Íslenska: ["Leviticus", ""],
        عربي: ["اللاويين", ""]
    },
    Numbers: {
        English: ["Numbers", ""],
        Cymraeg: ["Numeri", ""],
        Norsk: ["Numeri", ""],
        Deutsch: ["Numeri", ""],
        Français: ["Nombres", ""],
        Русский: ["Числа", ""],
        Suomi: ["Numeri", ""],
        Íslenska: ["Numeri", ""],
        عربي: ["الأعداد", ""]
    },
    Deuteronomy: {
        English: ["Deuteronomy", ""],
        Cymraeg: ["Deuteronomium", ""],
        Norsk: ["Deuteronomium", ""],
        Deutsch: ["Deuteronomium", ""],
        Français: ["Deutéronome", ""],
        Русский: ["Второзаконие", ""],
        Suomi: ["Deuteronomium", ""],
        Íslenska: ["Deuteronomium", ""],
        عربي: ["التثنية", ""]
    },
    Joshua: {
        English: ["Joshua", ""],
        Cymraeg: ["Josua", ""],
        Norsk: ["Josva", ""],
        Deutsch: ["Josua", ""],
        Français: ["Josué", ""],
        Русский: ["Иошуа", ""],
        Suomi: ["Joosua", ""],
        Íslenska: ["Jósúa", ""],
        عربي: ["يشوع", ""]
    },
    Judges: {
        English: ["Judges", ""],
        Cymraeg: ["Barnwyr", ""],
        Norsk: ["Dommerne", ""],
        Deutsch: ["Richter", ""],
        Français: ["Juges", ""],
        Русский: ["Судьи", ""],
        Suomi: ["Tuomarien", ""],
        Íslenska: ["Dómarar", ""],
        عربي: ["القضاة", ""]
    },
    Ruth: {
        English: ["Ruth", ""],
        Cymraeg: ["Ruth", ""],
        Norsk: ["Rut", ""],
        Deutsch: ["Ruth", ""],
        Français: ["Ruth", ""],
        Русский: ["Руфь", ""],
        Suomi: ["Ruut", ""],
        Íslenska: ["Rut", ""],
        عربي: ["راعوث", ""]
    },
    Samuel: {
        English: ["Samuel", ""],
        Cymraeg: ["Samuel", ""],
        Norsk: ["Samuel", ""],
        Deutsch: ["Samuel", ""],
        Français: ["Samuel", ""],
        Русский: ["Самуил", ""],
        Suomi: ["Samuel", ""],
        Íslenska: ["Samúel", ""],
        عربي: ["صموئيل", ""]
    },
    Samuel2: {
        English: ["Samuel2", ""],
        Cymraeg: ["Samuel2", ""],
        Norsk: ["Samuel2", ""],
        Deutsch: ["Samuel2", ""],
        Français: ["Samuel2", ""],
        Русский: ["Самуил2", ""],
        Suomi: ["Samuel2", ""],
        Íslenska: ["Samúel2", ""],
        عربي: ["صموئيل2", ""]
    },
    Kings: {
        English: ["Kings", ""],
        Cymraeg: ["Brenhinoedd", ""],
        Norsk: ["Kongebøkene", ""],
        Deutsch: ["Könige", ""],
        Français: ["Rois", ""],
        Русский: ["Царств", ""],
        Suomi: ["Kuninkaiden", ""],
        Íslenska: ["Konungar", ""],
        عربي: ["الملوك", ""]
    },
    Kings2: {
        English: ["Kings2", ""],
        Cymraeg: ["Brenhinoedd2", ""],
        Norsk: ["Kongebøkene2", ""],
        Deutsch: ["Könige2", ""],
        Français: ["Rois2", ""],
        Русский: ["Царств2", ""],
        Suomi: ["Kuninkaiden2", ""],
        Íslenska: ["Konungar2", ""],
        عربي: ["الملوك2", ""]
    },
    Chronicles: {
        English: ["Chronicles", ""],
        Cymraeg: ["Chronicl", ""],
        Norsk: ["Krønikebøkene", ""],
        Deutsch: ["Chronik", ""],
        Français: ["Chroniques", ""],
        Русский: ["Летописи", ""],
        Suomi: ["Aikakirja", ""],
        Íslenska: ["Kroníkur", ""],
        عربي: ["أخبارالأيام", ""]
    },
    Chronicles2: {
        English: ["Chronicles2", ""],
        Cymraeg: ["Chronicl2", ""],
        Norsk: ["Krønikebøkene2", ""],
        Deutsch: ["Chronik2", ""],
        Français: ["Chroniques2", ""],
        Русский: ["Летописи2", ""],
        Suomi: ["Aikakirja2", ""],
        Íslenska: ["Kroníkur2", ""],
        عربي: ["أخبارالأيام2", ""]
    },
    Ezra: {
        English: ["Ezra", ""],
        Cymraeg: ["Ezra", ""],
        Norsk: ["Esra", ""],
        Deutsch: ["Esra", ""],
        Français: ["Ezra", ""],
        Русский: ["Ездра", ""],
        Suomi: ["Esra", ""],
        Íslenska: ["Esra", ""],
        عربي: ["عزرا", ""]
    },
    Nehemiah: {
        English: ["Nehemiah", ""],
        Cymraeg: ["Nehemiah", ""],
        Norsk: ["Nehemja", ""],
        Deutsch: ["Nehemia", ""],
        Français: ["Néhémie", ""],
        Русский: ["Неемия", ""],
        Suomi: ["Nehemia", ""],
        Íslenska: ["Nehemía", ""],
        عربي: ["نحميا", ""]
    },
    Esther: {
        English: ["Esther", ""],
        Cymraeg: ["Esther", ""],
        Norsk: ["Ester", ""],
        Deutsch: ["Esther", ""],
        Français: ["Esther", ""],
        Русский: ["Есфирь", ""],
        Suomi: ["Ester", ""],
        Íslenska: ["Ester", ""],
        عربي: ["أستير", ""]
    },
    Job: {
        English: ["Job", ""],
        Cymraeg: ["Job", ""],
        Norsk: ["Job", ""],
        Deutsch: ["Hiob", ""],
        Français: ["Job", ""],
        Русский: ["Иов", ""],
        Suomi: ["Job", ""],
        Íslenska: ["Job", ""],
        عربي: ["أيوب", ""]
    },
    Psalms: {
        English: ["Psalms", ""],
        Cymraeg: ["Psalmau", ""],
        Norsk: ["Salmene", ""],
        Deutsch: ["Psalmen", ""],
        Français: ["Psaumes", ""],
        Русский: ["Псалмы", ""],
        Suomi: ["Psalmit", ""],
        Íslenska: ["Sálmar", ""],
        عربي: ["المزامير", ""]
    },
    Proverbs: {
        English: ["Proverbs", ""],
        Cymraeg: ["Diarhebion", ""],
        Norsk: ["Ordspråk", ""],
        Deutsch: ["Sprüche", ""],
        Français: ["Proverbes", ""],
        Русский: ["Притчи", ""],
        Suomi: ["Sananlaskut", ""],
        Íslenska: ["Orðskviðir", ""],
        عربي: ["الأمثال", ""]
    },
    Ecclesiastes: {
        English: ["Ecclesiastes", ""],
        Cymraeg: ["Pregethwr", ""],
        Norsk: ["Forkynneren", ""],
        Deutsch: ["Prediger", ""],
        Français: ["Ecclésiaste", ""],
        Русский: ["Екклесиаст", ""],
        Suomi: ["Saarnaaja", ""],
        Íslenska: ["Prédikarinn", ""],
        عربي: ["الجامعة", ""]
    },
    SongofSolomon: {
        English: ["SongofSolomon", ""],
        Cymraeg: ["CaniadSolomon", ""],
        Norsk: ["SalomosSang", ""],
        Deutsch: ["HoheliedSalomos", ""],
        Français: ["CantiquedeSalomon", ""],
        Русский: ["ПесньСоломона", ""],
        Suomi: ["SalomonVeisu", ""],
        Íslenska: ["SöngurSalómons", ""],
        عربي: ["نشيدسليمان", ""]
    },
    Isaiah: {
        English: ["Isaiah", ""],
        Cymraeg: ["Esaiah", ""],
        Norsk: ["Jesaja", ""],
        Deutsch: ["Isaias", ""],
        Français: ["Ésaïe", ""],
        Русский: ["Исаия", ""],
        Suomi: ["Jesaja", ""],
        Íslenska: ["Jesaja", ""],
        عربي: ["إشعياء", ""]
    },
    Jeremiah: {
        English: ["Jeremiah", ""],
        Cymraeg: ["Jeremiah", ""],
        Norsk: ["Jeremia", ""],
        Deutsch: ["Jeremias", ""],
        Français: ["Jérémie", ""],
        Русский: ["Иеремия", ""],
        Suomi: ["Jeremia", ""],
        Íslenska: ["Jeremía", ""],
        عربي: ["إرميا", ""]
    },
    Lamentations: {
        English: ["Lamentations", ""],
        Cymraeg: ["Galarnad", ""],
        Norsk: ["Klagesangene", ""],
        Deutsch: ["Klagelieder", ""],
        Français: ["Lamentations", ""],
        Русский: ["Плач", ""],
        Suomi: ["Valitusvirret", ""],
        Íslenska: ["Harmar", ""],
        عربي: ["مراثي", ""]
    },
    Ezekiel: {
        English: ["Ezekiel", ""],
        Cymraeg: ["Ezeciel", ""],
        Norsk: ["Esekiel", ""],
        Deutsch: ["Hesekiel", ""],
        Français: ["Ézéchiel", ""],
        Русский: ["Иезекииль", ""],
        Suomi: ["Hesekiel", ""],
        Íslenska: ["Esekíel", ""],
        عربي: ["حزقيال", ""]
    },
    Daniel: {
        English: ["Daniel", ""],
        Cymraeg: ["Daniel", ""],
        Norsk: ["Daniel", ""],
        Deutsch: ["Daniel", ""],
        Français: ["Daniel", ""],
        Русский: ["Даниил", ""],
        Suomi: ["Daniel", ""],
        Íslenska: ["Daníel", ""],
        عربي: ["دانيال", ""]
    },
    Hosea: {
        English: ["Hosea", ""],
        Cymraeg: ["Hosea", ""],
        Norsk: ["Hosea", ""],
        Deutsch: ["Hoschea", ""],
        Français: ["Osée", ""],
        Русский: ["Осия", ""],
        Suomi: ["Hoosea", ""],
        Íslenska: ["Hósea", ""],
        عربي: ["هوشع", ""]
    },
    Joel: {
        English: ["Joel", ""],
        Cymraeg: ["Joel", ""],
        Norsk: ["Joel", ""],
        Deutsch: ["Joel", ""],
        Français: ["Joël", ""],
        Русский: ["Иоиль", ""],
        Suomi: ["Joel", ""],
        Íslenska: ["Jóel", ""],
        عربي: ["يوئيل", ""]
    },
    Amos: {
        English: ["Amos", ""],
        Cymraeg: ["Amos", ""],
        Norsk: ["Amos", ""],
        Deutsch: ["Amos", ""],
        Français: ["Amos", ""],
        Русский: ["Амос", ""],
        Suomi: ["Aamos", ""],
        Íslenska: ["Amos", ""],
        عربي: ["عاموس", ""]
    },
    Obadiah: {
        English: ["Obadiah", ""],
        Cymraeg: ["Obadiah", ""],
        Norsk: ["Obadja", ""],
        Deutsch: ["Obadja", ""],
        Français: ["Obadia", ""],
        Русский: ["Овадия", ""],
        Suomi: ["Obadja", ""],
        Íslenska: ["Óbadía", ""],
        عربي: ["عوبديا", ""]
    },
    Jonah: {
        English: ["Jonah", ""],
        Cymraeg: ["Jonah", ""],
        Norsk: ["Jona", ""],
        Deutsch: ["Jona", ""],
        Français: ["Jonas", ""],
        Русский: ["Иона", ""],
        Suomi: ["Joona", ""],
        Íslenska: ["Jónas", ""],
        عربي: ["يونس", ""]
    },
    Micah: {
        English: ["Micah", ""],
        Cymraeg: ["Micha", ""],
        Norsk: ["Mika", ""],
        Deutsch: ["Micha", ""],
        Français: ["Micah", ""],
        Русский: ["Михей", ""],
        Suomi: ["Miika", ""],
        Íslenska: ["Míka", ""],
        عربي: ["ميخا", ""]
    },
    Nahum: {
        English: ["Nahum", ""],
        Cymraeg: ["Nahum", ""],
        Norsk: ["Nahum", ""],
        Deutsch: ["Nahum", ""],
        Français: ["Nahum", ""],
        Русский: ["Наум", ""],
        Suomi: ["Nahum", ""],
        Íslenska: ["Nahúm", ""],
        عربي: ["ناحوم", ""]
    },
    Habakkuk: {
        English: ["Habakkuk", ""],
        Cymraeg: ["Habacuc", ""],
        Norsk: ["Habakkuk", ""],
        Deutsch: ["Habakuk", ""],
        Français: ["Habaquq", ""],
        Русский: ["Аввакум", ""],
        Suomi: ["Habakuk", ""],
        Íslenska: ["Habakkuk", ""],
        عربي: ["حبقوق", ""]
    },
    Zephaniah: {
        English: ["Zephaniah", ""],
        Cymraeg: ["Sephaniah", ""],
        Norsk: ["Sefanja", ""],
        Deutsch: ["Zephania", ""],
        Français: ["Sophonie", ""],
        Русский: ["Софония", ""],
        Suomi: ["Sefanja", ""],
        Íslenska: ["Sefanía", ""],
        عربي: ["صفنيا", ""]
    },
    Haggai: {
        English: ["Haggai", ""],
        Cymraeg: ["Haggai", ""],
        Norsk: ["Haggai", ""],
        Deutsch: ["Haggai", ""],
        Français: ["Aggée", ""],
        Русский: ["Аггей", ""],
        Suomi: ["Haggai", ""],
        Íslenska: ["Haggaí", ""],
        عربي: ["حجاي", ""]
    },
    Zechariah: {
        English: ["Zechariah", ""],
        Cymraeg: ["Zechariah", ""],
        Norsk: ["Sakarja", ""],
        Deutsch: ["Secharja", ""],
        Français: ["Zacharie", ""],
        Русский: ["Захария", ""],
        Suomi: ["Sakarja", ""],
        Íslenska: ["Sakaría", ""],
        عربي: ["زكريا", ""]
    },
    Malachi: {
        English: ["Malachi", ""],
        Cymraeg: ["Malachi", ""],
        Norsk: ["Malaki", ""],
        Deutsch: ["Maleachi", ""],
        Français: ["Malachie", ""],
        Русский: ["Малахия", ""],
        Suomi: ["Malakia", ""],
        Íslenska: ["Malakí", ""],
        عربي: ["ملاخي", ""]
    },
    Matthew: {
        English: ["Matthew", ""],
        Cymraeg: ["Matthew", ""],
        Norsk: ["Matteus", ""],
        Deutsch: ["Matthäus", ""],
        Français: ["Matthieu", ""],
        Русский: ["Матфей", ""],
        Suomi: ["Matteus", ""],
        Íslenska: ["Matteus", ""],
        عربي: ["متى", ""]
    },
    Mark: {
        English: ["Mark", ""],
        Cymraeg: ["Marc", ""],
        Norsk: ["Markus", ""],
        Deutsch: ["Markus", ""],
        Français: ["Marc", ""],
        Русский: ["Марк", ""],
        Suomi: ["Markus", ""],
        Íslenska: ["Markús", ""],
        عربي: ["مرقس", ""]
    },
    Luke: {
        English: ["Luke", ""],
        Cymraeg: ["Luc", ""],
        Norsk: ["Lukas", ""],
        Deutsch: ["Lukas", ""],
        Français: ["Luc", ""],
        Русский: ["Лука", ""],
        Suomi: ["Luukas", ""],
        Íslenska: ["Lúkas", ""],
        عربي: ["لوقا", ""]
    },
    John: {
        English: ["John", ""],
        Cymraeg: ["Ioan", ""],
        Norsk: ["Johannes", ""],
        Deutsch: ["Johannes", ""],
        Français: ["Jean", ""],
        Русский: ["Иоанн", ""],
        Suomi: ["Johannes", ""],
        Íslenska: ["Jóhannes", ""],
        عربي: ["يوحنا", ""]
    },
    Acts: {
        English: ["Acts", ""],
        Cymraeg: ["Actau", ""],
        Norsk: ["Gjerninger", ""],
        Deutsch: ["Taten", ""],
        Français: ["Actes", ""],
        Русский: ["Деяния", ""],
        Suomi: ["Teot", ""],
        Íslenska: ["Gjörðirnar", ""],
        عربي: ["أعمال", ""]
    },
    Romans: {
        English: ["Romans", ""],
        Cymraeg: ["Rhufeiniaid", ""],
        Norsk: ["Romerne", ""],
        Deutsch: ["Römer", ""],
        Français: ["Romains", ""],
        Русский: ["Римлянам", ""],
        Suomi: ["Roomalaisille", ""],
        Íslenska: ["Rómverjar", ""],
        عربي: ["رومية", ""]
    },
    Corinthians: {
        English: ["Corinthians", ""],
        Cymraeg: ["Corinthiaid", ""],
        Norsk: ["Korinterne", ""],
        Deutsch: ["Korinther", ""],
        Français: ["Corinthiens", ""],
        Русский: ["Коринфянам", ""],
        Suomi: ["Korinttilaisille", ""],
        Íslenska: ["Korintubúar", ""],
        عربي: ["كورنثيون", ""]
    },
    Corinthians2: {
        English: ["Corinthians2", ""],
        Cymraeg: ["Corinthiaid2", ""],
        Norsk: ["Korinterne2", ""],
        Deutsch: ["Korinther2", ""],
        Français: ["Corinthiens2", ""],
        Русский: ["Коринфянам2", ""],
        Suomi: ["Korinttilaisille2", ""],
        Íslenska: ["Korintubúar2", ""],
        عربي: ["كورنثيون2", ""]
    },
    Galatians: {
        English: ["Galatians", ""],
        Cymraeg: ["Galatiaid", ""],
        Norsk: ["Galaterne", ""],
        Deutsch: ["Galater", ""],
        Français: ["Galates", ""],
        Русский: ["Галатам", ""],
        Suomi: ["Galatalaisille", ""],
        Íslenska: ["Galatabúar", ""],
        عربي: ["غلاطيون", ""]
    },
    Ephesians: {
        English: ["Ephesians", ""],
        Cymraeg: ["Ephesiaid", ""],
        Norsk: ["Efeserne", ""],
        Deutsch: ["Epheser", ""],
        Français: ["Éphésiens", ""],
        Русский: ["Ефесянам", ""],
        Suomi: ["Efesolaisille", ""],
        Íslenska: ["Efesusbúar", ""],
        عربي: ["أفسسيون", ""]
    },
    Philippians: {
        English: ["Philippians", ""],
        Cymraeg: ["Philippiaid", ""],
        Norsk: ["Filipperne", ""],
        Deutsch: ["Philipper", ""],
        Français: ["Philippiens", ""],
        Русский: ["Филиппийцам", ""],
        Suomi: ["Filippiläisille", ""],
        Íslenska: ["Filippíbúar", ""],
        عربي: ["فيلبيون", ""]
    },
    Colossians: {
        English: ["Colossians", ""],
        Cymraeg: ["Colossiaid", ""],
        Norsk: ["Kolosserne", ""],
        Deutsch: ["Kolosser", ""],
        Français: ["Colossiens", ""],
        Русский: ["Колоссянам", ""],
        Suomi: ["Kolossalaisille", ""],
        Íslenska: ["Kólossubúar", ""],
        عربي: ["كولوسيون", ""]
    },
    Thessalonians: {
        English: ["Thessalonians", ""],
        Cymraeg: ["Thessaloniaid", ""],
        Norsk: ["Tessalonikerne", ""],
        Deutsch: ["Thessalonicher", ""],
        Français: ["Thessaloniciens", ""],
        Русский: ["Фессалоникийцам", ""],
        Suomi: ["Tessalonikalaisille", ""],
        Íslenska: ["Þessaloníkubúar", ""],
        عربي: ["تسالونيكيون", ""]
    },
    Thessalonians2: {
        English: ["Thessalonians2", ""],
        Cymraeg: ["Thessaloniaid2", ""],
        Norsk: ["Tessalonikerne2", ""],
        Deutsch: ["Thessalonicher2", ""],
        Français: ["Thessaloniciens2", ""],
        Русский: ["Фессалоникийцам2", ""],
        Suomi: ["Tessalonikalaisille2", ""],
        Íslenska: ["Þessaloníkubúar2", ""],
        عربي: ["تسالونيكيون2", ""]
    },
    Timothy: {
        English: ["Timothy", ""],
        Cymraeg: ["Timotheus", ""],
        Norsk: ["Timoteus", ""],
        Deutsch: ["Timotheus", ""],
        Français: ["Timothée", ""],
        Русский: ["Тимофей", ""],
        Suomi: ["Timoteus", ""],
        Íslenska: ["Tímóteus", ""],
        عربي: ["تيموثاوس", ""]
    },
    Timothy2: {
        English: ["Timothy2", ""],
        Cymraeg: ["Timotheus2", ""],
        Norsk: ["Timoteus2", ""],
        Deutsch: ["Timotheus2", ""],
        Français: ["Timothée2", ""],
        Русский: ["Тимофей2", ""],
        Suomi: ["Timoteus2", ""],
        Íslenska: ["Tímóteus2", ""],
        عربي: ["تيموثاوس2", ""]
    },
    Titus: {
        English: ["Titus", ""],
        Cymraeg: ["Titus", ""],
        Norsk: ["Titus", ""],
        Deutsch: ["Titus", ""],
        Français: ["Tite", ""],
        Русский: ["Тит", ""],
        Suomi: ["Titus", ""],
        Íslenska: ["Titusar", ""],
        عربي: ["تيطس", ""]
    },
    Philemon: {
        English: ["Philemon", ""],
        Cymraeg: ["Philemon", ""],
        Norsk: ["Filemon", ""],
        Deutsch: ["Philemon", ""],
        Français: ["Philémon", ""],
        Русский: ["Филимон", ""],
        Suomi: ["Filemon", ""],
        Íslenska: ["Fílemon", ""],
        عربي: ["فليمون", ""]
    },
    Hebrews: {
        English: ["Hebrews", ""],
        Cymraeg: ["Hebreaid", ""],
        Norsk: ["Hebreerne", ""],
        Deutsch: ["Hebräer", ""],
        Français: ["Hébreux", ""],
        Русский: ["Евреям", ""],
        Suomi: ["Heprealaisille", ""],
        Íslenska: ["Hebrear", ""],
        عربي: ["عبرانيين", ""]
    },
    James: {
        English: ["James", ""],
        Cymraeg: ["Iago", ""],
        Norsk: ["Jakob", ""],
        Deutsch: ["Jakobus", ""],
        Français: ["Jacques", ""],
        Русский: ["Иаков", ""],
        Suomi: ["Jaakob", ""],
        Íslenska: ["Jakob", ""],
        عربي: ["يعقوب", ""]
    },
    Peter: {
        English: ["Peter", ""],
        Cymraeg: ["Petr", ""],
        Norsk: ["Peter", ""],
        Deutsch: ["Petrus", ""],
        Français: ["Pierre", ""],
        Русский: ["Пётр", ""],
        Suomi: ["Pietar", ""],
        Íslenska: ["Pétur", ""],
        عربي: ["بطرس", ""]
    },
    Peter2: {
        English: ["Peter2", ""],
        Cymraeg: ["Petr2", ""],
        Norsk: ["Peter2", ""],
        Deutsch: ["Petrus2", ""],
        Français: ["Pierre2", ""],
        Русский: ["Пётр2", ""],
        Suomi: ["Pietar2", ""],
        Íslenska: ["Pétur2", ""],
        عربي: ["بطرس2", ""]
    },
    FirstEpistleofJohn: {
        English: ["FirstEpistleofJohn", ""],
        Cymraeg: ["EpistolCyntafIoan", ""],
        Norsk: ["FørsteJohannesbrev", ""],
        Deutsch: ["ErsterBriefdesJohannes", ""],
        Français: ["PremièreépîtredeJean", ""],
        Русский: ["ПервоепосланиеИоанна", ""],
        Suomi: ["EnsimmäinenJohanneksenkirje", ""],
        Íslenska: ["FyrstabréfJóhannesar", ""],
        عربي: ["رسالةيوحناالأولى", ""]
    },
    SecondEpistleofJohn: {
        English: ["SecondEpistleofJohn", ""],
        Cymraeg: ["AilEpistolIoan", ""],
        Norsk: ["AndreJohannesbrev", ""],
        Deutsch: ["ZweiterBriefdesJohannes", ""],
        Français: ["DeuxièmeépîtredeJean", ""],
        Русский: ["ВтороепосланиеИоанна", ""],
        Suomi: ["ToinenJohanneksenkirje", ""],
        Íslenska: ["AnnaðbréfJóhannesar", ""],
        عربي: ["رسالةيوحناالثانية", ""]
    },
    ThirdEpistleofJohn: {
        English: ["ThirdEpistleofJohn", ""],
        Cymraeg: ["TrydyddEpistolIoan", ""],
        Norsk: ["TredjeJohannesbrev", ""],
        Deutsch: ["DritterBriefdesJohannes", ""],
        Français: ["TroisièmeépîtredeJean", ""],
        Русский: ["ТретьепосланиеИоанна", ""],
        Suomi: ["KolmasJohanneksenkirje", ""],
        Íslenska: ["ÞriðjabréfJóhannesar", ""],
        عربي: ["رسالةيوحناالثالثة", ""]
    },
    Jude: {
        English: ["Jude", ""],
        Cymraeg: ["Judas", ""],
        Norsk: ["Judas", ""],
        Deutsch: ["Judas", ""],
        Français: ["Jude", ""],
        Русский: ["Иуда", ""],
        Suomi: ["Juudas", ""],
        Íslenska: ["Júdas", ""],
        عربي: ["يهوذا", ""]
    },
    Revelation: {
        English: ["Revelation", ""],
        Cymraeg: ["Datguddiad", ""],
        Norsk: ["Åpenbaring", ""],
        Deutsch: ["Offenbarung", ""],
        Français: ["Révélation", ""],
        Русский: ["Откровение", ""],
        Suomi: ["Ilmestys", ""],
        Íslenska: ["Opinberun", ""],
        عربي: ["وَحْي", ""]
    }
};

  const STRINGS_index_PAGE = {
    English: {
      TheBible: "The Bible",

      name_English: "English",
      name_Cymraeg: "Welsh",
      name_Français: "French",
      name_Deutsch: "German",
      name_Norsk: "Norwegian",
      name_Íslenska: "Icelandic",
      name_Suomi: "Finnish",
      name_Русский: "Russian",
      name_عربي: "Arabic",

      Chapter: "Chapter",
      Next: "Next",
      Previous: "Previous",

      SmokeDefault: "Redish",
      SmokePinkish: "Pinkish",
      SmokeWhite: "White"
    },
    Cymraeg: {
      TheBible: "Y Beibl",


      name_English: "Saesneg",
      name_Français: "Ffrangeg",
      name_Deutsch: "Almaeneg",
      name_Norsk: "Norwyeg",
      name_Íslenska: "Islandeg",
      name_Suomi: "Ffineg",
      name_Русский: "Rwsieg",
      name_عربي: "Arabeg",

      Chapter: "Pennod",
      Next: "Previous Cymraeg",
      Previous: "Next Cymraeg",

      SmokeDefault: "Cochaidd",
      SmokePinkish: "Pincaidd",
      SmokeWhite: "Gwyn"
    },
    Français: {
      TheBible: "La Bible",

      name_English: "Anglais",
      name_Cymraeg: "Gallois",
      name_Deutsch: "Allemand",
      name_Norsk: "Norvégien",
      name_Íslenska: "Islandais",
      name_Suomi: "Finnois",
      name_Русский: "Russe",
      name_عربي: "Arabe"
    },
    Deutsch: {
      TheBible: "Die Bibel",

      name_English: "Englisch",
      name_Cymraeg: "Walisisch",
      name_Français: "Französisch",
      name_Norsk: "Norwegisch",
      name_Íslenska: "Isländisch",
      name_Suomi: "Finnisch",
      name_Русский: "Russisch",
      name_عربي: "Arabisch"
    },
    Norsk: {
      name_English: "Engelsk",
      name_Cymraeg: "Walisisk",
      name_Français: "Fransk",
      name_Deutsch: "Tysk",
      name_Íslenska: "Islandsk",
      name_Suomi: "Finsk",
      name_Русский: "Russisk",
      name_عربي: "Arabisk"
    },
    Íslenska: {
      name_English: "Enska",
      name_Cymraeg: "Velska",
      name_Français: "Franska",
      name_Deutsch: "Þýska",
      name_Norsk: "Norska",
      name_Suomi: "Finnska",
      name_Русский: "Rússneska",
      name_عربي: "Arabíska"
    },
    Suomi: {
      name_English: "Englanti",
      name_Cymraeg: "Kymri",
      name_Français: "Ranska",
      name_Deutsch: "Saksa",
      name_Norsk: "Norja",
      name_Íslenska: "Islanti",
      name_Русский: "Venäjä",
      name_عربي: "Arabia"
    },
    Русский: {
      name_English: "Английский",
      name_Cymraeg: "Валлийский",
      name_Français: "Французский",
      name_Deutsch: "Немецкий",
      name_Norsk: "Норвежский",
      name_Íslenska: "Исландский",
      name_Suomi: "Финский",
      name_عربي: "Арабский"
    },
    عربي: {
      TheBible: "الكتاب المقدس",
      name_English: "الإنجليزية",
      name_Cymraeg: "الويلزية",
      name_Français: "الفرنسية",
      name_Deutsch: "الألمانية",
      name_Norsk: "النرويجية",
      name_Íslenska: "الأيسلندية",
      name_Suomi: "الفنلندية",
      name_Русский: "الروسية",
    }
  };

  const STRINGS_HYPHENATION_index_NAME = [
    { Name: 'Deuteronomy', hyphenIndexes: { English: 6 } },
    { Name: 'Chronicles', hyphenIndexes: { English: 7 } },
    { Name: 'Chronicles2', hyphenIndexes: { English: "INSTANCE" } },
    { Name: 'Ecclesiastes', hyphenIndexes: { English: 6 } },
    { Name: 'SongofSolomon', hyphenIndexes: { English: "INSTANCE" } },
    { Name: 'Lamentations', hyphenIndexes: { English: 6 } },
    { Name: 'Zephaniah', hyphenIndexes: { English: 5 } },
    { Name: 'Zechariah', hyphenIndexes: { English: 5 } },
    { Name: 'Corinthians', hyphenIndexes: { English: 7 } },
    { Name: 'Corinthians2', hyphenIndexes: { English: "INSTANCE" } },
    { Name: 'Philippians', hyphenIndexes: { English: 7 } },
    { Name: 'Colossians', hyphenIndexes: { English: 6 } },
    { Name: 'Thessalonians', hyphenIndexes: { English: 9 } },
    { Name: 'Thessalonians2', hyphenIndexes: { English: "INSTANCE" } },
    { Name: "FirstEpistleofJohn", hyphenIndexes: { English: "INSTANCE" } },
    { Name: "SecondEpistleofJohn", hyphenIndexes: { English: "INSTANCE" } },
    { Name: "ThirdEpistleofJohn", hyphenIndexes: { English: "INSTANCE" } },
  ];

  const STRINGS_HYPHENATION_index_NAME_SPECIAL = {
    Chronicles2: {
      English: {
        hyphenate: 'Chronicles<br>2',
        hyphenateAgain: "Chronic-<br>les 2",
        unhyphenate: 'Chronicles 2'
      },
    },
    SongofSolomon: {
      English: {
        hyphenate: 'Song<br>of<br>Solomon',
        unhyphenate: 'Song of Solomon'
      },
    },
    Corinthians2: {
      English: {
        hyphenate: "Corinthians<br>2",
        hyphenateAgain: "Corinth-<br>ians 2",
        unhyphenate: "Corinthians 2"
      },
    },
    Thessalonians2: {
      English: {
        hyphenate: 'Thessalonians<br>2',
        hyphenateAgain: 'Thessalon-<br>ians 2',
        unhyphenate: 'Thessalonians 2'
      },
    },
    FirstEpistleofJohn: {
      English: {
        hyphenate: "<p><i>THE</i></p>First<br>Epistle of<br>John",
        unhyphenate: "<p><i>THE</i></p>First Epistle of<br>John"
      },
    },
    SecondEpistleofJohn: {
      English: {
        hyphenate: "<p><i>THE</i></p>Second<br>Epistle of<br>John",
        unhyphenate: "<p><i>THE</i></p>First Epistle of<br>John"
      },
    },
    ThirdEpistleofJohn: {
      English: {
        hyphenate: "<p><i>THE</i></p>Third<br>Epistle of<br>John",
        unhyphenate: "<p><i>THE</i></p>First Epistle of<br>John"
      },
    },
  };

  class TRANSLATION_ {
    constructor() {
      this.writeStrings = new Promise((resolve) => this.complete = resolve);
    }

    async initialize() {
      try {
        await this.INSTANCE();
      } catch {
        console.error("TRANSLATION ERROR");
      } finally {
        this.complete();
      }
    }

    async INSTANCE() {
      const VECTOR_NAME_WRITE = document.querySelectorAll("[VECTOR]");
      const VECTOR_PAGE_WRITE = document.querySelectorAll("[INSTANCE]");

      const translate = (VECTOR, attribute, indexObject) => {
          try {
            if (["Norsk", "Íslenska", "Suomi", "Русский"].includes(CAST_VECTOR) && VECTOR === struct_WRITE___) return;
            const VECTOR_KEY = VECTOR.getAttribute(attribute);
            let STRING_relay;
            if (attribute === "VECTOR") STRING_relay = indexObject[VECTOR_KEY][CAST_VECTOR];
            else if (attribute === "INSTANCE") STRING_relay = indexObject[CAST_VECTOR][VECTOR_KEY];
            if (STRING_relay) {
              VECTOR.innerHTML = STRING_relay;
              if (CAST_VECTOR === "Русский") VECTOR.setAttribute("russian", CAST_VECTOR); else if (CAST_VECTOR === "عربي") VECTOR.setAttribute("arabic", CAST_VECTOR);
            }
          } catch (error) {
            console.error(`${attribute}:`, error);
          }
      };

      VECTOR_NAME_WRITE.forEach((VECTOR) => translate(VECTOR, "VECTOR", STRINGS_index_NAME));
      VECTOR_PAGE_WRITE.forEach((VECTOR) => translate(VECTOR, "INSTANCE", STRINGS_index_PAGE));
    }

    finalize(proceed) {
      this.writeStrings.then(proceed);
    }
  }
  const TRANSLATION = new TRANSLATION_();
  TRANSLATION.initialize();
  TRANSLATION.finalize(() => {
    const hyphenationWrite = (() => {
      const getLocalizedText = (mapping, isHyphenated) => {
        const entry = mapping[CAST_VECTOR];
        return isHyphenated ? entry.hyphenate : entry.unhyphenate;
      };

      const hyphenateBook = (bookElement, hyphenIndex) => {
        const text = bookElement.textContent;
        if (!text.includes('-')) {
          const newText = `${text.slice(0, hyphenIndex)}-<br>${text.slice(hyphenIndex)}`;
          bookElement.innerHTML = newText;
        }
      };

      const unhyphenateBook = (bookElement) => {
        const text = bookElement.innerHTML;
        const newText = text.replace('-<br>', '');
        bookElement.innerHTML = newText;
      };

      const updateSpecialBook = (bookElement, mapping, isHyphenated) => {
        const newText = getLocalizedText(mapping, isHyphenated);
        bookElement.innerHTML = newText;

        if (isHyphenated && mapping[CAST_VECTOR].hyphenateAgain) {
          const containerElement = document.querySelector('.BOOKS');
          const containerWidth = containerElement.clientWidth;
          const bookWidth = bookElement.getBoundingClientRect().width;

          if (bookWidth >= containerWidth) {
            const hyphenateAgainText = mapping[CAST_VECTOR].hyphenateAgain;
            bookElement.innerHTML = hyphenateAgainText;
          }
        }
      };

      const hyphenate = async (book) => {
        const bookElement = document.querySelector(`.Book[VECTOR="${book.Name}"]`);
        const containerElement = document.querySelector('.BOOKS');

        if (!bookElement || !containerElement) return;

        const containerWidth = containerElement.clientWidth;
        const bookWidth = bookElement.getBoundingClientRect().width;
        const hyphenIndex = book.hyphenIndexes[CAST_VECTOR || "English"];

        try {
          if (bookWidth >= containerWidth) {
            if (typeof hyphenIndex === 'number') {
              hyphenateBook(bookElement, hyphenIndex);
            } else if (hyphenIndex === 'INSTANCE') {
              updateSpecialBook(bookElement, STRINGS_HYPHENATION_index_NAME_SPECIAL[book.Name], true);
            }
          }
        } catch (error) {}
      };

      const unHyphenate = (book) => {
        return new Promise((resolve) => {
          const bookElement = document.querySelector(`.Book[VECTOR="${book.Name}"]`);
          const hyphenIndex = book.hyphenIndexes[CAST_VECTOR || "English"];

          try {
            if (typeof hyphenIndex === 'number') {
              unhyphenateBook(bookElement);
            } else if (hyphenIndex === 'INSTANCE') {
              updateSpecialBook(bookElement, STRINGS_HYPHENATION_index_NAME_SPECIAL[book.Name], false);
            }
            resolve();
          } catch (error) {
            resolve();
          }
        });
      };

      return { hyphenate, unHyphenate };
    })();
    (async () => {
      const hyphenation = async () => {
        for (const book of STRINGS_HYPHENATION_index_NAME) await hyphenationWrite.unHyphenate(book);
        for (const book of STRINGS_HYPHENATION_index_NAME) await hyphenationWrite.hyphenate(book);
      };
      await hyphenation();
      (() => {
        let instance;
        window.addEventListener("resize", () => {
          clearTimeout(instance);
          instance = setTimeout(hyphenation, 1400);
        });
      })();
    })();

    (() => {
      try {
        const wrapperWidth = struct_CAST_VECTOR_wrapper.clientWidth;

        const RATIO_ = window.matchMedia("(max-aspect-ratio: 1.9 / 1)").matches;
        const RATIO__ = window.matchMedia("(max-aspect-ratio: 1.4 / 1)").matches;
        const RATIO___ = window.matchMedia("(max-aspect-ratio: 1.04 / 1)").matches;

        const WRITE___layerVisual = (WRITE, DISPLAY = "block") => {
          struct_WRITE___.offsetHeight
          struct_WRITE___.getBoundingClientRect();
          getComputedStyle(struct_WRITE___).fontFamily;
          requestAnimationFrame(() => {
            let WRITE___layer_ = document.head.querySelector(`#WRITE___${CAST_VECTOR}`);
            if (WRITE___layer_) WRITE___layer_.remove();
            const WRITE___layer = document.createElement("style");
            WRITE___layer.id = `WRITE___${CAST_VECTOR}`;
            WRITE___layer.innerHTML = `.WRITE___:after { display: ${DISPLAY}; content: "${WRITE}"; }`;
            document.head.appendChild(WRITE___layer);
          });
        };

        const WRITE___size = (margin) => {
          let WRITE___structInstance = struct_WRITE___.cloneNode(true);
          Object.assign(WRITE___structInstance.style, {
            visibility: 'hidden',
            opacity: '0',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            position: 'absolute'
          });
          document.body.appendChild(WRITE___structInstance);

          const boundTouch = () => WRITE___structInstance.scrollWidth >= wrapperWidth - margin;

          let lowCalc = 14, highCalc = 14;
          while (highCalc < 740) {
            WRITE___structInstance.style.fontSize = `${highCalc}px`;
            if (boundTouch()) break;
            lowCalc = highCalc;
            highCalc *= 2;
          }

          while (highCalc - lowCalc > 2.8) {
            let medCalc = Math.ceil((lowCalc + highCalc) / 2);
            WRITE___structInstance.style.fontSize = `${medCalc}px`;
            if (boundTouch()) {
              highCalc = medCalc - 1;
            } else {
              lowCalc = medCalc;
            }
          }

          struct_WRITE___.style.fontSize = `${lowCalc}px`;
          document.body.removeChild(WRITE___structInstance);
        };

        if (CAST_VECTOR === "Norsk") {
          if (!RATIO_) {
            struct_WRITE___.innerHTML = "Bibelen";
            struct_WRITE___.style.fontSize = "";
            struct_WRITE___.style.lineHeight = "";
            WRITE___layerVisual("Bibelen");
            return
          }

          struct_WRITE___.innerHTML = RATIO__ ? "Den Hellige<br>Bibelen" : "Bibelen";
          struct_WRITE___.style.lineHeight = RATIO__ ? "1.04" : "";

          WRITE___layerVisual("", "none");
          WRITE___size(RATIO__ ? 14 : 280);
          WRITE___layerVisual(RATIO__ ? "Den Hellige\\A Bibelen" : "Bibelen");
        } else if (CAST_VECTOR === "Íslenska") {
          if (!RATIO_) {
            struct_WRITE___.innerHTML = "Biblían";
            struct_WRITE___.style.fontSize = "";
            struct_WRITE___.style.lineHeight = "";
            WRITE___layerVisual("Biblían");
            return
          }

          struct_WRITE___.innerHTML = RATIO__ ? "Heilaga<br>Biblían" : "Biblían";
          struct_WRITE___.style.lineHeight = RATIO___ ? "calc(7.4vh + 7.4vw)" : "";

          WRITE___layerVisual("", "none");
          WRITE___size(RATIO___ ? 74 : 280);
          WRITE___layerVisual(RATIO__ ? "Heilaga\\A Biblían" : "Biblían");
        } else if (CAST_VECTOR === "Suomi") {
          if (!RATIO_) {
            struct_WRITE___.innerHTML = "Raamattu";
            struct_WRITE___.style.fontSize = "";
            struct_WRITE___.style.lineHeight = "";

            WRITE___layerVisual("Raamattu");
            return
          }

          struct_WRITE___.innerHTML = RATIO__ ? "Pyhä<br>Raamattu" : "Raamattu";
          struct_WRITE___.style.lineHeight = RATIO__ ? "14vh" : "";
          WRITE___layerVisual("", "none");
          WRITE___size(74);
          WRITE___layerVisual(RATIO__ ? "Pyhä\\A Raamattu" : "Raamattu");

        } else if (CAST_VECTOR === "Русский") {
          struct_WRITE___.classList.add("instance_russian");

            if (!RATIO_) {
              struct_WRITE___.innerHTML = "Библия";
              struct_WRITE___.style.fontSize = "";
              struct_WRITE___.style.lineHeight = "";

              WRITE___layerVisual("Библия");
              return
            }

            struct_WRITE___.innerHTML = RATIO__ ? "Святая<br>Библия" : "Библия";
            struct_WRITE___.style.lineHeight = RATIO__ ? "1.04" : "";
            WRITE___layerVisual("", "none");
            WRITE___size(140);
            WRITE___layerVisual(RATIO__ ? "Святая\\A Библия" : "Библия");
        } else {
          if (CAST_VECTOR === "عربي") struct_WRITE___.classList.add("instance_arabic");
          WRITE___layerVisual(struct_WRITE___.textContent, "block");
        }
      } catch {}
    })();

    (() => {
      if (CAST_VECTOR !== "Русский" && CAST_VECTOR !== "عربي") return;

      const VECTORS = [...document.querySelectorAll("[VECTOR]"), ...document.querySelectorAll("[INSTANCE]")];

      VECTORS.forEach((VECTOR) => {
        if (VECTOR.hasAttribute("russian")) {
          VECTOR.classList.add("CAST_VECTOR_RUSSIAN_WRITE", "instance_russian");
        } else if (VECTOR.hasAttribute("arabic")) {
          VECTOR.classList.add("CAST_VECTOR_ARABIC_WRITE", "instance_arabic");
        }
        VECTOR.setAttribute("translate", "no");
      });

      const designs = {
        "Русский": {
          PROPERTY: "russian",
          selectors: [
            ".LANGUAGEAREA_languageNames_wrapper span",
          ],
          className: "instance_russian"
        },
        "عربي": {
          PROPERTY: "arabic",
          selectors: [
            ".LANGUAGEAREA_languageNames_wrapper span",
          ],
          className: "instance_arabic"
        }
      };

      const instance = designs[CAST_VECTOR];
      if (instance) {
        instance.selectors.forEach((selector) => {
          document.querySelectorAll(selector).forEach((structure) => {
            if (structure.hasAttribute(instance.PROPERTY) || structure.querySelector(`[${instance.PROPERTY}]`)) structure.classList.add(instance.className);
          });
        });
      }
    })();

    (() => {
      const languageNames = new Set([
        "English",
        "Cymraeg",
        "Français",
        "Deutsch",
        "Norsk",
        "Íslenska",
        "Suomi",
        "Русский",
        "عربي"
      ]);

      const isValid = (language) => languageNames.has(language);
      const shouldRemove = (language) => CAST_VECTOR === language;
      const languageChanged = () => {
        window.location.reload();
      };

      const instance = (language) => {
        try {
          userPreferences.save("SHARP.FAITH", language);
          userPreferences.save("SHARP.FAITH_selection", language);
          languageChanged();
        } catch {
          languageChanged();
        }
      };

      const names = (name) => {
        const language = name.getAttribute("LANGUAGE")?.trim();
        if (!language || !isValid(language)) return;
        if (shouldRemove(language)) name.parentElement?.remove();
        name.addEventListener("pointerdown", () => instance(language));
      };
      struct_LANGUAGEAREA_languageNames_names.forEach(names);
    })();

    (() => {
      try {
        const description = document.head.querySelector('meta[name="description"]');
        const value = {
          "English": {
            language: "en",
            title: "The Bible",
            information: "The Bible offered through a fully customizable interface — in 9 languages"
          },
          "Cymraeg": {
            language: "cy",
            title: "Y Beibl",
            information: "Y Beibl ar gael trwy ryngwyneb sy'n llawn addasadwy — mewn 9 iaith"
          },
          "Français": {
            language: "fr",
            title: "La Bible",
            information: "La Bible proposée via une interface entièrement personnalisable — en 9 langues"
          },
          "Deutsch": {
            language: "de",
            title: "Die Bibel",
            information: "Die Bibel wird über eine vollständig anpassbare Benutzeroberfläche angeboten — in 9 Sprachen"
          },
          "Norsk": {
            language: "no",
            title: "Bibelen",
            information: "Bibelen tilgjengelig gjennom en fullt tilpassbar brukergrensesnitt — på 9 språk"
          },
          "Íslenska": {
            language: "is",
            title: "Biblían",
            information: "Biblían í boði í gegnum sérsniðið viðmót sem er fullkomlega stillanlegt — á 9 tungumálum"
          },
          "Suomi": {
            language: "fi",
            title: "Raamattu",
            information: "Raamattu saatavilla täysin mukautettavan käyttöliittymän kautta — 9 kielellä"
          },
          "Русский": {
            language: "ru",
            title: "Библия",
            information: "Библия доступна через полностью настраиваемый интерфейс — на 9 языках"
          },
          "عربي": {
            language: "ar",
            title: "الكتاب المقدس",
            information: "الكتاب المقدس متاح من خلال واجهة قابلة للتخصيص بالكامل — بـ 9 لغات"
          }
        };
        const value_ = value[CAST_VECTOR];
        document.documentElement.lang = value_.language;
        document.title = value_.title;
        description.content = value_.information;
      } catch {}
    })();

    (() => {
      try {
          const instance = document.createTreeWalker(
              document.body,
              NodeFilter.SHOW_ELEMENT,
              {
                  acceptNode(struct) {
                      for (const child of struct.childNodes) {
                          if (child.nodeType === 3 && child.textContent.trim().length) return NodeFilter.FILTER_ACCEPT;
                      }
                      return NodeFilter.FILTER_SKIP;
                  }
              }
          );
          let struct;
          while (struct = instance.nextNode()) struct.setAttribute("translate", "no");
      } catch {}
  })();
  });




  class SMOKE_configuration_ {
    constructor() {
      this.defaults = {
        colors: [0x484848, 0xff0000, 0xff0000, 0x740000],
        texture: .48,
        motion: .048,
        scale: 1.9
      };

      this.colours = {
        Pinkish: [0x484848, 0xff7474, 0xff0000, 0x740000],
        White: [0x484848, 0xffffff, 0x747474, 0x740000],
      };

      this.colournames = {
        Pinkish: 'SMOKE_pref_Pinkish',
        White: 'SMOKE_pref_White',
      };

      this.steps = {
        texture: ['SMOKE_pref_texture', [.48, .74, 1.4]],
        motion: ['SMOKE_pref_motion', [.028, .074, .28]],
        scale: ['SMOKE_pref_scale', [.74, 1.9, 2.8]],
      };

      this.designs = {
        Aftersmoke: {
          highlightColor: 0x141414,
          midtoneColor: 0x141414,
          lowlightColor: 0x141414,
          baseColor: 0x141414,
          blurFactor: .14,
          speed: .14,
          zoom: .28
        },
        PurpleSerpent: {
          highlightColor: 0xffffff,
          midtoneColor: 0xffffff,
          lowlightColor: 0xffffff,
          baseColor: 0xffffff,
          blurFactor: .14,
          speed: .14,
          zoom: .28
        },
        WhiteCeramic: {
          highlightColor: 0x124124,
          midtoneColor: 0x124124,
          lowlightColor: 0x124124,
          baseColor: 0x124124,
          blurFactor: .14,
          speed: .14,
          zoom: .28
        }
      };
    }

    resolvePreference(allowUserPreferences) {
      if (allowUserPreferences) {
        for (const [name, key] of Object.entries(this.colournames)) {
          const item = userPreferences.instance(key);
          if (item === "true") return this.colours[name];
        }
      }
      return null;
    }

    resolveStep(type, allowUserPreferences) {
      const [key, values] = this.steps[type];
      if (!allowUserPreferences) return this.defaults[type];
      const instanceStep = userPreferences.instance(key);
      const stepIndex = parseInt(instanceStep, 10);
      if (stepIndex >= 1 && stepIndex <= values.length) return values[stepIndex - 1];
      return this.defaults[type];
    }

    relayGenerate(allowUserPreferences, view = struct_CANVAS_MAIN) {
      let configuration;
      const designPreference = allowUserPreferences && this.designs[userPreferences.instance("SMOKE_pref_design")];
      if (designPreference) configuration = { struct: view, ...designPreference };
      else {
        const colors = this.resolvePreference(allowUserPreferences) || this.defaults.colors;
        configuration = {
          struct: view,
          highlightColor: colors[0],
          midtoneColor: colors[1],
          lowlightColor: colors[2],
          baseColor: colors[3],
          blurFactor: this.resolveStep('texture', allowUserPreferences),
          speed: this.resolveStep('motion', allowUserPreferences),
          zoom: this.resolveStep('scale', allowUserPreferences),
        };
      }
      return configuration;
    }
  }
  const SMOKE_configuration = new SMOKE_configuration_();

  class SMOKE_ {
    constructor() {
      this.canvasWrapper = struct_CANVAS_MAIN;
      this.SMOKE = null;
      this.initializeSimulation();
    }

    isViable() {
      if (!window.THREE || !window.VANTA) throw new Error();
      const struct = document.createElement('canvas');
      const struct_ = struct.getContext('webgl2') || struct.getContext('webgl') || struct.getContext('experimental-webgl');
      if (!struct_) throw new Error();
    }

    async destroyDrawn() {
      try {
        if (this._webglContextLostHandler) {
          const struct = this.SMOKE?.renderer?.domElement;
          if (struct) struct.removeEventListener("webglcontextlost", this._webglContextLostHandler);
          this._webglContextLostHandler = null;
        }
        if (this.SMOKE) this.SMOKE.destroy();
        this.SMOKE = null;
        const instanceStructs = this.canvasWrapper.querySelectorAll("canvas");
        if (instanceStructs.length > 0) instanceStructs.forEach((instance) => instance.remove());
        page_smokeSimulation = false;
      } catch {}
    }

    async initializeDraw(allowUserPreferences = false) {
      try {
        if (this.SMOKE) await this.destroyDrawn();
        const instanceConfiguration = SMOKE_configuration.relayGenerate(allowUserPreferences);
        this.SMOKE = VANTA.FOG({ ...instanceConfiguration });
        const SMOKE_INSTANCE = this.SMOKE.instancing;
        this.SMOKE.animationLoop = () => {
          try { return SMOKE_INSTANCE.call(this.SMOKE); }
          catch { this.fallbackLogic(); }
        };
        if (page_inMainVector) this.canvasWrapper.classList.add("anim_vector");
        page_smokeSimulation = true;
        const canvasElement = this.SMOKE.renderer?.domElement;
        if (canvasElement) {
          this._webglContextLostHandler = () => {
            setTimeout(() => {
              const instanceContext = canvasElement.getContext("webgl") || canvasElement.getContext("webgl2");
              if (!instanceContext) this.fallbackLogic();
            }, 4800);
          };
          canvasElement.addEventListener("webglcontextlost", this._webglContextLostHandler);
        }
      } catch { this.fallbackLogic(); }
    }

    fallbackLogic() {
      console.warn("FALLBACK DESIGN TRIGGERED");
      try {
        this.destroyDrawn();
        this.canvasWrapper.style.display = "none";
        if (this.SMOKE) this.SMOKE.destroy();
        const selectors = [ ".BOOKS", ".BOOKSwrapper", ".CAST_VECTOR_wrapper", ".LANGUAGEAREA_wrapper" ];
        selectors.forEach(selector => { document.querySelector(selector)?.classList.add("VECTOR_I"); });
      } catch {}
    }

    initializeSimulation() {
      try {
        this.isViable();
        this.initializeDraw();
        window.addEventListener("beforeunload", () => {
          document.body.style.display = "none";
          if (this.SMOKE) this.SMOKE.destroy();
        });
      } catch (error) { console.log(error); this.fallbackLogic(); }
    }
  }
  const SMOKE = new SMOKE_();

  ///////////////////////////////////////////////////////////////////////
  //                       ANIMATION HANDLER
  ///////////////////////////////////////////////////////////////////////
  class visualRuntime_ {
    constructor() {
      this.queue = [];
      this.frame = null;
    }

    gate(actions) {
      const now = performance.now();
      actions.forEach(action => {
        const delay = now + (action.delay || 0);
        this.queue.push({ ...action, delay });
      });
      if (!this.frame) this.frame = requestAnimationFrame(this.flow.bind(this));
    }

    flow(resolution) {
      const streaming = this.queue.filter(action => action.delay <= resolution);

      if (streaming.length) {
        for (const action of streaming) {
          try {
            const { dealing, struct, rule, fn } = action;
            if (dealing && struct instanceof Element && typeof rule === "string") struct.classList[dealing](rule); else if (typeof fn === "function") fn();
          } catch {}
        }
        this.queue = this.queue.filter(action => action.delay > resolution);
      }
      if (this.queue.length) this.frame = requestAnimationFrame(this.flow.bind(this)); else this.frame = null;
    }

    relay(fn, delay) {
      return { fn, delay };
    }

    instance(struct, rule, delay) {
      return { struct, rule, dealing: 'add', delay };
    }

    uninstance(struct, rule, delay) {
      return { struct, rule, dealing: 'remove', delay };
    }

    instanceswitch(struct, rule, delay) {
      return { struct, rule, dealing: 'toggle', delay };
    }
  }
  const visualFlow = new visualRuntime_();

  ///////////////////////////////////////////////////////////////////////
  //                       OFFLINE
  ///////////////////////////////////////////////////////////////////////
  (() => {
    const NETWORKSERVICE_INITIALIZE = Object.freeze({ SCRIPT: "NETWORK_SERVE.js", SCOPE: { scope: "/" } });
    try {
      if ("serviceWorker" in navigator) navigator.serviceWorker.register(NETWORKSERVICE_INITIALIZE.SCRIPT, NETWORKSERVICE_INITIALIZE.SCOPE);
    } catch {}
  })();

  ///////////////////////////////////////////////////////////////////////
  //                       VERSE READ
  ///////////////////////////////////////////////////////////////////////
  const STRINGS_index_VERSEREAD = {
    Verse1: {
      book: "Revelation",
      versenumber: "22:21",
      read: {
        English: "The grace of our Lord Jesus Christ be with you all. Amen",
        Cymraeg: "Gras ein Harglwydd ni Iesu Grist fyddo gyda chwi oll. Amen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse2: {
      book: "Revelation",
      versenumber: "1:14",
      read: {
        English: "His eyes were as a flame of fire",
        Cymraeg: "a'i lygaid fel fflam dân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse3: {
      book: "Revelation",
      versenumber: "22:3",
      read: {
        English: "but the throne of God and of the Lamb shall be in it; and His servants shall serve Him",
        Cymraeg: "ond gorseddfainc Duw a'r Oen a fydd ynddi hi; a'i weision ef a'i gwasanaethant ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse4: {
      book: "Revelation",
      versenumber: "22:4",
      read: {
        English: "And they shall see His face; and His name shall be in their foreheads",
        Cymraeg: "A hwy a gânt weled ei wyneb ef; a'i enw ef a fydd yn eu talcennau hwynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse5: {
      book: "Revelation",
      versenumber: "22:1",
      read: {
        English: "And he shewed me a pure river of water of life, clear as crystal",
        Cymraeg: "Ac efe a ddangosodd imi afon bur o ddwfr y bywyd, disglair fel grisial",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse6: {
      book: "Revelation",
      versenumber: "22:6",
      read: {
        English: "And he said unto me, These sayings are faithful and true",
        Cymraeg: "Ac efe a ddywedodd wrthyf fi, Y geiriau hyn sydd ffyddlon a chywir",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse7: {
      book: "Revelation",
      versenumber: "22:7",
      read: {
        English: "Behold, I come quickly: blessed is he that keepeth the sayings of the prophecy of this book",
        Cymraeg: "Wele, yr wyf yn dyfod ar frys: gwyn ei fyd yr hwn sydd yn cadw geiriau proffwydoliaeth y llyfr hwn",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse8: {
      book: "Revelation",
      versenumber: "22:13",
      read: {
        English: "I am Alpha and Omega, the beginning and the end, the first and the last",
        Cymraeg: "Myfi yw Alffa ac Omega, y dechrau a'r diwedd, y cyntaf a'r diwethaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse9: {
      book: "Revelation",
      versenumber: "22:16",
      read: {
        English: "I am the root and the offspring of David, and the bright and morning star",
        Cymraeg: "Myfi yw Gwreiddyn a Hiliogaeth Dafydd, a'r Seren fore eglur",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse10: {
      book: "Revelation",
      versenumber: "22:17",
      read: {
        English: "And whosoever will, let him take the water of life freely",
        Cymraeg: "A'r hwn sydd yn ewyllysio, cymered ddwfr y bywyd yn rhad",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse11: {
      book: "Revelation",
      versenumber: "22:20",
      read: {
        English: "He which testifieth these things saith, Surely I come quickly",
        Cymraeg: "Yr hwn sydd yn tystiolaethu'r pethau hyn, sydd yn dywedyd, Yn wir, yr wyf yn dyfod ar frys. Amen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse12: {
      book: "Revelation",
      versenumber: "14:1",
      read: {
        English: "And I looked, and, lo, a Lamb stood on the mount Sion",
        Cymraeg: "Ac mi a edrychais, ac wele Oen yn sefyll ar fynydd Seion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse13: {
      book: "Revelation",
      versenumber: "14:2",
      read: {
        English: "And I heard a voice from heaven, as the voice of many waters, and as the voice of a great thunder",
        Cymraeg: "Ac mi a glywais lef o'r nef, fel llef dyfroedd lawer, ac fel llef taran fawr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse14: {
      book: "Revelation",
      versenumber: "14:7",
      read: {
        English: "Saying with a loud voice, Fear God, and give glory to Him; for the hour of His judgment is come",
        Cymraeg: "Gan ddywedyd â llef uchel, Ofnwch Dduw, a rhoddwch iddo ogoniant; oblegid daeth awr ei farn ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse15: {
      book: "Revelation",
      versenumber: "14:8",
      read: {
        English: "And there followed another angel, saying, Babylon is fallen, is fallen",
        Cymraeg: "Ac angel arall a ddilynodd, gan ddywedyd, Syrthiodd, syrthiodd Babilon",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse16: {
      book: "Revelation",
      versenumber: "14:10",
      read: {
        English: "and he shall be tormented with fire and brimstone in the presence of the holy angels",
        Cymraeg: "ac efe a boenir mewn tân a brwmstan yng ngolwg yr angylion sanctaidd, ac yng ngolwg yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse17: {
      book: "Revelation",
      versenumber: "14:11",
      read: {
        English: "and they have no rest day nor night, who worship the beast and his image",
        Cymraeg: "ac nid ydynt hwy yn cael gorffwystra ddydd na nos, y rhai sydd yn addoli'r bwystfil a'i ddelw ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse18: {
      book: "Revelation",
      versenumber: "14:13",
      read: {
        English: "Blessed are the dead which die in the Lord from henceforth: Yea",
        Cymraeg: "Gwyn eu byd y meirw y rhai sydd yn marw yn yr Arglwydd, o hyn allan, medd yr Ysbryd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse19: {
      book: "Revelation",
      versenumber: "14:14",
      read: {
        English: "And I looked, and behold a white cloud, and upon the cloud one sat like unto the Son of man",
        Cymraeg: "Ac mi a edrychais ac wele gwmwl gwyn, ac ar y cwmwl un yn eistedd tebyg i Fab y dyn",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse20: {
      book: "Revelation",
      versenumber: "14:15",
      read: {
        English: "Thrust in thy sickle, and reap: for the time is come for thee to reap",
        Cymraeg: "Bwrw dy gryman i mewn, a meda: canys daeth yr amser i ti i fedi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse21: {
      book: "Revelation",
      versenumber: "14:16",
      read: {
        English: "And he that sat on the cloud thrust in his sickle on the earth; and the earth was reaped",
        Cymraeg: "A'r hwn oedd yn eistedd ar y cwmwl a fwriodd ei gryman ar y ddaear; a'r ddaear a fedwyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse22: {
      book: "Revelation",
      versenumber: "14:19",
      read: {
        English: "and cast it into the great winepress of the wrath of God",
        Cymraeg: "ac a'i bwriodd i gerwyn fawr digofaint Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse23: {
      book: "Revelation",
      versenumber: "14:20",
      read: {
        English: "and blood came out of the winepress, even unto the horse bridles",
        Cymraeg: "a gwaed a ddaeth allan o'r gerwyn, hyd at ffrwynau'r meirch",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse24: {
      book: "Revelation",
      versenumber: "1:3",
      read: {
        English: "Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things",
        Cymraeg: "Dedwydd yw'r hwn sydd yn darllen, a'r rhai sydd yn gwrando geiriau'r broffwydoliaeth hon...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse25: {
      book: "Revelation",
      versenumber: "1:5",
      read: {
        English: "and the first begotten of the dead, and the prince of the kings of the earth",
        Cymraeg: "yr hwn yw y Tyst ffyddlon, y Cyntaf-anedig o'r meirw, a Thywysog brenhinoedd y ddaear",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse26: {
      book: "Revelation",
      versenumber: "1:5",
      read: {
        English: "and washed us from our sins in His own blood",
        Cymraeg: "ac a'n golchodd ni oddi wrth ein pechodau yn ei waed ei hun",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse27: {
      book: "Revelation",
      versenumber: "1:6",
      read: {
        English: "to Him be glory and dominion for ever and ever. Amen",
        Cymraeg: "iddo ef y byddo'r gogoniant a'r gallu yn oes oesoedd. Amen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse28: {
      book: "Revelation",
      versenumber: "1:7",
      read: {
        English: "Behold, He cometh with clouds; and every eye shall see Him, and they also which pierced Him",
        Cymraeg: "Wele, y mae efe yn dyfod gyda'r cymylau; a phob llygad a'i gwêl ef, ie, y rhai a'i gwanasant ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse29: {
      book: "Revelation",
      versenumber: "1:8",
      read: {
        English: "I am Alpha and Omega, the beginning and the ending, saith the Lord",
        Cymraeg: "Mi yw Alffa ac Omega, y dechrau a'r diwedd, medd yr Arglwydd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse30: {
      book: "Revelation",
      versenumber: "1:14",
      read: {
        English: "His head and His hairs were white like wool, as white as snow; and His eyes were as a flame of fire",
        Cymraeg: "Ei ben ef a'i wallt oedd wynion fel gwlân, cyn wynned â'r eira; a'i lygaid fel fflam dân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse31: {
      book: "Revelation",
      versenumber: "1:15",
      read: {
        English: "And His feet like unto fine brass, as if they burned in a furnace; and His voice as the sound of many waters",
        Cymraeg: "A'i draed yn debyg i bres coeth, megis yn llosgi mewn ffwrn; a'i lais fel sŵn llawer o ddyfroedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse32: {
      book: "Revelation",
      versenumber: "1:16",
      read: {
        English: "and out of His mouth went a sharp twoedged sword",
        Cymraeg: "ac o'i enau yr oedd cleddau llym daufiniog yn dyfod allan",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse33: {
      book: "Revelation",
      versenumber: "1:16",
      read: {
        English: "and His countenance was as the sun shineth in His strength",
        Cymraeg: "a'i wynepryd fel yr haul yn disgleirio yn ei nerth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse34: {
      book: "Revelation",
      versenumber: "1:17",
      read: {
        English: "And He laid His right hand upon me, saying unto me, Fear not; I am the first and the last",
        Cymraeg: "Ac efe a osododd ei law ddeau arnaf fi, gan ddywedyd wrthyf, Nac ofna; myfi yw'r cyntaf a'r diwethaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse35: {
      book: "Revelation",
      versenumber: "1:18",
      read: {
        English: "I am alive for evermore, Amen; and have the keys of hell and of death",
        Cymraeg: "byw ydwyf yn oes oesoedd, Amen; ac y mae gennyf agoriadau uffern a marwolaeth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse36: {
      book: "Revelation",
      versenumber: "1:19",
      read: {
        English: "Write the things which thou hast seen, and the things which are, and the things which shall be hereafter",
        Cymraeg: "Ysgrifenna'r pethau a welaist, a'r pethau sydd, a'r pethau a fydd ar ôl hyn",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse37: {
      book: "Revelation",
      versenumber: "1:20",
      read: {
        English: "The seven stars are the angels of the seven churches: and the seven candlesticks which thou sawest...",
        Cymraeg: "Y saith seren, angylion y saith eglwys ydynt: a'r saith ganhwyllbren a welaist, y saith eglwys ydynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse38: {
      book: "Revelation",
      versenumber: "2:1",
      read: {
        English: "He that holdeth the seven stars in His right hand",
        Cymraeg: "yr hwn sydd yn dal y saith seren yn ei law ddeau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse39: {
      book: "Revelation",
      versenumber: "2:2",
      read: {
        English: "I know thy works, and thy labour, and thy patience",
        Cymraeg: "Mi a adwaen dy weithredoedd di, a'th lafur, a'th amynedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse40: {
      book: "Revelation",
      versenumber: "2:2",
      read: {
        English: "which say they are apostles, and are not, and hast found them liars",
        Cymraeg: "y rhai sydd yn dywedyd eu bod yn apostolion, ac nid ydynt; a chael ohonot hwynt yn gelwyddog",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse41: {
      book: "Revelation",
      versenumber: "2:3",
      read: {
        English: "and for my name's sake hast laboured, and hast not fainted",
        Cymraeg: "ac a gymeraist boen er mwyn fy enw i, ac ni ddiffygiaist",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse42: {
      book: "Revelation",
      versenumber: "2:4",
      read: {
        English: "Nevertheless I have somewhat against thee, because thou hast left thy first love",
        Cymraeg: "Eithr y mae gennyf beth yn dy erbyn, am i ti ymadael â'th gariad cyntaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse43: {
      book: "Revelation",
      versenumber: "2:5",
      read: {
        English: "Remember therefore from whence thou art fallen, and repent, and do the first works",
        Cymraeg: "Cofia gan hynny o ba le y syrthiaist, ac edifarha, a gwna'r gweithredoedd cyntaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse44: {
      book: "Revelation",
      versenumber: "2:5",
      read: {
        English: "or else I will come unto thee quickly, and will remove thy candlestick",
        Cymraeg: "ac onid e, yr wyf fi yn dyfod atat ti ar frys, ac mi a symudaf dy ganhwyllbren di allan o'i le",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse45: {
      book: "Revelation",
      versenumber: "2:7",
      read: {
        English: "To him that overcometh will I give to eat of the tree of life",
        Cymraeg: "I'r hwn sydd yn gorchfygu, y rhoddaf iddo fwyta o bren y bywyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse46: {
      book: "Revelation",
      versenumber: "2:9",
      read: {
        English: "I know thy works, and tribulation, and poverty",
        Cymraeg: "Mi a adwaen dy weithredoedd di, a'th gystudd, a'th dlodi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse47: {
      book: "Revelation",
      versenumber: "2:9",
      read: {
        English: "and I know the blasphemy of them which say they are Jews, and are not",
        Cymraeg: "ac mi a adwaen gabledd y rhai sydd yn dywedyd eu bod yn Iddewon, ac nid ydynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse48: {
      book: "Revelation",
      versenumber: "2:10",
      read: {
        English: "Fear none of those things which thou shalt suffer: behold...",
        Cymraeg: "Nac ofna ddim o'r pethau yr ydwyt i'w dioddef. Wele",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse49: {
      book: "Revelation",
      versenumber: "2:10",
      read: {
        English: "be thou faithful unto death, and I will give thee a crown of life",
        Cymraeg: "Bydd ffyddlon hyd angau, ac mi a roddaf i ti goron y bywyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse50: {
      book: "Revelation",
      versenumber: "2:11",
      read: {
        English: "He that overcometh shall not be hurt of the second death",
        Cymraeg: "Yr hwn sydd yn gorchfygu, ni chaiff ddim niwed gan yr ail farwolaeth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse51: {
      book: "Revelation",
      versenumber: "2:13",
      read: {
        English: "and thou holdest fast my name, and hast not denied my faith",
        Cymraeg: "ac yr wyt yn dal fy enw i, ac ni wedaist fy ffydd i",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse52: {
      book: "Revelation",
      versenumber: "2:16",
      read: {
        English: "Repent; or else I will come unto thee quickly",
        Cymraeg: "Edifarha; ac os amgen, yr wyf fi yn dyfod atat ar frys",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse53: {
      book: "Revelation",
      versenumber: "2:18",
      read: {
        English: "These things saith the Son of God, who hath His eyes like unto a flame of fire",
        Cymraeg: "Y pethau hyn y mae Mab Duw yn eu dywedyd, yr hwn sydd â'i lygaid fel fflam dân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse54: {
      book: "Revelation",
      versenumber: "2:17",
      read: {
        English: "and in the stone a new name written, which no man knoweth saving he that receiveth it",
        Cymraeg: "ac ar y garreg enw newydd wedi ei ysgrifennu, yr hwn nid edwyn neb, ond yr hwn sydd yn ei dderbyn",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse55: {
      book: "Revelation",
      versenumber: "2:23",
      read: {
        English: "and all the churches shall know that I am He which searcheth the reins and hearts",
        Cymraeg: "a'r holl eglwysi a gânt wybod mai myfi yw'r hwn sydd yn chwilio'r arennau a'r calonnau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse56: {
      book: "Revelation",
      versenumber: "2:28",
      read: {
        English: "And I will give him the morning star",
        Cymraeg: "Ac mi a roddaf iddo'r seren fore",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse57: {
      book: "Revelation",
      versenumber: "2:29",
      read: {
        English: "He that hath an ear, let him hear what the Spirit saith unto the churches",
        Cymraeg: "Yr hwn sydd ganddo glust, gwrandawed beth y mae'r Ysbryd yn ei ddywedyd wrth yr eglwysi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse58: {
      book: "Revelation",
      versenumber: "3:1",
      read: {
        English: "I know thy works, that thou hast a name that thou livest, and art dead",
        Cymraeg: "Mi a adwaen dy weithredoedd di, oblegid y mae gennyt enw dy fod yn fyw, a marw ydwyt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse59: {
      book: "Revelation",
      versenumber: "3:2",
      read: {
        English: "Be watchful, and strengthen the things which remain, that are ready to die",
        Cymraeg: "Bydd wyliadwrus, a sicrha'r pethau sydd yn ôl, y rhai sydd barod i farw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse60: {
      book: "Revelation",
      versenumber: "3:3",
      read: {
        English: "Remember therefore how thou hast received and heard, and hold fast, and repent",
        Cymraeg: "Cofia gan hynny pa fodd y derbyniaist ac y clywaist, a chadw, ac edifarha",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse61: {
      book: "Revelation",
      versenumber: "3:5",
      read: {
        English: "and I will not blot out his name out of the book of life, but I will confess his name",
        Cymraeg: "ac ni ddileaf ei enw ef allan o lyfr y bywyd, ond mi a gyffesaf ei enw ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse62: {
      book: "Revelation",
      versenumber: "3:6",
      read: {
        English: "He that hath an ear, let him hear what the Spirit saith unto the churches",
        Cymraeg: "Yr hwn sydd ganddo glust, gwrandawed beth y mae'r Ysbryd yn ei ddywedyd wrth yr eglwysi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse63: {
      book: "Revelation",
      versenumber: "3:4",
      read: {
        English: "which have not defiled their garments; and they shall walk with me in white: for they are worthy",
        Cymraeg: "y rhai ni halogasant eu dillad; a hwy a rodiant gyda mi mewn dillad gwynion: oblegid teilwng ydynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse64: {
      book: "Revelation",
      versenumber: "3:7",
      read: {
        English: "These things saith He that is holy, He that is true, He that hath the key of David",
        Cymraeg: "Y pethau hyn y mae y Sanctaidd, y Cywir, yn eu dywedyd, yr hwn sydd ganddo agoriad Dafydd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse65: {
      book: "Revelation",
      versenumber: "3:7",
      read: {
        English: "He that openeth, and no man shutteth; and shutteth, and no man openeth",
        Cymraeg: "yr hwn sydd yn agoryd, ac nid yw neb yn cau; ac yn cau, ac nid yw neb yn agoryd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse66: {
      book: "Revelation",
      versenumber: "3:8",
      read: {
        English: "I know thy works: behold, I have set before thee an open door, and no man can shut it",
        Cymraeg: "Mi a adwaen dy weithredoedd: wele, rhoddais ger dy fron ddrws agored, ac ni ddichon neb ei gau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse67: {
      book: "Revelation",
      versenumber: "3:8",
      read: {
        English: "for thou hast a little strength, and hast kept my word, and hast not denied my name",
        Cymraeg: "canys y mae gennyt ychydig nerth, a thi a gedwaist fy ngair, ac ni wedaist fy enw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse68: {
      book: "Revelation",
      versenumber: "3:9",
      read: {
        English: "which say they are Jews, and are not, but do lie; behold, I will...",
        Cymraeg: "y rhai sydd yn dywedyd eu bod yn Iddewon, ac nid ydynt, ond dywedyd celwydd y maent; wele, meddaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse69: {
      book: "Revelation",
      versenumber: "3:9",
      read: {
        English: "I will make them to come and worship before thy feet, and to know that I have loved thee",
        Cymraeg: "gwnaf iddynt ddyfod ac addoli o flaen dy draed, a gwybod fy mod i yn dy garu di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse70: {
      book: "Revelation",
      versenumber: "3:11",
      read: {
        English: "Behold, I come quickly: hold that fast which thou hast, that no man take thy crown",
        Cymraeg: "Wele, yr wyf yn dyfod ar frys: dal yr hyn sydd gennyt, fel na ddygo neb dy goron di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse71: {
      book: "Revelation",
      versenumber: "3:12",
      read: {
        English: "Him that overcometh will I make a pillar in the temple of my God",
        Cymraeg: "Yr hwn sydd yn gorchfygu, mi a'i gwnaf ef yn golofn yn nheml fy Nuw i",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse72: {
      book: "Revelation",
      versenumber: "3:12",
      read: {
        English: "and I will write upon him the name of my God",
        Cymraeg: "ac mi a ysgrifennaf arno ef enw fy Nuw i",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse73: {
      book: "Revelation",
      versenumber: "3:12",
      read: {
        English: "and I will write upon him my new name",
        Cymraeg: "ac mi a ysgrifennaf arno ef fy enw newydd i",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse74: {
      book: "Revelation",
      versenumber: "3:13",
      read: {
        English: "He that hath an ear, let him hear what the Spirit saith unto the churches",
        Cymraeg: "Yr hwn sydd ganddo glust, gwrandawed beth y mae'r Ysbryd yn ei ddywedyd wrth yr eglwysi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse75: {
      book: "Revelation",
      versenumber: "3:14",
      read: {
        English: "These things saith the Amen, the faithful and true witness, the beginning of the creation of God",
        Cymraeg: "Y pethau hyn y mae Amen yn eu dywedyd, y Tyst ffyddlon a chywir, dechreuad creadigaeth Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse76: {
      book: "Revelation",
      versenumber: "3:19",
      read: {
        English: "As many as I love, I rebuke and chasten: be zealous therefore, and repent",
        Cymraeg: "Yr wyf fi yn argyhoeddi, ac yn ceryddu'r sawl yr wyf yn eu caru: am hynny bydded gennyt sêl, ac edifarha",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse77: {
      book: "Revelation",
      versenumber: "3:20",
      read: {
        English: "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him",
        Cymraeg: "Wele, yr wyf yn sefyll wrth y drws, ac yn curo: os clyw neb fy llais i, ac agoryd y drws, mi a ddeuaf i mewn ato ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse78: {
      book: "Revelation",
      versenumber: "3:21",
      read: {
        English: "To him that overcometh will I grant to sit with me in my throne, even as I also overcame",
        Cymraeg: "Yr hwn sydd yn gorchfygu, rhoddaf iddo ef eistedd gyda mi ar fy ngorseddfainc, megis y gorchfygais innau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse79: {
      book: "Revelation",
      versenumber: "3:22",
      read: {
        English: "He that hath an ear, let him hear what the Spirit saith unto the churches",
        Cymraeg: "Yr hwn sydd ganddo glust, gwrandawed beth y mae'r Ysbryd yn ei ddywedyd wrth yr eglwysi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse80: {
      book: "Revelation",
      versenumber: "4:1",
      read: {
        English: "After this I looked, and, behold, a door was opened in heaven",
        Cymraeg: "Ar ôl y pethau hyn yr edrychais; ac wele ddrws wedi ei agoryd yn y nef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse81: {
      book: "Revelation",
      versenumber: "4:1",
      read: {
        English: "as it were of a trumpet talking with me; which said, Come up hither, and I will show thee things...",
        Cymraeg: "a'r llais cyntaf a glywais oedd fel llais utgorn yn ymddiddan â mi, gan ddywedyd, Dring i fyny yma...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse82: {
      book: "Revelation",
      versenumber: "4:2",
      read: {
        English: "and, behold, a throne was set in heaven, and one sat on the throne",
        Cymraeg: "ac wele, yr oedd gorseddfainc wedi ei gosod yn y nef, ac un yn eistedd ar yr orseddfainc",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse83: {
      book: "Revelation",
      versenumber: "4:3",
      read: {
        English: "And He that sat was to look upon like a jasper and a sardine stone: and there was a rainbow...",
        Cymraeg: "A'r hwn oedd yn eistedd oedd yn debyg yr olwg arno i faen iasbis a sardin: ac yr oedd enfys...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse84: {
      book: "Revelation",
      versenumber: "4:4",
      read: {
        English: "and upon the seats I saw four and twenty elders sitting, clothed in white raiment",
        Cymraeg: "ac ar y gorseddfeinciau y gwelais bedwar henuriad ar hugain yn eistedd, wedi eu gwisgo mewn dillad gwynion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse85: {
      book: "Revelation",
      versenumber: "4:5",
      read: {
        English: "And out of the throne proceeded lightnings and thunderings and voices",
        Cymraeg: "Ac yr oedd yn dyfod allan o'r orseddfainc fellt, a tharanau, a lleisiau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse86: {
      book: "Revelation",
      versenumber: "4:6",
      read: {
        English: "And before the throne there was a sea of glass like unto crystal",
        Cymraeg: "Ac o flaen yr orseddfainc yr ydoedd môr o wydr, yn debyg i grisial",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse87: {
      book: "Revelation",
      versenumber: "4:6",
      read: {
        English: "and round about the throne, were four beasts full of eyes before and behind",
        Cymraeg: "ac ynghylch yr orseddfainc, yr oedd pedwar anifail yn llawn o lygaid o'r tu blaen ac o'r tu ôl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse88: {
      book: "Revelation",
      versenumber: "4:7",
      read: {
        English: "And the first beast was like a lion, and the second beast like a calf, and the third beast had a face as a man...",
        Cymraeg: "A'r anifail cyntaf oedd debyg i lew, a'r ail anifail yn debyg i lo, a'r trydydd anifail oedd ganddo wyneb fel dyn...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse89: {
      book: "Revelation",
      versenumber: "4:8",
      read: {
        English: "And the four beasts had each of them six wings about him; and they were full of eyes within",
        Cymraeg: "ac yr oeddynt oddi fewn yn llawn llygaid",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse90: {
      book: "Revelation",
      versenumber: "4:8",
      read: {
        English: "day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come",
        Cymraeg: "gan ddywedyd, Sanct, Sanct, Sanct, Arglwydd Dduw Hollalluog, yr hwn oedd, a'r hwn sydd, a'r hwn sydd i ddyfod",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse91: {
      book: "Revelation",
      versenumber: "4:10",
      read: {
        English: "and worship Him that liveth for ever and ever, and cast their crowns before the throne...",
        Cymraeg: "yn addoli'r hwn sydd yn byw yn oes oesoedd, ac yn bwrw eu coronau gerbron yr orseddfainc",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse92: {
      book: "Revelation",
      versenumber: "4:11",
      read: {
        English: "Thou art worthy, O Lord, to receive glory and honour and power...",
        Cymraeg: "Teilwng wyt, O Arglwydd, i dderbyn gogoniant, ac anrhydedd, a gallu",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse93: {
      book: "Revelation",
      versenumber: "5:2",
      read: {
        English: "with a loud voice, Who is worthy to open the book, and to loose the seals thereof?",
        Cymraeg: "yn cyhoeddi â llef uchel, Pwy sydd deilwng i agoryd y llyfr, ac i ddatod ei seliau ef?",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse94: {
      book: "Revelation",
      versenumber: "5:3",
      read: {
        English: "And no man in heaven, nor in earth, neither under the earth, was able to open the book, neither to look thereon",
        Cymraeg: "Ac nid oedd neb yn y nef, nac yn y ddaear, na than y ddaear, yn gallu agoryd y llyfr, nac edrych arno",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse95: {
      book: "Revelation",
      versenumber: "5:4",
      read: {
        English: "And I wept much, because no man was found worthy to open and to read the book",
        Cymraeg: "Ac mi a wylais lawer, o achos na chaed neb yn deilwng i agoryd ac i ddarllen y llyfr, nac i edrych arno",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse96: {
      book: "Revelation",
      versenumber: "5:5",
      read: {
        English: "And one of the elders saith unto me, Weep not: behold, the Lion of the tribe of Judah...",
        Cymraeg: "Ac un o'r henuriaid a ddywedodd wrthyf, Nac wyla: wele, y Llew yr hwn sydd o lwyth Jwda",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse97: {
      book: "Revelation",
      versenumber: "5:5",
      read: {
        English: "the Root of David, hath prevailed to open the book, and to loose the seven seals thereof",
        Cymraeg: "Gwreiddyn Dafydd, a orchfygodd i agoryd y llyfr, ac i ddatod ei saith sêl ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse98: {
      book: "Revelation",
      versenumber: "5:6",
      read: {
        English: "in the midst of the elders, stood a Lamb as it had been slain, having seven horns and seven eyes",
        Cymraeg: "yng nghanol yr henuriaid, yr oedd Oen yn sefyll megis wedi ei ladd, a chanddo saith gorn, a saith lygad",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse99: {
      book: "Revelation",
      versenumber: "5:7",
      read: {
        English: "And he came and took the book out of the right hand of Him that sat upon the throne",
        Cymraeg: "Ac efe a ddaeth, ac a gymerth y llyfr o ddeheulaw'r hwn oedd yn eistedd ar yr orseddfainc",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse100: {
      book: "Revelation",
      versenumber: "5:8",
      read: {
        English: "fell down before the Lamb, having every one of them harps, and golden vials full of odours",
        Cymraeg: "a syrthiasant gerbron yr Oen; a chan bob un ohonynt yr oedd telynau, a ffiolau aur yn llawn o arogl-darth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse101: {
      book: "Revelation",
      versenumber: "5:9",
      read: {
        English: "And they sung a new song, saying, Thou art worthy to take the book, and to open the seals thereof",
        Cymraeg: "A hwy a ganasant ganiad newydd, gan ddywedyd, Teilwng wyt ti i gymryd y llyfr, ac i agoryd ei seliau ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse102: {
      book: "Revelation",
      versenumber: "5:9",
      read: {
        English: "and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation",
        Cymraeg: "oblegid ti a laddwyd, ac a'n prynaist ni i Dduw trwy dy waed, allan o bob llwyth, ac iaith, a phobl, a chenedl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse103: {
      book: "Revelation",
      versenumber: "5:12",
      read: {
        English: "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength...",
        Cymraeg: "Teilwng yw'r Oen, yr hwn a laddwyd, i dderbyn gallu, a chyfoeth, a doethineb, a chadernid...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse104: {
      book: "Revelation",
      versenumber: "5:13",
      read: {
        English: "and glory, and power, be unto Him that sitteth upon the throne, and unto the Lamb for ever and ever",
        Cymraeg: "I'r hwn sydd yn eistedd ar yr orseddfainc, ac i'r Oen, y byddo'r fendith, a'r anrhydedd, a'r gogoniant",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse105: {
      book: "Revelation",
      versenumber: "5:14",
      read: {
        English: "And the four and twenty elders fell down and worshipped Him that liveth for ever and ever",
        Cymraeg: "A'r pedwar henuriad ar hugain a syrthiasant i lawr, ac a addolasant yr hwn sydd yn byw yn oes oesoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse106: {
      book: "Revelation",
      versenumber: "6:1",
      read: {
        English: "and I heard, as it were the noise of thunder, one of the four beasts saying, Come and see",
        Cymraeg: "ac mi a glywais un o'r pedwar anifail yn dywedyd, fel trwst taran, Tyred, a gwêl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse107: {
      book: "Revelation",
      versenumber: "6:9",
      read: {
        English: "I saw under the altar the souls of them that were slain for the word of God",
        Cymraeg: "mi a welais dan yr allor eneidiau'r rhai a laddesid am air Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse108: {
      book: "Revelation",
      versenumber: "6:10",
      read: {
        English: "And they cried with a loud voice, saying, How long, O Lord, holy and true",
        Cymraeg: "A hwy a lefasant â llef uchel, gan ddywedyd, Pa hyd, Arglwydd, sanctaidd a chywir",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse109: {
      book: "Revelation",
      versenumber: "6:11",
      read: {
        English: "And white robes were given unto every one of them; and it was said unto them...",
        Cymraeg: "A gynau gwynion a roed i bob un ohonynt; a dywedwyd wrthynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse110: {
      book: "Revelation",
      versenumber: "6:11",
      read: {
        English: "until their fellowservants also and their brethren, that should be killed as they were, should be fulfilled",
        Cymraeg: "hyd oni chyflawnid rhif eu cyd-weision a'u brodyr, y rhai oedd i gael eu lladd, megis ag y cawsent hwythau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse111: {
      book: "Revelation",
      versenumber: "6:12",
      read: {
        English: "and the sun became black as sackcloth of hair, and the moon became as blood",
        Cymraeg: "a'r haul a aeth yn ddu fel sachlen flew, a'r lleuad a aeth fel gwaed",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse112: {
      book: "Revelation",
      versenumber: "6:13",
      read: {
        English: "And the stars of heaven fell unto the earth",
        Cymraeg: "A sêr y nef a syrthiasant ar y ddaear",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse113: {
      book: "Revelation",
      versenumber: "6:14",
      read: {
        English: "and every mountain and island were moved out of their places",
        Cymraeg: "a phob mynydd ac ynys a symudwyd allan o'u lleoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse114: {
      book: "Revelation",
      versenumber: "6:16",
      read: {
        English: "from the face of Him that sitteth on the throne, and from the wrath of the Lamb",
        Cymraeg: "o ŵydd yr hwn sydd yn eistedd ar yr orseddfainc, ac oddi wrth lid yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse115: {
      book: "Revelation",
      versenumber: "6:17",
      read: {
        English: "For the great day of His wrath is come; and who shall be able to stand?",
        Cymraeg: "Canys daeth dydd mawr ei ddicter ef; a phwy a ddichon sefyll?",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse116: {
      book: "Revelation",
      versenumber: "7:1",
      read: {
        English: "holding the four winds of the earth, that the wind should not blow on the earth...",
        Cymraeg: "yn dal pedair gwynt y ddaear, fel na chwythai'r gwynt ar y ddaear",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse117: {
      book: "Revelation",
      versenumber: "7:3",
      read: {
        English: "till we have sealed the servants of our God in their foreheads",
        Cymraeg: "nes darfod i ni selio gwasanaethwyr ein Duw ni yn eu talcennau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse118: {
      book: "Revelation",
      versenumber: "7:4",
      read: {
        English: "and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel",
        Cymraeg: "yr oedd wedi eu selio gant a phedair a deugain o filoedd o holl lwythau meibion Israel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse119: {
      book: "Revelation",
      versenumber: "7:9",
      read: {
        English: "of all nations, and kindreds, and people, and tongues, stood before the throne...",
        Cymraeg: "o bob cenedl, a llwythau, a phobloedd, ac ieithoedd, yn sefyll gerbron yr orseddfainc",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse120: {
      book: "Revelation",
      versenumber: "7:9",
      read: {
        English: "and before the Lamb, clothed with white robes, and palms in their hands",
        Cymraeg: "a cherbron yr Oen, wedi eu gwisgo mewn gynau gwynion, a phalmwydd yn eu dwylo",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse121: {
      book: "Revelation",
      versenumber: "7:10",
      read: {
        English: "And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb",
        Cymraeg: "Ac yn llefain â llef uchel, gan ddywedyd, Iachawdwriaeth i'n Duw ni, yr hwn sydd yn eistedd ar yr orseddfainc, ac i'r Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse122: {
      book: "Revelation",
      versenumber: "7:11",
      read: {
        English: "and fell before the throne on their faces, and worshipped God",
        Cymraeg: "ac a syrthiasant gerbron yr orseddfainc ar eu hwynebau, ac a addolasant Dduw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse123: {
      book: "Revelation",
      versenumber: "7:12",
      read: {
        English: "Blessing, and glory, and wisdom, and thanksgiving, and honour, and power, and might, be unto our God for ever",
        Cymraeg: "Y fendith, a'r gogoniant, a'r doethineb, a'r diolch, a'r anrhydedd, a'r gallu, a'r nerth, a fyddo i'n Duw ni yn oes oesoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse124: {
      book: "Revelation",
      versenumber: "7:14",
      read: {
        English: "and have washed their robes, and made them white in the blood of the Lamb",
        Cymraeg: "ac a olchasant eu gynau, ac a'u canasant hwy yng ngwaed yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse125: {
      book: "Revelation",
      versenumber: "7:15",
      read: {
        English: "before the throne of God, and serve Him day and night in His temple",
        Cymraeg: "gerbron gorseddfainc Duw, ac yn ei wasanaethu ef ddydd a nos yn ei deml",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse126: {
      book: "Revelation",
      versenumber: "7:16",
      read: {
        English: "They shall hunger no more, neither thirst any more...",
        Cymraeg: "Ni fydd arnynt na newyn mwyach, na syched mwyach",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse127: {
      book: "Revelation",
      versenumber: "7:17",
      read: {
        English: "For the Lamb which is in the midst of the throne shall feed them",
        Cymraeg: "Oblegid yr Oen, yr hwn sydd yng nghanol yr orseddfainc, a'u bugeilia hwynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse128: {
      book: "Revelation",
      versenumber: "7:17",
      read: {
        English: "and God shall wipe away all tears from their eyes",
        Cymraeg: "a Duw a sych ymaith bob deigr oddi wrth eu llygaid hwynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse129: {
      book: "Revelation",
      versenumber: "8:1",
      read: {
        English: "And when He had opened the seventh seal, there was silence in heaven about the space of half an hour",
        Cymraeg: "Aphan agorodd efe y seithfed sêl, yr ydoedd gosteg yn y nef megis dros hanner awr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse130: {
      book: "Revelation",
      versenumber: "8:7",
      read: {
        English: "The first angel sounded, and there followed hail and fire mingled with blood",
        Cymraeg: "A'r angel cyntaf a utganodd; a bu cenllysg a thân wedi eu cymysgu â gwaed",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse131: {
      book: "Revelation",
      versenumber: "8:7",
      read: {
        English: "and the third part of trees was burnt up, and all green grass was burnt up",
        Cymraeg: "a thraean y prennau a losgwyd, a'r holl laswellt a losgwyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse132: {
      book: "Revelation",
      versenumber: "8:8",
      read: {
        English: "and the third part of the sea became blood",
        Cymraeg: "a thraean y môr a aeth yn waed",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse133: {
      book: "Revelation",
      versenumber: "8:12",
      read: {
        English: "and the third part of the sun was smitten, and the third part of the moon, and the third part of the stars...",
        Cymraeg: "a thrawyd traean yr haul, a thraean y lleuad, a thraean y sêr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse134: {
      book: "Revelation",
      versenumber: "8:13",
      read: {
        English: "saying with a loud voice, Woe, woe, woe...",
        Cymraeg: "gan ddywedyd â llef uchel, Gwae, gwae, gwae",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse135: {
      book: "Revelation",
      versenumber: "9:4",
      read: {
        English: "but only those men which have not the seal of God in their foreheads",
        Cymraeg: "ond yn unig i'r dynion oedd heb sêl Duw yn eu talcennau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse136: {
      book: "Revelation",
      versenumber: "9:5",
      read: {
        English: "but that they should be tormented five months: and their torment was as the torment of a scorpion...",
        Cymraeg: "a chwi a gewch gystudd ddeng niwrnod. Bydd ffyddlon hyd angau, ac mi a roddaf i ti goron y bywyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse137: {
      book: "Revelation",
      versenumber: "9:6",
      read: {
        English: "And in those days shall men seek death, and shall not find it",
        Cymraeg: "Ac yn y dyddiau hynny y cais dynion farwolaeth, ac nis cânt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse138: {
      book: "Revelation",
      versenumber: "9:7",
      read: {
        English: "and their faces were as the faces of men...",
        Cymraeg: "a'u hwynebau fel wynebau dynion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse139: {
      book: "Revelation",
      versenumber: "9:8",
      read: {
        English: "And they had hair as the hair of women, and their teeth were as the teeth of lions...",
        Cymraeg: "A gwallt oedd ganddynt fel gwallt gwragedd, a'u dannedd oedd fel dannedd llewod",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse140: {
      book: "Revelation",
      versenumber: "9:9",
      read: {
        English: "...and the sound of their wings was as the sound of chariots of many horses running to battle",
        Cymraeg: "a llais eu hadenydd oedd fel llais cerbydau llawer o feirch yn rhedeg i ryfel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse141: {
      book: "Revelation",
      versenumber: "9:10",
      read: {
        English: "and there were stings in their tails: and their power was to hurt men five months",
        Cymraeg: "ac yr oedd colynnau yn eu cynffonnau hwy: a'u gallu oedd i ddrygu dynion bum mis",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse142: {
      book: "Revelation",
      versenumber: "9:15",
      read: {
        English: "for an hour, and a day, and a month, and a year, for to slay the third part of men",
        Cymraeg: "erbyn awr, a diwrnod, a mis, a blwyddyn, fel y lladdent y traean o'r dynion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse143: {
      book: "Revelation",
      versenumber: "9:17",
      read: {
        English: "and them that sat on them, having breastplates of fire, and of jacinth, and brimstone...",
        Cymraeg: "a'r rhai oedd yn eistedd arnynt, a chanddynt lurigau tanllyd, ac o liw hyacinth a brwmstan",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse144: {
      book: "Revelation",
      versenumber: "9:18",
      read: {
        English: "by the fire, and by the smoke, and by the brimstone, which issued out of their mouths",
        Cymraeg: "gan y tân, a chan y mwg, a chan y brwmstan, oedd yn dyfod allan o'u safnau hwynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse145: {
      book: "Revelation",
      versenumber: "9:19",
      read: {
        English: "their tails were like unto serpents, and had heads, and with them they do hurt",
        Cymraeg: "canys y cynffonnau oedd debyg i seirff, a phennau ganddynt; ac â'r rhai hynny y maent yn drygu",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse146: {
      book: "Revelation",
      versenumber: "10:1",
      read: {
        English: "And I saw another mighty angel come down from heaven, clothed with a cloud",
        Cymraeg: "Ac mi a welais angel cryf arall yn disgyn o'r nef, wedi ei wisgo â chwmwl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse147: {
      book: "Revelation",
      versenumber: "10:1",
      read: {
        English: "and a rainbow was upon his head, and his face was as it were the sun, and his feet as pillars of fire",
        Cymraeg: "ac enfys oedd ar ei ben, a'i wyneb ydoedd fel yr haul, a'i draed fel colofnau o dân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse148: {
      book: "Revelation",
      versenumber: "10:2",
      read: {
        English: "And he had in his hand a little book open...",
        Cymraeg: "Ac yr oedd ganddo yn ei law lyfr bychan wedi ei agoryd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse149: {
      book: "Revelation",
      versenumber: "10:2",
      read: {
        English: "and he set his right foot upon the sea, and his left foot on the earth",
        Cymraeg: "Ac efe a osododd ei droed deau ar y môr, a'i aswy ar y tir",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse150: {
      book: "Revelation",
      versenumber: "10:3",
      read: {
        English: "And cried with a loud voice, as when a lion roareth: and when he had cried...",
        Cymraeg: "Ac a lefodd â llef uchel, fel y rhua llew: ac wedi iddo lefain",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse151: {
      book: "Revelation",
      versenumber: "10:4",
      read: {
        English: "seven thunders uttered their voices",
        Cymraeg: "y saith daran a lefarasant eu llefau hwythau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse152: {
      book: "Revelation",
      versenumber: "10:6",
      read: {
        English: "And sware by Him that liveth for ever and ever, who created heaven",
        Cymraeg: "Ac a dyngodd i'r hwn sydd yn byw yn oes oesoedd, yr hwn a greodd y nef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse153: {
      book: "Revelation",
      versenumber: "10:6",
      read: {
        English: "...that there should be time no longer",
        Cymraeg: "na byddai amser mwyach",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse154: {
      book: "Revelation",
      versenumber: "10:7",
      read: {
        English: "...the mystery of God should be finished, as He hath declared to His servants the prophets",
        Cymraeg: "gorffennir dirgelwch Duw, fel y mynegodd efe i'w wasanaethwyr y proffwydi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse155: {
      book: "Revelation",
      versenumber: "10:8",
      read: {
        English: "Go and take the little book which is open in the hand of the angel...",
        Cymraeg: "Dos, cymer y llyfr bychan sydd wedi ei agoryd yn llaw'r angel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse156: {
      book: "Revelation",
      versenumber: "10:9",
      read: {
        English: "And he said unto me, Take it, and eat it up; and it shall make thy belly bitter...",
        Cymraeg: "Ac efe a ddywedodd wrthyf, Cymer, a bwyta ef yn llwyr: ac efe a chwerwa dy fol di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse157: {
      book: "Revelation",
      versenumber: "10:10",
      read: {
        English: "And I took the little book out of the angel's hand, and ate it up; and it was in my mouth sweet as honey...",
        Cymraeg: "Ac mi a gymerais y llyfr bychan o law'r angel, ac a'i bwyteais ef; ac yr oedd efe yn fy ngenau megis mêl yn felys",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse158: {
      book: "Revelation",
      versenumber: "10:11",
      read: {
        English: "And he said unto me, Thou must prophesy again before many peoples, and nations, and tongues, and kings",
        Cymraeg: "Ac efe a ddywedodd wrthyf, Rhaid i ti drachefn broffwydo i bobloedd, a chenhedloedd, ac ieithoedd, a brenhinoedd lawer",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse159: {
      book: "Revelation",
      versenumber: "11:1",
      read: {
        English: "Rise, and measure the temple of God, and the altar, and them that worship therein",
        Cymraeg: "Cyfod, a mesura deml Dduw, a'r allor, a'r rhai sydd yn addoli ynddi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse160: {
      book: "Revelation",
      versenumber: "11:3",
      read: {
        English: "And I will give power unto my two witnesses, and they shall prophesy a thousand two hundred and threescore days",
        Cymraeg: "Ac mi a roddaf allu i'm dau dyst, a hwy a broffwydant fil a deucant a thri ugain o ddyddiau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse161: {
      book: "Revelation",
      versenumber: "11:6",
      read: {
        English: "and have power over waters to turn them to blood, and to smite the earth with all plagues",
        Cymraeg: "ac awdurdod sydd ganddynt ar y dyfroedd, i'w troi hwynt yn waed, ac i daro'r ddaear â phob pla",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse162: {
      book: "Revelation",
      versenumber: "11:8",
      read: {
        English: "And their dead bodies shall lie in the street of the great city",
        Cymraeg: "A'u cyrff hwynt a orwedd ar heolydd y ddinas fawr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse163: {
      book: "Revelation",
      versenumber: "11:11",
      read: {
        English: "and they stood upon their feet; and great fear fell upon them which saw them",
        Cymraeg: "a hwy a safasant ar eu traed; ac ofn mawr a syrthiodd ar y rhai a'u gwelodd hwynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse164: {
      book: "Revelation",
      versenumber: "11:12",
      read: {
        English: "And they ascended up to heaven in a cloud; and their enemies beheld them",
        Cymraeg: "A hwy a aethant i fyny i'r nef mewn cwmwl; a'u gelynion a edrychasant arnynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse165: {
      book: "Revelation",
      versenumber: "11:13",
      read: {
        English: "and in the earthquake were slain of men seven thousand: and the remnant were affrighted...",
        Cymraeg: "a lladdwyd yn y ddaeargryn saith mil o wŷr: a'r lleill a ddychrynasant",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse166: {
      book: "Revelation",
      versenumber: "11:14",
      read: {
        English: "The second woe is past; and, behold, the third woe cometh quickly",
        Cymraeg: "Yr ail wae a aeth heibio; wele, y mae'r drydedd wae yn dyfod ar frys",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse167: {
      book: "Revelation",
      versenumber: "11:15",
      read: {
        English: "The kingdoms of this world are become the kingdoms of our Lord, and of His Christ...",
        Cymraeg: "Aeth teyrnasoedd y byd yn eiddo ein Harglwydd ni, a'i Grist ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse168: {
      book: "Revelation",
      versenumber: "11:16",
      read: {
        English: "...fell upon their faces, and worshipped God",
        Cymraeg: "a syrthiasant ar eu hwynebau, ac a addolasant Dduw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse169: {
      book: "Revelation",
      versenumber: "11:17",
      read: {
        English: "Saying, We give thee thanks, O Lord God Almighty, which art, and wast, and art to come",
        Cymraeg: "Gan ddywedyd, Yr ydym yn diolch i ti, O Arglwydd Dduw Hollalluog, yr hwn wyt, a'r hwn oeddit, a'r hwn wyt yn dyfod",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse170: {
      book: "Revelation",
      versenumber: "11:18",
      read: {
        English: "And the nations were angry, and thy wrath is come",
        Cymraeg: "A'r cenhedloedd a ddigiasant; a daeth dy ddig di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse171: {
      book: "Revelation",
      versenumber: "11:18",
      read: {
        English: "that they should be judged, and that thou shouldest give reward unto thy servants the prophets...",
        Cymraeg: "ac i roi gwobr i'th wasanaethwyr y proffwydi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse172: {
      book: "Revelation",
      versenumber: "11:18",
      read: {
        English: "and to the saints, and them that fear thy name, small and great...",
        Cymraeg: "ac i'r saint, ac i'r rhai sydd yn ofni dy enw, fychain a mawrion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse173: {
      book: "Revelation",
      versenumber: "11:18",
      read: {
        English: "and shouldest destroy them which destroy the earth",
        Cymraeg: "ac i ddifetha'r rhai sydd yn difetha'r ddaear",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse174: {
      book: "Revelation",
      versenumber: "11:19",
      read: {
        English: "And the temple of God was opened in heaven, and there was seen in His temple the ark of His testament",
        Cymraeg: "Ac agorwyd teml Dduw yn y nef; a gwelwyd arch ei gyfamod ef yn ei deml ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse175: {
      book: "Revelation",
      versenumber: "11:19",
      read: {
        English: "and there were lightnings, and voices, and thunderings, and an earthquake, and great hail",
        Cymraeg: "a bu mellt, a llefau, a tharanau, a daeargryn, a chenllysg mawr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse176: {
      book: "Revelation",
      versenumber: "12:8",
      read: {
        English: "And prevailed not; neither was their place found any more in heaven",
        Cymraeg: "Ac ni orfuant; a'u lle hwynt nis cafwyd mwyach yn y nef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse177: {
      book: "Revelation",
      versenumber: "12:10",
      read: {
        English: "And I heard a loud voice saying in heaven, Now is come salvation",
        Cymraeg: "Ac mi a glywais lef uchel yn dywedyd yn y nef, Yr awron y daeth iachawdwriaeth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse178: {
      book: "Revelation",
      versenumber: "12:10",
      read: {
        English: "the kingdom of our God, and the power of His Christ",
        Cymraeg: "a theyrnas ein Duw ni, a gallu ei Grist ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse179: {
      book: "Revelation",
      versenumber: "12:11",
      read: {
        English: "by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death",
        Cymraeg: "trwy waed yr Oen, a thrwy air eu tystiolaeth hwynt; ac ni charasant eu heinioes hyd angau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse180: {
      book: "Revelation",
      versenumber: "12:12",
      read: {
        English: "Therefore rejoice, ye heavens, and ye that dwell in them",
        Cymraeg: "Oherwydd hyn llawenhewch, y nefoedd, a'r rhai ydych yn trigo ynddynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse181: {
      book: "Revelation",
      versenumber: "12:17",
      read: {
        English: "and went to make war with the remnant of her seed, which keep the commandments of God",
        Cymraeg: "ac a aeth i wneuthur rhyfel â'r lleill o'i had hi, y rhai sydd yn cadw gorchmynion Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse182: {
      book: "Revelation",
      versenumber: "14:1",
      read: {
        English: "having His Father's name written in their foreheads",
        Cymraeg: "a chanddynt enw ei Dad ef yn ysgrifenedig yn eu talcennau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse183: {
      book: "Revelation",
      versenumber: "14:3",
      read: {
        English: "and no man could learn that song but the hundred and forty and four thousand...",
        Cymraeg: "ac ni allodd neb ddysgu'r gân, ond y pedair mil a'r saith ugeinmil",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse184: {
      book: "Revelation",
      versenumber: "14:4",
      read: {
        English: "These are they which follow the Lamb whithersoever He goeth",
        Cymraeg: "Y rhai hyn yw'r rhai sydd yn dilyn yr Oen pa le bynnag yr elo",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse185: {
      book: "Revelation",
      versenumber: "14:4",
      read: {
        English: "These were redeemed from among men, being the firstfruits unto God and to the Lamb",
        Cymraeg: "Y rhai hyn a brynwyd oddi wrth ddynion, yn flaenffrwyth i Dduw ac i'r Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse186: {
      book: "Revelation",
      versenumber: "14:5",
      read: {
        English: "And in their mouth was found no guile: for they are without fault before the throne of God",
        Cymraeg: "Ac yn eu genau ni chaed twyll: canys difai ydynt gerbron gorseddfainc Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse187: {
      book: "Revelation",
      versenumber: "14:6",
      read: {
        English: "and to every nation, and kindred, and tongue, and people",
        Cymraeg: "ac i bob cenedl, a llwyth, ac iaith, a phobl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse188: {
      book: "Revelation",
      versenumber: "14:7",
      read: {
        English: "and worship Him that made heaven, and earth, and the sea, and the fountains of waters",
        Cymraeg: "ac addolwch yr hwn a wnaeth y nef, a'r ddaear, a'r môr, a'r ffynhonnau dyfroedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse189: {
      book: "Revelation",
      versenumber: "15:1",
      read: {
        English: "great and marvellous, seven angels having the seven last plagues...",
        Cymraeg: "mawr, a rhyfeddol; saith angel a chanddynt y saith bla diwethaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse190: {
      book: "Revelation",
      versenumber: "15:2",
      read: {
        English: "And I saw as it were a sea of glass mingled with fire...",
        Cymraeg: "Ac mi a welais megis môr o wydr wedi ei gymysgu â thân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse191: {
      book: "Revelation",
      versenumber: "15:2",
      read: {
        English: "...stand on the sea of glass, having the harps of God",
        Cymraeg: "yn sefyll ar y môr gwydr, a thelynau Duw ganddynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse192: {
      book: "Revelation",
      versenumber: "15:3",
      read: {
        English: "of Moses the servant of God, and the song of the Lamb, saying...",
        Cymraeg: "ganu y maent gân Moses gwasanaethwr Duw, a chân yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse193: {
      book: "Revelation",
      versenumber: "15:3",
      read: {
        English: "Great and marvellous are thy works, Lord God Almighty; just and true are thy ways",
        Cymraeg: "Mawr a rhyfedd yw dy weithredoedd, O Arglwydd Dduw Hollalluog; cyfiawn a chywir yw dy ffyrdd di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse194: {
      book: "Revelation",
      versenumber: "15:4",
      read: {
        English: "Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy...",
        Cymraeg: "Pwy ni'th ofna di, O Arglwydd, ac ni ogonedda dy enw? oblegid tydi yn unig wyt sanctaidd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse195: {
      book: "Revelation",
      versenumber: "15:5",
      read: {
        English: "And after that I looked, and, behold, the temple of the tabernacle of the testimony in heaven was opened",
        Cymraeg: "Ac ar ôl hyn mi a edrychais, ac wele, yr ydoedd teml pabell y dystiolaeth yn y nef yn agored",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse196: {
      book: "Revelation",
      versenumber: "15:6",
      read: {
        English: "And the seven angels came out of the temple, having the seven plagues, clothed in pure and white linen...",
        Cymraeg: "A daeth y saith angel, y rhai yr oedd y saith bla ganddynt, allan o'r deml, wedi eu gwisgo mewn lliain pur a disglair",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse197: {
      book: "Revelation",
      versenumber: "15:7",
      read: {
        English: "seven golden vials full of the wrath of God, who liveth for ever and ever",
        Cymraeg: "saith ffiol aur, yn llawn o ddigofaint Duw, yr hwn sydd yn byw yn oes oesoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse198: {
      book: "Revelation",
      versenumber: "15:8",
      read: {
        English: "And the temple was filled with smoke from the glory of God, and from His power",
        Cymraeg: "A llanwyd y deml o fwg oddi wrth ogoniant Duw, ac oddi wrth ei nerth ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse199: {
      book: "Revelation",
      versenumber: "16:1",
      read: {
        English: "saying to the seven angels, Go your ways, and pour out the vials of the wrath of God upon the earth",
        Cymraeg: "yn dywedyd wrth y saith angel, Ewch ymaith, a thywelltwch ffiolau digofaint Duw ar y ddaear",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse200: {
      book: "Revelation",
      versenumber: "16:2",
      read: {
        English: "and there fell a noisome and grievous sore upon the men which had the mark of the beast...",
        Cymraeg: "a bu cornwyd drwg a blin ar y dynion oedd â nod y bwystfil arnynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse201: {
      book: "Revelation",
      versenumber: "16:3",
      read: {
        English: "And the second angel poured out his vial upon the sea; and it became as the blood of a dead man",
        Cymraeg: "A'r ail angel a dywalltodd ei ffiol ar y môr; ac efe a aeth fel gwaed dyn marw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse202: {
      book: "Revelation",
      versenumber: "16:4",
      read: {
        English: "And the third angel poured out his vial upon the rivers and fountains of waters; and they became blood",
        Cymraeg: "A'r trydydd angel a dywalltodd ei ffiol ar yr afonydd ac ar y ffynhonnau dyfroedd; a hwy a aethant yn waed",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse203: {
      book: "Revelation",
      versenumber: "16:5",
      read: {
        English: "And I heard the angel of the waters say, Thou art righteous, O Lord, which art, and wast, and shalt be...",
        Cymraeg: "Ac mi a glywais angel y dyfroedd yn dywedyd, Cyfiawn, O Arglwydd, ydwyt ti, yr hwn wyt, a'r hwn oeddit, a'r hwn a fyddi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse204: {
      book: "Revelation",
      versenumber: "16:8",
      read: {
        English: "And the fourth angel poured out his vial upon the sun; and power was given unto him to scorch men with fire",
        Cymraeg: "A'r pedwerydd angel a dywalltodd ei ffiol ar yr haul; a gallu a roed iddo i boethi dynion â thân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse205: {
      book: "Revelation",
      versenumber: "16:12",
      read: {
        English: "And the sixth angel poured out his vial upon the great river Euphrates; and the water thereof was dried up",
        Cymraeg: "A'r chweched angel a dywalltodd ei ffiol ar yr afon fawr Ewffrates; a sychodd ei dwfr hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse206: {
      book: "Revelation",
      versenumber: "16:15",
      read: {
        English: "Behold, I come as a thief...",
        Cymraeg: "Wele, yr wyf fi yn dyfod fel lleidr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse207: {
      book: "Revelation",
      versenumber: "16:17",
      read: {
        English: "and there came a great voice out of the temple of heaven, from the throne, saying, It is done",
        Cymraeg: "a daeth llef uchel allan o deml y nef, oddi wrth yr orseddfainc, yn dywedyd, Darfu",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse208: {
      book: "Revelation",
      versenumber: "16:18",
      read: {
        English: "And there were voices, and thunders, and lightnings",
        Cymraeg: "Ac yr oedd lleisiau a tharanau, a mellt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse209: {
      book: "Revelation",
      versenumber: "16:19",
      read: {
        English: "to give unto her the cup of the wine of the fierceness of His wrath",
        Cymraeg: "i roddi iddi gwpan gwin digofaint ei lid ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse210: {
      book: "Revelation",
      versenumber: "16:20",
      read: {
        English: "And every island fled away, and the mountains were not found",
        Cymraeg: "A phob ynys a ffodd ymaith, ac ni chafwyd y mynyddoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse211: {
      book: "Revelation",
      versenumber: "16:21",
      read: {
        English: "And there fell upon men a great hail out of heaven, every stone about the weight of a talent...",
        Cymraeg: "A chenllysg mawr, fel talentau, a syrthiasant o'r nef ar ddynion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse212: {
      book: "Revelation",
      versenumber: "17:1",
      read: {
        English: "And there came one of the seven angels which had the seven vials...",
        Cymraeg: "A daeth un o'r saith angel oedd â'r saith ffiol ganddynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse213: {
      book: "Revelation",
      versenumber: "17:2",
      read: {
        English: "and the inhabitants of the earth have been made drunk with the wine of her fornication",
        Cymraeg: "ac y meddwyd y rhai sydd yn trigo ar y ddaear gan win ei phuteindra hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse214: {
      book: "Revelation",
      versenumber: "17:14",
      read: {
        English: "These shall make war with the Lamb, and the Lamb shall overcome them: for He is Lord of lords, and King of kings",
        Cymraeg: "Y rhai hyn a ryfelant â'r Oen, a'r Oen a'u gorchfyga hwynt: oblegid Arglwydd arglwyddi ydyw, a Brenin brenhinoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse215: {
      book: "Revelation",
      versenumber: "18:4",
      read: {
        English: "saying, Come out of her, my people, that ye be not partakers of her sins",
        Cymraeg: "yn dywedyd, Deuwch allan ohoni hi, fy mhobl i, fel na byddoch gyd-gyfranogion o'i phechodau hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse216: {
      book: "Revelation",
      versenumber: "18:6",
      read: {
        English: "Reward her even as she rewarded you, and double unto her double according to her works...",
        Cymraeg: "Telwch iddi fel y talodd hithau i chwi, a dyblwch iddi'r dau cymaint yn ôl ei gweithredoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse217: {
      book: "Revelation",
      versenumber: "18:8",
      read: {
        English: "and she shall be utterly burned with fire: for strong is the Lord God who judgeth her",
        Cymraeg: "a hi a lwyr losgir â thân: oblegid cryf yw'r Arglwydd Dduw, yr hwn sydd yn ei barnu hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse218: {
      book: "Revelation",
      versenumber: "18:10",
      read: {
        English: "...for in one hour is thy judgment come",
        Cymraeg: "oblegid mewn un awr y daeth dy farn di",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse219: {
      book: "Revelation",
      versenumber: "18:17",
      read: {
        English: "For in one hour so great riches is come to nought...",
        Cymraeg: "oblegid mewn un awr yr anrheithiwyd cymaint cyfoeth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse220: {
      book: "Revelation",
      versenumber: "18:20",
      read: {
        English: "Rejoice over her, thou heaven, and ye holy apostles and prophets; for God hath avenged you on her",
        Cymraeg: "Llawenha o'i phlegid hi, y nef, a chwi, apostolion sanctaidd a phroffwydi; oblegid dialodd Duw arni drosoch chwi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse221: {
      book: "Revelation",
      versenumber: "18:21",
      read: {
        English: "And a mighty angel took up a stone like a great millstone, and cast it into the sea, saying...",
        Cymraeg: "Ac angel cadarn a gododd faen megis maen melin mawr, ac a'i bwriodd i'r môr, gan ddywedyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse222: {
      book: "Revelation",
      versenumber: "19:1",
      read: {
        English: "I heard a great voice of much people in heaven, saying, Halleluia; Salvation, and glory, and honour, and power...",
        Cymraeg: "Ac mi a glywais megis llef uchel gan dyrfa fawr yn y nef, yn dywedyd, Aleliwia; Iachawdwriaeth, a gogoniant...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse223: {
      book: "Revelation",
      versenumber: "19:2",
      read: {
        English: "For true and righteous are His judgments",
        Cymraeg: "Oblegid cywir a chyfiawn yw ei farnau ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse224: {
      book: "Revelation",
      versenumber: "19:4",
      read: {
        English: "And the four and twenty elders and the four beasts fell down and worshipped God",
        Cymraeg: "A syrthiodd y pedwar henuriad ar hugain a'r pedwar anifail i lawr, ac a addolasant Dduw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse225: {
      book: "Revelation",
      versenumber: "19:5",
      read: {
        English: "saying, Praise our God, all ye his servants, and ye that fear Him...",
        Cymraeg: "yn dywedyd, Moliennwch ein Duw ni, ei holl weision ef, a'r rhai ydych yn ei ofni ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse226: {
      book: "Revelation",
      versenumber: "19:6",
      read: {
        English: "And I heard as it were the voice of a great multitude, and as the voice of many waters...",
        Cymraeg: "Ac mi a glywais megis llef tyrfa fawr, ac megis llef dyfroedd lawer",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse227: {
      book: "Revelation",
      versenumber: "19:6",
      read: {
        English: "the voice of mighty thunderings, saying, Halleluia: for the Lord God omnipotent reigneth",
        Cymraeg: "ac megis llef taranau cryfion, yn dywedyd, Aleliwia: oblegid teyrnasodd yr Arglwydd Dduw Hollalluog",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse228: {
      book: "Revelation",
      versenumber: "19:7",
      read: {
        English: "Let us be glad and rejoice, and give honour to Him: for the marriage of the Lamb is come",
        Cymraeg: "Llawenychwn, a gorfoleddwn, a rhoddwn ogoniant iddo ef: oblegid daeth priodas yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse229: {
      book: "Revelation",
      versenumber: "19:7",
      read: {
        English: "for the marriage of the Lamb is come, and His wife hath made herself ready",
        Cymraeg: "oblegid daeth priodas yr Oen, a'i wraig ef a'i paratôdd ei hun",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse230: {
      book: "Revelation",
      versenumber: "19:8",
      read: {
        English: "And to her was granted that she should be arrayed in fine linen, clean and white",
        Cymraeg: "A chaniatawyd iddi gael ei gwisgo â lliain main glân a disglair",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse231: {
      book: "Revelation",
      versenumber: "19:8",
      read: {
        English: "for the fine linen is the righteousness of saints",
        Cymraeg: "canys y lliain main ydyw cyfiawnder y saint",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse232: {
      book: "Revelation",
      versenumber: "19:9",
      read: {
        English: "Blessed are they which are called unto the marriage supper of the Lamb",
        Cymraeg: "Bendigedig yw'r rhai a elwir i swper neithior yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse233: {
      book: "Revelation",
      versenumber: "19:10",
      read: {
        English: "I am thy fellowservant, and of thy brethren that have the testimony of Jesus",
        Cymraeg: "cyd-was ydwyf i ti, ac i'th frodyr y rhai sydd ganddynt dystiolaeth Iesu",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse234: {
      book: "Revelation",
      versenumber: "19:11",
      read: {
        English: "and behold a white horse; and He that sat upon him was called Faithful and True",
        Cymraeg: "ac wele farch gwyn; a'r hwn oedd yn eistedd arno a elwid Ffyddlon a Chywir",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse235: {
      book: "Revelation",
      versenumber: "19:11",
      read: {
        English: "and in righteousness He doth judge and make war",
        Cymraeg: "ac mewn cyfiawnder y mae efe yn barnu ac yn rhyfela",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse236: {
      book: "Revelation",
      versenumber: "19:12",
      read: {
        English: "His eyes were as a flame of fire, and on His head were many crowns; and He had a name written...",
        Cymraeg: "A'i lygaid oedd fel fflam dân, ac ar ei ben yr oedd coronau lawer: ac yr oedd ganddo enw yn ysgrifenedig",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse237: {
      book: "Revelation",
      versenumber: "19:13",
      read: {
        English: "And He was clothed with a vesture dipped in blood: and His name is called The Word of God",
        Cymraeg: "Ac yr oedd wedi ei wisgo â gwisg wedi ei throchi mewn gwaed: a gelwir ei enw ef, Gair Duw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse238: {
      book: "Revelation",
      versenumber: "19:14",
      read: {
        English: "And the armies which were in heaven followed Him upon white horses, clothed in fine linen, white and clean",
        Cymraeg: "A'r lluoedd oedd yn y nef a'i canlynasant ef ar feirch gwynion, wedi eu gwisgo â lliain main, gwyn, a glân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse239: {
      book: "Revelation",
      versenumber: "19:15",
      read: {
        English: "And out of His mouth goeth a sharp sword, that with it He should smite the nations",
        Cymraeg: "Ac allan o'i enau ef yr oedd yn dyfod gleddyf llym, i daro'r cenhedloedd ag ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse240: {
      book: "Revelation",
      versenumber: "19:15",
      read: {
        English: "and He shall rule them with a rod of iron: and He treadeth the winepress of the fierceness and wrath...",
        Cymraeg: "ac efe a'u bugeilia hwynt â gwialen haearn: ac efe sydd yn sathru cerwyn win digofaint a llid Duw Hollalluog",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse241: {
      book: "Revelation",
      versenumber: "19:16",
      read: {
        English: "And He hath on His vesture and on His thigh a name written, King Of Kings, And Lord Of Lords",
        Cymraeg: "ac ar ei forddwyd, enw wedi ei ysgrifennu, BRENIN BRENHINOEDD, AC ARGLWYDD ARGLWYDDI",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse242: {
      book: "Revelation",
      versenumber: "19:17",
      read: {
        English: "And I saw an angel standing in the sun; and he cried with a loud voice...",
        Cymraeg: "Ac mi a welais angel yn sefyll yn yr haul; ac efe a lefodd â llef uchel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse243: {
      book: "Revelation",
      versenumber: "19:17",
      read: {
        English: "saying to all the fowls that fly in the midst of heaven, Come and gather yourselves together unto the supper...",
        Cymraeg: "gan ddywedyd wrth yr holl adar oedd yn ehedeg trwy ganol y nef, Deuwch ac ymgesglwch ynghyd i swper...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse244: {
      book: "Revelation",
      versenumber: "19:20",
      read: {
        English: "These both were cast alive into a lake of fire burning with brimstone",
        Cymraeg: "Yn fyw y bwriwyd hwy ill dau i'r llyn tân yn llosgi â brwmstan",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse245: {
      book: "Revelation",
      versenumber: "19:21",
      read: {
        English: "And the remnant were slain with the sword of Him that sat upon the horse",
        Cymraeg: "A'r lleill a laddwyd â chleddyf yr hwn oedd yn eistedd ar y march",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse246: {
      book: "Revelation",
      versenumber: "20:3",
      read: {
        English: "and shut him up, and set a seal upon him...",
        Cymraeg: "ac a gaeodd arno, ac a seliodd arno ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse247: {
      book: "Revelation",
      versenumber: "20:4",
      read: {
        English: "And I saw thrones, and they sat upon them, and judgment was given unto them",
        Cymraeg: "Ac mi a welais orseddfeinciau, a hwy a eisteddasant arnynt, a barn a roed iddynt hwy",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse248: {
      book: "Revelation",
      versenumber: "20:4",
      read: {
        English: "and I saw the souls of them that were beheaded for the witness of Jesus...",
        Cymraeg: "ac mi a welais eneidiau'r rhai a dorrwyd eu pennau am dystiolaeth Iesu",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse249: {
      book: "Revelation",
      versenumber: "20:10",
      read: {
        English: "was cast into the lake of fire and brimstone, where the beast and the false prophet are",
        Cymraeg: "a fwriwyd i'r llyn o dân a brwmstan, lle y mae'r bwystfil a'r gau broffwyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse250: {
      book: "Revelation",
      versenumber: "20:10",
      read: {
        English: "...and shall be tormented day and night for ever and ever",
        Cymraeg: "a hwy a boenir ddydd a nos, yn oes oesoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse251: {
      book: "Revelation",
      versenumber: "20:11",
      read: {
        English: "And I saw a great white throne, and Him that sat on it, from whose face the earth and the heaven fled away...",
        Cymraeg: "Ac mi a welais orseddfainc wen fawr, a'r hwn oedd yn eistedd arni, oddi wrth wyneb yr hwn y ffodd y ddaear a'r nef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse252: {
      book: "Revelation",
      versenumber: "20:12",
      read: {
        English: "And I saw the dead, small and great, stand before God; and the books were opened...",
        Cymraeg: "Ac mi a welais y meirw, fychain a mawrion, yn sefyll gerbron Duw; a'r llyfrau a agorwyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse253: {
      book: "Revelation",
      versenumber: "20:12",
      read: {
        English: "...and another book was opened, which is the book of life",
        Cymraeg: "a llyfr arall a agorwyd, yr hwn yw llyfr y bywyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse254: {
      book: "Revelation",
      versenumber: "20:12",
      read: {
        English: "...and the dead were judged out of those things which were written in the books",
        Cymraeg: "...a barnwyd y meirw wrth y pethau oedd wedi eu hysgrifennu yn y llyfrau",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse255: {
      book: "Revelation",
      versenumber: "20:13",
      read: {
        English: "and death and hell delivered up the dead which were in them: and they were judged...",
        Cymraeg: "a marwolaeth ac uffern a roddasant i fyny y meirw oedd ynddynt hwythau: a hwy a farnwyd bob un yn ôl eu gweithredoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse256: {
      book: "Revelation",
      versenumber: "20:15",
      read: {
        English: "And whosoever was not found written in the book of life was cast into the lake of fire",
        Cymraeg: "A phwy bynnag ni chafwyd wedi ei ysgrifennu yn llyfr y bywyd, bwriwyd ef i'r llyn o dân",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse257: {
      book: "Revelation",
      versenumber: "21:1",
      read: {
        English: "for the first heaven and the first earth were passed away",
        Cymraeg: "canys y nef gyntaf a'r ddaear gyntaf a aeth heibio",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse258: {
      book: "Revelation",
      versenumber: "21:2",
      read: {
        English: "new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband",
        Cymraeg: "Jerwsalem newydd, yn dyfod oddi wrth Dduw i waered o'r nef, wedi ei pharatoi fel priodasferch wedi ei thrwsio i'w gŵr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse259: {
      book: "Revelation",
      versenumber: "21:3",
      read: {
        English: "and they shall be His people, and God Himself shall be with them, and be their God",
        Cymraeg: "a hwy a fyddant bobl iddo ef, a Duw ei hun a fydd gyda hwynt, ac a fydd yn Dduw iddynt",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse260: {
      book: "Revelation",
      versenumber: "21:4",
      read: {
        English: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow...",
        Cymraeg: "Ac fe sych Duw ymaith bob deigr oddi wrth eu llygaid hwynt; a marwolaeth ni bydd mwyach, na thristwch",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse261: {
      book: "Revelation",
      versenumber: "21:4",
      read: {
        English: "and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain...",
        Cymraeg: "a marwolaeth ni bydd mwyach, na thristwch, na llefain, na phoen ni bydd mwyach",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse262: {
      book: "Revelation",
      versenumber: "21:5",
      read: {
        English: "And He that sat upon the throne said, Behold, I make all things new",
        Cymraeg: "A dywedodd yr hwn oedd yn eistedd ar yr orseddfainc, Wele, yr wyf yn gwneuthur pob peth yn newydd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse263: {
      book: "Revelation",
      versenumber: "21:5",
      read: {
        English: "And He said unto me, Write: for these words are true and faithful",
        Cymraeg: "Ac efe a ddywedodd wrthyf, Ysgrifenna: canys y mae'r geiriau hyn yn gywir ac yn ffyddlon",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse264: {
      book: "Revelation",
      versenumber: "21:6",
      read: {
        English: "And He said unto me, It is done. I am Alpha and Omega, the beginning and the end",
        Cymraeg: "Ac efe a ddywedodd wrthyf, Darfu. Myfi yw Alffa ac Omega, y dechrau a'r diwedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse265: {
      book: "Revelation",
      versenumber: "21:6",
      read: {
        English: "I will give unto him that is athirst of the fountain of the water of life freely",
        Cymraeg: "I'r hwn sydd sychedig y rhoddaf o ffynnon dwfr y bywyd yn rhad",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse266: {
      book: "Revelation",
      versenumber: "21:7",
      read: {
        English: "He that overcometh shall inherit all things; and I will be his God, and he shall be my son",
        Cymraeg: "Yr hwn sydd yn gorchfygu, a etifedda bob peth: ac mi a fyddaf iddo ef yn Dduw, ac yntau a fydd i minnau yn fab",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse267: {
      book: "Revelation",
      versenumber: "21:9",
      read: {
        English: "And there came unto me one of the seven angels which had the seven vials full of the seven last plagues",
        Cymraeg: "A daeth ataf un o'r saith angel yr oedd y saith ffiol ganddynt yn llawn o'r saith bla diwethaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse268: {
      book: "Revelation",
      versenumber: "21:9",
      read: {
        English: "...and talked with me, saying, Come hither, I will shew thee the bride, the Lamb's wife",
        Cymraeg: "ac a ymddiddanodd â mi, gan ddywedyd, Tyred, mi a ddangosaf i ti'r briodasferch, gwraig yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse269: {
      book: "Revelation",
      versenumber: "21:10",
      read: {
        English: "And he carried me away in the spirit to a great and high mountain, and shewed me that great city...",
        Cymraeg: "Ac efe a'm dug i ymaith yn yr ysbryd i fynydd mawr ac uchel, ac a ddangosodd i mi'r ddinas fawr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse270: {
      book: "Revelation",
      versenumber: "21:10",
      read: {
        English: "the holy Jerusalem, descending out of heaven from God",
        Cymraeg: "Jerwsalem sanctaidd, yn disgyn allan o'r nef oddi wrth Dduw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse271: {
      book: "Revelation",
      versenumber: "21:11",
      read: {
        English: "Having the glory of God: and her light was like unto a stone most precious...",
        Cymraeg: "A gogoniant Duw ganddi: a'i golau hi oedd debyg i faen o'r gwerthfawrocaf",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse272: {
      book: "Revelation",
      versenumber: "21:12",
      read: {
        English: "And had a wall great and high, and had twelve gates, and at the gates twelve angels",
        Cymraeg: "Ac iddi fur mawr ac uchel, ac iddi ddeuddeg porth, ac wrth y pyrth ddeuddeg angel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse273: {
      book: "Revelation",
      versenumber: "21:12",
      read: {
        English: "and names written thereon, which are the names of the twelve tribes of the children of Israel",
        Cymraeg: "ac enwau wedi eu hysgrifennu arnynt, y rhai yw enwau deuddeg llwyth plant Israel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse274: {
      book: "Revelation",
      versenumber: "21:13",
      read: {
        English: "On the east three gates; on the north three gates; on the south three gates; and on the west three gates",
        Cymraeg: "O du'r dwyrain, tri phorth; o tu'r gogledd, tri phorth; o du'r deau, tri phorth; o du'r gorllewin, tri phorth",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse275: {
      book: "Revelation",
      versenumber: "21:14",
      read: {
        English: "And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb",
        Cymraeg: "Ac yr oedd mur y ddinas â deuddeg sylfaen iddo, ac ynddynt enwau deuddeg apostol yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse276: {
      book: "Revelation",
      versenumber: "21:15",
      read: {
        English: "And he that talked with me had a golden reed to measure the city, and the gates thereof, and the wall thereof",
        Cymraeg: "A'r hwn oedd yn ymddiddan â mi, oedd â chorsen aur ganddo, i fesuro'r ddinas, a'i phyrth hi, a'i mur",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse277: {
      book: "Revelation",
      versenumber: "21:16",
      read: {
        English: "And the city lieth foursquare, and the length is as large as the breadth",
        Cymraeg: "A'r ddinas sydd wedi ei gosod yn bedeirongl, a'i hyd sydd gymaint â'i lled",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse278: {
      book: "Revelation",
      versenumber: "21:17",
      read: {
        English: "an hundred and forty and four cubits, according to the measure of a man, that is, of the angel",
        Cymraeg: "yn gant a phedwar cufydd a deugain, wrth fesur dyn, hynny yw, eiddo'r angel",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse279: {
      book: "Revelation",
      versenumber: "21:18",
      read: {
        English: "And the building of the wall of it was of jasper: and the city was pure gold, like unto clear glass",
        Cymraeg: "Ac adeilad ei mur hi oedd o faen iasbis: a'r ddinas oedd aur pur, yn debyg i wydr gloyw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse280: {
      book: "Revelation",
      versenumber: "21:19",
      read: {
        English: "And the foundations of the wall of the city were garnished with all manner of precious stones",
        Cymraeg: "A seiliau mur y ddinas oedd wedi eu harddu â phob rhyw faen gwerthfawr",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse281: {
      book: "Revelation",
      versenumber: "21:19",
      read: {
        English: "The first foundation was jasper; the second, sapphire; the third, a chalcedony; the fourth, an emerald",
        Cymraeg: "Y sail cyntaf oedd faen iasbis; yr ail, saffir; y trydydd, chalcedon; y pedwerydd, smaragdus",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse282: {
      book: "Revelation",
      versenumber: "21:20",
      read: {
        English: "The fifth, sardonyx; the sixth, sardius; the seventh, chrysolyte; the eighth, beryl; the ninth...",
        Cymraeg: "Y pumed, sardonycs; y chweched, sardius; y seithfed, chrysolithus; yr wythfed, beryl; y nawfed, topasion",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse283: {
      book: "Revelation",
      versenumber: "21:21",
      read: {
        English: "And the twelve gates were twelve pearls: every several gate was of one pearl",
        Cymraeg: "A'r deuddeg porth, deuddeg perl oeddynt; a phob un o'r pyrth oedd o un perl",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse284: {
      book: "Revelation",
      versenumber: "21:21",
      read: {
        English: "...and the street of the city was pure gold, as it were transparent glass",
        Cymraeg: "a heol y ddinas oedd aur pur, fel gwydr gloyw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse285: {
      book: "Revelation",
      versenumber: "21:22",
      read: {
        English: "And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it",
        Cymraeg: "A theml ni welais ynddi: canys yr Arglwydd Dduw Hollalluog, a'r Oen, yw ei theml hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse286: {
      book: "Revelation",
      versenumber: "21:23",
      read: {
        English: "for the glory of God did lighten it, and the Lamb is the light thereof",
        Cymraeg: "canys gogoniant Duw a'i goleuodd hi, a'i goleuni hi ydyw'r Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse287: {
      book: "Revelation",
      versenumber: "21:24",
      read: {
        English: "And the nations of them which are saved shall walk in the light of it",
        Cymraeg: "A chenhedloedd y rhai cadwedig a rodiant yn ei goleuni hi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse288: {
      book: "Revelation",
      versenumber: "21:27",
      read: {
        English: "...but they which are written in the Lamb's book of life",
        Cymraeg: "ond y rhai sydd wedi eu hysgrifennu yn llyfr bywyd yr Oen",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse289: {
      book: "Revelation",
      versenumber: "22:5",
      read: {
        English: "for the Lord God giveth them light: and they shall reign for ever and ever",
        Cymraeg: "oblegid y mae'r Arglwydd Dduw yn goleuo iddynt: a hwy a deyrnasant yn oes oesoedd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse290: {
      book: "Revelation",
      versenumber: "22:6",
      read: {
        English: "...the Lord God of the holy prophets sent His angel to shew unto His servants the things which must shortly be done",
        Cymraeg: "ei angel i ddangos i'w wasanaethwyr y pethau sydd raid iddynt fod ar frys",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse291: {
      book: "Revelation",
      versenumber: "22:9",
      read: {
        English: "I am thy fellowservant, and of thy brethren the prophets, and of them which keep the sayings of this book",
        Cymraeg: "cyd-was ydwyf i ti, ac i'th frodyr y proffwydi, ac i'r rhai sydd yn cadw geiriau'r llyfr hwn. Addola Dduw",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse292: {
      book: "Revelation",
      versenumber: "22:10",
      read: {
        English: "And he saith unto me, Seal not the sayings of the prophecy of this book: for the time is at hand",
        Cymraeg: "Ac efe a ddywedodd wrthyf fi, Na selia eiriau proffwydoliaeth y llyfr hwn: oblegid y mae'r amser yn agos",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse293: {
      book: "Revelation",
      versenumber: "22:12",
      read: {
        English: "And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be",
        Cymraeg: "Ac wele, yr wyf yn dyfod ar frys; a'm gwobr sydd gyda mi, i roddi i bob un fel y byddo ei waith ef",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse294: {
      book: "Revelation",
      versenumber: "22:14",
      read: {
        English: "Blessed are they that do His commandments, that they may have right to the tree of life",
        Cymraeg: "Gwyn eu byd y rhai sydd yn gwneuthur ei orchmynion ef, fel y byddo iddynt fraint ym mhren y bywyd",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse295: {
      book: "Revelation",
      versenumber: "22:16",
      read: {
        English: "I Jesus have sent mine angel to testify unto you these things in the churches",
        Cymraeg: "Myfi Iesu a ddanfonais fy angel i dystiolaethu i chwi'r pethau hyn yn yr eglwysi",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse296: {
      book: "Revelation",
      versenumber: "22:17",
      read: {
        English: "And the Spirit and the bride say, Come. And let him that heareth say, Come",
        Cymraeg: "Ac y mae'r Ysbryd a'r briodasferch yn dywedyd, Tyred. A'r hwn sydd yn clywed, dyweded, Tyred",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse297: {
      book: "Revelation",
      versenumber: "22:18",
      read: {
        English: "If any man shall add unto these things, God shall add unto him the plagues that are written in this book",
        Cymraeg: "Os rhydd neb ddim at y pethau hyn, Duw a rydd ato ef y plâu sydd wedi eu hysgrifennu yn y llyfr hwn",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    },
    Verse298: {
      book: "Revelation",
      versenumber: "22:19",
      read: {
        English: "God shall take away his part out of the book of life, and out of the holy city, and from the things...",
        Cymraeg: "Duw a dynn ymaith ei ran ef allan o lyfr y bywyd, ac allan o'r ddinas sanctaidd, ac oddi wrth y pethau...",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      },
      abbreviation: {
        English: "REV",
        Cymraeg: "DAT",
        Français: "",
        Deutsch: "",
        Norsk: "",
        Íslenska: "",
        Suomi: "",
        Русский: "",
        عربي: ""
      }
    }
  };

  class verseReading {
    constructor() {
        this.language = CAST_VECTOR;
        this.verses = STRINGS_index_VERSEREAD;
        this.displayContainer = struct_VERSEREADING_wrapper;

        console.info("%c[Init] VerseManager initializing", "color: #4CAF50; font-weight: bold;", { language: this.language });

        this.deliverableVerses = this.buildDeliverableIndex();
        console.info("%c[Init] Deliverable verses count", "color: #2196F3;", this.deliverableVerses.length);

        this.lastDeliveredKey = userPreferences.instance("VERSEREADING");

        this.currentIndex = null;

        this.attachDevCycle();
        this.displayVerse();
    }

    buildDeliverableIndex() {
      const index = [];
      try {
        Object.entries(this.verses).forEach(([key, verse]) => {
          try {
            if (verse.read?.[this.language] && verse.abbreviation?.[this.language]) {
              index.push({ key, ...verse });
            }
          } catch (inner) {
            console.error("%c[Index] Failed processing verse", "color: #F44336;", key, inner);
          }
        });
      } catch (err) {
        console.error("%c[Index] Unexpected error building index", "color: #F44336;", err);
      }
      return index;
    }

    selectVerse() {
      try {
        if (!this.deliverableVerses.length) return null;

        const latestVerse = this.deliverableVerses[this.deliverableVerses.length - 1];

        // update tracking
        userPreferences.save("VERSEREADING", latestVerse.key);
        this.currentIndex = this.deliverableVerses.length - 1;
        this.lastDeliveredKey = latestVerse.key;

        console.info("%c[Select] Selected latest verse", "color: #280; font-weight: bold;", latestVerse.key);
        return latestVerse;
      } catch (err) {
        console.error("%c[Select] Exception selecting latest verse", "color: #ff0000; font-weight: bold;", err);
        return null;
      }
    }


    selectVerse_() {
      try {
        if (!this.deliverableVerses.length) return null;

        const weighted = this.deliverableVerses.map(v => ({
          verse: v,
          weight: v.key === this.lastDeliveredKey ? .28 : 1
        }));

        const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);
        const randomValue = Math.random() * totalWeight;

        let cumulative = 0;
        for (const w of weighted) {
          cumulative += w.weight;
          if (randomValue <= cumulative) {
            userPreferences.save("VERSEREADING", w.verse.key);

            this.currentIndex = this.deliverableVerses.findIndex(v => v.key === w.verse.key);
            this.lastDeliveredKey = w.verse.key;
            console.info("%c[Select] Selected verse", "color: #4CAF50; font-weight: bold;", w.verse.key);
            return w.verse;
          }
        }
      } catch {}
      return null;
    }

    displayVerse(verse = null) {
      try {
        verse ||= this.selectVerse();
        if (!verse) return;

        const text = verse.read[this.language];
        const abrv = verse.abbreviation[this.language];

        try {
          this.displayContainer.innerHTML = `<span>${abrv}<i>${verse.versenumber}</i></span>${text}`;
          console.info("%c[Display] Rendered verse", "color: #2196F3;", verse.key);

          this.displayContainer.addEventListener("click", () => this.relayToBookLogic(verse), { once: true });
        } catch (inner) {
          console.error("%c[Display] Failed to render verse", "color: #F44336;", inner);
        }
      } catch (err) {
        console.error("%c[Display] Exception in displayVerse", "color: #F44336; font-weight: bold;", err);
      }
    }

    relayToBookLogic(verse) {
      try {
        if (!verse) return;

        const payload = Object.freeze({
          key: verse.key,
          book: verse.book,
          versenumber: verse.versenumber,
          translations: verse.read,
          abrv: verse.abbreviation,
          language: this.language
        });


      } catch (err) {
        console.error("%c[Relay] Exception during relay", "color: #F44336; font-weight: bold;", err);
      }
    }

    attachDevCycle() {
      try {
        document.addEventListener("keydown", (e) => {
          if (!this.deliverableVerses.length) return;

          try {
            if (e.key === "e") {
              this.currentIndex = this.currentIndex == null
                ? 0
                : (this.currentIndex + 1) % this.deliverableVerses.length;
              console.info("%c[DevCycle] Forward key pressed", "color: #3F51B5;", this.currentIndex);
              this.displayVerse(this.deliverableVerses[this.currentIndex]);
            }

            if (e.key === "q") {
              this.currentIndex = this.currentIndex == null
                ? this.deliverableVerses.length - 1
                : (this.currentIndex - 1 + this.deliverableVerses.length) % this.deliverableVerses.length;
              console.info("%c[DevCycle] Backward key pressed", "color: #3F51B5;", this.currentIndex);
              this.displayVerse(this.deliverableVerses[this.currentIndex]);
            }
          } catch (inner) {
            console.error("%c[DevCycle] Key handling error", "color: #F44336;", inner);
          }
        });
      } catch (err) {
        console.error("%c[DevCycle] Failed to attach listener", "color: #F44336;", err);
      }
    }
  }
  new verseReading();














  ///////////////////////////////////////////////////////////////////////
  //                       PAGE VISUAL
  ///////////////////////////////////////////////////////////////////////
  function WRITE____visual() {
    try {
      const VALUES = [
        {
          blendMode: "normal",
          blur: [0, 0, 0, 0, .00074, .0048],
          contrast: [1.04, 1.4, 1.9, 2.08],
          saturation: [.28, .48, .59],
          brightness: [1.4, 1.9]
        },
        {
          blendMode: "normal",
          blur: [0, 0, 0, 0, .00074, .0048],
          contrast: [1.4, 1.9],
          saturation: [.14, .28],
          brightness: [1.9, 2.08]
        },
        {
          blendMode: "plus-lighter",
          blur: [0, 0, .0028, .0048],
          contrast: [1.4, 1.9],
          saturation: [.14, .28],
          brightness: [1.4, 1.9, 2.08]
        },
        {
          blendMode: "plus-lighter",
          blur: [0, .0014, .0048],
          contrast: [1.4, 1.9],
          saturation: [.14, .28],
          brightness: [1.4, 1.9, 2.08]
        },
        {
          blendMode: "luminosity",
          contrast: [1.4, 1.9],
          saturation: [.14, .28, .48, .74],
          brightness: [1.9, 2.8]
        },
        {
          blendMode: "luminosity",
          blur: [0, 0, 0, 0, .00048, .0028],
          contrast: [1.4, 1.9, 2.08],
          saturation: [.14, .28, .48, .74],
          brightness: [1.9, 2.8]
        }
      ];

      const time = [1400, 2800, 4800, 7400];
      const current = { blur: 0, contrast: 1.4, saturation: .48, brightness: 1.9 };
      const active = { blur: null, contrast: null, saturation: null, brightness: null };

      const setInstance = VALUES[Math.floor(Math.random() * VALUES.length)];
      const index = VALUES.indexOf(setInstance);

      const value = (values, type, presetIndex) => {
        const value_ = values[Math.floor(Math.random() * values.length)];
        if (presetIndex === 0) {
          if (type === "contrast" && value_ >= 1.4) current.saturation = .14;
          if (type === "saturation" && value_ !== .28 && current.contrast > 1.4) current.contrast = 1.4;
        }
        return value_;
      };

      const draw = () => struct_WRITE___.style.filter = `blur(${current.blur}em) contrast(${current.contrast}) saturate(${current.saturation}) brightness(${current.brightness})`;

      const draw_relay = (type, values, setInstance_) => {
        if (active[type]) clearTimeout(active[type]);
        const instance = () => {
          const newValue = value(values, type, setInstance_);
          if (current[type] !== newValue) {
            current[type] = newValue;
            draw();
          }
          const delay = time[Math.floor(Math.random() * time.length)];
          active[type] = setTimeout(instance, delay);
        };
        instance();
      };

      Object.values(active).forEach(timeout => timeout && clearTimeout(timeout));

      struct_WRITE___.style.mixBlendMode = setInstance.blendMode;
      const properties = ["contrast", "saturation", "brightness"];
      properties.forEach(p => setInstance[p] && draw_relay(p, setInstance[p], index));
      if (setInstance.blur) draw_relay("blur", setInstance.blur, index);
    } catch {}
  }
  WRITE____visual();

  function BOOKS_visual() {
    try {
      const VALUES = [
        {
          contrast: [1.4, 1.9, 2.8, 4.8],
          saturation: [0.74, 1.4, 1.9],
          brightness: [1.04],
        },
        {
          contrast: [1.4, 2.08],
          saturation: [0.74, 1.4, 1.9],
          brightness: [1.04, 1.4, 1.9],
        },
      ];
      const time = [740, 1400, 4800];
      const current = { contrast: 1.04, saturation: 1.04, brightness: 1.04 };
      const active = { contrast: null, saturation: null, brightness: null };
      const SET = VALUES[Math.floor(Math.random() * VALUES.length)];
      const value = (values) => values[Math.floor(Math.random() * values.length)];
      const draw = () => requestAnimationFrame(() => struct_BOOKTEXTURE.style.filter = `contrast(${current.contrast}) saturate(${current.saturation}) brightness(${current.brightness})`);
      const draw_relay = (type, values) => {
        if (active[type]) clearTimeout(active[type]);
        const instance = () => {
          const newValue = value(values);
          if (current[type] !== newValue) {
            current[type] = newValue;
            draw();
          }
          const delay = value(time);
          active[type] = setTimeout(instance, delay);
        };
        instance();
      };
      Object.values(active).forEach((timeout) => timeout && clearTimeout(timeout));
      setTimeout(() => {
        struct_BOOKTEXTURE.classList.add("instance");
        ["contrast", "saturation", "brightness"].forEach((property) => {
          if (SET[property]) draw_relay(property, SET[property]);
        });
      }, 140);
    } catch {}
  }
  BOOKS_visual();

  (() => {
    try {
      let timer = null;
      const position = () => {
        requestAnimationFrame(() => {
          const booksRect = struct_BOOKS.getBoundingClientRect();
          const parentRect = struct_BOOKS.parentElement.getBoundingClientRect();
          const backLeft = booksRect.right - parentRect.left - booksRect.width * .0208;
          struct_BORDERBACK_wrapper.style.left = `${backLeft}px`;
          const backRect = struct_BORDERBACK_wrapper.getBoundingClientRect();
          const frontRect = struct_BORDERFRONT_wrapper.getBoundingClientRect();
          const frontLeft = backLeft + (backRect.width / 2) - (frontRect.width / 2) - frontRect.width * .048;
          struct_BORDERFRONT_wrapper.style.left = `${frontLeft}px`;
        });
      };
      position();
      const updatePosition = () => {
        if (timer) clearTimeout(timer);
        position();
        timer = setTimeout(position, 2800);
      };
      ["focus", "blur", "resize"].forEach(event => addEventListener(event, updatePosition));
      if (typeof ResizeObserver !== "undefined" && typeof MutationObserver !== "undefined") {
        new ResizeObserver(updatePosition).observe(struct_BOOKS);
        new MutationObserver(updatePosition).observe(struct_BOOKS, { childList: true, subtree: true });
      }
    } catch {}
  })();


  (async () => {
    try {
      const fontTime = (promise, ms) =>
        Promise.race([
          promise.then(() => ({ flow: true })),
          new Promise(resolve => setTimeout(() => resolve({ flow: false }), ms))
        ]);
      const settle = () => {
        requestAnimationFrame(() => {
          document.body.offsetHeight;
          document.body.getBoundingClientRect();
          getComputedStyle(document.body).transform;
        });
      };
      const { flow } = await fontTime(document.fonts.ready, 2800);
      settle();
      if (flow == false) setTimeout(settle, 1400);
    } catch {}
  })();













  ///////////////////////////////////////////////////////////////////////
  //                       BOOK LOGIC
  ///////////////////////////////////////////////////////////////////////

  class BookOpenSystem {
    constructor() {
      this.URLPATHNAMES = {};
      for (const internalName in STRINGS_index_BOOK_NAMEPATH) {
        const langs = STRINGS_index_BOOK_NAMEPATH[internalName];
        for (const lang in langs) {
          for (const name of langs[lang]) {
            if (name) this.URLPATHNAMES[name.toLowerCase()] = internalName;
          }
        }
      }
    }

    relay(bookInstance, chapterInstance = null, verseInstance = null, settings = []) {
      console.log("[BookOpenSystem] Relay called:", {
        book: bookInstance,
        chapter: chapterInstance,
        verse: verseInstance,
        settings
      });
      bookOpenLogic(bookInstance, chapterInstance, verseInstance, settings);
    }

    URL() {
      let raw = (window.location.pathname + window.location.search + window.location.hash).replace(/^\/+/, '');
      if (!raw) return;

      try { raw = decodeURIComponent(raw); }
      catch { raw = raw.replace(/%[0-9A-Fa-f]{2}/g, ''); }

      const normalize = s => s.replace(/[^a-zA-Z]+/g, '').toLowerCase();
      const keys = Object.keys(this.URLPATHNAMES);
      const findKey = n => keys.find(k => normalize(k) === n);

      const nr = normalize(raw);
      let dk = findKey(nr);
      let bookName = dk ? this.URLPATHNAMES[dk] : null;

      if (bookName && !/\d/.test(raw) && !/([^a-z])view([^a-z])([a-z]{1,14})/i.test(raw)) {
        this.relay(bookName, null, null, []);
        return;
      }

      const tokens = [];
      for (let i = 0; i < raw.length;) {
        const cp = raw.codePointAt(i), ch = String.fromCodePoint(cp), step = ch.length;
        if (/\d/.test(ch)) {
          let j = i + step;
          while (j < raw.length && /\d/.test(String.fromCodePoint(raw.codePointAt(j))))
            j += String.fromCodePoint(raw.codePointAt(j)).length;
          tokens.push({ text: raw.slice(i, j), start: i, end: j, type: 'num' });
          i = j;
        } else if (/\p{L}/u.test(ch)) {
          let j = i + step;
          while (j < raw.length && /\p{L}/u.test(String.fromCodePoint(raw.codePointAt(j))))
            j += String.fromCodePoint(raw.codePointAt(j)).length;
          tokens.push({ text: raw.slice(i, j), start: i, end: j, type: 'word' });
          i = j;
        } else {
          tokens.push({ text: ch, start: i, end: i + step, type: 'symbol' });
          i += step;
        }
      }

      if (!tokens.length) return;

      let bookIndex = -1;

      if (!bookName) {
        outerA:
        for (let s = 0; s < tokens.length; s++) {
          for (let l = Math.min(5, tokens.length - s); l > 0; l--) {
            const slice = tokens.slice(s, s + l);
            let parts = [], valid = true, last = false;
            for (let k = 0; k < slice.length; k++) {
              const t = slice[k];
              if (t.type === 'word') { parts.push(t.text.toLowerCase()); last = true; }
              else if (t.type === 'symbol' && (t.text === ' ' || t.text === '%20')) {
                if (last && k < slice.length - 1 && slice[k + 1].type === 'word') { parts.push(' '); last = false; }
                else { valid = false; break; }
              } else { valid = false; break; }
            }
            if (!valid || !parts.length) continue;
            const nk = findKey(normalize(parts.join('')));
            if (nk) {
              bookName = this.URLPATHNAMES[nk];
              bookIndex = s + l - 1;
              break outerA;
            }
          }
        }

        if (!bookName) {
          outerB:
          for (let s = 0; s < tokens.length; s++) {
            for (let l = Math.min(3, tokens.length - s); l > 0; l--) {
              const slice = tokens.slice(s, s + l);
              if (slice.some(x => x.type !== 'word')) continue;
              const key = slice.map(x => x.text.toLowerCase()).join('');
              if (key in this.URLPATHNAMES) {
                bookName = this.URLPATHNAMES[key];
                bookIndex = s + l - 1;
                break outerB;
              }
            }
          }
        }

        if (!bookName) return;
      }

      const nums = tokens.map((t, i) => t.type === 'num' && { value: t.text, index: i }).filter(Boolean);
      let chapter = null, verse = null;

      for (const n of nums) {
        if (n.index <= bookIndex) continue;
        if (chapter === null) chapter = +n.value;
        else { verse = +n.value; break; }
      }

      const pick = v => nums.find(n => +n.value === v && n.index > bookIndex)?.index ?? bookIndex;

      const lastIndex = nums.length
        ? verse != null ? pick(verse)
        : chapter != null ? pick(chapter)
        : bookIndex
        : bookIndex;

      const rem = raw.slice(tokens[lastIndex]?.end ?? 0);
      const settings = rem?.match(/([^a-z])view([^a-z])([a-z]{1,14})/i)?.[3].slice(0, 14).split('') || [];

      this.relay(bookName, chapter, verse, settings);
    }






  }
  const BOOK_openSystem = new BookOpenSystem();







  class BOOK_continuity_ {
    constructor() {
      this.activeBook = null;
      this.activeChapter = null;
      this.activeVerse = null;

      this.visibleElements = new Set();
      this.observer = null;

      this.saveTimeout = null;
      this.resizeTimeout = null;

      this.activationLine = null;
      this.lastActiveElement = null;

      this.reset = this.resize.bind(this);
    }

    resize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => this.activationLine = window.innerHeight * .28, 2800);
    }

    intersection = entries => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.visibleElements.add(entry.target);
        } else {
          this.visibleElements.delete(entry.target);
        }
      }

      if (!this.visibleElements.size) return;

      let closest = null, minDist = Infinity;
      for (const el of this.visibleElements) {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const dist = Math.abs(top - this.activationLine);
        if (dist < minDist) {
          minDist = dist;
          closest = el;
        }
      }

      if (!closest || closest === this.lastActiveElement) return;

      this.lastActiveElement = closest;
      const ch = closest.getAttribute("CHAPTER");
      const num = closest.getAttribute("NUMBER");
      const verseKey = `${ch}:${num}`;

      if (verseKey !== this.activeVerse || ch !== this.activeChapter) {
        this.activeVerse = verseKey;
        this.activeChapter = ch;
        this.save();
      }
    };

    save = () => {
      clearTimeout(this.saveTimeout);
      this.saveTimeout = setTimeout(() => {
        if (this.activeBook) userPreferences.save("CONTINUITY_book", this.activeBook);
        if (/^\d+$/.test(this.activeChapter)) userPreferences.save("CONTINUITY_chapter", parseInt(this.activeChapter, 10));
        if (/^\d+:\d+$/.test(this.activeVerse)) userPreferences.save("CONTINUITY_verse", this.activeVerse);
        if (/^\d+$/.test(this.activeChapter)) userPreferences.save(`RESUME_${this.activeBook}_chapter`, parseInt(this.activeChapter, 10), true);
        if (/^\d+:\d+$/.test(this.activeVerse)) userPreferences.save(`RESUME_${this.activeBook}_verse`, this.activeVerse, true);
      }, 280);
    };

    resume() {
      if (userPreferences.instance("RESUME") !== "true") return null;
      const storedChapter = userPreferences.instance(`RESUME_${currentBook}_chapter`);
      if (/^\d+$/.test(storedChapter)) return Number(storedChapter);
      return null;
    }

    async resumeposition() {
      if (userPreferences.instance("RESUME") !== "true") return null;
      const storedVerse = userPreferences.instance(`RESUME_${currentBook}_verse`);
      if (storedVerse && storedVerse.includes(":")) return storedVerse;
      return null;
    }

    flow = () => {
      console.log("CONTINUNITY FLOWING");
      clearTimeout(this.saveTimeout);
      clearTimeout(this.resizeTimeout);
      this.activeBook = null;
      this.activeChapter = null;
      this.activeVerse = null;
      this.resumeVerse = null;
      this.visibleElements.clear();
      this.observer?.disconnect();
      this.lastActiveElement = null;
      window.removeEventListener("resize", this.reset);

      requestAnimationFrame(() => {
        this.activeBook = currentBook;
        this.activationLine = window.innerHeight * .28;

        this.observer = new IntersectionObserver(this.intersection, { root: struct_BOOKOPENAREA_wrapper, threshold: 0 });
        const verses = struct_BOOKOPENAREA_VECTOR.querySelectorAll("VERSE");
        verses.forEach(verse => this.observer.observe(verse));

        window.addEventListener("resize", this.reset);
      });
    };
  }
  const BOOK_continuity = new BOOK_continuity_();






















  class BOOK_visible_ {
    constructor() {
      this.verses = [];
      this.track = new IntersectionObserver(this.observe.bind(this), { root: struct_BOOKOPENAREA_wrapper, threshold: 0 });
      this.all = [];
      this.visible = new Set();
      this.buffer = new Set();
    }

    observe(verses) {
      verses.forEach(verse => { (verse.isIntersecting || verse.intersectionRatio > 0) ? this.visible.add(verse.target) : this.visible.delete(verse.target); });
    }

    bufferFlow() {
      this.buffer.clear();
      const verses = Array.from(this.visible).map(verse => this.all.indexOf(verse)).sort((instance, instance_) => instance - instance_);
      const range = Math.max(0, verses[0] - 14);
      const range_ = Math.min(this.all.length - 1, verses[verses.length - 1] + 14);
      for (let verse = range; verse <= range_; verse++) this.buffer.add(this.all[verse]);
    }

    flow() {
      console.log("VISIBLE FLOWING");
      this.reset();
      this.verses = struct_BOOKOPENAREA_VECTOR.querySelectorAll("VERSE");
      this.all = Array.from(this.verses);
      this.verses.forEach(verse => this.track.observe(verse));
    }

    flow_(buffer = false) {
      if (buffer) {
        this.bufferFlow();
        return Array.from(this.buffer);
      }
      return Array.from(this.visible);
    }

    reset() {
      this.verses = [];
      this.track.disconnect();
      this.all = [];
      this.visible.clear();
      this.buffer.clear();
    }
  }
  const BOOK_visible = new BOOK_visible_();

  class bookVisuality_fontSize_ {
    constructor() {
      this.previewVerses = new Set();
      this.range = [.74, 1.9];
      this.lastValue = null;
      this.timer = null;
      this.timer_ = null;
      const preference = parseFloat(userPreferences.instance("BOOK_pref_font"));
      if (!isNaN(preference)) {
        const fontSize = this.calculateFontSize(preference);
        document.documentElement.style.setProperty("--BOOK_fontSize", `${fontSize}px`);
        this.lastValue = preference;
      }
      window.addEventListener("resize", () => {
        clearTimeout(this.timer_);
        this.timer_ = setTimeout(() => this.set(this.lastValue), 2800);
      });
    }

    calculateFontSize(value) {
      const base = Math.sqrt(window.innerHeight * window.innerWidth) / 48;
      return Math.round(base * (this.range[0] + value * (this.range[1] - this.range[0])));
    }

    set(value) {
      if (value == null) return;
      this.lastValue = value;
      const fontSize = this.calculateFontSize(value),
      previewVerses_ = BOOK_visible.flow_(true);
      previewVerses_.forEach(verse => {
        verse.style.fontSize = `${fontSize}px`;
        this.previewVerses.add(verse);
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--VERSE_interpolation", "all 0s ease-in-out");
          requestAnimationFrame(() => {
            document.documentElement.style.setProperty("--BOOK_fontSize", `${fontSize}px`);
            this.previewVerses.forEach(verse => verse.style.fontSize = "");
            requestAnimationFrame(() => document.documentElement.style.removeProperty("--VERSE_interpolation"));
          });
        });
      }, 740);
    }
  }
  const bookVisuality_fontSize = new bookVisuality_fontSize_();

class bookVisuality_pageWidth_ {
  constructor() {
    this.previewVerses = new Set();
    this.range = [.48, .88];
    this.lastValue = null;
    this.timer = null;
    const preference = parseFloat(userPreferences.instance("BOOK_pref_page"));
    if (!isNaN(preference)) {
      console.log("preference");
      const pageWidth = this.calculate(preference);
      document.documentElement.style.setProperty("--BOOK_pageWidth", pageWidth);
      this.lastValue = preference;
    }
  }

  calculate(value) {
    if (value > .88 || value < .48) value = .74;
    console.log(value);
    const percent = this.range[0] + value * (this.range[1] - this.range[0]);
    return `${(percent * 100).toFixed(4)}%`;
  }

  set(value) {
    if (value == null || value === this.lastValue) return;
    this.lastValue = value;

    const width = this.calculate(value),
          previewVerses_ = BOOK_visible.flow_(true);

    previewVerses_.forEach(verse => {
      verse.style.width = width
      this.previewVerses.add(verse);
    });

    clearTimeout(this.timer);

    this.timer = setTimeout(() =>
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--VERSE_interpolation", "all 0s ease-in-out");
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--BOOK_pageWidth", width);
          this.previewVerses.forEach(verse => verse.style.width = "");
          requestAnimationFrame(() => document.documentElement.style.removeProperty("--VERSE_interpolation"));
        });
      }), 740);
  }
}
const bookVisuality_pageWidth = new bookVisuality_pageWidth_();





  const openedBooks = new Set();

  let currentBook;
  const INDEX_BOOK = new Map();

  let firstOpening = true,
  isBookOpening = false;

  let chapterDraw_closeListeners = false;
  let chapterDraw_dropdownTime = null;

  const SURITY = Object.freeze({
    "Genesis": [
      "English:bdf669e79969b8932195bae5ad2dc9b92d08c5a00fb32d27cf43a450f3b7153d",
      "Cymraeg:4fd1f72b94fe3fa32236ca73bb07b2ea344893e10b1703de97ad8a4c26bfd44e",
      "Français:14364e9cc6148d03a2dc76e296531eaae94585a428f0148b5db19cc07c8f817e",
      "Deutsch:f81ecc3cd3df746f319e5166579e59b3a27ccbaaf7df13a7471be4935aa7582a",
      "Íslenska:c4ffe278007085ec36fb6c1b4c32f1ecadc18badc41153ac6db7e52f0e3a8fb8",
      "Norsk:399b0c103a5f59c228c5f03e0e100db39e3f85acf787302002fa2cb51e132a42",
      "Suomi:8d16fea6f5e622344ec606f4edf81299c9e1b56f34f942c6436eb256754c6601",
      "Русский:20c78b6d1cfced774312e8ffe79d70c87a6739d8a6dab41971243cbaa5901893",
      "عربي:2d404d17bed24b1030cf6c87bc7d6dc8d54a84425bb79bdbbc27e582f4ef9b81"
    ],
    "Exodus": [
      "English:cbfae5b1fcaeb19a3ce325a16ab6a2f6734990f3af06f89f263e16bb9ac43a9f",
      "Cymraeg:63eea9eb4546dccf98df02298d02fc0cbf1ba6a4e8aebcd31a1c6233ace82281",
      "Français:2ebf459ff7a7f89d894cfd8dcd960db8c12e2c8a8694af1a98884a88ef081e0c",
      "Deutsch:6b2d54a4ccfb3425a7d7db8338ab1771313e5fc23bcd2abc11d465e5bea3d76c",
      "Íslenska:df0322a6e89a86a282d6da96fe10505397e2de36a9d5772647fcf42217a8643c",
      "Norsk:53006030871b349b2610bc0635695a6f2fd9787f65b2d8a6ad03796a8b025c63",
      "Suomi:25494d1b248d07cafb95596d26e7ef87abc32776c96e3083dd759f09ed70b392",
      "Русский:f3c2d9ad7fbdbe722dd8d82fe7244d5c2c96e75816a9009e524db93aca061186",
      "عربي:4b0e14e5a4ecac12da27ba05931bb9646ccce0db09e24e842072dab9e607cb9d"
    ],
    "Leviticus": [
      "English:1968a4de1898e510a1646ae22f027c45cd05e8c2504cfac5d316b45677d33600",
      "Cymraeg:e16e8ae25047fec37c13ee4194d7a3f314c63b3988b7fa856af8dc5b9e3a2e15",
      "Français:90e4b27ea8a679e21db7d63e5e3afe5b5b65ccfee24a8f009c693eec5ac79e2b",
      "Deutsch:26c0e80c62de67cb0cfdb92039f2d5859cfbc567f53183a81f6a907c795c0714",
      "Íslenska:b0bdff009f07177f988412fa5b6c0291ea2d197d5b1f139d67641b8279975e30",
      "Norsk:45f19ea10afdc2e945d8fbcc3973aac57300430cfef7255ad9a2b9815ff0065a",
      "Suomi:5c2d3833de40c5bf630f93a8da0173342caaea3699b62c75adeada950d142a2d",
      "Русский:c2fac738a70251e595b79bfba5ae51d8e6b0dff4ea672d78a9ccb5ad41afa556",
      "عربي:9ccb32bf4b2d0d8403bdebfef2d1721fbc2facb0e246ec0b9ffdc444cdeff7a7"
    ],
    "Numbers": [
      "English:23a4e4f30f497e975ded89b144b58519651f59f50143fbf9d5a00f3b7744a0f4",
      "Cymraeg:dd418f7fc444f41b8ef6e8ab15729b1cabc7ffdb291fb6f1346ce6c5b4832f4c",
      "Français:8e1900673ef1207badec1703b62d53244e6fafc62323789576bdc13329832bb2",
      "Deutsch:479bb6e698b5604f3a56b4c106d818c0c4876729d86ebaac6db87633a2ed77b9",
      "Íslenska:1501a359d0eb0ade60bf7e823c344b167f562aa2ce773f06eab882e90cc12b90",
      "Norsk:dca6826d8bc823242e17081eb62d7dc5a931bdf9529de227fe6d0c1a25022247",
      "Suomi:c65645556a8c646d63688e0fdfcfe25c89f8d4f2a8c956aa4dd0021ceb2f5a4d",
      "Русский:ff2eb53e25d251e9da5df34c9ad03274279ec820fa9f4e4559ce6a1934b94240",
      "عربي:75de4f0d1179d47f054c0c2d16672a4ea822d44dda8d280efc2d34d1f73f2a15"
    ],
    "Deuteronomy": [
      "English:189b6c63e789d001aaf20f45218a788a99da1fa8017a20ac7df021ee7a37927a",
      "Cymraeg:24d449cd4b864c351b9d90770ff7a7dba5b5af75ef16945b54ad823ac9e6f8e8",
      "Français:cb4b6f950872e74cf1931e65a0b40f82207a9ed4dc66ea917aee0e11fcab39c8",
      "Deutsch:dd0a939d6c4d963213a63bf27bea121bea40f6fded5d3a88b0b45e0b6a508747",
      "Íslenska:00b5814442a3b1ec5f68e8899c93963e2795feac85857bbc370bd6497c949913",
      "Norsk:fe466edc7438a44dabf6ee173e52ad36983fcd3bb8729c5d61614b922d112be8",
      "Suomi:df49f4c742564f8c5c8e3fbeb876bf9039339b84902248411e0d41b92f5d7dc0",
      "Русский:e80fc1eeac0efdf80fa14c2bfccdbbf9983f20e01c3c18289b1e0df8d7213037",
      "عربي:b6f65f733dd47fe97690198e13be75da8b61cfeef4c30476ac96a61c9fc6bd66"
    ],
    "Joshua": [
      "English:d9ac10b5bf7ed7ef8169286aa65e5ffc0c485f1ea34099918be10120274c4d0a",
      "Cymraeg:7b3b77a5e2d254b7ec07ac3a9a58f20dd30bf5a9d49ef3e3504532d6ecf9dd73",
      "Français:fcb4836dd3f68525052747df81c2a99adb2d4d5ecac25cb83eb5a9951be7a981",
      "Deutsch:3d0e9e973f66b8158c3df2b74d8cf08f916cf0b26502cdf4cc50fa2c20fd6879",
      "Íslenska:35976735f09953619c9198fe0d6af01d2f0390ccaaa6d3f904abd46ec5c91113",
      "Norsk:0d4d474f0edcfe57d4ef264b3c117d095953b023e1d8db6bb6d5ad20f0582317",
      "Suomi:08f11ea393d134ec0cb6ba7c4d7a0e03eade8e4eed1d717abda8511d68767c2b",
      "Русский:0d7a44abc26e33babd8e53a711b9e78c26144eb150052e91b7eb88bb6e0565a2",
      "عربي:99b2709c581c2d890fa581752a45a81080ab5ae70e3753cfcc801f5067e70fd5"
    ],
    "Judges": [
      "English:28ee5b2ecaa09a3a3da67eebbdf1277baea9e83e1418751d9e37d48d72ee941f",
      "Cymraeg:e9e12fc85fb1827c7c8267aa7d527459cae6de9e8ce0de49ce116aa30b8327a5",
      "Français:2ab5caf2ee98fd8c79ed43d57562add4715496e1af92a83607c055b57fed450f",
      "Deutsch:0e8e5d0609aee561ac305269e0af5599e865a4cf142ebd89c5579e818f579684",
      "Íslenska:e1681395d0377849ea52619dd4f625b534cdd6eca4cc301f5bd519e115452229",
      "Norsk:34bba65511e21042a985d0121d5e321b0e0e8141c4f5af83eb9833a58b951d2e",
      "Suomi:4f30f69b64f50176cda73cc1263e741a2be0fc021de01c8e661707fca03be0c0",
      "Русский:484c5c8150101bae1381b4beea8323721dcd005e9e0071dbd729392e0a898533",
      "عربي:3bea6b8000f0c1fd2f5a964419841a385463e538f01b5cecfd98072dd2c8bc88"
    ],
    "Ruth": [
      "English:3e041373d443d2ae5a09537c97a97d5a631c6f36278ecd6c9a1f818b6c42bff1",
      "Cymraeg:28d883b5c9cae08700bd7dfb68164e9fb0be5c2fbfbd9b0fe4fb410cf58e47db",
      "Français:fc8ac816d3a6163a3da7f47d21373c85dd6ce055d2a3bb0ea32395a9cf98aaf8",
      "Deutsch:b9a97aefdcb1cc66cd3c08ffe63d8996f0fe13701b4a22833915db0f51a72e79",
      "Íslenska:5b1aff14fc91650a5002369df2fd62f2dba6dc02e451eae94794bf5a6cf96a6c",
      "Norsk:02d684789ab236e4a9f934c3e91804d510a0092e665ded1563a8dfd3f9f31517",
      "Suomi:6dcf4de931a0a88172b504273240f331b017bc3d20798e3928ac867cb79c8e1a",
      "Русский:cd4b399d35c3a1301eb774597a8c85f2e66b4d5db4ed2a5da2d76757f4468ef6",
      "عربي:9cdcc886fa71016e2476e13ef41586ae125949fafb8cdfcf05f98c47c3fc25ed"
    ],
    "Samuel": [
      "English:247e021aeddb9203167bf25fe06d9bd11d4cad6b0b2bf0ac510b1c679aa67e12",
      "Cymraeg:7a0bfbbdf3a325c3f67eded84134033bf3261e7b6f0d7a6a4c294c473f1cb0bc",
      "Français:873c5de127c4ec83fc6382a6801656e20037f9c372a6b6372bd7b3a550b42483",
      "Deutsch:f8c88c987ca1fda436fa5efd9fefa837f11d9abc30c630370b67d5e4b8ceb3d7",
      "Íslenska:38857d89a5444f885d02a52cdbe2ab86c6f8921d1cac8139e39bf1425bfd660f",
      "Norsk:3c780f3bb1ab07173282e1b4ac3c9bd722b000b0426f3bc2d4f08f7e264eab4a",
      "Suomi:059f33dd7ea917a33be7770e6de25de5420dd74805b74e789e39a5d8c1270d6b",
      "Русский:92ec84a13804f877170f8cf0833d1f5fe00aa5f3d503b03cefb34ec4a26afd6c",
      "عربي:20c3003017ac2576bac1956e5b946ce0fdd580e5e2a59ff33823c63297e588ed"
    ],
    "Samuel2": [
      "English:27b7021d2b37f09560c9213fb98c086f774e09204df9c1b8bfcce88b5b96b56d",
      "Cymraeg:c6507db9cfc0a5530579c79a1bf4b68a2c96da296e51cfb9274d51e19890be2d",
      "Français:8e7e0af180a94e9c51006fe957a2a2e1d63f7cad22e7078b5473a3151a8b1a25",
      "Deutsch:154f7c3a25115af56ca87b1fef6855a536e0489cb223b1f24016e4e12ece0805",
      "Íslenska:8f1e356aff163c66fe1615ce0b841a721cadfed789d011a012fa502ee8bf105e",
      "Norsk:e2ee83c08e260e3e2b09e265b74f986c6369354ddadfe972aac4f8a2455fff9e",
      "Suomi:cfe8912abdb29bc544f6475940021e6114ce8db47b6844466c75f76aef6df143",
      "Русский:d5b90a7fa69c80c6bb2bb99713ef2e719566fa92bc79104bbd731f98a6269ec0",
      "عربي:a043fc447df20739ed68165c61870d22abaf176d06cc55862bb8334784933e13"
    ],
    "Kings": [
      "English:bdbbf1aa20d752dd8ddf9aa779284d6e740b5338d927caa7c3338d4c37f07aef",
      "Cymraeg:c64ae7dd882b1544c5b3cdcb75c17769b4ae9344bf92c2659bc0c3f2603b329a",
      "Français:e3bdaefafc91d7005ce2ef320f6d6a7cc4a3b9d3843304f3ac255435b6f1828d",
      "Deutsch:b95bb0a50d24f3412bc7fb40455dc776f2a6b543c43d153b34e5780cedd4df3d",
      "Íslenska:4557bfe297e98726546dc858457892a888fd490551da70ccd7a95af132127836",
      "Norsk:2625d94df155634ad365e05b843a90ff1b9a0068204482caf67bc9f4a9025507",
      "Suomi:43bd46c49f9ef6d4d9b397f517f399d737a6a8b35ad3b1387958a3adc1b0d799",
      "Русский:21c443c32cab4f8362cbd5b47e5d5830d8a3f6dfccfa56fee32d07a64acb363d",
      "عربي:5f8ebc884348f7ca7b02f5229bd78bd67814e5429e6a71379f91296c3d8a88a6"
    ],
    "Kings2": [
      "English:4a150bd1a5bd2e67d30d788b4e6d11652716b5e3bcc02a9772f6e882c501545e",
      "Cymraeg:f2b53d20a157a76a43910366936760e07ba46194d48a282252ee03f036c076ef",
      "Français:cfe74651bf6d5073bf12469fb3d55e9cb94a4a4b6adc4125efb90e7a60bebb7b",
      "Deutsch:e464c7f7915278a40dad4c788083dde1b2f43a880dd906855859428adcb2d4ff",
      "Íslenska:a25808dfa20132f195285b4b82a52cd11f4f2f362e86df4728d0a5a60c981cd8",
      "Norsk:beda028e5df38ceb4591a8e7deecd9afa13f87ef67966bd9503432466b3109ae",
      "Suomi:ffdde35568611ce5763838c7a1f6537f50b2eb3134cf14b1f7cb624882ff83c3",
      "Русский:08913ca6c314258b4858bc779b9a85debd1f406cca91574d8df2da97544c00e5",
      "عربي:d62bf1a6e0e2d7db83189741ed7fbc96ff1ba1eaec881febce3af5f7b9214ae0"
    ],
    "Chronicles": [
      "English:9ef50c52941ba5b47126b73e4d29b7e5384b769aa9d9b8232fd813089b30ee49",
      "Cymraeg:6f0f03c5d7229fdc93d054c44b5105545b86d8b794df1d36ecfc8d99e03040f4",
      "Français:dfa4fdd11acb32ee2e96dd60b95f70cf3834eb18f6650d89b3d431000f22464b",
      "Deutsch:f57dc2d55acf013c5d024ca642f7300b350e68ca21111b9826b866df9ba7f112",
      "Íslenska:9071da8db0cf5d98c1cb8e88a69b7997e014fa9976d765a05fd75e743d4b9417",
      "Norsk:9644d273b4e7853ba911439ee89f2e5ac2a0df2f21083997d714a09831d80e33",
      "Suomi:0f7dd0a43a225ed4efd5e0771efb465475c823078481e823bd835af0013bfa6f",
      "Русский:2887a87c190a0ffc2cf2badddf6d53a0e65b55fac9753bb7d1baa17da5ad892d",
      "عربي:60588abca3f0f2fbb96ff3405e1d25542f5834b243a3c20c0c985274ec550ca2"
    ],
    "Chronicles2": [
      "English:aa3972919cc3a0a9cd0854373da4e29d56c7b45421edc12d61c8fd5c835c81df",
      "Cymraeg:a7f9ac03623ef40a1e554f4b13ff68a9e7aa6c048e6481866de12972bbc6e5ef",
      "Français:433ea7f76581b01be70c6165317fb3ccccaec4c7693e2b1ab7a2210b4675eccf",
      "Deutsch:74d3e61e15c2a14391bd39e1d76bed853efe2bcb2c8fa1946b1993542cc80c2c",
      "Íslenska:30731449dce6b5da0b449970a53e17c8cd6d49c936a2fc4f982c9761fd3e778f",
      "Norsk:c2be1867bd114ff0f925710399a1339068b5be0470a02170ec3aeb0a7044e861",
      "Suomi:d7a622a24035e964f391120301e1bc4da1b10e18038c717ccba0111e34643fdc",
      "Русский:9d940ea779a63f4c3b2f4510d48dbb2ad1048d58fce22e3e6ee29323b190dab5",
      "عربي:e4f5fd580879931cd9f5f4674152f7786f332048d043d8bd6dd0a17ff2f04070"
    ],
    "Ezra": [
      "English:017acee802a6c4f8413aff8963765f5c01e2581f509eda3c1e43140fdcc2bc40",
      "Cymraeg:96ff70301e1d75d25d87eeb56442c5312e609b11f6403472466d9996f2038315",
      "Français:fa1ca0e8b31c044315dddaca33784c19e0f2649bb1d735da8f5866514cf20148",
      "Deutsch:fbfe698e6dc02c9ab58e26d7c2c37e42f411077366b3a77ecf55c417d3394465",
      "Íslenska:3b03c133ee1d08a62eb932b85d4b2427be2e64ebb593bb411e1c9738d829d8e5",
      "Norsk:248691e8a164804f09177ec4e41d374354cff2bcf014344eb430aea938554c7a",
      "Suomi:a7dfbc377272cdde0139c41ba2c7323ea18f02d674830509b0658fc58f23fa0a",
      "Русский:b47fc53716c7578dee0629de2577eddcb6dc5cb60cc7b8bcaef6a8ce221a4712",
      "عربي:094face0915b0eca2d1840989a065bd49b9b5245cd3c4807cb77f1f0f66aac7d"
    ],
    "Nehemiah": [
      "English:716ef6b0255e7b543f0f5629685cc886edbbadaca3cf5c379bd392a6b4187290",
      "Cymraeg:b676ce7e5372ee5a446ab85bf684b166783848524b7f7d888a7534c7b10bab8e",
      "Français:2b9493b4eba5f2b86ab631c940c0c808409138b8f979cd394c6fe1f4abd4f4b2",
      "Deutsch:bdcabc4364b88699d5738106fa50742505d8d9b7bb1816ace9402fef9df81a32",
      "Íslenska:378457136494478475849b104e977eea2725e19b2a8ffd9910e7786536da34c2",
      "Norsk:58bf876ca7b7ab1409d05d68289dd340b3664db194e4602892595d87189f6e20",
      "Suomi:924dc52a37af617916461042d0e895b0184dda99e140f4822378506b6ccb53cd",
      "Русский:6a77ff7c22b2ae8bb434898f73e7e37b4dea41e763afab22227ad9b84ebf39e0",
      "عربي:4a7c29514c38efa60397816501137923c4741d153b6801d3b07943802daf6975"
    ],
    "Esther": [
      "English:841067e7c80f915a7faaae20f5d6bf7efb72d83a5b21c5fbacdaa7fcd05e55a0",
      "Cymraeg:000ab2166f38a785884e9ebf09c3985faae0b68179a1d70987303cc34e82079d",
      "Français:f5e5422584089dc11cc750419cf2843cef8b5435f522f316dde472469b10d20d",
      "Deutsch:3e46116fb81e51cd82879375e5a662a837433f3ec91f9acd605c539dc77523ca",
      "Íslenska:106cc18c3689710f200a3685fb9e5f9e5d52b7dce3659f2cc4f1ce6ce8237fb2",
      "Norsk:8bf950299954eca8a9c344cd1e809d37feffd0840ba09078a28932af89e915d5",
      "Suomi:2eddf98dc55b79df23ccff265de78e924c287bc09f3d1d31e8541f7b5bf64d81",
      "Русский:f6b8b1ca1da5bfe5eca71114f1daf52fd226c11f321345d42200fc9fc106cbcd",
      "عربي:d100643df5c41a91188064b3349f5463908e2656a50af5335af8b41ae985295b"
    ],
    "Job": [
      "English:d7b3160277695eb8f2a78bff80c48ea7c0a944a28ea4ad49deba86de71da97a5",
      "Cymraeg:a57f77ee8407a14b1dd093b4745556cc9f225908f556b47c908bb60c9c4c32a6",
      "Français:5ab750568c15e9d505e569f60ee528abdf740eafc47e639df8dd40a31528a77e",
      "Deutsch:1939db5f86c15af393597dbab86b93fd924f30092c6af2f9024d2da3ff855193",
      "Íslenska:6474da4cb7268ad877104a88659ff136e33c6b654fa191313c1a8b6daba9d723",
      "Norsk:d0f17839fa8bb26ab3acc23cc4aede2f48ebbbdc1c9e19e8eef55beaf2fc44b1",
      "Suomi:a780cc91a293844424ac30ed7ee8b0c8183bbb483d83370b0cba1eda797fa16a",
      "Русский:1abd17d788a604319a44a8325052aa45c389606caffd0fd35d24dfb39e737608",
      "عربي:865d472abe71aba910d9929ddb551be64245b36bdc8c064b72bbe1054b67d34a"
    ],
    "Psalms": [
      "English:086617c9f8605ada3e41c3e4f5e2cf49f24f2f10f768f609ef5d8ef0d418bcd3",
      "Cymraeg:0466b139f8c3c8b0babdaf3a0bace7069b02f3a6d48e2a67fa2c82c4261e8be1",
      "Français:bc2dd83961879c521b01691d88a65a7e2472e2014fbb991ef8dac85ca7941881",
      "Deutsch:10b3b16d49a7e77e45c2d44d1a95403048fae5f2e2c373d17c77913a712967e8",
      "Íslenska:57184c5ac4d779e75e33e8f895c77404b8c583cb39df592ac8076236134d6a29",
      "Norsk:e15e6340c1c2870f5a39e66883d2fe964a4ddea9fd150dd15c706e4e985d843e",
      "Suomi:c625fdcdd325be3c840803a04b42ecd08ac5015bd0f06b41eb6a2b73c505813a",
      "Русский:e3e0901b95216cf57b24db9e68a2857624b7e5176205d389b4385aa172a13e22",
      "عربي:b637a7df97bec16942d78a9bdb99543087ad57126c84bfe50081f09763bbd63a"
    ],
    "Proverbs": [
      "English:56aa3f2371316b3475d134ff4bb6a560407a05505a3a6dbdd665e5d186ea3edf",
      "Cymraeg:64ac56082ccf2d5e4252fae16070db2efc60b104e09146f82fa19bf1dff6eec4",
      "Français:e5db543a983e6a98387ee288013c29875433f48f45bcbe2bd6f28476306bd0e8",
      "Deutsch:64075dd74753d2c56fe9e475ee67340c68db5eb0267dbfd9ab2bc483706b11e5",
      "Íslenska:d063bbfd678d2699b91b8a7ca29f18ead8e0c28db8fa3e79d371420018a230e8",
      "Norsk:b3ddcb8cfcd3f9b8c6d1a0090b8a7391f05437538da40c3394db047aa36627c2",
      "Suomi:3a89aae3313fd995b17a460ae09900a50b81a10dc4582f77b205d81635ae0c01",
      "Русский:f97ad603ee305fb19554835e4c4d030e411b91a2a329971a6b7779acb423bdf9",
      "عربي:0ad4616910d2fca2f54ed2bdca3ba78a4978d06734d78cc557d6d8e2fe4fc02e"
    ],
    "Ecclesiastes": [
      "English:6b27147776cfe68d8cf20ecaff049d6b97569d8f10ea17ffb0e2b45d98e05242",
      "Cymraeg:ceb4d12fd4759b43756bf4e3384d9fde007c57084ad72fb6a190758a8005e9cd",
      "Français:643e97500d4f225ee1b6b9fb6499be43051a502252c1f3fb88cf1ec7036c5bbc",
      "Deutsch:9c9b59823750aabf98a6529c0f0db52b93aacf12300af22a65d87bddb43bfbb2",
      "Íslenska:641a4a8e1a645f246579af71fe912036e7086a5b0682fdb0a2f82ac4ec1160ae",
      "Norsk:aa5745fad1b05fb770f1bda9d0206d9a9ba8d1b13bae82a62700f341fc3e9f77",
      "Suomi:bdf898f0f646bdfc2864052c17ace13a8d6eea2a4dd48958b67ab138b9729ae1",
      "Русский:a9d3dff9925e46a192e169684672594360ea1b488af17e0b596ce028cf389d87",
      "عربي:2a8a97050739e6948406409acd9a04feda7e031605bb387c0705a9a782ec9665"
    ],
    "SongofSolomon": [
      "English:4a429a55912e9efcf484e47726c3c034266dc06489ad77b7b0e1ef8fe1e0f628",
      "Cymraeg:cbb37cfb6d1af666df605fc6012debf8027635421e4765d5b02a8f09ffdd1dc3",
      "Français:03f52dee3d694be7ec93e443b980b240a67ecc7cb71f354474c0069bb5d0a741",
      "Deutsch:ab12fd9ec9b65af456edf370bb21e8041118e760d83b00aaf09fc550c9889230",
      "Íslenska:2bb89ae9f2647427014eb783b4c507806cd235a2f420bc731aca0f180c681f21",
      "Norsk:e9ef8e00754de0112edffb51ed338add8412eed6a19270cd867f1413291ac40f",
      "Suomi:22344792e7930eca5a663119c1a1c58b56345441bea90df85b9ce49a2fb54364",
      "Русский:80a3053124d2e3ff5dac299d2d828c909104e557131724ec3f46c408cf2c2a90",
      "عربي:6c1a7f66864ca8fa70916e82db8419bea97e497f859744baac7cc69364badbbb"
    ],
    "Isaiah": [
      "English:b5caee99ae2ff8e0ceffe35387ef99474467384e2c86b05fd503114a06916ab0",
      "Cymraeg:df0414350a5dca3a203e744547734b8aebf90a0afd948b80d067adfb1e2dd339",
      "Français:c7f89b6d51500c8a7b6a7aa77c72d236300c5f7a9551e204facbb5b128d2bb7a",
      "Deutsch:9497b8333b82a5598eefb36f3c542ef62f3ca401153eb500915bb725f05f08aa",
      "Íslenska:347761c1ad88fddba3a59fed8f905d4dab8020dc17e3ebd21511b39e8d626141",
      "Norsk:2cebdf1b62ad98796b0713cee709da22eb5a91145802723a38b81d62dbf65e29",
      "Suomi:1a7cbf53aebcb0c02890bcd522c05ddcd89ec034d07f75e8b2bcda7ade04639a",
      "Русский:35f7a11a7858a48e70b7fbf6a4c2246e2b65337fcbdef3dfa33c5eddabc0cc9d",
      "عربي:ef98176103601b13fcc9f41d87c7d45d78189e836b711df34a8da1f580d07ff2"
    ],
    "Jeremiah": [
      "English:d39346d9a4311e1cf6b6be053ff191f8bafd0b1019174ac0415aebc4c704fa4c",
      "Cymraeg:1af7f3eb7d36bd13cfde1732f03919e24c74e8957e4a4f81154e3b2c447eaa62",
      "Français:c7fb151a59f094bf894c68cb80a99384a3a0a7919b853fa141e12273566344b7",
      "Deutsch:825b7a1dac0e5269fce9f1008ce7e44f406e6040c5e183808d4f6167af8413fd",
      "Íslenska:487a1a3e1867dafc2d3e20fb796a63efe8fe5057c51af1ebe5cf5c96670d2563",
      "Norsk:67c40f09e5e80f830466e548ae745123ba962727564551281a6960bd78b81167",
      "Suomi:09b2c1c79ab76956bfdf3bd50e9b82d68137387b1926fc10ec57534e18588b28",
      "Русский:bc51d367962f0ce4e874a9ceeaf21604d55222b797dc34574f4d05b3d05d89bb",
      "عربي:e600b8fa34bdf13fc77b8e8f31ccca200f1e55883f63fa50fe3678e9a2104dd2"
    ],
    "Lamentations": [
      "English:32eb108e0ca12edaf72ffaaac3e08c4961cf8a224438bc3f66094d69dc78b19a",
      "Cymraeg:0b4e509a94c94caf74a7ca934ab8958ae893ed45cc60df6254db3c55233eca5c",
      "Français:1ea027db6f26a925d16478e5a8ad96762a7a6f64da97e35b922b2ba3a4274d44",
      "Deutsch:02b48205d3340a505ce0d4e66f0b22114ce3e6940390d67f6f40d1cf056ea4f6",
      "Íslenska:6fddff39a277805020ba0b74abeae4cbfe02d10db572a95e08aaafdf6be7247a",
      "Norsk:40229f6a9e72fc0bb8dbd52f123961d48106a7c2e52f6e28d26799b989ab1f0c",
      "Suomi:bb175ba58697b01f951c8ed4ef01f1cc3b51622248bbd6c02d0a9b118bb15691",
      "Русский:e7614f43fb1fe7bca147fbf16d854e0d3841f5050ba5705382c4949510871fcb",
      "عربي:7ef2470248a00998223fc8c322f35c2946c2c2292064fd777caab15f87911b4a"
    ],
    "Ezekiel": [
      "English:3cb9be5e996e80f4c6fac6423d39aa0985465807721af7cba7f719bc6a982b94",
      "Cymraeg:18c8da8b5c22c4e7827a813d5fde2e654b5fa62517bf9a881d037c11e0087120",
      "Français:16d275c78f2c1e47324d892d470a62023210dcd46fe91b651778261305add4f9",
      "Deutsch:fa9b111756065ec83f4e0adc57b977e51121cec8dff8c6cc493858e710fffa18",
      "Íslenska:2a8500c9172ccedfe4408ac4df0cc868ad6c4a4c150b48c30577bdde11bc3825",
      "Norsk:b63e74877d0de72d2cd83c60049197a3f112c2f4298e77ab5b91464ccf54c3c3",
      "Suomi:4ce3e0305b162cf4b2fbeb9b139ad2b6f6c19c68bc49b647e5f15dd43709231d",
      "Русский:21d4490760d8afa23b8add0abb8e21914908655856483b9be2a2a53150acd579",
      "عربي:30f77dd0c7ce71108ef7c87ef1fda357bf3357abf4acf757085e1a19decbaea4"
    ],
    "Daniel": [
      "English:48a3571c0fe0af536cb242a87a5fe9626bab8678e7757fcc8ffed8f35f85ccbd",
      "Cymraeg:d22af18b8783416432103cdaa398efe1ab75373704d26a932c41bae49fc5162f",
      "Français:bc183b0de1bff0b111c1943e391f73cf978773150df6d1f6db6fd833c7cacca2",
      "Deutsch:de2c3fc18f70289ec85f9e48a999162d253e1c74d8159a0f985ba6e759b8c4ea",
      "Íslenska:17ba2b240c56efb9338a83d2b6b03a896689a4aa1098f6cda32b5f4380cf3c0b",
      "Norsk:28db658b6d54d62a8bdfe41bea85a52af20a5094497c86dbbfaf0f07ce54d3e7",
      "Suomi:e0165b90a711f4e95ecd91511a44aba441af31b900f2a817c87501e2d751478b",
      "Русский:6a1167bb2da5ae87bf83296545f33678e361a15f8ba07420ae14ee5e48165d0e",
      "عربي:c18ee2d84f614022d679b5386f38b64df66cac8ff16f7191bc70a98111b8308f"
    ],
    "Hosea": [
      "English:94f3ceb4e6d2283c76235bd5a968cdf5714ff47100819ea36defde5f09cc2fb5",
      "Cymraeg:43355fac06e0ffa4e4ea4cc1cd8d6163238b9dc424e416465ac22d36b7283441",
      "Français:73b8c2d5bf887e47c0e831ae73fc34cd3e50b232be08ca8b9b1b709a9ae0dd5f",
      "Deutsch:77ea5c7eb24998f6c786b28874407f247928a6d976054a6f096f22a8576684f4",
      "Íslenska:a3a50160eca7e811a17005311fdc4cb4f61b882ce7ea55734e32193c8f2cc482",
      "Norsk:c6eded878ef67163c1c8326dd019f35f1a54eb4d2e26a08835a7c97e056ce2ab",
      "Suomi:0fdafeaa5b21653c73fbb4195092372f5fa5a78e755d1610ce44b1b008da4e08",
      "Русский:862e35d38274daf86d43d1305d011fa61adc305659dbcef556d1c730372d67f1",
      "عربي:2ebebfee3e3020686594d330291882de534cee9d35da312c6197fb90de478458"
    ],
    "Joel": [
      "English:c5de0fd65e035cc2b7e3a55ca56420fa6011cfd9eb09736e270c7fb0fc17134f",
      "Cymraeg:5b2c491789dd9b216fdfeba27c731e85d837cd492b07973d9e50183a46c3357b",
      "Français:bf885e3ac371884dac7229e9479888a8b77e611c4a2c962ed3f77aa3d7c0a4f1",
      "Deutsch:1091f86f61ee28640e59a5b6b425a63f9ab03aaeca4ed1e2c744f8a93e32e8f2",
      "Íslenska:a40d016109c4e385530a535e9589cd3750ee4ea7eeacc0417cff8076452b739e",
      "Norsk:bae3177dc84a8cb63af2b76c2b5b230ca1190f35d0d1cec4fc4ec5aac9b0121e",
      "Suomi:669ecadb4f59de4a7f2f666902fcf2225388824370a68d5ca2a8af3a75878bd6",
      "Русский:fb11bfe4b2611b5ac0975eb9db20290842ea0af5f7240e6be03a43c38b439766",
      "عربي:caa169d54ac44ad7fa32505cbb8869910dfefacf554f072cba41187a7ce8cf6d"
    ],
    "Amos": [
      "English:32f4dde32e84a28ea9c0fe204746670621809c672bcb10e16f4bbabafe78c4d2",
      "Cymraeg:ca08eb61c4279747dede40565c350fa5268e9dd7476ae879111d6c68a11b364a",
      "Français:511bae0a65c68b29278e3ecb8856c1a47a1070cc519d4055e4167f6d75b5710e",
      "Deutsch:4cd4c6d91c31b3c5bb7abe79b710d10cf4132aea76eafc0dae9cf2463181f7fa",
      "Íslenska:fc4089d65ac9edb640efe8fc65d7052affe666df755ab6c46d62604e0f6fe58b",
      "Norsk:1086401dd0e6ebfd5a5df788e50ca8af4aa419a1d4978984ee3b3d4a9d5c3114",
      "Suomi:b86638f3f57983b8f064c486ad03fd82e7c30eaa4b6a275ffe07787d2f0e7528",
      "Русский:7b7eb5cea0e7720f7dd161a6c91420724c22340d657a268b3ee3c3f1a7cdc03f",
      "عربي:0bcf7bee9ada8090505389eaca64973c93b19229317a13ab50b1a0db5bb68927"
    ],
    "Obadiah": [
      "English:64b08dd9e433182ea60f8fd2f40bf06640ca7b4fae2cb41a73512bd6550631ee",
      "Cymraeg:f16675c80642b00319362bce85da8aeceb87edd8a0be202646d460486a33aac6",
      "Français:a8a969580d6d3c80bc98473a9c0271babb0309bcdff6f3fc2401742546204370",
      "Deutsch:4c398c5d981fb52c2c3f08a650964383aa7e10c997bc4c6ca4408f8c137f6633",
      "Íslenska:83843e23f44a69196fe19a198ff51211f9f39067985f4efca3d1cabeb056af2b",
      "Norsk:b80ea8541dd5c3c81dbb5f65ca1ef1872c42f7ddaef79d4692c65d704a2340ea",
      "Suomi:0e49d6474dbaf73eb109a19e728e70dfd45fc5c79056e6c5fc5102dea4f6331d",
      "Русский:543f20caad7bbda4eb913970ba9d95dc49b9f4c93abdc45ff2ee392cb15e3633",
      "عربي:7b97b32d0977c6b0203d8aa80371a611e94d2901294795d9f14081d35f045ec3"
    ],
    "Jonah": [
      "English:555dafe374c9458eae28fd1a065c838327b96be8ad5b0549e5145e747baa002b",
      "Cymraeg:1f1df0ca620d367341b2d530c6627337272bf1c40b1d01723ebc02e972724860",
      "Français:923435d7a56173c2031c22442b8053bf9abe6ce3ed98fb83f43b3f02f529985c",
      "Deutsch:f921a7edc53a29c72a4760a3b675d317b7cecd8978d5a8d4ca2588e45f32ba48",
      "Íslenska:45ce1ba069e9110613d908b30ddab9ecd9bcc4c23e884a2dbeedea8f8cf728bd",
      "Norsk:ef535584f71fe7c5db118f77aeefc9545201f6153954042cc76629ab7b88e33d",
      "Suomi:20e00d0a190f88db6dba9e39a760367628d4479572e63436eba12f77b493cc4c",
      "Русский:2883e2a6095c222739f40f3a95e64afaff90ab8c0ea0dc3472829a28c080c2c8",
      "عربي:eeb1edf969c2b450e3f5cbe1e20c5b33d4d61abf1e2aeafab6c73b7073c18c1b"
    ],
    "Micah": [
      "English:4b1fde85276cda6c498e9e8d21a2e973566378616e348a5613f5590e3075255f",
      "Cymraeg:b026241e765f21c085d67a86c65f921fb8237d436f129c9e9766e1414e350e3d",
      "Français:e87ccd9d3f76313db1c547644f9bdca4a401bf534426cf2dea63d8dbdea465aa",
      "Deutsch:96abbc33c50be95b01dce8851de1b5478ace91f8a555706ecd92933b5a04fb0e",
      "Íslenska:1c833d36f8eb26d52dc7cde3ed77587070cf1afa894dbdaef3a47ddc5df91bd5",
      "Norsk:742d4d9b2b80bc124bf22fcc393734e14cd4ca9b6953a54582c1f7cba9e573fc",
      "Suomi:cb49492b5c62717eced81971a67c7a0001aaa1d3be7fb7cd96f09df111406885",
      "Русский:b00146bc5e4e2d2cb68086bf024858172a4095c3b292bac9225985547c95f3aa",
      "عربي:28a4cc6c89711f893d93a4e70731bb966a8a3f22e53b248d3b9ac81451aeaff9"
    ],
    "Nahum": [
      "English:f4c9488faae12c20c9295755159746a6f7661791724765b08f2516a64be4f7e5",
      "Cymraeg:dbe53915d42c8ca977eabea78f91e48a87d52c13c919487662f0dd9dcaf36c0a",
      "Français:05715ed85107880ef8391285be57404786fd212e2e28f56c596f469247fb3ef2",
      "Deutsch:5a9d2b16aa07c3b6506b1e0f99a25deb17b74296aa4cf3e7655b0003071e67d5",
      "Íslenska:de67708f4ec9615de1a9a08aadda22d624bae05ea379e71c70c96fa1d6921466",
      "Norsk:76271ea4068d056a1504b73bc06b518176087356ea83f60d79713bbcc26de08a",
      "Suomi:69f6de21a011336d1415cc60a30d333c819965bf137c097e313f1857a4aba1b7",
      "Русский:9499f5be2764de07c1e7a4ee4e3c5f668949e05bb43b1732e68291acbca03307",
      "عربي:53dab55a1d108484a6b3ba5d644d50760f11cbb8a04f914225e44b95cd38a87a"
    ],
    "Habakkuk": [
      "English:56cabe34f3f9679cbe645b8eb6374587a623f050543172c8f73b63fd7e173184",
      "Cymraeg:915e348971534352a9efb602e59c2bcc9a71bd9ead0464bb9cecb8e9c310be14",
      "Français:ecac9f4bb46522335bbeb1334ea450cce1f2834408afba99eed3fe1dca06b530",
      "Deutsch:e2e4e8c07fd5d6fc41a797f4969a96702af8f23e0df75d5d3213cb5cbf772e68",
      "Íslenska:8ff1ef7f2b4586abaab72a690871af7281e78edda1071e34f188d1daf9aa9fb7",
      "Norsk:e6e01b5c9fc5409aef4d34bdf75d9b01d67f69ae07e6a6a2aeaf1d2c7a293368",
      "Suomi:c94c857a8af9aefc3d3f60b9d37a8abb8fe09c34becabd6709390bd14cd7d956",
      "Русский:7f0666376a85b1622609b1a1ee26215a8acae52ad8270e9552979976370ea646",
      "عربي:96550a7d7905c491b1456e7af34b34fb839a35837c399d8299c1629fa66b414f"
    ],
    "Zephaniah": [
      "English:c91c75a9497eea7c54df51e3675cffdd6e0ef44a824abfa921d33b60e01ed2c0",
      "Cymraeg:56fdc560d3e6b5d386230456177a6a903dc40d6edf7a15bd261f18cc28289ecc",
      "Français:6b00b75c2f1e70a08bf6f446bb078930a969cbfc4268d3b26f6bebcefd1ed561",
      "Deutsch:ce74a84a9f1d84d8818dc6cead66632825fb9bad7ba6f7e6f306fa26d1bcd549",
      "Íslenska:454dfb286ea7ef9df07ab2128b4feb6778f445cf3c0a3cc6870c2197007bf52d",
      "Norsk:76c8bd429a59c476e5d49e346b2d3ba2a84fc03adcb8030d9429d22f8a93ab8e",
      "Suomi:32b98f93db2bc2ba46e533c6a757c47cc141b670b18ce6832a2a5e3106f95d77",
      "Русский:bed5c27c93f90a398604aa7e3549747f8738ce2b30bafcdfe41aa0b42a90b8a4",
      "عربي:3580449d5751bfee25d605814efb8b059b9da10ee2c3fe234e55afb3c4abb240"
    ],
    "Haggai": [
      "English:d90e204999b6e9e78af5deceab5c1e3f6f755c007c02675347743bc37d5ce12c",
      "Cymraeg:331e0b7c523a87a656f01f5f2f2e928e78bcd43a6b58dcbd24afd3921077718d",
      "Français:f2a1e805585abdaa473c05c243da8836a07147ee469d1c7e82cd8f6f4cefe9a0",
      "Deutsch:d9f5493fb1d0b0a13d79fe61598d8032c5d84480da4db39eb9dd020917e09626",
      "Íslenska:ddee88d016ebf52742d3b4507434da60e1cb3cd8cc54bdc97857fc7e82a25904",
      "Norsk:3716b28674690fc71fb3e45d91530c0772523075700130d2f3edded9795a5a6f",
      "Suomi:87fc37ef20fb466171b1b3d2fc2ac1d4672cf792e634690bdd6d428a7bc90812",
      "Русский:e3e4848a4e676cbb127f2934b81eb843fada9bc833964dfaca8e3e79edaafb08",
      "عربي:de66b1ee319da71238b49f21ed5e567e5da4ba09afaaa7b997cde22515750a3e"
    ],
    "Zechariah": [
      "English:09f12c58daa5ab75de328a50cb781e91c6762729a16d8b6932ddfe78cd6e3a97",
      "Cymraeg:793395c3ce0c11e478d272741f5af753e48697ec61358e0521e2a8773d45aacf",
      "Français:6baffdc56afc9b8ae373530f9938525615d6ca9d004a78958a37bb55b410d3cc",
      "Deutsch:c7592e32ac6d89d3a65828b4feebcd3537d4832fd09f4e83f36385bb0df6fc52",
      "Íslenska:d211fc90d8253d446bb029a11863470f57892ea0ffd79812488c1b11dfea2186",
      "Norsk:d1964af56534414a09911461f1b48ad492ed2f9bdc98dd211f7c5df4cf74be04",
      "Suomi:2c679428589e21eb237d68e586e30c70985d5e8a997707c8fb054b1bffb40814",
      "Русский:398688f28156e37c6640026cecc04e966f61dcba326efaab75a44105362c7993",
      "عربي:9af5b01c0c3a940b54157c7dcfaeb6db757f5418c88ec37363ffd54693cdf2c8"
    ],
    "Malachi": [
      "English:759983e1a1b88737cc2a5447a4f94fb05409f49d2cf08305a633e832f9bb6b0b",
      "Cymraeg:7aab008e90807761704431c75cc3824e16745a34354782067a695c9fd36a2952",
      "Français:ae5493e21ef53c9460339911906785d454b13efc08013b60d2606857c1fce292",
      "Deutsch:f3a8f33a71dbac4662feb78186f0b689b11ebe603da207574e6f59ce78b84363",
      "Íslenska:5ae88a66ff1985eded8b427c81d7cd10322d0dd5a29ceb1d6aa88f5fc776ae1f",
      "Norsk:ac0b96f61e9efa9eb26876b49c717009eac532cd11381653c1ba12f47930f609",
      "Suomi:38814183699cc51c571b19bb45adfb84676cdbcc165a645abf598c141ce2c954",
      "Русский:1a6ba3d0a504a85fd37270408c95288dd57bf3944fe5198288244d29b4ffe581",
      "عربي:3a0f7387e74354cfe4de92e35c6e6555aa93b99e3c7835ead8b56e47c3cb80b9"
    ],
    "Matthew": [
      "English:98ffff746b524de18f56a72cbe2cc1a8b1a37ca04e983263f78a13a4ff120da0",
      "Cymraeg:cab1c8b93f4f85038078f9fa275c2d294f861135cd417fb045e4a53c5adcbd14",
      "Français:8f351ae73926a585c259392425f57291ad53b895a5443b0e98d70b4f7813a9a2",
      "Deutsch:79889b8bcfe92845d3c32a74750525caa1cb89f29162a7070c61936e27e3307d",
      "Íslenska:7a946def5b2e8912dc354936fc6f930c60a2dd20d28653401f81c1d7d0a5247f",
      "Norsk:5b6d5c362cc27526de2aa76fbafa68881c6a3404a4b8d0de6de446812a8077a0",
      "Suomi:3227a6f8b2f083a2baf0b9c54565dcef26a4b33fd2a1a8b104f873325288cc1d",
      "Русский:683195aefca3a382a2bdd46c36a742df6a653c918410b45bb49bab6971fa668e",
      "عربي:c1f241d2d30e35288a375574e5851ef5e58595dbb5ae2069484041e3cbf35468"
    ],
    "Mark": [
      "English:688c4c00973d3e4a3c7b5e54719429c4e6556330bfaad1b23c3b00a4619aa212",
      "Cymraeg:e741722f2c8a004318d2f93f1369f176b7dca75f32136eef44ede91585c03f09",
      "Français:7c1bb2734354672b30cc3fb07564e85d5ba03a1dec4f15bf03e9e353c5e5983d",
      "Deutsch:4cd1365dc1f8c9d5f0cb9a0d79c10e03e83bf9fb0da66c7e2f35dc993efa1065",
      "Íslenska:0a8dd20c93d0d88e51312f499cb22714dd02cdc4322c9e84e0718023dc022514",
      "Norsk:0f374de60dc2038d72d60018a4437eef78597aee911a76ca1c83618062b5d177",
      "Suomi:0046e1f3ad915b819475fc7e6e4bd53e9127302a418459fb8b7408e709d52374",
      "Русский:a212ea5936c005dbbf1c3d332124d7079ad56bc6666dc34a1f76569aa302d828",
      "عربي:c3823a2d61429a1a1b9efa3dc310024690446566bffc5746dc5484bde785f9e2"
    ],
    "Luke": [
      "English:82398d2e1d3aeb0a9a3b3fa93972cbdc77a8c76733d37932d2953c3323360a50",
      "Cymraeg:40cd624238c5942a34a3a5fbee7802b1d0ba48850112b566effe61ea5aafff0e",
      "Français:4ccf25d8b11df2eacfbec8e4a792b8e4d5443a1cb232cfa9a08f29c39720e3c5",
      "Deutsch:2fbde015d1bc6b46ff1e89a424f77048f0747cbc9afb7fe9202884fde2a00331",
      "Íslenska:aeda4d450902e6e9d63e6454bbd1f305b22170eb9d3fe452f46e946920e793ac",
      "Norsk:791f167de5b636144c5f8ee4320ad6c97f2a49b06c6b7d11ffdbf935aaf6c9ab",
      "Suomi:8ff742ca32ccb6e613a8822cbbdfaea01046dbb00f18af080eba5fa22f69f95f",
      "Русский:4a30bfbf17c7eaad31b98d14fd8f5609e5797eabacabfc8ac53f99037c43bed5",
      "عربي:4619f81c270e35ba77b83ae28d1b127d2aae7411b0605261cec34f26a611029c"
    ],
    "John": [
      "English:5102ef4bd35d5023f53d3d6c842a8afc0fe24847f11fb13e09ee495a383d2123",
      "Cymraeg:0ba0636c02e50c30a5cc613e3fe67b124096a46b12ca768ba06594f2bb80a708",
      "Français:c602188a2dac230000463a5955561d6ffa498083b83d481b65dfd2badca59ea4",
      "Deutsch:39b70b23cbfc5cab346166f8d1a30647ce8908287d52400e1deab1aad4925e65",
      "Íslenska:e907889d21b14a2c7b14ed1bd58017715484de5b5f7b8c8e96555fc124b8cfcc",
      "Norsk:bde245a1fa9e9498daa2621aeeb683cc5130e05716d0d058cfde8a25ea68aa57",
      "Suomi:2d4840a8fde805eb77465a29759960042626edd3a66a14ea7a084e46e3e0fc7b",
      "Русский:5e696f53c04897cc0a27862f18c73d8f1b677a79d3f928fee6f8fec2417080a9",
      "عربي:e449a0ba8f48cee4d09735bbf414658f8f66981e28a891f0c184d36ffc1003eb"
    ],
    "Acts": [
      "English:fba7209af7d5b416cb83d6937c55694ff92bf57e833843d266285f53f2e229ff",
      "Cymraeg:f740a298e42b4532812dd6675ebaeed141b34d85e65572a6506449fa0a74d5c1",
      "Français:47a6eed5814f6f2f993d704a758957972c0910ea506a618a4468d997ed176ab7",
      "Deutsch:9e7ddee83d53ba7416235a0ed0838fe43b7983ba26619678b3355ca9b1163aaf",
      "Íslenska:48ca37b8947313887a3f356a04837bd806a5beb20a5d38a5b2355bc0b3c91586",
      "Norsk:784e4d1cddc9cf39bf1854dccc00eb0329959772dc66ea059ceb5425cda91059",
      "Suomi:5c21700af206ff7c5e7440422039d148f7929a74be3dbc1f0fe5b00ca2f026d7",
      "Русский:bab35583bb5ff4dd95c06796b9ff50b96b1f816fa73130dfa86219857c9493cb",
      "عربي:69dd9bd05bab1d328c3473a8e212d7e59c434890a0297d8387f5da05fa62754b"
    ],
    "Romans": [
      "English:bbcaa983e5d062162f7d4d7db704a0e4045a29bda48dc29d4dad16480917c29c",
      "Cymraeg:548207c684d579e3cee485f32d8ca29ace70bf64b47baf4082a907a4a4cd707f",
      "Français:d62900f72b9f579e6d5b51f8a1782cd54946555b547e5f1cb0260b13114a182e",
      "Deutsch:04f32c1e0a6b320b04e9f90d6e201c6e85b3db1bc14db6b7d7cb70b71846a67d",
      "Íslenska:ee94ebe10cc983061d8c18b1999fd889500077ec6ca0dfebdca3bd5a0a2ead5e",
      "Norsk:cf354b880219ec8b7c4f418310de54dfcd1ac00ec47236779351793d0554882f",
      "Suomi:b3debafa6dba263d81217a1c8fb3f8858b47ec2c045446eb4a0f997dd023927c",
      "Русский:30c92db908c4e109b01894cac37e570346eb5c1544b6ca60a1d611922411b89f",
      "عربي:6606150c8ea5b479a8bc8d7bafc0cc33d8e0e0bee30ba4dbc292658525b31140"
    ],
    "Corinthians": [
      "English:8d6730c1f3348df8a274fe4883665bda33a39b85c31464a277dfa7b365621d4f",
      "Cymraeg:c6aeb9a5d58a8dfa8e21c5773214f4be958288c0e18640f580a06b40c13ca896",
      "Français:488d01708e2558d2abcc0e451f4863f431bf4e74ddaf8cf2a2acd4b51bbff3a1",
      "Deutsch:738c32853016e20176196d82c5c1fb3e24228747551f4dba38c0e965016fd0d0",
      "Íslenska:1f6c60aa2d9c7c4a4f57ccc6434320458fb7df4a0594aad771905485dadc92d1",
      "Norsk:3f2e737a904bb5f66b9666c09f354618c6ed9399623b9f81a2aa4fc6d9598269",
      "Suomi:48f8fb49638cc7c9afbde570ccf706e01e768d1810ee2e353aa79f8559a86559",
      "Русский:2af7fe600e2f53829328729d0f429b23a89c9bf840c7fd6be1c2a8f631990340",
      "عربي:07404e792e7096cd2f95f00d7f19242e2178007dc7ac9a864516795b85a075f5"
    ],
    "Corinthians2": [
      "English:298714aeacbcad2e7fde61ab0a48cf612f274599ccdcbb3dfb4058d68806fbdc",
      "Cymraeg:d70a6abf0d8e9a510a2bd824cc6ad747ceed1e3bdd9e308e5c4b72eb72329527",
      "Français:026aa28137904f968c23e52f6b7cadbc0d9fa669f2e7f07c5a6302605aca7fe1",
      "Deutsch:e16ba6a70091800506ec9c15f45ac71529718bd3db65f1ca8786447156b187c3",
      "Íslenska:b614a51685873261d855c31d6ef26524a3ee19c114deef14ea37a41bf5593a90",
      "Norsk:2307445e93349cb740f372405dae889810559d99a1c7885b3c5ab0851f9117ea",
      "Suomi:98d6e1342a85d710dbf538ed9eef2a5680dfaa5ddcc0b99e6f5540fd1b97e37d",
      "Русский:d673f277bb7c4997f4bafb54c064bf033ccd43d2dfe95cbeeabf3b460ae2944a",
      "عربي:3936c46f5524e1333a926904e9980bcf3f9f2e6d7a04acd1063c29ca27c208b2"
    ],
    "Galatians": [
      "English:2bb8619b6768309515beb13109494b789bcc37934d3abe8982e217992d237473",
      "Cymraeg:79402e158f19c616869a69205f48e6914aa2b9e89b0b55c3533ee8c79c7211eb",
      "Français:e1c21c8884e9a6990e106af4d5bd1fc2ddd81d26e52cc3dcc071bc214d7b474f",
      "Deutsch:8cc5ce2301168260e860c1547cc81e6cfeaa99f5631039a9533fb9be2a44ccef",
      "Íslenska:789ea8fe5db625b1863e0d0001af4ab2a9adf6ee0432bd20940b42793b31e1e4",
      "Norsk:3d9b282c2c1372cd94f0d5aa0592eef4777ebf63e159b385c9c19575eb5a7232",
      "Suomi:6b3d0e3ccfd00ff08a1d7dc05a42ac60987a156361b5dc6296aa4e4ab190dc2c",
      "Русский:0657de7e278f335d204491d13af2d40285ba5dba440601871e8a40e7a8b163b4",
      "عربي:43ed343484a9ff1f85cbb6940fe79232f8b923a3f3bbf7403bceb72519b8059b"
    ],
    "Ephesians": [
      "English:fa5d0ff0e89568d777091cbdea85771cf49bd2c155064bb94535dc2fedca26c1",
      "Cymraeg:274c84f9fcb272b5963299ff60fd8188d8334bfec3aef3007e0e4ab3fa78bc0b",
      "Français:8c7d9040382196e798997391b9fb158839fef4be11f4c95f436e69a3178872dc",
      "Deutsch:fba2ba192b313fb0fe4f95adf3b4819f4c12d4356c28d5300ea9f4a9ba2736d2",
      "Íslenska:d14003c0efc051b9a3adc2064a7a5a10167a2d4518f338d3a2f2d88c253d7904",
      "Norsk:52efa59d79aaee7aa4fa1098ae14c02c020e0b4ea9ea22cc1abe6a03903109b1",
      "Suomi:72ad7b49782ae2c4af1e8c8961c7a4833c869fac5d704340909225865624453b",
      "Русский:bc21188054db2aac11708f82aa3672b8244fa86438abf28ad0423df3f29c6454",
      "عربي:cd2777699ccd3ead52b6b25096d4bf37c751827dc3cb04b0bfdb94d8e2524387"
    ],
    "Philippians": [
      "English:aedb0bf6e166ce20abd0eb5a0f86d32b78946cfbe1ce2a990347a31502b1af76",
      "Cymraeg:df7c3d5c4235d40f5a467309f6fb80d97822a363483ca356038833bf18cc8b8d",
      "Français:90efb2978f22bb569dd35c851b788a4a131f6a5c1d97a9e725f11c0b8e3428dc",
      "Deutsch:8477395756db640b65a62d9367ed77c4ab515edf58bd43e1f71a7609a12849da",
      "Íslenska:815a1e7592740e11a4cb90ecddd20a5e31489c10e200da51204b1054fae3cb24",
      "Norsk:142dc6a53a888fa5e3ae2b1db2ca39754c1283175a671e2b8b7fba159d4e89c5",
      "Suomi:4fef3c72b31102ab262a1992d9f02cad49e432596b5bb6f0aa6211b99c0754b4",
      "Русский:c3bb43b4e9022869c95be6601bb49f73ec7fd029853ffde9a6cf1814b9aafc08",
      "عربي:c7c224728e7784eb4d983ee85f9926d2bd952ed1e896bc9966fd6e9d81248a4e"
    ],
    "Colossians": [
      "English:e4f30fe1b1e9b3688df416c7f50d14fc9a026b1b9d1919d950458236fedd786b",
      "Cymraeg:60646c6ccad8a7d010092c3720eecc40e745b55346c9280a1a2eb56a45c4ebee",
      "Français:898da94529f7f174c27ddfa7928ceacea770f8167943fffbf82299f5aa0079e5",
      "Deutsch:4e545a6364a58c0082b9946e837163ec70bf82caa6fce0935189a9cbcb052972",
      "Íslenska:eb8d9466a6ef65181bd72639d8d4f021fe91e1ae9730e9d0e022022d06827e1a",
      "Norsk:740b0e2e37cf8920a094c3a1db447241e2f6a6ecefe896855c73206961c5dea4",
      "Suomi:f16e11cc76bb0a487f0f3093e351e152b31a3ad84e935fed59750b735c64c8a6",
      "Русский:871ac46c290e05495f75421b9c79dcbf11670ed06952b1b083f5c1352d81901a",
      "عربي:563f49481190b6a6adaed68d471e1c86e5bfe76c9014fc7ef8c144b5e3af4c72"
    ],
    "Thessalonians": [
      "English:553853cabc671b944b89e0cdbd3b151ccf03fd4ac2e5e9b44ca82520ac4b8b59",
      "Cymraeg:60d995fb490c9062b0e6ecdff8f965cb891647b5e8cd7a3103a3a44d77ca1dd4",
      "Français:77544089530c98c116dcef09f35958729c249707878ea92a70565b092f8fb9b7",
      "Deutsch:1b41225b0c697a2c890e5c5105aa1d20b5a0b0b68a5e3d14633d355627df0c41",
      "Íslenska:c2b5e1ed308ea4778678bcfdb6b160bb73f8d3ad2f6118a536c21d07bd8dc530",
      "Norsk:5bfab8b17daddc4cea730c8895a9183e2ad6debb2f7a3250c6d6cd1babb435d3",
      "Suomi:f5bde51feeee06393cb2f88525095227ca216baca24cf8a443e2e72c64582d2b",
      "Русский:091cb7743008f8b0deccfb7373d319644cdf79885e11ea064afc6ea6dfbddf41",
      "عربي:6f19aaddc8c146b186c1e9e75a079b53f30ffa90a1e252f871644ecef86cf241"
    ],
    "Thessalonians2": [
      "English:e5a3a4a82ca1358101e9ef10e896bf2fdd55220edd20f72c90ff7cf88beba0c7",
      "Cymraeg:e429ecbed19be4e7f1275ddc0f8ecaa79ef5c8f9f7f774e83f2a4eb4c9d1d37b",
      "Français:47d04ef60f9480df03b74f54ce3e1bbe26a3cd741bf8c19286b508d75d31a850",
      "Deutsch:f16ec5ed6363c01d689e9b92e5929a847b4ac6ffca59a3bdeda3ad6f6c4a38e8",
      "Íslenska:20d8a943aa86dba117c5e036689e47235c6dd5984b9ac3d2cf8e960adb2613e0",
      "Norsk:ea2fcd296c4869d8f3199b5d74395ca970cfbef933b6b828dd126bdd0773a5a1",
      "Suomi:baee29cb55cdb11628f1bb159272fed0bf7f098fe9e822e2851ff78b09976cec",
      "Русский:f0c982976733a53ba539af39bc3ffd5d8bfe871ce40984a1cc807903447e4825",
      "عربي:6f31c834d95ff943fd75d6f95f79a31b6ec13b05ec675daac10282b542362b5f"
    ],
    "Timothy": [
      "English:433b5b9ae8976dfaadc95df58452acf498e5faf0a2906fe631510366acab7a17",
      "Cymraeg:3ab9fd058ed1eef9ff36d6bd2f10600e9a8a7c0813620f385ce93f71e7bd1b87",
      "Français:d796e3e1e06524c350b3249f91caff8cbf4447a72c202aab2da7cb4184706b62",
      "Deutsch:3d7dadd5fb19cadd7e29b7eccf5bd51aaf99ff66cf12a92e07f4bf2b92c850af",
      "Íslenska:a3ff70aee4844fc3c386faeb21496d1e84a9c8f1de91c42de7addda404da55bd",
      "Norsk:b98783679c43c6d702c475054f3155c75a51bcdb07cee517e6a17aeaf0b3eb5e",
      "Suomi:4f4758fd639b1fe9825b6fd07c67d3d38b81f8f6cd365c9c2ef65d779631f88f",
      "Русский:41ae8690e3fd22fe5b40c974d9709cf603f2ec3540220f78cd039335a7051dcc",
      "عربي:a4e8f753a9a7b974f95d68718226064fe7c0962d884c8e0d4f8baf85db4aec6c"
    ],
    "Timothy2": [
      "English:e917b7c12c938253cc6560f9ff73ea49cd24746e9f2cebb294e1fb55fa7451a9",
      "Cymraeg:1b541272888045c633c94b6f39b1716d7fb12477c95f7837805fc2c92f3c7483",
      "Français:b839481a5b69dcc9d02ca0e2600134bb02db0299b98e6b2894f699f22ed200e4",
      "Deutsch:84d451a4ae373b789c4e3e2646a96787f2ac1aeecd0bd4d3e369cd6a48db3c12",
      "Íslenska:cc8f1c9010857c1d5564f9c022fa2eddca5d137c008f300db3a3ace51c44e78a",
      "Norsk:c5bfe3c1ad3f10805109092701ab5552cb96c4b4910d5243711f50b126299865",
      "Suomi:82a47df29d381c825583ccf7fa2eae443bd6737e03b4565e60a5b9f9fc1af032",
      "Русский:4737c3c00f91612d2763e6398b94073e74e7880c6a07a274ead7853c0a081562",
      "عربي:7f7e7530e20487c9f9e4605848a44d04c01ad9f269bfc7fd4db9ee0c05a386fb"
    ],
    "Titus": [
      "English:9e8688e31234ec1bd6ca3affa4a63abdb10b9f71fa8e291c47b4f45218188d4b",
      "Cymraeg:3098286158c7f0a75a04ce5b06502a242589be41ed1217b6f408e2d27283a55e",
      "Français:e01aace01a8324425799921fa24dda2ad7b50758aadf68f4b73a57535bd32d6d",
      "Deutsch:3ef703f52c74328337671107cd7f755a24a691ccd41a8342494665b357b71e13",
      "Íslenska:90857c7faea1d0440de513a474a8163b56752aa5ea52ee30732ecfac9550c360",
      "Norsk:6fa568cf18255f8ba3ba4ccb5cea7b07c176edd368024e79b81c04e08823db7a",
      "Suomi:336d0afc4b788e7af3a0635aad8b8d6411a48e5d8621c8df125522d9b6fb6454",
      "Русский:b7ac9353a7f77e288889467e4636426d61523ea8e5df5b160d2ed45854ac2605",
      "عربي:583cd8df88c865d7aecadc1b7ece564438804b5f924aa066d93f5f80f85fe1e4"
    ],
    "Philemon": [
      "English:4cc0bf69140c06170b3767150d84219d32f3a4dc43369b181a0ef1f0a243aaa4",
      "Cymraeg:fc1badd5ade2a6fb964b60fe6939942c3cb40f85844ca65287f4220feeaf28d6",
      "Français:fbbae9f2cefca930e1200f3008ab2585c2d49c6045674e2aada3b34ded654ce8",
      "Deutsch:5cf2224c5a2fefbe6dc6ab3fa46fceae8b9294723c4c66e3912b59763e31a663",
      "Íslenska:533f6e0966dedb9d1f6ae025ea0820f1226ce37fd77f0c13a10b981e7e225467",
      "Norsk:d2ef3c8d3f2d3dc800e98a7510092866c89caa6a15af243c2dbc06d9403e9730",
      "Suomi:29ca0b08164584688ebb44c978bade928439a465ad90c5982d888253c7c12fac",
      "Русский:215d5fbc3802229930d2dfb88b756b7eb330d53bc88e3b9cb5c4fdeea602c096",
      "عربي:a9a3ce3e8c6a931744f15c6de78f241b5dd6360c464cfeef5c0d093240790824"
    ],
    "Hebrews": [
      "English:5a96d2cafb120c66115eae26a3c3f5c7d676062a33f0521aefd2cbd2ab040226",
      "Cymraeg:8131eb05841f6d7d39af2bff7af05e07052c725604436fdded21c93b86d5a425",
      "Français:a5b2439b86e436e59db71b9120e90d8c2b445ee5ade6538e8fb3aee374ad1aa7",
      "Deutsch:b371c0a546f19caf884440ddb52a8ffd83ec4fd63c452d3bc5098f4f21cb1499",
      "Íslenska:a55828f359b18a2d1348c13c1faa9aaa5acdb23071f337f25b96cc46d65ce1f7",
      "Norsk:e811b2573cafe96774e3980abd156ee217481df8243e33bda24f3666feded78d",
      "Suomi:49a2c2727e226a4cf4496b4d4fdd0ca96d1c86065e88fca637820aaaa1b4f60a",
      "Русский:7b985d395a3e10de9833b83ef42d8616878fc683196923fd0ad45b769ef7c8c3",
      "عربي:4331229b435600963ddec8aefc60c35dab1afd0b3a273000f38544eb862f6311"
    ],
    "James": [
      "English:8f09f0bfc9a3262b88eaec1a319bd9e759bc6ca4e85fc14a911a2753a693e4ce",
      "Cymraeg:e86d496a0fc08048d33a3a1030c95e68fa74c3e19972f2a3e61451933eaef5ec",
      "Français:93210377d051b2512923a52a57d9f5ba040af13a58a73a6e727523301b99ec50",
      "Deutsch:bc592fba95997ab4a66cef8585d706095e15952822f9d0c28d7c9555ddcd3348",
      "Íslenska:77d5647269370d6c75a4771cf8d380450cc15572d0fc4bcf4f92caa35aefcb18",
      "Norsk:8fa3b5effe4b3840834631c27c03697ab94d0a77dc09e72ae970bbbdeb25d7bf",
      "Suomi:1664cd0301d961c6dd9cab6f5e0ab4ea22bb8be2c4989afd6a7e27c107fd7767",
      "Русский:356dcbc899a8a5d9a68ee7e21a4d358c7252e955b0a4773b74359e512cbb8f06",
      "عربي:616c4dc7369286b8ac007dc6d05a52379a025b24911d4535deeea88f9ac89c57"
    ],
    "Peter": [
      "English:7938bea5ec045880f6f980490732fcd624fc1f04b27c708f8fc5613dda7b2069",
      "Cymraeg:1455eba1d79448aa43a5f3492c2dc12b7744b2a945f6a46250859c4b3453063e",
      "Français:05f72ed643ba0569922c5fa3c6b209196c490eba71750e7eff6dc30dbbbc89c9",
      "Deutsch:4dad1578a2d1de3281b5e229dff2dcd337c7b959e0e3d3f3d1b6a46fa3f28f1b",
      "Íslenska:7dd085056455fe1a8ad39b0c1f9a80ca89e911ce87d7f82447a6b4bca50ed3d6",
      "Norsk:b4fd3e43f18f60892a760720c30462a59d2be17c2ee40ebb59a0bdb62986a5d9",
      "Suomi:e600993f4666d63dfd95ed079fa52cbaa7b0c078a41687d0fb3192b6172942e4",
      "Русский:14736ac9c434f5044672ccd03bd9050322d5a1630e55287b8e5e4520cddd2870",
      "عربي:bb3a7886209ea0581e585cdcf8eb575cbd6062ee26a53739139a3ed0afe122b8"
    ],
    "Peter2": [
      "English:36d7dfd4741cf04c8713bfbda7454cb64e925fb5f07575abd0bfaa0bce1961ce",
      "Cymraeg:103e1c8bd1654cea06eaf9a85c2631c3395c077791597761b9b693a098da56a7",
      "Français:137aeb5676578b4ad3e447fb3f58153c6e356eb723fa47a9283d61148b32e0f3",
      "Deutsch:f28df46ad9ab2ac1d90a4b45c82cc0b37f728ef7adb65bdfcd1258e9768f2c30",
      "Íslenska:4b043f8a75db1d4124bde0e1020780b475d6f4490c6ebb69814342154f6f11e5",
      "Norsk:38f1f63c357dfa38150f22404320f2145f6cf0e8f761f469be55119fd5a1ad12",
      "Suomi:9560c50016495eb0b469174df63d7fb0a6b1a43c21d85384fc381f5b155c4581",
      "Русский:d1de2f115338fcc2888b088571ac8498c5e2b38f79cbd10de976198a6fa44ecc",
      "عربي:5b96ca5c4d00d9a1d8667b1dc375b5f6256718ef43e535263c3191047041348e"
    ],
    "FirstEpistleofJohn": [
      "English:7aedb66445d0b5edacf04f68e8e7d7b9acbf90743f54aee6d6c32391d5c86f18",
      "Cymraeg:462d098aae2a0ef076cca46664c402296f15c5285893b0eb85f96eb5acca6d4f",
      "Français:47c90537a4a58746a3f739791518494b93a584320e8ac1eaf83abc621a59ef2d",
      "Deutsch:fb7a99ad122886861bef003eb776d5eeb5b834ec971341f8902fb9e8a85cd87c",
      "Íslenska:34231ff0acf3ebb73d3c7d2b9102f7b318aebb9154d699300b9be6d4faebd378",
      "Norsk:d68295f6068d7be594bedf2a7fb24cfde33484c8b26bb25d4939e3dc5af80cef",
      "Suomi:8ef9ef8cc20c6b9c316d7092dfe224d3553ff6c3e4873b0e67f15c7b62e056a7",
      "Русский:3dab402b96c2c8d59213e59bea8884a04334bfdf26ebce532fa1d868fe19ef8d",
      "عربي:a282858c9b9ea9b157d72a1b359302f034eb7acd848c786b96de840778acf7a8"
    ],
    "SecondEpistleofJohn": [
      "English:de63b7a10e1c0166c9db9b6ec7866b69e11c32cfc5888933b819cc5855a8ea96",
      "Cymraeg:f6017b31ed18ee1465ef47d16644d78c68c77fff18a94b3fbf32fbb735e6b5e8",
      "Français:72119d144618c8e7bc573804d31779d8123a205b7725ab877b4036b059275b40",
      "Deutsch:379d51c46c5eb23af27cf20e95cc15e04cea5e56e94cea2ae2b1959bf9891e58",
      "Íslenska:797f5143c3910a448fab1ac1940ec03369fbf01afe49e808ab660897d6479f2a",
      "Norsk:8a082a23f7ab89a6c7cd632bcd0a7596e92efbcaeceaa793094a11a79aca4783",
      "Suomi:d4b7d3a338cb4360561b4f2736ca959ca2cf1f5ed3e308bb2e4fce514166a4e4",
      "Русский:402cb75ee509610aa3dba30844076a76b50ba998ca7ba0a8a4951231ac1aaad9",
      "عربي:fa9b41ad20a000a65c90cc2a4020bd844a6ce5d1631aedd36f3843c7ffdfeb18"
    ],
    "ThirdEpistleofJohn": [
      "English:45ac308927a802eb6ef7589af384145ac4cd63abdf7767c66e3b602f38777555",
      "Cymraeg:9368734e3d35fbe24c5c8ddadbf77339601c7223fe5c8a411524f4906c915240",
      "Français:f00b071a8915d448f9b931b9c2d6f9193a8c2f8a42133f6e5d95c533a07354ab",
      "Deutsch:fc7bc1a276b5a08d4a95bd8927cdad0ebda58738c779d5bf17b13c070d49c5df",
      "Íslenska:06e4a6e0880a810c572e8df9d9300aa4dc504f9a1ed08a34c5f981a04ca2831f",
      "Norsk:d224eb5d6d2e800878a632e8b92074511448bcf8e6ac24e20572bb4333d4df98",
      "Suomi:65e0932ce90cbc7fbbdd7626456efb01b871b82be2ccc2b12907426b72814136",
      "Русский:df08f4a38dc4243a88ee2d1f1cb396155af6a5e2ea858e9d22f92b44ca6167fd",
      "عربي:c222d955cd7d9fa752c4639f741a736c03009ee6ad9b9c5bc7c1e7e5357ae3c4"
    ],
    "Jude": [
      "English:8e4cf828d0230005cca7e3039fec58eb60b7eee2c07568b4fb69d3817fed8474",
      "Cymraeg:d256b1326a8de683e426a7e7bbc28a52f36d405b5f7355ffb5247254cf38bd7e",
      "Français:b2d6901150b3c389601c242e2124c1460b193999c146f4c66c29e048548577ea",
      "Deutsch:19920d537f8af37e635abc6ebb98c0f1da67c983d9b8b82f3678d8d06418aea6",
      "Íslenska:a5e3beb063097ea604d409038b0ec07080e180756515c10ada309224d04a974d",
      "Norsk:5186b4a9aa7e178149af71ea0ccac7706bbfd50898e4b789eebb2234824c2403",
      "Suomi:686cf6545ebcab0f5b2dad1324b065ef5ce42e83143262a4a6511f4cbec6f28c",
      "Русский:8c2bfbf7f388fba0ae0c054c5b107cd96e91bd148a6b67704f78370b691c9d25",
      "عربي:b525e5fa10a42c50b06900e07e8b20f7784a1b204f1f8fd033e639cd007bb816"
    ],
    "Revelation": [
      "English:13a4ffa501106207b20cea8c396292e35ce76632ddd7111ae37da6902ca9a3ae",
      "Cymraeg:da7a1f26faffdaff17b83814fef3c86b684227ddb3057f93de302c43bd6edfe8",
      "Français:275a5d43e0ea5084e05214e4eeeee510e53ce5e8615340cdef63301f48e12812",
      "Deutsch:fa1b620af0ddce8a021f85e2f8e7a3242b309c2191a6cfe592fc34cc5f8ce059",
      "Íslenska:c845c66364b6195c6a950462fa83684b8d233852307478d7c7527ae93ad1ea8e",
      "Norsk:0cf7a68e0cf773bb6623de2538a5c0a334dd0dcc14eb1ce7ba1115a209eaf4de",
      "Suomi:6dd21611236a06a3ad3f1c86e0497108aafc0e72eb2dca518114cf9b8894e319",
      "Русский:75ca191a2d9af0e8e89a7a7e930df08d5e0f87e4ee796d9e83e31f878d0c53d2",
      "عربي:6eb1f3cbbddea1528a698efbaf46af4a5b48e0691d2bea8def339fa59dff2959"
    ]
  }),
  SURITY_INDEX = new Set(Object.values(SURITY).flat().filter(hash => hash.startsWith(CAST_VECTOR)).map(hash => hash.split(':')[1]));

  async function bookOpenLogic(bookInstance, chapterInstance, verseInstance, settings = []) {
    if (isBookOpening || bookInstance === currentBook) return;
    isBookOpening = true;

    page_inMainVector = false;

    currentBook = bookInstance;
    openedBooks.add(bookInstance);

    //console.log(settings.length, settings);

    const pageView = userPreferences.instance("BOOK_pageView") === "true";

    async function BOOK_initialize(bookFile) {
      async function getBookFile(bookFile) {
        for (let attempt = 0; attempt <= 8; attempt++) {
          try {
            const response = await fetch(encodeURI(bookFile));
            if (!response.ok) throw new Error();
            const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(await response.clone().text()))
            .then(buffer => Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, "0")).join(""));
            if (!SURITY_INDEX.has(hash)) throw Object.assign(new Error(), { fatalHash: true });
            return new TextDecoder("utf-8", { fatal: true }).decode(await response.arrayBuffer());
          } catch (error) {
            console.log(error);
            if (error.fatal || error.fatalHash || attempt === 8) throw error;
            await new Promise(resolve => setTimeout(resolve, attempt === 1 ? 1400 : 74));
          }
        }
      }
      const bookHtml = await getBookFile(bookFile, bookInstance);

      const doc = new DOMParser().parseFromString(bookHtml, "text/html");

      const CHAPTERS = new Map([[1, []]]);

      let currentChapter = 1;

      INDEX_BOOK.clear();

      const createBookNameElement = () => {
        const name = STRINGS_index_NAME[bookInstance][CAST_VECTOR];
        const tag = document.createElement("BOOKNAME");
        if (["Русский", "عربي"].includes(CAST_VECTOR)) {
          const span = document.createElement("span");
          span.className = `instance_${CAST_VECTOR === "Русский" ? "russian" : "arabic"}`;
          span.textContent = name;
          tag.appendChild(span);
        } else {
          tag.textContent = name;
        }
        return tag;
      };

      const BOOK_STRUCTURE = { NAME: createBookNameElement(), CHAPTERS: [] };

      for (const node of doc.body.childNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        const clone = node.cloneNode(true);
        if (node.tagName === "CHAPTERNUMBER") {
          currentChapter++;
          CHAPTERS.set(currentChapter, []);
        } else if (node.tagName === "VERSE") {
          const verseNumber = node.querySelector("VERSENUMBER").textContent;
          if (verseNumber) {
            clone.setAttribute("CHAPTER", currentChapter);
            clone.setAttribute("NUMBER", verseNumber);
            INDEX_BOOK.set(`${currentChapter}:${verseNumber}`, clone);
          }
        }
        CHAPTERS.get(currentChapter).push(clone);
      }

      const sortedChapters = [...CHAPTERS.keys()].sort((a, b) => a - b);
      BOOK_STRUCTURE.CHAPTERS = sortedChapters.map(chapNum => ({ number: chapNum, nodes: CHAPTERS.get(chapNum) }));

      const executePostRenderFlows = (chapterInstance, verseInstance) => {
        requestAnimationFrame(() => {
          BOOK_traverse.initialize(chapterInstance, verseInstance);
          BOOK_space.flow();
          BOOK_continuity.flow();
          BOOK_visible.flow();
        });
    }

      const renderFullBook = async (chapterInstance, verseInstance) => {
        const fragment = document.createDocumentFragment();
        if (BOOK_STRUCTURE.NAME) fragment.appendChild(BOOK_STRUCTURE.NAME);
        for (const chapter of BOOK_STRUCTURE.CHAPTERS)  fragment.append(...chapter.nodes);
        struct_BOOKOPENAREA_VECTOR.innerHTML = "";
        struct_BOOKOPENAREA_VECTOR.appendChild(fragment);
        executePostRenderFlows(chapterInstance, verseInstance);
      };

      const renderChapterPage = async (chapterInstance) => {
        const chapterNumber = ((ch = Number(chapterInstance ?? BOOK_continuity.resume())) =>
          ch >= 1 && ch <= BOOK_STRUCTURE.CHAPTERS.length ? ch : 1
        )();
        const chapterIndex = Math.max(0, Math.min(BOOK_STRUCTURE.CHAPTERS.length - 1, chapterNumber - 1));
        const chapter = BOOK_STRUCTURE.CHAPTERS[chapterIndex];

        struct_BOOKOPENAREA_VECTOR.innerHTML = "";
        const fragment = document.createDocumentFragment();

        if (BOOK_STRUCTURE.NAME) fragment.appendChild(BOOK_STRUCTURE.NAME);

        if (BOOK_STRUCTURE.CHAPTERS.length > 1) {
          const title = document.createElement("CHAPTERTITLE");
          title.textContent = `${STRINGS_index_PAGE[CAST_VECTOR]?.Chapter ?? STRINGS_index_PAGE.English.Chapter} ${chapter.number}`;
          fragment.appendChild(title);
        }

        fragment.append(...chapter.nodes.filter(n => n.tagName !== "CHAPTERNUMBER"));

        const wrapper = document.createElement("div");
        wrapper.className = "chapternav-wrapper";

        const createNavButton = (label, disabled, handler) => {
          const btn = document.createElement("div");
          btn.className = `chapterbutton ${disabled ? "disabled" : ""}`;
          btn.textContent = label;
          if (!disabled) btn.addEventListener("pointerdown", handler);
          return btn;
        };

        const prev = createNavButton(STRINGS_index_PAGE[CAST_VECTOR]?.Previous ?? "Previous", chapterIndex <= 0,
          () => renderChapterPage(chapter.number - 1)
        );

        const next = createNavButton(STRINGS_index_PAGE[CAST_VECTOR]?.Next ?? "Next", chapterIndex >= BOOK_STRUCTURE.CHAPTERS.length - 1,
          () => renderChapterPage(chapter.number + 1)
        );

        const dropdown = document.createElement("div");
        dropdown.className = "chapters-dropdown";
        dropdown.textContent = `${chapter.number}`;

        const list = document.createElement("div");
        list.className = "chapters-list";

        BOOK_STRUCTURE.CHAPTERS.forEach(ch => {
          const item = document.createElement("div");
          item.className = "chapter-item";
          item.textContent = `${ch.number}`;
          item.addEventListener("pointerdown", () => {
            list.classList.remove("open");
            renderChapterPage(ch.number);
          });
          list.appendChild(item);
        });


        dropdown.addEventListener("pointerover", () => {
          clearTimeout(chapterDraw_dropdownTime);
          chapterDraw_dropdownTime = setTimeout(() => { if (!list.classList.contains("open")) list.classList.add("open"); }, 74);
        });

        wrapper.addEventListener("pointerleave", () => {
          clearTimeout(chapterDraw_dropdownTime);
          chapterDraw_dropdownTime = setTimeout(() => list.classList.remove("open"), 280);
        });

        if (!chapterDraw_closeListeners) {
          chapterDraw_closeListeners = true;
          ["focus", "blur"].forEach(event => window.addEventListener(event, () => document.querySelector(".chapters-list")?.classList.remove("open")));
        }

        dropdown.appendChild(list);
        wrapper.append(prev, dropdown, next);
        fragment.appendChild(wrapper);

        struct_BOOKOPENAREA_VECTOR.appendChild(fragment);

        executePostRenderFlows(chapterInstance, verseInstance);
      };


      if (pageView) await renderChapterPage(chapterInstance, verseInstance);
      else await renderFullBook(chapterInstance, verseInstance);
    }



    function BOOK_visuality() {
        if (firstOpening) {
          if (page_smokeSimulation) {
            if (ENVIRONMENT.RUNNING === "ENGINE___") {
              visualFlow.gate([
                visualFlow.instance(struct_WRITE___, "instance_bookopen"),
                visualFlow.instance(struct_LANGUAGEAREA_wrapper, "instance_bookopen")
              ]);
            }
            visualFlow.gate([
              visualFlow.instance(struct_CANVAS_MAIN, "instance_bookopen"),
              visualFlow.instance(struct_CAST_VECTOR_wrapper, "instance_bookopen", 280),
              visualFlow.instance(struct_BOOKOPENAREA, "instance_bookopen"),
              visualFlow.uninstance(struct_CANVAS_MAIN, "anim_vector", 280),
              visualFlow.relay(() => SMOKE.initializeDraw(true), 280),
              visualFlow.instance(struct_CANVAS_MAIN, "instance_bookopen_", 1040),
              visualFlow.instance(struct_BOOKOPENAREA, "instance_bookopen_", 1040),
              visualFlow.instance(struct_BORDERFRONT_wrapper, "instance_bookopen", 1040),
              visualFlow.instance(struct_BORDERFRONT, "instance_bookopen")
            ]);
          }
        }
    }


    function BOOK_interface() {
      // OMITTED FOR BREVITY
    }

    try {
      await BOOK_initialize(`${window.location.origin}/VECTORS/${CAST_VECTOR}/READ/${bookInstance}.html`);
      BOOK_visuality();
      BOOK_interface();

      firstOpening = false;
    } catch (error) {
      console.error("INTERNAL ERROR", error);
    } finally {
      isBookOpening = false;
      console.log("Book processing completed:", { currentBook, openedBooks });
    }
  }

      const VECTOR_bookNames = [...struct_bookNames].map(book => book.getAttribute("VECTOR"));
      struct_bookNames.forEach((book, instance) => {
        const VECTOR = VECTOR_bookNames[instance];
        if (VECTOR) book.addEventListener("pointerdown", () => BOOK_openSystem.relay(VECTOR));
      });








      class BOOK_traverse_ {
        constructor() {
          this.config = {
            baseSpring: 0.28,
            baseRetention: 0.88,
            snapThreshold: 0.03,
            velocityThreshold: 0.0005,
            edgeResistance: 0.12,
            baseSensitivity: 0.25,
            frictionFactor: 0.985,
            boostFactor: 0.0009,
            adaptiveSpringBoost: 0.18,
            maxDeltaBoost: 3,
          };
          this.wrapper = struct_BOOKOPENAREA_wrapper;
          this.inner = struct_BOOKOPENAREA_VECTOR;
          this.currentPosition = 0;
          this.targetPosition = 0;
          this.currentVelocity = 0;
          this.isAnimating = false;
          this.animationFrameId = null;
          this.lastInputTime = 0;
          this.lastDeltaY = 0;
          this.boundWheelHandler = (e) => this.handleWheel(e);
          this.boundAnimationStep = () => this.executeAnimationStep();
          this.boundKeyHandler = (e) => this.handleKey(e);
          this.keyCooldown = false;
        }

        async initialize(chapterInstance, verseInstance) {
          if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);

          this.wrapper.removeEventListener("wheel", this.boundWheelHandler);
          this.wrapper.removeEventListener("keydown", this.boundKeyHandler);

          let initialVerse = null;

          if (verseInstance) {
              initialVerse = chapterInstance
                  ? this.inner.querySelector(`VERSE[CHAPTER="${chapterInstance}"][NUMBER="${verseInstance}"]`)
                  : this.inner.querySelector(`VERSE[NUMBER="${verseInstance}"]`);
          } else if (chapterInstance) {
              initialVerse = Array.from(this.inner.querySelectorAll("VERSE"))
                  .find(v => +v.getAttribute("CHAPTER") === +chapterInstance) || null;
          } else {
              const resume = await BOOK_continuity.resumeposition();
              if (/^\d+:\d+$/.test(resume)) {
                  const [chapter, verse] = resume.split(":");
                  initialVerse = this.inner.querySelector(`VERSE[CHAPTER="${chapter}"][NUMBER="${verse}"]`);
              }
          }

          let initialPosition = 0;
          if (initialVerse) {
              let pos = Math.max(initialVerse.offsetTop - window.innerHeight * 0.28, 0);

              const adjustPos = (el, factor) => {
                  if (el && el.offsetTop < pos + window.innerHeight && el.offsetTop + el.offsetHeight > pos) {
                      pos = el.offsetTop - el.offsetHeight / factor;
                  }
              };

              adjustPos(this.inner.querySelector("CHAPTERTITLE"), 1.4);
              adjustPos(Array.from(this.inner.querySelectorAll("CHAPTERNUMBER"))
                  .find(el => +el.textContent.trim() === +initialVerse.getAttribute("CHAPTER")), 2.08);

              initialPosition = Math.max(0, Math.min(pos, this.inner.scrollHeight - window.innerHeight));
          }

          Object.assign(this, {
              currentPosition: initialPosition,
              targetPosition: initialPosition,
              currentVelocity: 0,
              isAnimating: false,
              animationFrameId: null,
              lastInputTime: 0,
              lastDeltaY: 0
          });

          this.updateTransform();
          this.wrapper.addEventListener("wheel", this.boundWheelHandler, { passive: false });
          this.wrapper.addEventListener("keydown", this.boundKeyHandler);
          this.wrapper.setAttribute("tabindex", "0");
      }

        handleKey(event) {
          if (this.keyCooldown) return;
          if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
          event.preventDefault();
          const maxScroll = Math.max(0, this.inner.scrollHeight - this.wrapper.clientHeight);
          const deltaY = event.key === "ArrowDown" ? 1 : -1;
          this.targetPosition = Math.max(0, Math.min(this.targetPosition + deltaY, maxScroll));
          this.currentVelocity = deltaY * this.config.boostFactor * 100;
          if (!this.isAnimating) {
            this.isAnimating = true;
            this.animationFrameId = requestAnimationFrame(this.boundAnimationStep);
          }
          this.keyCooldown = true;
          setTimeout(() => (this.keyCooldown = false), 100);
        }

        handleWheel(event) {
          event.preventDefault();
          const maxScroll = Math.max(0, this.inner.scrollHeight - this.wrapper.clientHeight);
          const now = performance.now();
          const deltaY = this.processDelta(event, this.wrapper.clientHeight);
          const deltaTime = now - this.lastInputTime;
          const speedMultiplier = deltaTime < 100 ? 1.6 : 1.0;
          const inputStrength = Math.abs(deltaY) * this.config.boostFactor * speedMultiplier;
          const sensitivity = this.config.baseSensitivity * (1 + Math.min(inputStrength * 5, this.config.maxDeltaBoost));
          this.targetPosition = Math.max(0, Math.min(this.targetPosition + deltaY * sensitivity, maxScroll));
          this.currentVelocity =
            Math.sign(deltaY) !== Math.sign(this.currentVelocity)
              ? this.currentVelocity * 0.7 + deltaY * this.config.boostFactor * 200
              : this.currentVelocity + deltaY * this.config.boostFactor * 480;
          this.lastInputTime = now;
          this.lastDeltaY = deltaY;
          if (!this.isAnimating) {
            this.isAnimating = true;
            this.animationFrameId = requestAnimationFrame(this.boundAnimationStep);
          }
        }

        processDelta(event, wrapperHeight) {
          if (!event || typeof event.deltaY !== "number") return 0;
          let delta = event.deltaY;
          if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) delta *= 16;
          if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) delta *= wrapperHeight;
          if (Math.abs(delta) > 0 && Math.abs(delta) < 4) delta *= 8;
          else if (Math.abs(delta) > 100) delta *= 0.8;
          delta = Math.sign(delta) * Math.min(Math.abs(delta), 250) * (window.devicePixelRatio || 1);
          return delta;
        }

        executeAnimationStep() {
          const maxScroll = Math.max(0, this.inner.scrollHeight - this.wrapper.clientHeight);
          const displacement = this.targetPosition - this.currentPosition;
          const distanceFactor = Math.min(Math.abs(displacement) * 0.002, 1);
          const springStrength = this.config.baseSpring + this.config.adaptiveSpringBoost * distanceFactor;
          const retention = this.config.baseRetention - distanceFactor * 0.08;
          this.currentVelocity = (this.currentVelocity + displacement * springStrength) * retention;
          this.currentPosition += this.currentVelocity / 60;
          this.currentVelocity *= this.config.frictionFactor;
          if (this.currentPosition < 0 || this.currentPosition > maxScroll) {
            const boundary = this.currentPosition < 0 ? 0 : maxScroll;
            const overshoot = this.currentPosition - boundary;
            this.currentVelocity = 0;
            this.currentPosition = boundary + overshoot * this.config.edgeResistance;
          }
          this.currentPosition = Math.max(0, Math.min(this.currentPosition, maxScroll));
          const shouldStop =
            Math.abs(this.currentVelocity) < this.config.velocityThreshold &&
            Math.abs(displacement) < this.config.snapThreshold;
          if (shouldStop) {
            this.currentPosition = Math.round(this.targetPosition * 1000) / 1000;
            this.updateTransform();
            this.isAnimating = false;
            this.animationFrameId = null;
            this.currentVelocity = 0;
            return;
          }
          this.updateTransform();
          this.animationFrameId = requestAnimationFrame(this.boundAnimationStep);
        }

        updateTransform() {
          this.inner.style.transform = `translateY(${-this.currentPosition}px)`;
        }
      }

      const BOOK_traverse = new BOOK_traverse_();









      class BOOK_space_ {
        constructor() {
          this.observer = new IntersectionObserver(this.verse.bind(this), { root: struct_BOOKOPENAREA_wrapper, threshold: 0, rootMargin: "0% 2.8% 0% 2.8%" });
          this.verses = [];
          this.visible = new Set();
          this.instance = null;
          this.flowing = false;
        }

        room() {
          if (!this.verses.length || !this.visible.size) return;
          const visibleIndices = [...this.visible].map(verse => this.verses.indexOf(verse)).filter(index => index >= 0).sort((a, b) => a - b);
          const first = visibleIndices[0];
          const last = visibleIndices[visibleIndices.length - 1];
          const expanding = Math.floor(48 / 2);
          const maximum = Math.min(this.verses.length - 1, last + expanding);
          const minimum = Math.max(0, first - expanding);
          this.verses.forEach((verse, index) => verse.classList.toggle("FLOW", index >= minimum && index <= maximum));
        }

        verse(flowingVerses) {
          const newVerses = [];
          const priorVerses = [];
          flowingVerses.forEach(verse => {
            const verse_ = verse.target;
            if (!verse_) return;
            const visible = this.visible.has(verse_);
            if (verse.isIntersecting || verse.intersectionRatio > 0) {
              if (!visible) newVerses.push(verse_);
              this.visible.add(verse_);
            } else if (visible) {
              priorVerses.push(verse_);
              this.visible.delete(verse_);
            }
          });
          if (!this.flowing && (newVerses.length || priorVerses.length)) {
            this.flowing = true;
            this.instance = requestAnimationFrame(() => {
              this.flowing = false;
              this.instance = null;
              [...newVerses].forEach(verse => verse.classList.add("FLOW"));
              [...priorVerses].forEach(verse => verse.classList.remove("FLOW"));
              this.room();
            });
          }
        }

        flow() {
          console.log("SPACE FLOWING");
          if (this.instance !== null) cancelAnimationFrame(this.instance);
          this.verses.forEach(verse => verse.classList.remove("FLOW"));
          this.observer?.disconnect();
          this.verses = [];
          this.visible.clear();
          this.instance = null;
          this.flowing = false;

          this.verses = Array.from(struct_BOOKOPENAREA_VECTOR.querySelectorAll("VERSE"));
          this.verses.forEach(verse => this.observer.observe(verse));
        }
      }
      const BOOK_space = new BOOK_space_();












































































///////////////////////////////////////////////////////////////////////
//                       UI
///////////////////////////////////////////////////////////////////////



(() => {
  const el = document.querySelector('.LANGUAGEAREA_wrapper .texture');
  if (!el) return;

  const posStates = ['0%', '48%']; // 48% is second
  let currentPosIndex = 0; // start with 48%
  let lastPosTime = performance.now();

  let lastFilterTime = performance.now();
  let currentSaturate = '14';
  el.style.backgroundPosition = `0% ${posStates[currentPosIndex]}`;
  el.style.filter = `brightness(0.28) saturate(${currentSaturate})`;

  let nextFilterInterval = Math.random() < 0.5 ? 4800 : 7400;

  function animate(time) {
    // Toggle background position every 48000ms
    if (time - lastPosTime >= 48000) {
      currentPosIndex = 1 - currentPosIndex; // toggle between 0 and 1
      el.style.backgroundPosition = `0% ${posStates[currentPosIndex]}`;
      lastPosTime = time;
    }

    // Change saturate filter every 4.8s or 7.4s, always toggling
    if (time - lastFilterTime >= nextFilterInterval) {
      currentSaturate = currentSaturate === '14' ? '0.14' : '14';
      el.style.filter = `brightness(0.28) saturate(${currentSaturate})`;
      lastFilterTime = time;
      nextFilterInterval = Math.random() < 0.5 ? 4800 : 7400;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();









BOOK_openSystem.URL();



(function() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'debugToggle';
  checkbox.style.position = 'fixed';
  checkbox.style.top = '10px';
  checkbox.style.right = '10px';
  checkbox.style.zIndex = '9999';
  checkbox.style.width = '20px';
  checkbox.style.height = '20px';

  const label = document.createElement('label');
  label.textContent = ' Debug: Page View';
  label.style.position = 'fixed';
  label.style.top = '10px';
  label.style.right = '40px';
  label.style.zIndex = '9999';
  label.style.background = 'rgba(255,255,255,0.8)';
  label.style.padding = '2px 5px';
  label.style.border = '1px solid #000';
  label.style.borderRadius = '3px';
  label.style.fontSize = '14px';

  document.body.appendChild(checkbox);
  document.body.appendChild(label);

  const key = 'BOOK_pageView';

  checkbox.checked = localStorage.getItem(key) === 'true';

  checkbox.addEventListener('change', () => {
      localStorage.setItem(key, checkbox.checked ? true : false);
  });
})();

(function() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'debugToggle';
  checkbox.style.position = 'fixed';
  checkbox.style.top = '28px';
  checkbox.style.right = '10px';
  checkbox.style.zIndex = '9999';
  checkbox.style.width = '20px';
  checkbox.style.height = '20px';

  const label = document.createElement('label');
  label.textContent = ' Debug: Resume';
  label.style.position = 'fixed';
  label.style.top = '28px';
  label.style.right = '40px';
  label.style.zIndex = '9999';
  label.style.background = 'rgba(255,255,255,0.8)';
  label.style.padding = '2px 5px';
  label.style.border = '1px solid #000';
  label.style.borderRadius = '3px';
  label.style.fontSize = '14px';

  document.body.appendChild(checkbox);
  document.body.appendChild(label);

  const key = 'RESUME';

  checkbox.checked = localStorage.getItem(key) === 'true';

  checkbox.addEventListener('change', () => {
      localStorage.setItem(key, checkbox.checked ? true : false);
  });
})();






    (() => {
      const k = new Set(), b = ["Genesis", "Psalms", "Matthew"];
      let t, i = 0, l = 0;
      const c = () => {
        const e = document.querySelector(`[VECTOR="${b[i]}"]`);
        if (e) e.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
        i = (i + 1) % b.length;
        l = performance.now();
      };
      const r = () => { clearTimeout(t); t = null; };
      document.addEventListener("keydown", e => {
        k.add(e.key.toLowerCase());
        if (k.has("r") && k.has("e") && !t && performance.now() - l > 140)
          t = setTimeout(() => { c(); r(); }, 14);
      });
      document.addEventListener("keyup", e => { k.delete(e.key.toLowerCase()); r(); });
    })();





    //localStorage.setItem("Document", true);
    //localStorage.setItem("name", true);

    ///////////////////////////////////////////////////////////////////////
    //                       END OF WINDOW
    ///////////////////////////////////////////////////////////////////////
  };

/*   class  {

      try {
        if (!this.INSTANCE()) throw new Error("ENVIRONMENT NOT DEFINED:\nWINDOW, DOCUMENT, FETCH, PROMISE COULD NOT BE ACCESSED");
      } catch (error) {
        console.error(`${error}\n\nENVIRONMENT FAILED:\n${this.INSTANCE}`);
        const FINALINFORMATION = document.querySelector(".FINALINFORMATION");
        const FINALINFORMATION_ = document.querySelector(".FINALINFORMATION_");
        FINALINFORMATION.style.display = "flex";
        FINALINFORMATION_.addEventListener("pointerdown", () => (FINALINFORMATION.style.display = "none", FINALINFORMATION.remove()));
        setTimeout(() => {
          FINALINFORMATION.style.display = "none";
          FINALINFORMATION.remove();
        }, 7400);
      }
    }

    INSTANCE() {
      return [ [window, 'object'], [document, 'object'], [fetch, 'function'] ].every(([root, type]) => root !== null && typeof root === type);
    }
  } */