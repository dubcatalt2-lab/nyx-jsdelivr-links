var ev = location.pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i), ov = ev?.[1] || "";

self.__uv$config = {
  prefix: ov ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${ov}/` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/",
  cookieDbName: ov ? `__nyx_uv_tab_${ov}` : "__op",
  bare: `${"https:" === location.protocol ? "wss:" : "ws:"}//${location.host}/resources/live/`,
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.handler.js",
  bundle: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js",
  config: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js",
  sw: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/stem-connect.sw.js?v=stem-connect-20261003",
  client: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.client.js"
};
