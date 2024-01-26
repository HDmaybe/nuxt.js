<template>
<div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
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
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="changePage"
    ></v-pagination>
</div>
  </template>
  
  <script>
    export default {
      data: () => ({
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'product',
          },
          { text: 'Item_ID', value: 'pid' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        currentPage: 1, // 현재 페이지
    totalPages: 1, // 전체 페이지 수
      }),
  
      created () {
        this.fetchProducts1();
      },
  
      methods: {

        async fetchProducts1() {
            await this.$store.dispatch('fetchProducts', this.currentPage);
        },

        changePage(page) {
      this.currentPage = page;
      this.fetchProducts1();
    },

        deleteItem(productId){
          this.$store.dispatch('deleteProduct',productId)
        }
      },
    }
  </script>