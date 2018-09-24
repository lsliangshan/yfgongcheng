<template>
  <div id="app" :style="appStyles">
    <router-view name="HomeRouter"/>
  </div>
</template>

<script>
import * as types from './store/mutation-types'
import { BrowserUtil } from './utils/index'
export default {
  name: 'App',
  data () {
    return {
      events: this.$store.state.events,
      bIsPc: BrowserUtil.isPc()
    }
  },
  created () {
    document.onclick = (e) => {
      this.$eventHub.$emit(this.events.bodyClick, e)
    }
    window.onresize = this.windowResize
    this.$nextTick(() => {
      this.cacheBodyStyles()
      this.$Message.config({
        top: 50,
        duration: 5
      })
    })
  },
  computed: {
    appStyles () {
      return {
        minWidth: (this.bIsPc ? '1000px' : '100%')
      }
    }
  },
  methods: {
    windowResize (e) {
      this.cacheBodyStyles()
      this.$eventHub.$emit(this.events.windowResize, e)
    },
    cacheBodyStyles () {
      this.$store.commit(types.SET_BODY_STYLES, {
        styles: {
          width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
      })
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    /*-webkit-user-select: none;*/
    font-family: Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
    /*font: 12px/16px Menlo,Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;*/
  }
  html, body {
    height: 100%;
  }
  #app {
    /*background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537032993978&di=921b9815b1aabefc0b60ba1de79fc70c&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201605%2F31%2F234941i5wc5mii0juw3iat.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: red;*/
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
