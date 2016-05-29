<template>
	<div class="row">
		<div class="col-sm-12">
			<p>Copy and paste this into your mush client.</p>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<kink-list></kink-list>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<kink-opt-list></kink-opt-list>
		</div>
	</div>
</template>

<script>
import KinkOptList from './components/KinkOptList'
import KinkList from './components/KinkList'

export default {
  components: {
    KinkOptList,
    KinkList
  }
}
</script>

<style>
</style>
