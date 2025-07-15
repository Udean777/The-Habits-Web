<script lang="ts">
	import MainFooter from './(components)/MainFooter.svelte';
	import MainHeader from './(components)/MainHeader.svelte';

	let { children } = $props();
</script>

<MainHeader/>

{@render children()}

<MainFooter/>
