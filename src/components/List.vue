<template>
  <div>
    <ul class="list">
      <ListItem
        v-for="item in items"
        :class="{'list-item--active' : storeState.selectedVideo.title === item.title }"
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
  props: {
    items: Array,
  },
}
</script>

<style>
.list {
  background-color: #19b6fe;
  padding: 0;
  margin: 0;
  height: 100vh;
}

</style>
