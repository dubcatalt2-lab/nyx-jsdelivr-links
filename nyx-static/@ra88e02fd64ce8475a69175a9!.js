importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x63\x72\x61\x6d\x6a\x65\x74\x2d\x76\x31\x2f\x40\x72\x38\x37\x31\x35\x61\x31\x63\x38\x33\x34\x32\x64\x61\x61\x64\x37\x61\x32\x32\x64\x31\x33\x38\x65\x21\x2e\x6a\x73\x3f\x76\x3d\x6e\x79\x78\x2d\x73\x6a\x2d\x76\x31\x2d\x72\x65\x61\x64\x79\x2d\x62\x65\x66\x6f\x72\x65\x2d\x72\x6f\x75\x74\x65\x2d\x76\x35");

const {\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{53}\u{65}\u{72}\u{76}\u{69}\u{63}\u{65}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}: \u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{53}\u{65}\u{72}\u{76}\u{69}\u{63}\u{65}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}} = \u{24}\u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{4c}\u{6f}\u{61}\u{64}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}(), \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74} = new \u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{53}\u{65}\u{72}\u{76}\u{69}\u{63}\u{65}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}, \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{52}\u{65}\u{61}\u{64}\u{79} = \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}.loadConfig();

self.addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", λa2d715bad4dd => {
  λa2d715bad4dd.waitUntil(self.skipWaiting());
}), self.addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λa2d715bad4dd => {
  λa2d715bad4dd.waitUntil(self.clients.claim());
}), self.addEventListener("\x66\x65\x74\x63\x68", λa2d715bad4dd => {
  λa2d715bad4dd.respondWith((async () => (await \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{52}\u{65}\u{61}\u{64}\u{79}, \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}.route(λa2d715bad4dd) ? \u{73}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}.fetch(λa2d715bad4dd) : fetch(λa2d715bad4dd.request)))());
});
