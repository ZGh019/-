// اختيار الحاوية
const container = document.getElementById('welcome3d');

// إنشاء المشهد والكاميرا
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// إنشاء Renderer مع شفافية
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // شفافية كاملة
container.appendChild(renderer.domElement);

// إضافة إضاءة
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

// تحميل الخط من Three.js (يمكنك تغيير المسار حسب حاجتك)
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  
  const texts = [
    { text: "Stream & News", y: 2 },
    { text: "منصة المعرفة التقنية والأمن السيبراني والتطوير", y: 0 },
    { text: "Platform of Tech Knowledge, Cybersecurity and Development", y: -2 },
    { text: "PTKCD", y: -4 }
  ];

  texts.forEach(item => {
    const geometry = new THREE.TextGeometry(item.text, {
      font: font,
      size: 0.8,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5
    });

    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);

    // ضبط موقع النصوص على المحور Y
    mesh.position.set(-geometry.boundingBox.max.x / 2, item.y, 0);
    scene.add(mesh);
  });

  animate();
});

// دالة التحديث عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// حلقة العرض
function animate() {
  requestAnimationFrame(animate);

  // يمكنك إضافة أي حركة هنا للنصوص إذا أردت
  scene.children.forEach(child => {
    if (child.type === "Mesh") {
      child.rotation.y += 0.005; // تدوير النصوص ببطء
    }
  });

  renderer.render(scene, camera);
}
