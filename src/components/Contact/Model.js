import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Contact.glb");
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();

  useEffect(() => {
    for (const actionName in actions) {
      actions[actionName].play();
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null} scale={viewport.width / 6.5}>
      <group name="Scene">
        <group
          name="BézierCircle"
          rotation={[-Math.PI, 0, 2.618]}
          scale={2.637}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 0.769]}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.001"]}
            position={[-0.661, -0.005, -0.414]}
            rotation={[0, 0, Math.PI]}
            scale={[0.272, 0.272, 0.353]}
          />
        </mesh>
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Material}
          position={[-0.072, -0.041, -2.631]}
          rotation={[1.305, -0.989, 1.876]}
          scale={0.6}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Contact.glb");
