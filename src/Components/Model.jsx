import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"

const ColladaModel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 500);
        // camera.position.z = 5;
        camera.position.set(-4, 1, 4);
        camera.lookAt( scene.position );

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.physicallyCorrectLights = true;
        containerRef.current.appendChild(renderer.domElement);

         // Add a directional light
        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.intensity = 10;
        light.position.set(10, 10, 10);
        scene.add(light);
        const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 3);
        scene.add(ambientLight);

        // Load the COLLADA model
        const loader = new ColladaLoader();
        loader.load("../assets/lego.dae", function (collada) {
            const model = collada.scene;
            scene.add(model);
        });

        // Animate the scene
        const animate = function () {
            requestAnimationFrame(animate);
            // model.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return <div ref={containerRef} />;
};

export default ColladaModel;
