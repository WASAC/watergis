const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  s + "/_app/immutable/entry/app.519bfa51.js",
  s + "/_app/immutable/nodes/0.3195f0d1.js",
  s + "/_app/immutable/nodes/1.cdd23d27.js",
  s + "/_app/immutable/nodes/2.5d3d4cda.js",
  s + "/_app/immutable/assets/2.d75839b7.css",
  s + "/_app/immutable/chunks/2.8c07bef3.js",
  s + "/_app/immutable/chunks/index.63e035dc.js",
  s + "/_app/immutable/chunks/index.a0125d55.js",
  s + "/_app/immutable/chunks/index.b2d4e7d3.js",
  s + "/_app/immutable/chunks/preload-helper.a4192956.js",
  s + "/_app/immutable/chunks/scheduler.f1554297.js",
  s + "/_app/immutable/chunks/singletons.3d4028f6.js",
  s + "/_app/immutable/entry/start.2604b296.js",
  s + "/_app/immutable/chunks/index.es.99f6864c.js",
  s + "/_app/immutable/chunks/purify.es.cf254a40.js",
  s + "/_app/immutable/chunks/html2canvas.esm.e0a7d97b.js"
], u = [
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
], l = "1696022082947", i = `cache-${l}`, p = [
  ...o,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function n() {
    await (await caches.open(i)).addAll(p);
  }
  e.waitUntil(n());
});
self.addEventListener("activate", (e) => {
  async function n() {
    for (const a of await caches.keys())
      a !== i && await caches.delete(a);
  }
  e.waitUntil(n());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function n() {
    const a = new URL(e.request.url), t = await caches.open(i);
    if (p.includes(a.pathname))
      return t.match(a.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && t.put(e.request, c.clone()), c;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(n());
});