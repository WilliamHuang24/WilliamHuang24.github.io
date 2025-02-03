<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Metro Simulation
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"java"}/>

      <a href="https://github.com/" class="ml-auto hover:underline">
        github
      </a>
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Problem description
      </div>

      <div class="text-md md:text-lg text-gray-500">
        For order to be maintained on the metro, the is an upper limit to the number of people allowed into the station. Each station runs concurrently with
        every other station, and the lack of communication between stations means that a simple atomic read/write solution cannot work. There is, 
        however, a global overseer in the network, who communicates periodically with the stations.
      </div>

      <div class="text-xl md:text-3xl">
        Solution
      </div>

      <div class="text-md md:text-lg text-gray-500">
        To acquire an accurate count, the overseer has the ability to aquire a synchronized state with each station, and passes instructions on whether to allow the 
        flow in of passengers or to only allow passengers off.
      </div>
    </div>
  </div>
</div>