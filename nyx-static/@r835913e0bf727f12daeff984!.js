importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ740131c2b75d => {
  λ740131c2b75d.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ740131c2b75d => {
  λ740131c2b75d.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ740131c2b75d => {
  λ740131c2b75d.respondWith((async () => (await af, tf.route(λ740131c2b75d) ? tf.fetch(λ740131c2b75d) : fetch(λ740131c2b75d.request)))());
});
