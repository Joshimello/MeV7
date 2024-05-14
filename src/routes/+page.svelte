<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Renderer from './Renderer.svelte'
</script>

<div class="w-full h-screen">
  <Canvas>
    <Renderer />
    <Scene />
  </Canvas>
</div>
