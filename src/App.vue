<template>
  <div class="container">
    <VideoPlayer :items="items" class="videoPlayer" />
    <List :items="items" class="list" />
  </div>
</template>

<script>
import List from './components/List.vue';
import VideoPlayer from './components/VideoPlayer.vue';

export default {
  name: 'App',
  components: {
    List,
    VideoPlayer,
  },
  data() {
    return {
      items: [],
    }
  },
  mounted: function () {
    fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.items = data;
    });
  }
}

</script>

<style>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
}


</style>
