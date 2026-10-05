importScripts("@rf57c9d4258732e363cad638e!.js");

importScripts("@r932551243d2e8ebf430f2ac9!.js");

importScripts(__uv$config.sw || "@r07857cdbac02a78e5845521a!.js");

const uv = new UVServiceWorker;

async function handleRequest(λ012cfcc48fd9) {
  if (uv.route(λ012cfcc48fd9)) {
    return await uv.fetch(λ012cfcc48fd9);
  }
  return await fetch(λ012cfcc48fd9.request);
}

self.addEventListener("fetch", λ012cfcc48fd9 => {
  λ012cfcc48fd9.respondWith(handleRequest(λ012cfcc48fd9));
});
