  <template>
  <v-app>
    <datatable
      :title="title"
      :headers="headers"
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