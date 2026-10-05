importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λe07d16105eed) {
  if (uv.route(λe07d16105eed)) {
    return await uv.fetch(λe07d16105eed);
  }
  return await fetch(λe07d16105eed.request);
}

self.addEventListener("fetch", λe07d16105eed => {
  λe07d16105eed.respondWith(handleRequest(λe07d16105eed));
});
