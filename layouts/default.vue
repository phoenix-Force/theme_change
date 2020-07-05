<template>
  <div id="app" v-bind:class="theme_name">
    <h2>{{theme_name}}</h2>
    local = {{ local}}
    <nuxt />
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: '',
  data () {
    return {
      local: null
    }
  },

  mounted() {
    this.GetThemeFirstTime()
  },
  methods: {
    ...mapActions([
      'setTheme',
    ]),
    GetThemeFirstTime() {
      const themename = JSON.parse(localStorage.getItem('Theme_name'))
      // this.loaclMM =
      this.setTheme(themename)
    }
  },
  computed: {
    theme_name () {

      console.log(this.$store.getters.Selected_theme)
      // $store.doneTodosCount
      return this.$store.getters.Selected_theme
    }
  },
}
</script>

