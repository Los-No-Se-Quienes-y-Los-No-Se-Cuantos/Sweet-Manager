<script>

export default {
  name: "profile-view",
  props: {
    is_user: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      name: 'Winston Smith',
      email: 'winston123@gmail.com',
      company: 'Peru Agro J & V S.A.C',
      role: 'Administrador',
      password: '*******',
      notifications: true,
    }
  },
}
</script>

<template>
  <pv-panel class="m-auto">
    <div class="flex flex-row w-full">
      <div class="flex flex-column mr-5 w-4">
        <div class="flex align-items-center justify-content-center col-12 col-md-6 pb-0 mb-0">
          <h2>
            {{ is_user ? $t('profile.view.title') : name }}
          </h2>
        </div>
        <div class="flex align-items-center justify-content-center col-auto max-h-3rem">
          <pv-avatar icon="pi pi-user" size="xlarge" shape="circle"/>
        </div>
      </div>
      <div class="flex flex-column flex-auto">
        <div class="col-12 col-md-6">
          <div class="flex flex-column">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.name') }}:
              </strong>
              {{ name }}
            </p>
            <a class="underline text-sm mb-1" href="#">
              {{ $t('profile.view.change-name') }}
            </a>
          </div>
          <pv-divider class="mt-2 mb-0 pb-0"/>
        </div>
        <div class="col-12 col-md-6">
          <div class="flex flex-column">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.email') }}:
              </strong>
              {{ email }}
            </p>
            <a class="underline text-sm mb-1" href="#">
              {{ $t('profile.view.change-email') }}
            </a>
          </div>
          <pv-divider class="mt-2 mb-0 pb-0"/>
        </div>
        <div class="col-12 col-md-6">
          <div class="flex flex-column">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.company') }}:
              </strong>
              {{ company }}
            </p>
            <a class="underline text-sm mb-1" href="#">
              {{ $t('profile.view.see-company') }}
            </a>
          </div>
          <pv-divider class="mt-2 mb-0 pb-0"/>
        </div>
        <div class="col-12 col-md-6">
          <div class="flex flex-column">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.company-position') }}:
              </strong>
              {{ role }}
            </p>
            <a class="underline text-sm mb-1" href="#">
              {{ $t('profile.view.change-company-position') }}
            </a>
          </div>
          <pv-divider class="mt-2 mb-0 pb-0"/>
        </div>

        <div v-if="is_user" class="col-12 col-md-6">
          <div class="flex flex-column">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.password') }}:
              </strong>
              {{ password }}
            </p>
            <a class="underline text-sm mb-1" href="#">
              {{ $t('profile.view.change-password') }}
            </a>
          </div>
          <pv-divider class="mt-2 mb-0 pb-0"/>
        </div>

        <div class="col-12 col-md-6">
          <div class="flex flex-column">
            <p class="mb-1">
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.account') }}
              </strong>
            </p>
            <a class="underline text-sm" style="color: red">
              {{ is_user ? $t('profile.view.delete-account') : $t('profile.employee.delete-from-company') }}
            </a>
          </div>

        </div>
        <div v-if="is_user" class="col-12 col-md-6">
          <div class="flex flex-row align-items-center">
            <p>
              <strong class="text-2xl mr-3">
                {{ $t('profile.view.notifications') }}:
              </strong>
            </p>
            <pv-checkbox class="bg-green-500" v-model="notifications" binary/>
          </div>
        </div>
      </div>
    </div>
  </pv-panel>
</template>

<style scoped>
a {
  color: #5E936E;
}

.p-avatar-circle {
  color: #4D6543;
  border: 2px solid #4D6543;
}

.p-divider-horizontal {
  border-top: 1px solid #4D6543;
}

:deep(.p-checkbox-input:checked + .p-checkbox-box) {
  background-color: #4D6543;
}

:deep(.p-checkbox-box) {
  border: 2px solid #4D6543;
}
</style>