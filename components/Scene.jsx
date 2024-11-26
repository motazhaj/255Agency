"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, CameraControls, Sparkles } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [10, 10, 10], fov: 25 }}
      dpr={[1, 1.5]}
      className="relative h-svh"
    >
      <directionalLight position={[30, 20, 5]} intensity={5} />
      <ambientLight intensity={1} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.9} maxDistance={20} minDistance={5} />

      <Suspense fallback={<Loader />}>
        <Sparkles count={2000} scale={15} size={6} speed={0.2} />
        <Model />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

function Annotation({ children, ...props }) {
  return (
    <Html {...props} transform occlude="blending">
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}
