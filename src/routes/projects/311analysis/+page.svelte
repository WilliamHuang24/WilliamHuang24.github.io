<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    311 Analysis
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"python"}/>
      <ClickableLogo svg={"matplotlib"}/>
      
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
        The given task is to analyse the source of noise complaints across the year as well as to analyse the most likely locations to find vermin.
        The question is presented through text discussion, but must be condensed into a valid data science question with regards to the relevant data set, 
        a list of 311 calls in the city of New York in the year 2023.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Analysis and plotting
      </div>

      <div class="text-md md:text-lg text-gray-500">
        After formulating a question, data science techniques are applied to the data set. Incomplete or malformed data is trimmed, and then a cleaned data set
        is collated and data analysis proceeds. The results are then graphed with matplotlib to deliver a complete picture to stakeholders.
      </div>
    </div>
  </div>
</div>