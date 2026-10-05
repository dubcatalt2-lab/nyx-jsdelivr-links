importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λ46456e754b48) {
  if (uv.route(λ46456e754b48)) {
    return await uv.fetch(λ46456e754b48);
  }
  return await fetch(λ46456e754b48.request);
}

self.addEventListener("fetch", λ46456e754b48 => {
  λ46456e754b48.respondWith(handleRequest(λ46456e754b48));
});
