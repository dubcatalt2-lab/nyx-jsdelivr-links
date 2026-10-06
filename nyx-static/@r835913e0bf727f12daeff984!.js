importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λbd212de6873d => {
  λbd212de6873d.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λbd212de6873d => {
  λbd212de6873d.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λbd212de6873d => {
  λbd212de6873d.respondWith((async () => (await af, tf.route(λbd212de6873d) ? tf.fetch(λbd212de6873d) : fetch(λbd212de6873d.request)))());
});
