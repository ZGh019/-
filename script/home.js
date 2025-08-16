
// استدعاء جميع البطاقات المخفية
const hiddenCards = document.querySelectorAll('.featured-card.hidden');

// محتوى افتراضي لكل بطاقة
const dummyContent = [
    {title: "مقال افتراضي 1", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"},
    {title: "مقال افتراضي 2", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"},
    {title: "مقال افتراضي 3", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"},
    {title: "مقال افتراضي 4", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"},
    {title: "مقال افتراضي 5", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"},
    {title: "مقال افتراضي 6", desc: "هذا نص تجريبي لمعرفة شكل البطاقة.", img: "placeholder.jpg"}
];

// تعبئة البطاقات المخفية بالمحتوى الافتراضي
hiddenCards.forEach((card, index) => {
    const content = dummyContent[index];
    card.innerHTML = `
        <img src="${content.img}" alt="${content.title}">
        <div class="card-content">
            <h3>${content.title}</h3>
            <p>${content.desc}</p>
        </div>
    `;
    card.classList.remove('hidden'); // إظهار البطاقة
});


//كود المعاينة لي بطاقات عرض الاشياء الاكثر زيارة =================================================================

const hiddenNewsCards = document.querySelectorAll('.news-card.hidden');

const dummyNews = Array.from({ length: 16 }, (_, i) => ({
    title: `مقال تجريبي ${i + 5}`,
    desc: "هذا نص تجريبي لمعرفة شكل البطاقة.",
    img: "placeholder.jpg",
    views: Math.floor(Math.random() * 5000) + 500 // عدد زيارات عشوائي
}));

hiddenNewsCards.forEach((card, index) => {
    const news = dummyNews[index];
    card.innerHTML = `
        <img src="${news.img}" alt="${news.title}">
        <div class="card-content">
            <h3>${news.title}</h3>
            <p>${news.desc}</p>
            <span class="views">${news.views} زيارة</span>
        </div>
    `;
    card.classList.remove('hidden'); // إظهار البطاقة
});


//============================= تجربة روابط الاقسام في القسم الرابع الجزء الثاني ===========================
// إعداد المشهد
const container = document.getElementById("globe-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// إضاءة
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// الكرة (الأرض)
const geometry = new THREE.SphereGeometry(1.5, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x223355 });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// نقاط الأقسام
const categories = [
  { name: "أخبار التقنية", desc: "آخر التحديثات والأخبار التقنية.", link: "#", lat: 20, lon: 30 },
  { name: "شروحات وأدلة", desc: "مقالات وشروحات مبسطة.", link: "#", lat: -10, lon: 90 },
  { name: "الأمن السيبراني", desc: "مقالات وأدوات الحماية.", link: "#", lat: 45, lon: -60 },
  { name: "أدوات وتقنيات", desc: "أفضل الأدوات والبرمجيات.", link: "#", lat: -30, lon: -120 },
  { name: "التطوير والبرمجة", desc: "شروحات للمبرمجين والمطورين.", link: "#", lat: 60, lon: 10 }
];

const pointsGroup = new THREE.Group();
scene.add(pointsGroup);

function latLonToVector3(lat, lon, radius = 1.5) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));
  return new THREE.Vector3(x, y, z);
}

const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff4444 });
categories.forEach(cat => {
  const pointGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const point = new THREE.Mesh(pointGeo, pointMaterial);
  point.position.copy(latLonToVector3(cat.lat, cat.lon));
  point.userData = cat;
  pointsGroup.add(point);
});

// التحكم
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// معلومات
const infoBar = document.getElementById("info-bar");
const infoTitle = document.getElementById("info-title");
const infoDesc = document.getElementById("info-desc");
const infoLink = document.getElementById("info-link");

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(pointsGroup.children);
  if (intersects.length > 0) {
    const data = intersects[0].object.userData;
    infoTitle.textContent = data.name;
    infoDesc.textContent = data.desc;
    infoLink.href = data.link;
    infoBar.classList.remove("hidden");
  }
}

window.addEventListener("click", onClick);

// تحديث الحجم مع تغيير النافذة
window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// أنيميشن
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();

