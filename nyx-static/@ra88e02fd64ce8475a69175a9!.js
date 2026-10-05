importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λb7e8abce9256 => {
  λb7e8abce9256.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λb7e8abce9256 => {
  λb7e8abce9256.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λb7e8abce9256 => {
  λb7e8abce9256.respondWith((async () => (await af, tf.route(λb7e8abce9256) ? tf.fetch(λb7e8abce9256) : fetch(λb7e8abce9256.request)))());
});
