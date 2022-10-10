const l = [
  "/_app/immutable/start-9687c927.js",
  "/_app/immutable/components/layout.svelte-bdef1c5c.js",
  "/_app/immutable/components/error.svelte-f77c365a.js",
  "/_app/immutable/components/pages/_page.svelte-042873ce.js",
  "/_app/immutable/modules/pages/_page.ts-e9fa0128.js",
  "/_app/immutable/chunks/singletons-bf25307e.js",
  "/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/_app/immutable/chunks/index-f5d486da.js",
  "/_app/immutable/chunks/stores-9dc9f783.js",
  "/_app/immutable/chunks/_page-00f5e062.js",
  "/_app/immutable/assets/_page-83f7c903.css",
  "/_app/immutable/chunks/_page-802cc2a3.js",
  "/_app/immutable/chunks/0-004366e5.js",
  "/_app/immutable/chunks/1-91980330.js",
  "/_app/immutable/chunks/2-e9adee45.js",
  "/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/_app/immutable/chunks/purify.es-20117e50.js",
  "/_app/immutable/chunks/index.es-d4deb38d.js"
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
  "/map-center.png",
  "/robots.txt",
  "/smui-dark.css",
  "/smui.css"
], i = "1665390162325", a = self, o = `cache${i}`, p = l.concat(h), u = new Set(p);
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), m = s.request.cache === "only-if-cached" && !n;
  t && !c && !m && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
