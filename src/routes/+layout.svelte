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
<footer class="fixed bottom-0 left-0 w-full bg-slate-600 bg-opacity-80 text-white p-4">
  <div class="flex flex-col items-center gap-y-4">
    <a href="https://github.com/Haluan157" class="link">Haluan157</a>
    <p class="text-sm">Versi: {version}</p>
  </div>
</footer>