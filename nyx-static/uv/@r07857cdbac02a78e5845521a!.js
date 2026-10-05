"use strict";

(() => {
  var _4c9d1c007322 = self.StemConnect, _dcf5c493a583 = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _7ee0c931b232 = [ "GET", "HEAD" ], _8f037d0626ab = class extends _4c9d1c007322.EventEmitter {
    constructor(_dcf5c493a583 = __uv$config) {
      super(), _dcf5c493a583.prefix || (_dcf5c493a583.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _dcf5c493a583, 
      this.bareClient = new _4c9d1c007322.BareClient;
    }
    route({request: _4c9d1c007322}) {
      return !!_4c9d1c007322.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _8f037d0626ab}) {
      let _055d5832be05;
      try {
        if (!_8f037d0626ab.url.startsWith(location.origin + this.config.prefix)) return await fetch(_8f037d0626ab);
        let _29e669613c72 = new _4c9d1c007322(this.config);
        typeof this.config.construct == "function" && this.config.construct(_29e669613c72, "service");
        let _1e24f8675755 = await _29e669613c72.cookie.db();
        _29e669613c72.meta.origin = location.origin, _29e669613c72.meta.base = _29e669613c72.meta.url = new URL(_29e669613c72.sourceUrl(_8f037d0626ab.url));
        let _1f390f54b046 = new _4a13453d7a4f(_8f037d0626ab, _29e669613c72, _7ee0c931b232.includes(_8f037d0626ab.method.toUpperCase()) ? null : await _8f037d0626ab.blob());
        if (_29e669613c72.meta.url.protocol === "blob:" && (_1f390f54b046.blob = !0, _1f390f54b046.base = _1f390f54b046.url = new URL(_1f390f54b046.url.pathname)), 
        _8f037d0626ab.referrer && _8f037d0626ab.referrer.startsWith(location.origin)) {
          let _4c9d1c007322 = new URL(_29e669613c72.sourceUrl(_8f037d0626ab.referrer));
          (_1f390f54b046.headers.origin || _29e669613c72.meta.url.origin !== _4c9d1c007322.origin && _8f037d0626ab.mode === "cors") && (_1f390f54b046.headers.origin = _4c9d1c007322.origin), 
          _1f390f54b046.headers.referer = _4c9d1c007322.href;
        }
        let _4714c0799686 = await _29e669613c72.cookie.getCookies(_1e24f8675755) || [], _3c79c847bef6 = _29e669613c72.cookie.serialize(_4714c0799686, _29e669613c72.meta, !1);
        _1f390f54b046.headers["user-agent"] = navigator.userAgent, _3c79c847bef6 && (_1f390f54b046.headers.cookie = _3c79c847bef6);
        let _de983a9b5f2d = new _b57f7f1c0f48(_1f390f54b046, null, null);
        if (this.emit("request", _de983a9b5f2d), _de983a9b5f2d.intercepted) return _de983a9b5f2d.returnValue;
        _055d5832be05 = _1f390f54b046.blob ? "blob:" + location.origin + _1f390f54b046.url.pathname : _1f390f54b046.url;
        let _60a77e506de8 = await this.bareClient.fetch(_055d5832be05, {
          headers: _1f390f54b046.headers,
          method: _1f390f54b046.method,
          body: _1f390f54b046.body,
          credentials: _1f390f54b046.credentials,
          mode: _1f390f54b046.mode,
          cache: _1f390f54b046.cache,
          redirect: _1f390f54b046.redirect
        }), _1ae1ea4ff74c = new _62fa9b067fb8(_1f390f54b046, _60a77e506de8), _7c85f626ec18 = new _b57f7f1c0f48(_1ae1ea4ff74c, null, null);
        if (this.emit("beforemod", _7c85f626ec18), _7c85f626ec18.intercepted) return _7c85f626ec18.returnValue;
        for (let _4c9d1c007322 of _dcf5c493a583) _1ae1ea4ff74c.headers[_4c9d1c007322] && delete _1ae1ea4ff74c.headers[_4c9d1c007322];
        if (_1ae1ea4ff74c.headers.location && (_1ae1ea4ff74c.headers.location = _29e669613c72.rewriteUrl(_1ae1ea4ff74c.headers.location)), 
        [ "document", "iframe" ].includes(_8f037d0626ab.destination)) {
          let _4c9d1c007322 = _1ae1ea4ff74c.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_4c9d1c007322)) {
            let _dcf5c493a583 = /^\s*?attachment/i.test(_4c9d1c007322) ? "attachment" : "inline", [_7ee0c931b232] = new URL(_60a77e506de8.finalURL).pathname.split("/").slice(-1);
            _1ae1ea4ff74c.headers["content-disposition"] = `${_dcf5c493a583}; filename=${JSON.stringify(_7ee0c931b232)}`;
          }
        }
        if (_1ae1ea4ff74c.headers["set-cookie"] && (Promise.resolve(_29e669613c72.cookie.setCookies(_1ae1ea4ff74c.headers["set-cookie"], _1e24f8675755, _29e669613c72.meta)).then(() => {
          self.clients.matchAll().then(function(_4c9d1c007322) {
            _4c9d1c007322.forEach(function(_4c9d1c007322) {
              _4c9d1c007322.postMessage({
                msg: "updateCookies",
                url: _29e669613c72.meta.url.href
              });
            });
          });
        }), delete _1ae1ea4ff74c.headers["set-cookie"]), _1ae1ea4ff74c.body) switch (_8f037d0626ab.destination) {
         case "script":
          _1ae1ea4ff74c.body = _29e669613c72.js.rewrite(await _60a77e506de8.text());
          break;

         case "worker":
          {
            let _4c9d1c007322 = [ _29e669613c72.bundleScript, _29e669613c72.clientScript, _29e669613c72.configScript, _29e669613c72.handlerScript ].map(_4c9d1c007322 => JSON.stringify(_4c9d1c007322)).join(",");
            _1ae1ea4ff74c.body = `if (!self.__uv) {\n                                ${_29e669613c72.createJsInject(_29e669613c72.cookie.serialize(_4714c0799686, _29e669613c72.meta, !0), _8f037d0626ab.referrer)}\n                            importScripts(${_4c9d1c007322});\n                            }\n`, 
            _1ae1ea4ff74c.body += _29e669613c72.js.rewrite(await _60a77e506de8.text());
          }
          break;

         case "style":
          _1ae1ea4ff74c.body = _29e669613c72.rewriteCSS(await _60a77e506de8.text());
          break;

         case "iframe":
         case "document":
          if (_1ae1ea4ff74c.getHeader("content-type") && _1ae1ea4ff74c.getHeader("content-type").startsWith("text/html")) {
            let _4c9d1c007322 = await _60a77e506de8.text();
            if (Array.isArray(this.config.inject)) {
              let _dcf5c493a583 = _4c9d1c007322.indexOf("<head>"), _7ee0c931b232 = _4c9d1c007322.indexOf("<HEAD>"), _8f037d0626ab = _4c9d1c007322.indexOf("<body>"), _62fa9b067fb8 = _4c9d1c007322.indexOf("<BODY>"), _4a13453d7a4f = new URL(_055d5832be05), _b57f7f1c0f48 = this.config.inject;
              for (let _055d5832be05 of _b57f7f1c0f48) new RegExp(_055d5832be05.host).test(_4a13453d7a4f.host) && (_055d5832be05.injectTo === "head" ? (_dcf5c493a583 !== -1 || _7ee0c931b232 !== -1) && (_4c9d1c007322 = _4c9d1c007322.slice(0, _dcf5c493a583) + `${_055d5832be05.html}` + _4c9d1c007322.slice(_dcf5c493a583)) : _055d5832be05.injectTo === "body" && (_8f037d0626ab !== -1 || _62fa9b067fb8 !== -1) && (_4c9d1c007322 = _4c9d1c007322.slice(0, _8f037d0626ab) + `${_055d5832be05.html}` + _4c9d1c007322.slice(_8f037d0626ab)));
            }
            _1ae1ea4ff74c.body = _29e669613c72.rewriteHtml(_4c9d1c007322, {
              document: !0,
              injectHead: _29e669613c72.createHtmlInject(_29e669613c72.handlerScript, _29e669613c72.bundleScript, _29e669613c72.clientScript, _29e669613c72.configScript, _29e669613c72.cookie.serialize(_4714c0799686, _29e669613c72.meta, !0), _8f037d0626ab.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _1f390f54b046.headers.accept === "text/event-stream" && (_1ae1ea4ff74c.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_1ae1ea4ff74c.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _7c85f626ec18), _7c85f626ec18.intercepted ? _7c85f626ec18.returnValue : new Response(_1ae1ea4ff74c.body, {
          headers: _1ae1ea4ff74c.headers,
          status: _1ae1ea4ff74c.status,
          statusText: _1ae1ea4ff74c.statusText
        });
      } catch (_4c9d1c007322) {
        return [ "document", "iframe" ].includes(_8f037d0626ab.destination) ? (console.error(_4c9d1c007322), 
        T(_4c9d1c007322, _055d5832be05)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_4c9d1c007322;
  };
  self.UVServiceWorker = _8f037d0626ab;
  var _62fa9b067fb8 = class {
    constructor(_4c9d1c007322, _dcf5c493a583) {
      this.request = _4c9d1c007322, this.raw = _dcf5c493a583, this.ultraviolet = _4c9d1c007322.ultraviolet, 
      this.headers = {};
      for (let _4c9d1c007322 in _dcf5c493a583.rawHeaders) this.headers[_4c9d1c007322.toLowerCase()] = _dcf5c493a583.rawHeaders[_4c9d1c007322];
      this.status = _dcf5c493a583.status, this.statusText = _dcf5c493a583.statusText, 
      this.body = _dcf5c493a583.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_4c9d1c007322) {
      this.request.base = _4c9d1c007322;
    }
    getHeader(_4c9d1c007322) {
      return Array.isArray(this.headers[_4c9d1c007322]) ? this.headers[_4c9d1c007322][0] : this.headers[_4c9d1c007322];
    }
  }, _4a13453d7a4f = class {
    constructor(_4c9d1c007322, _dcf5c493a583, _7ee0c931b232 = null) {
      this.ultraviolet = _dcf5c493a583, this.request = _4c9d1c007322, this.headers = Object.fromEntries(_4c9d1c007322.headers.entries()), 
      this.method = _4c9d1c007322.method, this.body = _7ee0c931b232 || null, this.cache = _4c9d1c007322.cache, 
      this.redirect = _4c9d1c007322.redirect, this.credentials = "omit", this.mode = _4c9d1c007322.mode === "cors" ? _4c9d1c007322.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_4c9d1c007322) {
      this.ultraviolet.meta.url = _4c9d1c007322;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_4c9d1c007322) {
      this.ultraviolet.meta.base = _4c9d1c007322;
    }
  }, _b57f7f1c0f48 = class {
    #_4c9d1c007322;
    #_dcf5c493a583;
    constructor(_4c9d1c007322 = {}, _dcf5c493a583 = null, _7ee0c931b232 = null) {
      this.#_4c9d1c007322 = !1, this.#_dcf5c493a583 = null, this.data = _4c9d1c007322, 
      this.target = _dcf5c493a583, this.that = _7ee0c931b232;
    }
    get intercepted() {
      return this.#_4c9d1c007322;
    }
    get returnValue() {
      return this.#_dcf5c493a583;
    }
    respondWith(_4c9d1c007322) {
      this.#_dcf5c493a583 = _4c9d1c007322, this.#_4c9d1c007322 = !0;
    }
  };
  function E(_4c9d1c007322, _dcf5c493a583) {
    let _7ee0c931b232 = `\n        errorTrace.value = ${JSON.stringify(_4c9d1c007322)};\n        fetchedURL.textContent = ${JSON.stringify(_dcf5c493a583)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_7ee0c931b232)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_4c9d1c007322, _dcf5c493a583) {
    let _7ee0c931b232 = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_7ee0c931b232["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_4c9d1c007322), _dcf5c493a583), {
      status: 500,
      headers: _7ee0c931b232
    });
  }
})();
