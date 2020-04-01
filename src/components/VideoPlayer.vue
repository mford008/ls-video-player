<template>
  <div>
    <vue-plyr>
      <h1>{{ storeState.selectedVideo.title }}</h1>
      <div class="video-player">
        <!-- <script src="https://cdn.jwplayer.com/players/MR3uTcIX-pqIEnat9.js"></script> -->
      <!-- <iframe src="https://cdn.jwplayer.com/players/4oE5ZjIY-MoGLPkuA.html"></iframe> -->
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