<template>
  <div class="videoPlayer">
      <h1>test</h1>
      <h2>{{storeState.selectedVideo.title}}</h2>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: 'List',
  data() {
    return {
      storeState: store.state,
    }
  },
  props: {
    selectedVideo: {
        type: Object,
        value: {},
    }
  }
}
</script>

<style>
.videoPlayer {
    background-color: lightblue;
    width: 100%;
}
</style>