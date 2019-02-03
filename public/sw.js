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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b44ea57a3ce0963074b1aff1239f614b"
  },
  {
    "url": "app.js",
    "revision": "781c98723f062934790f4fdf7d7fd7ba"
  },
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
    "revision": "3bf4e1911cffed1a275727269223b1ae"
  },
  {
    "url": "manifest.json",
    "revision": "dbbac57df1de660adf63a3bc5eb749c3"
  },
  {
    "url": "styles/app.css",
    "revision": "ea4d8a7dda55ebfe2ff272cfbfc232d8"
  },
  {
    "url": "styles/loader.css",
    "revision": "86b2f50ad1bd8b564fd731dd28f96f34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
