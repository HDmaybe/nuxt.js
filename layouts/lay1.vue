<template>
  <v-app>
    <div style="display: flex; height: 40px; width: 100%; background-color: rgb(44, 44, 60); color: white; font-weight: 500; font-size: larger;">
      <span style="margin-top:auto; margin-bottom: auto; padding-left: 20px; ">관리자 페이지</span>
      <span style="margin-left:auto; margin-top:auto; margin-bottom: auto;padding-right: 20px;">{{ userId }} 님</span>
    </div>

    <div style="display: flex; ">
      <v-navigation-drawer permanent style="width: 15%;">
        <div style="text-align: left; margin-left: 10px;">
          <!-- <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                관리자 페이지
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider> -->
          <v-list
            dense
            nav
          >
          <a :id="page.includes(i.title) ? 'blue': null"  v-for="i in site" :key="i.title" :href="i.link" style="text-decoration: none;color: black;">
            <v-list-item
            >
              <v-list-item-content>
              
                <v-list-item-title style="font-size: larger; font-weight: 700;">{{ i.title }}</v-list-item-title>
              
              </v-list-item-content>
            </v-list-item>
          </a>

          </v-list>

          <div style="position: absolute; bottom: 20px;  width: 100%; border-top: solid 1px gray; ">
            <v-list-item-title color="gray" @click="logout" block style="cursor: pointer; padding-top: 5px; font-weight: 800; font-size: 15px; ">
              로그아웃
            </v-list-item-title>
          </div>
        </div>
      </v-navigation-drawer>
      <div style="width: 100%; ">
        <nuxt/>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      site: [
        { title: 'baon', link: '/admin/baon' },
        { title: 'amore', link: '/admin/amore' }
      ],        
      userId: null,
      page: ''
    }
  },
  
  computed : {

  },

  mounted() {
    if (sessionStorage.getItem('status') == null) {
      this.$router.push('/admin');
    }
    this.userId = sessionStorage.getItem('id');
    this.page = window.location.pathname
  },

  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/admin/');
    },

    click() {

    },
  }
}
</script>

<style scoped>

.white {
  background-color: white;
  width: 200px;
  height: 200px;  
}
#blue div {
  background-color: rgb(203, 237, 255);
  color: rgb(63, 134, 255);
  
}


.v-application{
  background-color: rgb(231, 231, 231) !important;
}



.v-list--nav{
  padding-left: 0;
  padding-right: 0;
}

.v-list--nav .v-list-item{
  border-radius: 0;
  
}

.v-list--nav #blue .v-list-item{
  border-right: solid 2px rgb(44, 104, 255);
}



</style>