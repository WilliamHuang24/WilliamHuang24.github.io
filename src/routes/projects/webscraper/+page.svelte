<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Web Scraper
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"python"}/>
      
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
        The web scraper visits the Montreal Gazette home page and makes a request with the correct headers. Then, using BeautifulSoup4, the program parses through
        the top stories and collates a list of links to the respective articles. Since the program may be run multiple times, caching is employed to not overwhelm the 
        server with too many requests.
      </div>
    </div>
  </div>
</div>