"use strict";

(() => {
  var λ0926ecd723cb = self.StemConnect, λ2dca19b802ea = self.UVClient, λ9b7d63dbbdfd = self.__uv$config, λ3109f969b1e8 = self.__uv$cookies;
  if (typeof λ3109f969b1e8 != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λ3875aca303ee) {
    if ("__uv" in λ3875aca303ee && λ3875aca303ee.__uv instanceof λ0926ecd723cb) return !1;
    λ3875aca303ee.document && λ3875aca303ee.window && λ3875aca303ee.document.querySelectorAll("script[__uv-script]").forEach(λ0926ecd723cb => λ0926ecd723cb.remove());
    let λcda15868a33d = !λ3875aca303ee.window, λ1e5f48072425 = "__uv", λ6d7d2d1a94c0 = "__uv$", λ206a4e8d0921 = new λ0926ecd723cb(λ9b7d63dbbdfd), λ4d67006bd844;
    λcda15868a33d ? λ4d67006bd844 = new λ0926ecd723cb.BareClient(new Promise(λ0926ecd723cb => {
      addEventListener("message", ({data: λ2dca19b802ea}) => {
        typeof λ2dca19b802ea == "object" && "__uv$type" in λ2dca19b802ea && λ2dca19b802ea.__uv$type === "baremuxinit" && λ0926ecd723cb(λ2dca19b802ea.port);
      });
    })) : λ4d67006bd844 = new λ0926ecd723cb.BareClient;
    let λab36319f12b2 = new λ2dca19b802ea(λ3875aca303ee, λ4d67006bd844, λcda15868a33d), {HTMLMediaElement: λbbc0fec8b883, HTMLScriptElement: λd50582aa5184, HTMLAudioElement: λ73f3ec5bbbba, HTMLVideoElement: λ2f3818297470, HTMLInputElement: λfbd41d73124d, HTMLEmbedElement: λa06cfab6edb8, HTMLTrackElement: λ966093ab998e, HTMLAnchorElement: λ563900653f5f, HTMLIFrameElement: λe3b0e72c0ce2, HTMLAreaElement: λ023343d52a81, HTMLLinkElement: λf0c42a432f09, HTMLBaseElement: λf12e49ff06d6, HTMLFormElement: λ872058e3b5c9, HTMLImageElement: λf3083d768b99, HTMLSourceElement: λ7ad658c7182c} = λ3875aca303ee;
    λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee, "__uv", {
      value: λ206a4e8d0921,
      enumerable: !1
    }), λ206a4e8d0921.meta.origin = location.origin, λ206a4e8d0921.location = λab36319f12b2.location.emulate(λ0926ecd723cb => λ0926ecd723cb === "about:srcdoc" ? new URL(λ0926ecd723cb) : (λ0926ecd723cb.startsWith("blob:") && (λ0926ecd723cb = λ0926ecd723cb.slice(5)), 
    new URL(λ206a4e8d0921.sourceUrl(λ0926ecd723cb))), λ0926ecd723cb => λ206a4e8d0921.rewriteUrl(λ0926ecd723cb));
    let λ3b72ae6b6ac7 = λ3109f969b1e8;
    if (λ206a4e8d0921.meta.url = λ206a4e8d0921.location, λ206a4e8d0921.domain = λ206a4e8d0921.meta.url.host, 
    λ206a4e8d0921.blobUrls = new λ3875aca303ee.Map, λ206a4e8d0921.referrer = "", λ206a4e8d0921.cookies = [], 
    λ206a4e8d0921.localStorageObj = {}, λ206a4e8d0921.sessionStorageObj = {}, λ206a4e8d0921.location.href === "about:srcdoc" && (λ206a4e8d0921.meta = λ3875aca303ee.parent.__uv.meta), 
    λ3875aca303ee.EventTarget && (λ206a4e8d0921.addEventListener = λ3875aca303ee.EventTarget.prototype.addEventListener, 
    λ206a4e8d0921.removeListener = λ3875aca303ee.EventTarget.prototype.removeListener, 
    λ206a4e8d0921.dispatchEvent = λ3875aca303ee.EventTarget.prototype.dispatchEvent), 
    λab36319f12b2.nativeMethods.defineProperty(λab36319f12b2.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λab36319f12b2.storage.sessionStorage) return λ206a4e8d0921.sessionStorageObj;
        if (this === λab36319f12b2.storage.localStorage) return λ206a4e8d0921.localStorageObj;
      },
      enumerable: !1
    }), λ3875aca303ee.localStorage) {
      for (let λ0926ecd723cb in λ3875aca303ee.localStorage) λ0926ecd723cb.startsWith(λ6d7d2d1a94c0 + λ206a4e8d0921.location.origin + "@") && (λ206a4e8d0921.localStorageObj[λ0926ecd723cb.slice((λ6d7d2d1a94c0 + λ206a4e8d0921.location.origin + "@").length)] = λ3875aca303ee.localStorage.getItem(λ0926ecd723cb));
      λ206a4e8d0921.lsWrap = λab36319f12b2.storage.emulate(λab36319f12b2.storage.localStorage, λ206a4e8d0921.localStorageObj);
    }
    if (λ3875aca303ee.sessionStorage) {
      for (let λ0926ecd723cb in λ3875aca303ee.sessionStorage) λ0926ecd723cb.startsWith(λ6d7d2d1a94c0 + λ206a4e8d0921.location.origin + "@") && (λ206a4e8d0921.sessionStorageObj[λ0926ecd723cb.slice((λ6d7d2d1a94c0 + λ206a4e8d0921.location.origin + "@").length)] = λ3875aca303ee.sessionStorage.getItem(λ0926ecd723cb));
      λ206a4e8d0921.ssWrap = λab36319f12b2.storage.emulate(λab36319f12b2.storage.sessionStorage, λ206a4e8d0921.sessionStorageObj);
    }
    let λ0f159798d746 = λ3875aca303ee.document ? λab36319f12b2.node.baseURI.get.call(λ3875aca303ee.document) : λ3875aca303ee.location.href, λd9586229a836 = λ206a4e8d0921.sourceUrl(λ0f159798d746);
    λab36319f12b2.nativeMethods.defineProperty(λ206a4e8d0921.meta, "base", {
      get() {
        return λ3875aca303ee.document ? (λab36319f12b2.node.baseURI.get.call(λ3875aca303ee.document) !== λ0f159798d746 && (λ0f159798d746 = λab36319f12b2.node.baseURI.get.call(λ3875aca303ee.document), 
        λd9586229a836 = λ206a4e8d0921.sourceUrl(λ0f159798d746)), λd9586229a836) : λ206a4e8d0921.meta.url.href;
      }
    }), λ206a4e8d0921.methods = {
      setSource: λ6d7d2d1a94c0 + "setSource",
      source: λ6d7d2d1a94c0 + "source",
      location: λ6d7d2d1a94c0 + "location",
      function: λ6d7d2d1a94c0 + "function",
      string: λ6d7d2d1a94c0 + "string",
      eval: λ6d7d2d1a94c0 + "eval",
      parent: λ6d7d2d1a94c0 + "parent",
      top: λ6d7d2d1a94c0 + "top"
    }, λ206a4e8d0921.filterKeys = [ λ1e5f48072425, λ206a4e8d0921.methods.setSource, λ206a4e8d0921.methods.source, λ206a4e8d0921.methods.location, λ206a4e8d0921.methods.function, λ206a4e8d0921.methods.string, λ206a4e8d0921.methods.eval, λ206a4e8d0921.methods.parent, λ206a4e8d0921.methods.top, λ6d7d2d1a94c0 + "protocol", λ6d7d2d1a94c0 + "storageObj", λ6d7d2d1a94c0 + "url", λ6d7d2d1a94c0 + "modifiedStyle", λ6d7d2d1a94c0 + "config", λ6d7d2d1a94c0 + "dispatched", "StemConnect", "__uvHook" ], 
    λab36319f12b2.on("wrap", (λ0926ecd723cb, λ2dca19b802ea) => {
      λab36319f12b2.nativeMethods.defineProperty(λ2dca19b802ea, "name", λab36319f12b2.nativeMethods.getOwnPropertyDescriptor(λ0926ecd723cb, "name")), 
      λab36319f12b2.nativeMethods.defineProperty(λ2dca19b802ea, "length", λab36319f12b2.nativeMethods.getOwnPropertyDescriptor(λ0926ecd723cb, "length")), 
      λab36319f12b2.nativeMethods.defineProperty(λ2dca19b802ea, λ206a4e8d0921.methods.string, {
        enumerable: !1,
        value: λab36319f12b2.nativeMethods.fnToString.call(λ0926ecd723cb)
      }), λab36319f12b2.nativeMethods.defineProperty(λ2dca19b802ea, λ206a4e8d0921.methods.function, {
        enumerable: !1,
        value: λ0926ecd723cb
      });
    }), λab36319f12b2.fetch.on("request", λ0926ecd723cb => {
      λ0926ecd723cb.data.input = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.input);
    }), λab36319f12b2.fetch.on("requestUrl", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.sourceUrl(λ0926ecd723cb.data.value);
    }), λab36319f12b2.fetch.on("responseUrl", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.sourceUrl(λ0926ecd723cb.data.value);
    }), λab36319f12b2.xhr.on("open", λ0926ecd723cb => {
      λ0926ecd723cb.data.input = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.input);
    }), λab36319f12b2.xhr.on("responseUrl", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.sourceUrl(λ0926ecd723cb.data.value);
    }), λab36319f12b2.workers.on("worker", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.workers.on("addModule", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.workers.on("importScripts", λ0926ecd723cb => {
      for (let λ2dca19b802ea in λ0926ecd723cb.data.scripts) λ0926ecd723cb.data.scripts[λ2dca19b802ea] = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.scripts[λ2dca19b802ea]);
    }), λab36319f12b2.workers.on("postMessage", λ0926ecd723cb => {
      let λ2dca19b802ea = λ0926ecd723cb.data.origin;
      λ0926ecd723cb.data.origin = "*", λ0926ecd723cb.data.message = {
        __data: λ0926ecd723cb.data.message,
        __origin: λ206a4e8d0921.meta.url.origin,
        __to: λ2dca19b802ea
      };
    }), λab36319f12b2.navigator.on("sendBeacon", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.document.on("getCookie", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ3b72ae6b6ac7;
    }), λab36319f12b2.document.on("setCookie", λ0926ecd723cb => {
      λ206a4e8d0921.cookie.db().then(λ2dca19b802ea => {
        λ206a4e8d0921.cookie.setCookies(λ0926ecd723cb.data.value, λ2dca19b802ea, λ206a4e8d0921.meta), 
        λ206a4e8d0921.cookie.getCookies(λ2dca19b802ea).then(λ0926ecd723cb => {
          λ3b72ae6b6ac7 = λ206a4e8d0921.cookie.serialize(λ0926ecd723cb, λ206a4e8d0921.meta, !0);
        });
      });
      let λ2dca19b802ea = λ206a4e8d0921.cookie.setCookie(λ0926ecd723cb.data.value)[0];
      λ2dca19b802ea.path || (λ2dca19b802ea.path = "/"), λ2dca19b802ea.domain || (λ2dca19b802ea.domain = λ206a4e8d0921.meta.url.hostname), 
      λ206a4e8d0921.cookie.validateCookie(λ2dca19b802ea, λ206a4e8d0921.meta, !0) && (λ3b72ae6b6ac7.length && (λ3b72ae6b6ac7 += "; "), 
      λ3b72ae6b6ac7 += `${λ2dca19b802ea.name}=${λ2dca19b802ea.value}`), λ0926ecd723cb.respondWith(λ0926ecd723cb.data.value);
    }), λab36319f12b2.element.on("setInnerHTML", λ0926ecd723cb => {
      switch (λ0926ecd723cb.that.tagName) {
       case "SCRIPT":
        λ0926ecd723cb.data.value = λ206a4e8d0921.js.rewrite(λ0926ecd723cb.data.value);
        break;

       case "STYLE":
        λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value);
        break;

       default:
        λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.value);
      }
    }), λab36319f12b2.element.on("getInnerHTML", λ0926ecd723cb => {
      switch (λ0926ecd723cb.that.tagName) {
       case "SCRIPT":
        λ0926ecd723cb.data.value = λ206a4e8d0921.js.source(λ0926ecd723cb.data.value);
        break;

       case "STYLE":
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceCSS(λ0926ecd723cb.data.value);
        break;

       default:
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceHtml(λ0926ecd723cb.data.value);
      }
    }), λab36319f12b2.element.on("setOuterHTML", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.value, {
        document: λ0926ecd723cb.that.tagName === "HTML"
      });
    }), λab36319f12b2.element.on("getOuterHTML", λ0926ecd723cb => {
      switch (λ0926ecd723cb.that.tagName) {
       case "HEAD":
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceHtml(λ0926ecd723cb.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceHtml(λ0926ecd723cb.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceHtml(λ0926ecd723cb.data.value, {
          document: λ0926ecd723cb.that.tagName === "HTML"
        });
        break;
      }
    }), λab36319f12b2.document.on("write", λ0926ecd723cb => {
      if (!λ0926ecd723cb.data.html.length) return !1;
      λ0926ecd723cb.data.html = [ λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.html.join("")) ];
    }), λab36319f12b2.document.on("writeln", λ0926ecd723cb => {
      if (!λ0926ecd723cb.data.html.length) return !1;
      λ0926ecd723cb.data.html = [ λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.html.join("")) ];
    }), λab36319f12b2.element.on("insertAdjacentHTML", λ0926ecd723cb => {
      λ0926ecd723cb.data.html = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.html);
    }), λab36319f12b2.eventSource.on("construct", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.eventSource.on("url", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.idb.on("idbFactoryOpen", λ0926ecd723cb => {
      λ0926ecd723cb.data.name !== "__op" && (λ0926ecd723cb.data.name = `${λ206a4e8d0921.meta.url.origin}@${λ0926ecd723cb.data.name}`);
    }), λab36319f12b2.idb.on("idbFactoryName", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ0926ecd723cb.data.value.slice(λ206a4e8d0921.meta.url.origin.length + 1);
    }), λab36319f12b2.history.on("replaceState", λ0926ecd723cb => {
      λ0926ecd723cb.data.url && (λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url, "__uv" in λ0926ecd723cb.that ? λ0926ecd723cb.that.__uv.meta : λ206a4e8d0921.meta));
    }), λab36319f12b2.history.on("pushState", λ0926ecd723cb => {
      λ0926ecd723cb.data.url && (λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url, "__uv" in λ0926ecd723cb.that ? λ0926ecd723cb.that.__uv.meta : λ206a4e8d0921.meta));
    }), λab36319f12b2.element.on("getAttribute", λ0926ecd723cb => {
      λab36319f12b2.element.hasAttribute.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name) && λ0926ecd723cb.respondWith(λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name));
    }), λab36319f12b2.message.on("postMessage", λ0926ecd723cb => {
      let λ2dca19b802ea = λ0926ecd723cb.data.origin, λ9b7d63dbbdfd = λ206a4e8d0921.call;
      λ0926ecd723cb.that && (λ9b7d63dbbdfd = λ0926ecd723cb.that.__uv$source.call), λ0926ecd723cb.data.origin = "*", 
      λ0926ecd723cb.data.message = {
        __data: λ0926ecd723cb.data.message,
        __origin: (λ0926ecd723cb.that || λ0926ecd723cb.target).__uv$source.location.origin,
        __to: λ2dca19b802ea
      }, (() => {
        let λ2dca19b802ea = λ0926ecd723cb.data.transfer || [];
        try {
          const λ9b7d63dbbdfd = new Set(λ2dca19b802ea);
          const λ3109f969b1e8 = new Set;
          const a = λ0926ecd723cb => {
            if (!λ0926ecd723cb || typeof λ0926ecd723cb != "object" || λ3109f969b1e8.has(λ0926ecd723cb)) return;
            λ3109f969b1e8.add(λ0926ecd723cb);
            let λ2dca19b802ea = "";
            try {
              λ2dca19b802ea = Object.prototype.toString.call(λ0926ecd723cb);
            } catch {}
            if (typeof MessagePort != "undefined" && λ0926ecd723cb instanceof MessagePort || λ2dca19b802ea === "[object MessagePort]") {
              λ9b7d63dbbdfd.add(λ0926ecd723cb);
              return;
            }
            if (Array.isArray(λ0926ecd723cb)) {
              for (const λ2dca19b802ea of λ0926ecd723cb) a(λ2dca19b802ea);
              return;
            }
            for (const λ2dca19b802ea of Object.values(λ0926ecd723cb)) a(λ2dca19b802ea);
          };
          a(λ0926ecd723cb.data.message);
          λ2dca19b802ea = [ ...λ9b7d63dbbdfd ];
        } catch {}
        return λ0926ecd723cb.respondWith(λcda15868a33d ? λ9b7d63dbbdfd(λ0926ecd723cb.target, [ λ0926ecd723cb.data.message, λ2dca19b802ea ], λ0926ecd723cb.that) : λ9b7d63dbbdfd(λ0926ecd723cb.target, [ λ0926ecd723cb.data.message, λ0926ecd723cb.data.origin, λ2dca19b802ea ], λ0926ecd723cb.that));
      })();
    }), λab36319f12b2.message.on("data", λ0926ecd723cb => {
      let {value: λ2dca19b802ea} = λ0926ecd723cb.data;
      typeof λ2dca19b802ea == "object" && "__data" in λ2dca19b802ea && "__origin" in λ2dca19b802ea && λ0926ecd723cb.respondWith(λ2dca19b802ea.__data);
    }), λab36319f12b2.message.on("origin", λ0926ecd723cb => {
      let λ2dca19b802ea = λab36319f12b2.message.messageData.get.call(λ0926ecd723cb.that);
      typeof λ2dca19b802ea == "object" && λ2dca19b802ea.__data && λ2dca19b802ea.__origin && λ0926ecd723cb.respondWith(λ2dca19b802ea.__origin);
    }), λab36319f12b2.overrideDescriptor(λ3875aca303ee, "origin", {
      get: () => λ206a4e8d0921.location.origin
    }), λab36319f12b2.node.on("baseURI", λ0926ecd723cb => {
      λ0926ecd723cb.data.value.startsWith(λ3875aca303ee.location.origin) && (λ0926ecd723cb.data.value = λ206a4e8d0921.sourceUrl(λ0926ecd723cb.data.value));
    }), λab36319f12b2.element.on("setAttribute", λ0926ecd723cb => {
      if (λ0926ecd723cb.that instanceof λbbc0fec8b883 && λ0926ecd723cb.data.name === "src" && λ0926ecd723cb.data.value.startsWith("blob:")) {
        λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
        λ0926ecd723cb.data.value = λ206a4e8d0921.blobUrls.get(λ0926ecd723cb.data.value);
        return;
      }
      λ206a4e8d0921.attrs.isUrl(λ0926ecd723cb.data.name) && (λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.value)), 
      λ206a4e8d0921.attrs.isStyle(λ0926ecd723cb.data.name) && (λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value, {
        context: "declarationList"
      })), λ206a4e8d0921.attrs.isHtml(λ0926ecd723cb.data.name) && (λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.value, {
        ...λ206a4e8d0921.meta,
        document: !0,
        injectHead: λ206a4e8d0921.createHtmlInject(λ206a4e8d0921.handlerScript, λ206a4e8d0921.bundleScript, λ206a4e8d0921.clientScript, λ206a4e8d0921.configScript, λ3b72ae6b6ac7, λ3875aca303ee.location.href)
      })), λ206a4e8d0921.attrs.isSrcset(λ0926ecd723cb.data.name) && (λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.html.wrapSrcset(λ0926ecd723cb.data.value.toString())), 
      λ206a4e8d0921.attrs.isForbidden(λ0926ecd723cb.data.name) && (λ0926ecd723cb.data.name = λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name);
    }), λab36319f12b2.element.on("audio", λ0926ecd723cb => {
      λ0926ecd723cb.data.url = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.url);
    }), λab36319f12b2.element.hookProperty([ λ563900653f5f, λ023343d52a81, λf0c42a432f09, λf12e49ff06d6 ], "href", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λ206a4e8d0921.sourceUrl(λ0926ecd723cb.call(λ2dca19b802ea)),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-href", λ9b7d63dbbdfd), 
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.rewriteUrl(λ9b7d63dbbdfd));
      }
    }), λab36319f12b2.element.hookProperty([ λd50582aa5184, λ73f3ec5bbbba, λ2f3818297470, λbbc0fec8b883, λf3083d768b99, λfbd41d73124d, λa06cfab6edb8, λe3b0e72c0ce2, λ966093ab998e, λ7ad658c7182c ], "src", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λ206a4e8d0921.sourceUrl(λ0926ecd723cb.call(λ2dca19b802ea)),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        if (new String(λ9b7d63dbbdfd).toString().trim().startsWith("blob:") && λ2dca19b802ea instanceof λbbc0fec8b883) return λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-src", λ9b7d63dbbdfd), 
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.blobUrls.get(λ9b7d63dbbdfd) || λ9b7d63dbbdfd);
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-src", λ9b7d63dbbdfd), 
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.rewriteUrl(λ9b7d63dbbdfd));
      }
    }), λab36319f12b2.element.hookProperty([ λ872058e3b5c9 ], "action", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λ206a4e8d0921.sourceUrl(λ0926ecd723cb.call(λ2dca19b802ea)),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-action", λ9b7d63dbbdfd), 
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.rewriteUrl(λ9b7d63dbbdfd));
      }
    }), λab36319f12b2.element.hookProperty([ λf3083d768b99, λ7ad658c7182c ], "srcset", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λab36319f12b2.element.getAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-srcset") || λ0926ecd723cb.call(λ2dca19b802ea),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-srcset", λ9b7d63dbbdfd), 
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.html.wrapSrcset(λ9b7d63dbbdfd.toString()));
      }
    }), λab36319f12b2.element.hookProperty(λd50582aa5184, "integrity", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λab36319f12b2.element.getAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-integrity"),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-integrity", λ9b7d63dbbdfd);
      }
    }), λab36319f12b2.element.hookProperty(λe3b0e72c0ce2, "sandbox", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λab36319f12b2.element.getAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-sandbox") || λ0926ecd723cb.call(λ2dca19b802ea),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λab36319f12b2.element.setAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-sandbox", λ9b7d63dbbdfd);
      }
    });
    let λf87291b96896 = λe3b0e72c0ce2 && Object.getOwnPropertyDescriptor(λe3b0e72c0ce2.prototype, "contentWindow").get;
    function U(λ0926ecd723cb) {
      let λ2dca19b802ea = λf87291b96896.call(λ0926ecd723cb);
      if (!λ2dca19b802ea.__uv) try {
        p(λ2dca19b802ea);
      } catch (λ0926ecd723cb) {
        console.error("catastrophic failure"), console.error(λ0926ecd723cb);
      }
    }
    if (λab36319f12b2.element.hookProperty(λe3b0e72c0ce2, "contentWindow", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => (U(λ2dca19b802ea), λ0926ecd723cb.call(λ2dca19b802ea))
    }), λab36319f12b2.element.hookProperty(λe3b0e72c0ce2, "contentDocument", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => (U(λ2dca19b802ea), λ0926ecd723cb.call(λ2dca19b802ea))
    }), λab36319f12b2.element.hookProperty(λe3b0e72c0ce2, "srcdoc", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λab36319f12b2.element.getAttribute.call(λ2dca19b802ea, λ206a4e8d0921.attributePrefix + "-attr-srcdoc") || λ0926ecd723cb.call(λ2dca19b802ea),
      set: (λ0926ecd723cb, λ2dca19b802ea, [λ9b7d63dbbdfd]) => {
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.rewriteHtml(λ9b7d63dbbdfd, {
          document: !0,
          injectHead: λ206a4e8d0921.createHtmlInject(λ206a4e8d0921.handlerScript, λ206a4e8d0921.bundleScript, λ206a4e8d0921.clientScript, λ206a4e8d0921.configScript, λ3b72ae6b6ac7, λ3875aca303ee.location.href)
        }));
      }
    }), λab36319f12b2.node.on("getTextContent", λ0926ecd723cb => {
      switch (λ0926ecd723cb.that.tagName) {
       case "SCRIPT":
        λ0926ecd723cb.data.value = λ206a4e8d0921.js.source(λ0926ecd723cb.data.value);
        break;

       case "STYLE":
        λ0926ecd723cb.data.value = λ206a4e8d0921.sourceCSS(λ0926ecd723cb.data.value);
        break;

       default:
      }
    }), λab36319f12b2.node.on("setTextContent", λ0926ecd723cb => {
      switch (λ0926ecd723cb.that.tagName) {
       case "SCRIPT":
        λ0926ecd723cb.data.value = λ206a4e8d0921.js.rewrite(λ0926ecd723cb.data.value);
        break;

       case "STYLE":
        λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λ3875aca303ee.navigator && delete λ3875aca303ee.Navigator.prototype.serviceWorker, 
    λab36319f12b2.document.on("getDomain", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.domain;
    }), λab36319f12b2.document.on("setDomain", λ0926ecd723cb => {
      if (!λ0926ecd723cb.data.value.toString().endsWith(λ206a4e8d0921.meta.url.hostname.split(".").slice(-2).join("."))) return λ0926ecd723cb.respondWith("");
      λ0926ecd723cb.respondWith(λ206a4e8d0921.domain = λ0926ecd723cb.data.value);
    }), λab36319f12b2.document.on("url", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.location.href;
    }), λab36319f12b2.document.on("documentURI", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.location.href;
    }), λab36319f12b2.document.on("referrer", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.referrer || λ206a4e8d0921.sourceUrl(λ0926ecd723cb.data.value);
    }), λab36319f12b2.document.on("parseFromString", λ0926ecd723cb => {
      if (λ0926ecd723cb.data.type !== "text/html") return !1;
      λ0926ecd723cb.data.string = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.string, {
        ...λ206a4e8d0921.meta,
        document: !0
      });
    }), λab36319f12b2.attribute.on("getValue", λ0926ecd723cb => {
      λab36319f12b2.element.hasAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name) && (λ0926ecd723cb.data.value = λab36319f12b2.element.getAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name));
    }), λab36319f12b2.attribute.on("setValue", λ0926ecd723cb => {
      λ206a4e8d0921.attrs.isUrl(λ0926ecd723cb.data.name) && (λab36319f12b2.element.setAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteUrl(λ0926ecd723cb.data.value)), 
      λ206a4e8d0921.attrs.isStyle(λ0926ecd723cb.data.name) && (λab36319f12b2.element.setAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value, {
        context: "declarationList"
      })), λ206a4e8d0921.attrs.isHtml(λ0926ecd723cb.data.name) && (λab36319f12b2.element.setAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteHtml(λ0926ecd723cb.data.value, {
        ...λ206a4e8d0921.meta,
        document: !0,
        injectHead: λ206a4e8d0921.createHtmlInject(λ206a4e8d0921.handlerScript, λ206a4e8d0921.bundleScript, λ206a4e8d0921.clientScript, λ206a4e8d0921.configScript, λ3b72ae6b6ac7, λ3875aca303ee.location.href)
      })), λ206a4e8d0921.attrs.isSrcset(λ0926ecd723cb.data.name) && (λab36319f12b2.element.setAttribute.call(λ0926ecd723cb.that.ownerElement, λ206a4e8d0921.attributePrefix + "-attr-" + λ0926ecd723cb.data.name, λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.value = λ206a4e8d0921.html.wrapSrcset(λ0926ecd723cb.data.value.toString()));
    }), λab36319f12b2.url.on("createObjectURL", λ0926ecd723cb => {
      let λ2dca19b802ea = λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ0926ecd723cb.data.object);
      if (λ2dca19b802ea.startsWith("blob:" + location.origin)) {
        let λ9b7d63dbbdfd = "blob:" + (λ206a4e8d0921.meta.url.href !== "about:blank" ? λ206a4e8d0921.meta.url.origin : λ3875aca303ee.parent.__uv.meta.url.origin) + λ2dca19b802ea.slice(5 + location.origin.length);
        λ206a4e8d0921.blobUrls.set(λ9b7d63dbbdfd, λ2dca19b802ea), λ0926ecd723cb.respondWith(λ9b7d63dbbdfd);
      } else λ0926ecd723cb.respondWith(λ2dca19b802ea);
    }), λab36319f12b2.url.on("revokeObjectURL", λ0926ecd723cb => {
      if (λ206a4e8d0921.blobUrls.has(λ0926ecd723cb.data.url)) {
        let λ2dca19b802ea = λ0926ecd723cb.data.url;
        λ0926ecd723cb.data.url = λ206a4e8d0921.blobUrls.get(λ0926ecd723cb.data.url), λ206a4e8d0921.blobUrls.delete(λ2dca19b802ea);
      }
    }), λab36319f12b2.storage.on("get", λ0926ecd723cb => {
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("set", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && (λ0926ecd723cb.that.__uv$storageObj[λ0926ecd723cb.data.name] = λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("delete", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && delete λ0926ecd723cb.that.__uv$storageObj[λ0926ecd723cb.data.name], 
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("getItem", λ0926ecd723cb => {
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("setItem", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && (λ0926ecd723cb.that.__uv$storageObj[λ0926ecd723cb.data.name] = λ0926ecd723cb.data.value), 
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("removeItem", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && delete λ0926ecd723cb.that.__uv$storageObj[λ0926ecd723cb.data.name], 
      λ0926ecd723cb.data.name = λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ0926ecd723cb.data.name;
    }), λab36319f12b2.storage.on("clear", λ0926ecd723cb => {
      if (λ0926ecd723cb.that.__uv$storageObj) for (let λ2dca19b802ea of λab36319f12b2.nativeMethods.keys.call(null, λ0926ecd723cb.that.__uv$storageObj)) delete λ0926ecd723cb.that.__uv$storageObj[λ2dca19b802ea], 
      λab36319f12b2.storage.removeItem.call(λ0926ecd723cb.that, λ6d7d2d1a94c0 + λ206a4e8d0921.meta.url.origin + "@" + λ2dca19b802ea), 
      λ0926ecd723cb.respondWith();
    }), λab36319f12b2.storage.on("length", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && λ0926ecd723cb.respondWith(λab36319f12b2.nativeMethods.keys.call(null, λ0926ecd723cb.that.__uv$storageObj).length);
    }), λab36319f12b2.storage.on("key", λ0926ecd723cb => {
      λ0926ecd723cb.that.__uv$storageObj && λ0926ecd723cb.respondWith(λab36319f12b2.nativeMethods.keys.call(null, λ0926ecd723cb.that.__uv$storageObj)[λ0926ecd723cb.data.index] || null);
    }), λab36319f12b2.function.on("function", λ0926ecd723cb => {
      λ0926ecd723cb.data.script = λ206a4e8d0921.rewriteJS(λ0926ecd723cb.data.script);
    }), λab36319f12b2.function.on("toString", λ0926ecd723cb => {
      λ206a4e8d0921.methods.string in λ0926ecd723cb.that && λ0926ecd723cb.respondWith(λ0926ecd723cb.that[λ206a4e8d0921.methods.string]);
    }), λab36319f12b2.object.on("getOwnPropertyNames", λ0926ecd723cb => {
      λ0926ecd723cb.data.names = λ0926ecd723cb.data.names.filter(λ0926ecd723cb => !λ206a4e8d0921.filterKeys.includes(λ0926ecd723cb));
    }), λab36319f12b2.object.on("getOwnPropertyDescriptors", λ0926ecd723cb => {
      for (let λ2dca19b802ea of λ206a4e8d0921.filterKeys) delete λ0926ecd723cb.data.descriptors[λ2dca19b802ea];
    }), λab36319f12b2.style.on("setProperty", λ0926ecd723cb => {
      λab36319f12b2.style.dashedUrlProps.includes(λ0926ecd723cb.data.property) && (λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value, {
        context: "value",
        ...λ206a4e8d0921.meta
      }));
    }), λab36319f12b2.style.on("getPropertyValue", λ0926ecd723cb => {
      λab36319f12b2.style.dashedUrlProps.includes(λ0926ecd723cb.data.property) && λ0926ecd723cb.respondWith(λ206a4e8d0921.sourceCSS(λ0926ecd723cb.target.call(λ0926ecd723cb.that, λ0926ecd723cb.data.property), {
        context: "value",
        ...λ206a4e8d0921.meta
      }));
    }), "CSS2Properties" in λ3875aca303ee) for (let λ0926ecd723cb of λab36319f12b2.style.urlProps) λab36319f12b2.overrideDescriptor(λ3875aca303ee.CSS2Properties.prototype, λ0926ecd723cb, {
      get: (λ0926ecd723cb, λ2dca19b802ea) => λ206a4e8d0921.sourceCSS(λ0926ecd723cb.call(λ2dca19b802ea), {
        context: "value",
        ...λ206a4e8d0921.meta
      }),
      set: (λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd) => {
        λ0926ecd723cb.call(λ2dca19b802ea, λ206a4e8d0921.rewriteCSS(λ9b7d63dbbdfd, {
          context: "value",
          ...λ206a4e8d0921.meta
        }));
      }
    }); else "HTMLElement" in λ3875aca303ee && λab36319f12b2.overrideDescriptor(λ3875aca303ee.HTMLElement.prototype, "style", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => {
        let λ9b7d63dbbdfd = λ0926ecd723cb.call(λ2dca19b802ea);
        if (!λ9b7d63dbbdfd[λ6d7d2d1a94c0 + "modifiedStyle"]) for (let λ0926ecd723cb of λab36319f12b2.style.urlProps) λab36319f12b2.nativeMethods.defineProperty(λ9b7d63dbbdfd, λ0926ecd723cb, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λ2dca19b802ea = λab36319f12b2.style.getPropertyValue.call(this, λ0926ecd723cb) || "";
            return λ206a4e8d0921.sourceCSS(λ2dca19b802ea, {
              context: "value",
              ...λ206a4e8d0921.meta
            });
          },
          set(λ2dca19b802ea) {
            λab36319f12b2.style.setProperty.call(this, λab36319f12b2.style.propToDashed[λ0926ecd723cb] || λ0926ecd723cb, λ206a4e8d0921.rewriteCSS(λ2dca19b802ea, {
              context: "value",
              ...λ206a4e8d0921.meta
            }));
          }
        }), λab36319f12b2.nativeMethods.defineProperty(λ9b7d63dbbdfd, λ6d7d2d1a94c0 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ9b7d63dbbdfd;
      }
    });
    λab36319f12b2.style.on("setCssText", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.rewriteCSS(λ0926ecd723cb.data.value, {
        context: "declarationList",
        ...λ206a4e8d0921.meta
      });
    }), λab36319f12b2.style.on("getCssText", λ0926ecd723cb => {
      λ0926ecd723cb.data.value = λ206a4e8d0921.sourceCSS(λ0926ecd723cb.data.value, {
        context: "declarationList",
        ...λ206a4e8d0921.meta
      });
    }), λ206a4e8d0921.addEventListener.call(λ3875aca303ee, "hashchange", λ0926ecd723cb => {
      if (λ0926ecd723cb.__uv$dispatched) return !1;
      λ0926ecd723cb.stopImmediatePropagation();
      let λ2dca19b802ea = λ3875aca303ee.location.hash;
      λab36319f12b2.history.replaceState.call(λ3875aca303ee.history, "", "", λ0926ecd723cb.oldURL), 
      λ206a4e8d0921.location.hash = λ2dca19b802ea;
    }), λab36319f12b2.location.on("hashchange", (λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd) => {
      if (λ9b7d63dbbdfd.HashChangeEvent && λab36319f12b2.history.replaceState) {
        λab36319f12b2.history.replaceState.call(λ3875aca303ee.history, "", "", λ206a4e8d0921.rewriteUrl(λ2dca19b802ea));
        let λ3109f969b1e8 = new λ9b7d63dbbdfd.HashChangeEvent("hashchange", {
          newURL: λ2dca19b802ea,
          oldURL: λ0926ecd723cb
        });
        λab36319f12b2.nativeMethods.defineProperty(λ3109f969b1e8, λ6d7d2d1a94c0 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ206a4e8d0921.dispatchEvent.call(λ3875aca303ee, λ3109f969b1e8);
      }
    }), λab36319f12b2.fetch.overrideRequest(), λab36319f12b2.fetch.overrideUrl(), λab36319f12b2.xhr.overrideOpen(), 
    λab36319f12b2.xhr.overrideResponseUrl(), λab36319f12b2.element.overrideHtml(), λab36319f12b2.element.overrideAttribute(), 
    λab36319f12b2.element.overrideInsertAdjacentHTML(), λab36319f12b2.element.overrideAudio(), 
    λab36319f12b2.node.overrideBaseURI(), λab36319f12b2.node.overrideTextContent(), 
    λab36319f12b2.attribute.overrideNameValue(), λab36319f12b2.document.overrideDomain(), 
    λab36319f12b2.document.overrideURL(), λab36319f12b2.document.overrideDocumentURI(), 
    λab36319f12b2.document.overrideWrite(), λab36319f12b2.document.overrideReferrer(), 
    λab36319f12b2.document.overrideParseFromString(), λab36319f12b2.storage.overrideMethods(), 
    λab36319f12b2.storage.overrideLength(), λab36319f12b2.object.overrideGetPropertyNames(), 
    λab36319f12b2.object.overrideGetOwnPropertyDescriptors(), λab36319f12b2.idb.overrideName(), 
    λab36319f12b2.idb.overrideOpen(), λab36319f12b2.history.overridePushState(), λab36319f12b2.history.overrideReplaceState(), 
    λab36319f12b2.eventSource.overrideConstruct(), λab36319f12b2.eventSource.overrideUrl(), 
    λab36319f12b2.websocket.overrideWebSocket(λ4d67006bd844), λab36319f12b2.url.overrideObjectURL(), 
    λab36319f12b2.document.overrideCookie(), λab36319f12b2.message.overridePostMessage(), 
    λab36319f12b2.message.overrideMessageOrigin(), λab36319f12b2.message.overrideMessageData(), 
    λab36319f12b2.workers.overrideWorker(), λab36319f12b2.workers.overrideAddModule(), 
    λab36319f12b2.workers.overrideImportScripts(), λab36319f12b2.workers.overridePostMessage(), 
    λab36319f12b2.style.overrideSetGetProperty(), λab36319f12b2.style.overrideCssText(), 
    λab36319f12b2.navigator.overrideSendBeacon(), λab36319f12b2.function.overrideFunction(), 
    λab36319f12b2.function.overrideToString(), λab36319f12b2.location.overrideWorkerLocation(λ0926ecd723cb => new URL(λ206a4e8d0921.sourceUrl(λ0926ecd723cb))), 
    λab36319f12b2.overrideDescriptor(λ3875aca303ee, "localStorage", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => (λ2dca19b802ea || λ3875aca303ee).__uv.lsWrap
    }), λab36319f12b2.overrideDescriptor(λ3875aca303ee, "sessionStorage", {
      get: (λ0926ecd723cb, λ2dca19b802ea) => (λ2dca19b802ea || λ3875aca303ee).__uv.ssWrap
    }), λab36319f12b2.override(λ3875aca303ee, "open", (λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd) => {
      if (!λ9b7d63dbbdfd.length) return λ0926ecd723cb.apply(λ2dca19b802ea, λ9b7d63dbbdfd);
      let [λ3109f969b1e8] = λ9b7d63dbbdfd;
      return λ3109f969b1e8 = λ206a4e8d0921.rewriteUrl(λ3109f969b1e8), λ0926ecd723cb.call(λ2dca19b802ea, λ3109f969b1e8);
    }), λ206a4e8d0921.$wrap = function(λ0926ecd723cb) {
      return λ0926ecd723cb === "location" ? λ206a4e8d0921.methods.location : λ0926ecd723cb === "eval" ? λ206a4e8d0921.methods.eval : λ0926ecd723cb;
    }, λ206a4e8d0921.$get = function(λ0926ecd723cb) {
      return λ0926ecd723cb === λ3875aca303ee.location ? λ206a4e8d0921.location : λ0926ecd723cb === λ3875aca303ee.eval ? λ206a4e8d0921.eval : λ0926ecd723cb === λ3875aca303ee.parent ? λ3875aca303ee.__uv$parent : λ0926ecd723cb === λ3875aca303ee.top ? λ3875aca303ee.__uv$top : λ0926ecd723cb;
    }, λ206a4e8d0921.eval = λab36319f12b2.wrap(λ3875aca303ee, "eval", (λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd) => {
      if (!λ9b7d63dbbdfd.length || typeof λ9b7d63dbbdfd[0] != "string") return λ0926ecd723cb.apply(λ2dca19b802ea, λ9b7d63dbbdfd);
      let [λ3109f969b1e8] = λ9b7d63dbbdfd;
      return λ3109f969b1e8 = λ206a4e8d0921.rewriteJS(λ3109f969b1e8), λ0926ecd723cb.call(λ2dca19b802ea, λ3109f969b1e8);
    }), λ206a4e8d0921.call = function(λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd) {
      return λ9b7d63dbbdfd ? λ0926ecd723cb.apply(λ9b7d63dbbdfd, λ2dca19b802ea) : λ0926ecd723cb(...λ2dca19b802ea);
    }, λ206a4e8d0921.call$ = function(λ0926ecd723cb, λ2dca19b802ea, λ9b7d63dbbdfd = []) {
      return λ0926ecd723cb[λ2dca19b802ea].apply(λ0926ecd723cb, λ9b7d63dbbdfd);
    }, λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ1e5f48072425, {
      get: () => λ206a4e8d0921,
      enumerable: !1
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.setSource, {
      value: function(λ0926ecd723cb) {
        return λab36319f12b2.nativeMethods.isExtensible(this) ? (λab36319f12b2.nativeMethods.defineProperty(this, λ206a4e8d0921.methods.source, {
          value: λ0926ecd723cb,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.source, {
      value: λ206a4e8d0921,
      writable: !0,
      enumerable: !1
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.location, {
      configurable: !0,
      get() {
        return this === λ3875aca303ee.document || this === λ3875aca303ee ? λ206a4e8d0921.location : this.location;
      },
      set(λ0926ecd723cb) {
        this === λ3875aca303ee.document || this === λ3875aca303ee ? λ206a4e8d0921.location.href = λ0926ecd723cb : this.location = λ0926ecd723cb;
      }
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.parent, {
      configurable: !0,
      get() {
        let λ0926ecd723cb = this.parent;
        if (this === λ3875aca303ee) try {
          return "__uv" in λ0926ecd723cb ? λ0926ecd723cb : this;
        } catch {
          return this;
        }
        return λ0926ecd723cb;
      },
      set(λ0926ecd723cb) {
        this.parent = λ0926ecd723cb;
      }
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.top, {
      configurable: !0,
      get() {
        let λ0926ecd723cb = this.top;
        if (this === λ3875aca303ee) {
          if (λ0926ecd723cb === this.parent) return this[λ206a4e8d0921.methods.parent];
          try {
            if ("__uv" in λ0926ecd723cb) return λ0926ecd723cb;
            {
              let λ2dca19b802ea = this;
              for (;λ2dca19b802ea.parent !== λ0926ecd723cb; ) λ2dca19b802ea = λ2dca19b802ea.parent;
              return "__uv" in λ2dca19b802ea ? λ2dca19b802ea : this;
            }
          } catch {
            return this;
          }
        }
        return λ0926ecd723cb;
      },
      set(λ0926ecd723cb) {
        this.top = λ0926ecd723cb;
      }
    }), λab36319f12b2.nativeMethods.defineProperty(λ3875aca303ee.Object.prototype, λ206a4e8d0921.methods.eval, {
      configurable: !0,
      get() {
        return this === λ3875aca303ee ? λ206a4e8d0921.eval : this.eval;
      },
      set(λ0926ecd723cb) {
        this.eval = λ0926ecd723cb;
      }
    });
  }
})();
