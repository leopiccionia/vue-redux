function t(t){for(var e={},r=function(){var r=n[s];e[r]=function(){for(var e=[],s=arguments.length;s--;)e[s]=arguments[s];this.$store.dispatch(t[r].apply(t,e))}},s=0,n=Object.keys(t);s<n.length;s+=1)r();return e}function e(t,e){return e.reduce(function(t,e){return t&&t[e]?t[e]:null},t)}function r(t){var r={};if(Array.isArray(t))for(var s=function(){var t=o[n].split(".");r[t[t.length-1]]=function(){return e(this.$store.state,t)}},n=0,o=t;n<o.length;n+=1)s();else for(var i=function(){var s=a[u],n=t[s];if("function"==typeof n)r[s]=function(){return n(this.$store.state)};else{var o=n.split(".");r[s]=function(){return e(this.$store.state,o)}}},u=0,a=Object.keys[t];u<a.length;u+=1)i();return r}var s={install:function(t){t.mixin({beforeCreate:function(){if(this.$options.store){var e=this.$options.store;this._storeRoot=this,this._store=e,t.util.defineReactive(e,"state",e.getState()),this.$options._storeUnsubscribe=e.subscribe(function(){e.state=e.getState()})}else this._storeRoot=this.$parent&&this.$parent._storeRoot||this},destroyed:function(){this.$options._storeUnsubscribe&&this.$options._storeUnsubscribe()}}),Object.defineProperty(t.prototype,"$store",{get:function(){return this._storeRoot._store}})}};export{s as VueRedux,t as mapActions,r as mapState};
//# sourceMappingURL=compat.js.map
