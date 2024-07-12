<script context="module">
  import { version } from "../../package.json"
</script>
<script>
	import '../app.css';
	import Head from './head.svelte'
	import { titleStore } from '$lib/titleStore';
	$: $titleStore;
</script>
<sveltekit:head>
  <title>{$titleStore}</title>
</sveltekit:head>
<header class="sticky top-0">
  <Head title={$titleStore} />
</header>
<div class="app p-3">
	<main>
		<slot />
	</main>
</div>
<footer>
  <p>{version}</p>
</footer>