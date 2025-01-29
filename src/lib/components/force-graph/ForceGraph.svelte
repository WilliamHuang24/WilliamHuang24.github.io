<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import * as d3 from "d3";

  import { projects, getColor } from "./data.ts";

  // https://gist.github.com/0penBrain/7be59a48aba778c955d992aa69e524c5

  // Sample data
  let nodes = [
    { obj: 'site', nodeRadius: 4, color: "beige", selected: false},
    { obj: 'compiler', nodeRadius: 30, color: "coral", selected: false},
    { obj: 'text', nodeRadius: 40, color: "cornsilk", selected: false},
    { obj: 4, nodeRadius: 20, color: "cyan", selected: false},
    { obj: 5, nodeRadius: 30, color: "red", selected: false},
  ];

  let data = Array.from(projects, (element) => {
    element.nodeRadius = 40;
    element.selected = false;
    element.color = getColor(element.category);

    return element;
  });

  console.log(nodes);

  const width = 960,
    height = 540;

  onMount(() => {
    // Create the SVG container
    const svg = d3.select("#graph")
      .attr("viewBox", [0, 0, width, height]);

    // Create the simulation
    const simulation = d3
      // @ts-ignore
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(-3))
      .force("x", d3.forceX(width / 2).strength(0.005))
      .force("y", d3.forceY(height / 2).strength(0.005))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide((d) => Math.max(d.nodeRadius, 20) + 0.5).strength(1))
      .alphaTarget(0.3);

    // Create nodes
    const node = svg
      .append("g")
      .attr("stroke", "black")
      .attr("stroke-width", "0.01em")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (d) => Math.max(d.nodeRadius, 20))
      .attr("fill", (d) => d.color)
      .on('click', (d) => {
        window.location.href = d.target.__data__.url;
      })
      .on('mouseover', (d) => {
        d.target.style.strokeWidth = 1;
        d.target.__data__.selected = true;
      })
      .on('mouseleave', (d) => {
        d.target.style.strokeWidth = "0.01em";
        d.target.__data__.selected = false;
      })

    var text = svg
      .append("g")
      .selectAll("text")
      .data(simulation.nodes())
      .enter().append("text")
      .attr('text-anchor', 'middle')
      .text((d) => d.name)
      .attr('font-size', (d) => Math.max(d.nodeRadius / 3, 20 / 3))
      .style('pointer-events', 'none')
      .style('font-family', 'Menlo, Monaco, Consolas')

    // Update positions on each tick
    simulation.on("tick", () => {
      // @ts-ignore
      node
        .attr("cx", (d) => {
          return d.x = Math.max(d.nodeRadius, Math.min(width - d.nodeRadius, d.x));
        })
        .attr("cy", (d) => {
          return d.y = Math.max(d.nodeRadius, Math.min(height - d.nodeRadius, d.y));
        });
      text
        .attr("dx", (d) => d.x).attr("dy", (d) => d.y)
        .attr("text-decoration", (d) => d.selected ? "underline" : "none");
    });

    function dragStart(event) {
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }

      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function drag(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragEnd(event) {
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }

      event.subject.fx = null;
      event.subject.fy = null;
    }

    const dragHandler = d3.drag()
      .on("start", dragStart)
      .on("drag", drag)
      .on("end", dragEnd);

    dragHandler(node);
  });

  let group = $state(false);
</script>

<div class="grow relative border-2 justify-center aspect-video">
  <!-- enable javascript message -->
  <noscript>
    <div class="h-full w-full flex flex-col gap-2 pt-2 justify-center content-center">
      <div class="font-mono text-xl px-6 text-center">
        The dynamic display requires JavaScript
      </div>
  
      <div class="font-mono text-xl px-6 text-center">
        Enable JavaScript or visit 
        <a href="/projects" class="underline">
          projects
        </a>
      </div>
    </div>
  </noscript>

  <!-- group selector -->
  <div class="absolute bottom-0 left-0 p-2">
    <input type="checkbox" id="group" bind:checked={group}/>
    <label for="group" class="font-mono select-none">Group by type</label>
  </div>

  <svg id="graph" class="class=w-full h-full select-none" />
</div>


