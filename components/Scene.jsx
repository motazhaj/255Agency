"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useRef, useState } from "react";
import { useProgress, Html, Sparkles, OrbitControls } from "@react-three/drei";

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
  const controlsRef = useRef();
  const [isAutoRotate, setAutoRotate] = useState(true);
  const delayTime = 10000; // Delay in milliseconds
  let timer = useRef();

  const handleStart = () => {
    setAutoRotate(false); // Disable auto-rotate when interacting
    if (timer.current) clearTimeout(timer.current); // Clear any existing timers
  };

  const handleEnd = () => {
    timer.current = setTimeout(() => setAutoRotate(true), delayTime); // Re-enable auto-rotate after delay
  };

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        position: camPosition,
        fov: 25,
      }}
      className="relative h-svh"
    >
      <directionalLight position={[30, 20, 5]} intensity={5} />
      <ambientLight intensity={1} />
      <OrbitControls
        ref={controlsRef}
        autoRotate={isAutoRotate}
        onStart={handleStart}
        onEnd={handleEnd}
        autoRotateSpeed={0.5}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.9}
      />

      <Suspense fallback={<Loader />}>
        <Sparkles count={1000} scale={15} size={10} speed={0.5} color={"#fff"} />
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
      <div className="annotation" onClick={() => console.log("Annotation clicked")}>
        {children}
      </div>
    </Html>
  );
}
