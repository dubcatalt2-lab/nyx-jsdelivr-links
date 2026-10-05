importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ6ffdadfaf37f => {
  λ6ffdadfaf37f.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ6ffdadfaf37f => {
  λ6ffdadfaf37f.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ6ffdadfaf37f => {
  λ6ffdadfaf37f.respondWith((async () => (await af, tf.route(λ6ffdadfaf37f) ? tf.fetch(λ6ffdadfaf37f) : fetch(λ6ffdadfaf37f.request)))());
});
