importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λc6afdae430d7) {
  if (uv.route(λc6afdae430d7)) {
    return await uv.fetch(λc6afdae430d7);
  }
  return await fetch(λc6afdae430d7.request);
}

self.addEventListener("fetch", λc6afdae430d7 => {
  λc6afdae430d7.respondWith(handleRequest(λc6afdae430d7));
});
