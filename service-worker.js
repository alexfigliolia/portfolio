"use strict";var precacheConfig=[["/portfolio/index.html","d1e27272e0ff3b2fe209c2b364f9d789"],["/portfolio/static/css/main.bb3b3018.css","5c3bc53e2ee44b1eefad7d88f7742b9f"],["/portfolio/static/js/main.076cc110.js","fe431cefa4d7ad4152f4e750a3729cfa"],["/portfolio/static/media/COMPR.75c30d93.jpg","75c30d9398bb2025b2b6ebb07303b750"],["/portfolio/static/media/cityweb-small.fc624685.jpg","fc6246858fc67310e0f9fc4b80d2ae55"],["/portfolio/static/media/cityweb.ebb0edcb.jpg","ebb0edcb063f27c8e384a4d20ea14b0c"],["/portfolio/static/media/dog-small.b4692dee.jpg","b4692dee2ee1a651775c2165a0188c0f"],["/portfolio/static/media/dog.19cf8ff2.jpg","19cf8ff218cdd8f51459bdf9e9ddd89e"],["/portfolio/static/media/gnocchi-small.32463de5.jpg","32463de5a46bef76762a262b51af83bb"],["/portfolio/static/media/gnocchi.076e386f.jpg","076e386f209bc23501d96c04c731bccd"],["/portfolio/static/media/nightsky-small.e5c09251.jpg","e5c0925158bb45f7a43dd17d8f0c27d6"],["/portfolio/static/media/nightsky.98da70e5.jpg","98da70e595bc329a0bfbc35ef080e355"],["/portfolio/static/media/react-desktop2.517efdab.jpg","517efdab99ceb6802093340cf408b045"],["/portfolio/static/media/react-small.1cf80252.jpg","1cf802527aea906b0e50f45dc5b12775"],["/portfolio/static/media/republic-large.d65ffcf0.jpg","d65ffcf0b35cfb3a8c4ffdcd9faa7a01"],["/portfolio/static/media/republic-small.bbf6c7c6.jpg","bbf6c7c6297a97dd86f9533c01757510"],["/portfolio/static/media/skedge-desktop2.bb8d483f.jpg","bb8d483fb06e8b82177e53af2129a411"],["/portfolio/static/media/skedge-small.fc733006.jpg","fc7330064457091f65e77ff41d38eb38"],["/portfolio/static/media/sv-large.e3583ba4.jpg","e3583ba4ecedb87b971ce24979722331"],["/portfolio/static/media/sv-small.0e44be24.jpg","0e44be243e57c8d329909ad9caedd360"],["/portfolio/static/media/tree-small.85bbbb3f.jpg","85bbbb3f51c600a6fff033404e7bb5bc"],["/portfolio/static/media/tree.f06e307b.jpg","f06e307b29a675d7968fc14a69763b21"],["/portfolio/static/media/winter1.57dc6a2b.jpg","57dc6a2b6d813b7aa54d1f9190548b71"],["/portfolio/static/media/winter3.b5fe43c6.jpg","b5fe43c6fd3a0bdcb1be097ce3ad7c48"],["/portfolio/static/media/wordClouds-small.bfdc87f3.png","bfdc87f37e3e74c617440ba527f497cd"],["/portfolio/static/media/wordClouds.f0afd889.png","f0afd889c6fac60edac122a7f70f2f2e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});