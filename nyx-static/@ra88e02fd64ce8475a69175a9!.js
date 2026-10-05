importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ965df8adc1b4 => {
  λ965df8adc1b4.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ965df8adc1b4 => {
  λ965df8adc1b4.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ965df8adc1b4 => {
  λ965df8adc1b4.respondWith((async () => (await af, tf.route(λ965df8adc1b4) ? tf.fetch(λ965df8adc1b4) : fetch(λ965df8adc1b4.request)))());
});
