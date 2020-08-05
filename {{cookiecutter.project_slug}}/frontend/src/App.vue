<template lang="html">
  <div>
        {% if cookiecutter.analytics == "Intercom" %}

        <Intercom v-if="loggedIn" />
        {% endif %}

    <router-view/>
  </div>
</template>

<script>
    {% if cookiecutter.analytics == "Intercom" %}
import Intercom from './components/users/Intercom.vue'
{% endif %}
export default {
  name: 'App',
    components: {
        {% if cookiecutter.analytics == "Intercom" %}
        Intercom,
    {% endif %}
  },
}
</script>
