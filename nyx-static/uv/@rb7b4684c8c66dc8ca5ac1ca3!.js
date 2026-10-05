"use strict";

(() => {
  var λb02164fc0833 = self.StemConnect, λa71ce725143e = self.UVClient, λ989a5dfc93e4 = self.__uv$config, λa68065159a0f = self.__uv$cookies;
  if (typeof λa68065159a0f != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λd854400510b1) {
    if ("__uv" in λd854400510b1 && λd854400510b1.__uv instanceof λb02164fc0833) return !1;
    λd854400510b1.document && λd854400510b1.window && λd854400510b1.document.querySelectorAll("script[__uv-script]").forEach(λb02164fc0833 => λb02164fc0833.remove());
    let λ2713634a4ac1 = !λd854400510b1.window, λff3ecfb3f571 = "__uv", λ8d5f895b5c75 = "__uv$", λd13ac07bd1d5 = new λb02164fc0833(λ989a5dfc93e4), λe9dafc49439a;
    λ2713634a4ac1 ? λe9dafc49439a = new λb02164fc0833.BareClient(new Promise(λb02164fc0833 => {
      addEventListener("message", ({data: λa71ce725143e}) => {
        typeof λa71ce725143e == "object" && "__uv$type" in λa71ce725143e && λa71ce725143e.__uv$type === "baremuxinit" && λb02164fc0833(λa71ce725143e.port);
      });
    })) : λe9dafc49439a = new λb02164fc0833.BareClient;
    let λ30f815f97804 = new λa71ce725143e(λd854400510b1, λe9dafc49439a, λ2713634a4ac1), {HTMLMediaElement: λ9f26f69b8624, HTMLScriptElement: λ875b678b1e12, HTMLAudioElement: λ11ba986b9eee, HTMLVideoElement: λ6fb118ec67ff, HTMLInputElement: λfb503ad66af3, HTMLEmbedElement: λc688b24f8a66, HTMLTrackElement: λfd850c23e5e5, HTMLAnchorElement: λ7d64124c98a6, HTMLIFrameElement: λb0abf189887b, HTMLAreaElement: λe0970ea6e0a3, HTMLLinkElement: λ58e4f09388d6, HTMLBaseElement: λ881d9191d111, HTMLFormElement: λ3aa4cbfdcb67, HTMLImageElement: λ50675cd583e5, HTMLSourceElement: λf497b348e003} = λd854400510b1;
    λ30f815f97804.nativeMethods.defineProperty(λd854400510b1, "__uv", {
      value: λd13ac07bd1d5,
      enumerable: !1
    }), λd13ac07bd1d5.meta.origin = location.origin, λd13ac07bd1d5.location = λ30f815f97804.location.emulate(λb02164fc0833 => λb02164fc0833 === "about:srcdoc" ? new URL(λb02164fc0833) : (λb02164fc0833.startsWith("blob:") && (λb02164fc0833 = λb02164fc0833.slice(5)), 
    new URL(λd13ac07bd1d5.sourceUrl(λb02164fc0833))), λb02164fc0833 => λd13ac07bd1d5.rewriteUrl(λb02164fc0833));
    let λ50c275b56570 = λa68065159a0f;
    if (λd13ac07bd1d5.meta.url = λd13ac07bd1d5.location, λd13ac07bd1d5.domain = λd13ac07bd1d5.meta.url.host, 
    λd13ac07bd1d5.blobUrls = new λd854400510b1.Map, λd13ac07bd1d5.referrer = "", λd13ac07bd1d5.cookies = [], 
    λd13ac07bd1d5.localStorageObj = {}, λd13ac07bd1d5.sessionStorageObj = {}, λd13ac07bd1d5.location.href === "about:srcdoc" && (λd13ac07bd1d5.meta = λd854400510b1.parent.__uv.meta), 
    λd854400510b1.EventTarget && (λd13ac07bd1d5.addEventListener = λd854400510b1.EventTarget.prototype.addEventListener, 
    λd13ac07bd1d5.removeListener = λd854400510b1.EventTarget.prototype.removeListener, 
    λd13ac07bd1d5.dispatchEvent = λd854400510b1.EventTarget.prototype.dispatchEvent), 
    λ30f815f97804.nativeMethods.defineProperty(λ30f815f97804.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λ30f815f97804.storage.sessionStorage) return λd13ac07bd1d5.sessionStorageObj;
        if (this === λ30f815f97804.storage.localStorage) return λd13ac07bd1d5.localStorageObj;
      },
      enumerable: !1
    }), λd854400510b1.localStorage) {
      for (let λb02164fc0833 in λd854400510b1.localStorage) λb02164fc0833.startsWith(λ8d5f895b5c75 + λd13ac07bd1d5.location.origin + "@") && (λd13ac07bd1d5.localStorageObj[λb02164fc0833.slice((λ8d5f895b5c75 + λd13ac07bd1d5.location.origin + "@").length)] = λd854400510b1.localStorage.getItem(λb02164fc0833));
      λd13ac07bd1d5.lsWrap = λ30f815f97804.storage.emulate(λ30f815f97804.storage.localStorage, λd13ac07bd1d5.localStorageObj);
    }
    if (λd854400510b1.sessionStorage) {
      for (let λb02164fc0833 in λd854400510b1.sessionStorage) λb02164fc0833.startsWith(λ8d5f895b5c75 + λd13ac07bd1d5.location.origin + "@") && (λd13ac07bd1d5.sessionStorageObj[λb02164fc0833.slice((λ8d5f895b5c75 + λd13ac07bd1d5.location.origin + "@").length)] = λd854400510b1.sessionStorage.getItem(λb02164fc0833));
      λd13ac07bd1d5.ssWrap = λ30f815f97804.storage.emulate(λ30f815f97804.storage.sessionStorage, λd13ac07bd1d5.sessionStorageObj);
    }
    let λ0b60c1859bc8 = λd854400510b1.document ? λ30f815f97804.node.baseURI.get.call(λd854400510b1.document) : λd854400510b1.location.href, λf1b82088824e = λd13ac07bd1d5.sourceUrl(λ0b60c1859bc8);
    λ30f815f97804.nativeMethods.defineProperty(λd13ac07bd1d5.meta, "base", {
      get() {
        return λd854400510b1.document ? (λ30f815f97804.node.baseURI.get.call(λd854400510b1.document) !== λ0b60c1859bc8 && (λ0b60c1859bc8 = λ30f815f97804.node.baseURI.get.call(λd854400510b1.document), 
        λf1b82088824e = λd13ac07bd1d5.sourceUrl(λ0b60c1859bc8)), λf1b82088824e) : λd13ac07bd1d5.meta.url.href;
      }
    }), λd13ac07bd1d5.methods = {
      setSource: λ8d5f895b5c75 + "setSource",
      source: λ8d5f895b5c75 + "source",
      location: λ8d5f895b5c75 + "location",
      function: λ8d5f895b5c75 + "function",
      string: λ8d5f895b5c75 + "string",
      eval: λ8d5f895b5c75 + "eval",
      parent: λ8d5f895b5c75 + "parent",
      top: λ8d5f895b5c75 + "top"
    }, λd13ac07bd1d5.filterKeys = [ λff3ecfb3f571, λd13ac07bd1d5.methods.setSource, λd13ac07bd1d5.methods.source, λd13ac07bd1d5.methods.location, λd13ac07bd1d5.methods.function, λd13ac07bd1d5.methods.string, λd13ac07bd1d5.methods.eval, λd13ac07bd1d5.methods.parent, λd13ac07bd1d5.methods.top, λ8d5f895b5c75 + "protocol", λ8d5f895b5c75 + "storageObj", λ8d5f895b5c75 + "url", λ8d5f895b5c75 + "modifiedStyle", λ8d5f895b5c75 + "config", λ8d5f895b5c75 + "dispatched", "StemConnect", "__uvHook" ], 
    λ30f815f97804.on("wrap", (λb02164fc0833, λa71ce725143e) => {
      λ30f815f97804.nativeMethods.defineProperty(λa71ce725143e, "name", λ30f815f97804.nativeMethods.getOwnPropertyDescriptor(λb02164fc0833, "name")), 
      λ30f815f97804.nativeMethods.defineProperty(λa71ce725143e, "length", λ30f815f97804.nativeMethods.getOwnPropertyDescriptor(λb02164fc0833, "length")), 
      λ30f815f97804.nativeMethods.defineProperty(λa71ce725143e, λd13ac07bd1d5.methods.string, {
        enumerable: !1,
        value: λ30f815f97804.nativeMethods.fnToString.call(λb02164fc0833)
      }), λ30f815f97804.nativeMethods.defineProperty(λa71ce725143e, λd13ac07bd1d5.methods.function, {
        enumerable: !1,
        value: λb02164fc0833
      });
    }), λ30f815f97804.fetch.on("request", λb02164fc0833 => {
      λb02164fc0833.data.input = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.input);
    }), λ30f815f97804.fetch.on("requestUrl", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.sourceUrl(λb02164fc0833.data.value);
    }), λ30f815f97804.fetch.on("responseUrl", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.sourceUrl(λb02164fc0833.data.value);
    }), λ30f815f97804.xhr.on("open", λb02164fc0833 => {
      λb02164fc0833.data.input = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.input);
    }), λ30f815f97804.xhr.on("responseUrl", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.sourceUrl(λb02164fc0833.data.value);
    }), λ30f815f97804.workers.on("worker", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.workers.on("addModule", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.workers.on("importScripts", λb02164fc0833 => {
      for (let λa71ce725143e in λb02164fc0833.data.scripts) λb02164fc0833.data.scripts[λa71ce725143e] = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.scripts[λa71ce725143e]);
    }), λ30f815f97804.workers.on("postMessage", λb02164fc0833 => {
      let λa71ce725143e = λb02164fc0833.data.origin;
      λb02164fc0833.data.origin = "*", λb02164fc0833.data.message = {
        __data: λb02164fc0833.data.message,
        __origin: λd13ac07bd1d5.meta.url.origin,
        __to: λa71ce725143e
      };
    }), λ30f815f97804.navigator.on("sendBeacon", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.document.on("getCookie", λb02164fc0833 => {
      λb02164fc0833.data.value = λ50c275b56570;
    }), λ30f815f97804.document.on("setCookie", λb02164fc0833 => {
      λd13ac07bd1d5.cookie.db().then(λa71ce725143e => {
        λd13ac07bd1d5.cookie.setCookies(λb02164fc0833.data.value, λa71ce725143e, λd13ac07bd1d5.meta), 
        λd13ac07bd1d5.cookie.getCookies(λa71ce725143e).then(λb02164fc0833 => {
          λ50c275b56570 = λd13ac07bd1d5.cookie.serialize(λb02164fc0833, λd13ac07bd1d5.meta, !0);
        });
      });
      let λa71ce725143e = λd13ac07bd1d5.cookie.setCookie(λb02164fc0833.data.value)[0];
      λa71ce725143e.path || (λa71ce725143e.path = "/"), λa71ce725143e.domain || (λa71ce725143e.domain = λd13ac07bd1d5.meta.url.hostname), 
      λd13ac07bd1d5.cookie.validateCookie(λa71ce725143e, λd13ac07bd1d5.meta, !0) && (λ50c275b56570.length && (λ50c275b56570 += "; "), 
      λ50c275b56570 += `${λa71ce725143e.name}=${λa71ce725143e.value}`), λb02164fc0833.respondWith(λb02164fc0833.data.value);
    }), λ30f815f97804.element.on("setInnerHTML", λb02164fc0833 => {
      switch (λb02164fc0833.that.tagName) {
       case "SCRIPT":
        λb02164fc0833.data.value = λd13ac07bd1d5.js.rewrite(λb02164fc0833.data.value);
        break;

       case "STYLE":
        λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value);
        break;

       default:
        λb02164fc0833.data.value = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.value);
      }
    }), λ30f815f97804.element.on("getInnerHTML", λb02164fc0833 => {
      switch (λb02164fc0833.that.tagName) {
       case "SCRIPT":
        λb02164fc0833.data.value = λd13ac07bd1d5.js.source(λb02164fc0833.data.value);
        break;

       case "STYLE":
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceCSS(λb02164fc0833.data.value);
        break;

       default:
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceHtml(λb02164fc0833.data.value);
      }
    }), λ30f815f97804.element.on("setOuterHTML", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.value, {
        document: λb02164fc0833.that.tagName === "HTML"
      });
    }), λ30f815f97804.element.on("getOuterHTML", λb02164fc0833 => {
      switch (λb02164fc0833.that.tagName) {
       case "HEAD":
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceHtml(λb02164fc0833.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceHtml(λb02164fc0833.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceHtml(λb02164fc0833.data.value, {
          document: λb02164fc0833.that.tagName === "HTML"
        });
        break;
      }
    }), λ30f815f97804.document.on("write", λb02164fc0833 => {
      if (!λb02164fc0833.data.html.length) return !1;
      λb02164fc0833.data.html = [ λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.html.join("")) ];
    }), λ30f815f97804.document.on("writeln", λb02164fc0833 => {
      if (!λb02164fc0833.data.html.length) return !1;
      λb02164fc0833.data.html = [ λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.html.join("")) ];
    }), λ30f815f97804.element.on("insertAdjacentHTML", λb02164fc0833 => {
      λb02164fc0833.data.html = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.html);
    }), λ30f815f97804.eventSource.on("construct", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.eventSource.on("url", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.idb.on("idbFactoryOpen", λb02164fc0833 => {
      λb02164fc0833.data.name !== "__op" && (λb02164fc0833.data.name = `${λd13ac07bd1d5.meta.url.origin}@${λb02164fc0833.data.name}`);
    }), λ30f815f97804.idb.on("idbFactoryName", λb02164fc0833 => {
      λb02164fc0833.data.value = λb02164fc0833.data.value.slice(λd13ac07bd1d5.meta.url.origin.length + 1);
    }), λ30f815f97804.history.on("replaceState", λb02164fc0833 => {
      λb02164fc0833.data.url && (λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url, "__uv" in λb02164fc0833.that ? λb02164fc0833.that.__uv.meta : λd13ac07bd1d5.meta));
    }), λ30f815f97804.history.on("pushState", λb02164fc0833 => {
      λb02164fc0833.data.url && (λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url, "__uv" in λb02164fc0833.that ? λb02164fc0833.that.__uv.meta : λd13ac07bd1d5.meta));
    }), λ30f815f97804.element.on("getAttribute", λb02164fc0833 => {
      λ30f815f97804.element.hasAttribute.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name) && λb02164fc0833.respondWith(λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name));
    }), λ30f815f97804.message.on("postMessage", λb02164fc0833 => {
      let λa71ce725143e = λb02164fc0833.data.origin, λ989a5dfc93e4 = λd13ac07bd1d5.call;
      λb02164fc0833.that && (λ989a5dfc93e4 = λb02164fc0833.that.__uv$source.call), λb02164fc0833.data.origin = "*", 
      λb02164fc0833.data.message = {
        __data: λb02164fc0833.data.message,
        __origin: (λb02164fc0833.that || λb02164fc0833.target).__uv$source.location.origin,
        __to: λa71ce725143e
      }, (() => {
        let λa71ce725143e = λb02164fc0833.data.transfer || [];
        try {
          const λ989a5dfc93e4 = new Set(λa71ce725143e);
          const λa68065159a0f = new Set;
          const a = λb02164fc0833 => {
            if (!λb02164fc0833 || typeof λb02164fc0833 != "object" || λa68065159a0f.has(λb02164fc0833)) return;
            λa68065159a0f.add(λb02164fc0833);
            let λa71ce725143e = "";
            try {
              λa71ce725143e = Object.prototype.toString.call(λb02164fc0833);
            } catch {}
            if (typeof MessagePort != "undefined" && λb02164fc0833 instanceof MessagePort || λa71ce725143e === "[object MessagePort]") {
              λ989a5dfc93e4.add(λb02164fc0833);
              return;
            }
            if (Array.isArray(λb02164fc0833)) {
              for (const λa71ce725143e of λb02164fc0833) a(λa71ce725143e);
              return;
            }
            for (const λa71ce725143e of Object.values(λb02164fc0833)) a(λa71ce725143e);
          };
          a(λb02164fc0833.data.message);
          λa71ce725143e = [ ...λ989a5dfc93e4 ];
        } catch {}
        return λb02164fc0833.respondWith(λ2713634a4ac1 ? λ989a5dfc93e4(λb02164fc0833.target, [ λb02164fc0833.data.message, λa71ce725143e ], λb02164fc0833.that) : λ989a5dfc93e4(λb02164fc0833.target, [ λb02164fc0833.data.message, λb02164fc0833.data.origin, λa71ce725143e ], λb02164fc0833.that));
      })();
    }), λ30f815f97804.message.on("data", λb02164fc0833 => {
      let {value: λa71ce725143e} = λb02164fc0833.data;
      typeof λa71ce725143e == "object" && "__data" in λa71ce725143e && "__origin" in λa71ce725143e && λb02164fc0833.respondWith(λa71ce725143e.__data);
    }), λ30f815f97804.message.on("origin", λb02164fc0833 => {
      let λa71ce725143e = λ30f815f97804.message.messageData.get.call(λb02164fc0833.that);
      typeof λa71ce725143e == "object" && λa71ce725143e.__data && λa71ce725143e.__origin && λb02164fc0833.respondWith(λa71ce725143e.__origin);
    }), λ30f815f97804.overrideDescriptor(λd854400510b1, "origin", {
      get: () => λd13ac07bd1d5.location.origin
    }), λ30f815f97804.node.on("baseURI", λb02164fc0833 => {
      λb02164fc0833.data.value.startsWith(λd854400510b1.location.origin) && (λb02164fc0833.data.value = λd13ac07bd1d5.sourceUrl(λb02164fc0833.data.value));
    }), λ30f815f97804.element.on("setAttribute", λb02164fc0833 => {
      if (λb02164fc0833.that instanceof λ9f26f69b8624 && λb02164fc0833.data.name === "src" && λb02164fc0833.data.value.startsWith("blob:")) {
        λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
        λb02164fc0833.data.value = λd13ac07bd1d5.blobUrls.get(λb02164fc0833.data.value);
        return;
      }
      λd13ac07bd1d5.attrs.isUrl(λb02164fc0833.data.name) && (λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.value)), 
      λd13ac07bd1d5.attrs.isStyle(λb02164fc0833.data.name) && (λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value, {
        context: "declarationList"
      })), λd13ac07bd1d5.attrs.isHtml(λb02164fc0833.data.name) && (λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.value, {
        ...λd13ac07bd1d5.meta,
        document: !0,
        injectHead: λd13ac07bd1d5.createHtmlInject(λd13ac07bd1d5.handlerScript, λd13ac07bd1d5.bundleScript, λd13ac07bd1d5.clientScript, λd13ac07bd1d5.configScript, λ50c275b56570, λd854400510b1.location.href)
      })), λd13ac07bd1d5.attrs.isSrcset(λb02164fc0833.data.name) && (λb02164fc0833.target.call(λb02164fc0833.that, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.html.wrapSrcset(λb02164fc0833.data.value.toString())), 
      λd13ac07bd1d5.attrs.isForbidden(λb02164fc0833.data.name) && (λb02164fc0833.data.name = λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name);
    }), λ30f815f97804.element.on("audio", λb02164fc0833 => {
      λb02164fc0833.data.url = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.url);
    }), λ30f815f97804.element.hookProperty([ λ7d64124c98a6, λe0970ea6e0a3, λ58e4f09388d6, λ881d9191d111 ], "href", {
      get: (λb02164fc0833, λa71ce725143e) => λd13ac07bd1d5.sourceUrl(λb02164fc0833.call(λa71ce725143e)),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-href", λ989a5dfc93e4), 
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.rewriteUrl(λ989a5dfc93e4));
      }
    }), λ30f815f97804.element.hookProperty([ λ875b678b1e12, λ11ba986b9eee, λ6fb118ec67ff, λ9f26f69b8624, λ50675cd583e5, λfb503ad66af3, λc688b24f8a66, λb0abf189887b, λfd850c23e5e5, λf497b348e003 ], "src", {
      get: (λb02164fc0833, λa71ce725143e) => λd13ac07bd1d5.sourceUrl(λb02164fc0833.call(λa71ce725143e)),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        if (new String(λ989a5dfc93e4).toString().trim().startsWith("blob:") && λa71ce725143e instanceof λ9f26f69b8624) return λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-src", λ989a5dfc93e4), 
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.blobUrls.get(λ989a5dfc93e4) || λ989a5dfc93e4);
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-src", λ989a5dfc93e4), 
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.rewriteUrl(λ989a5dfc93e4));
      }
    }), λ30f815f97804.element.hookProperty([ λ3aa4cbfdcb67 ], "action", {
      get: (λb02164fc0833, λa71ce725143e) => λd13ac07bd1d5.sourceUrl(λb02164fc0833.call(λa71ce725143e)),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-action", λ989a5dfc93e4), 
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.rewriteUrl(λ989a5dfc93e4));
      }
    }), λ30f815f97804.element.hookProperty([ λ50675cd583e5, λf497b348e003 ], "srcset", {
      get: (λb02164fc0833, λa71ce725143e) => λ30f815f97804.element.getAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-srcset") || λb02164fc0833.call(λa71ce725143e),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-srcset", λ989a5dfc93e4), 
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.html.wrapSrcset(λ989a5dfc93e4.toString()));
      }
    }), λ30f815f97804.element.hookProperty(λ875b678b1e12, "integrity", {
      get: (λb02164fc0833, λa71ce725143e) => λ30f815f97804.element.getAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-integrity"),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-integrity", λ989a5dfc93e4);
      }
    }), λ30f815f97804.element.hookProperty(λb0abf189887b, "sandbox", {
      get: (λb02164fc0833, λa71ce725143e) => λ30f815f97804.element.getAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-sandbox") || λb02164fc0833.call(λa71ce725143e),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λ30f815f97804.element.setAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-sandbox", λ989a5dfc93e4);
      }
    });
    let λ0419b1cff82a = λb0abf189887b && Object.getOwnPropertyDescriptor(λb0abf189887b.prototype, "contentWindow").get;
    function U(λb02164fc0833) {
      let λa71ce725143e = λ0419b1cff82a.call(λb02164fc0833);
      if (!λa71ce725143e.__uv) try {
        p(λa71ce725143e);
      } catch (λb02164fc0833) {
        console.error("catastrophic failure"), console.error(λb02164fc0833);
      }
    }
    if (λ30f815f97804.element.hookProperty(λb0abf189887b, "contentWindow", {
      get: (λb02164fc0833, λa71ce725143e) => (U(λa71ce725143e), λb02164fc0833.call(λa71ce725143e))
    }), λ30f815f97804.element.hookProperty(λb0abf189887b, "contentDocument", {
      get: (λb02164fc0833, λa71ce725143e) => (U(λa71ce725143e), λb02164fc0833.call(λa71ce725143e))
    }), λ30f815f97804.element.hookProperty(λb0abf189887b, "srcdoc", {
      get: (λb02164fc0833, λa71ce725143e) => λ30f815f97804.element.getAttribute.call(λa71ce725143e, λd13ac07bd1d5.attributePrefix + "-attr-srcdoc") || λb02164fc0833.call(λa71ce725143e),
      set: (λb02164fc0833, λa71ce725143e, [λ989a5dfc93e4]) => {
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.rewriteHtml(λ989a5dfc93e4, {
          document: !0,
          injectHead: λd13ac07bd1d5.createHtmlInject(λd13ac07bd1d5.handlerScript, λd13ac07bd1d5.bundleScript, λd13ac07bd1d5.clientScript, λd13ac07bd1d5.configScript, λ50c275b56570, λd854400510b1.location.href)
        }));
      }
    }), λ30f815f97804.node.on("getTextContent", λb02164fc0833 => {
      switch (λb02164fc0833.that.tagName) {
       case "SCRIPT":
        λb02164fc0833.data.value = λd13ac07bd1d5.js.source(λb02164fc0833.data.value);
        break;

       case "STYLE":
        λb02164fc0833.data.value = λd13ac07bd1d5.sourceCSS(λb02164fc0833.data.value);
        break;

       default:
      }
    }), λ30f815f97804.node.on("setTextContent", λb02164fc0833 => {
      switch (λb02164fc0833.that.tagName) {
       case "SCRIPT":
        λb02164fc0833.data.value = λd13ac07bd1d5.js.rewrite(λb02164fc0833.data.value);
        break;

       case "STYLE":
        λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λd854400510b1.navigator && delete λd854400510b1.Navigator.prototype.serviceWorker, 
    λ30f815f97804.document.on("getDomain", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.domain;
    }), λ30f815f97804.document.on("setDomain", λb02164fc0833 => {
      if (!λb02164fc0833.data.value.toString().endsWith(λd13ac07bd1d5.meta.url.hostname.split(".").slice(-2).join("."))) return λb02164fc0833.respondWith("");
      λb02164fc0833.respondWith(λd13ac07bd1d5.domain = λb02164fc0833.data.value);
    }), λ30f815f97804.document.on("url", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.location.href;
    }), λ30f815f97804.document.on("documentURI", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.location.href;
    }), λ30f815f97804.document.on("referrer", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.referrer || λd13ac07bd1d5.sourceUrl(λb02164fc0833.data.value);
    }), λ30f815f97804.document.on("parseFromString", λb02164fc0833 => {
      if (λb02164fc0833.data.type !== "text/html") return !1;
      λb02164fc0833.data.string = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.string, {
        ...λd13ac07bd1d5.meta,
        document: !0
      });
    }), λ30f815f97804.attribute.on("getValue", λb02164fc0833 => {
      λ30f815f97804.element.hasAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name) && (λb02164fc0833.data.value = λ30f815f97804.element.getAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name));
    }), λ30f815f97804.attribute.on("setValue", λb02164fc0833 => {
      λd13ac07bd1d5.attrs.isUrl(λb02164fc0833.data.name) && (λ30f815f97804.element.setAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteUrl(λb02164fc0833.data.value)), 
      λd13ac07bd1d5.attrs.isStyle(λb02164fc0833.data.name) && (λ30f815f97804.element.setAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value, {
        context: "declarationList"
      })), λd13ac07bd1d5.attrs.isHtml(λb02164fc0833.data.name) && (λ30f815f97804.element.setAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteHtml(λb02164fc0833.data.value, {
        ...λd13ac07bd1d5.meta,
        document: !0,
        injectHead: λd13ac07bd1d5.createHtmlInject(λd13ac07bd1d5.handlerScript, λd13ac07bd1d5.bundleScript, λd13ac07bd1d5.clientScript, λd13ac07bd1d5.configScript, λ50c275b56570, λd854400510b1.location.href)
      })), λd13ac07bd1d5.attrs.isSrcset(λb02164fc0833.data.name) && (λ30f815f97804.element.setAttribute.call(λb02164fc0833.that.ownerElement, λd13ac07bd1d5.attributePrefix + "-attr-" + λb02164fc0833.data.name, λb02164fc0833.data.value), 
      λb02164fc0833.data.value = λd13ac07bd1d5.html.wrapSrcset(λb02164fc0833.data.value.toString()));
    }), λ30f815f97804.url.on("createObjectURL", λb02164fc0833 => {
      let λa71ce725143e = λb02164fc0833.target.call(λb02164fc0833.that, λb02164fc0833.data.object);
      if (λa71ce725143e.startsWith("blob:" + location.origin)) {
        let λ989a5dfc93e4 = "blob:" + (λd13ac07bd1d5.meta.url.href !== "about:blank" ? λd13ac07bd1d5.meta.url.origin : λd854400510b1.parent.__uv.meta.url.origin) + λa71ce725143e.slice(5 + location.origin.length);
        λd13ac07bd1d5.blobUrls.set(λ989a5dfc93e4, λa71ce725143e), λb02164fc0833.respondWith(λ989a5dfc93e4);
      } else λb02164fc0833.respondWith(λa71ce725143e);
    }), λ30f815f97804.url.on("revokeObjectURL", λb02164fc0833 => {
      if (λd13ac07bd1d5.blobUrls.has(λb02164fc0833.data.url)) {
        let λa71ce725143e = λb02164fc0833.data.url;
        λb02164fc0833.data.url = λd13ac07bd1d5.blobUrls.get(λb02164fc0833.data.url), λd13ac07bd1d5.blobUrls.delete(λa71ce725143e);
      }
    }), λ30f815f97804.storage.on("get", λb02164fc0833 => {
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("set", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && (λb02164fc0833.that.__uv$storageObj[λb02164fc0833.data.name] = λb02164fc0833.data.value), 
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("delete", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && delete λb02164fc0833.that.__uv$storageObj[λb02164fc0833.data.name], 
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("getItem", λb02164fc0833 => {
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("setItem", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && (λb02164fc0833.that.__uv$storageObj[λb02164fc0833.data.name] = λb02164fc0833.data.value), 
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("removeItem", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && delete λb02164fc0833.that.__uv$storageObj[λb02164fc0833.data.name], 
      λb02164fc0833.data.name = λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λb02164fc0833.data.name;
    }), λ30f815f97804.storage.on("clear", λb02164fc0833 => {
      if (λb02164fc0833.that.__uv$storageObj) for (let λa71ce725143e of λ30f815f97804.nativeMethods.keys.call(null, λb02164fc0833.that.__uv$storageObj)) delete λb02164fc0833.that.__uv$storageObj[λa71ce725143e], 
      λ30f815f97804.storage.removeItem.call(λb02164fc0833.that, λ8d5f895b5c75 + λd13ac07bd1d5.meta.url.origin + "@" + λa71ce725143e), 
      λb02164fc0833.respondWith();
    }), λ30f815f97804.storage.on("length", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && λb02164fc0833.respondWith(λ30f815f97804.nativeMethods.keys.call(null, λb02164fc0833.that.__uv$storageObj).length);
    }), λ30f815f97804.storage.on("key", λb02164fc0833 => {
      λb02164fc0833.that.__uv$storageObj && λb02164fc0833.respondWith(λ30f815f97804.nativeMethods.keys.call(null, λb02164fc0833.that.__uv$storageObj)[λb02164fc0833.data.index] || null);
    }), λ30f815f97804.function.on("function", λb02164fc0833 => {
      λb02164fc0833.data.script = λd13ac07bd1d5.rewriteJS(λb02164fc0833.data.script);
    }), λ30f815f97804.function.on("toString", λb02164fc0833 => {
      λd13ac07bd1d5.methods.string in λb02164fc0833.that && λb02164fc0833.respondWith(λb02164fc0833.that[λd13ac07bd1d5.methods.string]);
    }), λ30f815f97804.object.on("getOwnPropertyNames", λb02164fc0833 => {
      λb02164fc0833.data.names = λb02164fc0833.data.names.filter(λb02164fc0833 => !λd13ac07bd1d5.filterKeys.includes(λb02164fc0833));
    }), λ30f815f97804.object.on("getOwnPropertyDescriptors", λb02164fc0833 => {
      for (let λa71ce725143e of λd13ac07bd1d5.filterKeys) delete λb02164fc0833.data.descriptors[λa71ce725143e];
    }), λ30f815f97804.style.on("setProperty", λb02164fc0833 => {
      λ30f815f97804.style.dashedUrlProps.includes(λb02164fc0833.data.property) && (λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value, {
        context: "value",
        ...λd13ac07bd1d5.meta
      }));
    }), λ30f815f97804.style.on("getPropertyValue", λb02164fc0833 => {
      λ30f815f97804.style.dashedUrlProps.includes(λb02164fc0833.data.property) && λb02164fc0833.respondWith(λd13ac07bd1d5.sourceCSS(λb02164fc0833.target.call(λb02164fc0833.that, λb02164fc0833.data.property), {
        context: "value",
        ...λd13ac07bd1d5.meta
      }));
    }), "CSS2Properties" in λd854400510b1) for (let λb02164fc0833 of λ30f815f97804.style.urlProps) λ30f815f97804.overrideDescriptor(λd854400510b1.CSS2Properties.prototype, λb02164fc0833, {
      get: (λb02164fc0833, λa71ce725143e) => λd13ac07bd1d5.sourceCSS(λb02164fc0833.call(λa71ce725143e), {
        context: "value",
        ...λd13ac07bd1d5.meta
      }),
      set: (λb02164fc0833, λa71ce725143e, λ989a5dfc93e4) => {
        λb02164fc0833.call(λa71ce725143e, λd13ac07bd1d5.rewriteCSS(λ989a5dfc93e4, {
          context: "value",
          ...λd13ac07bd1d5.meta
        }));
      }
    }); else "HTMLElement" in λd854400510b1 && λ30f815f97804.overrideDescriptor(λd854400510b1.HTMLElement.prototype, "style", {
      get: (λb02164fc0833, λa71ce725143e) => {
        let λ989a5dfc93e4 = λb02164fc0833.call(λa71ce725143e);
        if (!λ989a5dfc93e4[λ8d5f895b5c75 + "modifiedStyle"]) for (let λb02164fc0833 of λ30f815f97804.style.urlProps) λ30f815f97804.nativeMethods.defineProperty(λ989a5dfc93e4, λb02164fc0833, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λa71ce725143e = λ30f815f97804.style.getPropertyValue.call(this, λb02164fc0833) || "";
            return λd13ac07bd1d5.sourceCSS(λa71ce725143e, {
              context: "value",
              ...λd13ac07bd1d5.meta
            });
          },
          set(λa71ce725143e) {
            λ30f815f97804.style.setProperty.call(this, λ30f815f97804.style.propToDashed[λb02164fc0833] || λb02164fc0833, λd13ac07bd1d5.rewriteCSS(λa71ce725143e, {
              context: "value",
              ...λd13ac07bd1d5.meta
            }));
          }
        }), λ30f815f97804.nativeMethods.defineProperty(λ989a5dfc93e4, λ8d5f895b5c75 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ989a5dfc93e4;
      }
    });
    λ30f815f97804.style.on("setCssText", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.rewriteCSS(λb02164fc0833.data.value, {
        context: "declarationList",
        ...λd13ac07bd1d5.meta
      });
    }), λ30f815f97804.style.on("getCssText", λb02164fc0833 => {
      λb02164fc0833.data.value = λd13ac07bd1d5.sourceCSS(λb02164fc0833.data.value, {
        context: "declarationList",
        ...λd13ac07bd1d5.meta
      });
    }), λd13ac07bd1d5.addEventListener.call(λd854400510b1, "hashchange", λb02164fc0833 => {
      if (λb02164fc0833.__uv$dispatched) return !1;
      λb02164fc0833.stopImmediatePropagation();
      let λa71ce725143e = λd854400510b1.location.hash;
      λ30f815f97804.history.replaceState.call(λd854400510b1.history, "", "", λb02164fc0833.oldURL), 
      λd13ac07bd1d5.location.hash = λa71ce725143e;
    }), λ30f815f97804.location.on("hashchange", (λb02164fc0833, λa71ce725143e, λ989a5dfc93e4) => {
      if (λ989a5dfc93e4.HashChangeEvent && λ30f815f97804.history.replaceState) {
        λ30f815f97804.history.replaceState.call(λd854400510b1.history, "", "", λd13ac07bd1d5.rewriteUrl(λa71ce725143e));
        let λa68065159a0f = new λ989a5dfc93e4.HashChangeEvent("hashchange", {
          newURL: λa71ce725143e,
          oldURL: λb02164fc0833
        });
        λ30f815f97804.nativeMethods.defineProperty(λa68065159a0f, λ8d5f895b5c75 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λd13ac07bd1d5.dispatchEvent.call(λd854400510b1, λa68065159a0f);
      }
    }), λ30f815f97804.fetch.overrideRequest(), λ30f815f97804.fetch.overrideUrl(), λ30f815f97804.xhr.overrideOpen(), 
    λ30f815f97804.xhr.overrideResponseUrl(), λ30f815f97804.element.overrideHtml(), λ30f815f97804.element.overrideAttribute(), 
    λ30f815f97804.element.overrideInsertAdjacentHTML(), λ30f815f97804.element.overrideAudio(), 
    λ30f815f97804.node.overrideBaseURI(), λ30f815f97804.node.overrideTextContent(), 
    λ30f815f97804.attribute.overrideNameValue(), λ30f815f97804.document.overrideDomain(), 
    λ30f815f97804.document.overrideURL(), λ30f815f97804.document.overrideDocumentURI(), 
    λ30f815f97804.document.overrideWrite(), λ30f815f97804.document.overrideReferrer(), 
    λ30f815f97804.document.overrideParseFromString(), λ30f815f97804.storage.overrideMethods(), 
    λ30f815f97804.storage.overrideLength(), λ30f815f97804.object.overrideGetPropertyNames(), 
    λ30f815f97804.object.overrideGetOwnPropertyDescriptors(), λ30f815f97804.idb.overrideName(), 
    λ30f815f97804.idb.overrideOpen(), λ30f815f97804.history.overridePushState(), λ30f815f97804.history.overrideReplaceState(), 
    λ30f815f97804.eventSource.overrideConstruct(), λ30f815f97804.eventSource.overrideUrl(), 
    λ30f815f97804.websocket.overrideWebSocket(λe9dafc49439a), λ30f815f97804.url.overrideObjectURL(), 
    λ30f815f97804.document.overrideCookie(), λ30f815f97804.message.overridePostMessage(), 
    λ30f815f97804.message.overrideMessageOrigin(), λ30f815f97804.message.overrideMessageData(), 
    λ30f815f97804.workers.overrideWorker(), λ30f815f97804.workers.overrideAddModule(), 
    λ30f815f97804.workers.overrideImportScripts(), λ30f815f97804.workers.overridePostMessage(), 
    λ30f815f97804.style.overrideSetGetProperty(), λ30f815f97804.style.overrideCssText(), 
    λ30f815f97804.navigator.overrideSendBeacon(), λ30f815f97804.function.overrideFunction(), 
    λ30f815f97804.function.overrideToString(), λ30f815f97804.location.overrideWorkerLocation(λb02164fc0833 => new URL(λd13ac07bd1d5.sourceUrl(λb02164fc0833))), 
    λ30f815f97804.overrideDescriptor(λd854400510b1, "localStorage", {
      get: (λb02164fc0833, λa71ce725143e) => (λa71ce725143e || λd854400510b1).__uv.lsWrap
    }), λ30f815f97804.overrideDescriptor(λd854400510b1, "sessionStorage", {
      get: (λb02164fc0833, λa71ce725143e) => (λa71ce725143e || λd854400510b1).__uv.ssWrap
    }), λ30f815f97804.override(λd854400510b1, "open", (λb02164fc0833, λa71ce725143e, λ989a5dfc93e4) => {
      if (!λ989a5dfc93e4.length) return λb02164fc0833.apply(λa71ce725143e, λ989a5dfc93e4);
      let [λa68065159a0f] = λ989a5dfc93e4;
      return λa68065159a0f = λd13ac07bd1d5.rewriteUrl(λa68065159a0f), λb02164fc0833.call(λa71ce725143e, λa68065159a0f);
    }), λd13ac07bd1d5.$wrap = function(λb02164fc0833) {
      return λb02164fc0833 === "location" ? λd13ac07bd1d5.methods.location : λb02164fc0833 === "eval" ? λd13ac07bd1d5.methods.eval : λb02164fc0833;
    }, λd13ac07bd1d5.$get = function(λb02164fc0833) {
      return λb02164fc0833 === λd854400510b1.location ? λd13ac07bd1d5.location : λb02164fc0833 === λd854400510b1.eval ? λd13ac07bd1d5.eval : λb02164fc0833 === λd854400510b1.parent ? λd854400510b1.__uv$parent : λb02164fc0833 === λd854400510b1.top ? λd854400510b1.__uv$top : λb02164fc0833;
    }, λd13ac07bd1d5.eval = λ30f815f97804.wrap(λd854400510b1, "eval", (λb02164fc0833, λa71ce725143e, λ989a5dfc93e4) => {
      if (!λ989a5dfc93e4.length || typeof λ989a5dfc93e4[0] != "string") return λb02164fc0833.apply(λa71ce725143e, λ989a5dfc93e4);
      let [λa68065159a0f] = λ989a5dfc93e4;
      return λa68065159a0f = λd13ac07bd1d5.rewriteJS(λa68065159a0f), λb02164fc0833.call(λa71ce725143e, λa68065159a0f);
    }), λd13ac07bd1d5.call = function(λb02164fc0833, λa71ce725143e, λ989a5dfc93e4) {
      return λ989a5dfc93e4 ? λb02164fc0833.apply(λ989a5dfc93e4, λa71ce725143e) : λb02164fc0833(...λa71ce725143e);
    }, λd13ac07bd1d5.call$ = function(λb02164fc0833, λa71ce725143e, λ989a5dfc93e4 = []) {
      return λb02164fc0833[λa71ce725143e].apply(λb02164fc0833, λ989a5dfc93e4);
    }, λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λff3ecfb3f571, {
      get: () => λd13ac07bd1d5,
      enumerable: !1
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.setSource, {
      value: function(λb02164fc0833) {
        return λ30f815f97804.nativeMethods.isExtensible(this) ? (λ30f815f97804.nativeMethods.defineProperty(this, λd13ac07bd1d5.methods.source, {
          value: λb02164fc0833,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.source, {
      value: λd13ac07bd1d5,
      writable: !0,
      enumerable: !1
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.location, {
      configurable: !0,
      get() {
        return this === λd854400510b1.document || this === λd854400510b1 ? λd13ac07bd1d5.location : this.location;
      },
      set(λb02164fc0833) {
        this === λd854400510b1.document || this === λd854400510b1 ? λd13ac07bd1d5.location.href = λb02164fc0833 : this.location = λb02164fc0833;
      }
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.parent, {
      configurable: !0,
      get() {
        let λb02164fc0833 = this.parent;
        if (this === λd854400510b1) try {
          return "__uv" in λb02164fc0833 ? λb02164fc0833 : this;
        } catch {
          return this;
        }
        return λb02164fc0833;
      },
      set(λb02164fc0833) {
        this.parent = λb02164fc0833;
      }
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.top, {
      configurable: !0,
      get() {
        let λb02164fc0833 = this.top;
        if (this === λd854400510b1) {
          if (λb02164fc0833 === this.parent) return this[λd13ac07bd1d5.methods.parent];
          try {
            if ("__uv" in λb02164fc0833) return λb02164fc0833;
            {
              let λa71ce725143e = this;
              for (;λa71ce725143e.parent !== λb02164fc0833; ) λa71ce725143e = λa71ce725143e.parent;
              return "__uv" in λa71ce725143e ? λa71ce725143e : this;
            }
          } catch {
            return this;
          }
        }
        return λb02164fc0833;
      },
      set(λb02164fc0833) {
        this.top = λb02164fc0833;
      }
    }), λ30f815f97804.nativeMethods.defineProperty(λd854400510b1.Object.prototype, λd13ac07bd1d5.methods.eval, {
      configurable: !0,
      get() {
        return this === λd854400510b1 ? λd13ac07bd1d5.eval : this.eval;
      },
      set(λb02164fc0833) {
        this.eval = λb02164fc0833;
      }
    });
  }
})();
