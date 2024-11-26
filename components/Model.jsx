import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/255.glb");

export default function Model() {
  const group = useRef(null);
  const { animations, scene } = useGLTF("/255.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions);
  }, []);
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
