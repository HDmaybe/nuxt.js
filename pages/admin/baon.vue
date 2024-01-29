<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :hide-default-footer=true
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title style="font-weight: 700">Baon</v-toolbar-title>
          
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
                        v-model="editedItem.category1"
                        label="Category1"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.category2"
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
    <div class="page">
        <button @click="prevPage" :disabled="currentPage === 1" style="margin-left: 30px; font-weight: 500;">Previous</button>
        <span style ="font-weight: 500">Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" style="margin-right: 30px; font-weight: 500">Next</button>
    </div>

    <v-dialog
            v-model="dialog"
            max-width="500px"
          >
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
                        v-model="editedItem.category1"
                        label="Category1"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.category2"
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
  </div>
  </template>

<script>
export default {
  layout: 'lay1',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'pid',
      },
      { text: 'Name', value: 'product' },
      { text: 'Category1', value: 'category1' },
      { text: 'Category2', value: 'category2' },
      { text: 'Price', value: 'price' },
      { text: 'Sale', value: 'sale' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    items: [] ,
    editedIndex: -1,
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
  }),

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

   created () {
    this.$store.dispatch('fetchProductList');
    this.initialize();
  },

  async mounted() {
        await this.$store.dispatch('fetchProductList');
        this.items = this.displayedProducts;
    },

  methods: {
    initialize () {
      this.items = this.displayedProducts;
    },

    async deleteItem(item) {
        await this.$store.dispatch('deleteProduct', item.pid);
        await this.$store.dispatch('fetchProductList')
        this.items = this.displayedProducts
    },

    async nextPage() {
      await this.$store.dispatch('nextPage');
      this.items = this.displayedProducts;
      },
    async prevPage() {
      await this.$store.dispatch('prevPage');
      this.items = this.displayedProducts;
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
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
      this.editedItem = Object.assign({'type':'baon'}, this.editedItem)
      if (this.editedIndex > -1) {
        await this.$store.dispatch('updateProduct',this.editedItem)
        await this.$store.dispatch('fetchProductList')
        this.items = this.displayedProducts
      } else {
        if(this.editItem.pid !== null){
          await this.$store.dispatch('appendProduct',this.editedItem)
          await this.$store.dispatch('fetchProductList')
          this.items = this.displayedProducts
        }
      }
      this.close()
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

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
