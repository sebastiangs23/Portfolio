import React, { Suspense, useRef, useLayoutEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html, Environment, ContactShadows } from '@react-three/drei';
import { useScroll, motion, useTransform } from 'framer-motion';
import * as THREE from 'three';
import Home from "../Home/Home";

function LaptopModel({ scrollProgress, children }) {
  const group = useRef();
  const { scene } = useGLTF("/laptop.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useLayoutEffect(() => {
    clonedScene.traverse((obj) => {
      if (obj.isMesh) {
        const name = obj.name.toLowerCase();
        // Hiding the physical 3D screen glass to let the HTML show through
        if (name.includes('screen') || name.includes('display') || name.includes('glass') || name.includes('monitor')) {
           obj.material.transparent = true;
           obj.material.opacity = 0;
           obj.visible = false;
        }
      }
    });
  }, [clonedScene]);

  useFrame((state) => {
    const p = scrollProgress.get(); 

    // 1. ROTATION: Start looking down, End facing the high camera
    group.current.rotation.x = THREE.MathUtils.lerp(0.4, -0.42, p); 
    group.current.rotation.y = THREE.MathUtils.lerp(-0.7, 0, p);
    
    // 2. POSITION: Move up to center the screen in front of the camera
    group.current.position.y = THREE.MathUtils.lerp(-1.5, 3.8, p);
    
    // 3. ZOOM: Bring it very close
    group.current.position.z = THREE.MathUtils.lerp(0, 15.8, p); 
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={clonedScene} />

      {/* 
          THIS IS WHERE YOUR CHILDREN ARE USED. 
          If you don't see it, check the position [z] to make sure it's 
          not buried inside the 3D model lid.
      */}
      <Html
        transform
        occlude={false} // Set to false to ensure it's never hidden by the 3D model
        distanceFactor={1.18} 
        position={[0, 1.55, -1.55]} // Moved slightly back to ensure it's 'on top' of the lid
        rotation-x={-0.25}
        style={{
          width: '1075px',
          height: '712px',
          background: '#0a0f14', // Fallback color
        }}
      >
        {/* We wrap children in a div with fixed size to ensure it fills the 3D screen */}
        <div style={{ width: '1075px', height: '712px' }}>
          {children}
        </div>
      </Html>
    </group>
  );
}

export default function PortfolioLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // TRANSITION LOGIC:
  // Fade out the 3D Canvas at the very end (0.95 to 1.0)
  const canvasOpacity = useTransform(scrollYProgress, [0.95, 0.98], [1, 0]);
  // Fade in the REAL Home component at the very end
  const overlayOpacity = useTransform(scrollYProgress, [0.95, 0.99], [0, 1]);
  // Make the overlay un-clickable until it is visible
  const overlayPointer = useTransform(scrollYProgress, (v) => v > 0.95 ? 'auto' : 'none');

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      
      {/* 1. THE 3D SCENE (Fades out at the end) */}
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity: canvasOpacity }}
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 bg-[#070707]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        </div>

        <Canvas camera={{ position: [0, 8, 20], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          
          <Suspense fallback={<Html center className="text-white">Initializing...</Html>}>
            <LaptopModel scrollProgress={scrollYProgress}>
                {/* 
                    This is the FIRST usage of Home (inside the 3D screen). 
                    It is wrapped in the 'children' prop of LaptopModel.
                */}
                <Home />
            </LaptopModel>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* 2. THE REAL FULLSCREEN OVERLAY (Fades in at the end) */}
      {/* This ensures that when the user finishes scrolling, the page is 100% interactive and sharp */}
      <motion.div 
        className="fixed inset-0 z-50 overflow-auto"
        style={{ 
            opacity: overlayOpacity,
            pointerEvents: overlayPointer
        }}
      >
         <Home />
      </motion.div>

      {/* 3. SUBSEQUENT SECTIONS */}
      {/* This invisible spacer allows the scroll to continue to your other sections */}
      <div className="h-screen bg-transparent" /> 
      <div className="relative z-[60] bg-white min-h-screen">
          <h2 className="text-black text-center p-20 text-4xl font-bold uppercase">Experience Continues Below</h2>
          <div className="h-[1000px]" />
      </div>
    </div>
  );
}

useGLTF.preload('/laptop.glb');