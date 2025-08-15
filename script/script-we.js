import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/geometries/TextGeometry.js';

// الحاوية
const container = document.getElementById('welcome3d');
if (!container) throw new Error("العنصر #welcome3d غير موجود!");

// المشهد
const scene = new THREE.Scene();

// الكاميرا
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// إضاءة
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// تحميل الخط
const loader = new FontLoader();
loader.load('fonts/helvetiker_regular.typeface.json', function(font) {

    // دالة إنشاء نص
    function createTextMesh(text, size, color) {
        const geometry = new TextGeometry(text, { font: font, size: size, height: 0.3 });
        geometry.center();
        const material = new THREE.MeshStandardMaterial({ color: color });
        return new THREE.Mesh(geometry, material);
    }

    // النصوص
    const mainName = createTextMesh('Stream & News', 1, 0xff0000);
    mainName.position.y = 2;
    scene.add(mainName);

    const arabicDesc = createTextMesh('منصة المعرفة التقنية والأمن السيبراني والتطوير', 0.4, 0x00ff00);
    arabicDesc.position.y = 0.5;
    scene.add(arabicDesc);

    const englishDesc = createTextMesh('Platform of Tech Knowledge, Cybersecurity and Development', 0.4, 0x00ffff);
    englishDesc.position.y = -0.5;
    scene.add(englishDesc);

    const abbreviation = createTextMesh('PTKCD', 0.6, 0xffff00);
    abbreviation.position.y = -2;
    scene.add(abbreviation);

    // حلقة الرسوم
    function animate() {
        requestAnimationFrame(animate);
        mainName.rotation.y += 0.01;
        arabicDesc.rotation.y += 0.005;
        englishDesc.rotation.y -= 0.005;
        abbreviation.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});

// التعامل مع تغيير حجم النافذة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//const loader = new THREE.FontLoader();
//loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

   // إنشاء نص ثلاثي الأبعاد
  //  const textGeometry = new THREE.TextGeometry('زاكي الهكر الأخلاقي', {
     //   font: font,
    //    size: 0.5,
    //    height: 0.1, 
//});

//إعداد خامة (Material) لهذا النص ثلاثي الأبعاد حتى يظهر بلون أو تأثير معين.
//const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 });
//نربطهم مع بعض لإنشاء المجسم ثلاثي الأبعاد للنص
//const textMesh = new THREE.Mesh(textGeometry, textMaterial);
//بعدها نضيف النص للمشهد (scene) حتى يظهر:
//scene.add(textMesh);












