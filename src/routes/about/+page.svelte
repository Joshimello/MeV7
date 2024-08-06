<script lang="ts">
  import * as Table from "$lib/components/ui/table"
  import * as Dialog from "$lib/components/ui/dialog"
</script>

<div class="flex flex-col gap-12">
  <div class="flex flex-col gap-6">
    <p class="text-3xl lg:text-justify">
      Good morning! My name is Joshua Lean. I am a student, currently studying electrical engineering and computer science at National Tsing Hua University.
    </p>
    <p class="text-3xl lg:text-justify">
      I love working on web development projects, machine learning and a bit of everything else. I enjoy designing 404 pages when bored, also a huge production line simulation game enthusiast.
    </p>
  </div>

  <div class="flex xl:flex-row flex-col gap-6">
    <Table.Root>
      <Table.Body>
        <Table.Row>
          <Table.Cell class="">Contact</Table.Cell>
          <Table.Cell class="text-right font-semibold"> 
            <a href="mailto:joshualeanjw@gmail.com" target="_blank">
              joshualeanjw@gmail.com
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="">GitHub</Table.Cell>
          <Table.Cell class="text-right font-semibold">
            <a href="https://github.com/Joshimello" target="_blank">
              github.com/Joshimello
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="">Location</Table.Cell>
          <Table.Cell class="text-right font-semibold">
            Hsinchu, Taiwan
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
    <div class="flex-shrink-0 h-72 w-full sm:w-96 rounded-xl overflow-hidden">
      <img src="me.jpg" alt="me" class="w-full h-full object-cover" />
    </div>
  </div>

  <div class="flex justify-between">
    <Dialog.Root>
      <Dialog.Trigger class="underline underline-offset-2">
        Credits
      </Dialog.Trigger>
      <Dialog.Content>
        <p>
          Crafted with luv by me!<br/>
          Built with <a class="underline" href="https://kit.svelte.dev" target="_blank">SvelteKit</a> and <a class="underline" href="https://vitejs.dev" target="_blank">Vite</a>.<br/>
          Styled with <a class="underline" href="https://tailwindcss.com" target="_blank">TailwindCSS</a> and <a class="underline" href="https://www.shadcn-svelte.com" target="_blank">Shadcn-svelte</a>.<br/>
          Font used is <a class="underline" href="https://fonts.google.com/specimen/Plus+Jakarta+Sans" target="_blank">Plus Jakarta Sans</a>.
        </p>
      </Dialog.Content>
    </Dialog.Root>
    <a href="/projects" class="underline underline-offset-2">
      View projects →
    </a>
  </div>

</div>