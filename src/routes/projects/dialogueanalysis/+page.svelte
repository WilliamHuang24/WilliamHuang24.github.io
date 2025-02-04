<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Dialogue analysis
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"python"}/>

      <a href="https://github.com/WilliamHuang24/data-science-projects" class="ml-auto hover:underline">
        github
      </a>
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Overview
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Given a CSV file containing the dialogue in a show, compile adjacency graph to highlight and visualise data attributes. Load and export JSON file containing
        graphs with different centrality measures, using degree centrality, weighted centrality and closeness centrality to highlight different dialogue attributes.
      </div>
    </div>
  </div>
</div>
