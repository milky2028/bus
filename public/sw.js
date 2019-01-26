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
    "revision": "e19c9e2da957a8b5ec17401f53259988"
  },
  {
    "url": "index.html",
    "revision": "ec46f8e3e89564197a4a85a5336f0e1c"
  },
  {
    "url": "manifest.json",
    "revision": "4711501e452042f18d9c4efe7c49e049"
  },
  {
    "url": "style.css",
    "revision": "ea4d8a7dda55ebfe2ff272cfbfc232d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
