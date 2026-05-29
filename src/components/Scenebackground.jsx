import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef } from 'react'

function Orb({ position, scale, speed }) {
  const ref = useRef(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.08 * speed
    ref.current.rotation.y = state.clock.elapsedTime * 0.12 * speed
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.5} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color="#bfc7ff"
          transparent
          opacity={0.12}
          distort={0.35}
          speed={1.6}
          roughness={0.05}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  )
}

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Orb position={[-2.4, 1.8, 0]} scale={1.35} speed={0.8} />
        <Orb position={[2.5, -1.4, -0.5]} scale={1.1} speed={1.1} />
        <Orb position={[0.8, 2.8, -1.4]} scale={0.8} speed={0.65} />
      </Canvas>
    </div>
  )
}