!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("react-dom/server")},function(e,r,t){"use strict";t.r(r);var n=t(2),o=t.n(n),i=t(3),u=t.n(i),l=t(1),c=t.n(l),a=t(0),f=t.n(a),s=t(4);function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=function(){var e=d(Object(a.useState)(!1),2),r=e[0],t=e[1];return f.a.createElement("div",null,f.a.createElement("h1",null,"Hello World"),f.a.createElement("p",null,"This is being server side rendered"),r&&f.a.createElement("div",null,"I was clicked"),f.a.createElement("button",{onClick:function(){return t(!r)}},"Click Me"))},b=c()();b.get("/",(function(e,r){b.use(c.a.static("public")),o.a.readFile(u.a.resolve("./dist/index.html"),"utf8",(function(e,t){return e?(console.error(e),r.status(500).send("An error occurred")):r.send(t.replace('<div id="root"></div>','<div id="root">'.concat(Object(s.renderToString)(f.a.createElement(y,null)),"</div>")))}))})),b.listen(3e3,(function(){console.log("listening on ".concat(3e3))}))}]);