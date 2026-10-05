importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ5bce15c84455 => {
  λ5bce15c84455.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ5bce15c84455 => {
  λ5bce15c84455.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ5bce15c84455 => {
  λ5bce15c84455.respondWith((async () => (await af, tf.route(λ5bce15c84455) ? tf.fetch(λ5bce15c84455) : fetch(λ5bce15c84455.request)))());
});
