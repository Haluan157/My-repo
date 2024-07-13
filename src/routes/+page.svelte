<script>
  import { titleStore } from '$lib/titleStore';
  export let data;
  $: $titleStore = data.title;
  const li =[{a:"Matematika",f:"mtk"}]
</script>
<h1 class="font-bold text-2xl">Repositoriku</h1>
<p class="mt-2">Di web ini, kamu akan menemukan file repositori dari akun github seseorang dengan username <a href="https://github.com/Haluan157" target="_blank" class="link">Haluan157</a>. Beliau adalah alumni dari salah satu SDN yang ada di Sleman, alumni dari salah satu SMPN yang ada di Bantul, dan saat ini, beliau sedang bersekolah di salah satu SMAN yang ada di Bantul.</p><br>
<h2 class="font-bold text-xl">Repositori beliau:</h2>
<ul class="list-disc mx-8">
{#each li as li}
<li><a href={li.f} class="link">{li.a}</a></li>
{/each}
</ul>