importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x76\x31\x2f\x40\x72\x37\x66\x32\x62\x36\x33\x66\x34\x65\x62\x65\x63\x34\x62\x66\x37\x37\x33\x65\x35\x38\x65\x65\x37\x21\x2e\x6a\x73\x3f\x76\x3d\x6e\x79\x78\x2d\x73\x6a\x2d\x76\x31\x2d\x72\x65\x61\x64\x79\x2d\x62\x65\x66\x6f\x72\x65\x2d\x72\x6f\x75\x74\x65\x2d\x76\x35");

const {StudyJetServiceWorker: StudyJetServiceWorker} = $studyjetLoadWorker(), studyjet = new StudyJetServiceWorker, studyjetReady = studyjet.loadConfig();

self.addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", λfc41856e6561 => {
  λfc41856e6561.waitUntil(self.skipWaiting());
}), self.addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λfc41856e6561 => {
  λfc41856e6561.waitUntil(self.clients.claim());
}), self.addEventListener("\x66\x65\x74\x63\x68", λfc41856e6561 => {
  λfc41856e6561.respondWith((async () => (await studyjetReady, studyjet.route(λfc41856e6561) ? studyjet.fetch(λfc41856e6561) : fetch(λfc41856e6561.request)))());
});
