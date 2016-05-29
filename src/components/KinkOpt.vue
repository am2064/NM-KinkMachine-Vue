<template>
<button class="btn {{isKink?'btn-success':'btn-default'}}" v-on:click="swapKinkOption">
	{{kinkId}}. {{kinkName}}
</button>
</template>

<script>
import store from '../store'

export default {
  props: ['kinkId', 'kinkName'],
  vuex: {
    getters: {
      isKink: function () {
        let _isKink = store.state.kinks.indexOf(this.kinkId) > -1
        console.log('isKink', _isKink)
        return _isKink
      }
    }
  },
  methods: {
    swapKinkOption: function () {
      store.dispatch('TOGGLE', this.kinkId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
