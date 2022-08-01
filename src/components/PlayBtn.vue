<template>
  <f7-button large x-small @click="playSound"  ><f7-icon f7="play"></f7-icon></f7-button>

</template>

<script>
import {StreamingMedia}  from '@awesome-cordova-plugins/streaming-media';

export default {
  props:['item'],
  name: "PlayBtn",
  methods:{
    playSound(){
      StreamingMedia.playAudio("https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_WAV_1MG.wav",
          {
            initFullscreen:false
          });
    }
  }
}
</script>

<style scoped>

</style>