<template>
  <div>
    <ul>
      <ListItem
        v-for="item in items"
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

</style>
