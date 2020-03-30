<template>
  <div class="container">
    <VideoPlayer :items="items" class="video-player" />
    <List :items="items" class="list" />
  </div>
</template>

<script>
import List from './components/List.vue';
import VideoPlayer from './components/VideoPlayer.vue';
import { store } from "./store.js";


export default {
  name: 'App',
  components: {
    List,
    VideoPlayer,
  },
  data() {
    return {
      items: [],
      selectedVideo: store.state.selectedVideo,
    }
  },
  mounted: function () {
    fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.items = data;
    });
  },
}

</script>

<style>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
}

</style>
