<script>
const defaultStyle = { width: '450px'};

export default {
  name: "create-and-edit",
  props: { entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default' },
  data() {
    return {submitted: false}
  },
  methods: {
    onCancel() {
      this.$emit('canceled');
    },
    onSave() {
      this.$emit('saved',this.entity);
    },
    getHeaderTitle() {
      return `${this.edit?'Edit':'New'} ${this.entityName}`;
    },
    getSubmitLabel() {
      return this.edit?'Update':'Create';
    },
    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px'} : defaultStyle;
      dialogStyle = this.size === 'large' ? { width: '900px'} : defaultStyle;
      return dialogStyle;
    },
    canceledEventHandler() {
      this.$emit('canceled');
    },
    savedEventHandler() {
      console.log(this.item);
      this.submitted = true;
      if (this.item.title) {
        this.$emit('saved', this.item);
      }
    }
  }
}
</script>

<template>
  <!-- Create / Update Dialog -->
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="p-fluid" :header="entityName">
    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSave"/>
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times" @click="onCancel"/>
      </div>
    </template>
  </pv-dialog>

  <create-and-edit :entity="entity" :visible="visible" entityName="Supply" @canceled="canceledEventHandler"
                   @saved="savedEventHandler">
    <template #content>
      <div class="p-fluid">
        <div class="field mt-5">
          <pv-float-label>
            <label for="product">Producto</label>
            <pv-input-text id="product" v-model="entity.product" :class="{'p-invalid': submitted && !entity.product}"/>
            <small v-if="submitted && !entity.product" class="p-invalid">Product title is required.</small>
          </pv-float-label>
        </div>
        <div class="p-field mt-5">
          <pv-float-label>
            <label for="quantity">Cantidad</label>
            <input id="quantity" v-model="entity.quantity" class="p-inputtext p-component" type="text"/>
          </pv-float-label>
        </div>
        <div class="p-field mt-5">
          <pv-float-label>
            <label for="address">Ubicacion</label>
            <input id="address" v-model="entity.address" class="p-inputtext p-component" type="text"/>
          </pv-float-label>
        </div>
        <div class="p-field mt-5">
          <pv-float-label>
            <label for="expire">Fecha de vencimiento</label>
            <input id="expire" v-model="entity.expire" class="p-inputtext p-component" type="datetime-local"/>
          </pv-float-label>
        </div>
      </div>
    </template>
  </create-and-edit>
</template>