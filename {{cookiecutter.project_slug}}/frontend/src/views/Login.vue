<template>
<div class="container">
  <div class="row my-5 py-3">
    <div class="col-lg-8 offset-2">
<div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div class="form-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
      </div>

      <div class="form-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      </div> 
       <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <span class="btn btn-lg btn-primary btn-block"  @click="doLogin">Sign in</span>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: ""
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
