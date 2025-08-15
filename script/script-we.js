// اختيار الحاوية التي سيظهر فيها المشهد
const container = document.getElementById('welcome3d');
// إنشاء المشهد (Scene) وهو المساحة التي سنضع فيها الأجسام
const scene = new THREE.Scene();
// إنشاء الكاميرا من نوع Perspective (مثل عين الإنسان)
const camera = new THREE.PerspectiveCamera(
  75, // زاوية الرؤية
  window.innerWidth / window.innerHeight, // نسبة العرض للارتفاع
  0.1, // أقرب مسافة يمكن رؤيتها
  1000 // أبعد مسافة يمكن رؤيتها
);

// إبعاد الكاميرا للخلف حتى نرى الأشكال
camera.position.z = 5;
// إنشاء Renderer مع تفعيل الشفافية alpha
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// ضبط حجم العرض ليملأ الشاشة
renderer.setSize(window.innerWidth, window.innerHeight);

// التأكد أن الخلفية شفافة
renderer.setClearColor(0x000000, 0); // 0 هنا يعني شفافية كاملة

// إضافة الـ Renderer إلى الحاوية
container.appendChild(renderer.domElement);
// إضاءة نقطية بيضاء
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// إضاءة محيطة لزيادة وضوح الأشكال
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
// هندسة المكعب
const geometry = new THREE.BoxGeometry(1, 1, 1);

// مادة المكعب (تتأثر بالإضاءة)
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// دمج الشكل والمادة
const cube = new THREE.Mesh(geometry, material);

// إضافة المكعب إلى المشهد
scene.add(cube);
window.addEventListener('resize', () => {
  // تحديث الكاميرا
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // تحديث حجم الـ Renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});
function animate() {
  requestAnimationFrame(animate); // استدعاء نفسه باستمرار

  // حركة المكعب
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // عرض المشهد
  renderer.render(scene, camera);
}

animate(); // تشغيل الحلقة
