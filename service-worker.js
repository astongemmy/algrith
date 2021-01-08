const allowed_cache = [
  '/',
  '/styles/App.css',
  '/styles/all.css',
];

const cache_name = "algrith-cache-v1";

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cache_name).then(function(cache) {
      return cache.addAll(allowed_cache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');
  const new_cache_name = [cache_name];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (new_cache_name.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cache_name).then(async function(cache) {
      const response = await fetch(event.request);
      // if (!cache.match(event.request.url)) {
      //     cache.add(event.request.url);
      // }
      caches.delete(cache_name);
      cache.put(event.request, response.clone());
      return response;
    })
  );
});*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
                
        console.log(`Fetching from ${event.request.url}`);
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(cache_name)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

/* self.addEventListener('push', function(event) {

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works service worker.',
    icon: '/Images/Logo/PAW.png',
    badge: '/Images/Logo/PAW.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
*/
