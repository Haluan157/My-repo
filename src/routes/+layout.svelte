<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	import Head from './head.svelte';
	import { titleStore } from '$lib/titleStore';
	$: $titleStore;
	injectSpeedInsights();
</script>

<sveltekit:head>
	<title>{$titleStore}</title>
</sveltekit:head>
<div class="h-full bg-indigo-950">
<header class="sticky top-0">
	<Head title={$titleStore} />
</header>
<div class="app p-3">
	<main>
		<slot />
	</main>
</div>
<footer class="fixed bottom-0 left-0 w-full bg-slate-600 text-white p-4 bg-opacity-80">
	<div class="flex flex-col items-center gap-y-4">
		<a href="https://github.com/Haluan157" class="link">Haluan157</a>
	</div>
</footer>
</div>
