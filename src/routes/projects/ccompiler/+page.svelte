<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    C Compiler
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"java"}/>
      <ClickableLogo svg={"junit"}/>
      
      <!-- <a href="https://github.com/" class="ml-auto hover:underline">
        github
      </a> -->
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Lexing and parsing
      </div>

      <div class="text-md md:text-lg text-gray-500">
        Given a (fully functional) subset of the C language, akin to earlier versions like C89, the lexer takes in the source code file and produces a stream of tokens.
        Then, the tokens are fed into the parser, where any syntax errors are filtered out and it ensures that the program is well formed.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Abstract syntax tree
      </div>

      <div class="text-md md:text-lg text-gray-500">
        The intermediate representation chosen was an abstract syntax tree, built using a valid stream of tokens from the previous step. In this step, we take care of important
        things such as operator precedence.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        MIPS generation
      </div>

      <div class="text-md md:text-lg text-gray-500">
        From the abstract syntax tree, we generated MIPS assembly through a series of steps, starting with register allocation.
        Since there is only a set number of registers, we ensure that to make the most use of CPU architecture, we use the most registers possible,
        a problem reduced to graph colouring. The next step is just mapping the relevant statements to the MIPs assembly, resulting in our compiled program.
      </div>
    </div>
  </div>
</div>