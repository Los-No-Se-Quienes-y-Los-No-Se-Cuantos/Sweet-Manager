<script>

export default {
  name: "profile-view",
  data() {
    return {
      name: 'Winston Smith',
      email: 'winston123@gmail.com',
      company: 'Peru Agro J & V S.A.C',
      role: 'Administrador',
      password: '*******',
      notifications: true,
    }
  }
}
</script>

<template>
  <pv-panel class="m-auto">
    <div class="flex flex-row">
      <div class="flex flex-column">
        <div class="flex align-items-center justify-content-center col-12 col-md-6 pb-0 mb-0">
          <h2>
            {{ $t('profile.view.title') }}
          </h2>
        </div>
        <div class="flex align-items-center justify-content-center col-auto max-h-3rem">
          <pv-avatar icon="pi pi-user" size="xlarge" shape="circle"/>
        </div>
      </div>
      <div class="flex flex-column ">
        <div class="col-12 col-md-6">
          {{ $t('profile.view.name') }}: {{ name }}
          {{ $t('profile.view.change-name') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.email') }}: {{ email }}
          {{ $t('profile.view.change-email') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.company') }}: {{ company }}
          {{ $t('profile.view.see-company') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.company-position') }}: {{ role }}
          {{ $t('profile.view.change-company-position') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.password') }}: {{ password }}
          {{ $t('profile.view.change-password') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.account') }}
          {{ $t('profile.view.delete-account') }}
        </div>
        <div class="col-12 col -md-6">
          {{ $t('profile.view.notifications') }}: {{ notifications}}
        </div>
        </div>
      </div>
  </pv-panel>
</template>

<style scoped>
.p-avatar-circle {
  color: #4D6543;
  border: 2px solid #4D6543;
}
</style>