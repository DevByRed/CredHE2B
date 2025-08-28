// Nom du cache → incrémente quand tu modifies des fichiers importants
const CACHE_NAME = "credhe2b-cache-v1";

// Liste des fichiers à pré-cacher (adapté à ton arborescence)
const urlsToCache = [
  "/",
  "/index.html",

  // Styles
  "/style/style.css",
  "/style/cours.css",
  "/style/loader.css",
  "/style/mise_a_jour_panneau.css",
  "/style/pdf.css",
  "/style/popup.css",
  "/style/secretariat.css",
  "/style/offline.css",

  // Scripts
  "/script/script.js",
  "/script/cours.js",
  "/script/loader.js",
  "/script/pdf.js",
  "/script/popup.js",

  // Offline page
  "/offline.html",

  // PDF
  "/pdf/PdfCredESI.pdf",

  // Icônes PWA
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",

  // Logos
  "/img/Logo HE2B/Png/3.png",
  "/img/Logo HE2B/Png/4.png",
  "/img/Logo HE2B/Png/iconv2.png",

  // Logos campus
  "/img/campus/defre.png",
  "/img/campus/esi.png",
  "/img/campus/isessid.png",
  "/img/campus/isek.png",
  "/img/campus/ises.png",
  "/img/campus/isib.png",
];

// Installation → mise en cache initiale
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("📦 Mise en cache des fichiers initiaux");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activation → supprime les anciens caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("🗑️ Suppression ancien cache :", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch → stratégie stale-while-revalidate
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === "basic"
            ) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            if (event.request.mode === "navigate") {
              return cache.match("/offline.html");
            }
          });
        return cachedResponse || fetchPromise;
      });
    })
  );
});
