"use strict";

(() => {
  var _541e69502e29 = self.StemConnect, _78383e27ed6f = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _a1d74987c756 = [ "GET", "HEAD" ], _611cfcacb239 = class extends _541e69502e29.EventEmitter {
    constructor(_78383e27ed6f = __uv$config) {
      super(), _78383e27ed6f.prefix || (_78383e27ed6f.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _78383e27ed6f, 
      this.bareClient = new _541e69502e29.BareClient;
    }
    route({request: _541e69502e29}) {
      return !!_541e69502e29.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _611cfcacb239}) {
      let _7583aedb075e;
      try {
        if (!_611cfcacb239.url.startsWith(location.origin + this.config.prefix)) return await fetch(_611cfcacb239);
        let _8db9ecaf22af = new _541e69502e29(this.config);
        typeof this.config.construct == "function" && this.config.construct(_8db9ecaf22af, "service");
        let _15ef7b3678fa = await _8db9ecaf22af.cookie.db();
        _8db9ecaf22af.meta.origin = location.origin, _8db9ecaf22af.meta.base = _8db9ecaf22af.meta.url = new URL(_8db9ecaf22af.sourceUrl(_611cfcacb239.url));
        let _83178f25e8a6 = new _62a27db8c991(_611cfcacb239, _8db9ecaf22af, _a1d74987c756.includes(_611cfcacb239.method.toUpperCase()) ? null : await _611cfcacb239.blob());
        if (_8db9ecaf22af.meta.url.protocol === "blob:" && (_83178f25e8a6.blob = !0, _83178f25e8a6.base = _83178f25e8a6.url = new URL(_83178f25e8a6.url.pathname)), 
        _611cfcacb239.referrer && _611cfcacb239.referrer.startsWith(location.origin)) {
          let _541e69502e29 = new URL(_8db9ecaf22af.sourceUrl(_611cfcacb239.referrer));
          (_83178f25e8a6.headers.origin || _8db9ecaf22af.meta.url.origin !== _541e69502e29.origin && _611cfcacb239.mode === "cors") && (_83178f25e8a6.headers.origin = _541e69502e29.origin), 
          _83178f25e8a6.headers.referer = _541e69502e29.href;
        }
        let _ba9640a0a527 = await _8db9ecaf22af.cookie.getCookies(_15ef7b3678fa) || [], _f429c109d93c = _8db9ecaf22af.cookie.serialize(_ba9640a0a527, _8db9ecaf22af.meta, !1);
        _83178f25e8a6.headers["user-agent"] = navigator.userAgent, _f429c109d93c && (_83178f25e8a6.headers.cookie = _f429c109d93c);
        let _f83ad7aa62b5 = new _cd7ed679290e(_83178f25e8a6, null, null);
        if (this.emit("request", _f83ad7aa62b5), _f83ad7aa62b5.intercepted) return _f83ad7aa62b5.returnValue;
        _7583aedb075e = _83178f25e8a6.blob ? "blob:" + location.origin + _83178f25e8a6.url.pathname : _83178f25e8a6.url;
        let _5034a51fd616 = await this.bareClient.fetch(_7583aedb075e, {
          headers: _83178f25e8a6.headers,
          method: _83178f25e8a6.method,
          body: _83178f25e8a6.body,
          credentials: _83178f25e8a6.credentials,
          mode: _83178f25e8a6.mode,
          cache: _83178f25e8a6.cache,
          redirect: _83178f25e8a6.redirect
        }), _008e0bdece94 = new _e6ddd09fe5e3(_83178f25e8a6, _5034a51fd616), _b7de617bb7df = new _cd7ed679290e(_008e0bdece94, null, null);
        if (this.emit("beforemod", _b7de617bb7df), _b7de617bb7df.intercepted) return _b7de617bb7df.returnValue;
        for (let _541e69502e29 of _78383e27ed6f) _008e0bdece94.headers[_541e69502e29] && delete _008e0bdece94.headers[_541e69502e29];
        if (_008e0bdece94.headers.location && (_008e0bdece94.headers.location = _8db9ecaf22af.rewriteUrl(_008e0bdece94.headers.location)), 
        [ "document", "iframe" ].includes(_611cfcacb239.destination)) {
          let _541e69502e29 = _008e0bdece94.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_541e69502e29)) {
            let _78383e27ed6f = /^\s*?attachment/i.test(_541e69502e29) ? "attachment" : "inline", [_a1d74987c756] = new URL(_5034a51fd616.finalURL).pathname.split("/").slice(-1);
            _008e0bdece94.headers["content-disposition"] = `${_78383e27ed6f}; filename=${JSON.stringify(_a1d74987c756)}`;
          }
        }
        if (_008e0bdece94.headers["set-cookie"] && (Promise.resolve(_8db9ecaf22af.cookie.setCookies(_008e0bdece94.headers["set-cookie"], _15ef7b3678fa, _8db9ecaf22af.meta)).then(() => {
          self.clients.matchAll().then(function(_541e69502e29) {
            _541e69502e29.forEach(function(_541e69502e29) {
              _541e69502e29.postMessage({
                msg: "updateCookies",
                url: _8db9ecaf22af.meta.url.href
              });
            });
          });
        }), delete _008e0bdece94.headers["set-cookie"]), _008e0bdece94.body) switch (_611cfcacb239.destination) {
         case "script":
          _008e0bdece94.body = _8db9ecaf22af.js.rewrite(await _5034a51fd616.text());
          break;

         case "worker":
          {
            let _541e69502e29 = [ _8db9ecaf22af.bundleScript, _8db9ecaf22af.clientScript, _8db9ecaf22af.configScript, _8db9ecaf22af.handlerScript ].map(_541e69502e29 => JSON.stringify(_541e69502e29)).join(",");
            _008e0bdece94.body = `if (!self.__uv) {\n                                ${_8db9ecaf22af.createJsInject(_8db9ecaf22af.cookie.serialize(_ba9640a0a527, _8db9ecaf22af.meta, !0), _611cfcacb239.referrer)}\n                            importScripts(${_541e69502e29});\n                            }\n`, 
            _008e0bdece94.body += _8db9ecaf22af.js.rewrite(await _5034a51fd616.text());
          }
          break;

         case "style":
          _008e0bdece94.body = _8db9ecaf22af.rewriteCSS(await _5034a51fd616.text());
          break;

         case "iframe":
         case "document":
          if (_008e0bdece94.getHeader("content-type") && _008e0bdece94.getHeader("content-type").startsWith("text/html")) {
            let _541e69502e29 = await _5034a51fd616.text();
            if (Array.isArray(this.config.inject)) {
              let _78383e27ed6f = _541e69502e29.indexOf("<head>"), _a1d74987c756 = _541e69502e29.indexOf("<HEAD>"), _611cfcacb239 = _541e69502e29.indexOf("<body>"), _e6ddd09fe5e3 = _541e69502e29.indexOf("<BODY>"), _62a27db8c991 = new URL(_7583aedb075e), _cd7ed679290e = this.config.inject;
              for (let _7583aedb075e of _cd7ed679290e) new RegExp(_7583aedb075e.host).test(_62a27db8c991.host) && (_7583aedb075e.injectTo === "head" ? (_78383e27ed6f !== -1 || _a1d74987c756 !== -1) && (_541e69502e29 = _541e69502e29.slice(0, _78383e27ed6f) + `${_7583aedb075e.html}` + _541e69502e29.slice(_78383e27ed6f)) : _7583aedb075e.injectTo === "body" && (_611cfcacb239 !== -1 || _e6ddd09fe5e3 !== -1) && (_541e69502e29 = _541e69502e29.slice(0, _611cfcacb239) + `${_7583aedb075e.html}` + _541e69502e29.slice(_611cfcacb239)));
            }
            _008e0bdece94.body = _8db9ecaf22af.rewriteHtml(_541e69502e29, {
              document: !0,
              injectHead: _8db9ecaf22af.createHtmlInject(_8db9ecaf22af.handlerScript, _8db9ecaf22af.bundleScript, _8db9ecaf22af.clientScript, _8db9ecaf22af.configScript, _8db9ecaf22af.cookie.serialize(_ba9640a0a527, _8db9ecaf22af.meta, !0), _611cfcacb239.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _83178f25e8a6.headers.accept === "text/event-stream" && (_008e0bdece94.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_008e0bdece94.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _b7de617bb7df), _b7de617bb7df.intercepted ? _b7de617bb7df.returnValue : new Response(_008e0bdece94.body, {
          headers: _008e0bdece94.headers,
          status: _008e0bdece94.status,
          statusText: _008e0bdece94.statusText
        });
      } catch (_541e69502e29) {
        return [ "document", "iframe" ].includes(_611cfcacb239.destination) ? (console.error(_541e69502e29), 
        T(_541e69502e29, _7583aedb075e)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_541e69502e29;
  };
  self.UVServiceWorker = _611cfcacb239;
  var _e6ddd09fe5e3 = class {
    constructor(_541e69502e29, _78383e27ed6f) {
      this.request = _541e69502e29, this.raw = _78383e27ed6f, this.ultraviolet = _541e69502e29.ultraviolet, 
      this.headers = {};
      for (let _541e69502e29 in _78383e27ed6f.rawHeaders) this.headers[_541e69502e29.toLowerCase()] = _78383e27ed6f.rawHeaders[_541e69502e29];
      this.status = _78383e27ed6f.status, this.statusText = _78383e27ed6f.statusText, 
      this.body = _78383e27ed6f.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_541e69502e29) {
      this.request.base = _541e69502e29;
    }
    getHeader(_541e69502e29) {
      return Array.isArray(this.headers[_541e69502e29]) ? this.headers[_541e69502e29][0] : this.headers[_541e69502e29];
    }
  }, _62a27db8c991 = class {
    constructor(_541e69502e29, _78383e27ed6f, _a1d74987c756 = null) {
      this.ultraviolet = _78383e27ed6f, this.request = _541e69502e29, this.headers = Object.fromEntries(_541e69502e29.headers.entries()), 
      this.method = _541e69502e29.method, this.body = _a1d74987c756 || null, this.cache = _541e69502e29.cache, 
      this.redirect = _541e69502e29.redirect, this.credentials = "omit", this.mode = _541e69502e29.mode === "cors" ? _541e69502e29.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_541e69502e29) {
      this.ultraviolet.meta.url = _541e69502e29;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_541e69502e29) {
      this.ultraviolet.meta.base = _541e69502e29;
    }
  }, _cd7ed679290e = class {
    #_541e69502e29;
    #_78383e27ed6f;
    constructor(_541e69502e29 = {}, _78383e27ed6f = null, _a1d74987c756 = null) {
      this.#_541e69502e29 = !1, this.#_78383e27ed6f = null, this.data = _541e69502e29, 
      this.target = _78383e27ed6f, this.that = _a1d74987c756;
    }
    get intercepted() {
      return this.#_541e69502e29;
    }
    get returnValue() {
      return this.#_78383e27ed6f;
    }
    respondWith(_541e69502e29) {
      this.#_78383e27ed6f = _541e69502e29, this.#_541e69502e29 = !0;
    }
  };
  function E(_541e69502e29, _78383e27ed6f) {
    let _a1d74987c756 = `\n        errorTrace.value = ${JSON.stringify(_541e69502e29)};\n        fetchedURL.textContent = ${JSON.stringify(_78383e27ed6f)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_a1d74987c756)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_541e69502e29, _78383e27ed6f) {
    let _a1d74987c756 = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_a1d74987c756["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_541e69502e29), _78383e27ed6f), {
      status: 500,
      headers: _a1d74987c756
    });
  }
})();
