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
    "revision": "12a893147a4fc958d77673c96b1177a5"
  },
  {
    "url": "index.html",
    "revision": "7bca244f39665620dc983520d61328d8"
  },
  {
    "url": "manifest.json",
    "revision": "be1e0816c8ca4471e2c716635b932b3e"
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
