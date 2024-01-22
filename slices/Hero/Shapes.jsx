"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import React, { Suspense, useEffect } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      geometry: new THREE.IcosahedronGeometry(3), //Gem
      r: 0.3, // Add r property
    },
    {
      position: [1.2, -0.75, 4],
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), //Torus
      r: 0.4, // Add r property
    },
    {
      position: [-2.4, 2, -4],
      geometry: new THREE.TorusGeometry(1, 0.55, 16, 32), //Donut
      r: 0.5, // Add r property
    },
    {
      position: [-0.8, -0.75, 5],
      geometry: new THREE.SphereGeometry(1), //Ball
      r: 0.6, // Add r property
    },
    {
      position: [1.6, 1.6, -4],
      geometry: new THREE.OctahedronGeometry(1.5), //Diamond
      r: 0.6, // Add r property
    },
    {
      position: [-2.6, -2.6, -1],
      geometry: new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16), //Diamond
      r: 0.6, // Add r property
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0x3498db, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x16a085, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xbdc3c7, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      color: 0x7f8c8d,
      roughness: 0.1,
      metalness: 0.5,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x95a5a6,
      roughness: 0.1,
      metalness: 0.5,
    }),

    // new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x16a085, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0xe67e22, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
  ];

  const soundEffects = [
    new Audio("/sounds/p1.ogg"),
    new Audio("/sounds/p2.ogg"),
    new Audio("/sounds/p3.ogg"),
    new Audio("/sounds/p4.ogg"),
    new Audio("/sounds/p5.ogg"),
    new Audio("/sounds/p6.ogg"),
    new Audio("/sounds/p7.ogg"),
    new Audio("/sounds/p8.ogg"),
    new Audio("/sounds/p9.ogg"),
    new Audio("/sounds/p10.ogg"),
    new Audio("/sounds/p11.ogg"),
    new Audio("/sounds/p12.ogg"),
    new Audio("/sounds/p13.ogg"),
    new Audio("/sounds/p14.ogg"),
    new Audio("/sounds/p15.ogg"),
    new Audio("/sounds/p16.ogg"),
    new Audio("/sounds/1.ogg"),
    new Audio("/sounds/2.ogg"),
    new Audio("/sounds/3.ogg"),
    new Audio("/sounds/4.ogg"),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)} // Corrected map function
      soundEffects={soundEffects}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, materials, soundEffects }) {
  const meshRef = React.useRef(); // Corrected ref type
  const [visible, setVisible] = React.useState(true);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }
  function handleClick(e) {
    const mesh = e.object;
    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={meshRef} position={position}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial} // Removed duplicate material prop
        />
      </Float>
    </group>
  );
}
