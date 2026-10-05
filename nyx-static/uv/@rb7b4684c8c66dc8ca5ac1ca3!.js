"use strict";

(() => {
  var λa320b5170fe0 = self.StemConnect, λee551f890e74 = self.UVClient, λd3ff95d399a3 = self.__uv$config, λcfd066badb9d = self.__uv$cookies;
  if (typeof λcfd066badb9d != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λ5f397fe09096) {
    if ("__uv" in λ5f397fe09096 && λ5f397fe09096.__uv instanceof λa320b5170fe0) return !1;
    λ5f397fe09096.document && λ5f397fe09096.window && λ5f397fe09096.document.querySelectorAll("script[__uv-script]").forEach(λa320b5170fe0 => λa320b5170fe0.remove());
    let λ5b8947bef5fb = !λ5f397fe09096.window, λ0720aaa14dcf = "__uv", λe0f7cb83c336 = "__uv$", λd08ee7e4b9a6 = new λa320b5170fe0(λd3ff95d399a3), λc5af571e7f7e;
    λ5b8947bef5fb ? λc5af571e7f7e = new λa320b5170fe0.BareClient(new Promise(λa320b5170fe0 => {
      addEventListener("message", ({data: λee551f890e74}) => {
        typeof λee551f890e74 == "object" && "__uv$type" in λee551f890e74 && λee551f890e74.__uv$type === "baremuxinit" && λa320b5170fe0(λee551f890e74.port);
      });
    })) : λc5af571e7f7e = new λa320b5170fe0.BareClient;
    let λdd649e2c2b03 = new λee551f890e74(λ5f397fe09096, λc5af571e7f7e, λ5b8947bef5fb), {HTMLMediaElement: λb6e49796c337, HTMLScriptElement: λe69a9d89b42c, HTMLAudioElement: λ2c08b6fa7d43, HTMLVideoElement: λf8eac9ded246, HTMLInputElement: λ047df10cea63, HTMLEmbedElement: λc8862ffd784b, HTMLTrackElement: λ8ecd67d00961, HTMLAnchorElement: λf45b00674ca4, HTMLIFrameElement: λ00170aaa798d, HTMLAreaElement: λ380288389181, HTMLLinkElement: λe631001477b5, HTMLBaseElement: λ60b606260dca, HTMLFormElement: λ63456be9b11a, HTMLImageElement: λa515902415d1, HTMLSourceElement: λca970297abb8} = λ5f397fe09096;
    λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096, "__uv", {
      value: λd08ee7e4b9a6,
      enumerable: !1
    }), λd08ee7e4b9a6.meta.origin = location.origin, λd08ee7e4b9a6.location = λdd649e2c2b03.location.emulate(λa320b5170fe0 => λa320b5170fe0 === "about:srcdoc" ? new URL(λa320b5170fe0) : (λa320b5170fe0.startsWith("blob:") && (λa320b5170fe0 = λa320b5170fe0.slice(5)), 
    new URL(λd08ee7e4b9a6.sourceUrl(λa320b5170fe0))), λa320b5170fe0 => λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0));
    let λb27228e5d0e4 = λcfd066badb9d;
    if (λd08ee7e4b9a6.meta.url = λd08ee7e4b9a6.location, λd08ee7e4b9a6.domain = λd08ee7e4b9a6.meta.url.host, 
    λd08ee7e4b9a6.blobUrls = new λ5f397fe09096.Map, λd08ee7e4b9a6.referrer = "", λd08ee7e4b9a6.cookies = [], 
    λd08ee7e4b9a6.localStorageObj = {}, λd08ee7e4b9a6.sessionStorageObj = {}, λd08ee7e4b9a6.location.href === "about:srcdoc" && (λd08ee7e4b9a6.meta = λ5f397fe09096.parent.__uv.meta), 
    λ5f397fe09096.EventTarget && (λd08ee7e4b9a6.addEventListener = λ5f397fe09096.EventTarget.prototype.addEventListener, 
    λd08ee7e4b9a6.removeListener = λ5f397fe09096.EventTarget.prototype.removeListener, 
    λd08ee7e4b9a6.dispatchEvent = λ5f397fe09096.EventTarget.prototype.dispatchEvent), 
    λdd649e2c2b03.nativeMethods.defineProperty(λdd649e2c2b03.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λdd649e2c2b03.storage.sessionStorage) return λd08ee7e4b9a6.sessionStorageObj;
        if (this === λdd649e2c2b03.storage.localStorage) return λd08ee7e4b9a6.localStorageObj;
      },
      enumerable: !1
    }), λ5f397fe09096.localStorage) {
      for (let λa320b5170fe0 in λ5f397fe09096.localStorage) λa320b5170fe0.startsWith(λe0f7cb83c336 + λd08ee7e4b9a6.location.origin + "@") && (λd08ee7e4b9a6.localStorageObj[λa320b5170fe0.slice((λe0f7cb83c336 + λd08ee7e4b9a6.location.origin + "@").length)] = λ5f397fe09096.localStorage.getItem(λa320b5170fe0));
      λd08ee7e4b9a6.lsWrap = λdd649e2c2b03.storage.emulate(λdd649e2c2b03.storage.localStorage, λd08ee7e4b9a6.localStorageObj);
    }
    if (λ5f397fe09096.sessionStorage) {
      for (let λa320b5170fe0 in λ5f397fe09096.sessionStorage) λa320b5170fe0.startsWith(λe0f7cb83c336 + λd08ee7e4b9a6.location.origin + "@") && (λd08ee7e4b9a6.sessionStorageObj[λa320b5170fe0.slice((λe0f7cb83c336 + λd08ee7e4b9a6.location.origin + "@").length)] = λ5f397fe09096.sessionStorage.getItem(λa320b5170fe0));
      λd08ee7e4b9a6.ssWrap = λdd649e2c2b03.storage.emulate(λdd649e2c2b03.storage.sessionStorage, λd08ee7e4b9a6.sessionStorageObj);
    }
    let λ64401295ccb9 = λ5f397fe09096.document ? λdd649e2c2b03.node.baseURI.get.call(λ5f397fe09096.document) : λ5f397fe09096.location.href, λdbf7b0fe8676 = λd08ee7e4b9a6.sourceUrl(λ64401295ccb9);
    λdd649e2c2b03.nativeMethods.defineProperty(λd08ee7e4b9a6.meta, "base", {
      get() {
        return λ5f397fe09096.document ? (λdd649e2c2b03.node.baseURI.get.call(λ5f397fe09096.document) !== λ64401295ccb9 && (λ64401295ccb9 = λdd649e2c2b03.node.baseURI.get.call(λ5f397fe09096.document), 
        λdbf7b0fe8676 = λd08ee7e4b9a6.sourceUrl(λ64401295ccb9)), λdbf7b0fe8676) : λd08ee7e4b9a6.meta.url.href;
      }
    }), λd08ee7e4b9a6.methods = {
      setSource: λe0f7cb83c336 + "setSource",
      source: λe0f7cb83c336 + "source",
      location: λe0f7cb83c336 + "location",
      function: λe0f7cb83c336 + "function",
      string: λe0f7cb83c336 + "string",
      eval: λe0f7cb83c336 + "eval",
      parent: λe0f7cb83c336 + "parent",
      top: λe0f7cb83c336 + "top"
    }, λd08ee7e4b9a6.filterKeys = [ λ0720aaa14dcf, λd08ee7e4b9a6.methods.setSource, λd08ee7e4b9a6.methods.source, λd08ee7e4b9a6.methods.location, λd08ee7e4b9a6.methods.function, λd08ee7e4b9a6.methods.string, λd08ee7e4b9a6.methods.eval, λd08ee7e4b9a6.methods.parent, λd08ee7e4b9a6.methods.top, λe0f7cb83c336 + "protocol", λe0f7cb83c336 + "storageObj", λe0f7cb83c336 + "url", λe0f7cb83c336 + "modifiedStyle", λe0f7cb83c336 + "config", λe0f7cb83c336 + "dispatched", "StemConnect", "__uvHook" ], 
    λdd649e2c2b03.on("wrap", (λa320b5170fe0, λee551f890e74) => {
      λdd649e2c2b03.nativeMethods.defineProperty(λee551f890e74, "name", λdd649e2c2b03.nativeMethods.getOwnPropertyDescriptor(λa320b5170fe0, "name")), 
      λdd649e2c2b03.nativeMethods.defineProperty(λee551f890e74, "length", λdd649e2c2b03.nativeMethods.getOwnPropertyDescriptor(λa320b5170fe0, "length")), 
      λdd649e2c2b03.nativeMethods.defineProperty(λee551f890e74, λd08ee7e4b9a6.methods.string, {
        enumerable: !1,
        value: λdd649e2c2b03.nativeMethods.fnToString.call(λa320b5170fe0)
      }), λdd649e2c2b03.nativeMethods.defineProperty(λee551f890e74, λd08ee7e4b9a6.methods.function, {
        enumerable: !1,
        value: λa320b5170fe0
      });
    }), λdd649e2c2b03.fetch.on("request", λa320b5170fe0 => {
      λa320b5170fe0.data.input = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.input);
    }), λdd649e2c2b03.fetch.on("requestUrl", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.data.value);
    }), λdd649e2c2b03.fetch.on("responseUrl", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.data.value);
    }), λdd649e2c2b03.xhr.on("open", λa320b5170fe0 => {
      λa320b5170fe0.data.input = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.input);
    }), λdd649e2c2b03.xhr.on("responseUrl", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.data.value);
    }), λdd649e2c2b03.workers.on("worker", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.workers.on("addModule", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.workers.on("importScripts", λa320b5170fe0 => {
      for (let λee551f890e74 in λa320b5170fe0.data.scripts) λa320b5170fe0.data.scripts[λee551f890e74] = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.scripts[λee551f890e74]);
    }), λdd649e2c2b03.workers.on("postMessage", λa320b5170fe0 => {
      let λee551f890e74 = λa320b5170fe0.data.origin;
      λa320b5170fe0.data.origin = "*", λa320b5170fe0.data.message = {
        __data: λa320b5170fe0.data.message,
        __origin: λd08ee7e4b9a6.meta.url.origin,
        __to: λee551f890e74
      };
    }), λdd649e2c2b03.navigator.on("sendBeacon", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.document.on("getCookie", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λb27228e5d0e4;
    }), λdd649e2c2b03.document.on("setCookie", λa320b5170fe0 => {
      λd08ee7e4b9a6.cookie.db().then(λee551f890e74 => {
        λd08ee7e4b9a6.cookie.setCookies(λa320b5170fe0.data.value, λee551f890e74, λd08ee7e4b9a6.meta), 
        λd08ee7e4b9a6.cookie.getCookies(λee551f890e74).then(λa320b5170fe0 => {
          λb27228e5d0e4 = λd08ee7e4b9a6.cookie.serialize(λa320b5170fe0, λd08ee7e4b9a6.meta, !0);
        });
      });
      let λee551f890e74 = λd08ee7e4b9a6.cookie.setCookie(λa320b5170fe0.data.value)[0];
      λee551f890e74.path || (λee551f890e74.path = "/"), λee551f890e74.domain || (λee551f890e74.domain = λd08ee7e4b9a6.meta.url.hostname), 
      λd08ee7e4b9a6.cookie.validateCookie(λee551f890e74, λd08ee7e4b9a6.meta, !0) && (λb27228e5d0e4.length && (λb27228e5d0e4 += "; "), 
      λb27228e5d0e4 += `${λee551f890e74.name}=${λee551f890e74.value}`), λa320b5170fe0.respondWith(λa320b5170fe0.data.value);
    }), λdd649e2c2b03.element.on("setInnerHTML", λa320b5170fe0 => {
      switch (λa320b5170fe0.that.tagName) {
       case "SCRIPT":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.js.rewrite(λa320b5170fe0.data.value);
        break;

       case "STYLE":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value);
        break;

       default:
        λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.value);
      }
    }), λdd649e2c2b03.element.on("getInnerHTML", λa320b5170fe0 => {
      switch (λa320b5170fe0.that.tagName) {
       case "SCRIPT":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.js.source(λa320b5170fe0.data.value);
        break;

       case "STYLE":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceCSS(λa320b5170fe0.data.value);
        break;

       default:
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceHtml(λa320b5170fe0.data.value);
      }
    }), λdd649e2c2b03.element.on("setOuterHTML", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.value, {
        document: λa320b5170fe0.that.tagName === "HTML"
      });
    }), λdd649e2c2b03.element.on("getOuterHTML", λa320b5170fe0 => {
      switch (λa320b5170fe0.that.tagName) {
       case "HEAD":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceHtml(λa320b5170fe0.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceHtml(λa320b5170fe0.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceHtml(λa320b5170fe0.data.value, {
          document: λa320b5170fe0.that.tagName === "HTML"
        });
        break;
      }
    }), λdd649e2c2b03.document.on("write", λa320b5170fe0 => {
      if (!λa320b5170fe0.data.html.length) return !1;
      λa320b5170fe0.data.html = [ λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.html.join("")) ];
    }), λdd649e2c2b03.document.on("writeln", λa320b5170fe0 => {
      if (!λa320b5170fe0.data.html.length) return !1;
      λa320b5170fe0.data.html = [ λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.html.join("")) ];
    }), λdd649e2c2b03.element.on("insertAdjacentHTML", λa320b5170fe0 => {
      λa320b5170fe0.data.html = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.html);
    }), λdd649e2c2b03.eventSource.on("construct", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.eventSource.on("url", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.idb.on("idbFactoryOpen", λa320b5170fe0 => {
      λa320b5170fe0.data.name !== "__op" && (λa320b5170fe0.data.name = `${λd08ee7e4b9a6.meta.url.origin}@${λa320b5170fe0.data.name}`);
    }), λdd649e2c2b03.idb.on("idbFactoryName", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λa320b5170fe0.data.value.slice(λd08ee7e4b9a6.meta.url.origin.length + 1);
    }), λdd649e2c2b03.history.on("replaceState", λa320b5170fe0 => {
      λa320b5170fe0.data.url && (λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url, "__uv" in λa320b5170fe0.that ? λa320b5170fe0.that.__uv.meta : λd08ee7e4b9a6.meta));
    }), λdd649e2c2b03.history.on("pushState", λa320b5170fe0 => {
      λa320b5170fe0.data.url && (λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url, "__uv" in λa320b5170fe0.that ? λa320b5170fe0.that.__uv.meta : λd08ee7e4b9a6.meta));
    }), λdd649e2c2b03.element.on("getAttribute", λa320b5170fe0 => {
      λdd649e2c2b03.element.hasAttribute.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name) && λa320b5170fe0.respondWith(λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name));
    }), λdd649e2c2b03.message.on("postMessage", λa320b5170fe0 => {
      let λee551f890e74 = λa320b5170fe0.data.origin, λd3ff95d399a3 = λd08ee7e4b9a6.call;
      λa320b5170fe0.that && (λd3ff95d399a3 = λa320b5170fe0.that.__uv$source.call), λa320b5170fe0.data.origin = "*", 
      λa320b5170fe0.data.message = {
        __data: λa320b5170fe0.data.message,
        __origin: (λa320b5170fe0.that || λa320b5170fe0.target).__uv$source.location.origin,
        __to: λee551f890e74
      }, (() => {
        let λee551f890e74 = λa320b5170fe0.data.transfer || [];
        try {
          const λd3ff95d399a3 = new Set(λee551f890e74);
          const λcfd066badb9d = new Set;
          const a = λa320b5170fe0 => {
            if (!λa320b5170fe0 || typeof λa320b5170fe0 != "object" || λcfd066badb9d.has(λa320b5170fe0)) return;
            λcfd066badb9d.add(λa320b5170fe0);
            let λee551f890e74 = "";
            try {
              λee551f890e74 = Object.prototype.toString.call(λa320b5170fe0);
            } catch {}
            if (typeof MessagePort != "undefined" && λa320b5170fe0 instanceof MessagePort || λee551f890e74 === "[object MessagePort]") {
              λd3ff95d399a3.add(λa320b5170fe0);
              return;
            }
            if (Array.isArray(λa320b5170fe0)) {
              for (const λee551f890e74 of λa320b5170fe0) a(λee551f890e74);
              return;
            }
            for (const λee551f890e74 of Object.values(λa320b5170fe0)) a(λee551f890e74);
          };
          a(λa320b5170fe0.data.message);
          λee551f890e74 = [ ...λd3ff95d399a3 ];
        } catch {}
        return λa320b5170fe0.respondWith(λ5b8947bef5fb ? λd3ff95d399a3(λa320b5170fe0.target, [ λa320b5170fe0.data.message, λee551f890e74 ], λa320b5170fe0.that) : λd3ff95d399a3(λa320b5170fe0.target, [ λa320b5170fe0.data.message, λa320b5170fe0.data.origin, λee551f890e74 ], λa320b5170fe0.that));
      })();
    }), λdd649e2c2b03.message.on("data", λa320b5170fe0 => {
      let {value: λee551f890e74} = λa320b5170fe0.data;
      typeof λee551f890e74 == "object" && "__data" in λee551f890e74 && "__origin" in λee551f890e74 && λa320b5170fe0.respondWith(λee551f890e74.__data);
    }), λdd649e2c2b03.message.on("origin", λa320b5170fe0 => {
      let λee551f890e74 = λdd649e2c2b03.message.messageData.get.call(λa320b5170fe0.that);
      typeof λee551f890e74 == "object" && λee551f890e74.__data && λee551f890e74.__origin && λa320b5170fe0.respondWith(λee551f890e74.__origin);
    }), λdd649e2c2b03.overrideDescriptor(λ5f397fe09096, "origin", {
      get: () => λd08ee7e4b9a6.location.origin
    }), λdd649e2c2b03.node.on("baseURI", λa320b5170fe0 => {
      λa320b5170fe0.data.value.startsWith(λ5f397fe09096.location.origin) && (λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.data.value));
    }), λdd649e2c2b03.element.on("setAttribute", λa320b5170fe0 => {
      if (λa320b5170fe0.that instanceof λb6e49796c337 && λa320b5170fe0.data.name === "src" && λa320b5170fe0.data.value.startsWith("blob:")) {
        λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
        λa320b5170fe0.data.value = λd08ee7e4b9a6.blobUrls.get(λa320b5170fe0.data.value);
        return;
      }
      λd08ee7e4b9a6.attrs.isUrl(λa320b5170fe0.data.name) && (λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.value)), 
      λd08ee7e4b9a6.attrs.isStyle(λa320b5170fe0.data.name) && (λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value, {
        context: "declarationList"
      })), λd08ee7e4b9a6.attrs.isHtml(λa320b5170fe0.data.name) && (λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.value, {
        ...λd08ee7e4b9a6.meta,
        document: !0,
        injectHead: λd08ee7e4b9a6.createHtmlInject(λd08ee7e4b9a6.handlerScript, λd08ee7e4b9a6.bundleScript, λd08ee7e4b9a6.clientScript, λd08ee7e4b9a6.configScript, λb27228e5d0e4, λ5f397fe09096.location.href)
      })), λd08ee7e4b9a6.attrs.isSrcset(λa320b5170fe0.data.name) && (λa320b5170fe0.target.call(λa320b5170fe0.that, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.html.wrapSrcset(λa320b5170fe0.data.value.toString())), 
      λd08ee7e4b9a6.attrs.isForbidden(λa320b5170fe0.data.name) && (λa320b5170fe0.data.name = λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name);
    }), λdd649e2c2b03.element.on("audio", λa320b5170fe0 => {
      λa320b5170fe0.data.url = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.url);
    }), λdd649e2c2b03.element.hookProperty([ λf45b00674ca4, λ380288389181, λe631001477b5, λ60b606260dca ], "href", {
      get: (λa320b5170fe0, λee551f890e74) => λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.call(λee551f890e74)),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-href", λd3ff95d399a3), 
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.rewriteUrl(λd3ff95d399a3));
      }
    }), λdd649e2c2b03.element.hookProperty([ λe69a9d89b42c, λ2c08b6fa7d43, λf8eac9ded246, λb6e49796c337, λa515902415d1, λ047df10cea63, λc8862ffd784b, λ00170aaa798d, λ8ecd67d00961, λca970297abb8 ], "src", {
      get: (λa320b5170fe0, λee551f890e74) => λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.call(λee551f890e74)),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        if (new String(λd3ff95d399a3).toString().trim().startsWith("blob:") && λee551f890e74 instanceof λb6e49796c337) return λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-src", λd3ff95d399a3), 
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.blobUrls.get(λd3ff95d399a3) || λd3ff95d399a3);
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-src", λd3ff95d399a3), 
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.rewriteUrl(λd3ff95d399a3));
      }
    }), λdd649e2c2b03.element.hookProperty([ λ63456be9b11a ], "action", {
      get: (λa320b5170fe0, λee551f890e74) => λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.call(λee551f890e74)),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-action", λd3ff95d399a3), 
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.rewriteUrl(λd3ff95d399a3));
      }
    }), λdd649e2c2b03.element.hookProperty([ λa515902415d1, λca970297abb8 ], "srcset", {
      get: (λa320b5170fe0, λee551f890e74) => λdd649e2c2b03.element.getAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-srcset") || λa320b5170fe0.call(λee551f890e74),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-srcset", λd3ff95d399a3), 
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.html.wrapSrcset(λd3ff95d399a3.toString()));
      }
    }), λdd649e2c2b03.element.hookProperty(λe69a9d89b42c, "integrity", {
      get: (λa320b5170fe0, λee551f890e74) => λdd649e2c2b03.element.getAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-integrity"),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-integrity", λd3ff95d399a3);
      }
    }), λdd649e2c2b03.element.hookProperty(λ00170aaa798d, "sandbox", {
      get: (λa320b5170fe0, λee551f890e74) => λdd649e2c2b03.element.getAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-sandbox") || λa320b5170fe0.call(λee551f890e74),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λdd649e2c2b03.element.setAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-sandbox", λd3ff95d399a3);
      }
    });
    let λfe28eeaefeb8 = λ00170aaa798d && Object.getOwnPropertyDescriptor(λ00170aaa798d.prototype, "contentWindow").get;
    function U(λa320b5170fe0) {
      let λee551f890e74 = λfe28eeaefeb8.call(λa320b5170fe0);
      if (!λee551f890e74.__uv) try {
        p(λee551f890e74);
      } catch (λa320b5170fe0) {
        console.error("catastrophic failure"), console.error(λa320b5170fe0);
      }
    }
    if (λdd649e2c2b03.element.hookProperty(λ00170aaa798d, "contentWindow", {
      get: (λa320b5170fe0, λee551f890e74) => (U(λee551f890e74), λa320b5170fe0.call(λee551f890e74))
    }), λdd649e2c2b03.element.hookProperty(λ00170aaa798d, "contentDocument", {
      get: (λa320b5170fe0, λee551f890e74) => (U(λee551f890e74), λa320b5170fe0.call(λee551f890e74))
    }), λdd649e2c2b03.element.hookProperty(λ00170aaa798d, "srcdoc", {
      get: (λa320b5170fe0, λee551f890e74) => λdd649e2c2b03.element.getAttribute.call(λee551f890e74, λd08ee7e4b9a6.attributePrefix + "-attr-srcdoc") || λa320b5170fe0.call(λee551f890e74),
      set: (λa320b5170fe0, λee551f890e74, [λd3ff95d399a3]) => {
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.rewriteHtml(λd3ff95d399a3, {
          document: !0,
          injectHead: λd08ee7e4b9a6.createHtmlInject(λd08ee7e4b9a6.handlerScript, λd08ee7e4b9a6.bundleScript, λd08ee7e4b9a6.clientScript, λd08ee7e4b9a6.configScript, λb27228e5d0e4, λ5f397fe09096.location.href)
        }));
      }
    }), λdd649e2c2b03.node.on("getTextContent", λa320b5170fe0 => {
      switch (λa320b5170fe0.that.tagName) {
       case "SCRIPT":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.js.source(λa320b5170fe0.data.value);
        break;

       case "STYLE":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceCSS(λa320b5170fe0.data.value);
        break;

       default:
      }
    }), λdd649e2c2b03.node.on("setTextContent", λa320b5170fe0 => {
      switch (λa320b5170fe0.that.tagName) {
       case "SCRIPT":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.js.rewrite(λa320b5170fe0.data.value);
        break;

       case "STYLE":
        λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λ5f397fe09096.navigator && delete λ5f397fe09096.Navigator.prototype.serviceWorker, 
    λdd649e2c2b03.document.on("getDomain", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.domain;
    }), λdd649e2c2b03.document.on("setDomain", λa320b5170fe0 => {
      if (!λa320b5170fe0.data.value.toString().endsWith(λd08ee7e4b9a6.meta.url.hostname.split(".").slice(-2).join("."))) return λa320b5170fe0.respondWith("");
      λa320b5170fe0.respondWith(λd08ee7e4b9a6.domain = λa320b5170fe0.data.value);
    }), λdd649e2c2b03.document.on("url", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.location.href;
    }), λdd649e2c2b03.document.on("documentURI", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.location.href;
    }), λdd649e2c2b03.document.on("referrer", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.referrer || λd08ee7e4b9a6.sourceUrl(λa320b5170fe0.data.value);
    }), λdd649e2c2b03.document.on("parseFromString", λa320b5170fe0 => {
      if (λa320b5170fe0.data.type !== "text/html") return !1;
      λa320b5170fe0.data.string = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.string, {
        ...λd08ee7e4b9a6.meta,
        document: !0
      });
    }), λdd649e2c2b03.attribute.on("getValue", λa320b5170fe0 => {
      λdd649e2c2b03.element.hasAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name) && (λa320b5170fe0.data.value = λdd649e2c2b03.element.getAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name));
    }), λdd649e2c2b03.attribute.on("setValue", λa320b5170fe0 => {
      λd08ee7e4b9a6.attrs.isUrl(λa320b5170fe0.data.name) && (λdd649e2c2b03.element.setAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteUrl(λa320b5170fe0.data.value)), 
      λd08ee7e4b9a6.attrs.isStyle(λa320b5170fe0.data.name) && (λdd649e2c2b03.element.setAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value, {
        context: "declarationList"
      })), λd08ee7e4b9a6.attrs.isHtml(λa320b5170fe0.data.name) && (λdd649e2c2b03.element.setAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteHtml(λa320b5170fe0.data.value, {
        ...λd08ee7e4b9a6.meta,
        document: !0,
        injectHead: λd08ee7e4b9a6.createHtmlInject(λd08ee7e4b9a6.handlerScript, λd08ee7e4b9a6.bundleScript, λd08ee7e4b9a6.clientScript, λd08ee7e4b9a6.configScript, λb27228e5d0e4, λ5f397fe09096.location.href)
      })), λd08ee7e4b9a6.attrs.isSrcset(λa320b5170fe0.data.name) && (λdd649e2c2b03.element.setAttribute.call(λa320b5170fe0.that.ownerElement, λd08ee7e4b9a6.attributePrefix + "-attr-" + λa320b5170fe0.data.name, λa320b5170fe0.data.value), 
      λa320b5170fe0.data.value = λd08ee7e4b9a6.html.wrapSrcset(λa320b5170fe0.data.value.toString()));
    }), λdd649e2c2b03.url.on("createObjectURL", λa320b5170fe0 => {
      let λee551f890e74 = λa320b5170fe0.target.call(λa320b5170fe0.that, λa320b5170fe0.data.object);
      if (λee551f890e74.startsWith("blob:" + location.origin)) {
        let λd3ff95d399a3 = "blob:" + (λd08ee7e4b9a6.meta.url.href !== "about:blank" ? λd08ee7e4b9a6.meta.url.origin : λ5f397fe09096.parent.__uv.meta.url.origin) + λee551f890e74.slice(5 + location.origin.length);
        λd08ee7e4b9a6.blobUrls.set(λd3ff95d399a3, λee551f890e74), λa320b5170fe0.respondWith(λd3ff95d399a3);
      } else λa320b5170fe0.respondWith(λee551f890e74);
    }), λdd649e2c2b03.url.on("revokeObjectURL", λa320b5170fe0 => {
      if (λd08ee7e4b9a6.blobUrls.has(λa320b5170fe0.data.url)) {
        let λee551f890e74 = λa320b5170fe0.data.url;
        λa320b5170fe0.data.url = λd08ee7e4b9a6.blobUrls.get(λa320b5170fe0.data.url), λd08ee7e4b9a6.blobUrls.delete(λee551f890e74);
      }
    }), λdd649e2c2b03.storage.on("get", λa320b5170fe0 => {
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("set", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && (λa320b5170fe0.that.__uv$storageObj[λa320b5170fe0.data.name] = λa320b5170fe0.data.value), 
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("delete", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && delete λa320b5170fe0.that.__uv$storageObj[λa320b5170fe0.data.name], 
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("getItem", λa320b5170fe0 => {
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("setItem", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && (λa320b5170fe0.that.__uv$storageObj[λa320b5170fe0.data.name] = λa320b5170fe0.data.value), 
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("removeItem", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && delete λa320b5170fe0.that.__uv$storageObj[λa320b5170fe0.data.name], 
      λa320b5170fe0.data.name = λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λa320b5170fe0.data.name;
    }), λdd649e2c2b03.storage.on("clear", λa320b5170fe0 => {
      if (λa320b5170fe0.that.__uv$storageObj) for (let λee551f890e74 of λdd649e2c2b03.nativeMethods.keys.call(null, λa320b5170fe0.that.__uv$storageObj)) delete λa320b5170fe0.that.__uv$storageObj[λee551f890e74], 
      λdd649e2c2b03.storage.removeItem.call(λa320b5170fe0.that, λe0f7cb83c336 + λd08ee7e4b9a6.meta.url.origin + "@" + λee551f890e74), 
      λa320b5170fe0.respondWith();
    }), λdd649e2c2b03.storage.on("length", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && λa320b5170fe0.respondWith(λdd649e2c2b03.nativeMethods.keys.call(null, λa320b5170fe0.that.__uv$storageObj).length);
    }), λdd649e2c2b03.storage.on("key", λa320b5170fe0 => {
      λa320b5170fe0.that.__uv$storageObj && λa320b5170fe0.respondWith(λdd649e2c2b03.nativeMethods.keys.call(null, λa320b5170fe0.that.__uv$storageObj)[λa320b5170fe0.data.index] || null);
    }), λdd649e2c2b03.function.on("function", λa320b5170fe0 => {
      λa320b5170fe0.data.script = λd08ee7e4b9a6.rewriteJS(λa320b5170fe0.data.script);
    }), λdd649e2c2b03.function.on("toString", λa320b5170fe0 => {
      λd08ee7e4b9a6.methods.string in λa320b5170fe0.that && λa320b5170fe0.respondWith(λa320b5170fe0.that[λd08ee7e4b9a6.methods.string]);
    }), λdd649e2c2b03.object.on("getOwnPropertyNames", λa320b5170fe0 => {
      λa320b5170fe0.data.names = λa320b5170fe0.data.names.filter(λa320b5170fe0 => !λd08ee7e4b9a6.filterKeys.includes(λa320b5170fe0));
    }), λdd649e2c2b03.object.on("getOwnPropertyDescriptors", λa320b5170fe0 => {
      for (let λee551f890e74 of λd08ee7e4b9a6.filterKeys) delete λa320b5170fe0.data.descriptors[λee551f890e74];
    }), λdd649e2c2b03.style.on("setProperty", λa320b5170fe0 => {
      λdd649e2c2b03.style.dashedUrlProps.includes(λa320b5170fe0.data.property) && (λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value, {
        context: "value",
        ...λd08ee7e4b9a6.meta
      }));
    }), λdd649e2c2b03.style.on("getPropertyValue", λa320b5170fe0 => {
      λdd649e2c2b03.style.dashedUrlProps.includes(λa320b5170fe0.data.property) && λa320b5170fe0.respondWith(λd08ee7e4b9a6.sourceCSS(λa320b5170fe0.target.call(λa320b5170fe0.that, λa320b5170fe0.data.property), {
        context: "value",
        ...λd08ee7e4b9a6.meta
      }));
    }), "CSS2Properties" in λ5f397fe09096) for (let λa320b5170fe0 of λdd649e2c2b03.style.urlProps) λdd649e2c2b03.overrideDescriptor(λ5f397fe09096.CSS2Properties.prototype, λa320b5170fe0, {
      get: (λa320b5170fe0, λee551f890e74) => λd08ee7e4b9a6.sourceCSS(λa320b5170fe0.call(λee551f890e74), {
        context: "value",
        ...λd08ee7e4b9a6.meta
      }),
      set: (λa320b5170fe0, λee551f890e74, λd3ff95d399a3) => {
        λa320b5170fe0.call(λee551f890e74, λd08ee7e4b9a6.rewriteCSS(λd3ff95d399a3, {
          context: "value",
          ...λd08ee7e4b9a6.meta
        }));
      }
    }); else "HTMLElement" in λ5f397fe09096 && λdd649e2c2b03.overrideDescriptor(λ5f397fe09096.HTMLElement.prototype, "style", {
      get: (λa320b5170fe0, λee551f890e74) => {
        let λd3ff95d399a3 = λa320b5170fe0.call(λee551f890e74);
        if (!λd3ff95d399a3[λe0f7cb83c336 + "modifiedStyle"]) for (let λa320b5170fe0 of λdd649e2c2b03.style.urlProps) λdd649e2c2b03.nativeMethods.defineProperty(λd3ff95d399a3, λa320b5170fe0, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λee551f890e74 = λdd649e2c2b03.style.getPropertyValue.call(this, λa320b5170fe0) || "";
            return λd08ee7e4b9a6.sourceCSS(λee551f890e74, {
              context: "value",
              ...λd08ee7e4b9a6.meta
            });
          },
          set(λee551f890e74) {
            λdd649e2c2b03.style.setProperty.call(this, λdd649e2c2b03.style.propToDashed[λa320b5170fe0] || λa320b5170fe0, λd08ee7e4b9a6.rewriteCSS(λee551f890e74, {
              context: "value",
              ...λd08ee7e4b9a6.meta
            }));
          }
        }), λdd649e2c2b03.nativeMethods.defineProperty(λd3ff95d399a3, λe0f7cb83c336 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λd3ff95d399a3;
      }
    });
    λdd649e2c2b03.style.on("setCssText", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.rewriteCSS(λa320b5170fe0.data.value, {
        context: "declarationList",
        ...λd08ee7e4b9a6.meta
      });
    }), λdd649e2c2b03.style.on("getCssText", λa320b5170fe0 => {
      λa320b5170fe0.data.value = λd08ee7e4b9a6.sourceCSS(λa320b5170fe0.data.value, {
        context: "declarationList",
        ...λd08ee7e4b9a6.meta
      });
    }), λd08ee7e4b9a6.addEventListener.call(λ5f397fe09096, "hashchange", λa320b5170fe0 => {
      if (λa320b5170fe0.__uv$dispatched) return !1;
      λa320b5170fe0.stopImmediatePropagation();
      let λee551f890e74 = λ5f397fe09096.location.hash;
      λdd649e2c2b03.history.replaceState.call(λ5f397fe09096.history, "", "", λa320b5170fe0.oldURL), 
      λd08ee7e4b9a6.location.hash = λee551f890e74;
    }), λdd649e2c2b03.location.on("hashchange", (λa320b5170fe0, λee551f890e74, λd3ff95d399a3) => {
      if (λd3ff95d399a3.HashChangeEvent && λdd649e2c2b03.history.replaceState) {
        λdd649e2c2b03.history.replaceState.call(λ5f397fe09096.history, "", "", λd08ee7e4b9a6.rewriteUrl(λee551f890e74));
        let λcfd066badb9d = new λd3ff95d399a3.HashChangeEvent("hashchange", {
          newURL: λee551f890e74,
          oldURL: λa320b5170fe0
        });
        λdd649e2c2b03.nativeMethods.defineProperty(λcfd066badb9d, λe0f7cb83c336 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λd08ee7e4b9a6.dispatchEvent.call(λ5f397fe09096, λcfd066badb9d);
      }
    }), λdd649e2c2b03.fetch.overrideRequest(), λdd649e2c2b03.fetch.overrideUrl(), λdd649e2c2b03.xhr.overrideOpen(), 
    λdd649e2c2b03.xhr.overrideResponseUrl(), λdd649e2c2b03.element.overrideHtml(), λdd649e2c2b03.element.overrideAttribute(), 
    λdd649e2c2b03.element.overrideInsertAdjacentHTML(), λdd649e2c2b03.element.overrideAudio(), 
    λdd649e2c2b03.node.overrideBaseURI(), λdd649e2c2b03.node.overrideTextContent(), 
    λdd649e2c2b03.attribute.overrideNameValue(), λdd649e2c2b03.document.overrideDomain(), 
    λdd649e2c2b03.document.overrideURL(), λdd649e2c2b03.document.overrideDocumentURI(), 
    λdd649e2c2b03.document.overrideWrite(), λdd649e2c2b03.document.overrideReferrer(), 
    λdd649e2c2b03.document.overrideParseFromString(), λdd649e2c2b03.storage.overrideMethods(), 
    λdd649e2c2b03.storage.overrideLength(), λdd649e2c2b03.object.overrideGetPropertyNames(), 
    λdd649e2c2b03.object.overrideGetOwnPropertyDescriptors(), λdd649e2c2b03.idb.overrideName(), 
    λdd649e2c2b03.idb.overrideOpen(), λdd649e2c2b03.history.overridePushState(), λdd649e2c2b03.history.overrideReplaceState(), 
    λdd649e2c2b03.eventSource.overrideConstruct(), λdd649e2c2b03.eventSource.overrideUrl(), 
    λdd649e2c2b03.websocket.overrideWebSocket(λc5af571e7f7e), λdd649e2c2b03.url.overrideObjectURL(), 
    λdd649e2c2b03.document.overrideCookie(), λdd649e2c2b03.message.overridePostMessage(), 
    λdd649e2c2b03.message.overrideMessageOrigin(), λdd649e2c2b03.message.overrideMessageData(), 
    λdd649e2c2b03.workers.overrideWorker(), λdd649e2c2b03.workers.overrideAddModule(), 
    λdd649e2c2b03.workers.overrideImportScripts(), λdd649e2c2b03.workers.overridePostMessage(), 
    λdd649e2c2b03.style.overrideSetGetProperty(), λdd649e2c2b03.style.overrideCssText(), 
    λdd649e2c2b03.navigator.overrideSendBeacon(), λdd649e2c2b03.function.overrideFunction(), 
    λdd649e2c2b03.function.overrideToString(), λdd649e2c2b03.location.overrideWorkerLocation(λa320b5170fe0 => new URL(λd08ee7e4b9a6.sourceUrl(λa320b5170fe0))), 
    λdd649e2c2b03.overrideDescriptor(λ5f397fe09096, "localStorage", {
      get: (λa320b5170fe0, λee551f890e74) => (λee551f890e74 || λ5f397fe09096).__uv.lsWrap
    }), λdd649e2c2b03.overrideDescriptor(λ5f397fe09096, "sessionStorage", {
      get: (λa320b5170fe0, λee551f890e74) => (λee551f890e74 || λ5f397fe09096).__uv.ssWrap
    }), λdd649e2c2b03.override(λ5f397fe09096, "open", (λa320b5170fe0, λee551f890e74, λd3ff95d399a3) => {
      if (!λd3ff95d399a3.length) return λa320b5170fe0.apply(λee551f890e74, λd3ff95d399a3);
      let [λcfd066badb9d] = λd3ff95d399a3;
      return λcfd066badb9d = λd08ee7e4b9a6.rewriteUrl(λcfd066badb9d), λa320b5170fe0.call(λee551f890e74, λcfd066badb9d);
    }), λd08ee7e4b9a6.$wrap = function(λa320b5170fe0) {
      return λa320b5170fe0 === "location" ? λd08ee7e4b9a6.methods.location : λa320b5170fe0 === "eval" ? λd08ee7e4b9a6.methods.eval : λa320b5170fe0;
    }, λd08ee7e4b9a6.$get = function(λa320b5170fe0) {
      return λa320b5170fe0 === λ5f397fe09096.location ? λd08ee7e4b9a6.location : λa320b5170fe0 === λ5f397fe09096.eval ? λd08ee7e4b9a6.eval : λa320b5170fe0 === λ5f397fe09096.parent ? λ5f397fe09096.__uv$parent : λa320b5170fe0 === λ5f397fe09096.top ? λ5f397fe09096.__uv$top : λa320b5170fe0;
    }, λd08ee7e4b9a6.eval = λdd649e2c2b03.wrap(λ5f397fe09096, "eval", (λa320b5170fe0, λee551f890e74, λd3ff95d399a3) => {
      if (!λd3ff95d399a3.length || typeof λd3ff95d399a3[0] != "string") return λa320b5170fe0.apply(λee551f890e74, λd3ff95d399a3);
      let [λcfd066badb9d] = λd3ff95d399a3;
      return λcfd066badb9d = λd08ee7e4b9a6.rewriteJS(λcfd066badb9d), λa320b5170fe0.call(λee551f890e74, λcfd066badb9d);
    }), λd08ee7e4b9a6.call = function(λa320b5170fe0, λee551f890e74, λd3ff95d399a3) {
      return λd3ff95d399a3 ? λa320b5170fe0.apply(λd3ff95d399a3, λee551f890e74) : λa320b5170fe0(...λee551f890e74);
    }, λd08ee7e4b9a6.call$ = function(λa320b5170fe0, λee551f890e74, λd3ff95d399a3 = []) {
      return λa320b5170fe0[λee551f890e74].apply(λa320b5170fe0, λd3ff95d399a3);
    }, λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λ0720aaa14dcf, {
      get: () => λd08ee7e4b9a6,
      enumerable: !1
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.setSource, {
      value: function(λa320b5170fe0) {
        return λdd649e2c2b03.nativeMethods.isExtensible(this) ? (λdd649e2c2b03.nativeMethods.defineProperty(this, λd08ee7e4b9a6.methods.source, {
          value: λa320b5170fe0,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.source, {
      value: λd08ee7e4b9a6,
      writable: !0,
      enumerable: !1
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.location, {
      configurable: !0,
      get() {
        return this === λ5f397fe09096.document || this === λ5f397fe09096 ? λd08ee7e4b9a6.location : this.location;
      },
      set(λa320b5170fe0) {
        this === λ5f397fe09096.document || this === λ5f397fe09096 ? λd08ee7e4b9a6.location.href = λa320b5170fe0 : this.location = λa320b5170fe0;
      }
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.parent, {
      configurable: !0,
      get() {
        let λa320b5170fe0 = this.parent;
        if (this === λ5f397fe09096) try {
          return "__uv" in λa320b5170fe0 ? λa320b5170fe0 : this;
        } catch {
          return this;
        }
        return λa320b5170fe0;
      },
      set(λa320b5170fe0) {
        this.parent = λa320b5170fe0;
      }
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.top, {
      configurable: !0,
      get() {
        let λa320b5170fe0 = this.top;
        if (this === λ5f397fe09096) {
          if (λa320b5170fe0 === this.parent) return this[λd08ee7e4b9a6.methods.parent];
          try {
            if ("__uv" in λa320b5170fe0) return λa320b5170fe0;
            {
              let λee551f890e74 = this;
              for (;λee551f890e74.parent !== λa320b5170fe0; ) λee551f890e74 = λee551f890e74.parent;
              return "__uv" in λee551f890e74 ? λee551f890e74 : this;
            }
          } catch {
            return this;
          }
        }
        return λa320b5170fe0;
      },
      set(λa320b5170fe0) {
        this.top = λa320b5170fe0;
      }
    }), λdd649e2c2b03.nativeMethods.defineProperty(λ5f397fe09096.Object.prototype, λd08ee7e4b9a6.methods.eval, {
      configurable: !0,
      get() {
        return this === λ5f397fe09096 ? λd08ee7e4b9a6.eval : this.eval;
      },
      set(λa320b5170fe0) {
        this.eval = λa320b5170fe0;
      }
    });
  }
})();
