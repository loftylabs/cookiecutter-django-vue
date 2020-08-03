<script>
export default {
  name: 'Intercom',
  data(){
      return {}
  },
  computed: {
      user() {
          return this.$store.state.auth.profile
      },
  },
  render() {
      return ""
  },
  mounted() {
      window.Intercom('boot', {
        app_id: process.env.VUE_APP_INTERCOM_APP_ID || '',
        email: this.user.email,
        user_id: this.user.id,
        created_at: this.user.created_at,
        name: this.user.full_name,
    });
  }
}
</script>