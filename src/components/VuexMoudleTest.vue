<template>
  <div>
      <p>name: {{name}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'Vuex'
export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      name: state => state.collection.name
    })
  }
}
</script>

<style scoped>

</style>
