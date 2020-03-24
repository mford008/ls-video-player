<template>
  <div class="videoPlayer">
      <h2>{{storeState.selectedVideo.title}}</h2>
      <!-- <div v-html="storeState.selectedVideo.content"></div> -->
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: 'List',
  data() {
    return {
      storeState: store.state,
      selectedVideo: store.state.selectedVideo.content,
    }
  },
  // props: {
  //   selectedVideo: {
  //       type: Object,
  //       value: {},
  //   }
  // },
  // methods: {
  //   rawHTML() {
  //     return this.storeState.selectedVideo.content;
  //   }
  // }
}
</script>

<style>
.videoPlayer {
    background-color: lightblue;
    width: 100%;
}
</style>