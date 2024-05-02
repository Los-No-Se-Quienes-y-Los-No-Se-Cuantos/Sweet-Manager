<script>
import CreateAndEdit from "../../shared/components/create-and-edit.component.vue";

export default {
  name: "supply-item-create-and-edit-dialog",
  components: { CreateAndEdit },
  props: {
    item: null,
    visible: Boolean
  },
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    canceledEventHandler() {
      this.$emit('canceled');
    },
    savedEventHandler() {
    }
  }
}
</script>

<template>
  <create-and-edit :entity="item" :visible="visible" entityName="Supplies" @canceled="canceledEventHandler"
                   @saved="savedEventHandler">
    <template #content>
      <div class="p-fluid">

        <div class="field mt-5">
          <pv-float-label>
            <label for="product">Producto</label>
            <pv-input-text id="product" v-model="item.product" :class="{'p-invalid': submitted && !item.product}"/>
            <small v-if="submitted && !item.product" class="p-invalid">Product title is required.</small>
          </pv-float-label>
        </div>

        <div class="field mt-5">
          <pv-float-label>
            <label for="quantity">Cantidad</label>
            <pv-input-text id="quantity" v-model="item.quantity" :class="{'p-invalid': submitted && !item.quantity}"/>
            <small v-if="submitted && !item.quantity" class="p-invalid">Quantity is required.</small>
          </pv-float-label>
        </div>

        <div class="field mt-5">
          <pv-float-label>
            <label for="address">Ubicacion</label>
            <pv-input-text id="address" v-model="item.address" :class="{'p-invalid': submitted && !item.address}"/>
            <small v-if="submitted && !item.address" class="p-invalid">Address is required.</small>
          </pv-float-label>
        </div>

        <div class="field mt-5">
          <pv-float-label>
            <label for="expire">Fecha de vencimiento</label>
            <pv-input-text id="expire" v-model="item.expire" :class="{'p-invalid': submitted && !item.expire}"/>
            <small v-if="submitted && !item.expire" class="p-invalid">Expire date is required.</small>
          </pv-float-label>
        </div>

      </div>
    </template>
  </create-and-edit>
</template>