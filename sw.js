// Service Worker para Radio App
// Permite funcionamiento en segundo plano y mejor gestión de MediaSession

const CACHE_NAME = 'radio-app-v1';
const urlsToCache = [
  '/',
  '/script.js',
  '/style.css',
  '/index.html'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests de red
self.addEventListener('fetch', (event) => {
  // Solo interceptar requests de audio/streaming
  if (event.request.url.includes('stream') || 
      event.request.url.includes('.aac') || 
      event.request.url.includes('.mp3') ||
      event.request.url.includes('radio.transmite.pe') ||
      event.request.url.includes('zeno.fm') ||
      event.request.url.includes('jml-stream.com') ||
      event.request.url.includes('conectperu.com') ||
      event.request.url.includes('my-control-panel.com') ||
      event.request.url.includes('rcast.net')) {
    
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Si la respuesta es exitosa, devolverla
          if (response.status === 200) {
            return response;
          }
          // Si hay error de red, intentar desde cache
          return caches.match(event.request);
        })
        .catch(() => {
          // Si falla completamente, devolver desde cache
          return caches.match(event.request);
        })
    );
  }
});

// Manejar mensajes del cliente principal
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'NETWORK_STATUS') {
    const isOnline = event.data.isOnline;
    console.log('Service Worker: Estado de red cambiado:', isOnline ? 'Online' : 'Offline');
    
    // Notificar a todos los clientes sobre el cambio de estado de red
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'NETWORK_STATUS_UPDATE',
          isOnline: isOnline
        });
      });
    });
  }
  
  if (event.data && event.data.type === 'MEDIA_SESSION_UPDATE') {
    console.log('Service Worker: Actualizando MediaSession en segundo plano');
    // Aquí podrías implementar lógica adicional para MediaSession
  }
});

// Manejar notificaciones push (para futuras funcionalidades)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || '/assets/RadioLaUncion.jpg',
      badge: '/assets/RadioLaUncion.jpg',
      tag: 'radio-notification',
      requireInteraction: true,
      actions: [
        {
          action: 'play',
          title: 'Reproducir',
          icon: '/assets/play-icon.png'
        },
        {
          action: 'pause',
          title: 'Pausar',
          icon: '/assets/pause-icon.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'play') {
    // Enviar mensaje al cliente para reproducir
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'NOTIFICATION_ACTION',
          action: 'play'
        });
      });
    });
  } else if (event.action === 'pause') {
    // Enviar mensaje al cliente para pausar
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'NOTIFICATION_ACTION',
          action: 'pause'
        });
      });
    });
  } else {
    // Abrir la aplicación
    event.waitUntil(
      self.clients.openWindow('/')
    );
  }
});

// Manejar sincronización en segundo plano
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Sincronización en segundo plano');
    event.waitUntil(
      // Aquí podrías implementar lógica de sincronización
      Promise.resolve()
    );
  }
});

// Manejar actualizaciones de la aplicación
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
