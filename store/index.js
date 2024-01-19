export const state = () => ({
  user: null,
  loginStatus: null,
  signupStatus: null,
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
  }
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
  }
};
