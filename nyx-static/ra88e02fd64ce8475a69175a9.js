importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/scramjet.all.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ4c39bd466fe7 => {
  λ4c39bd466fe7.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ4c39bd466fe7 => {
  λ4c39bd466fe7.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ4c39bd466fe7 => {
  λ4c39bd466fe7.respondWith((async () => (await af, tf.route(λ4c39bd466fe7) ? tf.fetch(λ4c39bd466fe7) : fetch(λ4c39bd466fe7.request)))());
});
