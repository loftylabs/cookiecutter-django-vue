<template>
<form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label for="firstName" class="sr-only">First Name</label>
        <input type="text" id="firstName" class="form-control"  v-model="first_name" required>
        
        <label for="lastName" class="sr-only">Last Name</label>
        <input type="text" id="lastName" class="form-control" v-model="last_name" required>


        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
        <label for="inputPassword2" class="sr-only">Confirm Password</label>
        <input type="password" id="inputPassword2" class="form-control" placeholder="Confirm Password" v-model="password2" required>



        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="doRegister">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
</form>

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
