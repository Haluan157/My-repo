<script context="module">
	import Yu from '$lib/asma.json';
</script>

<script>
	import { titleStore } from '$lib/titleStore';
	export let data;
	$: $titleStore = data.title;
	const random = () => Math.floor(Math.random() * 99);
	function acak(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	let rand, rands1, rands2, rands3;
	let kesempatan = 3;
	let skor = 0;
	$: do {
		rand = random();
		rands1 = random();
		rands2 = random();
		rands3 = random();
	} while (new Set([rand, rands1, rands2, rands3]).size !== 4);
	$: soal = Yu[rand].latin;
	$: anst = Yu[rand].arti;
	$: ans1 = Yu[rands1].arti;
	$: ans2 = Yu[rands2].arti;
	$: ans3 = Yu[rands3].arti;
	$: jawaban = [anst, ans1, ans2, ans3];
	$: ja = new acak(jawaban);
	function sk(jawabann) {
		if (jawabann == anst) {
			skor += 20;
		} else {
			kesempatan -= 1;
		}
		rand = random();
		rands1 = random();
		rands2 = random();
		rands3 = random();
	}
</script>

<div class="flex mt-4 flex-col text-center justify-center gap-2">
	{#if kesempatan === 0}
		<p>PERMAINAN SELESAI</p>
		<p>SKOR = {skor}</p>
	{:else}
		<p>Arti dari {soal} adalah...</p>
		<div class="grid grid-rows-2 grid-flow-col gap-4">
			<button class="butt" on:click={sk(ja[0])}>{ja[0]}</button>
			<button class="butt" on:click={sk(ja[1])}>{ja[1]}</button>
			<button class="butt" on:click={sk(ja[2])}>{ja[2]}</button>
			<button class="butt" on:click={sk(ja[3])}>{ja[3]}</button>
		</div>
		<p>Skor = {skor}</p>
		<p>Kesempatan = {kesempatan} kali</p>
	{/if}
</div>

<style>
	.butt {
		@apply w-40 h-auto p-2 text-xs bg-zinc-700 hover:bg-opacity-80 active:bg-opacity-50;
	}
</style>
