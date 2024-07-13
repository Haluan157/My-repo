<script>
  import { titleStore } from '$lib/titleStore';
  export let data;
  $: $titleStore = data.title;
  let a='';
  $: str = a.split(",").map(Number);
  function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const lcm = (a, b) => (a * b) / gcd(a, b);
$: KPK = str.reduce((aha, hyhy) => lcm(aha, hyhy));
$: FPB = str.reduce((aha, hyhy) => gcd(aha, hyhy));
</script>
<h1 class="font-bold text-xl">KPK dan FPB</h1>
<p class="mt-2">Di halaman ini, kamu dapat menghitung KPK dan FPB secara instan.</p>
<p class="mt-2">Masukkan angka dengan cara: 1,2,3,dst</p><br>
<div class="flex justify-center">
<div class="bg-slate-600 bg-opacity-80 grid justify-center rounded-lg text-center p-4">
  <input type="text" class="px-2 bg-white rounded-full outline-none ring ring-yellow-300 text-black placeholder:text-gray-600/80" placeholder="Masukkan Angka" bind:value={a}>
  <p class="mt-2">KPK = {KPK} FPB = {FPB}</p>
</div>
</div>