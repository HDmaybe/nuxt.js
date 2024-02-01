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
  }
  </script>

  <style>
  
  </style>