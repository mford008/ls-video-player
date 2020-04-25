<template>
  <div>
    <!-- <h1>{{ storeState.selectedVideo.title }}</h1> -->
    <div class="video-player">
      <iframe class="video-player-iframe" :src="`https://cdn.jwplayer.com/players/${storeState.selectedVideo.content}.html`"></iframe>
    </div>
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
}
</script>

<style>
.video-player {
  background-color: #292929;
  width: 100%;
  height: 100vh;
}

.video-player-iframe {
  height: 100vh !important;
  width: 100% !important;
}

</style>