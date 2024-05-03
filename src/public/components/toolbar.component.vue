<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-component",
  components: {LanguageSwitcher},
  data() {
    return {
      drawer: false,
      items: [
        // {label: 'Home', to: '/home'},
      ],
    }
  }
}
</script>

<template>
  <pv-toolbar class="bg-primary pt-1 pb-1" style="border-radius: 0;">
    <template #start>
      <h2>Sweet Manager</h2>
    </template>

    <template #center>
      <language-switcher/>
    </template>

    <template #end>
      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>