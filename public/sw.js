if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-843f4dd0"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-21cb73vxgeegQ3_PRncY/_buildManifest.js",revision:"d722ae9f606fbef089d119f9fb59fde6"},{url:"/_next/static/-21cb73vxgeegQ3_PRncY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/276.83c352aaf221454f.js",revision:"83c352aaf221454f"},{url:"/_next/static/chunks/390.a35582b7661a16b1.js",revision:"a35582b7661a16b1"},{url:"/_next/static/chunks/403-d9f3404c840e8b80.js",revision:"d9f3404c840e8b80"},{url:"/_next/static/chunks/53.6da3c194abf870ac.js",revision:"6da3c194abf870ac"},{url:"/_next/static/chunks/648.8da8c300da75e23e.js",revision:"8da8c300da75e23e"},{url:"/_next/static/chunks/677-88dd6211ae8b8864.js",revision:"88dd6211ae8b8864"},{url:"/_next/static/chunks/91-1f8898c642b7ac75.js",revision:"1f8898c642b7ac75"},{url:"/_next/static/chunks/967-b30385eb19e99db0.js",revision:"b30385eb19e99db0"},{url:"/_next/static/chunks/framework-175841f4691ed708.js",revision:"175841f4691ed708"},{url:"/_next/static/chunks/main-612a37b4f496c7c3.js",revision:"612a37b4f496c7c3"},{url:"/_next/static/chunks/pages/_app-4f4a551f0b51bebb.js",revision:"4f4a551f0b51bebb"},{url:"/_next/static/chunks/pages/_error-0cb129c3d8638582.js",revision:"0cb129c3d8638582"},{url:"/_next/static/chunks/pages/auth/login-9896ce350515f347.js",revision:"9896ce350515f347"},{url:"/_next/static/chunks/pages/collection-412cc3fd2f637ccc.js",revision:"412cc3fd2f637ccc"},{url:"/_next/static/chunks/pages/discord-81e0e53cdf85103c.js",revision:"81e0e53cdf85103c"},{url:"/_next/static/chunks/pages/drag-eda9890731d27e26.js",revision:"eda9890731d27e26"},{url:"/_next/static/chunks/pages/game-3346d3bc90fc1c1f.js",revision:"3346d3bc90fc1c1f"},{url:"/_next/static/chunks/pages/home-a7e4a6c252e3c1ce.js",revision:"a7e4a6c252e3c1ce"},{url:"/_next/static/chunks/pages/index-b2e475cc9a430015.js",revision:"b2e475cc9a430015"},{url:"/_next/static/chunks/pages/island-da48530fa139c2eb.js",revision:"da48530fa139c2eb"},{url:"/_next/static/chunks/pages/login-20a9262ac429feeb.js",revision:"20a9262ac429feeb"},{url:"/_next/static/chunks/pages/mypage-04f290d81bdd21ab.js",revision:"04f290d81bdd21ab"},{url:"/_next/static/chunks/pages/notice-36143eb683d202cb.js",revision:"36143eb683d202cb"},{url:"/_next/static/chunks/pages/signup-3cdb681ee7648b40.js",revision:"3cdb681ee7648b40"},{url:"/_next/static/chunks/pages/visit-0d612627bb431ac3.js",revision:"0d612627bb431ac3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-68288ef913da1e86.js",revision:"68288ef913da1e86"},{url:"/_next/static/css/07a098635536dd3e.css",revision:"07a098635536dd3e"},{url:"/_next/static/css/e019d541c1002377.css",revision:"e019d541c1002377"},{url:"/_next/static/media/YdestreetB.8710bbd0.woff",revision:"8710bbd0"},{url:"/_next/static/media/YdestreetL.f0bdaf0a.woff",revision:"f0bdaf0a"},{url:"/assets/background/bubble.svg",revision:"2d48371ad11bf0543b3dcc9812260586"},{url:"/assets/background/island.svg",revision:"ec6b5b97eec3a425e2756855dbfe639f"},{url:"/assets/background/triangle.svg",revision:"00a43ec9e82d2c46528224085a1c8b39"},{url:"/assets/card/clear.svg",revision:"6d8b5ef60c44e7550d28ad202925270a"},{url:"/assets/card/faceDown.svg",revision:"87362d54568bb22f171693046ea45dea"},{url:"/assets/green/collection.svg",revision:"e8ce33ccc84d4bcfdbdef75eda3a4cbd"},{url:"/assets/green/edit.svg",revision:"35e969b0b72557aaea0a076782173e2e"},{url:"/assets/green/game.svg",revision:"9258e659c27a3ee117cb2d2f64fb095e"},{url:"/assets/green/island.svg",revision:"fea9799a7afa5cd1fc8404b2380b23fb"},{url:"/assets/green/search.svg",revision:"88736574799648eced01e4d766beeba5"},{url:"/assets/green/squiggly.svg",revision:"8b137d4c0f6858c5e69c70a59afdb9a8"},{url:"/assets/green/success.svg",revision:"5a3e7d75b52483d7f943351762c3e02b"},{url:"/assets/green/visit.svg",revision:"29f652e000da0e508e4d6883acd250c0"},{url:"/assets/land/friend.svg",revision:"c29b9de8bf15d634a14a7235272b360b"},{url:"/assets/land/loading.svg",revision:"17b9be6061b9953b93d6876c6002cdfa"},{url:"/assets/land/thumbnail/1.png",revision:"9f97da14b29628dd42f65fed785efb0b"},{url:"/assets/land/thumbnail/2.png",revision:"5a8ceedd2b19e0a3c707be6805924834"},{url:"/assets/land/thumbnail/3.png",revision:"f5f9a1d0c2adcdbcb7cfc77ad02a29ae"},{url:"/assets/logo/primary.svg",revision:"c68a88b7ffaf353be5a6656b01aabe27"},{url:"/assets/logo/secondary.svg",revision:"01488b6ed32ed46b0ed3f44c5b7dc8ed"},{url:"/assets/triangle/header.svg",revision:"e4db139efaa6b3ec6e4235004ce750c6"},{url:"/assets/triangle/original.svg",revision:"1f307faa5e1c5a9b940ac1aa8ccb706e"},{url:"/assets/triangle/reversed.svg",revision:"511ea31afbe7f9a6877ccb6e5b034b39"},{url:"/assets/yellow/card.svg",revision:"b5d7301dfa8e3454b21203986a55817d"},{url:"/assets/yellow/collection.svg",revision:"62e6c9cf46a5bb740d8b132706773816"},{url:"/assets/yellow/edit.svg",revision:"d4cd677af44a5617e7916d2f50f6ed6b"},{url:"/assets/yellow/game.svg",revision:"360fb53f9bf2f12ab04b150faee6fcc5"},{url:"/assets/yellow/island.svg",revision:"1dd54f5d2f6ced31cf1ebcc162c014aa"},{url:"/assets/yellow/marked.svg",revision:"5942b20dc1b02cdbe9c36a8dac5d11e3"},{url:"/assets/yellow/visit.svg",revision:"0442888e6a71e72314a916807a8644e8"},{url:"/assets/yellow/warning.svg",revision:"ce15ac4b3ff656bb7817f3bed61f73c0"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/YdestreetB.woff",revision:"d4b2cfda583172d9ad469df834475890"},{url:"/fonts/YdestreetL.woff",revision:"a6626b31dbb71044f5636c7b8604d711"},{url:"/fonts/style.css",revision:"a043e643294055fd3254cba3ca9e5de8"},{url:"/icon.png",revision:"9dab26b54979774cd91f5207c8b9eb3a"},{url:"/mockServiceWorker.js",revision:"b1d59f6727414cf12dad419cba3c15fa"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
