importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x63\x72\x61\x6d\x6a\x65\x74\x2d\x76\x31\x2f\x40\x72\x38\x37\x31\x35\x61\x31\x63\x38\x33\x34\x32\x64\x61\x61\x64\x37\x61\x32\x32\x64\x31\x33\x38\x65\x21\x2e\x6a\x73\x3f\x76\x3d\x6e\x79\x78\x2d\x73\x6a\x2d\x76\x31\x2d\x72\x65\x61\x64\x79\x2d\x62\x65\x66\x6f\x72\x65\x2d\x72\x6f\x75\x74\x65\x2d\x76\x35");

const {ScramjetServiceWorker: _0x63be1f_0} = $scramjetLoadWorker(), _0x63be1f_1 = new _0x63be1f_0, _0x63be1f_2 = _0x63be1f_1.loadConfig();

self.addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", λb27c83b8f945 => {
  λb27c83b8f945.waitUntil(self.skipWaiting());
}), self.addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λb27c83b8f945 => {
  λb27c83b8f945.waitUntil(self.clients.claim());
}), self.addEventListener("\x66\x65\x74\x63\x68", λb27c83b8f945 => {
  λb27c83b8f945.respondWith((async () => (await _0x63be1f_2, _0x63be1f_1.route(λb27c83b8f945) ? _0x63be1f_1.fetch(λb27c83b8f945) : fetch(λb27c83b8f945.request)))());
});
