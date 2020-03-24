<template>
  <div class="listItem" :class="{ 'active': activeItem === item }" @click="selectLecture">
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: 'ListItem',
  data() {
    return {
      storeState: store.state,
      activeItem: ''
    }
  },
  props: {
    item: {
        type: Object,
        value: '',
    }
  },
  // computed: {
  //   isActive() {
  //     return this.storeState.selectedVideo;
  //   }
  // },
  methods: {
    selectLecture() {
      // console.log('test', this.item.title, this.storeState.selectedVideo.title);
      this.storeState.selectedVideo = this.item;
      this.activeItem = this.item;
      console.log('literally anything');
    },

  },
}

</script>

<style>
.listItem {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: white;
}
</style>