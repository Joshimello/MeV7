import type { RopeImpulseJoint } from '@dimforge/rapier3d-compat'
import { Vector3 } from 'three'
import { useJoint } from '@threlte/rapier'

export const isVector3 = (v: any): v is Vector3 => {
  return v.isVector3
}

export const useRopeJoint = (
  anchorA: Parameters<Vector3['set']> | Vector3,
  anchorB: Parameters<Vector3['set']> | Vector3,
  length: number,
) => {
  return useJoint((rbA, rbB, { world, rapier }) => {
    const jaA = isVector3(anchorA) ? anchorA : new Vector3(...anchorA)
    const jaB = isVector3(anchorB) ? anchorB : new Vector3(...anchorB)

    const params = rapier.JointData.rope(length, jaA, jaB)

    return world.createImpulseJoint(params, rbA, rbB, true) as RopeImpulseJoint
  })
}