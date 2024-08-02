<script>
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { onMount } from 'svelte';
  import '../app.css';
  import Head from './head.svelte';
  import { titleStore } from '$lib/titleStore';

  let text = "";
  let a = "";

  injectSpeedInsights();

  onMount(() => {
    text = localStorage.getItem("namaa") || "";
  });

  const ahh = () => {
    text = a.trim();
    a = ""
    localStorage.setItem("namaa", text);
  };
  const haha = () => {
    text = ""
    localStorage.removeItem("namaa")
  }
  const handleInput = (event) => (a = event.target.value.replace(/[^A-Za-z0-9]/g, ''));
</script>

<svelte:head>
  <title>{$titleStore}</title>
</svelte:head>

<div class="h-full bg-indigo-950">
  <header class="sticky top-0">
    <div class="bg-slate-600 bg-opacity-80 backdrop-blur-sm py-2 text-center">
      <h1 class="text-white font-kanit font-medium">{$titleStore}</h1>
      <span class="text-sm">{text}</span><button class="w-24 rounded-full bg-amber-600 ml-4 active:bg-opacity-80" on:click={haha}> Ubah nama</button>
    </div>
  </header>

  <div class="app p-3">
    <main>
      {#if text}
        <slot />
      {:else}
        <input
          type="text"
          class="px-2 bg-white rounded-full outline-none ring ring-yellow-300 text-black placeholder:text-gray-600/80"
          placeholder="Masukkan Nama"
          bind:value={a}
          on:input={handleInput}
        />
        <button class="w-24 rounded-full bg-amber-600 mt-4 active:bg-opacity-80" on:click={ahh}>
          Cari
        </button>
      {/if}
    </main>
  </div>

  <footer class="fixed bottom-0 left-0 w-full bg-slate-600 text-white p-4 bg-opacity-80">
    <div class="flex flex-col items-center gap-y-4">
      <a href="https://github.com/Haluan157" class="link">Haluan157</a>
    </div>
  </footer>
</div>