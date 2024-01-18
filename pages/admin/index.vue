<template>
  <v-app>
    <v-main>
      <v-row justify="center" style="margin-top: 100px;">
        <v-col cols="12" sm="8" md="4">
          <v-card>

            <!-- 탭 추가 -->
            <v-tabs v-model="tab">
              <v-tab>로그인</v-tab>
              <v-tab>회원가입</v-tab>

              <v-tab-item>
                <!-- 로그인 페이지 내용 -->
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
  methods: {
    login() {
      // 로그인 처리 로직
    },
    register() {
      // 회원가입 처리 로직
    }
  }
};
</script>

<style>
/* 추가적인 스타일링이 필요한 경우 여기에 작성 */
</style>
