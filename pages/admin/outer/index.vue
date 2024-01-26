<template>
<div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Baon</v-toolbar-title>
          <v-spacer></v-spacer>
         
        </v-toolbar>
      </template>
      <template slot="item.actions" slot-scope={item}>
        <tr v-for="product in displayedProducts" :key="product.pid">
            <td>{{ product.pid }}</td>
            <td>{{ product.product }}</td>
            
        </tr>

        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(a)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <div class="page">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
</div>
  </template>
  
  <script>
    export default {
      data: () => ({
        headers: [
          { text: 'Name',align: 'start',value: '',},
          { text: 'Item_ID', value: '' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        items: []
        }),
        computed: {
        totalPages() {
        return this.$store.getters['totalPages'];
        },
        displayedProducts() {
        return this.$store.state.productList
        },
        currentPage() {
        return this.$store.state.currentPage;
        },
        },
        async mounted() {
        this.$store.dispatch('fetchProductList');
        },
        methods: {
        nextPage() {
            this.$store.dispatch('nextPage');
        },
        prevPage() {
            this.$store.dispatch('prevPage');
        },
        },
  
    }
  </script>

<style scoped>
.page {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
