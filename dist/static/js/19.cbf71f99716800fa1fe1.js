webpackJsonp([19],{"5hXV":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Headers",data:function(){return{}},computed:{logo:function(){return this.$store.state.logo},activeThemeIndex:function(){return this.$store.state.activeThemeIndex},headersContainerStyles:function(){return{backgroundColor:this.activeThemeIndex.join(";").indexOf("-1")>-1?"#FFFFFF":"transparent"}},settingsContainerStyles:function(){return{color:this.activeThemeIndex.join(";").indexOf("-1")>-1?"#515a6e":"#FFFFFF"}}},methods:{goHome:function(){this.$router.replace({name:"home"})},goSettings:function(){this.$router.replace({name:"settings"})}},components:{TopMenu:function(){return n.e(16).then(n.bind(null,"gVRg"))}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headers_container",style:this.headersContainerStyles},[e("div",{staticClass:"app_logo_container",on:{click:this.goHome}},[e("img",{attrs:{src:this.logo}})]),this._v(" "),e("div",{staticClass:"headers_right"},[e("top-menu"),this._v(" "),e("div",{staticClass:"settings_container"},[e("Tooltip",{attrs:{content:"打开设置 cmd/ctrl + o",placement:"bottom-end"}},[e("Icon",{style:this.settingsContainerStyles,attrs:{type:"ios-cog",size:"24"},on:{click:this.goSettings}})],1)],1)],1)])},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("A3Wo")},"data-v-032dfe37",null);e.default=i.exports},A3Wo:function(t,e){}});
//# sourceMappingURL=19.cbf71f99716800fa1fe1.js.map