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

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    items: Array,
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
