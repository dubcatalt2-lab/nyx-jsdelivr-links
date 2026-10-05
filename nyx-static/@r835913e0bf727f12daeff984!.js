importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ655c5d813c8b => {
  λ655c5d813c8b.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ655c5d813c8b => {
  λ655c5d813c8b.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ655c5d813c8b => {
  λ655c5d813c8b.respondWith((async () => (await af, tf.route(λ655c5d813c8b) ? tf.fetch(λ655c5d813c8b) : fetch(λ655c5d813c8b.request)))());
});
