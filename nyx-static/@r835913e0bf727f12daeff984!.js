importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ0edbc0e677d0 => {
  λ0edbc0e677d0.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ0edbc0e677d0 => {
  λ0edbc0e677d0.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ0edbc0e677d0 => {
  λ0edbc0e677d0.respondWith((async () => (await af, tf.route(λ0edbc0e677d0) ? tf.fetch(λ0edbc0e677d0) : fetch(λ0edbc0e677d0.request)))());
});
