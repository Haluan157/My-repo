<script>
	import { titleStore } from '$lib/titleStore';
	export let data;
	$: $titleStore = data.title;
	const li = [
		{ a: 'KPK dan FPB', f: 'kf' },
		{ a: 'Mencari Bilangan Prima', f: 'Prym' },
		{ a: 'Keliling dan Luas (in development)', f: '#' },
		{ a: 'Luas dan Volume (in development)', f: '#' }
	];
</script>

<h1 class="font-bold text-xl">Selamat Datang di Math Easy</h1>
<p class="mt-2">
	Di repositori ini, kamu akan dipermudah dalam urusan matematika. Alih-alih menghitung secara
	manual, kamu bisa mendapatkan jawaban secara instan dengan memasukkan angka-angkanya saja.
</p>
<br />
<h2 class="font-bold text-xl">Fitur:</h2>
<ul class="list-disc mx-8">
	{#each li as li}
		<li><a href="mtk/{li.f}" class="link">{li.a}</a></li>
	{/each}
</ul>
