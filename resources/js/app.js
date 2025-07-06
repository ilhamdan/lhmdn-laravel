import '../scss/main.scss';
import './bootstrap';
import * as THREE from 'three';
import Typed from 'typed.js';


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 3;


const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg-cube"),
    alpha: true,
    antialias: true,
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 0, 3);
scene.add(directionalLight);


const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        metalness: 0.1,
        roughness: 0.2,
        emissive: 0x004444,
        emissiveIntensity: 0.5
    })
);
scene.add(cube);

// Stars
const starCount = 1200;
const starPositions = new Float32Array(starCount * 10).map(() => (Math.random() - 0.5) * 30);
const stars = new THREE.Points(
    new THREE.BufferGeometry().setAttribute(
        "position", new THREE.BufferAttribute(starPositions, 3)
    ),
    new THREE.PointsMaterial({ color: 0x00ffff, size: 0.03 })
);
scene.add(stars);

// Animate
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.material.emissiveIntensity = 0.25 + Math.sin(t * 2) * 0.25;

    stars.rotation.y += 0.001;

    renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});

/* -------------------- TYPED JS (Multibahasa) -------------------- */

let typed;

function getStringsByLang(lang) {
    return lang === "en"
        ? ["My vision.", "Born to create.", "Code is art.", "Pixels speak.", "I build. I shape."]
        : ["Visiku.", "Terlahir untuk mencipta.", "Kode adalah seni.", "Piksel berbicara.", "Aku membangun. Aku membentuk."];
}

function startTyped(lang) {
    if (typed) typed.destroy();

    typed = new Typed("#Text", {
        strings: getStringsByLang(lang),
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: false,
    });
}

let currentLang = document.documentElement.lang || "id";
startTyped(currentLang);

const observer = new MutationObserver(() => {
    const newLang = document.documentElement.lang;
    if (newLang !== currentLang) {
        currentLang = newLang;
        startTyped(currentLang);
    }
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
