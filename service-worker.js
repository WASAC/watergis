const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  s + "/_app/immutable/entry/app.19436535.js",
  s + "/_app/immutable/nodes/0.34bf2741.js",
  s + "/_app/immutable/nodes/1.16396af6.js",
  s + "/_app/immutable/nodes/2.acba6656.js",
  s + "/_app/immutable/assets/2.6f830f43.css",
  s + "/_app/immutable/chunks/2.d001b9a3.js",
  s + "/_app/immutable/chunks/index.40e11da7.js",
  s + "/_app/immutable/chunks/index.a2095ca8.js",
  s + "/_app/immutable/chunks/preload-helper.a4192956.js",
  s + "/_app/immutable/chunks/scheduler.c37387d0.js",
  s + "/_app/immutable/chunks/singletons.79225d70.js",
  s + "/_app/immutable/chunks/stores.984ec711.js",
  s + "/_app/immutable/entry/start.5eca675f.js",
  s + "/_app/immutable/chunks/index.es.1dfbcf35.js",
  s + "/_app/immutable/chunks/purify.es.cf254a40.js",
  s + "/_app/immutable/chunks/html2canvas.esm.e0a7d97b.js"
], p = [
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
  s + "/assets/tutorial/attr-table-selectbox.png",
  s + "/assets/tutorial/eye-solid.svg",
  s + "/assets/tutorial/isochrone-example.png",
  s + "/assets/tutorial/isochrone-tool.png",
  s + "/assets/tutorial/magnifying-glass-plus-solid.svg",
  s + "/assets/tutorial/measure-tool.png",
  s + "/assets/tutorial/palette-solid.svg",
  s + "/assets/tutorial/routing-tool.png",
  s + "/assets/tutorial/style-switcher.png",
  s + "/assets/tutorial/up-down-left-right-solid.svg",
  s + "/favicon.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], u = "1696089457303", c = `cache-${u}`, o = [
  ...l,
  // the app itself
  ...p
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function e() {
    await (await caches.open(c)).addAll(o);
  }
  t.waitUntil(e());
});
self.addEventListener("activate", (t) => {
  async function e() {
    for (const a of await caches.keys())
      a !== c && await caches.delete(a);
  }
  t.waitUntil(e());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function e() {
    const a = new URL(t.request.url), n = await caches.open(c);
    if (o.includes(a.pathname))
      return n.match(a.pathname);
    try {
      const i = await fetch(t.request);
      return i.status === 200 && n.put(t.request, i.clone()), i;
    } catch {
      return n.match(t.request);
    }
  }
  t.respondWith(e());
});
