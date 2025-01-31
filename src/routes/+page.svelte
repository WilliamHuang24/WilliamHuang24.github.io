<script lang="ts">
  import { base } from "$app/paths";
  import ForceGraph from "$lib/components/force-graph/ForceGraph.svelte";
</script>

<ForceGraph />

<!-- footer -->
<div class="p-4 font-mono">
  For a complete, searchable list, visit the 
  <a href="{base}/projects" class="underline hover:italic">projects</a>
  page.
</div>
