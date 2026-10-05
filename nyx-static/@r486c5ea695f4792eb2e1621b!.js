var ev = location.pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i), ov = ev?.[1] || "";

self.__uv$config = {
  prefix: ov ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${ov}/` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/",
  cookieDbName: ov ? `__nyx_uv_tab_${ov}` : "__op",
  bare: `${"https:" === location.protocol ? "wss:" : "ws:"}//${location.host}/resources/live/`,
  encodeUrl: StemConnect.codec.xor.encode,
  decodeUrl: StemConnect.codec.xor.decode,
  handler: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rb7b4684c8c66dc8ca5ac1ca3!.js",
  bundle: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js",
  config: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js",
  sw: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/stem-connect.sw.js?v=stem-connect-20261003",
  client: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r99a9ccf2c1bd6b90c6560453!.js"
};
