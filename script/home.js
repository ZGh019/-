// تاثرات الشريط العلوي بعد الدفع يتقلص 
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.top-bar');
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});

// انميشا الشريط العلوي 
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top-bar');

    if (!header) {
        console.error('لم يتم العثور على العنصر .top-bar في الصفحة.');
        return;
    }

    // تأثير البنفسجي عند التحميل
    header.classList.add('animate-purple');
    setTimeout(function () {
        header.classList.remove('animate-purple');
    }, 2000);

    // تأثير التقلص عند التمرير
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shrink', 'animate-purple');
        } else {
            header.classList.remove('shrink', 'animate-purple');
        }
    });
});


    
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

