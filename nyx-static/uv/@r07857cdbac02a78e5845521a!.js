"use strict";

(() => {
  var _159c2ae5b1e4 = self.StemConnect, _fb8c5268dffd = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _5f1dc8ca8828 = [ "GET", "HEAD" ], _1c63932356db = class extends _159c2ae5b1e4.EventEmitter {
    constructor(_fb8c5268dffd = __uv$config) {
      super(), _fb8c5268dffd.prefix || (_fb8c5268dffd.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _fb8c5268dffd, 
      this.bareClient = new _159c2ae5b1e4.BareClient;
    }
    route({request: _159c2ae5b1e4}) {
      return !!_159c2ae5b1e4.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _1c63932356db}) {
      let _bba2cf0de0ab;
      try {
        if (!_1c63932356db.url.startsWith(location.origin + this.config.prefix)) return await fetch(_1c63932356db);
        let _a5cad931e018 = new _159c2ae5b1e4(this.config);
        typeof this.config.construct == "function" && this.config.construct(_a5cad931e018, "service");
        let _923ad65f9928 = await _a5cad931e018.cookie.db();
        _a5cad931e018.meta.origin = location.origin, _a5cad931e018.meta.base = _a5cad931e018.meta.url = new URL(_a5cad931e018.sourceUrl(_1c63932356db.url));
        let _9682c071f08a = new _c49a897831fe(_1c63932356db, _a5cad931e018, _5f1dc8ca8828.includes(_1c63932356db.method.toUpperCase()) ? null : await _1c63932356db.blob());
        if (_a5cad931e018.meta.url.protocol === "blob:" && (_9682c071f08a.blob = !0, _9682c071f08a.base = _9682c071f08a.url = new URL(_9682c071f08a.url.pathname)), 
        _1c63932356db.referrer && _1c63932356db.referrer.startsWith(location.origin)) {
          let _159c2ae5b1e4 = new URL(_a5cad931e018.sourceUrl(_1c63932356db.referrer));
          (_9682c071f08a.headers.origin || _a5cad931e018.meta.url.origin !== _159c2ae5b1e4.origin && _1c63932356db.mode === "cors") && (_9682c071f08a.headers.origin = _159c2ae5b1e4.origin), 
          _9682c071f08a.headers.referer = _159c2ae5b1e4.href;
        }
        let _c0396a81cfed = await _a5cad931e018.cookie.getCookies(_923ad65f9928) || [], _f2fcae706e05 = _a5cad931e018.cookie.serialize(_c0396a81cfed, _a5cad931e018.meta, !1);
        _9682c071f08a.headers["user-agent"] = navigator.userAgent, _f2fcae706e05 && (_9682c071f08a.headers.cookie = _f2fcae706e05);
        let _712a361d1b63 = new _a9a7ee2dfa5a(_9682c071f08a, null, null);
        if (this.emit("request", _712a361d1b63), _712a361d1b63.intercepted) return _712a361d1b63.returnValue;
        _bba2cf0de0ab = _9682c071f08a.blob ? "blob:" + location.origin + _9682c071f08a.url.pathname : _9682c071f08a.url;
        let _b58b9f005fbb = await this.bareClient.fetch(_bba2cf0de0ab, {
          headers: _9682c071f08a.headers,
          method: _9682c071f08a.method,
          body: _9682c071f08a.body,
          credentials: _9682c071f08a.credentials,
          mode: _9682c071f08a.mode,
          cache: _9682c071f08a.cache,
          redirect: _9682c071f08a.redirect
        }), _7af18d914110 = new _2a7a3a5a43e2(_9682c071f08a, _b58b9f005fbb), _aa646958c0da = new _a9a7ee2dfa5a(_7af18d914110, null, null);
        if (this.emit("beforemod", _aa646958c0da), _aa646958c0da.intercepted) return _aa646958c0da.returnValue;
        for (let _159c2ae5b1e4 of _fb8c5268dffd) _7af18d914110.headers[_159c2ae5b1e4] && delete _7af18d914110.headers[_159c2ae5b1e4];
        if (_7af18d914110.headers.location && (_7af18d914110.headers.location = _a5cad931e018.rewriteUrl(_7af18d914110.headers.location)), 
        [ "document", "iframe" ].includes(_1c63932356db.destination)) {
          let _159c2ae5b1e4 = _7af18d914110.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_159c2ae5b1e4)) {
            let _fb8c5268dffd = /^\s*?attachment/i.test(_159c2ae5b1e4) ? "attachment" : "inline", [_5f1dc8ca8828] = new URL(_b58b9f005fbb.finalURL).pathname.split("/").slice(-1);
            _7af18d914110.headers["content-disposition"] = `${_fb8c5268dffd}; filename=${JSON.stringify(_5f1dc8ca8828)}`;
          }
        }
        if (_7af18d914110.headers["set-cookie"] && (Promise.resolve(_a5cad931e018.cookie.setCookies(_7af18d914110.headers["set-cookie"], _923ad65f9928, _a5cad931e018.meta)).then(() => {
          self.clients.matchAll().then(function(_159c2ae5b1e4) {
            _159c2ae5b1e4.forEach(function(_159c2ae5b1e4) {
              _159c2ae5b1e4.postMessage({
                msg: "updateCookies",
                url: _a5cad931e018.meta.url.href
              });
            });
          });
        }), delete _7af18d914110.headers["set-cookie"]), _7af18d914110.body) switch (_1c63932356db.destination) {
         case "script":
          _7af18d914110.body = _a5cad931e018.js.rewrite(await _b58b9f005fbb.text());
          break;

         case "worker":
          {
            let _159c2ae5b1e4 = [ _a5cad931e018.bundleScript, _a5cad931e018.clientScript, _a5cad931e018.configScript, _a5cad931e018.handlerScript ].map(_159c2ae5b1e4 => JSON.stringify(_159c2ae5b1e4)).join(",");
            _7af18d914110.body = `if (!self.__uv) {\n                                ${_a5cad931e018.createJsInject(_a5cad931e018.cookie.serialize(_c0396a81cfed, _a5cad931e018.meta, !0), _1c63932356db.referrer)}\n                            importScripts(${_159c2ae5b1e4});\n                            }\n`, 
            _7af18d914110.body += _a5cad931e018.js.rewrite(await _b58b9f005fbb.text());
          }
          break;

         case "style":
          _7af18d914110.body = _a5cad931e018.rewriteCSS(await _b58b9f005fbb.text());
          break;

         case "iframe":
         case "document":
          if (_7af18d914110.getHeader("content-type") && _7af18d914110.getHeader("content-type").startsWith("text/html")) {
            let _159c2ae5b1e4 = await _b58b9f005fbb.text();
            if (Array.isArray(this.config.inject)) {
              let _fb8c5268dffd = _159c2ae5b1e4.indexOf("<head>"), _5f1dc8ca8828 = _159c2ae5b1e4.indexOf("<HEAD>"), _1c63932356db = _159c2ae5b1e4.indexOf("<body>"), _2a7a3a5a43e2 = _159c2ae5b1e4.indexOf("<BODY>"), _c49a897831fe = new URL(_bba2cf0de0ab), _a9a7ee2dfa5a = this.config.inject;
              for (let _bba2cf0de0ab of _a9a7ee2dfa5a) new RegExp(_bba2cf0de0ab.host).test(_c49a897831fe.host) && (_bba2cf0de0ab.injectTo === "head" ? (_fb8c5268dffd !== -1 || _5f1dc8ca8828 !== -1) && (_159c2ae5b1e4 = _159c2ae5b1e4.slice(0, _fb8c5268dffd) + `${_bba2cf0de0ab.html}` + _159c2ae5b1e4.slice(_fb8c5268dffd)) : _bba2cf0de0ab.injectTo === "body" && (_1c63932356db !== -1 || _2a7a3a5a43e2 !== -1) && (_159c2ae5b1e4 = _159c2ae5b1e4.slice(0, _1c63932356db) + `${_bba2cf0de0ab.html}` + _159c2ae5b1e4.slice(_1c63932356db)));
            }
            _7af18d914110.body = _a5cad931e018.rewriteHtml(_159c2ae5b1e4, {
              document: !0,
              injectHead: _a5cad931e018.createHtmlInject(_a5cad931e018.handlerScript, _a5cad931e018.bundleScript, _a5cad931e018.clientScript, _a5cad931e018.configScript, _a5cad931e018.cookie.serialize(_c0396a81cfed, _a5cad931e018.meta, !0), _1c63932356db.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _9682c071f08a.headers.accept === "text/event-stream" && (_7af18d914110.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_7af18d914110.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _aa646958c0da), _aa646958c0da.intercepted ? _aa646958c0da.returnValue : new Response(_7af18d914110.body, {
          headers: _7af18d914110.headers,
          status: _7af18d914110.status,
          statusText: _7af18d914110.statusText
        });
      } catch (_159c2ae5b1e4) {
        return [ "document", "iframe" ].includes(_1c63932356db.destination) ? (console.error(_159c2ae5b1e4), 
        T(_159c2ae5b1e4, _bba2cf0de0ab)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_159c2ae5b1e4;
  };
  self.UVServiceWorker = _1c63932356db;
  var _2a7a3a5a43e2 = class {
    constructor(_159c2ae5b1e4, _fb8c5268dffd) {
      this.request = _159c2ae5b1e4, this.raw = _fb8c5268dffd, this.ultraviolet = _159c2ae5b1e4.ultraviolet, 
      this.headers = {};
      for (let _159c2ae5b1e4 in _fb8c5268dffd.rawHeaders) this.headers[_159c2ae5b1e4.toLowerCase()] = _fb8c5268dffd.rawHeaders[_159c2ae5b1e4];
      this.status = _fb8c5268dffd.status, this.statusText = _fb8c5268dffd.statusText, 
      this.body = _fb8c5268dffd.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_159c2ae5b1e4) {
      this.request.base = _159c2ae5b1e4;
    }
    getHeader(_159c2ae5b1e4) {
      return Array.isArray(this.headers[_159c2ae5b1e4]) ? this.headers[_159c2ae5b1e4][0] : this.headers[_159c2ae5b1e4];
    }
  }, _c49a897831fe = class {
    constructor(_159c2ae5b1e4, _fb8c5268dffd, _5f1dc8ca8828 = null) {
      this.ultraviolet = _fb8c5268dffd, this.request = _159c2ae5b1e4, this.headers = Object.fromEntries(_159c2ae5b1e4.headers.entries()), 
      this.method = _159c2ae5b1e4.method, this.body = _5f1dc8ca8828 || null, this.cache = _159c2ae5b1e4.cache, 
      this.redirect = _159c2ae5b1e4.redirect, this.credentials = "omit", this.mode = _159c2ae5b1e4.mode === "cors" ? _159c2ae5b1e4.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_159c2ae5b1e4) {
      this.ultraviolet.meta.url = _159c2ae5b1e4;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_159c2ae5b1e4) {
      this.ultraviolet.meta.base = _159c2ae5b1e4;
    }
  }, _a9a7ee2dfa5a = class {
    #_159c2ae5b1e4;
    #_fb8c5268dffd;
    constructor(_159c2ae5b1e4 = {}, _fb8c5268dffd = null, _5f1dc8ca8828 = null) {
      this.#_159c2ae5b1e4 = !1, this.#_fb8c5268dffd = null, this.data = _159c2ae5b1e4, 
      this.target = _fb8c5268dffd, this.that = _5f1dc8ca8828;
    }
    get intercepted() {
      return this.#_159c2ae5b1e4;
    }
    get returnValue() {
      return this.#_fb8c5268dffd;
    }
    respondWith(_159c2ae5b1e4) {
      this.#_fb8c5268dffd = _159c2ae5b1e4, this.#_159c2ae5b1e4 = !0;
    }
  };
  function E(_159c2ae5b1e4, _fb8c5268dffd) {
    let _5f1dc8ca8828 = `\n        errorTrace.value = ${JSON.stringify(_159c2ae5b1e4)};\n        fetchedURL.textContent = ${JSON.stringify(_fb8c5268dffd)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_5f1dc8ca8828)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_159c2ae5b1e4, _fb8c5268dffd) {
    let _5f1dc8ca8828 = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_5f1dc8ca8828["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_159c2ae5b1e4), _fb8c5268dffd), {
      status: 500,
      headers: _5f1dc8ca8828
    });
  }
})();
