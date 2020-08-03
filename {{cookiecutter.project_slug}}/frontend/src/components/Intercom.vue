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
        app_id: process.env.VUE_APP_INTERCOM_APP_ID,
        email: this.user.email,
        user_id: this.user.id,
        created_at: this.user.created_at,
        name: this.user.full_name,
        company: {
            company_id: this.user.organization.id,
            name: this.user.organization.name,
            procedure_count: this.user.organization.procedure_count,
            plan_name: this.user.organization.plan_name,
            monthly_spend: this.user.organization.monthly_spend,
            owner: this.user.organization.owner,
        },
        is_org_admin: this.user.is_org_admin
    });
  }
}
</script>