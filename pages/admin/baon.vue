<template>
  <v-app>
    <datatable
    :title="title"
    :headers="headers"
    :fields="formFields"
    :editedItem="editedItem"
    :defaultItem="defaultItem"
    >
    </datatable>
  </v-app>
</template>

<script>
import datatable from '../../components/datatable.vue'
export default {
  layout : 'lay1',
  components: { datatable },
    data () {
      return {
        title : 'baon',
        headers: [
          {text: 'ID', align: 'start',value: 'pid',},
          { text: 'Name', value: 'product' },
          { text: 'Category1', value: 'category1' },
          { text: 'Category2', value: 'category2' },
          { text: 'Price', value: 'price' },
          { text: 'Sale', value: 'sale' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        dialog: false,
        items: [] ,
        formFields: [
        {
          key: 'pid',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.pid',
          label: 'ID',
        },
        {
          key: 'product',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.product',
          label: 'Item name',
        },
        {
          key: 'category1',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.category1',
          label: 'Category1',
        },
        {
          key: 'category2',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.category2',
          label: 'Category2',
        },
        {
          key: 'price',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.price',
          label: 'Price',
        },
        {
          key: 'sale',
          editable: true,
          cols: '12',
          sm: '6',
          md: '4',
          value: 'editedItem.sale',
          label: 'Sale price',
        },
      ],
      editedItem: {
      pid: '',
      product: '',
      category1: '',
      category2: '',
      price: '',
      sale: '',
      },
    defaultItem: {
      pid: '',
      product: '',
      category1: '',
      category2: '',
      price: '',
      sale: '',
    },
      }
    },
    methods : {
      update(items){
        this.items = items;
      }
    }
}
</script>

<style>
  
</style>