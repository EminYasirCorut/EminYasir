const CACHE ='eyasircorut.github.io'
const FILES = [ 'eyasircorut.github.io/termproject/','eyasircorut.github.io/termproject/TermProject.html'
, 'eyasircorut.github.io/termproject/minesweeper.js',
 'eyasircorut.github.io/termproject/sw.js', 'eyasircorut.github.io/termproject/manifest.json','eyasircorut.github.io/termproject/may.png']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}

self.addEventListener('install',installCB)

function cacheCB(e) { //cache first
  let req = e.request
  e.respondWith(
    caches.match(req)
    .then(r1 => r1 || fetch(req))
    .catch(console.log)
  )
}
self.addEventListener('fetch', cacheCB)