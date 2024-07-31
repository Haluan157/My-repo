<script>
	import { titleStore } from '$lib/titleStore';
	$titleStore = 'KPK dan FPB';
	let a = '';
	$: str = a.split(',').map(Number);
	let KPK=0, FPB=0;
	function gcd(a, b) {
		while (b !== 0) {
			let temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
	const lcm = (a, b) => (a * b) / gcd(a, b);
	const chekh = () => {
	KPK = str.reduce((aha, hyhy) => lcm(aha, hyhy));
	FPB = str.reduce((aha, hyhy) => gcd(aha, hyhy));
	}
	const handleInput = (event) => (a = event.target.value.replace(/[^0-9,]/g, ''));
</script>

<h1 class="font-bold text-xl">KPK dan FPB</h1>
<p class="mt-2">Di halaman ini, kamu dapat menghitung KPK dan FPB secara instan.</p>
<p class="mt-2">Masukkan angka dengan cara: 1,2,3,dst</p>
<br />
<div class="bg-slate-600 bg-opacity-80 flex flex-col items-center rounded-lg p-4">
		<input
			type="text"
			class="px-2 bg-white rounded-full outline-none ring ring-yellow-300 text-black placeholder:text-gray-600/80"
			placeholder="Masukkan Angka"
			bind:value={a}
			on:input={handleInput}
			inputmode="numeric"
		/>
		<button class="w-24 rounded-full bg-amber-600 mt-4 active:bg-opacity-80" on:click={chekh}
		>Cari</button
	>
		<p class="mt-2">{KPK === 0 ? 'Masukkan Angka' : 'KPK = ' + KPK + ' FPB = ' + FPB}</p>
	</div>
