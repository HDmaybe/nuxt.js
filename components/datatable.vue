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
                color="gray"
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
                  <span class="text-h5">{{ is_edit }}</span>
              </v-card-title>

              <v-card-text>
                  <v-container>
                <v-row v-for="columns in row_count" :key="columns[0]">
                  <v-col
                    v-for="column in columns"
                    cols="12"
                    sm="6"
                    md="4"
                    :key="column"
                  >
                    <v-text-field
                      v-if="(is_edit == 'Edit Item' && column != 'pid') || (is_edit == 'New Item')"
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
      <template slot="item.image" slot-scope={item}>
          <img :src="item.img" style="width: 80px; height: 80px; margin-top: 10px;">
        <div>
          상품코드 | {{ item.pid }}
        </div>
      </template>
      <template slot="item.url" slot-scope={item}>
        <a :href="item.url" target="_blank">바로가기</a>
      </template>
    </v-data-table>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="handlePageChange"
      total-visible="6"
      style="margin-top: 25px;float: right;"
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
      is_edit : 'New Item',
      dialog : false,
      dialog2: true,
      currentPage : 1
    };
  },

  computed: {
    totalPages() {
        return this.$store.getters['totalPages'];
      },

    displayedProducts() {
      return this.$store.state.productList
    },

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
    this.set_row_count();
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
      this.is_edit = 'Edit Item'
      this.editedItem = Object.assign({}, item)
      this.set_row_count()
      this.dialog = true
    },

    set_row_count() {
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
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.is_edit = 'New Item'
      })
    },

    close2 () {
      this.$store.commit('setDuplicateProductIdMessage', false);
    },

    async save () {
      Object.assign(this.editedItem, {type : this.title})
      if (this.is_edit !== 'New Item') {
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
.v-data-table-header__icon {
  display: none !important;
}
</style>