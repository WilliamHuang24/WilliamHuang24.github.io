<script lang="ts">
  import { base } from '$app/paths';
	import '../app.css';
	import GitHub from "lucide-svelte/icons/github";
	let { children } = $props();
</script>

<style lang="postcss">
  :global(body) {
    @apply bg-slate-100
  }
</style>

<div class="w-full h-screen flex flex-col items-center">
  <!-- nav -->
  <div class="w-full flex flex-row px-4 py-2">
		<a href="{base}/">
			<div class="font-mono text-2xl p-2 hover:underline">
				William Huang
			</div>
		</a>
    
    <a 
      href="https://github.com/WilliamHuang24/"
      class="hover:bg-slate-200 ml-auto p-2 rounded-lg"  
    >
      <GitHub size={28}/>
    </a>
  </div>

  <!-- center element -->
  {@render children()}
</div>


