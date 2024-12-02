import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import LinkObject3D from "./Models3D/LinkObject3D";

useGLTF.preload("/255.glb");

export default function Model() {
  const group = useRef(null);
  const { scene } = useGLTF("/255.glb");
  console.log(scene);

  return (
    <group ref={group}>
      <primitive object={scene} />
      <LinkObject3D object={scene.children.find((c) => c.name === "services")} link="/services" />
      <LinkObject3D object={scene.children.find((c) => c.name === "about")} link="/about" />
      <LinkObject3D object={scene.children.find((c) => c.name === "contact")} link="/contact" />
      <LinkObject3D object={scene.children.find((c) => c.name === "media")} link="/blog" />
    </group>
  );
}
