<template>
	<div id="app">
		{{ $store.state.msg }}
		<wc-test />
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('check')
	}
}
</script>
