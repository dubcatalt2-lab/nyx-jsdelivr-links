importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λa457d910241a => {
  λa457d910241a.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λa457d910241a => {
  λa457d910241a.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λa457d910241a => {
  λa457d910241a.respondWith((async () => (await af, tf.route(λa457d910241a) ? tf.fetch(λa457d910241a) : fetch(λa457d910241a.request)))());
});
