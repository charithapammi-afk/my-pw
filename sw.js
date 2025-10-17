self.addEventListener("install", () => {
  console.log("Service Worker installed");
});
self.addEventListener('fetch', e => { /* simple fetch handler optional */ });
