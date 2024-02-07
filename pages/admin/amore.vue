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
          {text: '이미지',  align: 'center',value: 'image'},
          { text: '상품명', value: 'product' },
          { text: '카테고리', value: 'category' },
          { text: '브랜드', value: 'brand' },
          { text: '가격', value: 'price' },
          { text: '세일가', value: 'sale' },
          { text: '바로가기', align: 'center',value: 'url'},
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