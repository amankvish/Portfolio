/* ===== Global Variables ===== */
let renderer, scene, camera, sphereBg, nucleus, stars, controls, clock;
let container = document.getElementById("canvas_container");
let noise = new SimplexNoise();
let blobScale = 3;
let delta = 0;
let animationId;

/* ===== Scene Initialization ===== */
function initScene() {
    // Create scene and camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.01, 1000);
    camera.position.set(0, 0, 230);

    // Setup lighting
    setupLighting();

    // Setup renderer
    setupRenderer();

    // Setup controls
    setupControls();

    // Load and setup textures
    loadTextures();

    // Start animation
    animate();
}

/* ===== Lighting Setup ===== */
function setupLighting() {
    const directionalLight = new THREE.DirectionalLight("#fff", 1);
    directionalLight.position.set(0, 50, -20);
    scene.add(directionalLight);

    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);
    scene.add(ambientLight);
}

/* ===== Renderer Setup ===== */
function setupRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    clock = new THREE.Clock();
}

/* ===== Controls Setup ===== */
function setupControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 4;
    controls.maxDistance = 350;
    controls.minDistance = 150;
    controls.enablePan = false;
}

/* ===== Texture Loading ===== */
function loadTextures() {
    const loader = new THREE.TextureLoader();
    const textureSphereBg = loader.load('https://i.ibb.co/HC0vxMw/sky2.jpg');
    const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');
    const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");
    const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");
    const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");
    const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");

    createNucleus(texturenucleus);
    createBackground(textureSphereBg);
    createStars(textureStar, texture1, texture2, texture4);
}

/* ===== Object Creation ===== */
function createNucleus(texture) {
    texture.anisotropy = 16;
    let icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
    let lambertMaterial = new THREE.MeshPhongMaterial({ map: texture });
    nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    scene.add(nucleus);
}

function createBackground(texture) {
    texture.anisotropy = 16;
    let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
    let materialSphereBg = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: texture,
    });
    sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
    scene.add(sphereBg);
}

function createStars(textureStar, texture1, texture2, texture4) {
    // Moving Stars
    let starsGeometry = new THREE.BufferGeometry();
    let starVertices = [];
    let starVelocities = [];

    for (let i = 0; i < 50; i++) {
        let particleStar = randomPointSphere(150);
        starVertices.push(particleStar.x, particleStar.y, particleStar.z);
        starVelocities.push(THREE.MathUtils.randInt(50, 200));
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    let starsMaterial = new THREE.PointsMaterial({
        size: 5,
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        map: textureStar,
        blending: THREE.AdditiveBlending,
    });
    starsMaterial.depthWrite = false;
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Fixed Stars
    scene.add(createFixedStars(texture1, 15, 20));
    scene.add(createFixedStars(texture2, 5, 5));
    scene.add(createFixedStars(texture4, 7, 5));
}

function createFixedStars(texture, size, total) {
    let pointGeometry = new THREE.BufferGeometry();
    let vertices = [];

    for (let i = 0; i < total; i++) {
        let radius = THREE.MathUtils.randInt(149, 70);
        let particles = randomPointSphere(radius);
        vertices.push(particles.x, particles.y, particles.z);
    }

    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    let pointMaterial = new THREE.PointsMaterial({
        size: size,
        map: texture,
        blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(pointGeometry, pointMaterial);
}

/* ===== Animation Functions ===== */
function animate() {
    animationId = requestAnimationFrame(animate);

    // Limit frame rate to ~60fps
    delta += clock.getDelta();
    if (delta > 1/60) {
        updateScene();
        delta = delta % (1/60);
    }
}

function updateScene() {
    updateStars();
    updateNucleus();
    updateBackground();
    
    controls.update();
    renderer.render(scene, camera);
}

function updateStars() {
    const positions = stars.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (0 - positions[i]) / 100;
        positions[i + 1] += (0 - positions[i + 1]) / 100;
        positions[i + 2] += (0 - positions[i + 2]) / 100;

        if (positions[i] <= 5 && positions[i] >= -5 && positions[i + 2] <= 5 && positions[i + 2] >= -5) {
            let newPos = randomPointSphere(150);
            positions[i] = newPos.x;
            positions[i + 1] = newPos.y;
            positions[i + 2] = newPos.z;
        }
    }
    stars.geometry.attributes.position.needsUpdate = true;
}

function updateNucleus() {
    nucleus.rotation.y += 0.002;
}

function updateBackground() {
    sphereBg.rotation.x += 0.002;
    sphereBg.rotation.y += 0.002;
    sphereBg.rotation.z += 0.002;
}

/* ===== Utility Functions ===== */
function randomPointSphere(radius) {
    let theta = 2 * Math.PI * Math.random();
    let phi = Math.acos(2 * Math.random() - 1);
    let dx = 0 + (radius * Math.sin(phi) * Math.cos(theta));
    let dy = 0 + (radius * Math.sin(phi) * Math.sin(theta));
    let dz = 0 + (radius * Math.cos(phi));
    return new THREE.Vector3(dx, dy, dz);
}

/* ===== Event Handlers ===== */
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

/* ===== Intersection Observer ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!animationId) {
                animate();
            }
        } else {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });
}, { threshold: 0.1 });

/* ===== Initialization ===== */
document.addEventListener('DOMContentLoaded', () => {
    initScene();
    observer.observe(document.getElementById('space-section'));
    
    window.addEventListener('resize', onWindowResize);
});