<template>
  <v-app>
    <v-main>
      <v-row justify="center" style="margin-top: 100px;">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <!-- 탭 -->
            <v-tabs v-model="tab">
              <v-tab>로그인</v-tab>
              <v-tab>회원가입</v-tab>

              <v-tab-item>
                <!-- 로그인 내용 -->
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="loginId" label="ID"></v-text-field>
                    <v-text-field v-model="loginPassword" label="Password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions style="display: flex; justify-content: center;">
                  <v-btn color="pink" @click="login">로그인</v-btn>
                </v-card-actions>
              </v-tab-item>

              <v-tab-item>
                <!-- 회원가입 페이지 내용 -->
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="registerName" label="이름"></v-text-field>
                    <v-text-field v-model="registerId" label="ID"></v-text-field>
                    <v-text-field v-model="registerPassword" label="Password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions style="display: flex; justify-content: center;">
                  <v-btn color="pink" @click="register">제출</v-btn>
                </v-card-actions>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      loginId: '',
      loginPassword: '',
      registerName:'',
      registerId: '',
      registerPassword: ''
    };
  },
  mounted() {
    if (sessionStorage.getItem('status') != null) {
      this.$router.push('/admin/admain')
    }
  },
  methods: {
    async login() {
      const userData = { id: this.loginId, password: this.loginPassword };
      await this.$store.dispatch('loginUser', userData);

      if (this.$store.state.loginStatus === 'fail') {
        alert('로그인 실패');
      } else {
        console.log('User:', this.$store.state.user);
        this.$router.push('/admin/admain');
      }
    },

    async register() {
      const userData = {
        name: this.registerName,
        id: this.registerId,
        password: this.registerPassword
      };
      await this.$store.dispatch('signupUser', userData);
      this.$router.push('/admin/');
    }
  }
};
</script>

<style>

</style>
