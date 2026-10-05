importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ7fee73ede4a8 => {
  λ7fee73ede4a8.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ7fee73ede4a8 => {
  λ7fee73ede4a8.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ7fee73ede4a8 => {
  λ7fee73ede4a8.respondWith((async () => (await af, tf.route(λ7fee73ede4a8) ? tf.fetch(λ7fee73ede4a8) : fetch(λ7fee73ede4a8.request)))());
});
