import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      ring2Ref.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Central glowing sphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </mesh>

        {/* Outer ring 1 */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Outer ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.5, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 2.2,
              Math.sin((i / 8) * Math.PI * 2) * 2.2,
              0,
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#00d9ff"
              emissive="#00d9ff"
              emissiveIntensity={2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const IEEE3DLogo = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#00d9ff"
        />
        <FloatingLogo />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset="night" />
      </Canvas>
      
      {/* Glow effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default IEEE3DLogo;
