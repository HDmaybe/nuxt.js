<template>
    <div>
    <v-data-table
      :headers="headers"
      :items="displayedProducts"
      :hide-default-footer=true
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title style="font-weight: 700">{{title}}</v-toolbar-title>
          
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >      
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
  
                <v-card-text>
                    <v-container>
                        <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-if="editedIndex === -1"
                        v-model="editedItem.pid"
                        label="ID"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.product"
                        label="Item name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.category"
                        label="Category1"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.brand"
                        label="Category2"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.price"
                        label="Price"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.sale"
                        label="Sale price"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                    </v-container>
                </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

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
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <div v-if="duplicateProductIdMessage" class="error-message">
      {{ duplicateProductIdMessage }}
      </div>
    </v-data-table>
    <v-pagination
    v-model="currentPage"
    :length="totalPages"
    @next="nextPage"
    @input="handlePageChange"
    @previous="prevPage"
    total-visible="10"
    style="margin-top: 25px;"
    > 
    </v-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editedIndex : -1,
            dialogDelete: false,
            dialog : false,
        };
    },

    computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    totalPages() {
        return this.$store.getters['totalPages'];
      },
      displayedProducts() {
        return this.$store.state.productList
      },
      currentPage() {
      return this.$store.state.currentPage;
      },
      duplicateProductIdMessage() {
      return this.$store.state.duplicateProductIdMessage;
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

    props : {
        headers: Array,
        // items: Array,
        title: String,
        fields: Array,
        editedItem: Object,
        defaultItem: Object,
    },

    created () {
        this.$store.dispatch('fetchProductList',this.title);
        // this.items = this.displayedProducts;
        // this.new();
    },

    async mounted() {
        await this.$store.dispatch('fetchProductList',this.title);
        // this.items = this.displayedProducts;
        // this.new();
    },

    methods: {
    
    async handlePageChange(newPage){
      // await this.$store.dispatch('updatePage', newPage);
      await this.$store.commit('setCurrentPage', newPage);
      await this.$store.dispatch('fetchProductList', this.title);
    //   this.items = this.displayedProducts;
    // this.new();
    },

    async deleteItem(item) {
      Object.assign(item, {type : this.title} );
      await this.$store.dispatch('deleteProduct', item)
      await this.$store.dispatch('fetchProductList',this.title)
    //   this.items = this.displayedProducts
    // this.new();
    },

    async nextPage() {
      await this.$store.dispatch('nextPage',this.title);
    //   this.items = this.displayedProducts;
    // this.new();
      },
    async prevPage() {
      await this.$store.dispatch('prevPage',this.title);
    //   this.items = this.displayedProducts;
        // this.new();
    },

    // new(){
    //     let a = this.items;
    //     a = this.displayedProducts;
    //     this.$emit("hello", a);
    // },

    editItem (item) {
      this.editedIndex = this.displayedProducts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      // this.editedIndex = this.items.indexOf(this.editedItem)
      Object.assign(this.editedItem, {type : this.title})
      if (this.editedIndex > -1) {
        await this.$store.dispatch('updateProduct', this.editedItem)
        // this.items = this.displayedProducts
      } else {
        if(this.editItem.pid !== null){
          await this.$store.dispatch('appendProduct', this.editedItem)
        // //   this.items = this.displayedProducts
        // this.new();
        }
      }
      this.close()
    },

    }
}

</script>

<style>

</style>