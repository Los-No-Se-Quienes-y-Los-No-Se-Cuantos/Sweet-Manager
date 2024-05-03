<script>
import i18n from "../../../i18n.js";

export default {
  name: "access-vue",
  computed: {
    i18n() {
      return i18n
    }
  }
}
</script>

<template>
  <div class="flex align-content-center justify-content-center flex-wrap">
    <p>
      {{ i18n.global.t('login-view.title')}}
    </p>
    <p>
      {{ i18n.global.t('login-view.subtitle')}}
      <a>
        {{ i18n.global.t('login-view.subtitle.link')}}
      </a>
    </p>
    <pv-tab-view class="border-round-3xl w-8">
      <pv-tab-panel :header="i18n.global.t('login-view.login')">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <!--      <login-view />-->
      </pv-tab-panel>
      <pv-tab-panel :header="i18n.global.t('login-view.signup')">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </pv-tab-panel>
    </pv-tab-view>
  </div>


</template>

<style scoped>
div {
  background-image: url("../../../assets/img/hotel-background.jpg");
  background-size: cover;
}
</style>