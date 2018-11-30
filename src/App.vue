<template>
  <v-app>
    <Advertisement/>
    <Header/>
  </v-app>
</template>

<script>
import Advertisement from './components/common/Advertisement'
import Header from './components/common/Header'

export default {
  name: 'App',
  components: {
    Advertisement,
    Header,
  },
  data () {
    return {
      //
    }
  }
}
</script>
