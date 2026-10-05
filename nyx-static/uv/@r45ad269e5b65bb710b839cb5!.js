importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λ372401319bb8) {
  if (uv.route(λ372401319bb8)) {
    return await uv.fetch(λ372401319bb8);
  }
  return await fetch(λ372401319bb8.request);
}

self.addEventListener("fetch", λ372401319bb8 => {
  λ372401319bb8.respondWith(handleRequest(λ372401319bb8));
});
