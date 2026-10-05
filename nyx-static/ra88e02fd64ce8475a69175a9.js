importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ7410b3f18aa4 => {
  λ7410b3f18aa4.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ7410b3f18aa4 => {
  λ7410b3f18aa4.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ7410b3f18aa4 => {
  λ7410b3f18aa4.respondWith((async () => (await af, tf.route(λ7410b3f18aa4) ? tf.fetch(λ7410b3f18aa4) : fetch(λ7410b3f18aa4.request)))());
});
