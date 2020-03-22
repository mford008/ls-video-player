<template>
  <div class="listItem" @click="selectLecture">
    <h1>{{ item.title }}</h1>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: 'ListItem',
  data() {
    return {
      storeState: store.state,
    }
  },
  props: {
    item: {
        type: Object,
        value: '',
    }
  },
  methods: {
    selectLecture() {
      this.storeState.selectedVideo = this.item;
    }
  },
}

</script>

<style>
.listItem {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
}
</style>