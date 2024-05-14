<script lang="ts">
  import { T, useThrelte } from '@threlte/core'
  import { OrbitControls, Environment, HTML } from '@threlte/extras'
  import { RoundedBoxGeometry } from '@threlte/extras'
  import * as THREE from 'three'
  import { Progress } from "$lib/components/ui/progress"
  import { ChevronLast, ChevronFirst, Pause, Play, Github, Mail } from 'lucide-svelte'
  import { onDestroy } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { Button } from "$lib/components/ui/button"

  const r = tweened(0, {
    duration: 10000,
  })

  $r += Math.PI*2
  const timer = setInterval(() => {
    $r += Math.PI*2
  }, 10000)

  onDestroy(() => {
    clearInterval(timer)
  })

  const { scene } = useThrelte()
  scene.background = new THREE.Color(0xFCE4EC)

</script>

<!-- <Environment path="/" files="kiara_1_dawn_1k.hdr" /> -->

<T.PerspectiveCamera
  position={[-2.2, 0.75, 1.4]}
  makeDefault
>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.HemisphereLight args={[0xffffff, 0xbfd4d2, 3]} />
<T.DirectionalLight args={[0xffffff, 1]} position={[1, 2, 3]} castShadow />
+
<T.Group position={[0, -0.349, 0]}>

  <HTML position={[0, -0.14, 0.68]} rotation={[-Math.PI/2, 0, 0]} transform>
    <div class="w-10 h-3 flex justify-between">
      <span class="text-primary text-[3px] font-bold">JOSHUA LEAN</span>
    </div>
  </HTML>

  <HTML position={[-0.6, -0.14, 0]} rotation={[-Math.PI/2, 0, -Math.PI/2]} transform>
    <div class="w-10 flex flex-col justify-center gap-[1px]">
      <Progress value={33} class="h-[1.5px] bg-[#FCE4EC]" />
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <span class="text-primary text-[2px] font-bold">PASSIONFRUIT</span>
          <span class="text-primary text-[2px] leading-[0.5px]">DRAKE</span>
        </div>
        <div class="flex gap-[1px]">
          <Button size="icon" variant="ghost" class="hover:text-white hover:bg-primary text-primary w-1 h-1 rounded-[1px]">
            <ChevronFirst size="4" strokeWidth="2" />
          </Button>
          <Button size="icon" variant="ghost" class="hover:text-white hover:bg-primary text-primary w-1 h-1 rounded-[1px]">
            <Pause size="4" strokeWidth="2" />
          </Button>
          <Button size="icon" variant="ghost" class="hover:text-white hover:bg-primary text-primary w-1 h-1 rounded-[1px]">
            <ChevronLast size="4" strokeWidth="2" />
          </Button>
        </div>
      </div>
    </div>
  </HTML>

  <T.Group rotation={[0, $r, 0]}>
    <HTML rotation={[-Math.PI/2, 0, -Math.PI/2]} position={[-0.5, 0.19, 0]} transform occlude>
      <div class="flex flex-col items-center">
        <span class="font-bars text-[5px] text-primary/70 leading-[3.5px]">passion</span>
        <span class="font-bars text-[5px] text-primary/70 leading-[3.5px]">fruit</span>
      </div>
    </HTML>
    <T.Mesh position={[0, 0.18, 0]}>
      <T.CylinderGeometry args={[0.7, 0.7, 0.01, 128]} />
      <T.MeshPhysicalMaterial 
        color={true ? 0xFCE4EC : 0x8EDCE6}
        transmission={0.5}
        roughness={0.1}
        reflectivity={1}
        transparent
      />
    </T.Mesh>
  </T.Group>

  <T.Mesh castShadow>
    <RoundedBoxGeometry args={[1, 0.3, 1]} smoothness={2} />
    <T.MeshStandardMaterial color={0xffffff} />
  </T.Mesh>

  <T.Mesh position={[0, 0.16, 0]}>
    <T.CylinderGeometry args={[0.42, 0.47, 0.02, 32]} />
    <T.MeshStandardMaterial color={0xcccccc} />
  </T.Mesh>

  <T.Mesh position={[0, 0.18, 0]}>
    <T.CylinderGeometry args={[0.03, 0.03, 0.03, 16]} />
    <T.MeshStandardMaterial color={0x777777} />
  </T.Mesh>
</T.Group>

<T.Mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
  <T.ShadowMaterial color={0xd81b60} transparent={true} opacity={0.075} side={THREE.DoubleSide} />
  <T.PlaneGeometry args={[20, 20]} />
</T.Mesh>