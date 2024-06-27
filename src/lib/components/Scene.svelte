<script lang="ts">
  import { T, useTask, useThrelte } from '@threlte/core'
  import * as THREE from 'three'
  import { OrbitControls, MeshLineGeometry, MeshLineMaterial } from '@threlte/extras'
  import { Collider, RigidBody, useJoint, Debug, usePrismaticJoint } from '@threlte/rapier'

	const { joint, rigidBodyA: fixed, rigidBodyB: j1 } = useJoint((rbA, rbB, { world, rapier }) => {
    const params = rapier.JointData.rope(
      1, { x: 0, y: 0, z: 0 }, { x: 0.5, y: 0, z: 0 }
    )
    return world.createImpulseJoint(params, rbA, rbB, true)
  })

  const { joint: joint2, rigidBodyA: j2, rigidBodyB: j3 } = useJoint((rbA, rbB, { world, rapier }) => {
    const params = rapier.JointData.rope(
      1, { x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }
    )
    return world.createImpulseJoint(params, rbA, rbB, true)
  })

  $: curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
  ])

  let bandPoints = Array(33).fill(new THREE.Vector3(0, 0, 0))

  const { start, stop, started, task } = useTask((delta) => {
    // curve.points[0].copy($j4?.translation() as THREE.Vector3 || new THREE.Vector3())
    curve.points[0].copy($j3?.translation() as THREE.Vector3 || new THREE.Vector3())
    curve.points[1].copy($j1?.translation() as THREE.Vector3 || new THREE.Vector3())
    curve.points[2].copy($fixed?.translation() as THREE.Vector3 || new THREE.Vector3())
    bandPoints = curve.getPoints(32)
  })


  
</script>

<!-- <Debug /> -->

<RigidBody bind:rigidBody={$fixed} type="fixed" />

<T.Group>
  <RigidBody bind:rigidBody={$j1}>
    <Collider shape="ball" args={[0.1]} />
  </RigidBody>
  <RigidBody bind:rigidBody={$j2}>
    <Collider shape="ball" args={[0.1]} />
  </RigidBody>
</T.Group>

<RigidBody bind:rigidBody={$j3}>
  <Collider shape="ball" args={[0.1]} />
</RigidBody>

<T.Mesh>
  <MeshLineGeometry points={bandPoints} />
  <MeshLineMaterial color={0x000000} width={2} attenuate={false} />
</T.Mesh>

<T.Mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -3, 0]}>
  <T.PlaneGeometry args={[10, 10]} />
  <T.MeshBasicMaterial color={0x00ff00} />
</T.Mesh>

<T.PerspectiveCamera
  makeDefault
  position={[4, 0, 7]}
>
  <OrbitControls
    enableDamping
  />
</T.PerspectiveCamera>