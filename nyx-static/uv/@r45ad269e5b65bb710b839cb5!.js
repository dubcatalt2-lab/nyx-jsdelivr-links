importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λ96bcf4b5c3e8) {
  if (uv.route(λ96bcf4b5c3e8)) {
    return await uv.fetch(λ96bcf4b5c3e8);
  }
  return await fetch(λ96bcf4b5c3e8.request);
}

self.addEventListener("fetch", λ96bcf4b5c3e8 => {
  λ96bcf4b5c3e8.respondWith(handleRequest(λ96bcf4b5c3e8));
});
