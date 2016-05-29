<template>
	<div class="well">
		+kinks/add {{formattedKinkList}}
	</div>
</template>

<script>
export default {
  vuex: {
    getters: {
      formattedKinkList: state => state.kinks.toString().replace(/,/g, ' ')
    }
  }
}
</script>

<style>
</style>
