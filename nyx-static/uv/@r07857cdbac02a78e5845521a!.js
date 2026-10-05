"use strict";

(() => {
  var _2f35264f4238 = self.StemConnect, _42fc29c02a55 = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _8081bcebed8c = [ "GET", "HEAD" ], _69c0679f9d42 = class extends _2f35264f4238.EventEmitter {
    constructor(_42fc29c02a55 = __uv$config) {
      super(), _42fc29c02a55.prefix || (_42fc29c02a55.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _42fc29c02a55, 
      this.bareClient = new _2f35264f4238.BareClient;
    }
    route({request: _2f35264f4238}) {
      return !!_2f35264f4238.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _69c0679f9d42}) {
      let _20dea9fcc950;
      try {
        if (!_69c0679f9d42.url.startsWith(location.origin + this.config.prefix)) return await fetch(_69c0679f9d42);
        let _952c345693e1 = new _2f35264f4238(this.config);
        typeof this.config.construct == "function" && this.config.construct(_952c345693e1, "service");
        let _715ddf1b7513 = await _952c345693e1.cookie.db();
        _952c345693e1.meta.origin = location.origin, _952c345693e1.meta.base = _952c345693e1.meta.url = new URL(_952c345693e1.sourceUrl(_69c0679f9d42.url));
        let _5d338a8fcc3c = new _653c3d4307af(_69c0679f9d42, _952c345693e1, _8081bcebed8c.includes(_69c0679f9d42.method.toUpperCase()) ? null : await _69c0679f9d42.blob());
        if (_952c345693e1.meta.url.protocol === "blob:" && (_5d338a8fcc3c.blob = !0, _5d338a8fcc3c.base = _5d338a8fcc3c.url = new URL(_5d338a8fcc3c.url.pathname)), 
        _69c0679f9d42.referrer && _69c0679f9d42.referrer.startsWith(location.origin)) {
          let _2f35264f4238 = new URL(_952c345693e1.sourceUrl(_69c0679f9d42.referrer));
          (_5d338a8fcc3c.headers.origin || _952c345693e1.meta.url.origin !== _2f35264f4238.origin && _69c0679f9d42.mode === "cors") && (_5d338a8fcc3c.headers.origin = _2f35264f4238.origin), 
          _5d338a8fcc3c.headers.referer = _2f35264f4238.href;
        }
        let _ba0e9560e37b = await _952c345693e1.cookie.getCookies(_715ddf1b7513) || [], _679b3d428fb6 = _952c345693e1.cookie.serialize(_ba0e9560e37b, _952c345693e1.meta, !1);
        _5d338a8fcc3c.headers["user-agent"] = navigator.userAgent, _679b3d428fb6 && (_5d338a8fcc3c.headers.cookie = _679b3d428fb6);
        let _cbf5d9f11ac3 = new _b55642418695(_5d338a8fcc3c, null, null);
        if (this.emit("request", _cbf5d9f11ac3), _cbf5d9f11ac3.intercepted) return _cbf5d9f11ac3.returnValue;
        _20dea9fcc950 = _5d338a8fcc3c.blob ? "blob:" + location.origin + _5d338a8fcc3c.url.pathname : _5d338a8fcc3c.url;
        let _c55abd54ee95 = await this.bareClient.fetch(_20dea9fcc950, {
          headers: _5d338a8fcc3c.headers,
          method: _5d338a8fcc3c.method,
          body: _5d338a8fcc3c.body,
          credentials: _5d338a8fcc3c.credentials,
          mode: _5d338a8fcc3c.mode,
          cache: _5d338a8fcc3c.cache,
          redirect: _5d338a8fcc3c.redirect
        }), _f06e6743386c = new _5874a4071666(_5d338a8fcc3c, _c55abd54ee95), _e129cbf2710d = new _b55642418695(_f06e6743386c, null, null);
        if (this.emit("beforemod", _e129cbf2710d), _e129cbf2710d.intercepted) return _e129cbf2710d.returnValue;
        for (let _2f35264f4238 of _42fc29c02a55) _f06e6743386c.headers[_2f35264f4238] && delete _f06e6743386c.headers[_2f35264f4238];
        if (_f06e6743386c.headers.location && (_f06e6743386c.headers.location = _952c345693e1.rewriteUrl(_f06e6743386c.headers.location)), 
        [ "document", "iframe" ].includes(_69c0679f9d42.destination)) {
          let _2f35264f4238 = _f06e6743386c.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_2f35264f4238)) {
            let _42fc29c02a55 = /^\s*?attachment/i.test(_2f35264f4238) ? "attachment" : "inline", [_8081bcebed8c] = new URL(_c55abd54ee95.finalURL).pathname.split("/").slice(-1);
            _f06e6743386c.headers["content-disposition"] = `${_42fc29c02a55}; filename=${JSON.stringify(_8081bcebed8c)}`;
          }
        }
        if (_f06e6743386c.headers["set-cookie"] && (Promise.resolve(_952c345693e1.cookie.setCookies(_f06e6743386c.headers["set-cookie"], _715ddf1b7513, _952c345693e1.meta)).then(() => {
          self.clients.matchAll().then(function(_2f35264f4238) {
            _2f35264f4238.forEach(function(_2f35264f4238) {
              _2f35264f4238.postMessage({
                msg: "updateCookies",
                url: _952c345693e1.meta.url.href
              });
            });
          });
        }), delete _f06e6743386c.headers["set-cookie"]), _f06e6743386c.body) switch (_69c0679f9d42.destination) {
         case "script":
          _f06e6743386c.body = _952c345693e1.js.rewrite(await _c55abd54ee95.text());
          break;

         case "worker":
          {
            let _2f35264f4238 = [ _952c345693e1.bundleScript, _952c345693e1.clientScript, _952c345693e1.configScript, _952c345693e1.handlerScript ].map(_2f35264f4238 => JSON.stringify(_2f35264f4238)).join(",");
            _f06e6743386c.body = `if (!self.__uv) {\n                                ${_952c345693e1.createJsInject(_952c345693e1.cookie.serialize(_ba0e9560e37b, _952c345693e1.meta, !0), _69c0679f9d42.referrer)}\n                            importScripts(${_2f35264f4238});\n                            }\n`, 
            _f06e6743386c.body += _952c345693e1.js.rewrite(await _c55abd54ee95.text());
          }
          break;

         case "style":
          _f06e6743386c.body = _952c345693e1.rewriteCSS(await _c55abd54ee95.text());
          break;

         case "iframe":
         case "document":
          if (_f06e6743386c.getHeader("content-type") && _f06e6743386c.getHeader("content-type").startsWith("text/html")) {
            let _2f35264f4238 = await _c55abd54ee95.text();
            if (Array.isArray(this.config.inject)) {
              let _42fc29c02a55 = _2f35264f4238.indexOf("<head>"), _8081bcebed8c = _2f35264f4238.indexOf("<HEAD>"), _69c0679f9d42 = _2f35264f4238.indexOf("<body>"), _5874a4071666 = _2f35264f4238.indexOf("<BODY>"), _653c3d4307af = new URL(_20dea9fcc950), _b55642418695 = this.config.inject;
              for (let _20dea9fcc950 of _b55642418695) new RegExp(_20dea9fcc950.host).test(_653c3d4307af.host) && (_20dea9fcc950.injectTo === "head" ? (_42fc29c02a55 !== -1 || _8081bcebed8c !== -1) && (_2f35264f4238 = _2f35264f4238.slice(0, _42fc29c02a55) + `${_20dea9fcc950.html}` + _2f35264f4238.slice(_42fc29c02a55)) : _20dea9fcc950.injectTo === "body" && (_69c0679f9d42 !== -1 || _5874a4071666 !== -1) && (_2f35264f4238 = _2f35264f4238.slice(0, _69c0679f9d42) + `${_20dea9fcc950.html}` + _2f35264f4238.slice(_69c0679f9d42)));
            }
            _f06e6743386c.body = _952c345693e1.rewriteHtml(_2f35264f4238, {
              document: !0,
              injectHead: _952c345693e1.createHtmlInject(_952c345693e1.handlerScript, _952c345693e1.bundleScript, _952c345693e1.clientScript, _952c345693e1.configScript, _952c345693e1.cookie.serialize(_ba0e9560e37b, _952c345693e1.meta, !0), _69c0679f9d42.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _5d338a8fcc3c.headers.accept === "text/event-stream" && (_f06e6743386c.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_f06e6743386c.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _e129cbf2710d), _e129cbf2710d.intercepted ? _e129cbf2710d.returnValue : new Response(_f06e6743386c.body, {
          headers: _f06e6743386c.headers,
          status: _f06e6743386c.status,
          statusText: _f06e6743386c.statusText
        });
      } catch (_2f35264f4238) {
        return [ "document", "iframe" ].includes(_69c0679f9d42.destination) ? (console.error(_2f35264f4238), 
        T(_2f35264f4238, _20dea9fcc950)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_2f35264f4238;
  };
  self.UVServiceWorker = _69c0679f9d42;
  var _5874a4071666 = class {
    constructor(_2f35264f4238, _42fc29c02a55) {
      this.request = _2f35264f4238, this.raw = _42fc29c02a55, this.ultraviolet = _2f35264f4238.ultraviolet, 
      this.headers = {};
      for (let _2f35264f4238 in _42fc29c02a55.rawHeaders) this.headers[_2f35264f4238.toLowerCase()] = _42fc29c02a55.rawHeaders[_2f35264f4238];
      this.status = _42fc29c02a55.status, this.statusText = _42fc29c02a55.statusText, 
      this.body = _42fc29c02a55.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_2f35264f4238) {
      this.request.base = _2f35264f4238;
    }
    getHeader(_2f35264f4238) {
      return Array.isArray(this.headers[_2f35264f4238]) ? this.headers[_2f35264f4238][0] : this.headers[_2f35264f4238];
    }
  }, _653c3d4307af = class {
    constructor(_2f35264f4238, _42fc29c02a55, _8081bcebed8c = null) {
      this.ultraviolet = _42fc29c02a55, this.request = _2f35264f4238, this.headers = Object.fromEntries(_2f35264f4238.headers.entries()), 
      this.method = _2f35264f4238.method, this.body = _8081bcebed8c || null, this.cache = _2f35264f4238.cache, 
      this.redirect = _2f35264f4238.redirect, this.credentials = "omit", this.mode = _2f35264f4238.mode === "cors" ? _2f35264f4238.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_2f35264f4238) {
      this.ultraviolet.meta.url = _2f35264f4238;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_2f35264f4238) {
      this.ultraviolet.meta.base = _2f35264f4238;
    }
  }, _b55642418695 = class {
    #_2f35264f4238;
    #_42fc29c02a55;
    constructor(_2f35264f4238 = {}, _42fc29c02a55 = null, _8081bcebed8c = null) {
      this.#_2f35264f4238 = !1, this.#_42fc29c02a55 = null, this.data = _2f35264f4238, 
      this.target = _42fc29c02a55, this.that = _8081bcebed8c;
    }
    get intercepted() {
      return this.#_2f35264f4238;
    }
    get returnValue() {
      return this.#_42fc29c02a55;
    }
    respondWith(_2f35264f4238) {
      this.#_42fc29c02a55 = _2f35264f4238, this.#_2f35264f4238 = !0;
    }
  };
  function E(_2f35264f4238, _42fc29c02a55) {
    let _8081bcebed8c = `\n        errorTrace.value = ${JSON.stringify(_2f35264f4238)};\n        fetchedURL.textContent = ${JSON.stringify(_42fc29c02a55)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_8081bcebed8c)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_2f35264f4238, _42fc29c02a55) {
    let _8081bcebed8c = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_8081bcebed8c["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_2f35264f4238), _42fc29c02a55), {
      status: 500,
      headers: _8081bcebed8c
    });
  }
})();
