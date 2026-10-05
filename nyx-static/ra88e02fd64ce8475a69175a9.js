importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λb7f2c3e7366c => {
  λb7f2c3e7366c.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λb7f2c3e7366c => {
  λb7f2c3e7366c.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λb7f2c3e7366c => {
  λb7f2c3e7366c.respondWith((async () => (await af, tf.route(λb7f2c3e7366c) ? tf.fetch(λb7f2c3e7366c) : fetch(λb7f2c3e7366c.request)))());
});
