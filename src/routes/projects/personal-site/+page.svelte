<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Personal Site
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"svelte"}/>
      <ClickableLogo svg={"javascript"}/>
      <ClickableLogo svg={"typescript"}/>
      <ClickableLogo svg={"d3"}/>
      <ClickableLogo svg={"tailwind"}/>

      <a href="https://github.com/WilliamHuang24/WilliamHuang24.github.io" class="ml-auto hover:underline">
        github
      </a>
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Gravity bubble chart
      </div>

      <div class="text-md md:text-lg text-gray-500">
        For the main page, I wanted to have something interactive rather than the usual about me section. So instead, I created a interactive bubble chart.
        Each bubble in the chart is representative of a project, with size proportional to the number of commits the project has.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Forces and interaction
      </div>

      <div class="text-md md:text-lg text-gray-500">
        The forces acting on the bubbles are done through <a href="https://d3js.org/d3-force/position" class="underline">d3's force library</a>. Interaction is done with custom JavaScript, editing the inline style on mouse events
        such as showing which elements are highlighted. A custom drag event is written to handle the moving of bubbles and passed into the d3 simulation.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Grouping
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Grouping was inspired by <a href="https://layercake.graphics/example/CirclePackForce" class="underline">LayerCake</a>'s component using similar methods and svelte reactivity.
        A boolean state was bound the checkbox, and conditional force is applied to the simulation to seperate bubbles into different categories.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Deploying
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Automatic build and deploying to Github pages through Github Actions and Svelte's static site generation.
      </div>
    </div>
  </div>
</div>