<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Concurrent Simulation
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"java"}/>

      <a href="https://github.com/WilliamHuang24/concurrency-projects" class="ml-auto hover:underline">
        github
      </a>
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Simulation description
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Every sea creature has a 3D footprint and and tries to move to an adjacent square on either the x, y or z axis at every time step. A thread (creature) is 
        able to move once they have acquired the locks to their new position. In this scenario. If it is not possible, they stay in the same place. They will only
        relinquish the locks on their current position if they have moved.
      </div>

      <div class="text-xl md:text-3xl">
        Concurrency resolution
      </div>

      <div class="text-md md:text-lg text-gray-500">
        In order for each thread to be able to run concurrently without deadlocks and race conditions, we establish a global priority ordering, meaning that 
        there will not be a case where both threads will wait on each other while attempting to acquire locks, as they will always acquire them in the same order.
        As the acquisition is atomic, this means that there will be no race conditions.
      </div>
    </div>
  </div>
</div>