export const CACHE_NAME = 'cognitive-poc-results';

export const putToCache = async (cacheName, request, response) => {

    if ('caches' in window) {
        const cache = await caches.open(cacheName);
        cache.put(request, response);
    }

}

export const getFromCache = async (cacheName, request) => {

    if ('caches' in window) {
        const cache = await caches.open(cacheName);
        return await cache.match(request);
    }

}

