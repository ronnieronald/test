/**
 * Service Worker para Radio Online
 * 
 * Este Service Worker tiene un propósito principal: mantener la aplicación web
 * "viva" tanto como sea posible cuando está en segundo plano en dispositivos móviles.
 * 
 * ¿Cómo funciona?
 * 1.  'install': Se instala y se activa inmediatamente. `skipWaiting()` asegura que la
 *     versión más reciente del Service Worker se active en cuanto se instala.
 * 
 * 2.  'activate': Una vez activo, toma control de la página. `clients.claim()` permite
 *     que el SW controle las páginas que ya están abiertas.
 * 
 * 3.  'fetch': Este es el truco principal. El Service Worker intercepta todas las
 *     peticiones de red de la página. Al responder con `fetch(event.request)`,
 *     simplemente deja que la petición continúe hacia la red.
 * 
 *     ¿Por qué es esto importante en móviles?
 *     Los navegadores móviles (especialmente en iOS) tienden a suspender las páginas
 *     en segundo plano para ahorrar batería. Sin embargo, si una página tiene un
 *     Service Worker activo que maneja eventos `fetch`, el navegador la considera
 *     más "importante" y es menos probable que la suspenda por completo.
 *     Esto ayuda a que la reproducción de audio continúe por más tiempo en
 *     segundo plano.
 */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simplemente pasamos la petición. Esto es suficiente para mantener el SW activo.
  event.respondWith(fetch(event.request));
});
