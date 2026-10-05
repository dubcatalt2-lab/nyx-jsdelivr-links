importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ21232f357cc9 => {
  λ21232f357cc9.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ21232f357cc9 => {
  λ21232f357cc9.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ21232f357cc9 => {
  λ21232f357cc9.respondWith((async () => (await af, tf.route(λ21232f357cc9) ? tf.fetch(λ21232f357cc9) : fetch(λ21232f357cc9.request)))());
});
