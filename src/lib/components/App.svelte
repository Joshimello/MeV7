<script lang="ts">
  import { World } from '@threlte/rapier'
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<Canvas>
  <World>
    <Scene />
  </World>
</Canvas>
