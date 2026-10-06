"use strict";

(() => {
  var λ3729fdc6354c = self.StemConnect, λ0e48896c94b5 = self.UVClient, λ852c4d5172cc = self.__uv$config, λ6a98b426de5b = self.__uv$cookies;
  if (typeof λ6a98b426de5b != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λe79e569405cb) {
    if ("__uv" in λe79e569405cb && λe79e569405cb.__uv instanceof λ3729fdc6354c) return !1;
    λe79e569405cb.document && λe79e569405cb.window && λe79e569405cb.document.querySelectorAll("script[__uv-script]").forEach(λ3729fdc6354c => λ3729fdc6354c.remove());
    let λdc8f1df90a40 = !λe79e569405cb.window, λ76b1ae871649 = "__uv", λd21142626370 = "__uv$", λ7d2cc4413ae4 = new λ3729fdc6354c(λ852c4d5172cc), λ3e58e1105580;
    λdc8f1df90a40 ? λ3e58e1105580 = new λ3729fdc6354c.BareClient(new Promise(λ3729fdc6354c => {
      addEventListener("message", ({data: λ0e48896c94b5}) => {
        typeof λ0e48896c94b5 == "object" && "__uv$type" in λ0e48896c94b5 && λ0e48896c94b5.__uv$type === "baremuxinit" && λ3729fdc6354c(λ0e48896c94b5.port);
      });
    })) : λ3e58e1105580 = new λ3729fdc6354c.BareClient;
    let λ6972dcdb4c71 = new λ0e48896c94b5(λe79e569405cb, λ3e58e1105580, λdc8f1df90a40), {HTMLMediaElement: λ61a4e76dca7e, HTMLScriptElement: λe7668dc8a722, HTMLAudioElement: λ8c5af3fc6a7d, HTMLVideoElement: λf58196277dbd, HTMLInputElement: λ2c56dc49737e, HTMLEmbedElement: λ56b06ef0c400, HTMLTrackElement: λ78c42b44b0fb, HTMLAnchorElement: λec9eafc18065, HTMLIFrameElement: λ476ca64d99d3, HTMLAreaElement: λ367317c25f78, HTMLLinkElement: λd9e4345a95b0, HTMLBaseElement: λ4efb304e73cd, HTMLFormElement: λf7da0847375e, HTMLImageElement: λb69e66b0b32e, HTMLSourceElement: λ38d6aa5fae05} = λe79e569405cb;
    λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb, "__uv", {
      value: λ7d2cc4413ae4,
      enumerable: !1
    }), λ7d2cc4413ae4.meta.origin = location.origin, λ7d2cc4413ae4.location = λ6972dcdb4c71.location.emulate(λ3729fdc6354c => λ3729fdc6354c === "about:srcdoc" ? new URL(λ3729fdc6354c) : (λ3729fdc6354c.startsWith("blob:") && (λ3729fdc6354c = λ3729fdc6354c.slice(5)), 
    new URL(λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c))), λ3729fdc6354c => λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c));
    let λe221301977be = λ6a98b426de5b;
    if (λ7d2cc4413ae4.meta.url = λ7d2cc4413ae4.location, λ7d2cc4413ae4.domain = λ7d2cc4413ae4.meta.url.host, 
    λ7d2cc4413ae4.blobUrls = new λe79e569405cb.Map, λ7d2cc4413ae4.referrer = "", λ7d2cc4413ae4.cookies = [], 
    λ7d2cc4413ae4.localStorageObj = {}, λ7d2cc4413ae4.sessionStorageObj = {}, λ7d2cc4413ae4.location.href === "about:srcdoc" && (λ7d2cc4413ae4.meta = λe79e569405cb.parent.__uv.meta), 
    λe79e569405cb.EventTarget && (λ7d2cc4413ae4.addEventListener = λe79e569405cb.EventTarget.prototype.addEventListener, 
    λ7d2cc4413ae4.removeListener = λe79e569405cb.EventTarget.prototype.removeListener, 
    λ7d2cc4413ae4.dispatchEvent = λe79e569405cb.EventTarget.prototype.dispatchEvent), 
    λ6972dcdb4c71.nativeMethods.defineProperty(λ6972dcdb4c71.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λ6972dcdb4c71.storage.sessionStorage) return λ7d2cc4413ae4.sessionStorageObj;
        if (this === λ6972dcdb4c71.storage.localStorage) return λ7d2cc4413ae4.localStorageObj;
      },
      enumerable: !1
    }), λe79e569405cb.localStorage) {
      for (let λ3729fdc6354c in λe79e569405cb.localStorage) λ3729fdc6354c.startsWith(λd21142626370 + λ7d2cc4413ae4.location.origin + "@") && (λ7d2cc4413ae4.localStorageObj[λ3729fdc6354c.slice((λd21142626370 + λ7d2cc4413ae4.location.origin + "@").length)] = λe79e569405cb.localStorage.getItem(λ3729fdc6354c));
      λ7d2cc4413ae4.lsWrap = λ6972dcdb4c71.storage.emulate(λ6972dcdb4c71.storage.localStorage, λ7d2cc4413ae4.localStorageObj);
    }
    if (λe79e569405cb.sessionStorage) {
      for (let λ3729fdc6354c in λe79e569405cb.sessionStorage) λ3729fdc6354c.startsWith(λd21142626370 + λ7d2cc4413ae4.location.origin + "@") && (λ7d2cc4413ae4.sessionStorageObj[λ3729fdc6354c.slice((λd21142626370 + λ7d2cc4413ae4.location.origin + "@").length)] = λe79e569405cb.sessionStorage.getItem(λ3729fdc6354c));
      λ7d2cc4413ae4.ssWrap = λ6972dcdb4c71.storage.emulate(λ6972dcdb4c71.storage.sessionStorage, λ7d2cc4413ae4.sessionStorageObj);
    }
    let λ0faeab1aa0cb = λe79e569405cb.document ? λ6972dcdb4c71.node.baseURI.get.call(λe79e569405cb.document) : λe79e569405cb.location.href, λbb6f960b14bf = λ7d2cc4413ae4.sourceUrl(λ0faeab1aa0cb);
    λ6972dcdb4c71.nativeMethods.defineProperty(λ7d2cc4413ae4.meta, "base", {
      get() {
        return λe79e569405cb.document ? (λ6972dcdb4c71.node.baseURI.get.call(λe79e569405cb.document) !== λ0faeab1aa0cb && (λ0faeab1aa0cb = λ6972dcdb4c71.node.baseURI.get.call(λe79e569405cb.document), 
        λbb6f960b14bf = λ7d2cc4413ae4.sourceUrl(λ0faeab1aa0cb)), λbb6f960b14bf) : λ7d2cc4413ae4.meta.url.href;
      }
    }), λ7d2cc4413ae4.methods = {
      setSource: λd21142626370 + "setSource",
      source: λd21142626370 + "source",
      location: λd21142626370 + "location",
      function: λd21142626370 + "function",
      string: λd21142626370 + "string",
      eval: λd21142626370 + "eval",
      parent: λd21142626370 + "parent",
      top: λd21142626370 + "top"
    }, λ7d2cc4413ae4.filterKeys = [ λ76b1ae871649, λ7d2cc4413ae4.methods.setSource, λ7d2cc4413ae4.methods.source, λ7d2cc4413ae4.methods.location, λ7d2cc4413ae4.methods.function, λ7d2cc4413ae4.methods.string, λ7d2cc4413ae4.methods.eval, λ7d2cc4413ae4.methods.parent, λ7d2cc4413ae4.methods.top, λd21142626370 + "protocol", λd21142626370 + "storageObj", λd21142626370 + "url", λd21142626370 + "modifiedStyle", λd21142626370 + "config", λd21142626370 + "dispatched", "StemConnect", "__uvHook" ], 
    λ6972dcdb4c71.on("wrap", (λ3729fdc6354c, λ0e48896c94b5) => {
      λ6972dcdb4c71.nativeMethods.defineProperty(λ0e48896c94b5, "name", λ6972dcdb4c71.nativeMethods.getOwnPropertyDescriptor(λ3729fdc6354c, "name")), 
      λ6972dcdb4c71.nativeMethods.defineProperty(λ0e48896c94b5, "length", λ6972dcdb4c71.nativeMethods.getOwnPropertyDescriptor(λ3729fdc6354c, "length")), 
      λ6972dcdb4c71.nativeMethods.defineProperty(λ0e48896c94b5, λ7d2cc4413ae4.methods.string, {
        enumerable: !1,
        value: λ6972dcdb4c71.nativeMethods.fnToString.call(λ3729fdc6354c)
      }), λ6972dcdb4c71.nativeMethods.defineProperty(λ0e48896c94b5, λ7d2cc4413ae4.methods.function, {
        enumerable: !1,
        value: λ3729fdc6354c
      });
    }), λ6972dcdb4c71.fetch.on("request", λ3729fdc6354c => {
      λ3729fdc6354c.data.input = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.input);
    }), λ6972dcdb4c71.fetch.on("requestUrl", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.fetch.on("responseUrl", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.xhr.on("open", λ3729fdc6354c => {
      λ3729fdc6354c.data.input = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.input);
    }), λ6972dcdb4c71.xhr.on("responseUrl", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.workers.on("worker", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.workers.on("addModule", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.workers.on("importScripts", λ3729fdc6354c => {
      for (let λ0e48896c94b5 in λ3729fdc6354c.data.scripts) λ3729fdc6354c.data.scripts[λ0e48896c94b5] = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.scripts[λ0e48896c94b5]);
    }), λ6972dcdb4c71.workers.on("postMessage", λ3729fdc6354c => {
      let λ0e48896c94b5 = λ3729fdc6354c.data.origin;
      λ3729fdc6354c.data.origin = "*", λ3729fdc6354c.data.message = {
        __data: λ3729fdc6354c.data.message,
        __origin: λ7d2cc4413ae4.meta.url.origin,
        __to: λ0e48896c94b5
      };
    }), λ6972dcdb4c71.navigator.on("sendBeacon", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.document.on("getCookie", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λe221301977be;
    }), λ6972dcdb4c71.document.on("setCookie", λ3729fdc6354c => {
      λ7d2cc4413ae4.cookie.db().then(λ0e48896c94b5 => {
        λ7d2cc4413ae4.cookie.setCookies(λ3729fdc6354c.data.value, λ0e48896c94b5, λ7d2cc4413ae4.meta), 
        λ7d2cc4413ae4.cookie.getCookies(λ0e48896c94b5).then(λ3729fdc6354c => {
          λe221301977be = λ7d2cc4413ae4.cookie.serialize(λ3729fdc6354c, λ7d2cc4413ae4.meta, !0);
        });
      });
      let λ0e48896c94b5 = λ7d2cc4413ae4.cookie.setCookie(λ3729fdc6354c.data.value)[0];
      λ0e48896c94b5.path || (λ0e48896c94b5.path = "/"), λ0e48896c94b5.domain || (λ0e48896c94b5.domain = λ7d2cc4413ae4.meta.url.hostname), 
      λ7d2cc4413ae4.cookie.validateCookie(λ0e48896c94b5, λ7d2cc4413ae4.meta, !0) && (λe221301977be.length && (λe221301977be += "; "), 
      λe221301977be += `${λ0e48896c94b5.name}=${λ0e48896c94b5.value}`), λ3729fdc6354c.respondWith(λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.element.on("setInnerHTML", λ3729fdc6354c => {
      switch (λ3729fdc6354c.that.tagName) {
       case "SCRIPT":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.js.rewrite(λ3729fdc6354c.data.value);
        break;

       case "STYLE":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value);
        break;

       default:
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.value);
      }
    }), λ6972dcdb4c71.element.on("getInnerHTML", λ3729fdc6354c => {
      switch (λ3729fdc6354c.that.tagName) {
       case "SCRIPT":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.js.source(λ3729fdc6354c.data.value);
        break;

       case "STYLE":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceCSS(λ3729fdc6354c.data.value);
        break;

       default:
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceHtml(λ3729fdc6354c.data.value);
      }
    }), λ6972dcdb4c71.element.on("setOuterHTML", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.value, {
        document: λ3729fdc6354c.that.tagName === "HTML"
      });
    }), λ6972dcdb4c71.element.on("getOuterHTML", λ3729fdc6354c => {
      switch (λ3729fdc6354c.that.tagName) {
       case "HEAD":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceHtml(λ3729fdc6354c.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceHtml(λ3729fdc6354c.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceHtml(λ3729fdc6354c.data.value, {
          document: λ3729fdc6354c.that.tagName === "HTML"
        });
        break;
      }
    }), λ6972dcdb4c71.document.on("write", λ3729fdc6354c => {
      if (!λ3729fdc6354c.data.html.length) return !1;
      λ3729fdc6354c.data.html = [ λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.html.join("")) ];
    }), λ6972dcdb4c71.document.on("writeln", λ3729fdc6354c => {
      if (!λ3729fdc6354c.data.html.length) return !1;
      λ3729fdc6354c.data.html = [ λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.html.join("")) ];
    }), λ6972dcdb4c71.element.on("insertAdjacentHTML", λ3729fdc6354c => {
      λ3729fdc6354c.data.html = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.html);
    }), λ6972dcdb4c71.eventSource.on("construct", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.eventSource.on("url", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.idb.on("idbFactoryOpen", λ3729fdc6354c => {
      λ3729fdc6354c.data.name !== "__op" && (λ3729fdc6354c.data.name = `${λ7d2cc4413ae4.meta.url.origin}@${λ3729fdc6354c.data.name}`);
    }), λ6972dcdb4c71.idb.on("idbFactoryName", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ3729fdc6354c.data.value.slice(λ7d2cc4413ae4.meta.url.origin.length + 1);
    }), λ6972dcdb4c71.history.on("replaceState", λ3729fdc6354c => {
      λ3729fdc6354c.data.url && (λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url, "__uv" in λ3729fdc6354c.that ? λ3729fdc6354c.that.__uv.meta : λ7d2cc4413ae4.meta));
    }), λ6972dcdb4c71.history.on("pushState", λ3729fdc6354c => {
      λ3729fdc6354c.data.url && (λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url, "__uv" in λ3729fdc6354c.that ? λ3729fdc6354c.that.__uv.meta : λ7d2cc4413ae4.meta));
    }), λ6972dcdb4c71.element.on("getAttribute", λ3729fdc6354c => {
      λ6972dcdb4c71.element.hasAttribute.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name) && λ3729fdc6354c.respondWith(λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name));
    }), λ6972dcdb4c71.message.on("postMessage", λ3729fdc6354c => {
      let λ0e48896c94b5 = λ3729fdc6354c.data.origin, λ852c4d5172cc = λ7d2cc4413ae4.call;
      λ3729fdc6354c.that && (λ852c4d5172cc = λ3729fdc6354c.that.__uv$source.call), λ3729fdc6354c.data.origin = "*", 
      λ3729fdc6354c.data.message = {
        __data: λ3729fdc6354c.data.message,
        __origin: (λ3729fdc6354c.that || λ3729fdc6354c.target).__uv$source.location.origin,
        __to: λ0e48896c94b5
      }, (() => {
        let λ0e48896c94b5 = λ3729fdc6354c.data.transfer || [];
        try {
          const λ852c4d5172cc = new Set(λ0e48896c94b5);
          const λ6a98b426de5b = new Set;
          const a = λ3729fdc6354c => {
            if (!λ3729fdc6354c || typeof λ3729fdc6354c != "object" || λ6a98b426de5b.has(λ3729fdc6354c)) return;
            λ6a98b426de5b.add(λ3729fdc6354c);
            let λ0e48896c94b5 = "";
            try {
              λ0e48896c94b5 = Object.prototype.toString.call(λ3729fdc6354c);
            } catch {}
            if (typeof MessagePort != "undefined" && λ3729fdc6354c instanceof MessagePort || λ0e48896c94b5 === "[object MessagePort]") {
              λ852c4d5172cc.add(λ3729fdc6354c);
              return;
            }
            if (Array.isArray(λ3729fdc6354c)) {
              for (const λ0e48896c94b5 of λ3729fdc6354c) a(λ0e48896c94b5);
              return;
            }
            for (const λ0e48896c94b5 of Object.values(λ3729fdc6354c)) a(λ0e48896c94b5);
          };
          a(λ3729fdc6354c.data.message);
          λ0e48896c94b5 = [ ...λ852c4d5172cc ];
        } catch {}
        return λ3729fdc6354c.respondWith(λdc8f1df90a40 ? λ852c4d5172cc(λ3729fdc6354c.target, [ λ3729fdc6354c.data.message, λ0e48896c94b5 ], λ3729fdc6354c.that) : λ852c4d5172cc(λ3729fdc6354c.target, [ λ3729fdc6354c.data.message, λ3729fdc6354c.data.origin, λ0e48896c94b5 ], λ3729fdc6354c.that));
      })();
    }), λ6972dcdb4c71.message.on("data", λ3729fdc6354c => {
      let {value: λ0e48896c94b5} = λ3729fdc6354c.data;
      typeof λ0e48896c94b5 == "object" && "__data" in λ0e48896c94b5 && "__origin" in λ0e48896c94b5 && λ3729fdc6354c.respondWith(λ0e48896c94b5.__data);
    }), λ6972dcdb4c71.message.on("origin", λ3729fdc6354c => {
      let λ0e48896c94b5 = λ6972dcdb4c71.message.messageData.get.call(λ3729fdc6354c.that);
      typeof λ0e48896c94b5 == "object" && λ0e48896c94b5.__data && λ0e48896c94b5.__origin && λ3729fdc6354c.respondWith(λ0e48896c94b5.__origin);
    }), λ6972dcdb4c71.overrideDescriptor(λe79e569405cb, "origin", {
      get: () => λ7d2cc4413ae4.location.origin
    }), λ6972dcdb4c71.node.on("baseURI", λ3729fdc6354c => {
      λ3729fdc6354c.data.value.startsWith(λe79e569405cb.location.origin) && (λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.data.value));
    }), λ6972dcdb4c71.element.on("setAttribute", λ3729fdc6354c => {
      if (λ3729fdc6354c.that instanceof λ61a4e76dca7e && λ3729fdc6354c.data.name === "src" && λ3729fdc6354c.data.value.startsWith("blob:")) {
        λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.blobUrls.get(λ3729fdc6354c.data.value);
        return;
      }
      λ7d2cc4413ae4.attrs.isUrl(λ3729fdc6354c.data.name) && (λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.value)), 
      λ7d2cc4413ae4.attrs.isStyle(λ3729fdc6354c.data.name) && (λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value, {
        context: "declarationList"
      })), λ7d2cc4413ae4.attrs.isHtml(λ3729fdc6354c.data.name) && (λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.value, {
        ...λ7d2cc4413ae4.meta,
        document: !0,
        injectHead: λ7d2cc4413ae4.createHtmlInject(λ7d2cc4413ae4.handlerScript, λ7d2cc4413ae4.bundleScript, λ7d2cc4413ae4.clientScript, λ7d2cc4413ae4.configScript, λe221301977be, λe79e569405cb.location.href)
      })), λ7d2cc4413ae4.attrs.isSrcset(λ3729fdc6354c.data.name) && (λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.html.wrapSrcset(λ3729fdc6354c.data.value.toString())), 
      λ7d2cc4413ae4.attrs.isForbidden(λ3729fdc6354c.data.name) && (λ3729fdc6354c.data.name = λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name);
    }), λ6972dcdb4c71.element.on("audio", λ3729fdc6354c => {
      λ3729fdc6354c.data.url = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.url);
    }), λ6972dcdb4c71.element.hookProperty([ λec9eafc18065, λ367317c25f78, λd9e4345a95b0, λ4efb304e73cd ], "href", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.call(λ0e48896c94b5)),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-href", λ852c4d5172cc), 
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.rewriteUrl(λ852c4d5172cc));
      }
    }), λ6972dcdb4c71.element.hookProperty([ λe7668dc8a722, λ8c5af3fc6a7d, λf58196277dbd, λ61a4e76dca7e, λb69e66b0b32e, λ2c56dc49737e, λ56b06ef0c400, λ476ca64d99d3, λ78c42b44b0fb, λ38d6aa5fae05 ], "src", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.call(λ0e48896c94b5)),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        if (new String(λ852c4d5172cc).toString().trim().startsWith("blob:") && λ0e48896c94b5 instanceof λ61a4e76dca7e) return λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-src", λ852c4d5172cc), 
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.blobUrls.get(λ852c4d5172cc) || λ852c4d5172cc);
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-src", λ852c4d5172cc), 
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.rewriteUrl(λ852c4d5172cc));
      }
    }), λ6972dcdb4c71.element.hookProperty([ λf7da0847375e ], "action", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.call(λ0e48896c94b5)),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-action", λ852c4d5172cc), 
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.rewriteUrl(λ852c4d5172cc));
      }
    }), λ6972dcdb4c71.element.hookProperty([ λb69e66b0b32e, λ38d6aa5fae05 ], "srcset", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ6972dcdb4c71.element.getAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-srcset") || λ3729fdc6354c.call(λ0e48896c94b5),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-srcset", λ852c4d5172cc), 
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.html.wrapSrcset(λ852c4d5172cc.toString()));
      }
    }), λ6972dcdb4c71.element.hookProperty(λe7668dc8a722, "integrity", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ6972dcdb4c71.element.getAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-integrity"),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-integrity", λ852c4d5172cc);
      }
    }), λ6972dcdb4c71.element.hookProperty(λ476ca64d99d3, "sandbox", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ6972dcdb4c71.element.getAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-sandbox") || λ3729fdc6354c.call(λ0e48896c94b5),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ6972dcdb4c71.element.setAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-sandbox", λ852c4d5172cc);
      }
    });
    let λ98321d0b1a11 = λ476ca64d99d3 && Object.getOwnPropertyDescriptor(λ476ca64d99d3.prototype, "contentWindow").get;
    function U(λ3729fdc6354c) {
      let λ0e48896c94b5 = λ98321d0b1a11.call(λ3729fdc6354c);
      if (!λ0e48896c94b5.__uv) try {
        p(λ0e48896c94b5);
      } catch (λ3729fdc6354c) {
        console.error("catastrophic failure"), console.error(λ3729fdc6354c);
      }
    }
    if (λ6972dcdb4c71.element.hookProperty(λ476ca64d99d3, "contentWindow", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => (U(λ0e48896c94b5), λ3729fdc6354c.call(λ0e48896c94b5))
    }), λ6972dcdb4c71.element.hookProperty(λ476ca64d99d3, "contentDocument", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => (U(λ0e48896c94b5), λ3729fdc6354c.call(λ0e48896c94b5))
    }), λ6972dcdb4c71.element.hookProperty(λ476ca64d99d3, "srcdoc", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ6972dcdb4c71.element.getAttribute.call(λ0e48896c94b5, λ7d2cc4413ae4.attributePrefix + "-attr-srcdoc") || λ3729fdc6354c.call(λ0e48896c94b5),
      set: (λ3729fdc6354c, λ0e48896c94b5, [λ852c4d5172cc]) => {
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.rewriteHtml(λ852c4d5172cc, {
          document: !0,
          injectHead: λ7d2cc4413ae4.createHtmlInject(λ7d2cc4413ae4.handlerScript, λ7d2cc4413ae4.bundleScript, λ7d2cc4413ae4.clientScript, λ7d2cc4413ae4.configScript, λe221301977be, λe79e569405cb.location.href)
        }));
      }
    }), λ6972dcdb4c71.node.on("getTextContent", λ3729fdc6354c => {
      switch (λ3729fdc6354c.that.tagName) {
       case "SCRIPT":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.js.source(λ3729fdc6354c.data.value);
        break;

       case "STYLE":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceCSS(λ3729fdc6354c.data.value);
        break;

       default:
      }
    }), λ6972dcdb4c71.node.on("setTextContent", λ3729fdc6354c => {
      switch (λ3729fdc6354c.that.tagName) {
       case "SCRIPT":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.js.rewrite(λ3729fdc6354c.data.value);
        break;

       case "STYLE":
        λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λe79e569405cb.navigator && delete λe79e569405cb.Navigator.prototype.serviceWorker, 
    λ6972dcdb4c71.document.on("getDomain", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.domain;
    }), λ6972dcdb4c71.document.on("setDomain", λ3729fdc6354c => {
      if (!λ3729fdc6354c.data.value.toString().endsWith(λ7d2cc4413ae4.meta.url.hostname.split(".").slice(-2).join("."))) return λ3729fdc6354c.respondWith("");
      λ3729fdc6354c.respondWith(λ7d2cc4413ae4.domain = λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.document.on("url", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.location.href;
    }), λ6972dcdb4c71.document.on("documentURI", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.location.href;
    }), λ6972dcdb4c71.document.on("referrer", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.referrer || λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c.data.value);
    }), λ6972dcdb4c71.document.on("parseFromString", λ3729fdc6354c => {
      if (λ3729fdc6354c.data.type !== "text/html") return !1;
      λ3729fdc6354c.data.string = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.string, {
        ...λ7d2cc4413ae4.meta,
        document: !0
      });
    }), λ6972dcdb4c71.attribute.on("getValue", λ3729fdc6354c => {
      λ6972dcdb4c71.element.hasAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name) && (λ3729fdc6354c.data.value = λ6972dcdb4c71.element.getAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name));
    }), λ6972dcdb4c71.attribute.on("setValue", λ3729fdc6354c => {
      λ7d2cc4413ae4.attrs.isUrl(λ3729fdc6354c.data.name) && (λ6972dcdb4c71.element.setAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteUrl(λ3729fdc6354c.data.value)), 
      λ7d2cc4413ae4.attrs.isStyle(λ3729fdc6354c.data.name) && (λ6972dcdb4c71.element.setAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value, {
        context: "declarationList"
      })), λ7d2cc4413ae4.attrs.isHtml(λ3729fdc6354c.data.name) && (λ6972dcdb4c71.element.setAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteHtml(λ3729fdc6354c.data.value, {
        ...λ7d2cc4413ae4.meta,
        document: !0,
        injectHead: λ7d2cc4413ae4.createHtmlInject(λ7d2cc4413ae4.handlerScript, λ7d2cc4413ae4.bundleScript, λ7d2cc4413ae4.clientScript, λ7d2cc4413ae4.configScript, λe221301977be, λe79e569405cb.location.href)
      })), λ7d2cc4413ae4.attrs.isSrcset(λ3729fdc6354c.data.name) && (λ6972dcdb4c71.element.setAttribute.call(λ3729fdc6354c.that.ownerElement, λ7d2cc4413ae4.attributePrefix + "-attr-" + λ3729fdc6354c.data.name, λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.html.wrapSrcset(λ3729fdc6354c.data.value.toString()));
    }), λ6972dcdb4c71.url.on("createObjectURL", λ3729fdc6354c => {
      let λ0e48896c94b5 = λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ3729fdc6354c.data.object);
      if (λ0e48896c94b5.startsWith("blob:" + location.origin)) {
        let λ852c4d5172cc = "blob:" + (λ7d2cc4413ae4.meta.url.href !== "about:blank" ? λ7d2cc4413ae4.meta.url.origin : λe79e569405cb.parent.__uv.meta.url.origin) + λ0e48896c94b5.slice(5 + location.origin.length);
        λ7d2cc4413ae4.blobUrls.set(λ852c4d5172cc, λ0e48896c94b5), λ3729fdc6354c.respondWith(λ852c4d5172cc);
      } else λ3729fdc6354c.respondWith(λ0e48896c94b5);
    }), λ6972dcdb4c71.url.on("revokeObjectURL", λ3729fdc6354c => {
      if (λ7d2cc4413ae4.blobUrls.has(λ3729fdc6354c.data.url)) {
        let λ0e48896c94b5 = λ3729fdc6354c.data.url;
        λ3729fdc6354c.data.url = λ7d2cc4413ae4.blobUrls.get(λ3729fdc6354c.data.url), λ7d2cc4413ae4.blobUrls.delete(λ0e48896c94b5);
      }
    }), λ6972dcdb4c71.storage.on("get", λ3729fdc6354c => {
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("set", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && (λ3729fdc6354c.that.__uv$storageObj[λ3729fdc6354c.data.name] = λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("delete", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && delete λ3729fdc6354c.that.__uv$storageObj[λ3729fdc6354c.data.name], 
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("getItem", λ3729fdc6354c => {
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("setItem", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && (λ3729fdc6354c.that.__uv$storageObj[λ3729fdc6354c.data.name] = λ3729fdc6354c.data.value), 
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("removeItem", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && delete λ3729fdc6354c.that.__uv$storageObj[λ3729fdc6354c.data.name], 
      λ3729fdc6354c.data.name = λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ3729fdc6354c.data.name;
    }), λ6972dcdb4c71.storage.on("clear", λ3729fdc6354c => {
      if (λ3729fdc6354c.that.__uv$storageObj) for (let λ0e48896c94b5 of λ6972dcdb4c71.nativeMethods.keys.call(null, λ3729fdc6354c.that.__uv$storageObj)) delete λ3729fdc6354c.that.__uv$storageObj[λ0e48896c94b5], 
      λ6972dcdb4c71.storage.removeItem.call(λ3729fdc6354c.that, λd21142626370 + λ7d2cc4413ae4.meta.url.origin + "@" + λ0e48896c94b5), 
      λ3729fdc6354c.respondWith();
    }), λ6972dcdb4c71.storage.on("length", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && λ3729fdc6354c.respondWith(λ6972dcdb4c71.nativeMethods.keys.call(null, λ3729fdc6354c.that.__uv$storageObj).length);
    }), λ6972dcdb4c71.storage.on("key", λ3729fdc6354c => {
      λ3729fdc6354c.that.__uv$storageObj && λ3729fdc6354c.respondWith(λ6972dcdb4c71.nativeMethods.keys.call(null, λ3729fdc6354c.that.__uv$storageObj)[λ3729fdc6354c.data.index] || null);
    }), λ6972dcdb4c71.function.on("function", λ3729fdc6354c => {
      λ3729fdc6354c.data.script = λ7d2cc4413ae4.rewriteJS(λ3729fdc6354c.data.script);
    }), λ6972dcdb4c71.function.on("toString", λ3729fdc6354c => {
      λ7d2cc4413ae4.methods.string in λ3729fdc6354c.that && λ3729fdc6354c.respondWith(λ3729fdc6354c.that[λ7d2cc4413ae4.methods.string]);
    }), λ6972dcdb4c71.object.on("getOwnPropertyNames", λ3729fdc6354c => {
      λ3729fdc6354c.data.names = λ3729fdc6354c.data.names.filter(λ3729fdc6354c => !λ7d2cc4413ae4.filterKeys.includes(λ3729fdc6354c));
    }), λ6972dcdb4c71.object.on("getOwnPropertyDescriptors", λ3729fdc6354c => {
      for (let λ0e48896c94b5 of λ7d2cc4413ae4.filterKeys) delete λ3729fdc6354c.data.descriptors[λ0e48896c94b5];
    }), λ6972dcdb4c71.style.on("setProperty", λ3729fdc6354c => {
      λ6972dcdb4c71.style.dashedUrlProps.includes(λ3729fdc6354c.data.property) && (λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value, {
        context: "value",
        ...λ7d2cc4413ae4.meta
      }));
    }), λ6972dcdb4c71.style.on("getPropertyValue", λ3729fdc6354c => {
      λ6972dcdb4c71.style.dashedUrlProps.includes(λ3729fdc6354c.data.property) && λ3729fdc6354c.respondWith(λ7d2cc4413ae4.sourceCSS(λ3729fdc6354c.target.call(λ3729fdc6354c.that, λ3729fdc6354c.data.property), {
        context: "value",
        ...λ7d2cc4413ae4.meta
      }));
    }), "CSS2Properties" in λe79e569405cb) for (let λ3729fdc6354c of λ6972dcdb4c71.style.urlProps) λ6972dcdb4c71.overrideDescriptor(λe79e569405cb.CSS2Properties.prototype, λ3729fdc6354c, {
      get: (λ3729fdc6354c, λ0e48896c94b5) => λ7d2cc4413ae4.sourceCSS(λ3729fdc6354c.call(λ0e48896c94b5), {
        context: "value",
        ...λ7d2cc4413ae4.meta
      }),
      set: (λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc) => {
        λ3729fdc6354c.call(λ0e48896c94b5, λ7d2cc4413ae4.rewriteCSS(λ852c4d5172cc, {
          context: "value",
          ...λ7d2cc4413ae4.meta
        }));
      }
    }); else "HTMLElement" in λe79e569405cb && λ6972dcdb4c71.overrideDescriptor(λe79e569405cb.HTMLElement.prototype, "style", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => {
        let λ852c4d5172cc = λ3729fdc6354c.call(λ0e48896c94b5);
        if (!λ852c4d5172cc[λd21142626370 + "modifiedStyle"]) for (let λ3729fdc6354c of λ6972dcdb4c71.style.urlProps) λ6972dcdb4c71.nativeMethods.defineProperty(λ852c4d5172cc, λ3729fdc6354c, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λ0e48896c94b5 = λ6972dcdb4c71.style.getPropertyValue.call(this, λ3729fdc6354c) || "";
            return λ7d2cc4413ae4.sourceCSS(λ0e48896c94b5, {
              context: "value",
              ...λ7d2cc4413ae4.meta
            });
          },
          set(λ0e48896c94b5) {
            λ6972dcdb4c71.style.setProperty.call(this, λ6972dcdb4c71.style.propToDashed[λ3729fdc6354c] || λ3729fdc6354c, λ7d2cc4413ae4.rewriteCSS(λ0e48896c94b5, {
              context: "value",
              ...λ7d2cc4413ae4.meta
            }));
          }
        }), λ6972dcdb4c71.nativeMethods.defineProperty(λ852c4d5172cc, λd21142626370 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ852c4d5172cc;
      }
    });
    λ6972dcdb4c71.style.on("setCssText", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.rewriteCSS(λ3729fdc6354c.data.value, {
        context: "declarationList",
        ...λ7d2cc4413ae4.meta
      });
    }), λ6972dcdb4c71.style.on("getCssText", λ3729fdc6354c => {
      λ3729fdc6354c.data.value = λ7d2cc4413ae4.sourceCSS(λ3729fdc6354c.data.value, {
        context: "declarationList",
        ...λ7d2cc4413ae4.meta
      });
    }), λ7d2cc4413ae4.addEventListener.call(λe79e569405cb, "hashchange", λ3729fdc6354c => {
      if (λ3729fdc6354c.__uv$dispatched) return !1;
      λ3729fdc6354c.stopImmediatePropagation();
      let λ0e48896c94b5 = λe79e569405cb.location.hash;
      λ6972dcdb4c71.history.replaceState.call(λe79e569405cb.history, "", "", λ3729fdc6354c.oldURL), 
      λ7d2cc4413ae4.location.hash = λ0e48896c94b5;
    }), λ6972dcdb4c71.location.on("hashchange", (λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc) => {
      if (λ852c4d5172cc.HashChangeEvent && λ6972dcdb4c71.history.replaceState) {
        λ6972dcdb4c71.history.replaceState.call(λe79e569405cb.history, "", "", λ7d2cc4413ae4.rewriteUrl(λ0e48896c94b5));
        let λ6a98b426de5b = new λ852c4d5172cc.HashChangeEvent("hashchange", {
          newURL: λ0e48896c94b5,
          oldURL: λ3729fdc6354c
        });
        λ6972dcdb4c71.nativeMethods.defineProperty(λ6a98b426de5b, λd21142626370 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ7d2cc4413ae4.dispatchEvent.call(λe79e569405cb, λ6a98b426de5b);
      }
    }), λ6972dcdb4c71.fetch.overrideRequest(), λ6972dcdb4c71.fetch.overrideUrl(), λ6972dcdb4c71.xhr.overrideOpen(), 
    λ6972dcdb4c71.xhr.overrideResponseUrl(), λ6972dcdb4c71.element.overrideHtml(), λ6972dcdb4c71.element.overrideAttribute(), 
    λ6972dcdb4c71.element.overrideInsertAdjacentHTML(), λ6972dcdb4c71.element.overrideAudio(), 
    λ6972dcdb4c71.node.overrideBaseURI(), λ6972dcdb4c71.node.overrideTextContent(), 
    λ6972dcdb4c71.attribute.overrideNameValue(), λ6972dcdb4c71.document.overrideDomain(), 
    λ6972dcdb4c71.document.overrideURL(), λ6972dcdb4c71.document.overrideDocumentURI(), 
    λ6972dcdb4c71.document.overrideWrite(), λ6972dcdb4c71.document.overrideReferrer(), 
    λ6972dcdb4c71.document.overrideParseFromString(), λ6972dcdb4c71.storage.overrideMethods(), 
    λ6972dcdb4c71.storage.overrideLength(), λ6972dcdb4c71.object.overrideGetPropertyNames(), 
    λ6972dcdb4c71.object.overrideGetOwnPropertyDescriptors(), λ6972dcdb4c71.idb.overrideName(), 
    λ6972dcdb4c71.idb.overrideOpen(), λ6972dcdb4c71.history.overridePushState(), λ6972dcdb4c71.history.overrideReplaceState(), 
    λ6972dcdb4c71.eventSource.overrideConstruct(), λ6972dcdb4c71.eventSource.overrideUrl(), 
    λ6972dcdb4c71.websocket.overrideWebSocket(λ3e58e1105580), λ6972dcdb4c71.url.overrideObjectURL(), 
    λ6972dcdb4c71.document.overrideCookie(), λ6972dcdb4c71.message.overridePostMessage(), 
    λ6972dcdb4c71.message.overrideMessageOrigin(), λ6972dcdb4c71.message.overrideMessageData(), 
    λ6972dcdb4c71.workers.overrideWorker(), λ6972dcdb4c71.workers.overrideAddModule(), 
    λ6972dcdb4c71.workers.overrideImportScripts(), λ6972dcdb4c71.workers.overridePostMessage(), 
    λ6972dcdb4c71.style.overrideSetGetProperty(), λ6972dcdb4c71.style.overrideCssText(), 
    λ6972dcdb4c71.navigator.overrideSendBeacon(), λ6972dcdb4c71.function.overrideFunction(), 
    λ6972dcdb4c71.function.overrideToString(), λ6972dcdb4c71.location.overrideWorkerLocation(λ3729fdc6354c => new URL(λ7d2cc4413ae4.sourceUrl(λ3729fdc6354c))), 
    λ6972dcdb4c71.overrideDescriptor(λe79e569405cb, "localStorage", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => (λ0e48896c94b5 || λe79e569405cb).__uv.lsWrap
    }), λ6972dcdb4c71.overrideDescriptor(λe79e569405cb, "sessionStorage", {
      get: (λ3729fdc6354c, λ0e48896c94b5) => (λ0e48896c94b5 || λe79e569405cb).__uv.ssWrap
    }), λ6972dcdb4c71.override(λe79e569405cb, "open", (λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc) => {
      if (!λ852c4d5172cc.length) return λ3729fdc6354c.apply(λ0e48896c94b5, λ852c4d5172cc);
      let [λ6a98b426de5b] = λ852c4d5172cc;
      return λ6a98b426de5b = λ7d2cc4413ae4.rewriteUrl(λ6a98b426de5b), λ3729fdc6354c.call(λ0e48896c94b5, λ6a98b426de5b);
    }), λ7d2cc4413ae4.$wrap = function(λ3729fdc6354c) {
      return λ3729fdc6354c === "location" ? λ7d2cc4413ae4.methods.location : λ3729fdc6354c === "eval" ? λ7d2cc4413ae4.methods.eval : λ3729fdc6354c;
    }, λ7d2cc4413ae4.$get = function(λ3729fdc6354c) {
      return λ3729fdc6354c === λe79e569405cb.location ? λ7d2cc4413ae4.location : λ3729fdc6354c === λe79e569405cb.eval ? λ7d2cc4413ae4.eval : λ3729fdc6354c === λe79e569405cb.parent ? λe79e569405cb.__uv$parent : λ3729fdc6354c === λe79e569405cb.top ? λe79e569405cb.__uv$top : λ3729fdc6354c;
    }, λ7d2cc4413ae4.eval = λ6972dcdb4c71.wrap(λe79e569405cb, "eval", (λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc) => {
      if (!λ852c4d5172cc.length || typeof λ852c4d5172cc[0] != "string") return λ3729fdc6354c.apply(λ0e48896c94b5, λ852c4d5172cc);
      let [λ6a98b426de5b] = λ852c4d5172cc;
      return λ6a98b426de5b = λ7d2cc4413ae4.rewriteJS(λ6a98b426de5b), λ3729fdc6354c.call(λ0e48896c94b5, λ6a98b426de5b);
    }), λ7d2cc4413ae4.call = function(λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc) {
      return λ852c4d5172cc ? λ3729fdc6354c.apply(λ852c4d5172cc, λ0e48896c94b5) : λ3729fdc6354c(...λ0e48896c94b5);
    }, λ7d2cc4413ae4.call$ = function(λ3729fdc6354c, λ0e48896c94b5, λ852c4d5172cc = []) {
      return λ3729fdc6354c[λ0e48896c94b5].apply(λ3729fdc6354c, λ852c4d5172cc);
    }, λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ76b1ae871649, {
      get: () => λ7d2cc4413ae4,
      enumerable: !1
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.setSource, {
      value: function(λ3729fdc6354c) {
        return λ6972dcdb4c71.nativeMethods.isExtensible(this) ? (λ6972dcdb4c71.nativeMethods.defineProperty(this, λ7d2cc4413ae4.methods.source, {
          value: λ3729fdc6354c,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.source, {
      value: λ7d2cc4413ae4,
      writable: !0,
      enumerable: !1
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.location, {
      configurable: !0,
      get() {
        return this === λe79e569405cb.document || this === λe79e569405cb ? λ7d2cc4413ae4.location : this.location;
      },
      set(λ3729fdc6354c) {
        this === λe79e569405cb.document || this === λe79e569405cb ? λ7d2cc4413ae4.location.href = λ3729fdc6354c : this.location = λ3729fdc6354c;
      }
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.parent, {
      configurable: !0,
      get() {
        let λ3729fdc6354c = this.parent;
        if (this === λe79e569405cb) try {
          return "__uv" in λ3729fdc6354c ? λ3729fdc6354c : this;
        } catch {
          return this;
        }
        return λ3729fdc6354c;
      },
      set(λ3729fdc6354c) {
        this.parent = λ3729fdc6354c;
      }
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.top, {
      configurable: !0,
      get() {
        let λ3729fdc6354c = this.top;
        if (this === λe79e569405cb) {
          if (λ3729fdc6354c === this.parent) return this[λ7d2cc4413ae4.methods.parent];
          try {
            if ("__uv" in λ3729fdc6354c) return λ3729fdc6354c;
            {
              let λ0e48896c94b5 = this;
              for (;λ0e48896c94b5.parent !== λ3729fdc6354c; ) λ0e48896c94b5 = λ0e48896c94b5.parent;
              return "__uv" in λ0e48896c94b5 ? λ0e48896c94b5 : this;
            }
          } catch {
            return this;
          }
        }
        return λ3729fdc6354c;
      },
      set(λ3729fdc6354c) {
        this.top = λ3729fdc6354c;
      }
    }), λ6972dcdb4c71.nativeMethods.defineProperty(λe79e569405cb.Object.prototype, λ7d2cc4413ae4.methods.eval, {
      configurable: !0,
      get() {
        return this === λe79e569405cb ? λ7d2cc4413ae4.eval : this.eval;
      },
      set(λ3729fdc6354c) {
        this.eval = λ3729fdc6354c;
      }
    });
  }
})();
