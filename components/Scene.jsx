"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, CameraControls, Sparkles } from "@react-three/drei";

export default function Scene() {
  const scalingFactor = window.innerWidth / 1300;

  console.log(scalingFactor);

  const computeCamPosition = () => {
    if (scalingFactor < 0.5) {
      return [18, 18, 18];
    } else if (scalingFactor < 0.8) {
      return [13, 13, 13];
    } else {
      return [8, 8, 8];
    }
  };

  const camPosition = computeCamPosition();
  return (
    <Canvas
      onClick={() => console.log(".")}
      gl={{ antialias: true }}
      camera={{
        position: camPosition,
        fov: 25,
      }}
      dpr={[1, 1.5]}
      scale={[2]}
      className="relative h-svh"
    >
      <directionalLight position={[30, 20, 5]} intensity={5} />
      <ambientLight intensity={1} />
      <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.9}
        maxDistance={30}
        minDistance={5}
      />

      <Suspense fallback={<Loader />}>
        <Sparkles count={2000} scale={15} size={6} speed={0.2} color={"#feb470"} />
        <Model />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <h2 className="text-4xl font-bold w-[300px] text-center text-primary">
        Entering 255! {progress.toFixed(1)}%
      </h2>
    </Html>
  );
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
