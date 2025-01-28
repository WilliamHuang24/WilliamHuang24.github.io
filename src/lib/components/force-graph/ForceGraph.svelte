<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import * as d3 from "d3";

  // Sample data
  let data = [
    { obj: 'site', nodeRadius: 20, color: "beige"},
    { obj: 'compiler', nodeRadius: 30, color: "coral"},
    { obj: 'text', nodeRadius: 40, color: "cornsilk"},
    { obj: 4, nodeRadius: 20, color: "cyan"},
    { obj: 5, nodeRadius: 30, color: "red"},
  ];

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
      .force("charge", d3.forceManyBody().strength(10))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide((d) => d.nodeRadius + 0.5))
      .alpha(1);

    // Create nodes
    const node = svg
      .append("g")
      .attr("stroke", "black")
      .attr("stroke-width", "0.01em")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (d) => d.nodeRadius)
      .attr("fill", (d) => d.color)
      .on('click', (d) => {
        console.log("hi");
      });

    var text = svg
      .append("g")
      .selectAll("text")
      .data(simulation.nodes())
      .enter().append("text")
      .attr('text-anchor', 'middle')
      .text((d) => d.obj)
      .attr('font-size', (d) => d.nodeRadius / 3)
      .style('pointer-events', 'none');

    // Update positions on each tick
    simulation.on("tick", () => {
      // @ts-ignore
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      text.attr("dx", (d) => d.x).attr("dy", (d) => d.y);
    });

    function dragStart(event) {
      if (!event.active) {
        simulation.alphaTarget(0.3).restart();
      }

      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function drag(event) {
      if (0 <= event.x && event.x < width && 0 <= event.y && event.y < height) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
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
</script>

<svg id="graph" class="class=w-full h-full select-none" />
  <!-- {#each data as point}
    <circle
      class="node"
      r={point.nodeRadius}
      fill={point.color}
      stroke=1
      stroke-width=1
    >

    </circle>
  {/each} -->

