<script>
import LanguageSwitcher from "./language-switcher.component.vue";
import {LoginService} from "../../iam/service/login-service.js";
import router from "../../router/index.js";

export default {
  name: "toolbar-component",
  components: {LanguageSwitcher},
  data() {
    return {
      loginService: null,
      items: [
        {label: 'Home', to: '/home'},
      ],
    }
  },
  created() {
    this.loginService = new LoginService();
  },
  computed: {
    // getUser() {
    //   return localStorage.getItem('token');
    //   // let user = await this.loginService.getLocalUser();
    //   // console.log(user)
    //   // return this.loginService.getLocalUserFromResponse(user.data);
    // },
  },
  methods: {
    logout() {
      this.loginService.logout();
      this.$router.push('/login');
    },
    sendToProfile() {
      router.push(
          {name: 'profile', params: {id: 1}}
      );
    }
  }
}
</script>

<template>
  <pv-toolbar class="bg-primary pt-1 pb-1" style="border-radius: 0;">
    <template #start>
      <h2>Sweet Manager</h2>
      <router-link key="panel" v-slot="{navigate, href}" to="/panel" class="ml-2">
        <pv-button :href="href" class="p-button-text text-white" @click="navigate">
          {{ $t('control-panel') }}
        </pv-button>
      </router-link>
    </template>

    <template #center>
      <language-switcher/>
    </template>

    <template #end>
      <div class="flex-column">

        <pv-button  class="p-button-text text-white" @click="sendToProfile()">
          Ola just test
        </pv-button>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>