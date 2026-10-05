importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λfdeb228946bf) {
  if (uv.route(λfdeb228946bf)) {
    return await uv.fetch(λfdeb228946bf);
  }
  return await fetch(λfdeb228946bf.request);
}

self.addEventListener("fetch", λfdeb228946bf => {
  λfdeb228946bf.respondWith(handleRequest(λfdeb228946bf));
});
