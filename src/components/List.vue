<template>
  <div>
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
      // activeItem: ''
    }
  },
  components: {
    ListItem
  },
  props: {
    items: Array,
  },
  // computed: {
  //   isActive(item) {
  //     this.activeItem = item;
  //   }
  // },
  // methods: {
  //   check() {
  //     // this.activeItem = this.item;
  //     // console.log('hello');
  //     // console.log(event);
  //   }
  // }
}
</script>

<style>
.list {
  background: #292929;
  padding: 0;
  margin: 0;
}
.listItem {
  border-top: 2px solid black;
}
</style>
