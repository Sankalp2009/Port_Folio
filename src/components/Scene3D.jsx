import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Scene3D() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const goldLight1 = new THREE.PointLight(0xd4a853, 1, 100);
    goldLight1.position.set(10, 10, 10);
    scene.add(goldLight1);

    const goldLight2 = new THREE.PointLight(0xc9a227, 0.6, 100);
    goldLight2.position.set(-10, -10, -10);
    scene.add(goldLight2);

    const whiteLight = new THREE.PointLight(0xfff8e7, 0.8, 100);
    whiteLight.position.set(0, 5, 5);
    scene.add(whiteLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Gold material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a853,
      metalness: 1,
      roughness: 0.1,
    });

    const darkGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.95,
      roughness: 0.15,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a2744,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const objects = [];

    // Main gold sphere
    const sphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const mainSphere = new THREE.Mesh(sphereGeometry, goldMaterial);
    mainSphere.position.set(3, 0.5, -1);
    mainSphere.userData = { 
      floatSpeed: 1.5, 
      floatAmount: 0.5, 
      rotateSpeed: 0.3,
      initialY: 0.5 
    };
    scene.add(mainSphere);
    objects.push(mainSphere);

    // Glass torus
    const torusGeometry = new THREE.TorusGeometry(0.8, 0.25, 32, 64);
    const glassTorus = new THREE.Mesh(torusGeometry, glassMaterial);
    glassTorus.position.set(-3, 1, -2);
    glassTorus.userData = { 
      floatSpeed: 2, 
      floatAmount: 0.4, 
      rotateSpeed: 0.15,
      initialY: 1 
    };
    scene.add(glassTorus);
    objects.push(glassTorus);

    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.6, 1);
    const icosahedron = new THREE.Mesh(icosahedronGeometry, darkGoldMaterial);
    icosahedron.position.set(-2, -1.5, 0);
    icosahedron.userData = { 
      floatSpeed: 2.5, 
      floatAmount: 0.6, 
      rotateSpeed: 0.35,
      initialY: -1.5 
    };
    scene.add(icosahedron);
    objects.push(icosahedron);

    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(0.5, 0);
    const octahedron = new THREE.Mesh(octahedronGeometry, goldMaterial);
    octahedron.position.set(2.5, -1, 1);
    octahedron.userData = { 
      floatSpeed: 1.8, 
      floatAmount: 0.5, 
      rotateSpeed: -0.25,
      initialY: -1 
    };
    scene.add(octahedron);
    objects.push(octahedron);

    // Gold rings group
    const ringGroup = new THREE.Group();
    ringGroup.position.set(-1.5, 2, -3);
    
    const ringGeometry1 = new THREE.RingGeometry(0.8, 1, 64);
    const ring1 = new THREE.Mesh(ringGeometry1, new THREE.MeshStandardMaterial({
      color: 0xd4a853,
      metalness: 1,
      roughness: 0.1,
      side: THREE.DoubleSide,
    }));
    ring1.rotation.x = Math.PI / 2;
    ringGroup.add(ring1);

    const ringGeometry2 = new THREE.RingGeometry(1.2, 1.35, 64);
    const ring2 = new THREE.Mesh(ringGeometry2, new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.95,
      roughness: 0.15,
      side: THREE.DoubleSide,
    }));
    ring2.rotation.set(Math.PI / 3, Math.PI / 4, 0);
    ringGroup.add(ring2);

    ringGroup.userData = { 
      floatSpeed: 1.2, 
      floatAmount: 0.3, 
      rotateSpeed: 0.1,
      initialY: 2 
    };
    scene.add(ringGroup);
    objects.push(ringGroup);

    // Small accent spheres
    const smallSphere1Geo = new THREE.SphereGeometry(0.2, 32, 32);
    const smallSphere1 = new THREE.Mesh(smallSphere1Geo, goldMaterial);
    smallSphere1.position.set(4, 2, -2);
    smallSphere1.userData = { 
      floatSpeed: 3, 
      floatAmount: 0.8, 
      rotateSpeed: 0.5,
      initialY: 2 
    };
    scene.add(smallSphere1);
    objects.push(smallSphere1);

    const smallSphere2Geo = new THREE.SphereGeometry(0.15, 32, 32);
    const smallSphere2 = new THREE.Mesh(smallSphere2Geo, darkGoldMaterial);
    smallSphere2.position.set(-4, -0.5, 0);
    smallSphere2.userData = { 
      floatSpeed: 2.5, 
      floatAmount: 0.6, 
      rotateSpeed: 0.4,
      initialY: -0.5 
    };
    scene.add(smallSphere2);
    objects.push(smallSphere2);

    // Particle field (stars)
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 30;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xd4a853,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.userData = { rotateSpeed: 0.02 };
    scene.add(particles);
    objects.push(particles);

    // Store references
    sceneRef.current = { scene, camera, renderer, animationId: 0, objects };

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      objects.forEach((obj) => {
        const data = obj.userData;
        
        if (data.floatSpeed !== undefined) {
          // Floating animation
          const floatY = Math.sin(elapsedTime * data.floatSpeed) * data.floatAmount;
          obj.position.y = data.initialY + floatY;
        }

        if (data.rotateSpeed !== undefined) {
          obj.rotation.x += data.rotateSpeed * 0.01;
          obj.rotation.y += data.rotateSpeed * 0.015;
        }
      });

      // Rotate particles slowly
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        
        // Dispose geometries and materials
        sceneRef.current.objects.forEach((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
          if (obj instanceof THREE.Points) {
            obj.geometry.dispose();
            obj.material.dispose();
          }
        });

        sceneRef.current.renderer.dispose();
        
        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{ background: 'transparent' }}
    />
  );
}

export default Scene3D;