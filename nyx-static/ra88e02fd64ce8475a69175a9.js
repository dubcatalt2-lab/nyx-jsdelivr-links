importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ437da43f9952 => {
  λ437da43f9952.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ437da43f9952 => {
  λ437da43f9952.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ437da43f9952 => {
  λ437da43f9952.respondWith((async () => (await af, tf.route(λ437da43f9952) ? tf.fetch(λ437da43f9952) : fetch(λ437da43f9952.request)))());
});
