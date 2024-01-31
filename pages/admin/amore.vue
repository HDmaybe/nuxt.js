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
          title : 'amore',
          headers: [
            {text: 'ID', align: 'start',value: 'pid',},
            { text: 'Name', value: 'product' },
            { text: 'Category', value: 'category' },
            { text: 'Brand', value: 'brand' },
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
            key: 'category',
            editable: true,
            cols: '12',
            sm: '6',
            md: '4',
            value: 'editedItem.category',
            label: 'Category',
          },
          {
            key: 'brand',
            editable: true,
            cols: '12',
            sm: '6',
            md: '4',
            value: 'editedItem.brand',
            label: 'Brand',
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
        category: '',
        brand: '',
        price: '',
        sale: '',
        },
      defaultItem: {
        pid: '',
        product: '',
        category: '',
        brand: '',
        price: '',
        sale: '',
      },
        }
      },
  }
  </script>
  
  <style>
    
  </style>