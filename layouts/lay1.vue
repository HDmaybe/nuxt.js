<template>
    <v-app>
        <v-navigation-drawer permanent >
            <div style="text-align: center;">
         <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           바온
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
            <v-list-item-content>
            <a :href="item.link" style="text-decoration: none; color: black;"><v-list-item-title >{{ item.title }}</v-list-item-title></a>
            </v-list-item-content>

        </v-list-item>
      </v-list>
      <v-btn color="pink" @click="logout" >
                로그아웃
            </v-btn>
        </div>
    </v-navigation-drawer>
    </v-app>
</template>

<script>

export default {
    data () {
      return {
        items: [
          { title: '조회', link: '' },
          { title: '수정', link: '' },
        ],
        right: null,
      }
    },
    mounted() {
        console.log('lay')
        if (sessionStorage.getItem('status') == null) {
            this.$router.push('/admin');
        }
    },
    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/admin/');
        }

    }

}
</script>


<style scoped>


</style>