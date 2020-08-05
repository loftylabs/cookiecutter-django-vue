<template>
<div class="container">
  <div class="row my-5 py-3">
    <div class="col-lg-8 offset-2">
<div class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <div class="form-group">
        <input type="text" id="firstName" class="form-control" placeholder="First Name"  v-model="first_name" required>
        </div>

<div class="form-group">
        <input type="text" id="lastName" class="form-control" v-model="last_name" placeholder="Last Name" required>
</div>

<div class="form-group">

        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
</div>
<div class="form-group">

        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
</div>
<div class="form-group">

        <input type="password" id="inputPassword2" class="form-control" placeholder="Confirm Password" v-model="password2" required>
</div>


        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <span class="btn btn-lg btn-primary btn-block"  @click="doRegister">Sign in</span>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: "",
      password: "",
      password2:"",
      first_name:"",
      last_name:""
    } 
  },
  methods: {
    doRegister() {
        if(this.password !== this.password2 || this.email === '' || this.password === '' || this.password2 === ''){
            return false
        }


      this.$store.dispatch('postRegister', {email: this.email, password: this.password, first_name:this.first_name, last_name:this.last_name})
        .then(response => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
</style>
