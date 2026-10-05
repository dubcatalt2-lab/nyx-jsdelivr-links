"use strict";

(() => {
  var _edb540bebf4d = self.StemConnect, _05341cae28fe = [ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection" ], _e97d198337ba = [ "GET", "HEAD" ], _07dbb0cc6dee = class extends _edb540bebf4d.EventEmitter {
    constructor(_05341cae28fe = __uv$config) {
      super(), _05341cae28fe.prefix || (_05341cae28fe.prefix = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/"), this.config = _05341cae28fe, 
      this.bareClient = new _edb540bebf4d.BareClient;
    }
    route({request: _edb540bebf4d}) {
      return !!_edb540bebf4d.url.startsWith(location.origin + this.config.prefix);
    }
    async fetch({request: _07dbb0cc6dee}) {
      let _143807b716ce;
      try {
        if (!_07dbb0cc6dee.url.startsWith(location.origin + this.config.prefix)) return await fetch(_07dbb0cc6dee);
        let _93aa565bd781 = new _edb540bebf4d(this.config);
        typeof this.config.construct == "function" && this.config.construct(_93aa565bd781, "service");
        let _24bd8121479d = await _93aa565bd781.cookie.db();
        _93aa565bd781.meta.origin = location.origin, _93aa565bd781.meta.base = _93aa565bd781.meta.url = new URL(_93aa565bd781.sourceUrl(_07dbb0cc6dee.url));
        let _d95e07c5f4e9 = new _f06938416133(_07dbb0cc6dee, _93aa565bd781, _e97d198337ba.includes(_07dbb0cc6dee.method.toUpperCase()) ? null : await _07dbb0cc6dee.blob());
        if (_93aa565bd781.meta.url.protocol === "blob:" && (_d95e07c5f4e9.blob = !0, _d95e07c5f4e9.base = _d95e07c5f4e9.url = new URL(_d95e07c5f4e9.url.pathname)), 
        _07dbb0cc6dee.referrer && _07dbb0cc6dee.referrer.startsWith(location.origin)) {
          let _edb540bebf4d = new URL(_93aa565bd781.sourceUrl(_07dbb0cc6dee.referrer));
          (_d95e07c5f4e9.headers.origin || _93aa565bd781.meta.url.origin !== _edb540bebf4d.origin && _07dbb0cc6dee.mode === "cors") && (_d95e07c5f4e9.headers.origin = _edb540bebf4d.origin), 
          _d95e07c5f4e9.headers.referer = _edb540bebf4d.href;
        }
        let _2e9d2c6a85dd = await _93aa565bd781.cookie.getCookies(_24bd8121479d) || [], _698e981fd826 = _93aa565bd781.cookie.serialize(_2e9d2c6a85dd, _93aa565bd781.meta, !1);
        _d95e07c5f4e9.headers["user-agent"] = navigator.userAgent, _698e981fd826 && (_d95e07c5f4e9.headers.cookie = _698e981fd826);
        let _498ba3e95dc2 = new _fe6177ab5496(_d95e07c5f4e9, null, null);
        if (this.emit("request", _498ba3e95dc2), _498ba3e95dc2.intercepted) return _498ba3e95dc2.returnValue;
        _143807b716ce = _d95e07c5f4e9.blob ? "blob:" + location.origin + _d95e07c5f4e9.url.pathname : _d95e07c5f4e9.url;
        let _cbe88a1d5dde = await this.bareClient.fetch(_143807b716ce, {
          headers: _d95e07c5f4e9.headers,
          method: _d95e07c5f4e9.method,
          body: _d95e07c5f4e9.body,
          credentials: _d95e07c5f4e9.credentials,
          mode: _d95e07c5f4e9.mode,
          cache: _d95e07c5f4e9.cache,
          redirect: _d95e07c5f4e9.redirect
        }), _75046e1c7d31 = new _fa1f991c93c8(_d95e07c5f4e9, _cbe88a1d5dde), _d8f081f36df5 = new _fe6177ab5496(_75046e1c7d31, null, null);
        if (this.emit("beforemod", _d8f081f36df5), _d8f081f36df5.intercepted) return _d8f081f36df5.returnValue;
        for (let _edb540bebf4d of _05341cae28fe) _75046e1c7d31.headers[_edb540bebf4d] && delete _75046e1c7d31.headers[_edb540bebf4d];
        if (_75046e1c7d31.headers.location && (_75046e1c7d31.headers.location = _93aa565bd781.rewriteUrl(_75046e1c7d31.headers.location)), 
        [ "document", "iframe" ].includes(_07dbb0cc6dee.destination)) {
          let _edb540bebf4d = _75046e1c7d31.getHeader("content-disposition");
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_edb540bebf4d)) {
            let _05341cae28fe = /^\s*?attachment/i.test(_edb540bebf4d) ? "attachment" : "inline", [_e97d198337ba] = new URL(_cbe88a1d5dde.finalURL).pathname.split("/").slice(-1);
            _75046e1c7d31.headers["content-disposition"] = `${_05341cae28fe}; filename=${JSON.stringify(_e97d198337ba)}`;
          }
        }
        if (_75046e1c7d31.headers["set-cookie"] && (Promise.resolve(_93aa565bd781.cookie.setCookies(_75046e1c7d31.headers["set-cookie"], _24bd8121479d, _93aa565bd781.meta)).then(() => {
          self.clients.matchAll().then(function(_edb540bebf4d) {
            _edb540bebf4d.forEach(function(_edb540bebf4d) {
              _edb540bebf4d.postMessage({
                msg: "updateCookies",
                url: _93aa565bd781.meta.url.href
              });
            });
          });
        }), delete _75046e1c7d31.headers["set-cookie"]), _75046e1c7d31.body) switch (_07dbb0cc6dee.destination) {
         case "script":
          _75046e1c7d31.body = _93aa565bd781.js.rewrite(await _cbe88a1d5dde.text());
          break;

         case "worker":
          {
            let _edb540bebf4d = [ _93aa565bd781.bundleScript, _93aa565bd781.clientScript, _93aa565bd781.configScript, _93aa565bd781.handlerScript ].map(_edb540bebf4d => JSON.stringify(_edb540bebf4d)).join(",");
            _75046e1c7d31.body = `if (!self.__uv) {\n                                ${_93aa565bd781.createJsInject(_93aa565bd781.cookie.serialize(_2e9d2c6a85dd, _93aa565bd781.meta, !0), _07dbb0cc6dee.referrer)}\n                            importScripts(${_edb540bebf4d});\n                            }\n`, 
            _75046e1c7d31.body += _93aa565bd781.js.rewrite(await _cbe88a1d5dde.text());
          }
          break;

         case "style":
          _75046e1c7d31.body = _93aa565bd781.rewriteCSS(await _cbe88a1d5dde.text());
          break;

         case "iframe":
         case "document":
          if (_75046e1c7d31.getHeader("content-type") && _75046e1c7d31.getHeader("content-type").startsWith("text/html")) {
            let _edb540bebf4d = await _cbe88a1d5dde.text();
            if (Array.isArray(this.config.inject)) {
              let _05341cae28fe = _edb540bebf4d.indexOf("<head>"), _e97d198337ba = _edb540bebf4d.indexOf("<HEAD>"), _07dbb0cc6dee = _edb540bebf4d.indexOf("<body>"), _fa1f991c93c8 = _edb540bebf4d.indexOf("<BODY>"), _f06938416133 = new URL(_143807b716ce), _fe6177ab5496 = this.config.inject;
              for (let _143807b716ce of _fe6177ab5496) new RegExp(_143807b716ce.host).test(_f06938416133.host) && (_143807b716ce.injectTo === "head" ? (_05341cae28fe !== -1 || _e97d198337ba !== -1) && (_edb540bebf4d = _edb540bebf4d.slice(0, _05341cae28fe) + `${_143807b716ce.html}` + _edb540bebf4d.slice(_05341cae28fe)) : _143807b716ce.injectTo === "body" && (_07dbb0cc6dee !== -1 || _fa1f991c93c8 !== -1) && (_edb540bebf4d = _edb540bebf4d.slice(0, _07dbb0cc6dee) + `${_143807b716ce.html}` + _edb540bebf4d.slice(_07dbb0cc6dee)));
            }
            _75046e1c7d31.body = _93aa565bd781.rewriteHtml(_edb540bebf4d, {
              document: !0,
              injectHead: _93aa565bd781.createHtmlInject(_93aa565bd781.handlerScript, _93aa565bd781.bundleScript, _93aa565bd781.clientScript, _93aa565bd781.configScript, _93aa565bd781.cookie.serialize(_2e9d2c6a85dd, _93aa565bd781.meta, !0), _07dbb0cc6dee.referrer)
            });
          }
          break;

         default:
          break;
        }
        return _d95e07c5f4e9.headers.accept === "text/event-stream" && (_75046e1c7d31.headers["content-type"] = "text/event-stream"), 
        crossOriginIsolated && (_75046e1c7d31.headers["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        this.emit("response", _d8f081f36df5), _d8f081f36df5.intercepted ? _d8f081f36df5.returnValue : new Response(_75046e1c7d31.body, {
          headers: _75046e1c7d31.headers,
          status: _75046e1c7d31.status,
          statusText: _75046e1c7d31.statusText
        });
      } catch (_edb540bebf4d) {
        return [ "document", "iframe" ].includes(_07dbb0cc6dee.destination) ? (console.error(_edb540bebf4d), 
        T(_edb540bebf4d, _143807b716ce)) : new Response(void 0, {
          status: 500
        });
      }
    }
    static StemConnect=_edb540bebf4d;
  };
  self.UVServiceWorker = _07dbb0cc6dee;
  var _fa1f991c93c8 = class {
    constructor(_edb540bebf4d, _05341cae28fe) {
      this.request = _edb540bebf4d, this.raw = _05341cae28fe, this.ultraviolet = _edb540bebf4d.ultraviolet, 
      this.headers = {};
      for (let _edb540bebf4d in _05341cae28fe.rawHeaders) this.headers[_edb540bebf4d.toLowerCase()] = _05341cae28fe.rawHeaders[_edb540bebf4d];
      this.status = _05341cae28fe.status, this.statusText = _05341cae28fe.statusText, 
      this.body = _05341cae28fe.body;
    }
    get url() {
      return this.request.url;
    }
    get base() {
      return this.request.base;
    }
    set base(_edb540bebf4d) {
      this.request.base = _edb540bebf4d;
    }
    getHeader(_edb540bebf4d) {
      return Array.isArray(this.headers[_edb540bebf4d]) ? this.headers[_edb540bebf4d][0] : this.headers[_edb540bebf4d];
    }
  }, _f06938416133 = class {
    constructor(_edb540bebf4d, _05341cae28fe, _e97d198337ba = null) {
      this.ultraviolet = _05341cae28fe, this.request = _edb540bebf4d, this.headers = Object.fromEntries(_edb540bebf4d.headers.entries()), 
      this.method = _edb540bebf4d.method, this.body = _e97d198337ba || null, this.cache = _edb540bebf4d.cache, 
      this.redirect = _edb540bebf4d.redirect, this.credentials = "omit", this.mode = _edb540bebf4d.mode === "cors" ? _edb540bebf4d.mode : "same-origin", 
      this.blob = !1;
    }
    get url() {
      return this.ultraviolet.meta.url;
    }
    set url(_edb540bebf4d) {
      this.ultraviolet.meta.url = _edb540bebf4d;
    }
    get base() {
      return this.ultraviolet.meta.base;
    }
    set base(_edb540bebf4d) {
      this.ultraviolet.meta.base = _edb540bebf4d;
    }
  }, _fe6177ab5496 = class {
    #_edb540bebf4d;
    #_05341cae28fe;
    constructor(_edb540bebf4d = {}, _05341cae28fe = null, _e97d198337ba = null) {
      this.#_edb540bebf4d = !1, this.#_05341cae28fe = null, this.data = _edb540bebf4d, 
      this.target = _05341cae28fe, this.that = _e97d198337ba;
    }
    get intercepted() {
      return this.#_edb540bebf4d;
    }
    get returnValue() {
      return this.#_05341cae28fe;
    }
    respondWith(_edb540bebf4d) {
      this.#_05341cae28fe = _edb540bebf4d, this.#_edb540bebf4d = !0;
    }
  };
  function E(_edb540bebf4d, _05341cae28fe) {
    let _e97d198337ba = `\n        errorTrace.value = ${JSON.stringify(_edb540bebf4d)};\n        fetchedURL.textContent = ${JSON.stringify(_05341cae28fe)};\n        for (const node of document.querySelectorAll("#uvHostname")) node.textContent = ${JSON.stringify(location.hostname)};\n        reload.addEventListener("click", () => location.reload());\n        uvVersion.textContent = ${JSON.stringify("3.2.10")};\n        uvBuild.textContent = ${JSON.stringify("92d9075")};\n    `;
    return `<!DOCTYPE html>\n        <html>\n        <head>\n        <meta charset='utf-8' />\n        <title>Error</title>\n        <style>\n        * { background-color: white }\n        </style>\n        </head>\n        <body>\n        <h1 id='errorTitle'>Error processing your request</h1>\n        <hr />\n        <p>Failed to load <b id="fetchedURL"></b></p>\n        <p id="errorMessage">Internal Server Error</p>\n        <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n        <p>Try:</p>\n        <ul>\n        <li>Checking your internet connection</li>\n        <li>Verifying you entered the correct address</li>\n        <li>Clearing the site data</li>\n        <li>Contacting <b id="uvHostname"></b>'s administrator</li>\n        <li>Verify the server isn't censored</li>\n        </ul>\n        <p>If you're the administrator of <b id="uvHostname"></b>, try:</p>\n        <ul>\n        <li>Restarting your server</li>\n        <li>Updating StemConnect</li>\n        <li>Troubleshooting the error on the <a href="https://github.com/titaniumnetwork-dev/StemConnect" target="_blank">GitHub repository</a></li>\n        </ul>\n        <button id="reload">Reload</button>\n        <hr />\n        <p><i>StemConnect v<span id="uvVersion"></span> (build <span id="uvBuild"></span>)</i></p>\n        <script src="${"data:application/javascript," + encodeURIComponent(_e97d198337ba)}"><\/script>\n        </body>\n        </html>\n        `;
  }
  function T(_edb540bebf4d, _05341cae28fe) {
    let _e97d198337ba = {
      "content-type": "text/html"
    };
    return crossOriginIsolated && (_e97d198337ba["Cross-Origin-Embedder-Policy"] = "require-corp"), 
    new Response(E(String(_edb540bebf4d), _05341cae28fe), {
      status: 500,
      headers: _e97d198337ba
    });
  }
})();
