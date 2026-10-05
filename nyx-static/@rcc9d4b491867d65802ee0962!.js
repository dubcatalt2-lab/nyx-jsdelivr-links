var ev = location.pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i), ov = ev?.[1] || "";

self.__uv$config = {
  prefix: ov ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${ov}/` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/",
  cookieDbName: ov ? `__nyx_uv_tab_${ov}` : "__op",
  bare: `${"https:" === location.protocol ? "wss:" : "ws:"}//${location.host}/resources/live/`,
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r5f6f8134851c0afa523f3418!.js",
  bundle: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js",
  config: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js",
  sw: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/stem-connect.sw.js?v=stem-connect-20261003",
  client: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r42c774ffdcafe25ba4bc311a!.js"
};
