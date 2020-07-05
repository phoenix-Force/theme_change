<template>
  <div>
    <h2 style="text-align:center;">Theme</h2>
    {{ loaclMM }}
    <div style="width:100%;">
      <button @click ="chnageTheme('dark')">
        Dark
      </button>
      <button @click ="chnageTheme('light')">
        Light
      </button>
      <button @click ="chnageTheme('red')">
        Red
      </button>
      <button @click ="chnageTheme('purple')">
        Purple
      </button>
      <button @click ="chnageTheme('green')">
        Green
      </button>

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Indexpage',
  data () {
    return {
      loaclMM: null
    }
  },
  methods: {
    ...mapActions([
      'setTheme',
    ]),
    chnageTheme(themeName = 'light') {
      localStorage.setItem('Theme_name', JSON.stringify(themeName)),
      // this.loaclMM =
      this.setTheme(themeName)
    }
  }
}
</script>
