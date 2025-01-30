<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import * as d3 from "d3";

  import { projects, getColor, getX } from "./data.ts";
  

  // get size: https://gist.github.com/0penBrain/7be59a48aba778c955d992aa69e524c5

  let data = Array.from(projects, (element) => {
    element.selected = false;
    element.color = getColor(element.category);

    return element;
  });

  const width = 960, height = 540;
  const minRadius = 20;

  let simulation = d3.forceSimulation(data);

  onMount(() => {
    // Create the SVG container
    const svg = d3.select("#graph")
      .attr("viewBox", [0, 0, width, height]);

    // Create the simulation
    simulation = d3
      // @ts-ignore
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(-3))
      .force("x", d3.forceX(width / 2).strength(0.005))
      .force("y", d3.forceY(height / 2).strength(0.005))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide((d) => Math.max(d.nodeRadius, minRadius) + 0.5).strength(1))
      .alphaTarget(0.3);

    // Create nodes
    const node = svg
      .append("g")
      .attr("stroke", "black")
      .attr("stroke-width", "0.01em")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (d) => Math.max(d.nodeRadius, minRadius))
      .attr("fill", (d) => d.color)
      .on('click', (d) => {
        window.location.href = base + d.target.__data__.url;
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
      .enter()
      .append("text")
      .attr('text-anchor', 'middle')
      .each(function each(d, i) {
        const split = d.name.split(' ');

        split.forEach((el, i) => {
          d3.select(this)
            .append('tspan')
            .attr("dx", 0)
            .attr("dy", (d) => (i * 1.2) + "em")
            //.attr("transform", "translate(0," + (5 * i) + ")")
            .text(el);
        });
      })
      // .text((d) => d.name)
      .attr('font-size', (d) => Math.max(d.nodeRadius / 3, minRadius / 3))
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

      text
        .selectAll("tspan")
        .attr("x", (d) => d.x).attr("y", (d) => d.y);
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

  $effect(() => {
    if (group) {
      simulation
        .force("x", null)
        .force("x", 
          d3.forceX()
            .x(d => getX(d.category, width))
            .strength(0.01)
          ); 
    } else {
      simulation
        .force("x", null)
        .force("x", d3.forceX(width / 2).strength(0.005));
    }

    console.log(simulation.force("x").toString());
  });
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
        <a href="{base}/projects" class="underline">
          projects
        </a>
      </div>
    </div>
  </noscript>

  <!-- group selector -->
  <div class="absolute bottom-0 left-0 p-2">
    <input type="checkbox" id="group" bind:checked={group} autocomplete="off"/>
    <label for="group" class="font-mono select-none">Group by type</label>
  </div>

  <svg id="graph" class="class=w-full h-full select-none" />

  <div class="absolute top-0 left-0 p-2 font-mono">
    <div class="flex flex-row gap-2">
      <div class="text-sky-500 pl-2">&#9632;</div>
      <span>java</span>

      <div class="text-rose-500 pl-2">&#9632;</div>
      <span>web development</span>

      <div class="text-lime-500 pl-2">&#9632;</div>
      <span>python</span>
    </div>
  </div>
</div>


