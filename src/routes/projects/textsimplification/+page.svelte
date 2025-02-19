<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">Text simplification model</div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">Built with</div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"python"} />
      <ClickableLogo svg={"numpy"} />
    </div>
  </div>

  <hr class="m-2 border-gray-200" />

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">Overview</div>

      <div class="text-md md:text-lg text-gray-500">
        The goal was to achieve text simplification by applying a machine
        translation model, by treating the source English and the simplified
        English as two different languages.
      </div>

      <div class="text-xl md:text-3xl">Training data</div>

      <div class="text-md md:text-lg text-gray-500">
        We used the Wikipedia dataset that contains 167K aligned sentence pairs
        from the original English Wikipdia and the Simple English Wikipedia.
      </div>

      <div class="text-xl md:text-3xl">Model</div>

      <div class="text-md md:text-lg text-gray-500">
        A Recurrent Neural Network encoder-decoder model with attention was used
        to approach the problem, as RNN's have are known to perform well on with
        many-to-many mappings as have a sequence of text mapped to another
        sequence.
      </div>

      <div class="text-xl md:text-3xl">Evaluation and results</div>

      <div class="text-md md:text-lg text-gray-500">
        In order to qualify the results, the following metrics were used:
        <ul class="list-disc pl-10 py-2">
          <li>
            <span class="font-bold">Similarity/Meaning:</span> Cosine, Jaccard Similarity
          </li>
          <li>
            <span class="font-bold">Readability:</span> Dale-Chall Readability Score,
            Flesch-Kincaid Readability Grade Level
          </li>
        </ul>
        The machine translation model was able to perform better than a simple word-replacement
        model with the added benefit of RNN being that it can change sentence structure
        freely rather than just replacing words.
      </div>
    </div>
  </div>
</div>
