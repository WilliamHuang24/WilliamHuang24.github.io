<script lang="ts">
  import GitHub from "lucide-svelte/icons/github";
  import ForceGraph from "$lib/components/force-graph/ForceGraph.svelte";

</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
  <div class="w-full flex flex-row px-4 py-2">
    <div class="font-mono text-2xl p-2">
      William Huang
    </div>

    <a 
      href="https://github.com/WilliamHuang24/"
      class="hover:bg-slate-200 ml-auto p-2 rounded-lg"  
    >
      <GitHub size={28}/>
    </a>
  </div>

  <div class="grow border-2 justify-center">
    <ForceGraph></ForceGraph>
  </div>
</div>
