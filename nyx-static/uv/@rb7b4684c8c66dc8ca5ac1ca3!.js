"use strict";

(() => {
  var λe3147839ed2c = self.StemConnect, λ8091715950cf = self.UVClient, λ830ecc0be98e = self.__uv$config, λea56612f5398 = self.__uv$cookies;
  if (typeof λea56612f5398 != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λa9c5879b3146) {
    if ("__uv" in λa9c5879b3146 && λa9c5879b3146.__uv instanceof λe3147839ed2c) return !1;
    λa9c5879b3146.document && λa9c5879b3146.window && λa9c5879b3146.document.querySelectorAll("script[__uv-script]").forEach(λe3147839ed2c => λe3147839ed2c.remove());
    let λ750950f6a19f = !λa9c5879b3146.window, λ96d2e88fa2fc = "__uv", λ11a6a6f680f4 = "__uv$", λ252b5ba9c7c3 = new λe3147839ed2c(λ830ecc0be98e), λb55bf35cb85d;
    λ750950f6a19f ? λb55bf35cb85d = new λe3147839ed2c.BareClient(new Promise(λe3147839ed2c => {
      addEventListener("message", ({data: λ8091715950cf}) => {
        typeof λ8091715950cf == "object" && "__uv$type" in λ8091715950cf && λ8091715950cf.__uv$type === "baremuxinit" && λe3147839ed2c(λ8091715950cf.port);
      });
    })) : λb55bf35cb85d = new λe3147839ed2c.BareClient;
    let λa26e4d7ec6d8 = new λ8091715950cf(λa9c5879b3146, λb55bf35cb85d, λ750950f6a19f), {HTMLMediaElement: λe00705e3fbb6, HTMLScriptElement: λ395e0cd00944, HTMLAudioElement: λa5ae528068ec, HTMLVideoElement: λ914e0262bfa9, HTMLInputElement: λb1109c40de5a, HTMLEmbedElement: λ086d2cbf02dc, HTMLTrackElement: λad59e772aa87, HTMLAnchorElement: λ78ca72dccce7, HTMLIFrameElement: λ3e9298379a14, HTMLAreaElement: λc81d9781760e, HTMLLinkElement: λf82e25b77607, HTMLBaseElement: λ5846e6e83fd2, HTMLFormElement: λb4a42734fc4d, HTMLImageElement: λb71a7b6cb517, HTMLSourceElement: λcb3dbf5ee2f9} = λa9c5879b3146;
    λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146, "__uv", {
      value: λ252b5ba9c7c3,
      enumerable: !1
    }), λ252b5ba9c7c3.meta.origin = location.origin, λ252b5ba9c7c3.location = λa26e4d7ec6d8.location.emulate(λe3147839ed2c => λe3147839ed2c === "about:srcdoc" ? new URL(λe3147839ed2c) : (λe3147839ed2c.startsWith("blob:") && (λe3147839ed2c = λe3147839ed2c.slice(5)), 
    new URL(λ252b5ba9c7c3.sourceUrl(λe3147839ed2c))), λe3147839ed2c => λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c));
    let λbfdbee2e2e6f = λea56612f5398;
    if (λ252b5ba9c7c3.meta.url = λ252b5ba9c7c3.location, λ252b5ba9c7c3.domain = λ252b5ba9c7c3.meta.url.host, 
    λ252b5ba9c7c3.blobUrls = new λa9c5879b3146.Map, λ252b5ba9c7c3.referrer = "", λ252b5ba9c7c3.cookies = [], 
    λ252b5ba9c7c3.localStorageObj = {}, λ252b5ba9c7c3.sessionStorageObj = {}, λ252b5ba9c7c3.location.href === "about:srcdoc" && (λ252b5ba9c7c3.meta = λa9c5879b3146.parent.__uv.meta), 
    λa9c5879b3146.EventTarget && (λ252b5ba9c7c3.addEventListener = λa9c5879b3146.EventTarget.prototype.addEventListener, 
    λ252b5ba9c7c3.removeListener = λa9c5879b3146.EventTarget.prototype.removeListener, 
    λ252b5ba9c7c3.dispatchEvent = λa9c5879b3146.EventTarget.prototype.dispatchEvent), 
    λa26e4d7ec6d8.nativeMethods.defineProperty(λa26e4d7ec6d8.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λa26e4d7ec6d8.storage.sessionStorage) return λ252b5ba9c7c3.sessionStorageObj;
        if (this === λa26e4d7ec6d8.storage.localStorage) return λ252b5ba9c7c3.localStorageObj;
      },
      enumerable: !1
    }), λa9c5879b3146.localStorage) {
      for (let λe3147839ed2c in λa9c5879b3146.localStorage) λe3147839ed2c.startsWith(λ11a6a6f680f4 + λ252b5ba9c7c3.location.origin + "@") && (λ252b5ba9c7c3.localStorageObj[λe3147839ed2c.slice((λ11a6a6f680f4 + λ252b5ba9c7c3.location.origin + "@").length)] = λa9c5879b3146.localStorage.getItem(λe3147839ed2c));
      λ252b5ba9c7c3.lsWrap = λa26e4d7ec6d8.storage.emulate(λa26e4d7ec6d8.storage.localStorage, λ252b5ba9c7c3.localStorageObj);
    }
    if (λa9c5879b3146.sessionStorage) {
      for (let λe3147839ed2c in λa9c5879b3146.sessionStorage) λe3147839ed2c.startsWith(λ11a6a6f680f4 + λ252b5ba9c7c3.location.origin + "@") && (λ252b5ba9c7c3.sessionStorageObj[λe3147839ed2c.slice((λ11a6a6f680f4 + λ252b5ba9c7c3.location.origin + "@").length)] = λa9c5879b3146.sessionStorage.getItem(λe3147839ed2c));
      λ252b5ba9c7c3.ssWrap = λa26e4d7ec6d8.storage.emulate(λa26e4d7ec6d8.storage.sessionStorage, λ252b5ba9c7c3.sessionStorageObj);
    }
    let λe133e35e0c60 = λa9c5879b3146.document ? λa26e4d7ec6d8.node.baseURI.get.call(λa9c5879b3146.document) : λa9c5879b3146.location.href, λb1dee5031a09 = λ252b5ba9c7c3.sourceUrl(λe133e35e0c60);
    λa26e4d7ec6d8.nativeMethods.defineProperty(λ252b5ba9c7c3.meta, "base", {
      get() {
        return λa9c5879b3146.document ? (λa26e4d7ec6d8.node.baseURI.get.call(λa9c5879b3146.document) !== λe133e35e0c60 && (λe133e35e0c60 = λa26e4d7ec6d8.node.baseURI.get.call(λa9c5879b3146.document), 
        λb1dee5031a09 = λ252b5ba9c7c3.sourceUrl(λe133e35e0c60)), λb1dee5031a09) : λ252b5ba9c7c3.meta.url.href;
      }
    }), λ252b5ba9c7c3.methods = {
      setSource: λ11a6a6f680f4 + "setSource",
      source: λ11a6a6f680f4 + "source",
      location: λ11a6a6f680f4 + "location",
      function: λ11a6a6f680f4 + "function",
      string: λ11a6a6f680f4 + "string",
      eval: λ11a6a6f680f4 + "eval",
      parent: λ11a6a6f680f4 + "parent",
      top: λ11a6a6f680f4 + "top"
    }, λ252b5ba9c7c3.filterKeys = [ λ96d2e88fa2fc, λ252b5ba9c7c3.methods.setSource, λ252b5ba9c7c3.methods.source, λ252b5ba9c7c3.methods.location, λ252b5ba9c7c3.methods.function, λ252b5ba9c7c3.methods.string, λ252b5ba9c7c3.methods.eval, λ252b5ba9c7c3.methods.parent, λ252b5ba9c7c3.methods.top, λ11a6a6f680f4 + "protocol", λ11a6a6f680f4 + "storageObj", λ11a6a6f680f4 + "url", λ11a6a6f680f4 + "modifiedStyle", λ11a6a6f680f4 + "config", λ11a6a6f680f4 + "dispatched", "StemConnect", "__uvHook" ], 
    λa26e4d7ec6d8.on("wrap", (λe3147839ed2c, λ8091715950cf) => {
      λa26e4d7ec6d8.nativeMethods.defineProperty(λ8091715950cf, "name", λa26e4d7ec6d8.nativeMethods.getOwnPropertyDescriptor(λe3147839ed2c, "name")), 
      λa26e4d7ec6d8.nativeMethods.defineProperty(λ8091715950cf, "length", λa26e4d7ec6d8.nativeMethods.getOwnPropertyDescriptor(λe3147839ed2c, "length")), 
      λa26e4d7ec6d8.nativeMethods.defineProperty(λ8091715950cf, λ252b5ba9c7c3.methods.string, {
        enumerable: !1,
        value: λa26e4d7ec6d8.nativeMethods.fnToString.call(λe3147839ed2c)
      }), λa26e4d7ec6d8.nativeMethods.defineProperty(λ8091715950cf, λ252b5ba9c7c3.methods.function, {
        enumerable: !1,
        value: λe3147839ed2c
      });
    }), λa26e4d7ec6d8.fetch.on("request", λe3147839ed2c => {
      λe3147839ed2c.data.input = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.input);
    }), λa26e4d7ec6d8.fetch.on("requestUrl", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.fetch.on("responseUrl", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.xhr.on("open", λe3147839ed2c => {
      λe3147839ed2c.data.input = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.input);
    }), λa26e4d7ec6d8.xhr.on("responseUrl", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.workers.on("worker", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.workers.on("addModule", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.workers.on("importScripts", λe3147839ed2c => {
      for (let λ8091715950cf in λe3147839ed2c.data.scripts) λe3147839ed2c.data.scripts[λ8091715950cf] = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.scripts[λ8091715950cf]);
    }), λa26e4d7ec6d8.workers.on("postMessage", λe3147839ed2c => {
      let λ8091715950cf = λe3147839ed2c.data.origin;
      λe3147839ed2c.data.origin = "*", λe3147839ed2c.data.message = {
        __data: λe3147839ed2c.data.message,
        __origin: λ252b5ba9c7c3.meta.url.origin,
        __to: λ8091715950cf
      };
    }), λa26e4d7ec6d8.navigator.on("sendBeacon", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.document.on("getCookie", λe3147839ed2c => {
      λe3147839ed2c.data.value = λbfdbee2e2e6f;
    }), λa26e4d7ec6d8.document.on("setCookie", λe3147839ed2c => {
      λ252b5ba9c7c3.cookie.db().then(λ8091715950cf => {
        λ252b5ba9c7c3.cookie.setCookies(λe3147839ed2c.data.value, λ8091715950cf, λ252b5ba9c7c3.meta), 
        λ252b5ba9c7c3.cookie.getCookies(λ8091715950cf).then(λe3147839ed2c => {
          λbfdbee2e2e6f = λ252b5ba9c7c3.cookie.serialize(λe3147839ed2c, λ252b5ba9c7c3.meta, !0);
        });
      });
      let λ8091715950cf = λ252b5ba9c7c3.cookie.setCookie(λe3147839ed2c.data.value)[0];
      λ8091715950cf.path || (λ8091715950cf.path = "/"), λ8091715950cf.domain || (λ8091715950cf.domain = λ252b5ba9c7c3.meta.url.hostname), 
      λ252b5ba9c7c3.cookie.validateCookie(λ8091715950cf, λ252b5ba9c7c3.meta, !0) && (λbfdbee2e2e6f.length && (λbfdbee2e2e6f += "; "), 
      λbfdbee2e2e6f += `${λ8091715950cf.name}=${λ8091715950cf.value}`), λe3147839ed2c.respondWith(λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.element.on("setInnerHTML", λe3147839ed2c => {
      switch (λe3147839ed2c.that.tagName) {
       case "SCRIPT":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.js.rewrite(λe3147839ed2c.data.value);
        break;

       case "STYLE":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value);
        break;

       default:
        λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.value);
      }
    }), λa26e4d7ec6d8.element.on("getInnerHTML", λe3147839ed2c => {
      switch (λe3147839ed2c.that.tagName) {
       case "SCRIPT":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.js.source(λe3147839ed2c.data.value);
        break;

       case "STYLE":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceCSS(λe3147839ed2c.data.value);
        break;

       default:
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceHtml(λe3147839ed2c.data.value);
      }
    }), λa26e4d7ec6d8.element.on("setOuterHTML", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.value, {
        document: λe3147839ed2c.that.tagName === "HTML"
      });
    }), λa26e4d7ec6d8.element.on("getOuterHTML", λe3147839ed2c => {
      switch (λe3147839ed2c.that.tagName) {
       case "HEAD":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceHtml(λe3147839ed2c.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceHtml(λe3147839ed2c.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceHtml(λe3147839ed2c.data.value, {
          document: λe3147839ed2c.that.tagName === "HTML"
        });
        break;
      }
    }), λa26e4d7ec6d8.document.on("write", λe3147839ed2c => {
      if (!λe3147839ed2c.data.html.length) return !1;
      λe3147839ed2c.data.html = [ λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.html.join("")) ];
    }), λa26e4d7ec6d8.document.on("writeln", λe3147839ed2c => {
      if (!λe3147839ed2c.data.html.length) return !1;
      λe3147839ed2c.data.html = [ λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.html.join("")) ];
    }), λa26e4d7ec6d8.element.on("insertAdjacentHTML", λe3147839ed2c => {
      λe3147839ed2c.data.html = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.html);
    }), λa26e4d7ec6d8.eventSource.on("construct", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.eventSource.on("url", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.idb.on("idbFactoryOpen", λe3147839ed2c => {
      λe3147839ed2c.data.name !== "__op" && (λe3147839ed2c.data.name = `${λ252b5ba9c7c3.meta.url.origin}@${λe3147839ed2c.data.name}`);
    }), λa26e4d7ec6d8.idb.on("idbFactoryName", λe3147839ed2c => {
      λe3147839ed2c.data.value = λe3147839ed2c.data.value.slice(λ252b5ba9c7c3.meta.url.origin.length + 1);
    }), λa26e4d7ec6d8.history.on("replaceState", λe3147839ed2c => {
      λe3147839ed2c.data.url && (λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url, "__uv" in λe3147839ed2c.that ? λe3147839ed2c.that.__uv.meta : λ252b5ba9c7c3.meta));
    }), λa26e4d7ec6d8.history.on("pushState", λe3147839ed2c => {
      λe3147839ed2c.data.url && (λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url, "__uv" in λe3147839ed2c.that ? λe3147839ed2c.that.__uv.meta : λ252b5ba9c7c3.meta));
    }), λa26e4d7ec6d8.element.on("getAttribute", λe3147839ed2c => {
      λa26e4d7ec6d8.element.hasAttribute.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name) && λe3147839ed2c.respondWith(λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name));
    }), λa26e4d7ec6d8.message.on("postMessage", λe3147839ed2c => {
      let λ8091715950cf = λe3147839ed2c.data.origin, λ830ecc0be98e = λ252b5ba9c7c3.call;
      λe3147839ed2c.that && (λ830ecc0be98e = λe3147839ed2c.that.__uv$source.call), λe3147839ed2c.data.origin = "*", 
      λe3147839ed2c.data.message = {
        __data: λe3147839ed2c.data.message,
        __origin: (λe3147839ed2c.that || λe3147839ed2c.target).__uv$source.location.origin,
        __to: λ8091715950cf
      }, (() => {
        let λ8091715950cf = λe3147839ed2c.data.transfer || [];
        try {
          const λ830ecc0be98e = new Set(λ8091715950cf);
          const λea56612f5398 = new Set;
          const a = λe3147839ed2c => {
            if (!λe3147839ed2c || typeof λe3147839ed2c != "object" || λea56612f5398.has(λe3147839ed2c)) return;
            λea56612f5398.add(λe3147839ed2c);
            let λ8091715950cf = "";
            try {
              λ8091715950cf = Object.prototype.toString.call(λe3147839ed2c);
            } catch {}
            if (typeof MessagePort != "undefined" && λe3147839ed2c instanceof MessagePort || λ8091715950cf === "[object MessagePort]") {
              λ830ecc0be98e.add(λe3147839ed2c);
              return;
            }
            if (Array.isArray(λe3147839ed2c)) {
              for (const λ8091715950cf of λe3147839ed2c) a(λ8091715950cf);
              return;
            }
            for (const λ8091715950cf of Object.values(λe3147839ed2c)) a(λ8091715950cf);
          };
          a(λe3147839ed2c.data.message);
          λ8091715950cf = [ ...λ830ecc0be98e ];
        } catch {}
        return λe3147839ed2c.respondWith(λ750950f6a19f ? λ830ecc0be98e(λe3147839ed2c.target, [ λe3147839ed2c.data.message, λ8091715950cf ], λe3147839ed2c.that) : λ830ecc0be98e(λe3147839ed2c.target, [ λe3147839ed2c.data.message, λe3147839ed2c.data.origin, λ8091715950cf ], λe3147839ed2c.that));
      })();
    }), λa26e4d7ec6d8.message.on("data", λe3147839ed2c => {
      let {value: λ8091715950cf} = λe3147839ed2c.data;
      typeof λ8091715950cf == "object" && "__data" in λ8091715950cf && "__origin" in λ8091715950cf && λe3147839ed2c.respondWith(λ8091715950cf.__data);
    }), λa26e4d7ec6d8.message.on("origin", λe3147839ed2c => {
      let λ8091715950cf = λa26e4d7ec6d8.message.messageData.get.call(λe3147839ed2c.that);
      typeof λ8091715950cf == "object" && λ8091715950cf.__data && λ8091715950cf.__origin && λe3147839ed2c.respondWith(λ8091715950cf.__origin);
    }), λa26e4d7ec6d8.overrideDescriptor(λa9c5879b3146, "origin", {
      get: () => λ252b5ba9c7c3.location.origin
    }), λa26e4d7ec6d8.node.on("baseURI", λe3147839ed2c => {
      λe3147839ed2c.data.value.startsWith(λa9c5879b3146.location.origin) && (λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.data.value));
    }), λa26e4d7ec6d8.element.on("setAttribute", λe3147839ed2c => {
      if (λe3147839ed2c.that instanceof λe00705e3fbb6 && λe3147839ed2c.data.name === "src" && λe3147839ed2c.data.value.startsWith("blob:")) {
        λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
        λe3147839ed2c.data.value = λ252b5ba9c7c3.blobUrls.get(λe3147839ed2c.data.value);
        return;
      }
      λ252b5ba9c7c3.attrs.isUrl(λe3147839ed2c.data.name) && (λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.value)), 
      λ252b5ba9c7c3.attrs.isStyle(λe3147839ed2c.data.name) && (λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value, {
        context: "declarationList"
      })), λ252b5ba9c7c3.attrs.isHtml(λe3147839ed2c.data.name) && (λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.value, {
        ...λ252b5ba9c7c3.meta,
        document: !0,
        injectHead: λ252b5ba9c7c3.createHtmlInject(λ252b5ba9c7c3.handlerScript, λ252b5ba9c7c3.bundleScript, λ252b5ba9c7c3.clientScript, λ252b5ba9c7c3.configScript, λbfdbee2e2e6f, λa9c5879b3146.location.href)
      })), λ252b5ba9c7c3.attrs.isSrcset(λe3147839ed2c.data.name) && (λe3147839ed2c.target.call(λe3147839ed2c.that, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.html.wrapSrcset(λe3147839ed2c.data.value.toString())), 
      λ252b5ba9c7c3.attrs.isForbidden(λe3147839ed2c.data.name) && (λe3147839ed2c.data.name = λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name);
    }), λa26e4d7ec6d8.element.on("audio", λe3147839ed2c => {
      λe3147839ed2c.data.url = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.url);
    }), λa26e4d7ec6d8.element.hookProperty([ λ78ca72dccce7, λc81d9781760e, λf82e25b77607, λ5846e6e83fd2 ], "href", {
      get: (λe3147839ed2c, λ8091715950cf) => λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.call(λ8091715950cf)),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-href", λ830ecc0be98e), 
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.rewriteUrl(λ830ecc0be98e));
      }
    }), λa26e4d7ec6d8.element.hookProperty([ λ395e0cd00944, λa5ae528068ec, λ914e0262bfa9, λe00705e3fbb6, λb71a7b6cb517, λb1109c40de5a, λ086d2cbf02dc, λ3e9298379a14, λad59e772aa87, λcb3dbf5ee2f9 ], "src", {
      get: (λe3147839ed2c, λ8091715950cf) => λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.call(λ8091715950cf)),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        if (new String(λ830ecc0be98e).toString().trim().startsWith("blob:") && λ8091715950cf instanceof λe00705e3fbb6) return λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-src", λ830ecc0be98e), 
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.blobUrls.get(λ830ecc0be98e) || λ830ecc0be98e);
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-src", λ830ecc0be98e), 
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.rewriteUrl(λ830ecc0be98e));
      }
    }), λa26e4d7ec6d8.element.hookProperty([ λb4a42734fc4d ], "action", {
      get: (λe3147839ed2c, λ8091715950cf) => λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.call(λ8091715950cf)),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-action", λ830ecc0be98e), 
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.rewriteUrl(λ830ecc0be98e));
      }
    }), λa26e4d7ec6d8.element.hookProperty([ λb71a7b6cb517, λcb3dbf5ee2f9 ], "srcset", {
      get: (λe3147839ed2c, λ8091715950cf) => λa26e4d7ec6d8.element.getAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-srcset") || λe3147839ed2c.call(λ8091715950cf),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-srcset", λ830ecc0be98e), 
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.html.wrapSrcset(λ830ecc0be98e.toString()));
      }
    }), λa26e4d7ec6d8.element.hookProperty(λ395e0cd00944, "integrity", {
      get: (λe3147839ed2c, λ8091715950cf) => λa26e4d7ec6d8.element.getAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-integrity"),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-integrity", λ830ecc0be98e);
      }
    }), λa26e4d7ec6d8.element.hookProperty(λ3e9298379a14, "sandbox", {
      get: (λe3147839ed2c, λ8091715950cf) => λa26e4d7ec6d8.element.getAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-sandbox") || λe3147839ed2c.call(λ8091715950cf),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λa26e4d7ec6d8.element.setAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-sandbox", λ830ecc0be98e);
      }
    });
    let λe944b5cb2011 = λ3e9298379a14 && Object.getOwnPropertyDescriptor(λ3e9298379a14.prototype, "contentWindow").get;
    function U(λe3147839ed2c) {
      let λ8091715950cf = λe944b5cb2011.call(λe3147839ed2c);
      if (!λ8091715950cf.__uv) try {
        p(λ8091715950cf);
      } catch (λe3147839ed2c) {
        console.error("catastrophic failure"), console.error(λe3147839ed2c);
      }
    }
    if (λa26e4d7ec6d8.element.hookProperty(λ3e9298379a14, "contentWindow", {
      get: (λe3147839ed2c, λ8091715950cf) => (U(λ8091715950cf), λe3147839ed2c.call(λ8091715950cf))
    }), λa26e4d7ec6d8.element.hookProperty(λ3e9298379a14, "contentDocument", {
      get: (λe3147839ed2c, λ8091715950cf) => (U(λ8091715950cf), λe3147839ed2c.call(λ8091715950cf))
    }), λa26e4d7ec6d8.element.hookProperty(λ3e9298379a14, "srcdoc", {
      get: (λe3147839ed2c, λ8091715950cf) => λa26e4d7ec6d8.element.getAttribute.call(λ8091715950cf, λ252b5ba9c7c3.attributePrefix + "-attr-srcdoc") || λe3147839ed2c.call(λ8091715950cf),
      set: (λe3147839ed2c, λ8091715950cf, [λ830ecc0be98e]) => {
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.rewriteHtml(λ830ecc0be98e, {
          document: !0,
          injectHead: λ252b5ba9c7c3.createHtmlInject(λ252b5ba9c7c3.handlerScript, λ252b5ba9c7c3.bundleScript, λ252b5ba9c7c3.clientScript, λ252b5ba9c7c3.configScript, λbfdbee2e2e6f, λa9c5879b3146.location.href)
        }));
      }
    }), λa26e4d7ec6d8.node.on("getTextContent", λe3147839ed2c => {
      switch (λe3147839ed2c.that.tagName) {
       case "SCRIPT":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.js.source(λe3147839ed2c.data.value);
        break;

       case "STYLE":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceCSS(λe3147839ed2c.data.value);
        break;

       default:
      }
    }), λa26e4d7ec6d8.node.on("setTextContent", λe3147839ed2c => {
      switch (λe3147839ed2c.that.tagName) {
       case "SCRIPT":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.js.rewrite(λe3147839ed2c.data.value);
        break;

       case "STYLE":
        λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λa9c5879b3146.navigator && delete λa9c5879b3146.Navigator.prototype.serviceWorker, 
    λa26e4d7ec6d8.document.on("getDomain", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.domain;
    }), λa26e4d7ec6d8.document.on("setDomain", λe3147839ed2c => {
      if (!λe3147839ed2c.data.value.toString().endsWith(λ252b5ba9c7c3.meta.url.hostname.split(".").slice(-2).join("."))) return λe3147839ed2c.respondWith("");
      λe3147839ed2c.respondWith(λ252b5ba9c7c3.domain = λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.document.on("url", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.location.href;
    }), λa26e4d7ec6d8.document.on("documentURI", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.location.href;
    }), λa26e4d7ec6d8.document.on("referrer", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.referrer || λ252b5ba9c7c3.sourceUrl(λe3147839ed2c.data.value);
    }), λa26e4d7ec6d8.document.on("parseFromString", λe3147839ed2c => {
      if (λe3147839ed2c.data.type !== "text/html") return !1;
      λe3147839ed2c.data.string = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.string, {
        ...λ252b5ba9c7c3.meta,
        document: !0
      });
    }), λa26e4d7ec6d8.attribute.on("getValue", λe3147839ed2c => {
      λa26e4d7ec6d8.element.hasAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name) && (λe3147839ed2c.data.value = λa26e4d7ec6d8.element.getAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name));
    }), λa26e4d7ec6d8.attribute.on("setValue", λe3147839ed2c => {
      λ252b5ba9c7c3.attrs.isUrl(λe3147839ed2c.data.name) && (λa26e4d7ec6d8.element.setAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteUrl(λe3147839ed2c.data.value)), 
      λ252b5ba9c7c3.attrs.isStyle(λe3147839ed2c.data.name) && (λa26e4d7ec6d8.element.setAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value, {
        context: "declarationList"
      })), λ252b5ba9c7c3.attrs.isHtml(λe3147839ed2c.data.name) && (λa26e4d7ec6d8.element.setAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteHtml(λe3147839ed2c.data.value, {
        ...λ252b5ba9c7c3.meta,
        document: !0,
        injectHead: λ252b5ba9c7c3.createHtmlInject(λ252b5ba9c7c3.handlerScript, λ252b5ba9c7c3.bundleScript, λ252b5ba9c7c3.clientScript, λ252b5ba9c7c3.configScript, λbfdbee2e2e6f, λa9c5879b3146.location.href)
      })), λ252b5ba9c7c3.attrs.isSrcset(λe3147839ed2c.data.name) && (λa26e4d7ec6d8.element.setAttribute.call(λe3147839ed2c.that.ownerElement, λ252b5ba9c7c3.attributePrefix + "-attr-" + λe3147839ed2c.data.name, λe3147839ed2c.data.value), 
      λe3147839ed2c.data.value = λ252b5ba9c7c3.html.wrapSrcset(λe3147839ed2c.data.value.toString()));
    }), λa26e4d7ec6d8.url.on("createObjectURL", λe3147839ed2c => {
      let λ8091715950cf = λe3147839ed2c.target.call(λe3147839ed2c.that, λe3147839ed2c.data.object);
      if (λ8091715950cf.startsWith("blob:" + location.origin)) {
        let λ830ecc0be98e = "blob:" + (λ252b5ba9c7c3.meta.url.href !== "about:blank" ? λ252b5ba9c7c3.meta.url.origin : λa9c5879b3146.parent.__uv.meta.url.origin) + λ8091715950cf.slice(5 + location.origin.length);
        λ252b5ba9c7c3.blobUrls.set(λ830ecc0be98e, λ8091715950cf), λe3147839ed2c.respondWith(λ830ecc0be98e);
      } else λe3147839ed2c.respondWith(λ8091715950cf);
    }), λa26e4d7ec6d8.url.on("revokeObjectURL", λe3147839ed2c => {
      if (λ252b5ba9c7c3.blobUrls.has(λe3147839ed2c.data.url)) {
        let λ8091715950cf = λe3147839ed2c.data.url;
        λe3147839ed2c.data.url = λ252b5ba9c7c3.blobUrls.get(λe3147839ed2c.data.url), λ252b5ba9c7c3.blobUrls.delete(λ8091715950cf);
      }
    }), λa26e4d7ec6d8.storage.on("get", λe3147839ed2c => {
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("set", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && (λe3147839ed2c.that.__uv$storageObj[λe3147839ed2c.data.name] = λe3147839ed2c.data.value), 
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("delete", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && delete λe3147839ed2c.that.__uv$storageObj[λe3147839ed2c.data.name], 
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("getItem", λe3147839ed2c => {
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("setItem", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && (λe3147839ed2c.that.__uv$storageObj[λe3147839ed2c.data.name] = λe3147839ed2c.data.value), 
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("removeItem", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && delete λe3147839ed2c.that.__uv$storageObj[λe3147839ed2c.data.name], 
      λe3147839ed2c.data.name = λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λe3147839ed2c.data.name;
    }), λa26e4d7ec6d8.storage.on("clear", λe3147839ed2c => {
      if (λe3147839ed2c.that.__uv$storageObj) for (let λ8091715950cf of λa26e4d7ec6d8.nativeMethods.keys.call(null, λe3147839ed2c.that.__uv$storageObj)) delete λe3147839ed2c.that.__uv$storageObj[λ8091715950cf], 
      λa26e4d7ec6d8.storage.removeItem.call(λe3147839ed2c.that, λ11a6a6f680f4 + λ252b5ba9c7c3.meta.url.origin + "@" + λ8091715950cf), 
      λe3147839ed2c.respondWith();
    }), λa26e4d7ec6d8.storage.on("length", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && λe3147839ed2c.respondWith(λa26e4d7ec6d8.nativeMethods.keys.call(null, λe3147839ed2c.that.__uv$storageObj).length);
    }), λa26e4d7ec6d8.storage.on("key", λe3147839ed2c => {
      λe3147839ed2c.that.__uv$storageObj && λe3147839ed2c.respondWith(λa26e4d7ec6d8.nativeMethods.keys.call(null, λe3147839ed2c.that.__uv$storageObj)[λe3147839ed2c.data.index] || null);
    }), λa26e4d7ec6d8.function.on("function", λe3147839ed2c => {
      λe3147839ed2c.data.script = λ252b5ba9c7c3.rewriteJS(λe3147839ed2c.data.script);
    }), λa26e4d7ec6d8.function.on("toString", λe3147839ed2c => {
      λ252b5ba9c7c3.methods.string in λe3147839ed2c.that && λe3147839ed2c.respondWith(λe3147839ed2c.that[λ252b5ba9c7c3.methods.string]);
    }), λa26e4d7ec6d8.object.on("getOwnPropertyNames", λe3147839ed2c => {
      λe3147839ed2c.data.names = λe3147839ed2c.data.names.filter(λe3147839ed2c => !λ252b5ba9c7c3.filterKeys.includes(λe3147839ed2c));
    }), λa26e4d7ec6d8.object.on("getOwnPropertyDescriptors", λe3147839ed2c => {
      for (let λ8091715950cf of λ252b5ba9c7c3.filterKeys) delete λe3147839ed2c.data.descriptors[λ8091715950cf];
    }), λa26e4d7ec6d8.style.on("setProperty", λe3147839ed2c => {
      λa26e4d7ec6d8.style.dashedUrlProps.includes(λe3147839ed2c.data.property) && (λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value, {
        context: "value",
        ...λ252b5ba9c7c3.meta
      }));
    }), λa26e4d7ec6d8.style.on("getPropertyValue", λe3147839ed2c => {
      λa26e4d7ec6d8.style.dashedUrlProps.includes(λe3147839ed2c.data.property) && λe3147839ed2c.respondWith(λ252b5ba9c7c3.sourceCSS(λe3147839ed2c.target.call(λe3147839ed2c.that, λe3147839ed2c.data.property), {
        context: "value",
        ...λ252b5ba9c7c3.meta
      }));
    }), "CSS2Properties" in λa9c5879b3146) for (let λe3147839ed2c of λa26e4d7ec6d8.style.urlProps) λa26e4d7ec6d8.overrideDescriptor(λa9c5879b3146.CSS2Properties.prototype, λe3147839ed2c, {
      get: (λe3147839ed2c, λ8091715950cf) => λ252b5ba9c7c3.sourceCSS(λe3147839ed2c.call(λ8091715950cf), {
        context: "value",
        ...λ252b5ba9c7c3.meta
      }),
      set: (λe3147839ed2c, λ8091715950cf, λ830ecc0be98e) => {
        λe3147839ed2c.call(λ8091715950cf, λ252b5ba9c7c3.rewriteCSS(λ830ecc0be98e, {
          context: "value",
          ...λ252b5ba9c7c3.meta
        }));
      }
    }); else "HTMLElement" in λa9c5879b3146 && λa26e4d7ec6d8.overrideDescriptor(λa9c5879b3146.HTMLElement.prototype, "style", {
      get: (λe3147839ed2c, λ8091715950cf) => {
        let λ830ecc0be98e = λe3147839ed2c.call(λ8091715950cf);
        if (!λ830ecc0be98e[λ11a6a6f680f4 + "modifiedStyle"]) for (let λe3147839ed2c of λa26e4d7ec6d8.style.urlProps) λa26e4d7ec6d8.nativeMethods.defineProperty(λ830ecc0be98e, λe3147839ed2c, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λ8091715950cf = λa26e4d7ec6d8.style.getPropertyValue.call(this, λe3147839ed2c) || "";
            return λ252b5ba9c7c3.sourceCSS(λ8091715950cf, {
              context: "value",
              ...λ252b5ba9c7c3.meta
            });
          },
          set(λ8091715950cf) {
            λa26e4d7ec6d8.style.setProperty.call(this, λa26e4d7ec6d8.style.propToDashed[λe3147839ed2c] || λe3147839ed2c, λ252b5ba9c7c3.rewriteCSS(λ8091715950cf, {
              context: "value",
              ...λ252b5ba9c7c3.meta
            }));
          }
        }), λa26e4d7ec6d8.nativeMethods.defineProperty(λ830ecc0be98e, λ11a6a6f680f4 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ830ecc0be98e;
      }
    });
    λa26e4d7ec6d8.style.on("setCssText", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.rewriteCSS(λe3147839ed2c.data.value, {
        context: "declarationList",
        ...λ252b5ba9c7c3.meta
      });
    }), λa26e4d7ec6d8.style.on("getCssText", λe3147839ed2c => {
      λe3147839ed2c.data.value = λ252b5ba9c7c3.sourceCSS(λe3147839ed2c.data.value, {
        context: "declarationList",
        ...λ252b5ba9c7c3.meta
      });
    }), λ252b5ba9c7c3.addEventListener.call(λa9c5879b3146, "hashchange", λe3147839ed2c => {
      if (λe3147839ed2c.__uv$dispatched) return !1;
      λe3147839ed2c.stopImmediatePropagation();
      let λ8091715950cf = λa9c5879b3146.location.hash;
      λa26e4d7ec6d8.history.replaceState.call(λa9c5879b3146.history, "", "", λe3147839ed2c.oldURL), 
      λ252b5ba9c7c3.location.hash = λ8091715950cf;
    }), λa26e4d7ec6d8.location.on("hashchange", (λe3147839ed2c, λ8091715950cf, λ830ecc0be98e) => {
      if (λ830ecc0be98e.HashChangeEvent && λa26e4d7ec6d8.history.replaceState) {
        λa26e4d7ec6d8.history.replaceState.call(λa9c5879b3146.history, "", "", λ252b5ba9c7c3.rewriteUrl(λ8091715950cf));
        let λea56612f5398 = new λ830ecc0be98e.HashChangeEvent("hashchange", {
          newURL: λ8091715950cf,
          oldURL: λe3147839ed2c
        });
        λa26e4d7ec6d8.nativeMethods.defineProperty(λea56612f5398, λ11a6a6f680f4 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ252b5ba9c7c3.dispatchEvent.call(λa9c5879b3146, λea56612f5398);
      }
    }), λa26e4d7ec6d8.fetch.overrideRequest(), λa26e4d7ec6d8.fetch.overrideUrl(), λa26e4d7ec6d8.xhr.overrideOpen(), 
    λa26e4d7ec6d8.xhr.overrideResponseUrl(), λa26e4d7ec6d8.element.overrideHtml(), λa26e4d7ec6d8.element.overrideAttribute(), 
    λa26e4d7ec6d8.element.overrideInsertAdjacentHTML(), λa26e4d7ec6d8.element.overrideAudio(), 
    λa26e4d7ec6d8.node.overrideBaseURI(), λa26e4d7ec6d8.node.overrideTextContent(), 
    λa26e4d7ec6d8.attribute.overrideNameValue(), λa26e4d7ec6d8.document.overrideDomain(), 
    λa26e4d7ec6d8.document.overrideURL(), λa26e4d7ec6d8.document.overrideDocumentURI(), 
    λa26e4d7ec6d8.document.overrideWrite(), λa26e4d7ec6d8.document.overrideReferrer(), 
    λa26e4d7ec6d8.document.overrideParseFromString(), λa26e4d7ec6d8.storage.overrideMethods(), 
    λa26e4d7ec6d8.storage.overrideLength(), λa26e4d7ec6d8.object.overrideGetPropertyNames(), 
    λa26e4d7ec6d8.object.overrideGetOwnPropertyDescriptors(), λa26e4d7ec6d8.idb.overrideName(), 
    λa26e4d7ec6d8.idb.overrideOpen(), λa26e4d7ec6d8.history.overridePushState(), λa26e4d7ec6d8.history.overrideReplaceState(), 
    λa26e4d7ec6d8.eventSource.overrideConstruct(), λa26e4d7ec6d8.eventSource.overrideUrl(), 
    λa26e4d7ec6d8.websocket.overrideWebSocket(λb55bf35cb85d), λa26e4d7ec6d8.url.overrideObjectURL(), 
    λa26e4d7ec6d8.document.overrideCookie(), λa26e4d7ec6d8.message.overridePostMessage(), 
    λa26e4d7ec6d8.message.overrideMessageOrigin(), λa26e4d7ec6d8.message.overrideMessageData(), 
    λa26e4d7ec6d8.workers.overrideWorker(), λa26e4d7ec6d8.workers.overrideAddModule(), 
    λa26e4d7ec6d8.workers.overrideImportScripts(), λa26e4d7ec6d8.workers.overridePostMessage(), 
    λa26e4d7ec6d8.style.overrideSetGetProperty(), λa26e4d7ec6d8.style.overrideCssText(), 
    λa26e4d7ec6d8.navigator.overrideSendBeacon(), λa26e4d7ec6d8.function.overrideFunction(), 
    λa26e4d7ec6d8.function.overrideToString(), λa26e4d7ec6d8.location.overrideWorkerLocation(λe3147839ed2c => new URL(λ252b5ba9c7c3.sourceUrl(λe3147839ed2c))), 
    λa26e4d7ec6d8.overrideDescriptor(λa9c5879b3146, "localStorage", {
      get: (λe3147839ed2c, λ8091715950cf) => (λ8091715950cf || λa9c5879b3146).__uv.lsWrap
    }), λa26e4d7ec6d8.overrideDescriptor(λa9c5879b3146, "sessionStorage", {
      get: (λe3147839ed2c, λ8091715950cf) => (λ8091715950cf || λa9c5879b3146).__uv.ssWrap
    }), λa26e4d7ec6d8.override(λa9c5879b3146, "open", (λe3147839ed2c, λ8091715950cf, λ830ecc0be98e) => {
      if (!λ830ecc0be98e.length) return λe3147839ed2c.apply(λ8091715950cf, λ830ecc0be98e);
      let [λea56612f5398] = λ830ecc0be98e;
      return λea56612f5398 = λ252b5ba9c7c3.rewriteUrl(λea56612f5398), λe3147839ed2c.call(λ8091715950cf, λea56612f5398);
    }), λ252b5ba9c7c3.$wrap = function(λe3147839ed2c) {
      return λe3147839ed2c === "location" ? λ252b5ba9c7c3.methods.location : λe3147839ed2c === "eval" ? λ252b5ba9c7c3.methods.eval : λe3147839ed2c;
    }, λ252b5ba9c7c3.$get = function(λe3147839ed2c) {
      return λe3147839ed2c === λa9c5879b3146.location ? λ252b5ba9c7c3.location : λe3147839ed2c === λa9c5879b3146.eval ? λ252b5ba9c7c3.eval : λe3147839ed2c === λa9c5879b3146.parent ? λa9c5879b3146.__uv$parent : λe3147839ed2c === λa9c5879b3146.top ? λa9c5879b3146.__uv$top : λe3147839ed2c;
    }, λ252b5ba9c7c3.eval = λa26e4d7ec6d8.wrap(λa9c5879b3146, "eval", (λe3147839ed2c, λ8091715950cf, λ830ecc0be98e) => {
      if (!λ830ecc0be98e.length || typeof λ830ecc0be98e[0] != "string") return λe3147839ed2c.apply(λ8091715950cf, λ830ecc0be98e);
      let [λea56612f5398] = λ830ecc0be98e;
      return λea56612f5398 = λ252b5ba9c7c3.rewriteJS(λea56612f5398), λe3147839ed2c.call(λ8091715950cf, λea56612f5398);
    }), λ252b5ba9c7c3.call = function(λe3147839ed2c, λ8091715950cf, λ830ecc0be98e) {
      return λ830ecc0be98e ? λe3147839ed2c.apply(λ830ecc0be98e, λ8091715950cf) : λe3147839ed2c(...λ8091715950cf);
    }, λ252b5ba9c7c3.call$ = function(λe3147839ed2c, λ8091715950cf, λ830ecc0be98e = []) {
      return λe3147839ed2c[λ8091715950cf].apply(λe3147839ed2c, λ830ecc0be98e);
    }, λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ96d2e88fa2fc, {
      get: () => λ252b5ba9c7c3,
      enumerable: !1
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.setSource, {
      value: function(λe3147839ed2c) {
        return λa26e4d7ec6d8.nativeMethods.isExtensible(this) ? (λa26e4d7ec6d8.nativeMethods.defineProperty(this, λ252b5ba9c7c3.methods.source, {
          value: λe3147839ed2c,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.source, {
      value: λ252b5ba9c7c3,
      writable: !0,
      enumerable: !1
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.location, {
      configurable: !0,
      get() {
        return this === λa9c5879b3146.document || this === λa9c5879b3146 ? λ252b5ba9c7c3.location : this.location;
      },
      set(λe3147839ed2c) {
        this === λa9c5879b3146.document || this === λa9c5879b3146 ? λ252b5ba9c7c3.location.href = λe3147839ed2c : this.location = λe3147839ed2c;
      }
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.parent, {
      configurable: !0,
      get() {
        let λe3147839ed2c = this.parent;
        if (this === λa9c5879b3146) try {
          return "__uv" in λe3147839ed2c ? λe3147839ed2c : this;
        } catch {
          return this;
        }
        return λe3147839ed2c;
      },
      set(λe3147839ed2c) {
        this.parent = λe3147839ed2c;
      }
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.top, {
      configurable: !0,
      get() {
        let λe3147839ed2c = this.top;
        if (this === λa9c5879b3146) {
          if (λe3147839ed2c === this.parent) return this[λ252b5ba9c7c3.methods.parent];
          try {
            if ("__uv" in λe3147839ed2c) return λe3147839ed2c;
            {
              let λ8091715950cf = this;
              for (;λ8091715950cf.parent !== λe3147839ed2c; ) λ8091715950cf = λ8091715950cf.parent;
              return "__uv" in λ8091715950cf ? λ8091715950cf : this;
            }
          } catch {
            return this;
          }
        }
        return λe3147839ed2c;
      },
      set(λe3147839ed2c) {
        this.top = λe3147839ed2c;
      }
    }), λa26e4d7ec6d8.nativeMethods.defineProperty(λa9c5879b3146.Object.prototype, λ252b5ba9c7c3.methods.eval, {
      configurable: !0,
      get() {
        return this === λa9c5879b3146 ? λ252b5ba9c7c3.eval : this.eval;
      },
      set(λe3147839ed2c) {
        this.eval = λe3147839ed2c;
      }
    });
  }
})();
