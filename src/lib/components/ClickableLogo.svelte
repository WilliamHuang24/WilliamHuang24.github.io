<script lang="ts">
  import { base } from "$app/paths";

  const site = new Map([
    ['css', 'https://en.wikipedia.org/wiki/CSS'],
    ['d3', 'https://d3js.org/'],
    ['html', 'https://en.wikipedia.org/wiki/HTML'],
    ['java', 'https://www.java.com/en/'],
    ['javascript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
    ['junit', 'https://junit.org/junit5/'],
    ['svelte', 'https://svelte.dev/'],
    ['tailwind', 'https://tailwindcss.com/'],
    ['typescript', 'https://www.typescriptlang.org/'],
    ['python', 'https://www.python.org/'],
    ['numpy', 'https://numpy.org/']
  ]);

  let { svg } = $props();

  const link = site.get(svg);
  const svgLink = `${base}/icons/${svg}.svg`
</script>

<a href={link} class="h-full aspect-square aspectborder-2">
  <img src={svgLink} alt={svg}>
</a>

