importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ68190eac2579 => {
  λ68190eac2579.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ68190eac2579 => {
  λ68190eac2579.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ68190eac2579 => {
  λ68190eac2579.respondWith((async () => (await af, tf.route(λ68190eac2579) ? tf.fetch(λ68190eac2579) : fetch(λ68190eac2579.request)))());
});
