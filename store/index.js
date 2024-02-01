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
    if (response.data.status === 'success') {
    commit('setSignupStatus', response.data.status);
    }
  },

  async fetchProductList({ commit, state },typee) {
    const response = await this.$axios.get('http://restory.intellisys.co.kr:9998/prd/select', {
      params: {
        type: typee,
        page_no: state.currentPage,
        limit: state.productsPerPage,
      }
      }
    );
    if (response.data.status === 'success') {
      commit('setProductList', response.data.result.prd_list)
      commit('setTotalProducts', response.data.result.total_count)
    }
  },

  updatePage({commit}, newPage) {
    commit('setCurrentPage', newPage);
  },

  async deleteProduct({ commit }, item) {
    await this.$axios.delete('http://restory.intellisys.co.kr:9998/prd/delete', {params: item})
  },

  async updateProduct({ dispatch }, editedItem) {
    const response = await this.$axios.patch('http://restory.intellisys.co.kr:9998/prd/update',editedItem)
    if (response.data.status === 'success') {
    await dispatch('fetchProductList', editedItem.type)
    }
  },

  async appendProduct({ dispatch, commit }, appendingItem) {
    const response = await this.$axios.post('http://restory.intellisys.co.kr:9998/prd/append',appendingItem);
    if (response.data.status === 'success') {
      commit('setDuplicateProductIdMessage',false);
      await dispatch('fetchProductList', appendingItem.type);
    }
    else {
      commit('setDuplicateProductIdMessage',true);
    }
  },
};

export const getters = {
  totalPages(state) {
    return Math.ceil(state.totalProducts / state.productsPerPage);
  }
};