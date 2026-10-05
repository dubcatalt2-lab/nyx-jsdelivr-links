importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ7e3a98db72fc => {
  λ7e3a98db72fc.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ7e3a98db72fc => {
  λ7e3a98db72fc.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ7e3a98db72fc => {
  λ7e3a98db72fc.respondWith((async () => (await af, tf.route(λ7e3a98db72fc) ? tf.fetch(λ7e3a98db72fc) : fetch(λ7e3a98db72fc.request)))());
});
