importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/nyx-cache-manifest.js");
const manifest = self.NYX_STATIC_CACHE;
const prefix = 'nyx-static-v1-';
const cacheName = prefix + manifest.version;
const assets = new Map(Object.entries(manifest.assets));
const limit = 64 * 1024 * 1024;
let current = true, checking, writes = Promise.resolve();

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const name of await caches.keys())
    if (name.startsWith(prefix) && name !== cacheName) await caches.delete(name);
  await self.clients.claim();
})()));

async function checkVersion() {
  if (!checking) checking = (async () => {
    try {
      const response = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/nyx-cache-version.json", {cache: 'no-store', credentials: 'omit'});
      if (!response.ok) return;
      const version = (await response.json()).version;
      if (version && version !== manifest.version) {
        current = false;
        await self.registration.update();
      }
    } catch { /* Keep the last complete version available when offline. */ }
  })().finally(() => {checking = null;});
  return checking;
}

function store(request, response, event) {
  if (!current || !response.ok || response.status !== 200 || response.type === 'opaque' ||
      /no-store|private/i.test(response.headers.get('cache-control') || '') ||
      response.headers.get('vary') === '*') return;
  const copy = response.clone();
  writes = writes.catch(() => {}).then(async () => {
    if (!current) return;
    const cache = await caches.open(cacheName);
    await cache.put(request, copy);
    const keys = await cache.keys();
    let bytes = keys.reduce((sum, key) => sum + (assets.get(new URL(key.url).pathname) || 0), 0);
    while (keys.length > 256 || bytes > limit) {
      const oldest = keys.shift();
      bytes -= assets.get(new URL(oldest.url).pathname) || 0;
      await cache.delete(oldest);
    }
  });
  event.waitUntil(writes.catch(() => {}));
}

self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin ||
      request.headers.has('authorization') || request.headers.has('range')) return;
  if (!assets.has(url.pathname)) {
    if (request.mode === 'navigate') event.respondWith((async () => {
      await checkVersion();
      return fetch(request);
    })());
    return;
  }
  event.respondWith((async () => {
    const navigation = request.mode === 'navigate';
    if (navigation) await checkVersion();
    if (!current) return fetch(request);
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (!navigation && cached) return cached;
    try {
      const response = await fetch(request);
      store(request, response, event);
      return response;
    } catch (error) {
      if (cached) return cached;
      throw error;
    }
  })());
});
