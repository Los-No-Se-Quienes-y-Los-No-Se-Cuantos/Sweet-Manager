<script>
import {Notification} from "../models/notification.entity.js";
import {FilterMatchMode} from "primevue/api";
import {NotificationsApiService} from "../services/notifications-api.service.js";

export default {
  name: "notification-table",
  inheritAttrs: false,
  props:{
    items: {type: Array, required: true},
    title: {type: {singular: '', plural: ''}, required: true},
    dynamic: {type: Boolean, default: false}
  },
  data(){
    return{
      filters: null,
      selectedItems: [],
      items: [],
      notificationsApi : new NotificationsApiService()
    }
  },
  created(){
    this.initFilters();
    this.initConfiguration();
  },
  methods:{
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },

    async initConfiguration() {
      let jsonData = await this.notificationsApi.getNotifications();
      this.items = this.buildNotificationsListFromResponse(jsonData);
    },

    buildNotificationsListFromResponse(response){
      return response.map(item => new Notification(item));
    }
  }
}
</script>

<template>

  <!-- Data Table Section -->
  <pv-data-table
      ref="dt"
      v-model:selection="selectedItems"
      :filters="filters"
      :paginator="true"
      :rows-per-page-options="[5, 10, 20]"
      :value="items"
      data-key="id"
      paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown">
    <template #header>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Notifications</span>
        <pv-button icon="pi pi-refresh" rounded raised />
      </div>
    </template>
    <pv-column field="id" header="Id"></pv-column>
    <pv-column field="title" header="Titulo"></pv-column>
    <pv-column field="message" header="Mensaje"></pv-column>
    <pv-column field="date" header="Fecha de recibo"></pv-column>
  </pv-data-table>

</template>