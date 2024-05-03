<script>
  import i18n from "../../../i18n.js";

  export default {
    name: "login-view",
    computed: {
      i18n() {
        return i18n
      }
    },
    data() {
      return {
        email: "",
        password: "",
        remember: true,
      }
    },
  }
</script>

<template>
  <div class="mb-4 mt-2">
    <pv-float-label class="w-full">
      <pv-input-text v-model="email" :label="i18n.global.t('login-view.login-panel.email')" type="email" class="w-12" />
      <label slot="label">
        {{ i18n.global.t('login-view.login-panel.email')}}
        </label>
    </pv-float-label>
  </div>

  <div>
    <pv-float-label class="w-full">
      <pv-password v-model="password" :label="i18n.global.t('login-view.login-panel.password')" type="password" toggleMask :feedback="false" class="w-full"/>
      <label slot="label">
        {{ i18n.global.t('login-view.login-panel.password')}}
      </label>
    </pv-float-label>
  </div>

  <div class="mt-4">
    <pv-checkbox v-model="remember" aria-label="Remember me" id="remember_me" binary/>
    <label for="remember_me" class="ml-2">
      {{ i18n.global.t('login-view.login-panel.remember')}}
    </label>
  </div>

  <div class="mt-4 text-center align-content-center ">
    <pv-button class="w-10 border-round-3xl" :label="i18n.global.t('login-view.login-panel.login')" />
  </div>

  <div>
    <p class="text-center">
      <a href="#" class="text-blue-700 underline">
        {{ i18n.global.t('login-view.login-panel.forgot')}}
      </a>
    </p>
  </div>
</template>
<style >
</style>