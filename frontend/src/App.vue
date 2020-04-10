<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    // authUser will not be reactive to updates, nor will it contain the user profile
    // authUser is therefore to be considered as a light object, holding only login credentials,
    // account type and _id, but no permissions.
    // any change to the user (password, email, type) therefore requires a logout to be effective.

    authUser () {
      return this.$store.state.auth.user
    }
  },
  watch: {
    authUser (newVal) {
      if (newVal === undefined || newVal === null) {
        // console.log('App.vue: User is now LOGGED OUT')
        /* this.$router.push({ name: 'Login' })
          .catch(error => {
            if (error.name.includes('NavigationDuplicated')) {
              return console.log('You are already there, skipping nav')
            }
          }) */
      } else {
        if (newVal === this.authUser) {
          // return console.log('login renewal for', newVal.email)
        }
        // console.log(
        //   'App.vue: User ' +
        //     newVal.email +
        //     ' is now LOGGED IN (_id: ' +
        //     newVal._id +
        //     ')'
        // )
        // console.log(
        //   "App.vue: this.$store.state.auth.user is available at root-level as 'authUser'"
        // )
        // console.log(newVal)
        // not 'user' anymore, to avoid confusion.
      }
    }
  },
  mounted () {
    this.$store
      .dispatch('auth/authenticate')
      .catch(error => {
        if (error.message.includes('No accessToken')) {
          // return console.log('app ready: no token found, please login')
        }
        this.handleError(error)
      })
      .then(response => {
        if (!response) {
          // return console.error('Empty response, no session will be created')
        }
        this.$store.dispatch('postLogin', response.body)
      })
  }
}
</script>
