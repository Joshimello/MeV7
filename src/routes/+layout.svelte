<script lang="ts">
  import "../app.css"
  import "@fontsource-variable/plus-jakarta-sans"
  import { Button } from "$lib/components/ui/button"
  import { fly } from "svelte/transition"
	import { quintOut } from "svelte/easing"
  import { page } from "$app/stores"
</script>

<svelte:head>
  <title>Joshua Lean</title>
</svelte:head>

<style lang="postcss">
  :global(body), :global(html) {
    @apply [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none];
  }
</style>

<div class="container sm:px-16 sm:pt-16 pt-8 flex lg:flex-row flex-col gap-16">

  <div class="w-96">

    <div class="lg:fixed">
      <div class="flex gap-4 items-center">
        <img class="rounded-lg h-8 w-8" alt="pfp" src="https://avatars.githubusercontent.com/u/74640729?v=4&size=64"/> 
        <span class="text-3xl">
          Joshua Lean
        </span>
      </div>
      <div class="">
        <span class="text-sm">
          Developer &nbsp; / &nbsp; Student
        </span>
      </div>
    </div>

    <div class="z-50 fixed bottom-8 lg:bottom-16 flex gap-2 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0">
      <Button 
        size="lg" 
        class="w-32 {$page.url.pathname != '/about' ? 'backdrop-blur-md bg-transparent' : ''}" 
        variant={$page.url.pathname == '/about' ? 'default' : 'outline'} 
        href="/about">
        About
      </Button>
      <Button 
        size="lg" 
        class="w-32 {$page.url.pathname != '/projects' ? 'backdrop-blur-md bg-transparent' : ''}" 
        variant={$page.url.pathname == '/projects' ? 'default' : 'outline'} 
        href="/projects">
        Projects
      </Button>
    </div>

  </div>

  {#key $page.url}
  <div class="flex-1 pb-24" in:fly={{ duration: 500, y: 20, opacity: 0, easing: quintOut }}>
    <slot />
  </div>
  {/key}

</div>

