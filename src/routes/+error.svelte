<script lang="ts">
  import { page } from "$app/stores"

  const randomImageSrc = '/error/' + (Math.floor(Math.random() * 15) + 1) + '.jpg'
</script>

<div class="flex flex-col">
  <p class="text-3xl text-justify">
    {#if $page.error}
      {$page.status} {$page.error.message},
    {:else}
      000 Unknown error,
    {/if}
    やべー! <span class="text-xs">yabe (oh no)</span>
  </p>
  <div class="fixed bottom-0 right-0 pointer-events-none">
    <img alt="error" src={randomImageSrc} class="h-96" />
  </div>
</div>