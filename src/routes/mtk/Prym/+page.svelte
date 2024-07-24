<script>
	import { titleStore } from '$lib/titleStore';
	export let data;
	$: $titleStore = data.title;
	let a = '';
	let hasil = 'Masukkan Angka';
	const prym = (f) => {
		let ff = Number(f);
		let count = 0;
		for (let f2 = 1; f2 <= ff; f2++) {
			if (ff % f2 == 0) {
				count++;
			}
		}
		hasil =
			ff <= 1 || count > 2
				? 'Angka ' + f + ' tidak termasuk bilangan prima'
				: 'Angka ' + f + ' adalah bilangan prima';
	};
	const handleInput = (event) => (a = event.target.value.replace(/[^0-9,]/g, ''));
</script>

<h1 class="font-bold text-xl">{data.title}</h1>
<p class="mt-2">Di halaman ini, kamu dapat mencari bilangan prima dengan instan.</p>
<p class="mt-2">Masukkan angka dengan cara: 23 (masukkan angkanya saja)</p>
<br />
<div class="bg-slate-600 bg-opacity-80 flex flex-col items-center rounded-lg text-center p-4">
	<input
		type="text"
		class="px-2 bg-white rounded-full outline-none ring ring-yellow-300 text-black placeholder:text-gray-600/80"
		placeholder="Masukkan Angka"
		bind:value={a}
		on:input={handleInput}
	/>
	<button class="w-24 rounded-full bg-amber-600 mt-4 active:bg-opacity-80" on:click={prym(a)}
		>Cari</button
	>
	<span class="mt-2">{hasil}</span>
</div>
