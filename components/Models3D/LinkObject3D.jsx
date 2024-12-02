import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion-3d";

const LinkObject3D = ({ object, link }) => {
  const router = useRouter();

  return (
    <motion.primitive
      onClick={() => router.push(link)}
      whileHover={{
        scale: 1.1,
        rotateY: 1.2,
        y: 0.02,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      onTap={() => console.log("tapped!")}
      object={object}
    />
  );
};

export default LinkObject3D;
