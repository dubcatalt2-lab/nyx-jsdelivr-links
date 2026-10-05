importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet-v1/@r7f2b63f4ebec4bf773e58ee7!.js?v=nyx-sj-v1-ready-before-route-v5");

const {StudyJetServiceWorker: ef} = $studyjetLoadWorker(), tf = new ef, af = tf.loadConfig();

self.addEventListener("install", λ6a07a795cdfd => {
  λ6a07a795cdfd.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ6a07a795cdfd => {
  λ6a07a795cdfd.waitUntil(self.clients.claim());
}), self.addEventListener("fetch", λ6a07a795cdfd => {
  λ6a07a795cdfd.respondWith((async () => (await af, tf.route(λ6a07a795cdfd) ? tf.fetch(λ6a07a795cdfd) : fetch(λ6a07a795cdfd.request)))());
});
