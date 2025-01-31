<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Minesweeper Solver
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"python"}/>
      <ClickableLogo svg={"numpy"}/>
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
        The goal was to train a reinforcement learning agent to be able to play the game of Minesweeper with high accuracy. Due to the random nature of the
        game, the board size was small to reduce training time and reduce noise during training.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Sandbox Minesweeper environment
      </div>

      <div class="text-md md:text-lg text-gray-500">
        In order to train efficiently and effectively, a fast Minesweeper environment needed to be created. First, there is the information exposed to the agent,
        basically what the player would see in the game (i.e. the revealed squares). Then, the other concern is the moves made, namely the chain reveal that often happens
        needs to be efficient. This was done in NumPy, leveraging their nd-array functionality.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Reinforcement Learning
      </div>

      <div class="text-md md:text-lg text-gray-500">
        The two techniques applied were PPO (proximal policy approximation) and A2C (advantage actor critic), applied across board sizes 3x3, 5x5 and 7x7. 
        Then, positive rewards are assigned to each safe move, and negative rewards are assigned to losing moves and duplicate moves. After hyperparameter tuning,
        the two models achieved similar performance reaching about 70% accuracy, which is decent with regards to the non-deterministic nature of the game.
      </div>
    </div>
  </div>
</div>