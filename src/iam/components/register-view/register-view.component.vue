<script>

export default {
  name: "register-view",
  data(){
    return {
      forgetPassword: 'Olvide mi contraseña',
      AceptTerm: true,
      register: 'Registrar empresa'
    }
  }
}
import { ref } from 'vue';
const value = ref('One-Way');

</script>

<template>
  <pv-card style="width: 40rem; overflow: hidden">
    <template #header>
    </template>
    <template #title>Bienvenido a Sweet Manager</template>
    <template #subtitle>Para disfrutar de la aplicación, por favor inicia sesión o registra una empresa .</template>
    <template #content>
      <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" invalid />
      </div>
      <br>

      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="RScompany" v-model="value" />
          <label for="RScompany">Razón social de la empresa</label>
        </FloatLabel>

      </div>
      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="RUC" v-model="value" />
          <label for="RUC">RUC</label>
        </FloatLabel>

      </div>
      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="Correo Electronico" v-model="value" />
          <label for="Correo Electronico">Correo Electronico</label>
        </FloatLabel>

      </div>
      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="Names" v-model="value" />
          <label for="Names">Nombres y apellidos del registrante</label>
        </FloatLabel>

      </div>
      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="passwordRegister" v-model="value" />
          <label for="passwordRegister">Contraseña del registrante</label>
        </FloatLabel>

      </div>

      <br> <br>
      Un carácter en mayúsculas y otro en minúsculas
      <br>- Un número
      <br>- Un carácter especial
      <br>- 8 carácteres mínimo


      <div class="col-100 col-md-1">
        <div class="flex flex-row align-items-center">
          <pv-checkbox class="mr-2" v-model="AceptTerm" binary/>

          <p>
            <strong class="text-1 mb-1 mr-4">
              {{ $t('He leído y acepto los términos y condiciones y politicas de privacidad') }}
            </strong>
          </p>
        </div>
      </div>
      <Button label= "register" class="flex-" />


    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">

      </div>
    </template>
  </pv-card>



</template>

<style >

</style>