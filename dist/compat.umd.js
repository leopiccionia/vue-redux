!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).VueRedux={})}(this,function(t){"use strict";function e(t,e){return e.reduce(function(t,e){return t&&t[e]?t[e]:null},t)}var n={install:function(t){t.mixin({beforeCreate:function(){if(this.$options.store){var e=this.$options.store;this._storeRoot=this,this._store=e,t.util.defineReactive(e,"state",e.getState()),this.$options._storeUnsubscribe=e.subscribe(function(){e.state=e.getState()})}else this._storeRoot=this.$parent&&this.$parent._storeRoot||this},destroyed:function(){this.$options._storeUnsubscribe&&this.$options._storeUnsubscribe()}}),Object.defineProperty(t.prototype,"$store",{get:function(){return this._storeRoot._store}})}};t.VueRedux=n,t.mapActions=function(t){for(var e={},n=function(){var n=s[o];e[n]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];this.$store.dispatch(t[n].apply(t,e))}},o=0,s=Object.keys(t);o<s.length;o+=1)n();return e},t.mapState=function(t){var n={};if(Array.isArray(t))for(var o=function(){var t=r[s].split(".");n[t[t.length-1]]=function(){return e(this.$store.state,t)}},s=0,r=t;s<r.length;s+=1)o();else for(var i=function(){var o=f[u],s=t[o];if("function"==typeof s)n[o]=function(){return s(this.$store.state)};else{var r=s.split(".");n[o]=function(){return e(this.$store.state,r)}}},u=0,f=Object.keys[t];u<f.length;u+=1)i();return n},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=compat.umd.js.map
