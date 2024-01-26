<template>
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in displayedProducts" :key="product.pid">
            <td>{{ product.pid }}</td>
            <td>{{ product.product }}</td>
            
          </tr>
        </tbody>
      </table>
      <div class="page">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  };
  </script>
  
  <style scoped>
  .page {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  