parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nb58":[function(require,module,exports) {
const a=a=>{},e=a=>console.log(`Fulfilled after ${a}ms`);(void 0).then(e),(void 0).then(e),(void 0).then(e);const o=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!1}],n=(a,e,o)=>{o(a.map(a=>a.name===e?{...a,active:!a.active}:a))},t=(a,e)=>Math.floor(Math.random()*(e-a+1)+a),i=(a,e,o)=>{const n=t(200,500);setTimeout(()=>{Math.random()>.3?e({id:a.id,time:n}):o(a.id)},n)},s=({id:a,time:e})=>{console.log(`Transaction ${a} processed in ${e}ms`)},c=a=>{console.warn(`Error processing transaction ${a}. Please try again later.`)};
},{}]},{},["nb58"], null)
//# sourceMappingURL=/goit-js-hw-11/03-promisify.d33676f5.js.map