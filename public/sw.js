/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/icons/192x192.png",
    "revision": "bfa79be9d5478fce08790433a4d6d680"
  },
  {
    "url": "img/icons/512x512.png",
    "revision": "1f8b48ffe2446714268979b877290220"
  },
  {
    "url": "index.html",
    "revision": "cb5519c771fa0f2c1540047bd7d78885"
  },
  {
    "url": "js/app.js",
    "revision": "91522c8926615380009e26bbe4d7abfe"
  },
  {
    "url": "manifest.json",
    "revision": "77765421e44303e41ef43cc351fd99eb"
  },
  {
    "url": "styles/app.css",
    "revision": "d7c236ff05c660cd7a910f26c385998c"
  },
  {
    "url": "styles/loader.css",
    "revision": "4080d86f71cbcd6308cb6f245a89dabe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
