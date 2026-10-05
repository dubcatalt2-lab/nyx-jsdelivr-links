importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λcc606933f0a7 => {
  λcc606933f0a7.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λcc606933f0a7 => {
  λcc606933f0a7.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λcc606933f0a7 => {
  λcc606933f0a7.respondWith((async () => (await af, tf.route(λcc606933f0a7) ? tf.fetch(λcc606933f0a7) : fetch(λcc606933f0a7.request)))());
});
