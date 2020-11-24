import Vue from 'vue'
import store from '@/store/index.js'
import router from '@/router'

{% if cookiecutter.api == "REST" %}
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

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

{% if cookiecutter.use_social_auth == 'y' %}
import VueAuthenticate from 'vue-authenticate'

const oauthRedirectUri = ''

Vue.use(VueAuthenticate, {
    baseURL: process.env.VUE_APP_API_BASE_URL,
    storageType: 'cookieStorage',
    registerUrl: '',
    loginUrl: '',
    cookieStorage: {
      domain: window.location.hostname,
      path: '/',
      secure: false
    },
    tokenPath: 'token',
    bindRequestInterceptor: function () {},
      bindResponseInterceptor: function () {}
,
providers: {}
}
)
{% endif %}