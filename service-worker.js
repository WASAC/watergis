const m = [
  "/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/_app/immutable/start-ccf8580b.js",
  "/_app/immutable/components/layout.svelte-55caf579.js",
  "/_app/immutable/components/error.svelte-1dd8a7be.js",
  "/_app/immutable/components/pages/_page.svelte-baae5c21.js",
  "/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/_app/immutable/chunks/singletons-b2db0fc5.js",
  "/_app/immutable/chunks/index-d0decbdb.js",
  "/_app/immutable/chunks/index-66f8fb1c.js",
  "/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/_app/immutable/chunks/_page-12ed81ee.js",
  "/_app/immutable/assets/_page-81ef0bcd.css",
  "/_app/immutable/chunks/_page-c82b235a.js",
  "/_app/immutable/chunks/0-b6419a9f.js",
  "/_app/immutable/chunks/1-50ebf77d.js",
  "/_app/immutable/chunks/2-29dc1a3f.js",
  "/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/_app/immutable/chunks/purify.es-88e864ff.js",
  "/_app/immutable/chunks/index.es-b7f52123.js"
], h = [
  "/.nojekyll",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-48x48.png",
  "/assets/icons/icon-512x512.png",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/favicon.png",
  "/manifest.webmanifest",
  "/robots.txt"
], i = "1668881772984", a = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== o && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const c = await e.match(s);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  t && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
