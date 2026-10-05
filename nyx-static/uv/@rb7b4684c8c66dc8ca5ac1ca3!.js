"use strict";

(() => {
  var λ456a64b85487 = self.StemConnect, λeb86ee1431a0 = self.UVClient, λd7b426c6ab34 = self.__uv$config, λ2971013169c2 = self.__uv$cookies;
  if (typeof λ2971013169c2 != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λ5cc3d7478250) {
    if ("__uv" in λ5cc3d7478250 && λ5cc3d7478250.__uv instanceof λ456a64b85487) return !1;
    λ5cc3d7478250.document && λ5cc3d7478250.window && λ5cc3d7478250.document.querySelectorAll("script[__uv-script]").forEach(λ456a64b85487 => λ456a64b85487.remove());
    let λ6c9e4ddb52d3 = !λ5cc3d7478250.window, λ1fdc2c24e736 = "__uv", λ39fe0f97bd94 = "__uv$", λ1f0d6ca48c5b = new λ456a64b85487(λd7b426c6ab34), λ815637135cff;
    λ6c9e4ddb52d3 ? λ815637135cff = new λ456a64b85487.BareClient(new Promise(λ456a64b85487 => {
      addEventListener("message", ({data: λeb86ee1431a0}) => {
        typeof λeb86ee1431a0 == "object" && "__uv$type" in λeb86ee1431a0 && λeb86ee1431a0.__uv$type === "baremuxinit" && λ456a64b85487(λeb86ee1431a0.port);
      });
    })) : λ815637135cff = new λ456a64b85487.BareClient;
    let λc615cb1279ad = new λeb86ee1431a0(λ5cc3d7478250, λ815637135cff, λ6c9e4ddb52d3), {HTMLMediaElement: λd97c5e328583, HTMLScriptElement: λef8de81a4508, HTMLAudioElement: λc224cdcb639d, HTMLVideoElement: λc07b1f4ad511, HTMLInputElement: λd78fbd4751f6, HTMLEmbedElement: λd5e90deb6cc6, HTMLTrackElement: λ87ec00a6b74a, HTMLAnchorElement: λ88065f299ea0, HTMLIFrameElement: λd50a68f2336a, HTMLAreaElement: λ6d0706315327, HTMLLinkElement: λ0644160981b5, HTMLBaseElement: λ42d9f8676d7b, HTMLFormElement: λbf891bdff9fd, HTMLImageElement: λ3db72d300148, HTMLSourceElement: λ71f3c9eb23fa} = λ5cc3d7478250;
    λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250, "__uv", {
      value: λ1f0d6ca48c5b,
      enumerable: !1
    }), λ1f0d6ca48c5b.meta.origin = location.origin, λ1f0d6ca48c5b.location = λc615cb1279ad.location.emulate(λ456a64b85487 => λ456a64b85487 === "about:srcdoc" ? new URL(λ456a64b85487) : (λ456a64b85487.startsWith("blob:") && (λ456a64b85487 = λ456a64b85487.slice(5)), 
    new URL(λ1f0d6ca48c5b.sourceUrl(λ456a64b85487))), λ456a64b85487 => λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487));
    let λf28903199195 = λ2971013169c2;
    if (λ1f0d6ca48c5b.meta.url = λ1f0d6ca48c5b.location, λ1f0d6ca48c5b.domain = λ1f0d6ca48c5b.meta.url.host, 
    λ1f0d6ca48c5b.blobUrls = new λ5cc3d7478250.Map, λ1f0d6ca48c5b.referrer = "", λ1f0d6ca48c5b.cookies = [], 
    λ1f0d6ca48c5b.localStorageObj = {}, λ1f0d6ca48c5b.sessionStorageObj = {}, λ1f0d6ca48c5b.location.href === "about:srcdoc" && (λ1f0d6ca48c5b.meta = λ5cc3d7478250.parent.__uv.meta), 
    λ5cc3d7478250.EventTarget && (λ1f0d6ca48c5b.addEventListener = λ5cc3d7478250.EventTarget.prototype.addEventListener, 
    λ1f0d6ca48c5b.removeListener = λ5cc3d7478250.EventTarget.prototype.removeListener, 
    λ1f0d6ca48c5b.dispatchEvent = λ5cc3d7478250.EventTarget.prototype.dispatchEvent), 
    λc615cb1279ad.nativeMethods.defineProperty(λc615cb1279ad.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λc615cb1279ad.storage.sessionStorage) return λ1f0d6ca48c5b.sessionStorageObj;
        if (this === λc615cb1279ad.storage.localStorage) return λ1f0d6ca48c5b.localStorageObj;
      },
      enumerable: !1
    }), λ5cc3d7478250.localStorage) {
      for (let λ456a64b85487 in λ5cc3d7478250.localStorage) λ456a64b85487.startsWith(λ39fe0f97bd94 + λ1f0d6ca48c5b.location.origin + "@") && (λ1f0d6ca48c5b.localStorageObj[λ456a64b85487.slice((λ39fe0f97bd94 + λ1f0d6ca48c5b.location.origin + "@").length)] = λ5cc3d7478250.localStorage.getItem(λ456a64b85487));
      λ1f0d6ca48c5b.lsWrap = λc615cb1279ad.storage.emulate(λc615cb1279ad.storage.localStorage, λ1f0d6ca48c5b.localStorageObj);
    }
    if (λ5cc3d7478250.sessionStorage) {
      for (let λ456a64b85487 in λ5cc3d7478250.sessionStorage) λ456a64b85487.startsWith(λ39fe0f97bd94 + λ1f0d6ca48c5b.location.origin + "@") && (λ1f0d6ca48c5b.sessionStorageObj[λ456a64b85487.slice((λ39fe0f97bd94 + λ1f0d6ca48c5b.location.origin + "@").length)] = λ5cc3d7478250.sessionStorage.getItem(λ456a64b85487));
      λ1f0d6ca48c5b.ssWrap = λc615cb1279ad.storage.emulate(λc615cb1279ad.storage.sessionStorage, λ1f0d6ca48c5b.sessionStorageObj);
    }
    let λab9715a8b427 = λ5cc3d7478250.document ? λc615cb1279ad.node.baseURI.get.call(λ5cc3d7478250.document) : λ5cc3d7478250.location.href, λ854f9b96c973 = λ1f0d6ca48c5b.sourceUrl(λab9715a8b427);
    λc615cb1279ad.nativeMethods.defineProperty(λ1f0d6ca48c5b.meta, "base", {
      get() {
        return λ5cc3d7478250.document ? (λc615cb1279ad.node.baseURI.get.call(λ5cc3d7478250.document) !== λab9715a8b427 && (λab9715a8b427 = λc615cb1279ad.node.baseURI.get.call(λ5cc3d7478250.document), 
        λ854f9b96c973 = λ1f0d6ca48c5b.sourceUrl(λab9715a8b427)), λ854f9b96c973) : λ1f0d6ca48c5b.meta.url.href;
      }
    }), λ1f0d6ca48c5b.methods = {
      setSource: λ39fe0f97bd94 + "setSource",
      source: λ39fe0f97bd94 + "source",
      location: λ39fe0f97bd94 + "location",
      function: λ39fe0f97bd94 + "function",
      string: λ39fe0f97bd94 + "string",
      eval: λ39fe0f97bd94 + "eval",
      parent: λ39fe0f97bd94 + "parent",
      top: λ39fe0f97bd94 + "top"
    }, λ1f0d6ca48c5b.filterKeys = [ λ1fdc2c24e736, λ1f0d6ca48c5b.methods.setSource, λ1f0d6ca48c5b.methods.source, λ1f0d6ca48c5b.methods.location, λ1f0d6ca48c5b.methods.function, λ1f0d6ca48c5b.methods.string, λ1f0d6ca48c5b.methods.eval, λ1f0d6ca48c5b.methods.parent, λ1f0d6ca48c5b.methods.top, λ39fe0f97bd94 + "protocol", λ39fe0f97bd94 + "storageObj", λ39fe0f97bd94 + "url", λ39fe0f97bd94 + "modifiedStyle", λ39fe0f97bd94 + "config", λ39fe0f97bd94 + "dispatched", "StemConnect", "__uvHook" ], 
    λc615cb1279ad.on("wrap", (λ456a64b85487, λeb86ee1431a0) => {
      λc615cb1279ad.nativeMethods.defineProperty(λeb86ee1431a0, "name", λc615cb1279ad.nativeMethods.getOwnPropertyDescriptor(λ456a64b85487, "name")), 
      λc615cb1279ad.nativeMethods.defineProperty(λeb86ee1431a0, "length", λc615cb1279ad.nativeMethods.getOwnPropertyDescriptor(λ456a64b85487, "length")), 
      λc615cb1279ad.nativeMethods.defineProperty(λeb86ee1431a0, λ1f0d6ca48c5b.methods.string, {
        enumerable: !1,
        value: λc615cb1279ad.nativeMethods.fnToString.call(λ456a64b85487)
      }), λc615cb1279ad.nativeMethods.defineProperty(λeb86ee1431a0, λ1f0d6ca48c5b.methods.function, {
        enumerable: !1,
        value: λ456a64b85487
      });
    }), λc615cb1279ad.fetch.on("request", λ456a64b85487 => {
      λ456a64b85487.data.input = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.input);
    }), λc615cb1279ad.fetch.on("requestUrl", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.data.value);
    }), λc615cb1279ad.fetch.on("responseUrl", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.data.value);
    }), λc615cb1279ad.xhr.on("open", λ456a64b85487 => {
      λ456a64b85487.data.input = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.input);
    }), λc615cb1279ad.xhr.on("responseUrl", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.data.value);
    }), λc615cb1279ad.workers.on("worker", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.workers.on("addModule", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.workers.on("importScripts", λ456a64b85487 => {
      for (let λeb86ee1431a0 in λ456a64b85487.data.scripts) λ456a64b85487.data.scripts[λeb86ee1431a0] = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.scripts[λeb86ee1431a0]);
    }), λc615cb1279ad.workers.on("postMessage", λ456a64b85487 => {
      let λeb86ee1431a0 = λ456a64b85487.data.origin;
      λ456a64b85487.data.origin = "*", λ456a64b85487.data.message = {
        __data: λ456a64b85487.data.message,
        __origin: λ1f0d6ca48c5b.meta.url.origin,
        __to: λeb86ee1431a0
      };
    }), λc615cb1279ad.navigator.on("sendBeacon", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.document.on("getCookie", λ456a64b85487 => {
      λ456a64b85487.data.value = λf28903199195;
    }), λc615cb1279ad.document.on("setCookie", λ456a64b85487 => {
      λ1f0d6ca48c5b.cookie.db().then(λeb86ee1431a0 => {
        λ1f0d6ca48c5b.cookie.setCookies(λ456a64b85487.data.value, λeb86ee1431a0, λ1f0d6ca48c5b.meta), 
        λ1f0d6ca48c5b.cookie.getCookies(λeb86ee1431a0).then(λ456a64b85487 => {
          λf28903199195 = λ1f0d6ca48c5b.cookie.serialize(λ456a64b85487, λ1f0d6ca48c5b.meta, !0);
        });
      });
      let λeb86ee1431a0 = λ1f0d6ca48c5b.cookie.setCookie(λ456a64b85487.data.value)[0];
      λeb86ee1431a0.path || (λeb86ee1431a0.path = "/"), λeb86ee1431a0.domain || (λeb86ee1431a0.domain = λ1f0d6ca48c5b.meta.url.hostname), 
      λ1f0d6ca48c5b.cookie.validateCookie(λeb86ee1431a0, λ1f0d6ca48c5b.meta, !0) && (λf28903199195.length && (λf28903199195 += "; "), 
      λf28903199195 += `${λeb86ee1431a0.name}=${λeb86ee1431a0.value}`), λ456a64b85487.respondWith(λ456a64b85487.data.value);
    }), λc615cb1279ad.element.on("setInnerHTML", λ456a64b85487 => {
      switch (λ456a64b85487.that.tagName) {
       case "SCRIPT":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.js.rewrite(λ456a64b85487.data.value);
        break;

       case "STYLE":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value);
        break;

       default:
        λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.value);
      }
    }), λc615cb1279ad.element.on("getInnerHTML", λ456a64b85487 => {
      switch (λ456a64b85487.that.tagName) {
       case "SCRIPT":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.js.source(λ456a64b85487.data.value);
        break;

       case "STYLE":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceCSS(λ456a64b85487.data.value);
        break;

       default:
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceHtml(λ456a64b85487.data.value);
      }
    }), λc615cb1279ad.element.on("setOuterHTML", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.value, {
        document: λ456a64b85487.that.tagName === "HTML"
      });
    }), λc615cb1279ad.element.on("getOuterHTML", λ456a64b85487 => {
      switch (λ456a64b85487.that.tagName) {
       case "HEAD":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceHtml(λ456a64b85487.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceHtml(λ456a64b85487.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceHtml(λ456a64b85487.data.value, {
          document: λ456a64b85487.that.tagName === "HTML"
        });
        break;
      }
    }), λc615cb1279ad.document.on("write", λ456a64b85487 => {
      if (!λ456a64b85487.data.html.length) return !1;
      λ456a64b85487.data.html = [ λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.html.join("")) ];
    }), λc615cb1279ad.document.on("writeln", λ456a64b85487 => {
      if (!λ456a64b85487.data.html.length) return !1;
      λ456a64b85487.data.html = [ λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.html.join("")) ];
    }), λc615cb1279ad.element.on("insertAdjacentHTML", λ456a64b85487 => {
      λ456a64b85487.data.html = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.html);
    }), λc615cb1279ad.eventSource.on("construct", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.eventSource.on("url", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.idb.on("idbFactoryOpen", λ456a64b85487 => {
      λ456a64b85487.data.name !== "__op" && (λ456a64b85487.data.name = `${λ1f0d6ca48c5b.meta.url.origin}@${λ456a64b85487.data.name}`);
    }), λc615cb1279ad.idb.on("idbFactoryName", λ456a64b85487 => {
      λ456a64b85487.data.value = λ456a64b85487.data.value.slice(λ1f0d6ca48c5b.meta.url.origin.length + 1);
    }), λc615cb1279ad.history.on("replaceState", λ456a64b85487 => {
      λ456a64b85487.data.url && (λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url, "__uv" in λ456a64b85487.that ? λ456a64b85487.that.__uv.meta : λ1f0d6ca48c5b.meta));
    }), λc615cb1279ad.history.on("pushState", λ456a64b85487 => {
      λ456a64b85487.data.url && (λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url, "__uv" in λ456a64b85487.that ? λ456a64b85487.that.__uv.meta : λ1f0d6ca48c5b.meta));
    }), λc615cb1279ad.element.on("getAttribute", λ456a64b85487 => {
      λc615cb1279ad.element.hasAttribute.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name) && λ456a64b85487.respondWith(λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name));
    }), λc615cb1279ad.message.on("postMessage", λ456a64b85487 => {
      let λeb86ee1431a0 = λ456a64b85487.data.origin, λd7b426c6ab34 = λ1f0d6ca48c5b.call;
      λ456a64b85487.that && (λd7b426c6ab34 = λ456a64b85487.that.__uv$source.call), λ456a64b85487.data.origin = "*", 
      λ456a64b85487.data.message = {
        __data: λ456a64b85487.data.message,
        __origin: (λ456a64b85487.that || λ456a64b85487.target).__uv$source.location.origin,
        __to: λeb86ee1431a0
      }, (() => {
        let λeb86ee1431a0 = λ456a64b85487.data.transfer || [];
        try {
          const λd7b426c6ab34 = new Set(λeb86ee1431a0);
          const λ2971013169c2 = new Set;
          const a = λ456a64b85487 => {
            if (!λ456a64b85487 || typeof λ456a64b85487 != "object" || λ2971013169c2.has(λ456a64b85487)) return;
            λ2971013169c2.add(λ456a64b85487);
            let λeb86ee1431a0 = "";
            try {
              λeb86ee1431a0 = Object.prototype.toString.call(λ456a64b85487);
            } catch {}
            if (typeof MessagePort != "undefined" && λ456a64b85487 instanceof MessagePort || λeb86ee1431a0 === "[object MessagePort]") {
              λd7b426c6ab34.add(λ456a64b85487);
              return;
            }
            if (Array.isArray(λ456a64b85487)) {
              for (const λeb86ee1431a0 of λ456a64b85487) a(λeb86ee1431a0);
              return;
            }
            for (const λeb86ee1431a0 of Object.values(λ456a64b85487)) a(λeb86ee1431a0);
          };
          a(λ456a64b85487.data.message);
          λeb86ee1431a0 = [ ...λd7b426c6ab34 ];
        } catch {}
        return λ456a64b85487.respondWith(λ6c9e4ddb52d3 ? λd7b426c6ab34(λ456a64b85487.target, [ λ456a64b85487.data.message, λeb86ee1431a0 ], λ456a64b85487.that) : λd7b426c6ab34(λ456a64b85487.target, [ λ456a64b85487.data.message, λ456a64b85487.data.origin, λeb86ee1431a0 ], λ456a64b85487.that));
      })();
    }), λc615cb1279ad.message.on("data", λ456a64b85487 => {
      let {value: λeb86ee1431a0} = λ456a64b85487.data;
      typeof λeb86ee1431a0 == "object" && "__data" in λeb86ee1431a0 && "__origin" in λeb86ee1431a0 && λ456a64b85487.respondWith(λeb86ee1431a0.__data);
    }), λc615cb1279ad.message.on("origin", λ456a64b85487 => {
      let λeb86ee1431a0 = λc615cb1279ad.message.messageData.get.call(λ456a64b85487.that);
      typeof λeb86ee1431a0 == "object" && λeb86ee1431a0.__data && λeb86ee1431a0.__origin && λ456a64b85487.respondWith(λeb86ee1431a0.__origin);
    }), λc615cb1279ad.overrideDescriptor(λ5cc3d7478250, "origin", {
      get: () => λ1f0d6ca48c5b.location.origin
    }), λc615cb1279ad.node.on("baseURI", λ456a64b85487 => {
      λ456a64b85487.data.value.startsWith(λ5cc3d7478250.location.origin) && (λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.data.value));
    }), λc615cb1279ad.element.on("setAttribute", λ456a64b85487 => {
      if (λ456a64b85487.that instanceof λd97c5e328583 && λ456a64b85487.data.name === "src" && λ456a64b85487.data.value.startsWith("blob:")) {
        λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
        λ456a64b85487.data.value = λ1f0d6ca48c5b.blobUrls.get(λ456a64b85487.data.value);
        return;
      }
      λ1f0d6ca48c5b.attrs.isUrl(λ456a64b85487.data.name) && (λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.value)), 
      λ1f0d6ca48c5b.attrs.isStyle(λ456a64b85487.data.name) && (λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value, {
        context: "declarationList"
      })), λ1f0d6ca48c5b.attrs.isHtml(λ456a64b85487.data.name) && (λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.value, {
        ...λ1f0d6ca48c5b.meta,
        document: !0,
        injectHead: λ1f0d6ca48c5b.createHtmlInject(λ1f0d6ca48c5b.handlerScript, λ1f0d6ca48c5b.bundleScript, λ1f0d6ca48c5b.clientScript, λ1f0d6ca48c5b.configScript, λf28903199195, λ5cc3d7478250.location.href)
      })), λ1f0d6ca48c5b.attrs.isSrcset(λ456a64b85487.data.name) && (λ456a64b85487.target.call(λ456a64b85487.that, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.html.wrapSrcset(λ456a64b85487.data.value.toString())), 
      λ1f0d6ca48c5b.attrs.isForbidden(λ456a64b85487.data.name) && (λ456a64b85487.data.name = λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name);
    }), λc615cb1279ad.element.on("audio", λ456a64b85487 => {
      λ456a64b85487.data.url = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.url);
    }), λc615cb1279ad.element.hookProperty([ λ88065f299ea0, λ6d0706315327, λ0644160981b5, λ42d9f8676d7b ], "href", {
      get: (λ456a64b85487, λeb86ee1431a0) => λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.call(λeb86ee1431a0)),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-href", λd7b426c6ab34), 
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.rewriteUrl(λd7b426c6ab34));
      }
    }), λc615cb1279ad.element.hookProperty([ λef8de81a4508, λc224cdcb639d, λc07b1f4ad511, λd97c5e328583, λ3db72d300148, λd78fbd4751f6, λd5e90deb6cc6, λd50a68f2336a, λ87ec00a6b74a, λ71f3c9eb23fa ], "src", {
      get: (λ456a64b85487, λeb86ee1431a0) => λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.call(λeb86ee1431a0)),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        if (new String(λd7b426c6ab34).toString().trim().startsWith("blob:") && λeb86ee1431a0 instanceof λd97c5e328583) return λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-src", λd7b426c6ab34), 
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.blobUrls.get(λd7b426c6ab34) || λd7b426c6ab34);
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-src", λd7b426c6ab34), 
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.rewriteUrl(λd7b426c6ab34));
      }
    }), λc615cb1279ad.element.hookProperty([ λbf891bdff9fd ], "action", {
      get: (λ456a64b85487, λeb86ee1431a0) => λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.call(λeb86ee1431a0)),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-action", λd7b426c6ab34), 
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.rewriteUrl(λd7b426c6ab34));
      }
    }), λc615cb1279ad.element.hookProperty([ λ3db72d300148, λ71f3c9eb23fa ], "srcset", {
      get: (λ456a64b85487, λeb86ee1431a0) => λc615cb1279ad.element.getAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-srcset") || λ456a64b85487.call(λeb86ee1431a0),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-srcset", λd7b426c6ab34), 
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.html.wrapSrcset(λd7b426c6ab34.toString()));
      }
    }), λc615cb1279ad.element.hookProperty(λef8de81a4508, "integrity", {
      get: (λ456a64b85487, λeb86ee1431a0) => λc615cb1279ad.element.getAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-integrity"),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-integrity", λd7b426c6ab34);
      }
    }), λc615cb1279ad.element.hookProperty(λd50a68f2336a, "sandbox", {
      get: (λ456a64b85487, λeb86ee1431a0) => λc615cb1279ad.element.getAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-sandbox") || λ456a64b85487.call(λeb86ee1431a0),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λc615cb1279ad.element.setAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-sandbox", λd7b426c6ab34);
      }
    });
    let λ833cf174dcfa = λd50a68f2336a && Object.getOwnPropertyDescriptor(λd50a68f2336a.prototype, "contentWindow").get;
    function U(λ456a64b85487) {
      let λeb86ee1431a0 = λ833cf174dcfa.call(λ456a64b85487);
      if (!λeb86ee1431a0.__uv) try {
        p(λeb86ee1431a0);
      } catch (λ456a64b85487) {
        console.error("catastrophic failure"), console.error(λ456a64b85487);
      }
    }
    if (λc615cb1279ad.element.hookProperty(λd50a68f2336a, "contentWindow", {
      get: (λ456a64b85487, λeb86ee1431a0) => (U(λeb86ee1431a0), λ456a64b85487.call(λeb86ee1431a0))
    }), λc615cb1279ad.element.hookProperty(λd50a68f2336a, "contentDocument", {
      get: (λ456a64b85487, λeb86ee1431a0) => (U(λeb86ee1431a0), λ456a64b85487.call(λeb86ee1431a0))
    }), λc615cb1279ad.element.hookProperty(λd50a68f2336a, "srcdoc", {
      get: (λ456a64b85487, λeb86ee1431a0) => λc615cb1279ad.element.getAttribute.call(λeb86ee1431a0, λ1f0d6ca48c5b.attributePrefix + "-attr-srcdoc") || λ456a64b85487.call(λeb86ee1431a0),
      set: (λ456a64b85487, λeb86ee1431a0, [λd7b426c6ab34]) => {
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.rewriteHtml(λd7b426c6ab34, {
          document: !0,
          injectHead: λ1f0d6ca48c5b.createHtmlInject(λ1f0d6ca48c5b.handlerScript, λ1f0d6ca48c5b.bundleScript, λ1f0d6ca48c5b.clientScript, λ1f0d6ca48c5b.configScript, λf28903199195, λ5cc3d7478250.location.href)
        }));
      }
    }), λc615cb1279ad.node.on("getTextContent", λ456a64b85487 => {
      switch (λ456a64b85487.that.tagName) {
       case "SCRIPT":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.js.source(λ456a64b85487.data.value);
        break;

       case "STYLE":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceCSS(λ456a64b85487.data.value);
        break;

       default:
      }
    }), λc615cb1279ad.node.on("setTextContent", λ456a64b85487 => {
      switch (λ456a64b85487.that.tagName) {
       case "SCRIPT":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.js.rewrite(λ456a64b85487.data.value);
        break;

       case "STYLE":
        λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λ5cc3d7478250.navigator && delete λ5cc3d7478250.Navigator.prototype.serviceWorker, 
    λc615cb1279ad.document.on("getDomain", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.domain;
    }), λc615cb1279ad.document.on("setDomain", λ456a64b85487 => {
      if (!λ456a64b85487.data.value.toString().endsWith(λ1f0d6ca48c5b.meta.url.hostname.split(".").slice(-2).join("."))) return λ456a64b85487.respondWith("");
      λ456a64b85487.respondWith(λ1f0d6ca48c5b.domain = λ456a64b85487.data.value);
    }), λc615cb1279ad.document.on("url", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.location.href;
    }), λc615cb1279ad.document.on("documentURI", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.location.href;
    }), λc615cb1279ad.document.on("referrer", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.referrer || λ1f0d6ca48c5b.sourceUrl(λ456a64b85487.data.value);
    }), λc615cb1279ad.document.on("parseFromString", λ456a64b85487 => {
      if (λ456a64b85487.data.type !== "text/html") return !1;
      λ456a64b85487.data.string = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.string, {
        ...λ1f0d6ca48c5b.meta,
        document: !0
      });
    }), λc615cb1279ad.attribute.on("getValue", λ456a64b85487 => {
      λc615cb1279ad.element.hasAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name) && (λ456a64b85487.data.value = λc615cb1279ad.element.getAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name));
    }), λc615cb1279ad.attribute.on("setValue", λ456a64b85487 => {
      λ1f0d6ca48c5b.attrs.isUrl(λ456a64b85487.data.name) && (λc615cb1279ad.element.setAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteUrl(λ456a64b85487.data.value)), 
      λ1f0d6ca48c5b.attrs.isStyle(λ456a64b85487.data.name) && (λc615cb1279ad.element.setAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value, {
        context: "declarationList"
      })), λ1f0d6ca48c5b.attrs.isHtml(λ456a64b85487.data.name) && (λc615cb1279ad.element.setAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteHtml(λ456a64b85487.data.value, {
        ...λ1f0d6ca48c5b.meta,
        document: !0,
        injectHead: λ1f0d6ca48c5b.createHtmlInject(λ1f0d6ca48c5b.handlerScript, λ1f0d6ca48c5b.bundleScript, λ1f0d6ca48c5b.clientScript, λ1f0d6ca48c5b.configScript, λf28903199195, λ5cc3d7478250.location.href)
      })), λ1f0d6ca48c5b.attrs.isSrcset(λ456a64b85487.data.name) && (λc615cb1279ad.element.setAttribute.call(λ456a64b85487.that.ownerElement, λ1f0d6ca48c5b.attributePrefix + "-attr-" + λ456a64b85487.data.name, λ456a64b85487.data.value), 
      λ456a64b85487.data.value = λ1f0d6ca48c5b.html.wrapSrcset(λ456a64b85487.data.value.toString()));
    }), λc615cb1279ad.url.on("createObjectURL", λ456a64b85487 => {
      let λeb86ee1431a0 = λ456a64b85487.target.call(λ456a64b85487.that, λ456a64b85487.data.object);
      if (λeb86ee1431a0.startsWith("blob:" + location.origin)) {
        let λd7b426c6ab34 = "blob:" + (λ1f0d6ca48c5b.meta.url.href !== "about:blank" ? λ1f0d6ca48c5b.meta.url.origin : λ5cc3d7478250.parent.__uv.meta.url.origin) + λeb86ee1431a0.slice(5 + location.origin.length);
        λ1f0d6ca48c5b.blobUrls.set(λd7b426c6ab34, λeb86ee1431a0), λ456a64b85487.respondWith(λd7b426c6ab34);
      } else λ456a64b85487.respondWith(λeb86ee1431a0);
    }), λc615cb1279ad.url.on("revokeObjectURL", λ456a64b85487 => {
      if (λ1f0d6ca48c5b.blobUrls.has(λ456a64b85487.data.url)) {
        let λeb86ee1431a0 = λ456a64b85487.data.url;
        λ456a64b85487.data.url = λ1f0d6ca48c5b.blobUrls.get(λ456a64b85487.data.url), λ1f0d6ca48c5b.blobUrls.delete(λeb86ee1431a0);
      }
    }), λc615cb1279ad.storage.on("get", λ456a64b85487 => {
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("set", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && (λ456a64b85487.that.__uv$storageObj[λ456a64b85487.data.name] = λ456a64b85487.data.value), 
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("delete", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && delete λ456a64b85487.that.__uv$storageObj[λ456a64b85487.data.name], 
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("getItem", λ456a64b85487 => {
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("setItem", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && (λ456a64b85487.that.__uv$storageObj[λ456a64b85487.data.name] = λ456a64b85487.data.value), 
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("removeItem", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && delete λ456a64b85487.that.__uv$storageObj[λ456a64b85487.data.name], 
      λ456a64b85487.data.name = λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λ456a64b85487.data.name;
    }), λc615cb1279ad.storage.on("clear", λ456a64b85487 => {
      if (λ456a64b85487.that.__uv$storageObj) for (let λeb86ee1431a0 of λc615cb1279ad.nativeMethods.keys.call(null, λ456a64b85487.that.__uv$storageObj)) delete λ456a64b85487.that.__uv$storageObj[λeb86ee1431a0], 
      λc615cb1279ad.storage.removeItem.call(λ456a64b85487.that, λ39fe0f97bd94 + λ1f0d6ca48c5b.meta.url.origin + "@" + λeb86ee1431a0), 
      λ456a64b85487.respondWith();
    }), λc615cb1279ad.storage.on("length", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && λ456a64b85487.respondWith(λc615cb1279ad.nativeMethods.keys.call(null, λ456a64b85487.that.__uv$storageObj).length);
    }), λc615cb1279ad.storage.on("key", λ456a64b85487 => {
      λ456a64b85487.that.__uv$storageObj && λ456a64b85487.respondWith(λc615cb1279ad.nativeMethods.keys.call(null, λ456a64b85487.that.__uv$storageObj)[λ456a64b85487.data.index] || null);
    }), λc615cb1279ad.function.on("function", λ456a64b85487 => {
      λ456a64b85487.data.script = λ1f0d6ca48c5b.rewriteJS(λ456a64b85487.data.script);
    }), λc615cb1279ad.function.on("toString", λ456a64b85487 => {
      λ1f0d6ca48c5b.methods.string in λ456a64b85487.that && λ456a64b85487.respondWith(λ456a64b85487.that[λ1f0d6ca48c5b.methods.string]);
    }), λc615cb1279ad.object.on("getOwnPropertyNames", λ456a64b85487 => {
      λ456a64b85487.data.names = λ456a64b85487.data.names.filter(λ456a64b85487 => !λ1f0d6ca48c5b.filterKeys.includes(λ456a64b85487));
    }), λc615cb1279ad.object.on("getOwnPropertyDescriptors", λ456a64b85487 => {
      for (let λeb86ee1431a0 of λ1f0d6ca48c5b.filterKeys) delete λ456a64b85487.data.descriptors[λeb86ee1431a0];
    }), λc615cb1279ad.style.on("setProperty", λ456a64b85487 => {
      λc615cb1279ad.style.dashedUrlProps.includes(λ456a64b85487.data.property) && (λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value, {
        context: "value",
        ...λ1f0d6ca48c5b.meta
      }));
    }), λc615cb1279ad.style.on("getPropertyValue", λ456a64b85487 => {
      λc615cb1279ad.style.dashedUrlProps.includes(λ456a64b85487.data.property) && λ456a64b85487.respondWith(λ1f0d6ca48c5b.sourceCSS(λ456a64b85487.target.call(λ456a64b85487.that, λ456a64b85487.data.property), {
        context: "value",
        ...λ1f0d6ca48c5b.meta
      }));
    }), "CSS2Properties" in λ5cc3d7478250) for (let λ456a64b85487 of λc615cb1279ad.style.urlProps) λc615cb1279ad.overrideDescriptor(λ5cc3d7478250.CSS2Properties.prototype, λ456a64b85487, {
      get: (λ456a64b85487, λeb86ee1431a0) => λ1f0d6ca48c5b.sourceCSS(λ456a64b85487.call(λeb86ee1431a0), {
        context: "value",
        ...λ1f0d6ca48c5b.meta
      }),
      set: (λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34) => {
        λ456a64b85487.call(λeb86ee1431a0, λ1f0d6ca48c5b.rewriteCSS(λd7b426c6ab34, {
          context: "value",
          ...λ1f0d6ca48c5b.meta
        }));
      }
    }); else "HTMLElement" in λ5cc3d7478250 && λc615cb1279ad.overrideDescriptor(λ5cc3d7478250.HTMLElement.prototype, "style", {
      get: (λ456a64b85487, λeb86ee1431a0) => {
        let λd7b426c6ab34 = λ456a64b85487.call(λeb86ee1431a0);
        if (!λd7b426c6ab34[λ39fe0f97bd94 + "modifiedStyle"]) for (let λ456a64b85487 of λc615cb1279ad.style.urlProps) λc615cb1279ad.nativeMethods.defineProperty(λd7b426c6ab34, λ456a64b85487, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λeb86ee1431a0 = λc615cb1279ad.style.getPropertyValue.call(this, λ456a64b85487) || "";
            return λ1f0d6ca48c5b.sourceCSS(λeb86ee1431a0, {
              context: "value",
              ...λ1f0d6ca48c5b.meta
            });
          },
          set(λeb86ee1431a0) {
            λc615cb1279ad.style.setProperty.call(this, λc615cb1279ad.style.propToDashed[λ456a64b85487] || λ456a64b85487, λ1f0d6ca48c5b.rewriteCSS(λeb86ee1431a0, {
              context: "value",
              ...λ1f0d6ca48c5b.meta
            }));
          }
        }), λc615cb1279ad.nativeMethods.defineProperty(λd7b426c6ab34, λ39fe0f97bd94 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λd7b426c6ab34;
      }
    });
    λc615cb1279ad.style.on("setCssText", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.rewriteCSS(λ456a64b85487.data.value, {
        context: "declarationList",
        ...λ1f0d6ca48c5b.meta
      });
    }), λc615cb1279ad.style.on("getCssText", λ456a64b85487 => {
      λ456a64b85487.data.value = λ1f0d6ca48c5b.sourceCSS(λ456a64b85487.data.value, {
        context: "declarationList",
        ...λ1f0d6ca48c5b.meta
      });
    }), λ1f0d6ca48c5b.addEventListener.call(λ5cc3d7478250, "hashchange", λ456a64b85487 => {
      if (λ456a64b85487.__uv$dispatched) return !1;
      λ456a64b85487.stopImmediatePropagation();
      let λeb86ee1431a0 = λ5cc3d7478250.location.hash;
      λc615cb1279ad.history.replaceState.call(λ5cc3d7478250.history, "", "", λ456a64b85487.oldURL), 
      λ1f0d6ca48c5b.location.hash = λeb86ee1431a0;
    }), λc615cb1279ad.location.on("hashchange", (λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34) => {
      if (λd7b426c6ab34.HashChangeEvent && λc615cb1279ad.history.replaceState) {
        λc615cb1279ad.history.replaceState.call(λ5cc3d7478250.history, "", "", λ1f0d6ca48c5b.rewriteUrl(λeb86ee1431a0));
        let λ2971013169c2 = new λd7b426c6ab34.HashChangeEvent("hashchange", {
          newURL: λeb86ee1431a0,
          oldURL: λ456a64b85487
        });
        λc615cb1279ad.nativeMethods.defineProperty(λ2971013169c2, λ39fe0f97bd94 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ1f0d6ca48c5b.dispatchEvent.call(λ5cc3d7478250, λ2971013169c2);
      }
    }), λc615cb1279ad.fetch.overrideRequest(), λc615cb1279ad.fetch.overrideUrl(), λc615cb1279ad.xhr.overrideOpen(), 
    λc615cb1279ad.xhr.overrideResponseUrl(), λc615cb1279ad.element.overrideHtml(), λc615cb1279ad.element.overrideAttribute(), 
    λc615cb1279ad.element.overrideInsertAdjacentHTML(), λc615cb1279ad.element.overrideAudio(), 
    λc615cb1279ad.node.overrideBaseURI(), λc615cb1279ad.node.overrideTextContent(), 
    λc615cb1279ad.attribute.overrideNameValue(), λc615cb1279ad.document.overrideDomain(), 
    λc615cb1279ad.document.overrideURL(), λc615cb1279ad.document.overrideDocumentURI(), 
    λc615cb1279ad.document.overrideWrite(), λc615cb1279ad.document.overrideReferrer(), 
    λc615cb1279ad.document.overrideParseFromString(), λc615cb1279ad.storage.overrideMethods(), 
    λc615cb1279ad.storage.overrideLength(), λc615cb1279ad.object.overrideGetPropertyNames(), 
    λc615cb1279ad.object.overrideGetOwnPropertyDescriptors(), λc615cb1279ad.idb.overrideName(), 
    λc615cb1279ad.idb.overrideOpen(), λc615cb1279ad.history.overridePushState(), λc615cb1279ad.history.overrideReplaceState(), 
    λc615cb1279ad.eventSource.overrideConstruct(), λc615cb1279ad.eventSource.overrideUrl(), 
    λc615cb1279ad.websocket.overrideWebSocket(λ815637135cff), λc615cb1279ad.url.overrideObjectURL(), 
    λc615cb1279ad.document.overrideCookie(), λc615cb1279ad.message.overridePostMessage(), 
    λc615cb1279ad.message.overrideMessageOrigin(), λc615cb1279ad.message.overrideMessageData(), 
    λc615cb1279ad.workers.overrideWorker(), λc615cb1279ad.workers.overrideAddModule(), 
    λc615cb1279ad.workers.overrideImportScripts(), λc615cb1279ad.workers.overridePostMessage(), 
    λc615cb1279ad.style.overrideSetGetProperty(), λc615cb1279ad.style.overrideCssText(), 
    λc615cb1279ad.navigator.overrideSendBeacon(), λc615cb1279ad.function.overrideFunction(), 
    λc615cb1279ad.function.overrideToString(), λc615cb1279ad.location.overrideWorkerLocation(λ456a64b85487 => new URL(λ1f0d6ca48c5b.sourceUrl(λ456a64b85487))), 
    λc615cb1279ad.overrideDescriptor(λ5cc3d7478250, "localStorage", {
      get: (λ456a64b85487, λeb86ee1431a0) => (λeb86ee1431a0 || λ5cc3d7478250).__uv.lsWrap
    }), λc615cb1279ad.overrideDescriptor(λ5cc3d7478250, "sessionStorage", {
      get: (λ456a64b85487, λeb86ee1431a0) => (λeb86ee1431a0 || λ5cc3d7478250).__uv.ssWrap
    }), λc615cb1279ad.override(λ5cc3d7478250, "open", (λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34) => {
      if (!λd7b426c6ab34.length) return λ456a64b85487.apply(λeb86ee1431a0, λd7b426c6ab34);
      let [λ2971013169c2] = λd7b426c6ab34;
      return λ2971013169c2 = λ1f0d6ca48c5b.rewriteUrl(λ2971013169c2), λ456a64b85487.call(λeb86ee1431a0, λ2971013169c2);
    }), λ1f0d6ca48c5b.$wrap = function(λ456a64b85487) {
      return λ456a64b85487 === "location" ? λ1f0d6ca48c5b.methods.location : λ456a64b85487 === "eval" ? λ1f0d6ca48c5b.methods.eval : λ456a64b85487;
    }, λ1f0d6ca48c5b.$get = function(λ456a64b85487) {
      return λ456a64b85487 === λ5cc3d7478250.location ? λ1f0d6ca48c5b.location : λ456a64b85487 === λ5cc3d7478250.eval ? λ1f0d6ca48c5b.eval : λ456a64b85487 === λ5cc3d7478250.parent ? λ5cc3d7478250.__uv$parent : λ456a64b85487 === λ5cc3d7478250.top ? λ5cc3d7478250.__uv$top : λ456a64b85487;
    }, λ1f0d6ca48c5b.eval = λc615cb1279ad.wrap(λ5cc3d7478250, "eval", (λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34) => {
      if (!λd7b426c6ab34.length || typeof λd7b426c6ab34[0] != "string") return λ456a64b85487.apply(λeb86ee1431a0, λd7b426c6ab34);
      let [λ2971013169c2] = λd7b426c6ab34;
      return λ2971013169c2 = λ1f0d6ca48c5b.rewriteJS(λ2971013169c2), λ456a64b85487.call(λeb86ee1431a0, λ2971013169c2);
    }), λ1f0d6ca48c5b.call = function(λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34) {
      return λd7b426c6ab34 ? λ456a64b85487.apply(λd7b426c6ab34, λeb86ee1431a0) : λ456a64b85487(...λeb86ee1431a0);
    }, λ1f0d6ca48c5b.call$ = function(λ456a64b85487, λeb86ee1431a0, λd7b426c6ab34 = []) {
      return λ456a64b85487[λeb86ee1431a0].apply(λ456a64b85487, λd7b426c6ab34);
    }, λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1fdc2c24e736, {
      get: () => λ1f0d6ca48c5b,
      enumerable: !1
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.setSource, {
      value: function(λ456a64b85487) {
        return λc615cb1279ad.nativeMethods.isExtensible(this) ? (λc615cb1279ad.nativeMethods.defineProperty(this, λ1f0d6ca48c5b.methods.source, {
          value: λ456a64b85487,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.source, {
      value: λ1f0d6ca48c5b,
      writable: !0,
      enumerable: !1
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.location, {
      configurable: !0,
      get() {
        return this === λ5cc3d7478250.document || this === λ5cc3d7478250 ? λ1f0d6ca48c5b.location : this.location;
      },
      set(λ456a64b85487) {
        this === λ5cc3d7478250.document || this === λ5cc3d7478250 ? λ1f0d6ca48c5b.location.href = λ456a64b85487 : this.location = λ456a64b85487;
      }
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.parent, {
      configurable: !0,
      get() {
        let λ456a64b85487 = this.parent;
        if (this === λ5cc3d7478250) try {
          return "__uv" in λ456a64b85487 ? λ456a64b85487 : this;
        } catch {
          return this;
        }
        return λ456a64b85487;
      },
      set(λ456a64b85487) {
        this.parent = λ456a64b85487;
      }
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.top, {
      configurable: !0,
      get() {
        let λ456a64b85487 = this.top;
        if (this === λ5cc3d7478250) {
          if (λ456a64b85487 === this.parent) return this[λ1f0d6ca48c5b.methods.parent];
          try {
            if ("__uv" in λ456a64b85487) return λ456a64b85487;
            {
              let λeb86ee1431a0 = this;
              for (;λeb86ee1431a0.parent !== λ456a64b85487; ) λeb86ee1431a0 = λeb86ee1431a0.parent;
              return "__uv" in λeb86ee1431a0 ? λeb86ee1431a0 : this;
            }
          } catch {
            return this;
          }
        }
        return λ456a64b85487;
      },
      set(λ456a64b85487) {
        this.top = λ456a64b85487;
      }
    }), λc615cb1279ad.nativeMethods.defineProperty(λ5cc3d7478250.Object.prototype, λ1f0d6ca48c5b.methods.eval, {
      configurable: !0,
      get() {
        return this === λ5cc3d7478250 ? λ1f0d6ca48c5b.eval : this.eval;
      },
      set(λ456a64b85487) {
        this.eval = λ456a64b85487;
      }
    });
  }
})();
