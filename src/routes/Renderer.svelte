<script lang="ts">
  import { useThrelte, useTask } from '@threlte/core'
  import { onMount } from 'svelte'
  import {
    EffectComposer,
    EffectPass,
    RenderPass,
    SMAAEffect,
    SMAAPreset,
    BloomEffect,
    KernelSize,
    ScanlineEffect,
    VignetteEffect
  } from 'postprocessing'
  import * as THREE from 'three'
  
  const { scene, renderer, camera, size } = useThrelte()
  const composer = new EffectComposer(renderer)

  const setupEffectComposer = (camera: THREE.Camera) => {
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(
      new EffectPass(
        camera,
        new BloomEffect({
          intensity: 1,
          luminanceThreshold: 0.15,
          height: 512,
          width: 512,
          luminanceSmoothing: 0.08,
          mipmapBlur: true,
          kernelSize: KernelSize.MEDIUM
        })
      )
    )
    composer.addPass(
      new EffectPass(
        camera,
        new SMAAEffect({
          preset: SMAAPreset.LOW
        })
      )
    )
    composer.addPass(
      new EffectPass(
        camera,
        new ScanlineEffect({
          density: 2,
          scrollSpeed: 0.01,
        })
      )
    )
    composer.addPass(
      new EffectPass(
        camera,
        new VignetteEffect({
          eskil: false,
          offset: 0.1,
          darkness: 0.5
        })
      )
    )
  }

  $: setupEffectComposer($camera)
  $: composer.setSize($size.width, $size.height)

  const { renderStage, autoRender } = useThrelte()

  onMount(() => {
    let before = autoRender.current
    autoRender.set(false)
    return () => autoRender.set(before)
  })

  useTask((delta) => {
    composer.render(delta)
  }, { stage: renderStage, autoInvalidate: false })

</script>