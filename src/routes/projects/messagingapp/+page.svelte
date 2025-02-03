<script lang="ts">
  import ClickableLogo from "$lib/components/ClickableLogo.svelte";
</script>

<div class="w-1/2 mt-10 h-full font-mono">
  <div class="text-3xl md:text-5xl pb-2">Messaging Application</div>

  <div class="flex flex-col gap-2">
    <div class="text-xl md:text-2xl text-gray-400">Built with</div>

    <div class="flex flex-row h-8 gap-4">
      <ClickableLogo svg={"react"} />
      <ClickableLogo svg={"nodejs"} />
      <ClickableLogo svg={"mongodb"} />
    </div>
  </div>

  <hr class="m-2 border-gray-200" />

  <!-- divider -->
  <div class="flex flex-col gap-4 pt-6 px-4">
    <div class="flex flex-col gap-2">
      <div class="text-xl md:text-3xl">Description</div>

      <div class="text-md md:text-lg text-gray-500">
        A full-function text messaging application with support for multiple
        roles, message send and deletes, multiple chat-rooms and file uploads.
      </div>

      <div class="text-xl md:text-3xl">Users</div>

      <div class="text-md md:text-lg text-gray-500">
        Authentication was done through a simple username and password login.
        Each user can create their own chat-rooms and add as many other users as
        they want. They retain their admin role, and are able to have more
        control of their room, such as renaming and deletion.
      </div>

      <div class="text-xl md:text-3xl">Database</div>

      <div class="text-md md:text-lg text-gray-500">
        Using MongoDB, a non-relational database, each chatroom was assigned its
        own id, user list and messages. This way, each chat-room is distinct to
        others enabling the ability to let users only access those available to
        them.
      </div>
    </div>
  </div>
</div>
