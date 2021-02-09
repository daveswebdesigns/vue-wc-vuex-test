<template>
  <div id="app-wc">
    {{$store.state.msg}}
  </div>
</template>

<script>
import store from './store'
export default {
	store,
	mounted() {
		this.$store.commit('check')
	}
}
</script>