importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ941c3c13a510 => {
  λ941c3c13a510.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ941c3c13a510 => {
  λ941c3c13a510.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ941c3c13a510 => {
  λ941c3c13a510.respondWith((async () => (await af, tf.route(λ941c3c13a510) ? tf.fetch(λ941c3c13a510) : fetch(λ941c3c13a510.request)))());
});
