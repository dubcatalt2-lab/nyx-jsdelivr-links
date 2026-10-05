"use strict";

(() => {
  var λ9bc55efdd0c1 = self.StemConnect, λf6c891d792ce = self.UVClient, λ8c4bfb34271a = self.__uv$config, λa3a19cad6f90 = self.__uv$cookies;
  if (typeof λa3a19cad6f90 != "string") throw new TypeError("Unable to load global UV data");
  self.__uv || p(self);
  self.__uvHook = p;
  function p(λbe40e165f20e) {
    if ("__uv" in λbe40e165f20e && λbe40e165f20e.__uv instanceof λ9bc55efdd0c1) return !1;
    λbe40e165f20e.document && λbe40e165f20e.window && λbe40e165f20e.document.querySelectorAll("script[__uv-script]").forEach(λ9bc55efdd0c1 => λ9bc55efdd0c1.remove());
    let λ8d1879ed5740 = !λbe40e165f20e.window, λbc43523a1a63 = "__uv", λdf011e5d3fd1 = "__uv$", λ560da98aef47 = new λ9bc55efdd0c1(λ8c4bfb34271a), λf11cc63bdee0;
    λ8d1879ed5740 ? λf11cc63bdee0 = new λ9bc55efdd0c1.BareClient(new Promise(λ9bc55efdd0c1 => {
      addEventListener("message", ({data: λf6c891d792ce}) => {
        typeof λf6c891d792ce == "object" && "__uv$type" in λf6c891d792ce && λf6c891d792ce.__uv$type === "baremuxinit" && λ9bc55efdd0c1(λf6c891d792ce.port);
      });
    })) : λf11cc63bdee0 = new λ9bc55efdd0c1.BareClient;
    let λ81bba0c38983 = new λf6c891d792ce(λbe40e165f20e, λf11cc63bdee0, λ8d1879ed5740), {HTMLMediaElement: λe58d61a39bda, HTMLScriptElement: λf15bf025fd74, HTMLAudioElement: λ9a7d85057ae8, HTMLVideoElement: λe79ddb260742, HTMLInputElement: λ63c28a82dd30, HTMLEmbedElement: λ5e4875584bab, HTMLTrackElement: λb9be536b3dbb, HTMLAnchorElement: λ5fad98c9ba03, HTMLIFrameElement: λ2ac07f0065ff, HTMLAreaElement: λa5fe84de7b1b, HTMLLinkElement: λ831ccd670257, HTMLBaseElement: λ0c9c48964a11, HTMLFormElement: λ3b49b3c7a4dd, HTMLImageElement: λb8846f535dbf, HTMLSourceElement: λa05d46dd4588} = λbe40e165f20e;
    λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e, "__uv", {
      value: λ560da98aef47,
      enumerable: !1
    }), λ560da98aef47.meta.origin = location.origin, λ560da98aef47.location = λ81bba0c38983.location.emulate(λ9bc55efdd0c1 => λ9bc55efdd0c1 === "about:srcdoc" ? new URL(λ9bc55efdd0c1) : (λ9bc55efdd0c1.startsWith("blob:") && (λ9bc55efdd0c1 = λ9bc55efdd0c1.slice(5)), 
    new URL(λ560da98aef47.sourceUrl(λ9bc55efdd0c1))), λ9bc55efdd0c1 => λ560da98aef47.rewriteUrl(λ9bc55efdd0c1));
    let λ1bb65cc42f96 = λa3a19cad6f90;
    if (λ560da98aef47.meta.url = λ560da98aef47.location, λ560da98aef47.domain = λ560da98aef47.meta.url.host, 
    λ560da98aef47.blobUrls = new λbe40e165f20e.Map, λ560da98aef47.referrer = "", λ560da98aef47.cookies = [], 
    λ560da98aef47.localStorageObj = {}, λ560da98aef47.sessionStorageObj = {}, λ560da98aef47.location.href === "about:srcdoc" && (λ560da98aef47.meta = λbe40e165f20e.parent.__uv.meta), 
    λbe40e165f20e.EventTarget && (λ560da98aef47.addEventListener = λbe40e165f20e.EventTarget.prototype.addEventListener, 
    λ560da98aef47.removeListener = λbe40e165f20e.EventTarget.prototype.removeListener, 
    λ560da98aef47.dispatchEvent = λbe40e165f20e.EventTarget.prototype.dispatchEvent), 
    λ81bba0c38983.nativeMethods.defineProperty(λ81bba0c38983.storage.storeProto, "__uv$storageObj", {
      get() {
        if (this === λ81bba0c38983.storage.sessionStorage) return λ560da98aef47.sessionStorageObj;
        if (this === λ81bba0c38983.storage.localStorage) return λ560da98aef47.localStorageObj;
      },
      enumerable: !1
    }), λbe40e165f20e.localStorage) {
      for (let λ9bc55efdd0c1 in λbe40e165f20e.localStorage) λ9bc55efdd0c1.startsWith(λdf011e5d3fd1 + λ560da98aef47.location.origin + "@") && (λ560da98aef47.localStorageObj[λ9bc55efdd0c1.slice((λdf011e5d3fd1 + λ560da98aef47.location.origin + "@").length)] = λbe40e165f20e.localStorage.getItem(λ9bc55efdd0c1));
      λ560da98aef47.lsWrap = λ81bba0c38983.storage.emulate(λ81bba0c38983.storage.localStorage, λ560da98aef47.localStorageObj);
    }
    if (λbe40e165f20e.sessionStorage) {
      for (let λ9bc55efdd0c1 in λbe40e165f20e.sessionStorage) λ9bc55efdd0c1.startsWith(λdf011e5d3fd1 + λ560da98aef47.location.origin + "@") && (λ560da98aef47.sessionStorageObj[λ9bc55efdd0c1.slice((λdf011e5d3fd1 + λ560da98aef47.location.origin + "@").length)] = λbe40e165f20e.sessionStorage.getItem(λ9bc55efdd0c1));
      λ560da98aef47.ssWrap = λ81bba0c38983.storage.emulate(λ81bba0c38983.storage.sessionStorage, λ560da98aef47.sessionStorageObj);
    }
    let λ7cecb8c5e605 = λbe40e165f20e.document ? λ81bba0c38983.node.baseURI.get.call(λbe40e165f20e.document) : λbe40e165f20e.location.href, λ1970b15efe08 = λ560da98aef47.sourceUrl(λ7cecb8c5e605);
    λ81bba0c38983.nativeMethods.defineProperty(λ560da98aef47.meta, "base", {
      get() {
        return λbe40e165f20e.document ? (λ81bba0c38983.node.baseURI.get.call(λbe40e165f20e.document) !== λ7cecb8c5e605 && (λ7cecb8c5e605 = λ81bba0c38983.node.baseURI.get.call(λbe40e165f20e.document), 
        λ1970b15efe08 = λ560da98aef47.sourceUrl(λ7cecb8c5e605)), λ1970b15efe08) : λ560da98aef47.meta.url.href;
      }
    }), λ560da98aef47.methods = {
      setSource: λdf011e5d3fd1 + "setSource",
      source: λdf011e5d3fd1 + "source",
      location: λdf011e5d3fd1 + "location",
      function: λdf011e5d3fd1 + "function",
      string: λdf011e5d3fd1 + "string",
      eval: λdf011e5d3fd1 + "eval",
      parent: λdf011e5d3fd1 + "parent",
      top: λdf011e5d3fd1 + "top"
    }, λ560da98aef47.filterKeys = [ λbc43523a1a63, λ560da98aef47.methods.setSource, λ560da98aef47.methods.source, λ560da98aef47.methods.location, λ560da98aef47.methods.function, λ560da98aef47.methods.string, λ560da98aef47.methods.eval, λ560da98aef47.methods.parent, λ560da98aef47.methods.top, λdf011e5d3fd1 + "protocol", λdf011e5d3fd1 + "storageObj", λdf011e5d3fd1 + "url", λdf011e5d3fd1 + "modifiedStyle", λdf011e5d3fd1 + "config", λdf011e5d3fd1 + "dispatched", "StemConnect", "__uvHook" ], 
    λ81bba0c38983.on("wrap", (λ9bc55efdd0c1, λf6c891d792ce) => {
      λ81bba0c38983.nativeMethods.defineProperty(λf6c891d792ce, "name", λ81bba0c38983.nativeMethods.getOwnPropertyDescriptor(λ9bc55efdd0c1, "name")), 
      λ81bba0c38983.nativeMethods.defineProperty(λf6c891d792ce, "length", λ81bba0c38983.nativeMethods.getOwnPropertyDescriptor(λ9bc55efdd0c1, "length")), 
      λ81bba0c38983.nativeMethods.defineProperty(λf6c891d792ce, λ560da98aef47.methods.string, {
        enumerable: !1,
        value: λ81bba0c38983.nativeMethods.fnToString.call(λ9bc55efdd0c1)
      }), λ81bba0c38983.nativeMethods.defineProperty(λf6c891d792ce, λ560da98aef47.methods.function, {
        enumerable: !1,
        value: λ9bc55efdd0c1
      });
    }), λ81bba0c38983.fetch.on("request", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.input = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.input);
    }), λ81bba0c38983.fetch.on("requestUrl", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.sourceUrl(λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.fetch.on("responseUrl", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.sourceUrl(λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.xhr.on("open", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.input = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.input);
    }), λ81bba0c38983.xhr.on("responseUrl", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.sourceUrl(λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.workers.on("worker", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.workers.on("addModule", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.workers.on("importScripts", λ9bc55efdd0c1 => {
      for (let λf6c891d792ce in λ9bc55efdd0c1.data.scripts) λ9bc55efdd0c1.data.scripts[λf6c891d792ce] = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.scripts[λf6c891d792ce]);
    }), λ81bba0c38983.workers.on("postMessage", λ9bc55efdd0c1 => {
      let λf6c891d792ce = λ9bc55efdd0c1.data.origin;
      λ9bc55efdd0c1.data.origin = "*", λ9bc55efdd0c1.data.message = {
        __data: λ9bc55efdd0c1.data.message,
        __origin: λ560da98aef47.meta.url.origin,
        __to: λf6c891d792ce
      };
    }), λ81bba0c38983.navigator.on("sendBeacon", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.document.on("getCookie", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ1bb65cc42f96;
    }), λ81bba0c38983.document.on("setCookie", λ9bc55efdd0c1 => {
      λ560da98aef47.cookie.db().then(λf6c891d792ce => {
        λ560da98aef47.cookie.setCookies(λ9bc55efdd0c1.data.value, λf6c891d792ce, λ560da98aef47.meta), 
        λ560da98aef47.cookie.getCookies(λf6c891d792ce).then(λ9bc55efdd0c1 => {
          λ1bb65cc42f96 = λ560da98aef47.cookie.serialize(λ9bc55efdd0c1, λ560da98aef47.meta, !0);
        });
      });
      let λf6c891d792ce = λ560da98aef47.cookie.setCookie(λ9bc55efdd0c1.data.value)[0];
      λf6c891d792ce.path || (λf6c891d792ce.path = "/"), λf6c891d792ce.domain || (λf6c891d792ce.domain = λ560da98aef47.meta.url.hostname), 
      λ560da98aef47.cookie.validateCookie(λf6c891d792ce, λ560da98aef47.meta, !0) && (λ1bb65cc42f96.length && (λ1bb65cc42f96 += "; "), 
      λ1bb65cc42f96 += `${λf6c891d792ce.name}=${λf6c891d792ce.value}`), λ9bc55efdd0c1.respondWith(λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.element.on("setInnerHTML", λ9bc55efdd0c1 => {
      switch (λ9bc55efdd0c1.that.tagName) {
       case "SCRIPT":
        λ9bc55efdd0c1.data.value = λ560da98aef47.js.rewrite(λ9bc55efdd0c1.data.value);
        break;

       case "STYLE":
        λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value);
        break;

       default:
        λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.value);
      }
    }), λ81bba0c38983.element.on("getInnerHTML", λ9bc55efdd0c1 => {
      switch (λ9bc55efdd0c1.that.tagName) {
       case "SCRIPT":
        λ9bc55efdd0c1.data.value = λ560da98aef47.js.source(λ9bc55efdd0c1.data.value);
        break;

       case "STYLE":
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceCSS(λ9bc55efdd0c1.data.value);
        break;

       default:
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceHtml(λ9bc55efdd0c1.data.value);
      }
    }), λ81bba0c38983.element.on("setOuterHTML", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.value, {
        document: λ9bc55efdd0c1.that.tagName === "HTML"
      });
    }), λ81bba0c38983.element.on("getOuterHTML", λ9bc55efdd0c1 => {
      switch (λ9bc55efdd0c1.that.tagName) {
       case "HEAD":
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceHtml(λ9bc55efdd0c1.data.value.replace(/<head(.*)>(.*)<\/head>/s, "<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s, "<head$1>$2</head>");
        break;

       case "BODY":
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceHtml(λ9bc55efdd0c1.data.value.replace(/<body(.*)>(.*)<\/body>/s, "<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s, "<body$1>$2</body>");
        break;

       default:
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceHtml(λ9bc55efdd0c1.data.value, {
          document: λ9bc55efdd0c1.that.tagName === "HTML"
        });
        break;
      }
    }), λ81bba0c38983.document.on("write", λ9bc55efdd0c1 => {
      if (!λ9bc55efdd0c1.data.html.length) return !1;
      λ9bc55efdd0c1.data.html = [ λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.html.join("")) ];
    }), λ81bba0c38983.document.on("writeln", λ9bc55efdd0c1 => {
      if (!λ9bc55efdd0c1.data.html.length) return !1;
      λ9bc55efdd0c1.data.html = [ λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.html.join("")) ];
    }), λ81bba0c38983.element.on("insertAdjacentHTML", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.html = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.html);
    }), λ81bba0c38983.eventSource.on("construct", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.eventSource.on("url", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.idb.on("idbFactoryOpen", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.name !== "__op" && (λ9bc55efdd0c1.data.name = `${λ560da98aef47.meta.url.origin}@${λ9bc55efdd0c1.data.name}`);
    }), λ81bba0c38983.idb.on("idbFactoryName", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ9bc55efdd0c1.data.value.slice(λ560da98aef47.meta.url.origin.length + 1);
    }), λ81bba0c38983.history.on("replaceState", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url && (λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url, "__uv" in λ9bc55efdd0c1.that ? λ9bc55efdd0c1.that.__uv.meta : λ560da98aef47.meta));
    }), λ81bba0c38983.history.on("pushState", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url && (λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url, "__uv" in λ9bc55efdd0c1.that ? λ9bc55efdd0c1.that.__uv.meta : λ560da98aef47.meta));
    }), λ81bba0c38983.element.on("getAttribute", λ9bc55efdd0c1 => {
      λ81bba0c38983.element.hasAttribute.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name) && λ9bc55efdd0c1.respondWith(λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name));
    }), λ81bba0c38983.message.on("postMessage", λ9bc55efdd0c1 => {
      let λf6c891d792ce = λ9bc55efdd0c1.data.origin, λ8c4bfb34271a = λ560da98aef47.call;
      λ9bc55efdd0c1.that && (λ8c4bfb34271a = λ9bc55efdd0c1.that.__uv$source.call), λ9bc55efdd0c1.data.origin = "*", 
      λ9bc55efdd0c1.data.message = {
        __data: λ9bc55efdd0c1.data.message,
        __origin: (λ9bc55efdd0c1.that || λ9bc55efdd0c1.target).__uv$source.location.origin,
        __to: λf6c891d792ce
      }, (() => {
        let λf6c891d792ce = λ9bc55efdd0c1.data.transfer || [];
        try {
          const λ8c4bfb34271a = new Set(λf6c891d792ce);
          const λa3a19cad6f90 = new Set;
          const a = λ9bc55efdd0c1 => {
            if (!λ9bc55efdd0c1 || typeof λ9bc55efdd0c1 != "object" || λa3a19cad6f90.has(λ9bc55efdd0c1)) return;
            λa3a19cad6f90.add(λ9bc55efdd0c1);
            let λf6c891d792ce = "";
            try {
              λf6c891d792ce = Object.prototype.toString.call(λ9bc55efdd0c1);
            } catch {}
            if (typeof MessagePort != "undefined" && λ9bc55efdd0c1 instanceof MessagePort || λf6c891d792ce === "[object MessagePort]") {
              λ8c4bfb34271a.add(λ9bc55efdd0c1);
              return;
            }
            if (Array.isArray(λ9bc55efdd0c1)) {
              for (const λf6c891d792ce of λ9bc55efdd0c1) a(λf6c891d792ce);
              return;
            }
            for (const λf6c891d792ce of Object.values(λ9bc55efdd0c1)) a(λf6c891d792ce);
          };
          a(λ9bc55efdd0c1.data.message);
          λf6c891d792ce = [ ...λ8c4bfb34271a ];
        } catch {}
        return λ9bc55efdd0c1.respondWith(λ8d1879ed5740 ? λ8c4bfb34271a(λ9bc55efdd0c1.target, [ λ9bc55efdd0c1.data.message, λf6c891d792ce ], λ9bc55efdd0c1.that) : λ8c4bfb34271a(λ9bc55efdd0c1.target, [ λ9bc55efdd0c1.data.message, λ9bc55efdd0c1.data.origin, λf6c891d792ce ], λ9bc55efdd0c1.that));
      })();
    }), λ81bba0c38983.message.on("data", λ9bc55efdd0c1 => {
      let {value: λf6c891d792ce} = λ9bc55efdd0c1.data;
      typeof λf6c891d792ce == "object" && "__data" in λf6c891d792ce && "__origin" in λf6c891d792ce && λ9bc55efdd0c1.respondWith(λf6c891d792ce.__data);
    }), λ81bba0c38983.message.on("origin", λ9bc55efdd0c1 => {
      let λf6c891d792ce = λ81bba0c38983.message.messageData.get.call(λ9bc55efdd0c1.that);
      typeof λf6c891d792ce == "object" && λf6c891d792ce.__data && λf6c891d792ce.__origin && λ9bc55efdd0c1.respondWith(λf6c891d792ce.__origin);
    }), λ81bba0c38983.overrideDescriptor(λbe40e165f20e, "origin", {
      get: () => λ560da98aef47.location.origin
    }), λ81bba0c38983.node.on("baseURI", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value.startsWith(λbe40e165f20e.location.origin) && (λ9bc55efdd0c1.data.value = λ560da98aef47.sourceUrl(λ9bc55efdd0c1.data.value));
    }), λ81bba0c38983.element.on("setAttribute", λ9bc55efdd0c1 => {
      if (λ9bc55efdd0c1.that instanceof λe58d61a39bda && λ9bc55efdd0c1.data.name === "src" && λ9bc55efdd0c1.data.value.startsWith("blob:")) {
        λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
        λ9bc55efdd0c1.data.value = λ560da98aef47.blobUrls.get(λ9bc55efdd0c1.data.value);
        return;
      }
      λ560da98aef47.attrs.isUrl(λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.value)), 
      λ560da98aef47.attrs.isStyle(λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value, {
        context: "declarationList"
      })), λ560da98aef47.attrs.isHtml(λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.value, {
        ...λ560da98aef47.meta,
        document: !0,
        injectHead: λ560da98aef47.createHtmlInject(λ560da98aef47.handlerScript, λ560da98aef47.bundleScript, λ560da98aef47.clientScript, λ560da98aef47.configScript, λ1bb65cc42f96, λbe40e165f20e.location.href)
      })), λ560da98aef47.attrs.isSrcset(λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.html.wrapSrcset(λ9bc55efdd0c1.data.value.toString())), 
      λ560da98aef47.attrs.isForbidden(λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.data.name = λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name);
    }), λ81bba0c38983.element.on("audio", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.url = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.url);
    }), λ81bba0c38983.element.hookProperty([ λ5fad98c9ba03, λa5fe84de7b1b, λ831ccd670257, λ0c9c48964a11 ], "href", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ560da98aef47.sourceUrl(λ9bc55efdd0c1.call(λf6c891d792ce)),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-href", λ8c4bfb34271a), 
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.rewriteUrl(λ8c4bfb34271a));
      }
    }), λ81bba0c38983.element.hookProperty([ λf15bf025fd74, λ9a7d85057ae8, λe79ddb260742, λe58d61a39bda, λb8846f535dbf, λ63c28a82dd30, λ5e4875584bab, λ2ac07f0065ff, λb9be536b3dbb, λa05d46dd4588 ], "src", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ560da98aef47.sourceUrl(λ9bc55efdd0c1.call(λf6c891d792ce)),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        if (new String(λ8c4bfb34271a).toString().trim().startsWith("blob:") && λf6c891d792ce instanceof λe58d61a39bda) return λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-src", λ8c4bfb34271a), 
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.blobUrls.get(λ8c4bfb34271a) || λ8c4bfb34271a);
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-src", λ8c4bfb34271a), 
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.rewriteUrl(λ8c4bfb34271a));
      }
    }), λ81bba0c38983.element.hookProperty([ λ3b49b3c7a4dd ], "action", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ560da98aef47.sourceUrl(λ9bc55efdd0c1.call(λf6c891d792ce)),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-action", λ8c4bfb34271a), 
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.rewriteUrl(λ8c4bfb34271a));
      }
    }), λ81bba0c38983.element.hookProperty([ λb8846f535dbf, λa05d46dd4588 ], "srcset", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ81bba0c38983.element.getAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-srcset") || λ9bc55efdd0c1.call(λf6c891d792ce),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-srcset", λ8c4bfb34271a), 
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.html.wrapSrcset(λ8c4bfb34271a.toString()));
      }
    }), λ81bba0c38983.element.hookProperty(λf15bf025fd74, "integrity", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ81bba0c38983.element.getAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-integrity"),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-integrity", λ8c4bfb34271a);
      }
    }), λ81bba0c38983.element.hookProperty(λ2ac07f0065ff, "sandbox", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ81bba0c38983.element.getAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-sandbox") || λ9bc55efdd0c1.call(λf6c891d792ce),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ81bba0c38983.element.setAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-sandbox", λ8c4bfb34271a);
      }
    });
    let λef6deb6706c2 = λ2ac07f0065ff && Object.getOwnPropertyDescriptor(λ2ac07f0065ff.prototype, "contentWindow").get;
    function U(λ9bc55efdd0c1) {
      let λf6c891d792ce = λef6deb6706c2.call(λ9bc55efdd0c1);
      if (!λf6c891d792ce.__uv) try {
        p(λf6c891d792ce);
      } catch (λ9bc55efdd0c1) {
        console.error("catastrophic failure"), console.error(λ9bc55efdd0c1);
      }
    }
    if (λ81bba0c38983.element.hookProperty(λ2ac07f0065ff, "contentWindow", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => (U(λf6c891d792ce), λ9bc55efdd0c1.call(λf6c891d792ce))
    }), λ81bba0c38983.element.hookProperty(λ2ac07f0065ff, "contentDocument", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => (U(λf6c891d792ce), λ9bc55efdd0c1.call(λf6c891d792ce))
    }), λ81bba0c38983.element.hookProperty(λ2ac07f0065ff, "srcdoc", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ81bba0c38983.element.getAttribute.call(λf6c891d792ce, λ560da98aef47.attributePrefix + "-attr-srcdoc") || λ9bc55efdd0c1.call(λf6c891d792ce),
      set: (λ9bc55efdd0c1, λf6c891d792ce, [λ8c4bfb34271a]) => {
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.rewriteHtml(λ8c4bfb34271a, {
          document: !0,
          injectHead: λ560da98aef47.createHtmlInject(λ560da98aef47.handlerScript, λ560da98aef47.bundleScript, λ560da98aef47.clientScript, λ560da98aef47.configScript, λ1bb65cc42f96, λbe40e165f20e.location.href)
        }));
      }
    }), λ81bba0c38983.node.on("getTextContent", λ9bc55efdd0c1 => {
      switch (λ9bc55efdd0c1.that.tagName) {
       case "SCRIPT":
        λ9bc55efdd0c1.data.value = λ560da98aef47.js.source(λ9bc55efdd0c1.data.value);
        break;

       case "STYLE":
        λ9bc55efdd0c1.data.value = λ560da98aef47.sourceCSS(λ9bc55efdd0c1.data.value);
        break;

       default:
      }
    }), λ81bba0c38983.node.on("setTextContent", λ9bc55efdd0c1 => {
      switch (λ9bc55efdd0c1.that.tagName) {
       case "SCRIPT":
        λ9bc55efdd0c1.data.value = λ560da98aef47.js.rewrite(λ9bc55efdd0c1.data.value);
        break;

       case "STYLE":
        λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value);
        break;

       default:
      }
    }), "serviceWorker" in λbe40e165f20e.navigator && delete λbe40e165f20e.Navigator.prototype.serviceWorker, 
    λ81bba0c38983.document.on("getDomain", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.domain;
    }), λ81bba0c38983.document.on("setDomain", λ9bc55efdd0c1 => {
      if (!λ9bc55efdd0c1.data.value.toString().endsWith(λ560da98aef47.meta.url.hostname.split(".").slice(-2).join("."))) return λ9bc55efdd0c1.respondWith("");
      λ9bc55efdd0c1.respondWith(λ560da98aef47.domain = λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.document.on("url", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.location.href;
    }), λ81bba0c38983.document.on("documentURI", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.location.href;
    }), λ81bba0c38983.document.on("referrer", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.referrer || λ560da98aef47.sourceUrl(λ9bc55efdd0c1.data.value);
    }), λ81bba0c38983.document.on("parseFromString", λ9bc55efdd0c1 => {
      if (λ9bc55efdd0c1.data.type !== "text/html") return !1;
      λ9bc55efdd0c1.data.string = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.string, {
        ...λ560da98aef47.meta,
        document: !0
      });
    }), λ81bba0c38983.attribute.on("getValue", λ9bc55efdd0c1 => {
      λ81bba0c38983.element.hasAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name) && (λ9bc55efdd0c1.data.value = λ81bba0c38983.element.getAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name));
    }), λ81bba0c38983.attribute.on("setValue", λ9bc55efdd0c1 => {
      λ560da98aef47.attrs.isUrl(λ9bc55efdd0c1.data.name) && (λ81bba0c38983.element.setAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteUrl(λ9bc55efdd0c1.data.value)), 
      λ560da98aef47.attrs.isStyle(λ9bc55efdd0c1.data.name) && (λ81bba0c38983.element.setAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value, {
        context: "declarationList"
      })), λ560da98aef47.attrs.isHtml(λ9bc55efdd0c1.data.name) && (λ81bba0c38983.element.setAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteHtml(λ9bc55efdd0c1.data.value, {
        ...λ560da98aef47.meta,
        document: !0,
        injectHead: λ560da98aef47.createHtmlInject(λ560da98aef47.handlerScript, λ560da98aef47.bundleScript, λ560da98aef47.clientScript, λ560da98aef47.configScript, λ1bb65cc42f96, λbe40e165f20e.location.href)
      })), λ560da98aef47.attrs.isSrcset(λ9bc55efdd0c1.data.name) && (λ81bba0c38983.element.setAttribute.call(λ9bc55efdd0c1.that.ownerElement, λ560da98aef47.attributePrefix + "-attr-" + λ9bc55efdd0c1.data.name, λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.value = λ560da98aef47.html.wrapSrcset(λ9bc55efdd0c1.data.value.toString()));
    }), λ81bba0c38983.url.on("createObjectURL", λ9bc55efdd0c1 => {
      let λf6c891d792ce = λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ9bc55efdd0c1.data.object);
      if (λf6c891d792ce.startsWith("blob:" + location.origin)) {
        let λ8c4bfb34271a = "blob:" + (λ560da98aef47.meta.url.href !== "about:blank" ? λ560da98aef47.meta.url.origin : λbe40e165f20e.parent.__uv.meta.url.origin) + λf6c891d792ce.slice(5 + location.origin.length);
        λ560da98aef47.blobUrls.set(λ8c4bfb34271a, λf6c891d792ce), λ9bc55efdd0c1.respondWith(λ8c4bfb34271a);
      } else λ9bc55efdd0c1.respondWith(λf6c891d792ce);
    }), λ81bba0c38983.url.on("revokeObjectURL", λ9bc55efdd0c1 => {
      if (λ560da98aef47.blobUrls.has(λ9bc55efdd0c1.data.url)) {
        let λf6c891d792ce = λ9bc55efdd0c1.data.url;
        λ9bc55efdd0c1.data.url = λ560da98aef47.blobUrls.get(λ9bc55efdd0c1.data.url), λ560da98aef47.blobUrls.delete(λf6c891d792ce);
      }
    }), λ81bba0c38983.storage.on("get", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("set", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && (λ9bc55efdd0c1.that.__uv$storageObj[λ9bc55efdd0c1.data.name] = λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("delete", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && delete λ9bc55efdd0c1.that.__uv$storageObj[λ9bc55efdd0c1.data.name], 
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("getItem", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("setItem", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && (λ9bc55efdd0c1.that.__uv$storageObj[λ9bc55efdd0c1.data.name] = λ9bc55efdd0c1.data.value), 
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("removeItem", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && delete λ9bc55efdd0c1.that.__uv$storageObj[λ9bc55efdd0c1.data.name], 
      λ9bc55efdd0c1.data.name = λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λ9bc55efdd0c1.data.name;
    }), λ81bba0c38983.storage.on("clear", λ9bc55efdd0c1 => {
      if (λ9bc55efdd0c1.that.__uv$storageObj) for (let λf6c891d792ce of λ81bba0c38983.nativeMethods.keys.call(null, λ9bc55efdd0c1.that.__uv$storageObj)) delete λ9bc55efdd0c1.that.__uv$storageObj[λf6c891d792ce], 
      λ81bba0c38983.storage.removeItem.call(λ9bc55efdd0c1.that, λdf011e5d3fd1 + λ560da98aef47.meta.url.origin + "@" + λf6c891d792ce), 
      λ9bc55efdd0c1.respondWith();
    }), λ81bba0c38983.storage.on("length", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && λ9bc55efdd0c1.respondWith(λ81bba0c38983.nativeMethods.keys.call(null, λ9bc55efdd0c1.that.__uv$storageObj).length);
    }), λ81bba0c38983.storage.on("key", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.that.__uv$storageObj && λ9bc55efdd0c1.respondWith(λ81bba0c38983.nativeMethods.keys.call(null, λ9bc55efdd0c1.that.__uv$storageObj)[λ9bc55efdd0c1.data.index] || null);
    }), λ81bba0c38983.function.on("function", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.script = λ560da98aef47.rewriteJS(λ9bc55efdd0c1.data.script);
    }), λ81bba0c38983.function.on("toString", λ9bc55efdd0c1 => {
      λ560da98aef47.methods.string in λ9bc55efdd0c1.that && λ9bc55efdd0c1.respondWith(λ9bc55efdd0c1.that[λ560da98aef47.methods.string]);
    }), λ81bba0c38983.object.on("getOwnPropertyNames", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.names = λ9bc55efdd0c1.data.names.filter(λ9bc55efdd0c1 => !λ560da98aef47.filterKeys.includes(λ9bc55efdd0c1));
    }), λ81bba0c38983.object.on("getOwnPropertyDescriptors", λ9bc55efdd0c1 => {
      for (let λf6c891d792ce of λ560da98aef47.filterKeys) delete λ9bc55efdd0c1.data.descriptors[λf6c891d792ce];
    }), λ81bba0c38983.style.on("setProperty", λ9bc55efdd0c1 => {
      λ81bba0c38983.style.dashedUrlProps.includes(λ9bc55efdd0c1.data.property) && (λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value, {
        context: "value",
        ...λ560da98aef47.meta
      }));
    }), λ81bba0c38983.style.on("getPropertyValue", λ9bc55efdd0c1 => {
      λ81bba0c38983.style.dashedUrlProps.includes(λ9bc55efdd0c1.data.property) && λ9bc55efdd0c1.respondWith(λ560da98aef47.sourceCSS(λ9bc55efdd0c1.target.call(λ9bc55efdd0c1.that, λ9bc55efdd0c1.data.property), {
        context: "value",
        ...λ560da98aef47.meta
      }));
    }), "CSS2Properties" in λbe40e165f20e) for (let λ9bc55efdd0c1 of λ81bba0c38983.style.urlProps) λ81bba0c38983.overrideDescriptor(λbe40e165f20e.CSS2Properties.prototype, λ9bc55efdd0c1, {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => λ560da98aef47.sourceCSS(λ9bc55efdd0c1.call(λf6c891d792ce), {
        context: "value",
        ...λ560da98aef47.meta
      }),
      set: (λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a) => {
        λ9bc55efdd0c1.call(λf6c891d792ce, λ560da98aef47.rewriteCSS(λ8c4bfb34271a, {
          context: "value",
          ...λ560da98aef47.meta
        }));
      }
    }); else "HTMLElement" in λbe40e165f20e && λ81bba0c38983.overrideDescriptor(λbe40e165f20e.HTMLElement.prototype, "style", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => {
        let λ8c4bfb34271a = λ9bc55efdd0c1.call(λf6c891d792ce);
        if (!λ8c4bfb34271a[λdf011e5d3fd1 + "modifiedStyle"]) for (let λ9bc55efdd0c1 of λ81bba0c38983.style.urlProps) λ81bba0c38983.nativeMethods.defineProperty(λ8c4bfb34271a, λ9bc55efdd0c1, {
          enumerable: !0,
          configurable: !0,
          get() {
            let λf6c891d792ce = λ81bba0c38983.style.getPropertyValue.call(this, λ9bc55efdd0c1) || "";
            return λ560da98aef47.sourceCSS(λf6c891d792ce, {
              context: "value",
              ...λ560da98aef47.meta
            });
          },
          set(λf6c891d792ce) {
            λ81bba0c38983.style.setProperty.call(this, λ81bba0c38983.style.propToDashed[λ9bc55efdd0c1] || λ9bc55efdd0c1, λ560da98aef47.rewriteCSS(λf6c891d792ce, {
              context: "value",
              ...λ560da98aef47.meta
            }));
          }
        }), λ81bba0c38983.nativeMethods.defineProperty(λ8c4bfb34271a, λdf011e5d3fd1 + "modifiedStyle", {
          enumerable: !1,
          value: !0
        });
        return λ8c4bfb34271a;
      }
    });
    λ81bba0c38983.style.on("setCssText", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.rewriteCSS(λ9bc55efdd0c1.data.value, {
        context: "declarationList",
        ...λ560da98aef47.meta
      });
    }), λ81bba0c38983.style.on("getCssText", λ9bc55efdd0c1 => {
      λ9bc55efdd0c1.data.value = λ560da98aef47.sourceCSS(λ9bc55efdd0c1.data.value, {
        context: "declarationList",
        ...λ560da98aef47.meta
      });
    }), λ560da98aef47.addEventListener.call(λbe40e165f20e, "hashchange", λ9bc55efdd0c1 => {
      if (λ9bc55efdd0c1.__uv$dispatched) return !1;
      λ9bc55efdd0c1.stopImmediatePropagation();
      let λf6c891d792ce = λbe40e165f20e.location.hash;
      λ81bba0c38983.history.replaceState.call(λbe40e165f20e.history, "", "", λ9bc55efdd0c1.oldURL), 
      λ560da98aef47.location.hash = λf6c891d792ce;
    }), λ81bba0c38983.location.on("hashchange", (λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a) => {
      if (λ8c4bfb34271a.HashChangeEvent && λ81bba0c38983.history.replaceState) {
        λ81bba0c38983.history.replaceState.call(λbe40e165f20e.history, "", "", λ560da98aef47.rewriteUrl(λf6c891d792ce));
        let λa3a19cad6f90 = new λ8c4bfb34271a.HashChangeEvent("hashchange", {
          newURL: λf6c891d792ce,
          oldURL: λ9bc55efdd0c1
        });
        λ81bba0c38983.nativeMethods.defineProperty(λa3a19cad6f90, λdf011e5d3fd1 + "dispatched", {
          value: !0,
          enumerable: !1
        }), λ560da98aef47.dispatchEvent.call(λbe40e165f20e, λa3a19cad6f90);
      }
    }), λ81bba0c38983.fetch.overrideRequest(), λ81bba0c38983.fetch.overrideUrl(), λ81bba0c38983.xhr.overrideOpen(), 
    λ81bba0c38983.xhr.overrideResponseUrl(), λ81bba0c38983.element.overrideHtml(), λ81bba0c38983.element.overrideAttribute(), 
    λ81bba0c38983.element.overrideInsertAdjacentHTML(), λ81bba0c38983.element.overrideAudio(), 
    λ81bba0c38983.node.overrideBaseURI(), λ81bba0c38983.node.overrideTextContent(), 
    λ81bba0c38983.attribute.overrideNameValue(), λ81bba0c38983.document.overrideDomain(), 
    λ81bba0c38983.document.overrideURL(), λ81bba0c38983.document.overrideDocumentURI(), 
    λ81bba0c38983.document.overrideWrite(), λ81bba0c38983.document.overrideReferrer(), 
    λ81bba0c38983.document.overrideParseFromString(), λ81bba0c38983.storage.overrideMethods(), 
    λ81bba0c38983.storage.overrideLength(), λ81bba0c38983.object.overrideGetPropertyNames(), 
    λ81bba0c38983.object.overrideGetOwnPropertyDescriptors(), λ81bba0c38983.idb.overrideName(), 
    λ81bba0c38983.idb.overrideOpen(), λ81bba0c38983.history.overridePushState(), λ81bba0c38983.history.overrideReplaceState(), 
    λ81bba0c38983.eventSource.overrideConstruct(), λ81bba0c38983.eventSource.overrideUrl(), 
    λ81bba0c38983.websocket.overrideWebSocket(λf11cc63bdee0), λ81bba0c38983.url.overrideObjectURL(), 
    λ81bba0c38983.document.overrideCookie(), λ81bba0c38983.message.overridePostMessage(), 
    λ81bba0c38983.message.overrideMessageOrigin(), λ81bba0c38983.message.overrideMessageData(), 
    λ81bba0c38983.workers.overrideWorker(), λ81bba0c38983.workers.overrideAddModule(), 
    λ81bba0c38983.workers.overrideImportScripts(), λ81bba0c38983.workers.overridePostMessage(), 
    λ81bba0c38983.style.overrideSetGetProperty(), λ81bba0c38983.style.overrideCssText(), 
    λ81bba0c38983.navigator.overrideSendBeacon(), λ81bba0c38983.function.overrideFunction(), 
    λ81bba0c38983.function.overrideToString(), λ81bba0c38983.location.overrideWorkerLocation(λ9bc55efdd0c1 => new URL(λ560da98aef47.sourceUrl(λ9bc55efdd0c1))), 
    λ81bba0c38983.overrideDescriptor(λbe40e165f20e, "localStorage", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => (λf6c891d792ce || λbe40e165f20e).__uv.lsWrap
    }), λ81bba0c38983.overrideDescriptor(λbe40e165f20e, "sessionStorage", {
      get: (λ9bc55efdd0c1, λf6c891d792ce) => (λf6c891d792ce || λbe40e165f20e).__uv.ssWrap
    }), λ81bba0c38983.override(λbe40e165f20e, "open", (λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a) => {
      if (!λ8c4bfb34271a.length) return λ9bc55efdd0c1.apply(λf6c891d792ce, λ8c4bfb34271a);
      let [λa3a19cad6f90] = λ8c4bfb34271a;
      return λa3a19cad6f90 = λ560da98aef47.rewriteUrl(λa3a19cad6f90), λ9bc55efdd0c1.call(λf6c891d792ce, λa3a19cad6f90);
    }), λ560da98aef47.$wrap = function(λ9bc55efdd0c1) {
      return λ9bc55efdd0c1 === "location" ? λ560da98aef47.methods.location : λ9bc55efdd0c1 === "eval" ? λ560da98aef47.methods.eval : λ9bc55efdd0c1;
    }, λ560da98aef47.$get = function(λ9bc55efdd0c1) {
      return λ9bc55efdd0c1 === λbe40e165f20e.location ? λ560da98aef47.location : λ9bc55efdd0c1 === λbe40e165f20e.eval ? λ560da98aef47.eval : λ9bc55efdd0c1 === λbe40e165f20e.parent ? λbe40e165f20e.__uv$parent : λ9bc55efdd0c1 === λbe40e165f20e.top ? λbe40e165f20e.__uv$top : λ9bc55efdd0c1;
    }, λ560da98aef47.eval = λ81bba0c38983.wrap(λbe40e165f20e, "eval", (λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a) => {
      if (!λ8c4bfb34271a.length || typeof λ8c4bfb34271a[0] != "string") return λ9bc55efdd0c1.apply(λf6c891d792ce, λ8c4bfb34271a);
      let [λa3a19cad6f90] = λ8c4bfb34271a;
      return λa3a19cad6f90 = λ560da98aef47.rewriteJS(λa3a19cad6f90), λ9bc55efdd0c1.call(λf6c891d792ce, λa3a19cad6f90);
    }), λ560da98aef47.call = function(λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a) {
      return λ8c4bfb34271a ? λ9bc55efdd0c1.apply(λ8c4bfb34271a, λf6c891d792ce) : λ9bc55efdd0c1(...λf6c891d792ce);
    }, λ560da98aef47.call$ = function(λ9bc55efdd0c1, λf6c891d792ce, λ8c4bfb34271a = []) {
      return λ9bc55efdd0c1[λf6c891d792ce].apply(λ9bc55efdd0c1, λ8c4bfb34271a);
    }, λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λbc43523a1a63, {
      get: () => λ560da98aef47,
      enumerable: !1
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.setSource, {
      value: function(λ9bc55efdd0c1) {
        return λ81bba0c38983.nativeMethods.isExtensible(this) ? (λ81bba0c38983.nativeMethods.defineProperty(this, λ560da98aef47.methods.source, {
          value: λ9bc55efdd0c1,
          writable: !0,
          enumerable: !1
        }), this) : this;
      },
      enumerable: !1
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.source, {
      value: λ560da98aef47,
      writable: !0,
      enumerable: !1
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.location, {
      configurable: !0,
      get() {
        return this === λbe40e165f20e.document || this === λbe40e165f20e ? λ560da98aef47.location : this.location;
      },
      set(λ9bc55efdd0c1) {
        this === λbe40e165f20e.document || this === λbe40e165f20e ? λ560da98aef47.location.href = λ9bc55efdd0c1 : this.location = λ9bc55efdd0c1;
      }
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.parent, {
      configurable: !0,
      get() {
        let λ9bc55efdd0c1 = this.parent;
        if (this === λbe40e165f20e) try {
          return "__uv" in λ9bc55efdd0c1 ? λ9bc55efdd0c1 : this;
        } catch {
          return this;
        }
        return λ9bc55efdd0c1;
      },
      set(λ9bc55efdd0c1) {
        this.parent = λ9bc55efdd0c1;
      }
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.top, {
      configurable: !0,
      get() {
        let λ9bc55efdd0c1 = this.top;
        if (this === λbe40e165f20e) {
          if (λ9bc55efdd0c1 === this.parent) return this[λ560da98aef47.methods.parent];
          try {
            if ("__uv" in λ9bc55efdd0c1) return λ9bc55efdd0c1;
            {
              let λf6c891d792ce = this;
              for (;λf6c891d792ce.parent !== λ9bc55efdd0c1; ) λf6c891d792ce = λf6c891d792ce.parent;
              return "__uv" in λf6c891d792ce ? λf6c891d792ce : this;
            }
          } catch {
            return this;
          }
        }
        return λ9bc55efdd0c1;
      },
      set(λ9bc55efdd0c1) {
        this.top = λ9bc55efdd0c1;
      }
    }), λ81bba0c38983.nativeMethods.defineProperty(λbe40e165f20e.Object.prototype, λ560da98aef47.methods.eval, {
      configurable: !0,
      get() {
        return this === λbe40e165f20e ? λ560da98aef47.eval : this.eval;
      },
      set(λ9bc55efdd0c1) {
        this.eval = λ9bc55efdd0c1;
      }
    });
  }
})();
