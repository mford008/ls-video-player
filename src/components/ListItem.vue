<template>
  <div class="list-item" @click="selectLecture">
    <p class="list-item__content">{{ item.title }}</p>
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
  methods: {
    selectLecture() {
      this.storeState.selectedVideo = this.item;
      this.activeItem = this.item;
    },

  },
}

</script>

<style>
.list-item {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    color: white;
    background-color: #19b6fe;
    padding: 10px;
    border-top: 2px solid black;
}

.list-item:nth-last-child(1) {
  border-bottom: 2px solid black;
}

.list-item__content {
  margin: 0;
  margin-left: 1em;
}
.list-item--active {
  background-color: gray;
}
</style>