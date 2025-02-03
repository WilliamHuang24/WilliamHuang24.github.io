<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">
    Learning center management app
  </div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">
      Built with
    </div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"svelte"}/>
      <ClickableLogo svg={"javascript"}/>
      <ClickableLogo svg={"typescript"}/>
      <ClickableLogo svg={"tailwind"}/>
      <ClickableLogo svg={"supabase"}/>
      <ClickableLogo svg={"postgres"}/>
    </div>
  </div>

  <hr class="m-2 border-gray-200">

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Goal
      </div>

      <div class="text-md md:text-lg text-gray-500">
        After school learning centers often have no pre-existing software to help them run their centers. This aims to solve and address the aspects of 
        running and managing of these centers including grade management, employee scheduling and parent-teacher reports.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Authentication
      </div>

      <div class="text-md md:text-lg text-gray-500">
        This is done in two ways:
        <ul class="list-disc pl-10">
          <li>Email and password login</li>
          <li>Third party identity providers</li>
        </ul>

        Upon successful sign-in, a JWT is issued to the user with a set expiry date.
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Database
      </div>

      <div class="text-md md:text-lg text-gray-500">
        PostgreSQL is the database of choice, using their row-level-security to enable Role Based Access Control. This way, only authenicated users
        with the correct role can access the correct information. With the model in the database, data manipulation can be controlled through the database API.
      </div>
    </div>


    <!-- <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">
        Deploying
      </div>

      <div class="text-md md:text-lg text-gray-500">

      </div>
    </div> -->
  </div>
</div>