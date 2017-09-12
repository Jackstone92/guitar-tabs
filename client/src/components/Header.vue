<template>
  <v-toolbar fixed class="blue darken-4" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
          Tabular
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
        :to="{
          name: 'songs'
        }">
          Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'register'
        }">
          Sign Up
      </v-btn>

      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'login'
        }">
          Login
      </v-btn>

      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout()">
          Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: rgba(255,255,255,0.7);
}
</style>
