<template>
  <div>
    <p>name: {{name}}</p>
    <p>copyright: {{copyright}}</p>
    <p>arrList: {{arrList}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      name: state => state.collection.name,
      copyright: state => state.footerStatus.copyright
    },
      ...mapGetters('collection', {
        arrList: 'renderCollects'
      })
    )
  }
}
</script>

<style scoped>

</style>
