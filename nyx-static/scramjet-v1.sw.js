importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λb2cf64b1d63d => {
  λb2cf64b1d63d.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λb2cf64b1d63d => {
  λb2cf64b1d63d.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λb2cf64b1d63d => {
  λb2cf64b1d63d.respondWith((async () => (await af, tf.route(λb2cf64b1d63d) ? tf.fetch(λb2cf64b1d63d) : fetch(λb2cf64b1d63d.request)))());
});
