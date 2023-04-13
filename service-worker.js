const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.9c0ea052.js",
  s + "/_app/immutable/chunks/0.ddfc3e45.js",
  s + "/_app/immutable/chunks/1.093627ef.js",
  s + "/_app/immutable/chunks/2.366c0444.js",
  s + "/_app/immutable/chunks/_page.2eaa1a45.js",
  s + "/_app/immutable/assets/_page.4674283d.css",
  s + "/_app/immutable/chunks/_page.7e4796dc.js",
  s + "/_app/immutable/chunks/index.244686b5.js",
  s + "/_app/immutable/chunks/index.95d721c5.js",
  s + "/_app/immutable/chunks/index.e3feca37.js",
  s + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  s + "/_app/immutable/chunks/singletons.1a2bdb8d.js",
  s + "/_app/immutable/entry/start.b33158ad.js",
  s + "/_app/immutable/entry/error.svelte.1f169f54.js",
  s + "/_app/immutable/entry/layout.svelte.7fbc008e.js",
  s + "/_app/immutable/chunks/index.es.7d29ad16.js",
  s + "/_app/immutable/chunks/purify.es.9f923ed6.js",
  s + "/_app/immutable/chunks/html2canvas.esm.0a33ed42.js",
  s + "/_app/immutable/entry/_page.svelte.ae81a49c.js",
  s + "/_app/immutable/entry/_page.ts.abce3f11.js"
], r = [
  s + "/.nojekyll",
  s + "/assets/icons/icon-128x128.png",
  s + "/assets/icons/icon-144x144.png",
  s + "/assets/icons/icon-152x152.png",
  s + "/assets/icons/icon-192x192.png",
  s + "/assets/icons/icon-384x384.png",
  s + "/assets/icons/icon-48x48.png",
  s + "/assets/icons/icon-512x512.png",
  s + "/assets/icons/icon-72x72.png",
  s + "/assets/icons/icon-96x96.png",
  s + "/assets/preview-1200x630.png",
  s + "/favicon.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], o = "1681357280436", n = self, p = `cache${o}`, l = m.concat(r), u = new Set(l);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function d(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), h = e.request.cache === "only-if-cached" && !i;
  a && !c && !h && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
