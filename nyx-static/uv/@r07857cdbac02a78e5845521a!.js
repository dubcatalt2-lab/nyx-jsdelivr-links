"use strict";

(() => {
  var _5fce59b382b9 = self.StemConnect, _c3fcce5a880c = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _5e8fdcd3cc8f = [ "GET", "HEAD" ], _2ca38c3ddb24 = class extends _5fce59b382b9.EventEmitter {
    constructor(_c3fcce5a880c = __uv$config) {
      super(), _c3fcce5a880c.prefix || (_c3fcce5a880c.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _c3fcce5a880c, 
      this.bareClient = new _5fce59b382b9.BareClient;
    }
    route({request: _5fce59b382b9}) {
      return !!_5fce59b382b9.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _2ca38c3ddb24}) {
      let _a4ffcb840fee;
      try {
        if (!_2ca38c3ddb24.url.startsWith(location.origin + this.config.prefix)) return await fetch(_2ca38c3ddb24);
        let _427a12085092 = new _5fce59b382b9(this.config);
        typeof this.config.construct == "function" && this.config.construct(_427a12085092, "service");
        let _a2a669ce6172 = await _427a12085092.cookie.db();
        _427a12085092.meta.origin = location.origin, _427a12085092.meta.base = _427a12085092.meta.url = new URL(_427a12085092.sourceUrl(_2ca38c3ddb24.url));
        let _07e6e1c03e5e = new _cbfb3b8d3ca9(_2ca38c3ddb24, _427a12085092, _5e8fdcd3cc8f.includes(_2ca38c3ddb24.method.toUpperCase()) ? null : await _2ca38c3ddb24.blob());
        if (_427a12085092.meta.url.protocol === "blob:" && (_07e6e1c03e5e.blob = !0, _07e6e1c03e5e.base = _07e6e1c03e5e.url = new URL(_07e6e1c03e5e.url.pathname)), 
        _2ca38c3ddb24.referrer && _2ca38c3ddb24.referrer.startsWith(location.origin)) {
          let _5fce59b382b9 = new URL(_427a12085092.sourceUrl(_2ca38c3ddb24.referrer));
          (_07e6e1c03e5e.headers.origin || _427a12085092.meta.url.origin !== _5fce59b382b9.origin && _2ca38c3ddb24.mode === "cors") && (_07e6e1c03e5e.headers.origin = _5fce59b382b9.origin), 
          _07e6e1c03e5e.headers.referer = _5fce59b382b9.href;
        }
        let _311c6488044d = await _427a12085092.cookie.getCookies(_a2a669ce6172) || [], _01683a093f70 = _427a12085092.cookie.serialize(_311c6488044d, _427a12085092.meta, !1);
        _07e6e1c03e5e.headers["user-agent"] = navigator.userAgent, _01683a093f70 && (_07e6e1c03e5e.headers.cookie = _01683a093f70);
        let _458dc3e22ec6 = new _2f050b312b6e(_07e6e1c03e5e, null, null);
        if (this.emit("request", _458dc3e22ec6), _458dc3e22ec6.intercepted) return _458dc3e22ec6.returnValue;
        _a4ffcb840fee = _07e6e1c03e5e.blob ? "blob:" + location.origin + _07e6e1c03e5e.url.pathname : _07e6e1c03e5e.url;
        let _96765b5c4f4d = await this.bareClient.fetch(_a4ffcb840fee, {
          headers: _07e6e1c03e5e.headers,
          method: _07e6e1c03e5e.method,
          body: _07e6e1c03e5e.body,
          credentials: _07e6e1c03e5e.credentials,
          mode: _07e6e1c03e5e.mode,
          cache: _07e6e1c03e5e.cache,
          redirect: _07e6e1c03e5e.redirect
        }), _b87a34929939 = new _7c24cf0b8bb5(_07e6e1c03e5e, _96765b5c4f4d), _d0ce68fc88d7 = new _2f050b312b6e(_b87a34929939, null, null);
        if (this.emit("beforemod", _d0ce68fc88d7), _d0ce68fc88d7.intercepted) return _d0ce68fc88d7.returnValue;
        for (let _5fce59b382b9 of _c3fcce5a880c) _b87a34929939.headers[_5fce59b382b9] && delete _b87a34929939.headers[_5fce59b382b9];
        if (_b87a34929939.headers.location && (_b87a34929939.headers.location = _427a12085092.rewriteUrl(_b87a34929939.headers.location)), 
        [ "document", "iframe" ].includes(_2ca38c3ddb24.destination)) {
          let _5fce59b382b9 = _b87a34929939.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_5fce59b382b9)) {
            let _c3fcce5a880c = /^\s*?attachment/i.test(_5fce59b382b9) ? "attachment" : "inline", [_5e8fdcd3cc8f] = new URL(_96765b5c4f4d.finalURL).pathname.split("/").slice(-1);
            _b87a34929939.headers["content-disposition"] = `${_c3fcce5a880c}; filename=${JSON.stringify(_5e8fdcd3cc8f)}`;
          }
        }
        if (_b87a34929939.headers["set-cookie"] && (Promise.resolve(_427a12085092.cookie.setCookies(_b87a34929939.headers["set-cookie"], _a2a669ce6172, _427a12085092.meta)).then(() => {
          self.clients.matchAll().then(function(_5fce59b382b9) {
            _5fce59b382b9.forEach(function(_5fce59b382b9) {
              _5fce59b382b9.postMessage({
                msg: "updateCookies",
                url: _427a12085092.meta.url.href
              });
            });
          });
        }), delete _b87a34929939.headers["set-cookie"]), _b87a34929939.body) switch (_2ca38c3ddb24.destination) {
         case "script":
          _b87a34929939.body = _427a12085092.js.rewrite(await _96765b5c4f4d.text());
          break;

         case "worker":
          {
            let _5fce59b382b9 = [ _427a12085092.bundleScript, _427a12085092.clientScript, _427a12085092.configScript, _427a12085092.handlerScript ].map(_5fce59b382b9 => JSON.stringify(_5fce59b382b9)).join(",");
            _b87a34929939.body = `if (!self.__uv) {\n                                ${_427a12085092.createJsInject(_427a12085092.cookie.serialize(_311c6488044d, _427a12085092.meta, !0), _2ca38c3ddb24.referrer)}\n                            importScripts(${_5fce59b382b9});\n                            }\n`, 
            _b87a34929939.body += _427a12085092.js.rewrite(await _96765b5c4f4d.text());
          }
          break;

         case "style":
          _b87a34929939.body = _427a12085092.rewriteCSS(await _96765b5c4f4d.text());
          break;

         case "iframe":
         case "document":
          if (_b87a34929939.getHeader("content-type") && _b87a34929939.getHeader("content-type").startsWith("text/html")) {
            let _5fce59b382b9 = await _96765b5c4f4d.text();
            if (Array.isArray(this.config.inject)) {
              let _c3fcce5a880c = _5fce59b382b9.indexOf("<head>"), _5e8fdcd3cc8f = _5fce59b382b9.indexOf("<HEAD>"), _2ca38c3ddb24 = _5fce59b382b9.indexOf("<body>"), _7c24cf0b8bb5 = _5fce59b382b9.indexOf("<BODY>"), _cbfb3b8d3ca9 = new URL(_a4ffcb840fee), _2f050b312b6e = this.config.inject;
              for (let _a4ffcb840fee of _2f050b312b6e) new RegExp(_a4ffcb840fee.host).test(_cbfb3b8d3ca9.host) && (_a4ffcb840fee.injectTo === "head" ? (_c3fcce5a880c !== -1 || _5e8fdcd3cc8f !== -1) && (_5fce59b382b9 = _5fce59b382b9.slice(0, _c3fcce5a880c) + `${_a4ffcb840fee.html}` + _5fce59b382b9.slice(_c3fcce5a880c)) : _a4ffcb840fee.injectTo === "body" && (_2ca38c3ddb24 !== -1 || _7c24cf0b8bb5 !== -1) && (_5fce59b382b9 = _5fce59b382b9.slice(0, _2ca38c3ddb24) + `${_a4ffcb840fee.html}` + _5fce59b382b9.slice(_2ca38c3ddb24)));
            }
            _b87a34929939.body = _427a12085092.rewriteHtml(_5fce59b382b9, {
              document: !0,
              injectHead: _427a12085092.createHtmlInject(_427a12085092.handlerScript, _427a12085092.bundleScript, _427a12085092.clientScript, _427a12085092.configScript, _427a12085092.cookie.serialize(_311c6488044d, _427a12085092.meta, !0), _2ca38c3ddb24.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _07e6e1c03e5e.headers.accept === "text/event-stream" && (_b87a34929939.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_b87a34929939.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _d0ce68fc88d7), _d0ce68fc88d7.intercepted ? _d0ce68fc88d7.returnValue : new Response(_b87a34929939.body, {
          headers: _b87a34929939.headers,
          status: _b87a34929939.status,
          statusText: _b87a34929939.statusText
        });
      } catch (_5fce59b382b9) {
        return [ "document", "iframe" ].includes(_2ca38c3ddb24.destination) ? (console.error(_5fce59b382b9), 
        T(_5fce59b382b9, _a4ffcb840fee)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_5fce59b382b9;
  };
  self.UVServiceWorker = _2ca38c3ddb24;
  var _7c24cf0b8bb5 = class {
    constructor(_5fce59b382b9, _c3fcce5a880c) {
      this.request = _5fce59b382b9, this.raw = _c3fcce5a880c, this.ultraviolet = _5fce59b382b9.ultraviolet, 
      this.headers = {};
      for (let _5fce59b382b9 in _c3fcce5a880c.rawHeaders) this.headers[_5fce59b382b9.toLowerCase()] = _c3fcce5a880c.rawHeaders[_5fce59b382b9];
      this.status = _c3fcce5a880c.status, this.statusText = _c3fcce5a880c.statusText, 
      this.body = _c3fcce5a880c.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_5fce59b382b9) {
      this.request.base = _5fce59b382b9;
    }
    getHeader(_5fce59b382b9) {
      return Array.isArray(this.headers[_5fce59b382b9]) ? this.headers[_5fce59b382b9][0] : this.headers[_5fce59b382b9];
    }
  }, _cbfb3b8d3ca9 = class {
    constructor(_5fce59b382b9, _c3fcce5a880c, _5e8fdcd3cc8f = null) {
      this.ultraviolet = _c3fcce5a880c, this.request = _5fce59b382b9, this.headers = Object.fromEntries(_5fce59b382b9.headers.entries()), 
      this.method = _5fce59b382b9.method, this.body = _5e8fdcd3cc8f || null, this.cache = _5fce59b382b9.cache, 
      this.redirect = _5fce59b382b9.redirect, this.credentials = "omit", this.mode = _5fce59b382b9.mode === "cors" ? _5fce59b382b9.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_5fce59b382b9) {
      this.ultraviolet.meta.url = _5fce59b382b9;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_5fce59b382b9) {
      this.ultraviolet.meta.base = _5fce59b382b9;
    }
  }, _2f050b312b6e = class {
    #_5fce59b382b9;
    #_c3fcce5a880c;
    constructor(_5fce59b382b9 = {}, _c3fcce5a880c = null, _5e8fdcd3cc8f = null) {
      this.#_5fce59b382b9 = !1, this.#_c3fcce5a880c = null, this.data = _5fce59b382b9, 
      this.target = _c3fcce5a880c, this.that = _5e8fdcd3cc8f;
    }
    get intercepted() {
      return this.#_5fce59b382b9;
    }
    get returnValue() {
      return this.#_c3fcce5a880c;
    }
    respondWith(_5fce59b382b9) {
      this.#_c3fcce5a880c = _5fce59b382b9, this.#_5fce59b382b9 = !0;
    }
  };
  function E(_5fce59b382b9, _c3fcce5a880c) {
    let _5e8fdcd3cc8f = `\n        errorTrace.value = ${JSON.stringify(_5fce59b382b9)};\n        fetchedURL.textContent = ${JSON.stringify(_c3fcce5a880c)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_5e8fdcd3cc8f)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_5fce59b382b9, _c3fcce5a880c) {
    let _5e8fdcd3cc8f = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_5e8fdcd3cc8f["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_5fce59b382b9), _c3fcce5a880c), {
      status: 500,
      headers: _5e8fdcd3cc8f
    });
  }
})();
