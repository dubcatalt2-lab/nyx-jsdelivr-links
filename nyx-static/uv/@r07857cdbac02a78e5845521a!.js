"use strict";

(() => {
  var _ea68bf9aadad = self.StemConnect, _d24ccd17a3da = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _6b14ca0c6ffc = [ "GET", "HEAD" ], _71fd5963d389 = class extends _ea68bf9aadad.EventEmitter {
    constructor(_d24ccd17a3da = __uv$config) {
      super(), _d24ccd17a3da.prefix || (_d24ccd17a3da.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _d24ccd17a3da, 
      this.bareClient = new _ea68bf9aadad.BareClient;
    }
    route({request: _ea68bf9aadad}) {
      return !!_ea68bf9aadad.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _71fd5963d389}) {
      let _3885f192952e;
      try {
        if (!_71fd5963d389.url.startsWith(location.origin + this.config.prefix)) return await fetch(_71fd5963d389);
        let _94903471f32d = new _ea68bf9aadad(this.config);
        typeof this.config.construct == "function" && this.config.construct(_94903471f32d, "service");
        let _2ec987b2680f = await _94903471f32d.cookie.db();
        _94903471f32d.meta.origin = location.origin, _94903471f32d.meta.base = _94903471f32d.meta.url = new URL(_94903471f32d.sourceUrl(_71fd5963d389.url));
        let _dafe16a81789 = new _bc819546e170(_71fd5963d389, _94903471f32d, _6b14ca0c6ffc.includes(_71fd5963d389.method.toUpperCase()) ? null : await _71fd5963d389.blob());
        if (_94903471f32d.meta.url.protocol === "blob:" && (_dafe16a81789.blob = !0, _dafe16a81789.base = _dafe16a81789.url = new URL(_dafe16a81789.url.pathname)), 
        _71fd5963d389.referrer && _71fd5963d389.referrer.startsWith(location.origin)) {
          let _ea68bf9aadad = new URL(_94903471f32d.sourceUrl(_71fd5963d389.referrer));
          (_dafe16a81789.headers.origin || _94903471f32d.meta.url.origin !== _ea68bf9aadad.origin && _71fd5963d389.mode === "cors") && (_dafe16a81789.headers.origin = _ea68bf9aadad.origin), 
          _dafe16a81789.headers.referer = _ea68bf9aadad.href;
        }
        let _efd6b9936519 = await _94903471f32d.cookie.getCookies(_2ec987b2680f) || [], _9dfbea51a1ab = _94903471f32d.cookie.serialize(_efd6b9936519, _94903471f32d.meta, !1);
        _dafe16a81789.headers["user-agent"] = navigator.userAgent, _9dfbea51a1ab && (_dafe16a81789.headers.cookie = _9dfbea51a1ab);
        let _0abbcb2b80a0 = new _2178e0247aea(_dafe16a81789, null, null);
        if (this.emit("request", _0abbcb2b80a0), _0abbcb2b80a0.intercepted) return _0abbcb2b80a0.returnValue;
        _3885f192952e = _dafe16a81789.blob ? "blob:" + location.origin + _dafe16a81789.url.pathname : _dafe16a81789.url;
        let _a71ae72b9afc = await this.bareClient.fetch(_3885f192952e, {
          headers: _dafe16a81789.headers,
          method: _dafe16a81789.method,
          body: _dafe16a81789.body,
          credentials: _dafe16a81789.credentials,
          mode: _dafe16a81789.mode,
          cache: _dafe16a81789.cache,
          redirect: _dafe16a81789.redirect
        }), _e41ef18b1166 = new _d254378d94aa(_dafe16a81789, _a71ae72b9afc), _afcf46e06737 = new _2178e0247aea(_e41ef18b1166, null, null);
        if (this.emit("beforemod", _afcf46e06737), _afcf46e06737.intercepted) return _afcf46e06737.returnValue;
        for (let _ea68bf9aadad of _d24ccd17a3da) _e41ef18b1166.headers[_ea68bf9aadad] && delete _e41ef18b1166.headers[_ea68bf9aadad];
        if (_e41ef18b1166.headers.location && (_e41ef18b1166.headers.location = _94903471f32d.rewriteUrl(_e41ef18b1166.headers.location)), 
        [ "document", "iframe" ].includes(_71fd5963d389.destination)) {
          let _ea68bf9aadad = _e41ef18b1166.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_ea68bf9aadad)) {
            let _d24ccd17a3da = /^\s*?attachment/i.test(_ea68bf9aadad) ? "attachment" : "inline", [_6b14ca0c6ffc] = new URL(_a71ae72b9afc.finalURL).pathname.split("/").slice(-1);
            _e41ef18b1166.headers["content-disposition"] = `${_d24ccd17a3da}; filename=${JSON.stringify(_6b14ca0c6ffc)}`;
          }
        }
        if (_e41ef18b1166.headers["set-cookie"] && (Promise.resolve(_94903471f32d.cookie.setCookies(_e41ef18b1166.headers["set-cookie"], _2ec987b2680f, _94903471f32d.meta)).then(() => {
          self.clients.matchAll().then(function(_ea68bf9aadad) {
            _ea68bf9aadad.forEach(function(_ea68bf9aadad) {
              _ea68bf9aadad.postMessage({
                msg: "updateCookies",
                url: _94903471f32d.meta.url.href
              });
            });
          });
        }), delete _e41ef18b1166.headers["set-cookie"]), _e41ef18b1166.body) switch (_71fd5963d389.destination) {
         case "script":
          _e41ef18b1166.body = _94903471f32d.js.rewrite(await _a71ae72b9afc.text());
          break;

         case "worker":
          {
            let _ea68bf9aadad = [ _94903471f32d.bundleScript, _94903471f32d.clientScript, _94903471f32d.configScript, _94903471f32d.handlerScript ].map(_ea68bf9aadad => JSON.stringify(_ea68bf9aadad)).join(",");
            _e41ef18b1166.body = `if (!self.__uv) {\n                                ${_94903471f32d.createJsInject(_94903471f32d.cookie.serialize(_efd6b9936519, _94903471f32d.meta, !0), _71fd5963d389.referrer)}\n                            importScripts(${_ea68bf9aadad});\n                            }\n`, 
            _e41ef18b1166.body += _94903471f32d.js.rewrite(await _a71ae72b9afc.text());
          }
          break;

         case "style":
          _e41ef18b1166.body = _94903471f32d.rewriteCSS(await _a71ae72b9afc.text());
          break;

         case "iframe":
         case "document":
          if (_e41ef18b1166.getHeader("content-type") && _e41ef18b1166.getHeader("content-type").startsWith("text/html")) {
            let _ea68bf9aadad = await _a71ae72b9afc.text();
            if (Array.isArray(this.config.inject)) {
              let _d24ccd17a3da = _ea68bf9aadad.indexOf("<head>"), _6b14ca0c6ffc = _ea68bf9aadad.indexOf("<HEAD>"), _71fd5963d389 = _ea68bf9aadad.indexOf("<body>"), _d254378d94aa = _ea68bf9aadad.indexOf("<BODY>"), _bc819546e170 = new URL(_3885f192952e), _2178e0247aea = this.config.inject;
              for (let _3885f192952e of _2178e0247aea) new RegExp(_3885f192952e.host).test(_bc819546e170.host) && (_3885f192952e.injectTo === "head" ? (_d24ccd17a3da !== -1 || _6b14ca0c6ffc !== -1) && (_ea68bf9aadad = _ea68bf9aadad.slice(0, _d24ccd17a3da) + `${_3885f192952e.html}` + _ea68bf9aadad.slice(_d24ccd17a3da)) : _3885f192952e.injectTo === "body" && (_71fd5963d389 !== -1 || _d254378d94aa !== -1) && (_ea68bf9aadad = _ea68bf9aadad.slice(0, _71fd5963d389) + `${_3885f192952e.html}` + _ea68bf9aadad.slice(_71fd5963d389)));
            }
            _e41ef18b1166.body = _94903471f32d.rewriteHtml(_ea68bf9aadad, {
              document: !0,
              injectHead: _94903471f32d.createHtmlInject(_94903471f32d.handlerScript, _94903471f32d.bundleScript, _94903471f32d.clientScript, _94903471f32d.configScript, _94903471f32d.cookie.serialize(_efd6b9936519, _94903471f32d.meta, !0), _71fd5963d389.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _dafe16a81789.headers.accept === "text/event-stream" && (_e41ef18b1166.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_e41ef18b1166.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _afcf46e06737), _afcf46e06737.intercepted ? _afcf46e06737.returnValue : new Response(_e41ef18b1166.body, {
          headers: _e41ef18b1166.headers,
          status: _e41ef18b1166.status,
          statusText: _e41ef18b1166.statusText
        });
      } catch (_ea68bf9aadad) {
        return [ "document", "iframe" ].includes(_71fd5963d389.destination) ? (console.error(_ea68bf9aadad), 
        T(_ea68bf9aadad, _3885f192952e)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_ea68bf9aadad;
  };
  self.UVServiceWorker = _71fd5963d389;
  var _d254378d94aa = class {
    constructor(_ea68bf9aadad, _d24ccd17a3da) {
      this.request = _ea68bf9aadad, this.raw = _d24ccd17a3da, this.ultraviolet = _ea68bf9aadad.ultraviolet, 
      this.headers = {};
      for (let _ea68bf9aadad in _d24ccd17a3da.rawHeaders) this.headers[_ea68bf9aadad.toLowerCase()] = _d24ccd17a3da.rawHeaders[_ea68bf9aadad];
      this.status = _d24ccd17a3da.status, this.statusText = _d24ccd17a3da.statusText, 
      this.body = _d24ccd17a3da.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_ea68bf9aadad) {
      this.request.base = _ea68bf9aadad;
    }
    getHeader(_ea68bf9aadad) {
      return Array.isArray(this.headers[_ea68bf9aadad]) ? this.headers[_ea68bf9aadad][0] : this.headers[_ea68bf9aadad];
    }
  }, _bc819546e170 = class {
    constructor(_ea68bf9aadad, _d24ccd17a3da, _6b14ca0c6ffc = null) {
      this.ultraviolet = _d24ccd17a3da, this.request = _ea68bf9aadad, this.headers = Object.fromEntries(_ea68bf9aadad.headers.entries()), 
      this.method = _ea68bf9aadad.method, this.body = _6b14ca0c6ffc || null, this.cache = _ea68bf9aadad.cache, 
      this.redirect = _ea68bf9aadad.redirect, this.credentials = "omit", this.mode = _ea68bf9aadad.mode === "cors" ? _ea68bf9aadad.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_ea68bf9aadad) {
      this.ultraviolet.meta.url = _ea68bf9aadad;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_ea68bf9aadad) {
      this.ultraviolet.meta.base = _ea68bf9aadad;
    }
  }, _2178e0247aea = class {
    #_ea68bf9aadad;
    #_d24ccd17a3da;
    constructor(_ea68bf9aadad = {}, _d24ccd17a3da = null, _6b14ca0c6ffc = null) {
      this.#_ea68bf9aadad = !1, this.#_d24ccd17a3da = null, this.data = _ea68bf9aadad, 
      this.target = _d24ccd17a3da, this.that = _6b14ca0c6ffc;
    }
    get intercepted() {
      return this.#_ea68bf9aadad;
    }
    get returnValue() {
      return this.#_d24ccd17a3da;
    }
    respondWith(_ea68bf9aadad) {
      this.#_d24ccd17a3da = _ea68bf9aadad, this.#_ea68bf9aadad = !0;
    }
  };
  function E(_ea68bf9aadad, _d24ccd17a3da) {
    let _6b14ca0c6ffc = `\n        errorTrace.value = ${JSON.stringify(_ea68bf9aadad)};\n        fetchedURL.textContent = ${JSON.stringify(_d24ccd17a3da)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_6b14ca0c6ffc)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_ea68bf9aadad, _d24ccd17a3da) {
    let _6b14ca0c6ffc = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_6b14ca0c6ffc["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_ea68bf9aadad), _d24ccd17a3da), {
      status: 500,
      headers: _6b14ca0c6ffc
    });
  }
})();
