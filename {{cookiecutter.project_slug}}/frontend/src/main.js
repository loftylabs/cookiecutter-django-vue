import Vue from 'vue'
import store from '@/store'
import router from '@/router'

{% if cookiecutter.api == "REST" %}
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
{% elif cookiecutter.api == "GraphQL" %}
import { createProvider } from '@/apollo'
{% endif %}

{% if cookiecutter.analytics == 'Google Analytics' %}import VueAnalytics from 'vue-analytics'{% endif %}
{% if cookiecutter.use_sentry == 'y' %}import VueRaven from 'vue-raven'{% endif %}

import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

{% if cookiecutter.use_sentry == 'y' %}
// Sentry for logging frontend errors
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueRaven, {dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN})
}
{% endif %}

{% if cookiecutter.analytics == 'Google Analytics' %}
// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})
{% endif %}


new Vue({
  router,
  store,
  {% if cookiecutter.api == "GraphQL" %}provide: createProvider().provide(),{% endif %}
  render: h => h(App)
}).$mount('#app')
