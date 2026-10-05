importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λb65f09b0ad9a) {
  if (uv.route(λb65f09b0ad9a)) {
    return await uv.fetch(λb65f09b0ad9a);
  }
  return await fetch(λb65f09b0ad9a.request);
}

self.addEventListener("fetch", λb65f09b0ad9a => {
  λb65f09b0ad9a.respondWith(handleRequest(λb65f09b0ad9a));
});
