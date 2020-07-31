<template>
<form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
        <label for="inputPassword2" class="sr-only">Confirm Password</label>
        <input type="password" id="inputPassword2" class="form-control" placeholder="Confirm Password" v-model="password_2" required>

        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="doLogin">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
</form>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      password_2:""
    } 
  },
  methods: {
    doLogin() {
      this.$store.dispatch('postLogin', {email: this.email, password: this.password})
        .then(response => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>
