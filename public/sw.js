if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SwlgJve7BwhHFzQDGtGy7/_buildManifest.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/SwlgJve7BwhHFzQDGtGy7/_ssgManifest.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/385-6701c82fd7ee1f16873f.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/470-2e5fb3a5935f5539c3e1.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/main-dc05f6a777bd1f810fad.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/pages/_app-8d57d80ce055d7bb3b03.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/pages/_error-e69890b6db18dcbc6fa4.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/pages/index-e51d873221f2c12bbf45.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/pages/pokedex-bdcc51ae6d4c3c921a07.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/pages/pokedex/%5Bname%5D-3a5080e36325dde7c1cf.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/polyfills-eef578260fd80f8fff94.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/chunks/webpack-189c53927ffd3caf09c3.js",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/css/243577bfc08a7024e7eb.css",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/css/855ba0eacc72b5da8ffe.css",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/css/8ab964e248bb3e0c9c77.css",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/_next/static/css/8df4162c2a1829d42d52.css",revision:"SwlgJve7BwhHFzQDGtGy7"},{url:"/android-chrome-192x192.png",revision:"babcb88274d4b36da8646bb523650ba7"},{url:"/android-chrome-512x512.png",revision:"ca5f15e3e627182b65059b76e43aa543"},{url:"/apple-touch-icon.png",revision:"9bedff5ca9d85a5ea0355388da62fcb5"},{url:"/favicon-16x16.png",revision:"c5e1bf9e14e758a3a6afa1c8db003a41"},{url:"/favicon-32x32.png",revision:"80aeca520187857f1c11e5ca95332dab"},{url:"/favicon.ico",revision:"725f15aa08c89bd56be16e5df98ed3d9"},{url:"/images/female.svg",revision:"c62e38a656bdf1080e0f8a903879e896"},{url:"/images/male.svg",revision:"7c61843b55f5364bf162c3e43794535c"},{url:"/images/pokeball-fill.svg",revision:"1c6e631e70d0aa7d85784cac027d43c9"},{url:"/images/pokeball.svg",revision:"b19d3412dcef287b474e835fc39e79b7"},{url:"/manifest.json",revision:"a96ff78f247a39f566f3552e4daf26ac"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
