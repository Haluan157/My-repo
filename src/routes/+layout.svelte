<script>
	import '../app.css';
	import Head from './head.svelte'
</script>

<header class="sticky top-0">
  <Head />
</header>

<div class="app">
	<main>
		<slot />
	</main>
</div>