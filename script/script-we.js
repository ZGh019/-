// اختيار الحاوية التي سيظهر فيها المشهد
const container = document.getElementById('welcome3d');
if (!container) {
  throw new Error("العنصر #welcome3d غير موجود في الصفحة!");
}
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
//ضبط دقة العرض حتى تكون أوضح على الشاشات العالية الكثافة
renderer.setPixelRatio(window.devicePixelRatio);
// ضبط حجم العرض ليملأ الشاشة
renderer.setSize(window.innerWidth, window.innerHeight);
// التأكد أن الخلفية شفافة
renderer.setClearColor(0x000000, 0); // 0 هنا يعني شفافية كاملة
// إضافة الـ Renderer إلى الحاوية
container.appendChild(renderer.domElement);

// إضاءة نقطية بيضاء
const light = new THREE.AmbientLight(0xffffff, 1); // ضوء أبيض ساطع
scene.add(light);

//========= إنشاء النصوص الثلاثية الأبعاد =========
const loader = new THREE.FontLoader(); // تعريف loader هنا
// تحميل الخط قبل إنشاء النصوص
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    
    const textGeometry = new THREE.TextGeometry('زاكي الهكر الأخلاقي', {
        font: font,
        size: 1,
        height: 0.1,
    });
    textGeometry.center();

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // حلقة الرسم
    function animate() {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01; // دوران النص لتجربة
        renderer.render(scene, camera);
    }
    animate();
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












