<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Register">
        <form
          name="tabular-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email">
          </v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password">
          </v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          class="blue darken-4"
          dark
          @click="register">
            Register
        </v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>


<script>
// bind html using controller //
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
