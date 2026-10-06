importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ280af7f9d795 => {
  λ280af7f9d795.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ280af7f9d795 => {
  λ280af7f9d795.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ280af7f9d795 => {
  λ280af7f9d795.respondWith((async () => (await af, tf.route(λ280af7f9d795) ? tf.fetch(λ280af7f9d795) : fetch(λ280af7f9d795.request)))());
});
