<script lang="ts">
  import { type Project, projects } from "$lib/components/force-graph/data.js";
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";

  import { base } from "$app/paths";
  import { List } from "lucide-svelte";

  const colourMap = new Map([
    ["java", "#f87171"],
    ["c", "#f97316"],
    ["c++", "#f97316"],
    ["python", "#14b8a6"],
    ["javascript", "#22c55e"],
  ]);

  function colour(tool: string) {
    if (colourMap.has(tool)) {
      return colourMap.get(tool);
    } else {
      return "#f59e0b";
    }
  }

  let toolSet: Set<string> = new Set();

  projects.forEach((el) => {
    el.tools.forEach((tool) => toolSet.add(tool));
  });

  const toolList = Array.from(toolSet);

  let toolFilter: string[] = $state([]);
  let searchFilter = $state("");

  let toolSearchFilter = $state("");
  let open = $state(false);
</script>

<!-- search bar -->
<div
  class="w-full flex flex-col gap-2 items-center my-4 md:my-6 font-mono relative inline-block"
>
  <input
    bind:value={searchFilter}
    placeholder="Search..."
    autocomplete="off"
    class="w-1/4 rounded-lg px-2 py-1"
  />

  <div class="w-1/4 flex flex-row flex-wrap gap-1">
    {#each toolFilter as tool}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <div
        class="cursor-pointer px-2 md:px-3 pb-1 rounded-full hover:ring-1 ring-black"
        style="background-color:{colour(tool)}"
        onclick={() => {
          toolFilter = toolFilter.filter((el) => el !== tool)
        }}
        aria-label="remove tool"
      >
        {tool} x
      </div>
    {/each}

    <div class="dropdown">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        id="dd-btn"
        tabindex="0"
        role="button"
        class="cursor-pointer px-2 md:px-3 pb-1 rounded-full bg-slate-200 select-none hover:bg-slate-300"
      >
        +
      </div>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul tabindex="0" class="dropdown-content menu bg-slate-200 rounded-md z-1 shadow-sm mt-1">
        {#each toolList.filter((el) => el.includes(toolSearchFilter) && !toolFilter.includes(el)) as tool}
          <li>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div 
              tabindex="0"
              role="button"
              onclick={() => {
                toolFilter.push(tool);

                if (document.activeElement instanceof HTMLElement)
                  document.activeElement.blur();
              }}
              class="py-1 px-2">{tool}</div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<!-- grid -->
<div class="w-2/3 grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-2 font-mono">
  {#each projects
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((el) => {
      const x = el.name.includes(searchFilter);

      if (toolFilter.length === 0) {
        return x

      } else {
        let y = false;

        toolFilter.forEach((tool) => {
          if (el.tools.includes(tool)) {
            y = true;
            return;
          }
        })

        return x && y;
      }
    })
  as project}
    <a href="{base}{project.url}">
      <div
        class="w-full h-full bg-slate-200 hover:bg-slate-300 rounded-lg p-2 md:p-4 group"
      >
        <div class="flex flex-row">
          <div class="text-xl md:text-3xl font-bold group-hover:underline pb-2">
            {project.name}
          </div>

          <SquareArrowOutUpRight
            class="ml-auto invisible group-hover:visible"
            color="#6b7280"
          />
        </div>

        <div class="flex flex-row flex-wrap gap-2">
          {#each project.tools as tool}
            <div
              class="px-2 md:px-3 pb-1 rounded-full"
              style="background-color:{colour(tool)}"
            >
              {tool}
            </div>
          {/each}
        </div>

        <p class="text-md md:text-lg text-gray-500 m-2">
          {project.description}
        </p>
      </div>
    </a>
  {/each}
</div>
