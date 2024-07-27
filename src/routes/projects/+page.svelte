<script lang="ts">
  import { Badge } from "$lib/components/ui/badge"
  import projects from "$lib/projects"
</script>

<div class="grid grid-cols-1 gap-x-6 gap-y-12">
  {#each projects as project, index}

    <div class="flex flex-col gap-4">
      <div class="h-64 bg-gray-200 rounded-md">
        {#if project.image}
          <img src={project.image} alt={project.image} class="w-full h-full object-cover opacity-90" />
        {:else}
          <img src="noimage.png" alt={project.name} class="w-full h-full object-cover opacity-90" />
        {/if}
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-medium">
          {project.name}
        </span>
        <span class="text-sm text-gray-400 max-w-lg">
          {project.description}
        </span>
        <div class="flex gap-2 mt-2">
          {#each project.field_tags as tag}
            <Badge variant="secondary">
              {tag}
            </Badge>
          {/each}
        </div>
      </div>
    </div>

  {/each}

  🚧 adding more soon 🚧

</div>