<script>
import ToolbarComponent from "./public/components/toolbar.component.vue";

export default {
  name: "app",
  components: {ToolbarComponent},
}

</script>

<template>
<!--  <pv-toast/>-->
  <header>
    <toolbar-component/>
  </header>
<!--  <router-view/>-->
</template>

<style scoped>

:root {
  margin: 0;
  padding: 0;
}
</style>