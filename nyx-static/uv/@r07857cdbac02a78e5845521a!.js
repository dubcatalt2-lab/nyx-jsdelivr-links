"use strict";

(() => {
  var _1cc783db7c64 = self.StemConnect, _10994ffe5ec9 = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _53901b52a972 = [ "GET", "HEAD" ], _0f162d6db22e = class extends _1cc783db7c64.EventEmitter {
    constructor(_10994ffe5ec9 = __uv$config) {
      super(), _10994ffe5ec9.prefix || (_10994ffe5ec9.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _10994ffe5ec9, 
      this.bareClient = new _1cc783db7c64.BareClient;
    }
    route({request: _1cc783db7c64}) {
      return !!_1cc783db7c64.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _0f162d6db22e}) {
      let _e99530b93d78;
      try {
        if (!_0f162d6db22e.url.startsWith(location.origin + this.config.prefix)) return await fetch(_0f162d6db22e);
        let _8ed04ebef36c = new _1cc783db7c64(this.config);
        typeof this.config.construct == "function" && this.config.construct(_8ed04ebef36c, "service");
        let _f0a0c91cb72f = await _8ed04ebef36c.cookie.db();
        _8ed04ebef36c.meta.origin = location.origin, _8ed04ebef36c.meta.base = _8ed04ebef36c.meta.url = new URL(_8ed04ebef36c.sourceUrl(_0f162d6db22e.url));
        let _517340ac42e0 = new _dfaccfe78495(_0f162d6db22e, _8ed04ebef36c, _53901b52a972.includes(_0f162d6db22e.method.toUpperCase()) ? null : await _0f162d6db22e.blob());
        if (_8ed04ebef36c.meta.url.protocol === "blob:" && (_517340ac42e0.blob = !0, _517340ac42e0.base = _517340ac42e0.url = new URL(_517340ac42e0.url.pathname)), 
        _0f162d6db22e.referrer && _0f162d6db22e.referrer.startsWith(location.origin)) {
          let _1cc783db7c64 = new URL(_8ed04ebef36c.sourceUrl(_0f162d6db22e.referrer));
          (_517340ac42e0.headers.origin || _8ed04ebef36c.meta.url.origin !== _1cc783db7c64.origin && _0f162d6db22e.mode === "cors") && (_517340ac42e0.headers.origin = _1cc783db7c64.origin), 
          _517340ac42e0.headers.referer = _1cc783db7c64.href;
        }
        let _8092cc66b601 = await _8ed04ebef36c.cookie.getCookies(_f0a0c91cb72f) || [], _3ac9cb4a75f7 = _8ed04ebef36c.cookie.serialize(_8092cc66b601, _8ed04ebef36c.meta, !1);
        _517340ac42e0.headers["user-agent"] = navigator.userAgent, _3ac9cb4a75f7 && (_517340ac42e0.headers.cookie = _3ac9cb4a75f7);
        let _e860a38aabf8 = new _ff59f32b6eed(_517340ac42e0, null, null);
        if (this.emit("request", _e860a38aabf8), _e860a38aabf8.intercepted) return _e860a38aabf8.returnValue;
        _e99530b93d78 = _517340ac42e0.blob ? "blob:" + location.origin + _517340ac42e0.url.pathname : _517340ac42e0.url;
        let _591cc2880520 = await this.bareClient.fetch(_e99530b93d78, {
          headers: _517340ac42e0.headers,
          method: _517340ac42e0.method,
          body: _517340ac42e0.body,
          credentials: _517340ac42e0.credentials,
          mode: _517340ac42e0.mode,
          cache: _517340ac42e0.cache,
          redirect: _517340ac42e0.redirect
        }), _257e8d019604 = new _4d08d7346552(_517340ac42e0, _591cc2880520), _17adc495768b = new _ff59f32b6eed(_257e8d019604, null, null);
        if (this.emit("beforemod", _17adc495768b), _17adc495768b.intercepted) return _17adc495768b.returnValue;
        for (let _1cc783db7c64 of _10994ffe5ec9) _257e8d019604.headers[_1cc783db7c64] && delete _257e8d019604.headers[_1cc783db7c64];
        if (_257e8d019604.headers.location && (_257e8d019604.headers.location = _8ed04ebef36c.rewriteUrl(_257e8d019604.headers.location)), 
        [ "document", "iframe" ].includes(_0f162d6db22e.destination)) {
          let _1cc783db7c64 = _257e8d019604.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_1cc783db7c64)) {
            let _10994ffe5ec9 = /^\s*?attachment/i.test(_1cc783db7c64) ? "attachment" : "inline", [_53901b52a972] = new URL(_591cc2880520.finalURL).pathname.split("/").slice(-1);
            _257e8d019604.headers["content-disposition"] = `${_10994ffe5ec9}; filename=${JSON.stringify(_53901b52a972)}`;
          }
        }
        if (_257e8d019604.headers["set-cookie"] && (Promise.resolve(_8ed04ebef36c.cookie.setCookies(_257e8d019604.headers["set-cookie"], _f0a0c91cb72f, _8ed04ebef36c.meta)).then(() => {
          self.clients.matchAll().then(function(_1cc783db7c64) {
            _1cc783db7c64.forEach(function(_1cc783db7c64) {
              _1cc783db7c64.postMessage({
                msg: "updateCookies",
                url: _8ed04ebef36c.meta.url.href
              });
            });
          });
        }), delete _257e8d019604.headers["set-cookie"]), _257e8d019604.body) switch (_0f162d6db22e.destination) {
         case "script":
          _257e8d019604.body = _8ed04ebef36c.js.rewrite(await _591cc2880520.text());
          break;

         case "worker":
          {
            let _1cc783db7c64 = [ _8ed04ebef36c.bundleScript, _8ed04ebef36c.clientScript, _8ed04ebef36c.configScript, _8ed04ebef36c.handlerScript ].map(_1cc783db7c64 => JSON.stringify(_1cc783db7c64)).join(",");
            _257e8d019604.body = `if (!self.__uv) {\n                                ${_8ed04ebef36c.createJsInject(_8ed04ebef36c.cookie.serialize(_8092cc66b601, _8ed04ebef36c.meta, !0), _0f162d6db22e.referrer)}\n                            importScripts(${_1cc783db7c64});\n                            }\n`, 
            _257e8d019604.body += _8ed04ebef36c.js.rewrite(await _591cc2880520.text());
          }
          break;

         case "style":
          _257e8d019604.body = _8ed04ebef36c.rewriteCSS(await _591cc2880520.text());
          break;

         case "iframe":
         case "document":
          if (_257e8d019604.getHeader("content-type") && _257e8d019604.getHeader("content-type").startsWith("text/html")) {
            let _1cc783db7c64 = await _591cc2880520.text();
            if (Array.isArray(this.config.inject)) {
              let _10994ffe5ec9 = _1cc783db7c64.indexOf("<head>"), _53901b52a972 = _1cc783db7c64.indexOf("<HEAD>"), _0f162d6db22e = _1cc783db7c64.indexOf("<body>"), _4d08d7346552 = _1cc783db7c64.indexOf("<BODY>"), _dfaccfe78495 = new URL(_e99530b93d78), _ff59f32b6eed = this.config.inject;
              for (let _e99530b93d78 of _ff59f32b6eed) new RegExp(_e99530b93d78.host).test(_dfaccfe78495.host) && (_e99530b93d78.injectTo === "head" ? (_10994ffe5ec9 !== -1 || _53901b52a972 !== -1) && (_1cc783db7c64 = _1cc783db7c64.slice(0, _10994ffe5ec9) + `${_e99530b93d78.html}` + _1cc783db7c64.slice(_10994ffe5ec9)) : _e99530b93d78.injectTo === "body" && (_0f162d6db22e !== -1 || _4d08d7346552 !== -1) && (_1cc783db7c64 = _1cc783db7c64.slice(0, _0f162d6db22e) + `${_e99530b93d78.html}` + _1cc783db7c64.slice(_0f162d6db22e)));
            }
            _257e8d019604.body = _8ed04ebef36c.rewriteHtml(_1cc783db7c64, {
              document: !0,
              injectHead: _8ed04ebef36c.createHtmlInject(_8ed04ebef36c.handlerScript, _8ed04ebef36c.bundleScript, _8ed04ebef36c.clientScript, _8ed04ebef36c.configScript, _8ed04ebef36c.cookie.serialize(_8092cc66b601, _8ed04ebef36c.meta, !0), _0f162d6db22e.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _517340ac42e0.headers.accept === "text/event-stream" && (_257e8d019604.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_257e8d019604.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _17adc495768b), _17adc495768b.intercepted ? _17adc495768b.returnValue : new Response(_257e8d019604.body, {
          headers: _257e8d019604.headers,
          status: _257e8d019604.status,
          statusText: _257e8d019604.statusText
        });
      } catch (_1cc783db7c64) {
        return [ "document", "iframe" ].includes(_0f162d6db22e.destination) ? (console.error(_1cc783db7c64), 
        T(_1cc783db7c64, _e99530b93d78)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_1cc783db7c64;
  };
  self.UVServiceWorker = _0f162d6db22e;
  var _4d08d7346552 = class {
    constructor(_1cc783db7c64, _10994ffe5ec9) {
      this.request = _1cc783db7c64, this.raw = _10994ffe5ec9, this.ultraviolet = _1cc783db7c64.ultraviolet, 
      this.headers = {};
      for (let _1cc783db7c64 in _10994ffe5ec9.rawHeaders) this.headers[_1cc783db7c64.toLowerCase()] = _10994ffe5ec9.rawHeaders[_1cc783db7c64];
      this.status = _10994ffe5ec9.status, this.statusText = _10994ffe5ec9.statusText, 
      this.body = _10994ffe5ec9.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_1cc783db7c64) {
      this.request.base = _1cc783db7c64;
    }
    getHeader(_1cc783db7c64) {
      return Array.isArray(this.headers[_1cc783db7c64]) ? this.headers[_1cc783db7c64][0] : this.headers[_1cc783db7c64];
    }
  }, _dfaccfe78495 = class {
    constructor(_1cc783db7c64, _10994ffe5ec9, _53901b52a972 = null) {
      this.ultraviolet = _10994ffe5ec9, this.request = _1cc783db7c64, this.headers = Object.fromEntries(_1cc783db7c64.headers.entries()), 
      this.method = _1cc783db7c64.method, this.body = _53901b52a972 || null, this.cache = _1cc783db7c64.cache, 
      this.redirect = _1cc783db7c64.redirect, this.credentials = "omit", this.mode = _1cc783db7c64.mode === "cors" ? _1cc783db7c64.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_1cc783db7c64) {
      this.ultraviolet.meta.url = _1cc783db7c64;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_1cc783db7c64) {
      this.ultraviolet.meta.base = _1cc783db7c64;
    }
  }, _ff59f32b6eed = class {
    #_1cc783db7c64;
    #_10994ffe5ec9;
    constructor(_1cc783db7c64 = {}, _10994ffe5ec9 = null, _53901b52a972 = null) {
      this.#_1cc783db7c64 = !1, this.#_10994ffe5ec9 = null, this.data = _1cc783db7c64, 
      this.target = _10994ffe5ec9, this.that = _53901b52a972;
    }
    get intercepted() {
      return this.#_1cc783db7c64;
    }
    get returnValue() {
      return this.#_10994ffe5ec9;
    }
    respondWith(_1cc783db7c64) {
      this.#_10994ffe5ec9 = _1cc783db7c64, this.#_1cc783db7c64 = !0;
    }
  };
  function E(_1cc783db7c64, _10994ffe5ec9) {
    let _53901b52a972 = `\n        errorTrace.value = ${JSON.stringify(_1cc783db7c64)};\n        fetchedURL.textContent = ${JSON.stringify(_10994ffe5ec9)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_53901b52a972)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_1cc783db7c64, _10994ffe5ec9) {
    let _53901b52a972 = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_53901b52a972["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_1cc783db7c64), _10994ffe5ec9), {
      status: 500,
      headers: _53901b52a972
    });
  }
})();
