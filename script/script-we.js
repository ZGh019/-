// 1. اختيار الحاوية
const container = document.getElementById('welcome3d');

// 2. إنشاء المشهد
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0a); // لون الخلفية

// 3. إنشاء الكاميرا
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 4. إنشاء Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// 5. إضافة إضاءة
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// 6. إنشاء مكعب ترحيبي
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 7. التعامل مع تغيير حجم النافذة
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 8. حلقة الرسوم المتحركة
function animate() {
  requestAnimationFrame(animate);

  // تدوير المكعب
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
