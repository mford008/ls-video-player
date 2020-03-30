<template>
  <div>
    <vue-plyr>
      <h1>{{ storeState.selectedVideo.title }}</h1>
      <div class="video-player">
        <!-- TODO: find appropriate tag for video -->
        <!-- <iframe
          src="selectedVideo"
          allowfullscreen allowtransparency>
        </iframe> -->
      </div>
    </vue-plyr>
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
}
</script>

<style>
.video-player {
  background-color: #292929;
  width: 100%;
  height: 100vh;
}

</style>