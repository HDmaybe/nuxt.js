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
                      v-if="editedIndex === 'New Item'"
                      v-model="editedItem.pid"
                      label="ID"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row v-for="columns in row_count" :key="columns[0]">
                  <v-col
                    v-for="column in columns"
                    cols="12"
                    sm="6"
                    md="4"
                    :key="column"
                  >
                    <v-text-field
                      v-if="editedIndex != 'Edit Item' && column != 'pid'"
                      v-model="editedItem[column]"
                      :label="column"

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
    </v-data-table>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="handlePageChange"
      total-visible="10"
      style="margin-top: 25px;"
    > 
    </v-pagination>
    <v-dialog v-if="duplicateProductIdMessage" v-model="dialog2" max-width="500" >
      <v-card>
        <v-card-text>
          중복 아이디입니다
        </v-card-text>
        <v-btn @click="close2">
          닫기
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row_count: [],
      editedItem: {
        pid: '',
        product: '',
        category: '',
        brand: '',
        price: '',
        sale: '',
        },
      editedIndex : 'New Item',
      dialog : false,
      dialog2: true,
      currentPage : 1
    };
  },

  computed: {
    formTitle () {
      return this.editedIndex === 'New Item' ? 'New Item' : 'Edit Item'
    },

    totalPages() {
        return this.$store.getters['totalPages'];
      },

    displayedProducts() {
      return this.$store.state.productList
    },

    // currentPage() {
    // return this.$store.state.currentPage;
    // },

    duplicateProductIdMessage() {
    return this.$store.state.duplicateProductIdMessage;
    },
    
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  props : {
    headers: Array,
    title: String,
    defaultItem: Object,
  },
    
  mounted() {
    this.$store.dispatch('fetchProductList',this.title);
  },

  methods: {
  
    async handlePageChange(newPage){
      await this.$store.commit('setCurrentPage', newPage);
      await this.$store.dispatch('fetchProductList', this.title);
    },

    async deleteItem(item) {
      Object.assign(item, {type : this.title} );
      await this.$store.dispatch('deleteProduct', item)
      await this.$store.dispatch('fetchProductList',this.title)
    },

    editItem (item) {
      this.editedIndex = this.displayedProducts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.row_count = []
      let count = 0
      let limit_count = Math.ceil(Object.keys(this.editedItem).length / 2)
      while (true) {
        
        this.row_count.push(Object.keys(this.editedItem).splice(count*2,2));
        count = count +1;
        if (limit_count <= count) {
          break
        }
      }

      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = 'New Item'
      })
    },

    close2 () {
      this.$store.commit('setDuplicateProductIdMessage', false);
    },

    async save () {
      Object.assign(this.editedItem, {type : this.title})
      if (this.editedIndex !== 'New Item') {
        await this.$store.dispatch('updateProduct', this.editedItem)
      } else {
        if(this.editItem.pid !== null){
          await this.$store.dispatch('appendProduct', this.editedItem)
        }
      }
      this.close()
    },
  }
}

</script>

<style>

</style>