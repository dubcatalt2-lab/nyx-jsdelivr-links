"use strict";

(() => {
  var λ5b5808099cd3 = self.StemConnect, λd7c32e705c0e = self.UVClient, λ4d091b2ce089 = self.__uv$config, λ6f361ca3bc96 = self.__uv$cookies;
  if (typeof λ6f361ca3bc96 != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λ6176e4773835) {
    if ("__uv" in λ6176e4773835 && λ6176e4773835.__uv instanceof λ5b5808099cd3) return !1;
    λ6176e4773835.document && λ6176e4773835.window && λ6176e4773835.document.querySelectorAll("script[__uv-script]").forEach(λ5b5808099cd3 => λ5b5808099cd3.remove());
    let λd8ce78d6c3b1 = !λ6176e4773835.window, λe9a685e751cc = "__uv", λ9b0d54a7c054 = "__uv$", λ54649b76b083 = new λ5b5808099cd3(λ4d091b2ce089), λff60c7011722;
    λd8ce78d6c3b1 ? λff60c7011722 = new λ5b5808099cd3.BareClient(new Promise(λ5b5808099cd3 => {
      addEventListener("message", ({data: λd7c32e705c0e}) => {
        typeof λd7c32e705c0e == "object" && "__uv$type" in λd7c32e705c0e && λd7c32e705c0e.__uv$type === "baremuxinit" && λ5b5808099cd3(λd7c32e705c0e.port);
      });
    })) : λff60c7011722 = new λ5b5808099cd3.BareClient;
    let λ1d148a20d005 = new λd7c32e705c0e(λ6176e4773835, λff60c7011722, λd8ce78d6c3b1), {HTMLMediaElement: λ7cea501a88cc, HTMLScriptElement: λ6e90f7467d2f, HTMLAudioElement: λcdbc1e86eeb2, HTMLVideoElement: λf8dfd38e984d, HTMLInputElement: λe618e0b19474, HTMLEmbedElement: λ3da4df488976, HTMLTrackElement: λefa7f1368b6a, HTMLAnchorElement: λ5dee6f276b49, HTMLIFrameElement: λ09b661a16e6b, HTMLAreaElement: λ83ee6838a53a, HTMLLinkElement: λ16f482b3de4e, HTMLBaseElement: λ072c14bd6176, HTMLFormElement: λ59ab5adfc260, HTMLImageElement: λa572c9b42c42, HTMLSourceElement: λb7c4438f44eb} = λ6176e4773835;
    λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835, "__uv", {
      value: λ54649b76b083,
      enumerable: !1
    }), λ54649b76b083.meta.origin = location.origin, λ54649b76b083.location = λ1d148a20d005.location.emulate(λ5b5808099cd3 => λ5b5808099cd3 === "about:srcdoc" ? new URL(λ5b5808099cd3) : (λ5b5808099cd3.startsWith("blob:") && (λ5b5808099cd3 = λ5b5808099cd3.slice(5)), 
    new URL(λ54649b76b083.sourceUrl(λ5b5808099cd3))), λ5b5808099cd3 => λ54649b76b083.rewriteUrl(λ5b5808099cd3));
    let λe09c5f5d6921 = λ6f361ca3bc96;
    if (λ54649b76b083.meta.url = λ54649b76b083.location, λ54649b76b083.domain = λ54649b76b083.meta.url.host, 
    λ54649b76b083.blobUrls = new λ6176e4773835.Map, λ54649b76b083.referrer = "", λ54649b76b083.cookies = [], 
    λ54649b76b083.localStorageObj = {}, λ54649b76b083.sessionStorageObj = {}, λ54649b76b083.location.href === "about:srcdoc" && (λ54649b76b083.meta = λ6176e4773835.parent.__uv.meta), 
    λ6176e4773835.EventTarget && (λ54649b76b083.addEventListener = λ6176e4773835.EventTarget.prototype.addEventListener, 
    λ54649b76b083.removeListener = λ6176e4773835.EventTarget.prototype.removeListener, 
    λ54649b76b083.dispatchEvent = λ6176e4773835.EventTarget.prototype.dispatchEvent), 
    λ1d148a20d005.nativeMethods.defineProperty(λ1d148a20d005.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λ1d148a20d005.storage.sessionStorage) return λ54649b76b083.sessionStorageObj;
        if (this === λ1d148a20d005.storage.localStorage) return λ54649b76b083.localStorageObj;
      },
      enumerable: !1
    }), λ6176e4773835.localStorage) {
      for (let λ5b5808099cd3 in λ6176e4773835.localStorage) λ5b5808099cd3.startsWith(λ9b0d54a7c054 + λ54649b76b083.location.origin + "@") && (λ54649b76b083.localStorageObj[λ5b5808099cd3.slice((λ9b0d54a7c054 + λ54649b76b083.location.origin + "@").length)] = λ6176e4773835.localStorage.getItem(λ5b5808099cd3));
      λ54649b76b083.lsWrap = λ1d148a20d005.storage.emulate(λ1d148a20d005.storage.localStorage, λ54649b76b083.localStorageObj);
    }
    if (λ6176e4773835.sessionStorage) {
      for (let λ5b5808099cd3 in λ6176e4773835.sessionStorage) λ5b5808099cd3.startsWith(λ9b0d54a7c054 + λ54649b76b083.location.origin + "@") && (λ54649b76b083.sessionStorageObj[λ5b5808099cd3.slice((λ9b0d54a7c054 + λ54649b76b083.location.origin + "@").length)] = λ6176e4773835.sessionStorage.getItem(λ5b5808099cd3));
      λ54649b76b083.ssWrap = λ1d148a20d005.storage.emulate(λ1d148a20d005.storage.sessionStorage, λ54649b76b083.sessionStorageObj);
    }
    let λ3e72d4f8c704 = λ6176e4773835.document ? λ1d148a20d005.node.baseURI.get.call(λ6176e4773835.document) : λ6176e4773835.location.href, λ26de36ba1a6f = λ54649b76b083.sourceUrl(λ3e72d4f8c704);
    λ1d148a20d005.nativeMethods.defineProperty(λ54649b76b083.meta, "base", {
      get() {
        return λ6176e4773835.document ? (λ1d148a20d005.node.baseURI.get.call(λ6176e4773835.document) !== λ3e72d4f8c704 && (λ3e72d4f8c704 = λ1d148a20d005.node.baseURI.get.call(λ6176e4773835.document), 
        λ26de36ba1a6f = λ54649b76b083.sourceUrl(λ3e72d4f8c704)), λ26de36ba1a6f) : λ54649b76b083.meta.url.href;
      }
    }), λ54649b76b083.methods = {
      setSource: λ9b0d54a7c054 + "setSource",
      source: λ9b0d54a7c054 + "source",
      location: λ9b0d54a7c054 + "location",
      function: λ9b0d54a7c054 + "function",
      string: λ9b0d54a7c054 + "string",
      eval: λ9b0d54a7c054 + "eval",
      parent: λ9b0d54a7c054 + "parent",
      top: λ9b0d54a7c054 + "top"
    }, λ54649b76b083.filterKeys = [ λe9a685e751cc, λ54649b76b083.methods.setSource, λ54649b76b083.methods.source, λ54649b76b083.methods.location, λ54649b76b083.methods.function, λ54649b76b083.methods.string, λ54649b76b083.methods.eval, λ54649b76b083.methods.parent, λ54649b76b083.methods.top, λ9b0d54a7c054 + "protocol", λ9b0d54a7c054 + "storageObj", λ9b0d54a7c054 + "url", λ9b0d54a7c054 + "modifiedStyle", λ9b0d54a7c054 + "config", λ9b0d54a7c054 + "dispatched", "StemConnect", "__uvHook" ], 
    λ1d148a20d005.on("wrap", (λ5b5808099cd3, λd7c32e705c0e) => {
      λ1d148a20d005.nativeMethods.defineProperty(λd7c32e705c0e, "name", λ1d148a20d005.nativeMethods.getOwnPropertyDescriptor(λ5b5808099cd3, "name")), 
      λ1d148a20d005.nativeMethods.defineProperty(λd7c32e705c0e, "length", λ1d148a20d005.nativeMethods.getOwnPropertyDescriptor(λ5b5808099cd3, "length")), 
      λ1d148a20d005.nativeMethods.defineProperty(λd7c32e705c0e, λ54649b76b083.methods.string, {
        enumerable: !1,
        value: λ1d148a20d005.nativeMethods.fnToString.call(λ5b5808099cd3)
      }), λ1d148a20d005.nativeMethods.defineProperty(λd7c32e705c0e, λ54649b76b083.methods.function, {
        enumerable: !1,
        value: λ5b5808099cd3
      });
    }), λ1d148a20d005.fetch.on("request", λ5b5808099cd3 => {
      λ5b5808099cd3.data.input = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.input);
    }), λ1d148a20d005.fetch.on("requestUrl", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.sourceUrl(λ5b5808099cd3.data.value);
    }), λ1d148a20d005.fetch.on("responseUrl", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.sourceUrl(λ5b5808099cd3.data.value);
    }), λ1d148a20d005.xhr.on("open", λ5b5808099cd3 => {
      λ5b5808099cd3.data.input = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.input);
    }), λ1d148a20d005.xhr.on("responseUrl", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.sourceUrl(λ5b5808099cd3.data.value);
    }), λ1d148a20d005.workers.on("worker", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.workers.on("addModule", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.workers.on("importScripts", λ5b5808099cd3 => {
      for (let λd7c32e705c0e in λ5b5808099cd3.data.scripts) λ5b5808099cd3.data.scripts[λd7c32e705c0e] = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.scripts[λd7c32e705c0e]);
    }), λ1d148a20d005.workers.on("postMessage", λ5b5808099cd3 => {
      let λd7c32e705c0e = λ5b5808099cd3.data.origin;
      λ5b5808099cd3.data.origin = "*", λ5b5808099cd3.data.message = {
        __data: λ5b5808099cd3.data.message,
        __origin: λ54649b76b083.meta.url.origin,
        __to: λd7c32e705c0e
      };
    }), λ1d148a20d005.navigator.on("sendBeacon", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.document.on("getCookie", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λe09c5f5d6921;
    }), λ1d148a20d005.document.on("setCookie", λ5b5808099cd3 => {
      λ54649b76b083.cookie.db().then(λd7c32e705c0e => {
        λ54649b76b083.cookie.setCookies(λ5b5808099cd3.data.value, λd7c32e705c0e, λ54649b76b083.meta), 
        λ54649b76b083.cookie.getCookies(λd7c32e705c0e).then(λ5b5808099cd3 => {
          λe09c5f5d6921 = λ54649b76b083.cookie.serialize(λ5b5808099cd3, λ54649b76b083.meta, !0);
        });
      });
      let λd7c32e705c0e = λ54649b76b083.cookie.setCookie(λ5b5808099cd3.data.value)[0];
      λd7c32e705c0e.path || (λd7c32e705c0e.path = "/"), λd7c32e705c0e.domain || (λd7c32e705c0e.domain = λ54649b76b083.meta.url.hostname), 
      λ54649b76b083.cookie.validateCookie(λd7c32e705c0e, λ54649b76b083.meta, !0) && (λe09c5f5d6921.length && (λe09c5f5d6921 += "; "), 
      λe09c5f5d6921 += `${λd7c32e705c0e.name}=${λd7c32e705c0e.value}`), λ5b5808099cd3.respondWith(λ5b5808099cd3.data.value);
    }), λ1d148a20d005.element.on("setInnerHTML", λ5b5808099cd3 => {
      switch (λ5b5808099cd3.that.tagName) {
       case "SCRIPT":
        λ5b5808099cd3.data.value = λ54649b76b083.js.rewrite(λ5b5808099cd3.data.value);
        break;

       case "STYLE":
        λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value);
        break;

       default:
        λ5b5808099cd3.data.value = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.value);
      }
    }), λ1d148a20d005.element.on("getInnerHTML", λ5b5808099cd3 => {
      switch (λ5b5808099cd3.that.tagName) {
       case "SCRIPT":
        λ5b5808099cd3.data.value = λ54649b76b083.js.source(λ5b5808099cd3.data.value);
        break;

       case "STYLE":
        λ5b5808099cd3.data.value = λ54649b76b083.sourceCSS(λ5b5808099cd3.data.value);
        break;

       default:
        λ5b5808099cd3.data.value = λ54649b76b083.sourceHtml(λ5b5808099cd3.data.value);
      }
    }), λ1d148a20d005.element.on("setOuterHTML", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.value, {
        document: λ5b5808099cd3.that.tagName === "HTML"
      });
    }), λ1d148a20d005.element.on("getOuterHTML", λ5b5808099cd3 => {
      switch (λ5b5808099cd3.that.tagName) {
       case "HEAD":
        λ5b5808099cd3.data.value = λ54649b76b083.sourceHtml(λ5b5808099cd3.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λ5b5808099cd3.data.value = λ54649b76b083.sourceHtml(λ5b5808099cd3.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λ5b5808099cd3.data.value = λ54649b76b083.sourceHtml(λ5b5808099cd3.data.value, {
          document: λ5b5808099cd3.that.tagName === "HTML"
        });
        break;
      }
    }), λ1d148a20d005.document.on("write", λ5b5808099cd3 => {
      if (!λ5b5808099cd3.data.html.length) return !1;
      λ5b5808099cd3.data.html = [ λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.html.join("")) ];
    }), λ1d148a20d005.document.on("writeln", λ5b5808099cd3 => {
      if (!λ5b5808099cd3.data.html.length) return !1;
      λ5b5808099cd3.data.html = [ λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.html.join("")) ];
    }), λ1d148a20d005.element.on("insertAdjacentHTML", λ5b5808099cd3 => {
      λ5b5808099cd3.data.html = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.html);
    }), λ1d148a20d005.eventSource.on("construct", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.eventSource.on("url", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.idb.on("idbFactoryOpen", λ5b5808099cd3 => {
      λ5b5808099cd3.data.name !== "__op" && (λ5b5808099cd3.data.name = `${λ54649b76b083.meta.url.origin}@${λ5b5808099cd3.data.name}`);
    }), λ1d148a20d005.idb.on("idbFactoryName", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ5b5808099cd3.data.value.slice(λ54649b76b083.meta.url.origin.length + 1);
    }), λ1d148a20d005.history.on("replaceState", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url && (λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url, "__uv" in λ5b5808099cd3.that ? λ5b5808099cd3.that.__uv.meta : λ54649b76b083.meta));
    }), λ1d148a20d005.history.on("pushState", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url && (λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url, "__uv" in λ5b5808099cd3.that ? λ5b5808099cd3.that.__uv.meta : λ54649b76b083.meta));
    }), λ1d148a20d005.element.on("getAttribute", λ5b5808099cd3 => {
      λ1d148a20d005.element.hasAttribute.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name) && λ5b5808099cd3.respondWith(λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name));
    }), λ1d148a20d005.message.on("postMessage", λ5b5808099cd3 => {
      let λd7c32e705c0e = λ5b5808099cd3.data.origin, λ4d091b2ce089 = λ54649b76b083.call;
      λ5b5808099cd3.that && (λ4d091b2ce089 = λ5b5808099cd3.that.__uv$source.call), λ5b5808099cd3.data.origin = "*", 
      λ5b5808099cd3.data.message = {
        __data: λ5b5808099cd3.data.message,
        __origin: (λ5b5808099cd3.that || λ5b5808099cd3.target).__uv$source.location.origin,
        __to: λd7c32e705c0e
      }, (() => {
        let λd7c32e705c0e = λ5b5808099cd3.data.transfer || [];
        try {
          const λ4d091b2ce089 = new Set(λd7c32e705c0e);
          const λ6f361ca3bc96 = new Set;
          const a = λ5b5808099cd3 => {
            if (!λ5b5808099cd3 || typeof λ5b5808099cd3 != "object" || λ6f361ca3bc96.has(λ5b5808099cd3)) return;
            λ6f361ca3bc96.add(λ5b5808099cd3);
            let λd7c32e705c0e = "";
            try {
              λd7c32e705c0e = Object.prototype.toString.call(λ5b5808099cd3);
            } catch {}
            if (typeof MessagePort != "undefined" && λ5b5808099cd3 instanceof MessagePort || λd7c32e705c0e === "[object MessagePort]") {
              λ4d091b2ce089.add(λ5b5808099cd3);
              return;
            }
            if (Array.isArray(λ5b5808099cd3)) {
              for (const λd7c32e705c0e of λ5b5808099cd3) a(λd7c32e705c0e);
              return;
            }
            for (const λd7c32e705c0e of Object.values(λ5b5808099cd3)) a(λd7c32e705c0e);
          };
          a(λ5b5808099cd3.data.message);
          λd7c32e705c0e = [ ...λ4d091b2ce089 ];
        } catch {}
        return λ5b5808099cd3.respondWith(λd8ce78d6c3b1 ? λ4d091b2ce089(λ5b5808099cd3.target, [ λ5b5808099cd3.data.message, λd7c32e705c0e ], λ5b5808099cd3.that) : λ4d091b2ce089(λ5b5808099cd3.target, [ λ5b5808099cd3.data.message, λ5b5808099cd3.data.origin, λd7c32e705c0e ], λ5b5808099cd3.that));
      })();
    }), λ1d148a20d005.message.on("data", λ5b5808099cd3 => {
      let {value: λd7c32e705c0e} = λ5b5808099cd3.data;
      typeof λd7c32e705c0e == "object" && "__data" in λd7c32e705c0e && "__origin" in λd7c32e705c0e && λ5b5808099cd3.respondWith(λd7c32e705c0e.__data);
    }), λ1d148a20d005.message.on("origin", λ5b5808099cd3 => {
      let λd7c32e705c0e = λ1d148a20d005.message.messageData.get.call(λ5b5808099cd3.that);
      typeof λd7c32e705c0e == "object" && λd7c32e705c0e.__data && λd7c32e705c0e.__origin && λ5b5808099cd3.respondWith(λd7c32e705c0e.__origin);
    }), λ1d148a20d005.overrideDescriptor(λ6176e4773835, "origin", {
      get: () => λ54649b76b083.location.origin
    }), λ1d148a20d005.node.on("baseURI", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value.startsWith(λ6176e4773835.location.origin) && (λ5b5808099cd3.data.value = λ54649b76b083.sourceUrl(λ5b5808099cd3.data.value));
    }), λ1d148a20d005.element.on("setAttribute", λ5b5808099cd3 => {
      if (λ5b5808099cd3.that instanceof λ7cea501a88cc && λ5b5808099cd3.data.name === "src" && λ5b5808099cd3.data.value.startsWith("blob:")) {
        λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
        λ5b5808099cd3.data.value = λ54649b76b083.blobUrls.get(λ5b5808099cd3.data.value);
        return;
      }
      λ54649b76b083.attrs.isUrl(λ5b5808099cd3.data.name) && (λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.value)), 
      λ54649b76b083.attrs.isStyle(λ5b5808099cd3.data.name) && (λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value, {
        context: "declarationList"
      })), λ54649b76b083.attrs.isHtml(λ5b5808099cd3.data.name) && (λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.value, {
        ...λ54649b76b083.meta,
        document: !0,
        injectHead: λ54649b76b083.createHtmlInject(λ54649b76b083.handlerScript, λ54649b76b083.bundleScript, λ54649b76b083.clientScript, λ54649b76b083.configScript, λe09c5f5d6921, λ6176e4773835.location.href)
      })), λ54649b76b083.attrs.isSrcset(λ5b5808099cd3.data.name) && (λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.html.wrapSrcset(λ5b5808099cd3.data.value.toString())), 
      λ54649b76b083.attrs.isForbidden(λ5b5808099cd3.data.name) && (λ5b5808099cd3.data.name = λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name);
    }), λ1d148a20d005.element.on("audio", λ5b5808099cd3 => {
      λ5b5808099cd3.data.url = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.url);
    }), λ1d148a20d005.element.hookProperty([ λ5dee6f276b49, λ83ee6838a53a, λ16f482b3de4e, λ072c14bd6176 ], "href", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ54649b76b083.sourceUrl(λ5b5808099cd3.call(λd7c32e705c0e)),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-href", λ4d091b2ce089), 
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.rewriteUrl(λ4d091b2ce089));
      }
    }), λ1d148a20d005.element.hookProperty([ λ6e90f7467d2f, λcdbc1e86eeb2, λf8dfd38e984d, λ7cea501a88cc, λa572c9b42c42, λe618e0b19474, λ3da4df488976, λ09b661a16e6b, λefa7f1368b6a, λb7c4438f44eb ], "src", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ54649b76b083.sourceUrl(λ5b5808099cd3.call(λd7c32e705c0e)),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        if (new String(λ4d091b2ce089).toString().trim().startsWith("blob:") && λd7c32e705c0e instanceof λ7cea501a88cc) return λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-src", λ4d091b2ce089), 
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.blobUrls.get(λ4d091b2ce089) || λ4d091b2ce089);
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-src", λ4d091b2ce089), 
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.rewriteUrl(λ4d091b2ce089));
      }
    }), λ1d148a20d005.element.hookProperty([ λ59ab5adfc260 ], "action", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ54649b76b083.sourceUrl(λ5b5808099cd3.call(λd7c32e705c0e)),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-action", λ4d091b2ce089), 
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.rewriteUrl(λ4d091b2ce089));
      }
    }), λ1d148a20d005.element.hookProperty([ λa572c9b42c42, λb7c4438f44eb ], "srcset", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ1d148a20d005.element.getAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-srcset") || λ5b5808099cd3.call(λd7c32e705c0e),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-srcset", λ4d091b2ce089), 
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.html.wrapSrcset(λ4d091b2ce089.toString()));
      }
    }), λ1d148a20d005.element.hookProperty(λ6e90f7467d2f, "integrity", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ1d148a20d005.element.getAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-integrity"),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-integrity", λ4d091b2ce089);
      }
    }), λ1d148a20d005.element.hookProperty(λ09b661a16e6b, "sandbox", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ1d148a20d005.element.getAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-sandbox") || λ5b5808099cd3.call(λd7c32e705c0e),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ1d148a20d005.element.setAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-sandbox", λ4d091b2ce089);
      }
    });
    let λ041715d1da4b = λ09b661a16e6b && Object.getOwnPropertyDescriptor(λ09b661a16e6b.prototype, "contentWindow").get;
    function U(λ5b5808099cd3) {
      let λd7c32e705c0e = λ041715d1da4b.call(λ5b5808099cd3);
      if (!λd7c32e705c0e.__uv) try {
        p(λd7c32e705c0e);
      } catch (λ5b5808099cd3) {
        console.error("catastrophic failure"), console.error(λ5b5808099cd3);
      }
    }
    if (λ1d148a20d005.element.hookProperty(λ09b661a16e6b, "contentWindow", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => (U(λd7c32e705c0e), λ5b5808099cd3.call(λd7c32e705c0e))
    }), λ1d148a20d005.element.hookProperty(λ09b661a16e6b, "contentDocument", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => (U(λd7c32e705c0e), λ5b5808099cd3.call(λd7c32e705c0e))
    }), λ1d148a20d005.element.hookProperty(λ09b661a16e6b, "srcdoc", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ1d148a20d005.element.getAttribute.call(λd7c32e705c0e, λ54649b76b083.attributePrefix + "-attr-srcdoc") || λ5b5808099cd3.call(λd7c32e705c0e),
      set: (λ5b5808099cd3, λd7c32e705c0e, [λ4d091b2ce089]) => {
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.rewriteHtml(λ4d091b2ce089, {
          document: !0,
          injectHead: λ54649b76b083.createHtmlInject(λ54649b76b083.handlerScript, λ54649b76b083.bundleScript, λ54649b76b083.clientScript, λ54649b76b083.configScript, λe09c5f5d6921, λ6176e4773835.location.href)
        }));
      }
    }), λ1d148a20d005.node.on("getTextContent", λ5b5808099cd3 => {
      switch (λ5b5808099cd3.that.tagName) {
       case "SCRIPT":
        λ5b5808099cd3.data.value = λ54649b76b083.js.source(λ5b5808099cd3.data.value);
        break;

       case "STYLE":
        λ5b5808099cd3.data.value = λ54649b76b083.sourceCSS(λ5b5808099cd3.data.value);
        break;

       default:
      }
    }), λ1d148a20d005.node.on("setTextContent", λ5b5808099cd3 => {
      switch (λ5b5808099cd3.that.tagName) {
       case "SCRIPT":
        λ5b5808099cd3.data.value = λ54649b76b083.js.rewrite(λ5b5808099cd3.data.value);
        break;

       case "STYLE":
        λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λ6176e4773835.navigator && delete λ6176e4773835.Navigator.prototype.serviceWorker, 
    λ1d148a20d005.document.on("getDomain", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.domain;
    }), λ1d148a20d005.document.on("setDomain", λ5b5808099cd3 => {
      if (!λ5b5808099cd3.data.value.toString().endsWith(λ54649b76b083.meta.url.hostname.split(".").slice(-2).join("."))) return λ5b5808099cd3.respondWith("");
      λ5b5808099cd3.respondWith(λ54649b76b083.domain = λ5b5808099cd3.data.value);
    }), λ1d148a20d005.document.on("url", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.location.href;
    }), λ1d148a20d005.document.on("documentURI", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.location.href;
    }), λ1d148a20d005.document.on("referrer", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.referrer || λ54649b76b083.sourceUrl(λ5b5808099cd3.data.value);
    }), λ1d148a20d005.document.on("parseFromString", λ5b5808099cd3 => {
      if (λ5b5808099cd3.data.type !== "text/html") return !1;
      λ5b5808099cd3.data.string = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.string, {
        ...λ54649b76b083.meta,
        document: !0
      });
    }), λ1d148a20d005.attribute.on("getValue", λ5b5808099cd3 => {
      λ1d148a20d005.element.hasAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name) && (λ5b5808099cd3.data.value = λ1d148a20d005.element.getAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name));
    }), λ1d148a20d005.attribute.on("setValue", λ5b5808099cd3 => {
      λ54649b76b083.attrs.isUrl(λ5b5808099cd3.data.name) && (λ1d148a20d005.element.setAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteUrl(λ5b5808099cd3.data.value)), 
      λ54649b76b083.attrs.isStyle(λ5b5808099cd3.data.name) && (λ1d148a20d005.element.setAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value, {
        context: "declarationList"
      })), λ54649b76b083.attrs.isHtml(λ5b5808099cd3.data.name) && (λ1d148a20d005.element.setAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteHtml(λ5b5808099cd3.data.value, {
        ...λ54649b76b083.meta,
        document: !0,
        injectHead: λ54649b76b083.createHtmlInject(λ54649b76b083.handlerScript, λ54649b76b083.bundleScript, λ54649b76b083.clientScript, λ54649b76b083.configScript, λe09c5f5d6921, λ6176e4773835.location.href)
      })), λ54649b76b083.attrs.isSrcset(λ5b5808099cd3.data.name) && (λ1d148a20d005.element.setAttribute.call(λ5b5808099cd3.that.ownerElement, λ54649b76b083.attributePrefix + "-attr-" + λ5b5808099cd3.data.name, λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.value = λ54649b76b083.html.wrapSrcset(λ5b5808099cd3.data.value.toString()));
    }), λ1d148a20d005.url.on("createObjectURL", λ5b5808099cd3 => {
      let λd7c32e705c0e = λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ5b5808099cd3.data.object);
      if (λd7c32e705c0e.startsWith("blob:" + location.origin)) {
        let λ4d091b2ce089 = "blob:" + (λ54649b76b083.meta.url.href !== "about:blank" ? λ54649b76b083.meta.url.origin : λ6176e4773835.parent.__uv.meta.url.origin) + λd7c32e705c0e.slice(5 + location.origin.length);
        λ54649b76b083.blobUrls.set(λ4d091b2ce089, λd7c32e705c0e), λ5b5808099cd3.respondWith(λ4d091b2ce089);
      } else λ5b5808099cd3.respondWith(λd7c32e705c0e);
    }), λ1d148a20d005.url.on("revokeObjectURL", λ5b5808099cd3 => {
      if (λ54649b76b083.blobUrls.has(λ5b5808099cd3.data.url)) {
        let λd7c32e705c0e = λ5b5808099cd3.data.url;
        λ5b5808099cd3.data.url = λ54649b76b083.blobUrls.get(λ5b5808099cd3.data.url), λ54649b76b083.blobUrls.delete(λd7c32e705c0e);
      }
    }), λ1d148a20d005.storage.on("get", λ5b5808099cd3 => {
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("set", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && (λ5b5808099cd3.that.__uv$storageObj[λ5b5808099cd3.data.name] = λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("delete", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && delete λ5b5808099cd3.that.__uv$storageObj[λ5b5808099cd3.data.name], 
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("getItem", λ5b5808099cd3 => {
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("setItem", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && (λ5b5808099cd3.that.__uv$storageObj[λ5b5808099cd3.data.name] = λ5b5808099cd3.data.value), 
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("removeItem", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && delete λ5b5808099cd3.that.__uv$storageObj[λ5b5808099cd3.data.name], 
      λ5b5808099cd3.data.name = λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λ5b5808099cd3.data.name;
    }), λ1d148a20d005.storage.on("clear", λ5b5808099cd3 => {
      if (λ5b5808099cd3.that.__uv$storageObj) for (let λd7c32e705c0e of λ1d148a20d005.nativeMethods.keys.call(null, λ5b5808099cd3.that.__uv$storageObj)) delete λ5b5808099cd3.that.__uv$storageObj[λd7c32e705c0e], 
      λ1d148a20d005.storage.removeItem.call(λ5b5808099cd3.that, λ9b0d54a7c054 + λ54649b76b083.meta.url.origin + "@" + λd7c32e705c0e), 
      λ5b5808099cd3.respondWith();
    }), λ1d148a20d005.storage.on("length", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && λ5b5808099cd3.respondWith(λ1d148a20d005.nativeMethods.keys.call(null, λ5b5808099cd3.that.__uv$storageObj).length);
    }), λ1d148a20d005.storage.on("key", λ5b5808099cd3 => {
      λ5b5808099cd3.that.__uv$storageObj && λ5b5808099cd3.respondWith(λ1d148a20d005.nativeMethods.keys.call(null, λ5b5808099cd3.that.__uv$storageObj)[λ5b5808099cd3.data.index] || null);
    }), λ1d148a20d005.function.on("function", λ5b5808099cd3 => {
      λ5b5808099cd3.data.script = λ54649b76b083.rewriteJS(λ5b5808099cd3.data.script);
    }), λ1d148a20d005.function.on("toString", λ5b5808099cd3 => {
      λ54649b76b083.methods.string in λ5b5808099cd3.that && λ5b5808099cd3.respondWith(λ5b5808099cd3.that[λ54649b76b083.methods.string]);
    }), λ1d148a20d005.object.on("getOwnPropertyNames", λ5b5808099cd3 => {
      λ5b5808099cd3.data.names = λ5b5808099cd3.data.names.filter(λ5b5808099cd3 => !λ54649b76b083.filterKeys.includes(λ5b5808099cd3));
    }), λ1d148a20d005.object.on("getOwnPropertyDescriptors", λ5b5808099cd3 => {
      for (let λd7c32e705c0e of λ54649b76b083.filterKeys) delete λ5b5808099cd3.data.descriptors[λd7c32e705c0e];
    }), λ1d148a20d005.style.on("setProperty", λ5b5808099cd3 => {
      λ1d148a20d005.style.dashedUrlProps.includes(λ5b5808099cd3.data.property) && (λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value, {
        context: "value",
        ...λ54649b76b083.meta
      }));
    }), λ1d148a20d005.style.on("getPropertyValue", λ5b5808099cd3 => {
      λ1d148a20d005.style.dashedUrlProps.includes(λ5b5808099cd3.data.property) && λ5b5808099cd3.respondWith(λ54649b76b083.sourceCSS(λ5b5808099cd3.target.call(λ5b5808099cd3.that, λ5b5808099cd3.data.property), {
        context: "value",
        ...λ54649b76b083.meta
      }));
    }), "CSS2Properties" in λ6176e4773835) for (let λ5b5808099cd3 of λ1d148a20d005.style.urlProps) λ1d148a20d005.overrideDescriptor(λ6176e4773835.CSS2Properties.prototype, λ5b5808099cd3, {
      get: (λ5b5808099cd3, λd7c32e705c0e) => λ54649b76b083.sourceCSS(λ5b5808099cd3.call(λd7c32e705c0e), {
        context: "value",
        ...λ54649b76b083.meta
      }),
      set: (λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089) => {
        λ5b5808099cd3.call(λd7c32e705c0e, λ54649b76b083.rewriteCSS(λ4d091b2ce089, {
          context: "value",
          ...λ54649b76b083.meta
        }));
      }
    }); else "HTMLElement" in λ6176e4773835 && λ1d148a20d005.overrideDescriptor(λ6176e4773835.HTMLElement.prototype, "style", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => {
        let λ4d091b2ce089 = λ5b5808099cd3.call(λd7c32e705c0e);
        if (!λ4d091b2ce089[λ9b0d54a7c054 + "modifiedStyle"]) for (let λ5b5808099cd3 of λ1d148a20d005.style.urlProps) λ1d148a20d005.nativeMethods.defineProperty(λ4d091b2ce089, λ5b5808099cd3, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λd7c32e705c0e = λ1d148a20d005.style.getPropertyValue.call(this, λ5b5808099cd3) || "";
            return λ54649b76b083.sourceCSS(λd7c32e705c0e, {
              context: "value",
              ...λ54649b76b083.meta
            });
          },
          set(λd7c32e705c0e) {
            λ1d148a20d005.style.setProperty.call(this, λ1d148a20d005.style.propToDashed[λ5b5808099cd3] || λ5b5808099cd3, λ54649b76b083.rewriteCSS(λd7c32e705c0e, {
              context: "value",
              ...λ54649b76b083.meta
            }));
          }
        }), λ1d148a20d005.nativeMethods.defineProperty(λ4d091b2ce089, λ9b0d54a7c054 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ4d091b2ce089;
      }
    });
    λ1d148a20d005.style.on("setCssText", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.rewriteCSS(λ5b5808099cd3.data.value, {
        context: "declarationList",
        ...λ54649b76b083.meta
      });
    }), λ1d148a20d005.style.on("getCssText", λ5b5808099cd3 => {
      λ5b5808099cd3.data.value = λ54649b76b083.sourceCSS(λ5b5808099cd3.data.value, {
        context: "declarationList",
        ...λ54649b76b083.meta
      });
    }), λ54649b76b083.addEventListener.call(λ6176e4773835, "hashchange", λ5b5808099cd3 => {
      if (λ5b5808099cd3.__uv$dispatched) return !1;
      λ5b5808099cd3.stopImmediatePropagation();
      let λd7c32e705c0e = λ6176e4773835.location.hash;
      λ1d148a20d005.history.replaceState.call(λ6176e4773835.history, "", "", λ5b5808099cd3.oldURL), 
      λ54649b76b083.location.hash = λd7c32e705c0e;
    }), λ1d148a20d005.location.on("hashchange", (λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089) => {
      if (λ4d091b2ce089.HashChangeEvent && λ1d148a20d005.history.replaceState) {
        λ1d148a20d005.history.replaceState.call(λ6176e4773835.history, "", "", λ54649b76b083.rewriteUrl(λd7c32e705c0e));
        let λ6f361ca3bc96 = new λ4d091b2ce089.HashChangeEvent("hashchange", {
          newURL: λd7c32e705c0e,
          oldURL: λ5b5808099cd3
        });
        λ1d148a20d005.nativeMethods.defineProperty(λ6f361ca3bc96, λ9b0d54a7c054 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ54649b76b083.dispatchEvent.call(λ6176e4773835, λ6f361ca3bc96);
      }
    }), λ1d148a20d005.fetch.overrideRequest(), λ1d148a20d005.fetch.overrideUrl(), λ1d148a20d005.xhr.overrideOpen(), 
    λ1d148a20d005.xhr.overrideResponseUrl(), λ1d148a20d005.element.overrideHtml(), λ1d148a20d005.element.overrideAttribute(), 
    λ1d148a20d005.element.overrideInsertAdjacentHTML(), λ1d148a20d005.element.overrideAudio(), 
    λ1d148a20d005.node.overrideBaseURI(), λ1d148a20d005.node.overrideTextContent(), 
    λ1d148a20d005.attribute.overrideNameValue(), λ1d148a20d005.document.overrideDomain(), 
    λ1d148a20d005.document.overrideURL(), λ1d148a20d005.document.overrideDocumentURI(), 
    λ1d148a20d005.document.overrideWrite(), λ1d148a20d005.document.overrideReferrer(), 
    λ1d148a20d005.document.overrideParseFromString(), λ1d148a20d005.storage.overrideMethods(), 
    λ1d148a20d005.storage.overrideLength(), λ1d148a20d005.object.overrideGetPropertyNames(), 
    λ1d148a20d005.object.overrideGetOwnPropertyDescriptors(), λ1d148a20d005.idb.overrideName(), 
    λ1d148a20d005.idb.overrideOpen(), λ1d148a20d005.history.overridePushState(), λ1d148a20d005.history.overrideReplaceState(), 
    λ1d148a20d005.eventSource.overrideConstruct(), λ1d148a20d005.eventSource.overrideUrl(), 
    λ1d148a20d005.websocket.overrideWebSocket(λff60c7011722), λ1d148a20d005.url.overrideObjectURL(), 
    λ1d148a20d005.document.overrideCookie(), λ1d148a20d005.message.overridePostMessage(), 
    λ1d148a20d005.message.overrideMessageOrigin(), λ1d148a20d005.message.overrideMessageData(), 
    λ1d148a20d005.workers.overrideWorker(), λ1d148a20d005.workers.overrideAddModule(), 
    λ1d148a20d005.workers.overrideImportScripts(), λ1d148a20d005.workers.overridePostMessage(), 
    λ1d148a20d005.style.overrideSetGetProperty(), λ1d148a20d005.style.overrideCssText(), 
    λ1d148a20d005.navigator.overrideSendBeacon(), λ1d148a20d005.function.overrideFunction(), 
    λ1d148a20d005.function.overrideToString(), λ1d148a20d005.location.overrideWorkerLocation(λ5b5808099cd3 => new URL(λ54649b76b083.sourceUrl(λ5b5808099cd3))), 
    λ1d148a20d005.overrideDescriptor(λ6176e4773835, "localStorage", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => (λd7c32e705c0e || λ6176e4773835).__uv.lsWrap
    }), λ1d148a20d005.overrideDescriptor(λ6176e4773835, "sessionStorage", {
      get: (λ5b5808099cd3, λd7c32e705c0e) => (λd7c32e705c0e || λ6176e4773835).__uv.ssWrap
    }), λ1d148a20d005.override(λ6176e4773835, "open", (λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089) => {
      if (!λ4d091b2ce089.length) return λ5b5808099cd3.apply(λd7c32e705c0e, λ4d091b2ce089);
      let [λ6f361ca3bc96] = λ4d091b2ce089;
      return λ6f361ca3bc96 = λ54649b76b083.rewriteUrl(λ6f361ca3bc96), λ5b5808099cd3.call(λd7c32e705c0e, λ6f361ca3bc96);
    }), λ54649b76b083.$wrap = function(λ5b5808099cd3) {
      return λ5b5808099cd3 === "location" ? λ54649b76b083.methods.location : λ5b5808099cd3 === "eval" ? λ54649b76b083.methods.eval : λ5b5808099cd3;
    }, λ54649b76b083.$get = function(λ5b5808099cd3) {
      return λ5b5808099cd3 === λ6176e4773835.location ? λ54649b76b083.location : λ5b5808099cd3 === λ6176e4773835.eval ? λ54649b76b083.eval : λ5b5808099cd3 === λ6176e4773835.parent ? λ6176e4773835.__uv$parent : λ5b5808099cd3 === λ6176e4773835.top ? λ6176e4773835.__uv$top : λ5b5808099cd3;
    }, λ54649b76b083.eval = λ1d148a20d005.wrap(λ6176e4773835, "eval", (λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089) => {
      if (!λ4d091b2ce089.length || typeof λ4d091b2ce089[0] != "string") return λ5b5808099cd3.apply(λd7c32e705c0e, λ4d091b2ce089);
      let [λ6f361ca3bc96] = λ4d091b2ce089;
      return λ6f361ca3bc96 = λ54649b76b083.rewriteJS(λ6f361ca3bc96), λ5b5808099cd3.call(λd7c32e705c0e, λ6f361ca3bc96);
    }), λ54649b76b083.call = function(λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089) {
      return λ4d091b2ce089 ? λ5b5808099cd3.apply(λ4d091b2ce089, λd7c32e705c0e) : λ5b5808099cd3(...λd7c32e705c0e);
    }, λ54649b76b083.call$ = function(λ5b5808099cd3, λd7c32e705c0e, λ4d091b2ce089 = []) {
      return λ5b5808099cd3[λd7c32e705c0e].apply(λ5b5808099cd3, λ4d091b2ce089);
    }, λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λe9a685e751cc, {
      get: () => λ54649b76b083,
      enumerable: !1
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.setSource, {
      value: function(λ5b5808099cd3) {
        return λ1d148a20d005.nativeMethods.isExtensible(this) ? (λ1d148a20d005.nativeMethods.defineProperty(this, λ54649b76b083.methods.source, {
          value: λ5b5808099cd3,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.source, {
      value: λ54649b76b083,
      writable: !0,
      enumerable: !1
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.location, {
      configurable: !0,
      get() {
        return this === λ6176e4773835.document || this === λ6176e4773835 ? λ54649b76b083.location : this.location;
      },
      set(λ5b5808099cd3) {
        this === λ6176e4773835.document || this === λ6176e4773835 ? λ54649b76b083.location.href = λ5b5808099cd3 : this.location = λ5b5808099cd3;
      }
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.parent, {
      configurable: !0,
      get() {
        let λ5b5808099cd3 = this.parent;
        if (this === λ6176e4773835) try {
          return "__uv" in λ5b5808099cd3 ? λ5b5808099cd3 : this;
        } catch {
          return this;
        }
        return λ5b5808099cd3;
      },
      set(λ5b5808099cd3) {
        this.parent = λ5b5808099cd3;
      }
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.top, {
      configurable: !0,
      get() {
        let λ5b5808099cd3 = this.top;
        if (this === λ6176e4773835) {
          if (λ5b5808099cd3 === this.parent) return this[λ54649b76b083.methods.parent];
          try {
            if ("__uv" in λ5b5808099cd3) return λ5b5808099cd3;
            {
              let λd7c32e705c0e = this;
              for (;λd7c32e705c0e.parent !== λ5b5808099cd3; ) λd7c32e705c0e = λd7c32e705c0e.parent;
              return "__uv" in λd7c32e705c0e ? λd7c32e705c0e : this;
            }
          } catch {
            return this;
          }
        }
        return λ5b5808099cd3;
      },
      set(λ5b5808099cd3) {
        this.top = λ5b5808099cd3;
      }
    }), λ1d148a20d005.nativeMethods.defineProperty(λ6176e4773835.Object.prototype, λ54649b76b083.methods.eval, {
      configurable: !0,
      get() {
        return this === λ6176e4773835 ? λ54649b76b083.eval : this.eval;
      },
      set(λ5b5808099cd3) {
        this.eval = λ5b5808099cd3;
      }
    });
  }
})();
