<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">Command-Line OS</div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">Built with</div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"c"} />
    </div>
  </div>

  <hr class="m-2 border-gray-200" />

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">Overview</div>

      <div class="text-md md:text-lg text-gray-500">
        The goal was to create a Unix style shell, supporting the common
        commands found in the Linux environment. The shell has functionalities
        such as multi-threaded process spawning, scripting capabilities, CPU
        scheduling, and process management with virtual address spaces and
        paging.
      </div>

      <div class="text-xl md:text-3xl">Shell</div>

      <div class="text-md md:text-lg text-gray-500">
        The system provides a subset of the common Linux commands. Examples
        include, but are not limited to:

        <div
          class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-1 px-2"
        >
          ls, cd, mkdir, touch, pwd
        </div>
      </div>

      <div class="text-md md:text-lg text-gray-500 pt-2">
        In order to provide the functionality and any related command line
        arguments, a simple parser was written.
      </div>

      <div class="text-xl md:text-3xl">Process scheduling</div>

      <div class="text-md md:text-lg text-gray-500">
        The main shell environment worked in a single threaded-manner. Any
        processes on the go from the shell would undergo scheduling to ensure
        starvation does not happen. The scheduling algorithms used are:

        <ul class="ml-10 list-disc">
          <li>Round Robin</li>
          <li>First Come, First Served</li>
        </ul>

        In the simplistic environment, pre-empting is not under consideration.
      </div>

      <div class="text-xl md:text-3xl">Multi-threaded process</div>

      <div class="text-md md:text-lg text-gray-500">
        The shell has the option for scripts to be executed in the background asynchronously to the normal shell process. This was done through 
        the use of pthreads, running a seperate shell env with the script.
      </div>
    </div>
  </div>
</div>
