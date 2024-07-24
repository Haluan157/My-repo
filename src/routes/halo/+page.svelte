<script context="module">
	import Yu from '$lib/asma.json';
</script>

<script>
	import { onMount } from 'svelte';
	import { titleStore } from '$lib/titleStore';
	export let data;
	$: $titleStore = data.title;
	const random = () => Math.floor(Math.random() * 99);
	let rand, rands1, rands2, rands3;
	let kesempatan = 3,
		skor = 0;
	let highScore = 0;

	onMount(() => {
		highScore = Number(localStorage.getItem('highScore')) || 0;
	});

	$: if (skor > highScore) {
		highScore = skor;
		localStorage.setItem('highScore', skor.toString());
	}
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
	$: ja = jawaban.sort(() => Math.random() - 0.5);
	function sk(jawabann) {
		if (jawabann == anst) {
			skor += 20;
		} else {
			kesempatan -= 1;
		}
		rand, rands1, rands2, (rands3 = random()), random(), random(), random();
	}
</script>

<p>Skor Tertinggimu = {highScore}</p>
<div class="flex flex-col items-center mt-4 text-center gap-3">
	{#if kesempatan === 0}
		<span>PERMAINAN SELESAI</span>
		<span>SKOR = {skor}</span>
	{:else}
		<span>Arti dari {soal} adalah...</span>
		<div class="grid grid-rows-2 grid-flow-col gap-3 items-center justify-center h-46">
			<button class="butt" on:click={sk(ja[0])}>{ja[0]}</button>
			<button class="butt" on:click={sk(ja[1])}>{ja[1]}</button>
			<button class="butt" on:click={sk(ja[2])}>{ja[2]}</button>
			<button class="butt" on:click={sk(ja[3])}>{ja[3]}</button>
		</div>
		<span>Skor = {skor}</span>
		<span>Kesempatan = {kesempatan} kali</span>
	{/if}
</div>

<style>
	.butt {
		@apply w-40 h-20 text-xs bg-zinc-700 hover:bg-opacity-80 active:bg-opacity-50 rounded-lg;
	}
</style>
