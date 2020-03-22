<template>
  <div>
    <h1 @click="check" >Selected: {{ this.lectureName() }}</h1>
    <ul class="list">
      <ListItem
        v-for="item in items"
        class="listItem"
        :item="item"
        :key="item.id">
      </ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import { store } from "../store.js";

export default {
  name: 'List',
  data() {
    return {
      storeState: store.state,
    }
  },
  components: {
    ListItem
  },
  // data() {
  //   return {
  //     selectedVideo: store.state.selectedVideo,
  //   }
  // },
  props: {
    items: Array,
    // selectedVideo: {
    //   type: Object,
    //   value: store.state.selectedVideo,
    // }
  },
  methods: {
    check() {
      console.log('store.state.selected', store.state.selectedVideo);
    },

    lectureName() {
      return this.storeState.selectedVideo.title;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list {
  background: gray;
  padding: 0;
  margin: 0;
  /* border-left: 2px solid black; */
}
.listItem {
  border-top: 2px solid black;
}
</style>
