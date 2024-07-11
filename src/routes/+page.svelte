<!-- src/routes/index.svelte -->
<script>
  import Text from './text.svelte'
  let a = 1;
  $:out= a*2;
</script>
<sveltekit:head>
  <title>apa</title>
</sveltekit:head>

<button class="add {a===1 ? "bg-black":"bg-blue-300"} focus:outline-none focus:ring focus:border-blue-100" on:click={() => a+=1}>{a}</button><br>
<button class="add bg-black" on:click={() => a=1}>reset</button><br>
<button class="add bg-black" on:click={() => a=100}>to 100</button>
<Text tex={out}/>
<Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/><Text tex={out}/>
<style>
  .add{
  @apply w-24 text-white m-2 rounded-full active:bg-red-300;
  }
</style>