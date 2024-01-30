<template>
  <v-app>
   
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="300"
              total-visible="10"
              circle
              dark
              color="#ffff00"
              navigation-color="red"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        page: 1,
      }
    },
}
</script>

<style>

</style>