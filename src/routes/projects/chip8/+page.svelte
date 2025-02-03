<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Chip-8 Emulator
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"c++"}/>
      <ClickableLogo svg={"sdl"}/>
      
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
        Overview
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Due to the relatively simple nature of the chip-8 instruction set, everything can be simulated in memory. For input, the emulator takes a command line
        argument which specifies which file to read binaries from, which is stored in the simulated memory of the chip.
      </div>

      <div class="text-xl md:text-3xl">
        Instruction set
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Chip-8 only has 36 distict opcodes and 16 registers. With some binary manipulation, each opcode can be parsed and processed, known as the fetch-execute cycle.
        The timings are not not necessarily accurate as chip-8 was in actuality an interpreter, which means that the delay was variable between execution cycles.
      </div>

      <div class="text-xl md:text-3xl">
        Display and input
      </div>

      <div class="text-md md:text-lg text-gray-500">
        SDL was used to create a window and handle user input. After display instructions are read, the window refreshes based on the updated display. Input is
        mapped to the respective input registers inside chip-8.
      </div>
    </div>
  </div>
</div>