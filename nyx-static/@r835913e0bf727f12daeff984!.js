importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ8027922c240d => {
  λ8027922c240d.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ8027922c240d => {
  λ8027922c240d.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ8027922c240d => {
  λ8027922c240d.respondWith((async () => (await af, tf.route(λ8027922c240d) ? tf.fetch(λ8027922c240d) : fetch(λ8027922c240d.request)))());
});
