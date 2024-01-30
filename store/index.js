export const state = () => ({
  user: null,
  loginStatus: null,
  signupStatus: null,
  productList: [],
  currentPage: 1,
  productsPerPage: 10,
  totalProducts: null,
  duplicateProductIdMessage: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setLoginStatus(state, status) {
    state.loginStatus = status;
  },
  setSignupStatus(state, status) {
    state.signupStatus = status;
  },

  logout(state){
    state.user = null;
    sessionStorage.clear()
  },

  setProductList(state, productList) {
    state.productList = productList;
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage;
  },
  setTotalProducts(state, totalProducts) {
    state.totalProducts = totalProducts;
  },

  deleteProduct(state, productId) {
    const index = state.productList.findIndex(product => product.pid === productId);
    if (index !== -1) {
      state.productList.splice(index, 1);
    }
  },
  
  editProduct(state, productId) {
    const index = state.productList.findIndex(product => product.pid === productId);
    if (index !== -1) {
      state.productList[index].product = editedItem.name;
      state.productList[index].category1 = editedItem.category1;
      state.productList[index].category2 = editedItem.category2;
      state.productList[index].price = editedItem.price;
      state.productList[index].sale = editedItem.sale_price;
    }
  },

  appendProduct(state, product) {
    state.productList.push(product);
  },
  setDuplicateProductIdMessage(state, message) {
    state.duplicateProductIdMessage = message;
  },
};

export const actions = {
  async loginUser({ commit }, userData) {
    const response = await this.$axios.post('http://restory.intellisys.co.kr:9998/use/login', userData);
    if (response.data.status === 'success') {
      commit('setUser', response.data.user);
    }
    commit('setLoginStatus', response.data.status);
    sessionStorage.setItem('user',JSON.stringify(response.data.user));
    sessionStorage.setItem('status',response.data.status);
  },

  async signupUser({ commit }, userData) {
    const response = await this.$axios.post('http://restory.intellisys.co.kr:9998/use/signup', userData);
    commit('setSignupStatus', response.data.status);
  },

  async fetchProductList({ commit, state }) {
    const response = await this.$axios.get('http://restory.intellisys.co.kr:9998/prd/select', {
      params: {
        type: 'baon',
        page_no: state.currentPage,
        limit: state.productsPerPage,
      },
    });

    if (response.data.status === 'success') {
      console.log('get')
      commit('setProductList', response.data.result.prd_list);
      commit('setTotalProducts', response.data.result.total_count);
    }
  },

  nextPage({ commit, dispatch, state }) {
    if (state.currentPage < Math.ceil(state.totalProducts / state.productsPerPage)) {
      commit('setCurrentPage', state.currentPage );
      console.log(state.currentPage);
      dispatch('fetchProductList');
    }
  },

  updatePage({commit,dispatch}, newPage) {
    commit('setCurrentPage', newPage);
    dispatch('fetchProductList');
  },

  prevPage({ commit, dispatch, state }) {
    if (state.currentPage > 1) {
      commit('setCurrentPage', state.currentPage);
      dispatch('fetchProductList');
    }
  },

  async deleteProduct({ commit }, productId) {
    
      const response = await this.$axios.delete('http://restory.intellisys.co.kr:9998/prd/delete', {
        params: { type: 'baon', pid: productId },
      });

       if (response.data.status === 'success') {
         commit('deleteProduct', productId);
       }
  },

  async updateProduct({ commit,dispatch }, editedItem) {
    // try {
     await this.$axios.patch('http://restory.intellisys.co.kr:9998/prd/update',
      editedItem,
      );
    // } catch (error) {
    //   console.error('update 에러', error);
    // }
  },

  async appendProduct({ commit }, editedItem) {
      await this.$axios.post('http://restory.intellisys.co.kr:9998/prd/append',
      editedItem,
      );
  },

};

export const getters = {
  totalPages(state) {
    return Math.ceil(state.totalProducts / state.productsPerPage);
  }
};