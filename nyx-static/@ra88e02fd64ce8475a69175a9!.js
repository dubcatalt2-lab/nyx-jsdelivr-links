importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ9a3a05b39ef0 => {
  λ9a3a05b39ef0.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ9a3a05b39ef0 => {
  λ9a3a05b39ef0.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ9a3a05b39ef0 => {
  λ9a3a05b39ef0.respondWith((async () => (await af, tf.route(λ9a3a05b39ef0) ? tf.fetch(λ9a3a05b39ef0) : fetch(λ9a3a05b39ef0.request)))());
});
