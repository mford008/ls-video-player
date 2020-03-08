<template>
  <div class="listItem">
    <h1>{{ item.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
        type: Object,
        value: '',
    }
  }
  
}
</script>

<style>
.listItem {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
}
</style>