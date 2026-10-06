importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λa7b31384ff5b => {
  λa7b31384ff5b.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λa7b31384ff5b => {
  λa7b31384ff5b.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λa7b31384ff5b => {
  λa7b31384ff5b.respondWith((async () => (await af, tf.route(λa7b31384ff5b) ? tf.fetch(λa7b31384ff5b) : fetch(λa7b31384ff5b.request)))());
});
