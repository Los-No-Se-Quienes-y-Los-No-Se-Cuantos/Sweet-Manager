<script>

  export default {
    name: "login-view",
    data(){
      return {
        forgetPassword: 'Olvide mi contraseña',
        Recuerdame: true
      }
    }
  }
  import { ref } from 'vue';
  const value = ref('One-Way');
  const options = ref(['Iniciar Sesión', 'Registrar empresa']);
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
          <InputText id="username" v-model="value" />
          <label for="username">Correo Electronico</label>
        </FloatLabel>

      </div>
      <div class="card flex justify-content-center">
        <FloatLabel>
          <InputText id="password" v-model="value" />
          <label for="password">Contraseña</label>
        </FloatLabel>

      </div>
      <div class="col-12 col-md-4">
        <div class="flex flex-row align-items-center">
          <p>
            <strong class="mr-2">
              {{ $t('Recuerdame') }}:
            </strong>
          </p>
          <pv-checkbox class="" v-model="Recuerdame" binary/>
        </div>
      </div>
      <Button label= Iniciar sesion class="flex-" />


      <div class= "flex flex-column">
        <br>
        <a class="underline text-sm mb-1" href="#">
          {{$t('Olvidé mi contraseña')}}
        </a>
      </div>

    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">

      </div>
    </template>
  </pv-card>



</template>

<style >

</style>