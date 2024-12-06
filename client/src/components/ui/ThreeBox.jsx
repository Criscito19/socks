// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeBox = ({ color }) => {
//   const mountRef = useRef(null);
//   const modelRef = useRef(null);

//   useEffect(() => {
//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 10);
//     camera.position.set(0, 0.1, 1);

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xf0f0f0);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
//     scene.add(ambientLight);

//     const group = new THREE.Group();
//     scene.add(group);

//     const loader = new GLTFLoader();
//     loader.load('/public/nosock.glb', (gltf) => {
//       const model = gltf.scene;

//       const box = new THREE.Box3().setFromObject(model);
//       const center = box.getCenter(new THREE.Vector3());
//       model.position.x -= center.x;
//       model.position.y -= center.y;
//       model.position.z -= center.z;

//       model.scale.set(1.5, 1.5, 1.5); 

//       group.add(model);
//       modelRef.current = model;
//     });

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(width, height);
//     mountRef.current.appendChild(renderer.domElement);

//     const animate = (time) => {
//       group.rotation.y = time / 2000; 
//       renderer.render(scene, camera);
//     };

//     renderer.setAnimationLoop(animate);

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

 
//   useEffect(() => {
//     if (modelRef.current) {
//       modelRef.current.traverse((child) => {
//         if (child.isMesh) {
//           child.material.color.set(color); 
//         }
//       });
//     }
//   }, [color]);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: '100%',
//         height: '100%',
//         position: 'relative',
//       }}
//     />
//   );
// };

// export default ThreeBox;


// '/public/1326c4b18ff13e5502fbb5ba9da06672.jpg',
//     '/public/CS-WP-10456073.jpg',
//     '/public/debodoes_59310768_297518064459146_2060599483948520117_n.jpg',
//     '/public/Копия pepe-the-frog-green-pattern-ivy9lt1ftw5kokwg.jpg'




import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeBox = ({ color, texture }) => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const rotationRef = useRef(0);
  const rendererRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 10);
    camera.position.set(0, 0.1, 1);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const group = new THREE.Group();
    scene.add(group);

    const loader = new GLTFLoader();
    loader.load('/public/nosock.glb', (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.x -= center.x;
      model.position.y -= center.y;
      model.position.z -= center.z;

      model.scale.set(1.5, 1.5, 1.5);

      group.add(model);
      modelRef.current = model;
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const animate = () => {
      if (modelRef.current) {
        group.rotation.y = rotationRef.current;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / width) * 2 - 1;
      const newRotation = mouseX * Math.PI;
      rotationRef.current = newRotation;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (mountRef.current && rendererRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          if (texture) {
           
            const textureLoader = new THREE.TextureLoader();
            const loadedTexture = textureLoader.load(texture);
            child.material.map = loadedTexture;
            child.material.color.set(0xffffff); 
          } else {
            
            child.material.map = null;
            if (color) {
              child.material.color.set(color);
            } else {
              child.material.color.set(0xffffff); 
            }
          }
          child.material.needsUpdate = true;
        }
      });
    }
  }, [color, texture]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    />
  );
};

export default ThreeBox;