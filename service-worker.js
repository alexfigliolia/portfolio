"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","7f7f90529abe58afb6e94c486e66db2b"],["/portfolio/static/css/main.4ef11715.css","73b5a06ea9f3e51787eb8aa45405f9d9"],["/portfolio/static/js/main.07dc219e.js","5f181930883aec23596b1be94aeccece"],["/portfolio/static/media/COMPR.af8fd227.jpg","af8fd2278ff0bc1e8f77043caa4ada75"],["/portfolio/static/media/cityweb-small.fc624685.jpg","fc6246858fc67310e0f9fc4b80d2ae55"],["/portfolio/static/media/cityweb.ebb0edcb.jpg","ebb0edcb063f27c8e384a4d20ea14b0c"],["/portfolio/static/media/dog-small.b4692dee.jpg","b4692dee2ee1a651775c2165a0188c0f"],["/portfolio/static/media/dog.f0cbdb2c.jpg","f0cbdb2ca0a80c0f88857f0d9d99cda0"],["/portfolio/static/media/gnocchi-small.4db32229.jpg","4db32229a75f9e549353a58a0faa4833"],["/portfolio/static/media/gnocchi.076e386f.jpg","076e386f209bc23501d96c04c731bccd"],["/portfolio/static/media/nightsky-small.e5c09251.jpg","e5c0925158bb45f7a43dd17d8f0c27d6"],["/portfolio/static/media/nightsky.98da70e5.jpg","98da70e595bc329a0bfbc35ef080e355"],["/portfolio/static/media/prop-small.e0e0fa86.jpg","e0e0fa8633e76183062ad8722f0834c7"],["/portfolio/static/media/republic-large.d65ffcf0.jpg","d65ffcf0b35cfb3a8c4ffdcd9faa7a01"],["/portfolio/static/media/republic-small.bbf6c7c6.jpg","bbf6c7c6297a97dd86f9533c01757510"],["/portfolio/static/media/skedge-small.0dac0bca.jpg","0dac0bcacf9b3542087a82a937ad0292"],["/portfolio/static/media/tree-small.85bbbb3f.jpg","85bbbb3f51c600a6fff033404e7bb5bc"],["/portfolio/static/media/tree.f06e307b.jpg","f06e307b29a675d7968fc14a69763b21"],["/portfolio/static/media/winter1.57dc6a2b.jpg","57dc6a2b6d813b7aa54d1f9190548b71"],["/portfolio/static/media/winter3.b5fe43c6.jpg","b5fe43c6fd3a0bdcb1be097ce3ad7c48"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});