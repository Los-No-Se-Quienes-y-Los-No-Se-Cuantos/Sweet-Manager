<script>
import {Notification} from "../models/notification.entity.js";
import {FilterMatchMode} from "primevue/api";
import {NotificationsApiService} from "../services/notifications-api.service.js";

export default {
  name: "notification-table",
  inheritAttrs: false,
  props:{
    items: [],
    dynamic:{type: Boolean, default: false},
    columns: []
  },
  data(){
    return{
      selectedItems: [],
      filters: null
    }
  },
  created(){
    this.initFilters();
  },
  methods:{
    initFilters(){
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    newItem(){
      this.$emit('new-item');
    },
  }
}
</script>

<template>

  <!-- Data Table Section -->
  <pv-data-table
      ref="dt"
      :paginator="true"
      :filte="filters"
      :rows-per-page-options="[5, 10, 20]"
      :value="items"
      current-page-report-template="Showing {first} to {last} of {totalRecords} Notifications"
      data-key="id">
    <template #header>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Notifications</span>
        <pv-button icon="pi pi-refresh" rounded raised />
      </div>
    </template>
    <pv-column v-if="dynamic" v-for="column in columns" :key="column" :field="column" :header="column.toUpperCase()"></pv-column>
    <slot name="notification-columns"></slot>
    <template #footer>En total hay {{items? items.length : 0}}</template>
  </pv-data-table>
</template>