<script>
import ToolbarComponent from "./public/components/toolbar.component.vue";

export default {
  name: "app",
  components: {ToolbarComponent},
}

</script>

<template>
  <pv-toast/>
  <header>
    <toolbar-component/>
  </header>
  <div class="container">
    <router-view class="router-view" />
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 90.6vh;
}

.router-view {
  flex: 1;
  overflow-y: auto;
}
</style>