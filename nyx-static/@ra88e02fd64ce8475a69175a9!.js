importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/scramjet-v1/@r8715a1c8342daad7a22d138e!.js?v=nyx-sj-v1-ready-before-route-v5");

const {ScramjetServiceWorker: ef} = $scramjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ60bcc926cd2a => {
  λ60bcc926cd2a.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ60bcc926cd2a => {
  λ60bcc926cd2a.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ60bcc926cd2a => {
  λ60bcc926cd2a.respondWith((async () => (await af, tf.route(λ60bcc926cd2a) ? tf.fetch(λ60bcc926cd2a) : fetch(λ60bcc926cd2a.request)))());
});
