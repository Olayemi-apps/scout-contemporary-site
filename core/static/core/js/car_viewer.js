document.addEventListener("DOMContentLoaded", function () {
    const loadButton = document.getElementById("load-iframe-btn");
    const iframe = document.getElementById("model-viewer");
    const placeholder = document.getElementById("iframe-placeholder");

    loadButton.addEventListener("click", function () {
        // Load the iframe URL from data-src
        iframe.src = iframe.getAttribute("data-src");

        // Show the iframe and hide the placeholder button
        iframe.style.display = "block";
        placeholder.style.display = "none";
    });
});








// document.addEventListener("DOMContentLoaded", function () {
//     // Scene Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
//     // Renderer Configuration
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById("car-viewer-container").appendChild(renderer.domElement);
    
//     // Add Lighting
//     const light = new THREE.AmbientLight(0xffffff, 1.5);
//     scene.add(light);
    
//     // Position the Camera
//     camera.position.set(0, 1, 3);

//     // Load 3D Model (GLTF/GLB format)
//     const loader = new THREE.GLTFLoader();
//     loader.load('/static/models/scout_model_one.glb', function (gltf) {
//         const car = gltf.scene;
//         car.scale.set(1, 1, 1);
//         car.position.set(0, 0, 0);
//         scene.add(car);

//         // Add Rotation Animation
//         function animate() {
//             requestAnimationFrame(animate);
//             car.rotation.y += 0.005;
//             renderer.render(scene, camera);
//         }
//         animate();
//     });

//     // Adjust on Window Resize
//     window.addEventListener("resize", function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//     });
// });
