<template>
  <div class="container">
    <!-- v-html="linkfromlecture" -->
    <VideoPlayer :items="items" :selectedVideo="selectedVideo" class="videoPlayer" />
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
      console.log(data);
      console.log('store', store);
      this.items = data;
    });
  },
  // methods: {
  //   updateVideo() {
    // TODO: set up as watch
  //     this.selectedVideo = store.state.selectedVideo;
  //     console.log('from app new video', store.state.selectedVideo);
  //   },
  // }
}

</script>

<style>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
}


</style>
