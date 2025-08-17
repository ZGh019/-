
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

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.main-node').forEach(main => {
        const subNodes = main.querySelectorAll('.sub-nodes > .sub-node');

        main.addEventListener('click', () => {
            // فتح main-node
            main.classList.toggle('open');

            // إخفاء الأقسام الأخرى التي قد تتداخل
            document.querySelectorAll('.main-node').forEach(otherMain => {
                if(otherMain !== main) otherMain.classList.remove('open');
            });
        });

        main.addEventListener('mouseenter', () => main.classList.add('hovered'));
        main.addEventListener('mouseleave', () => main.classList.remove('hovered'));

        // للأقسام الفرعية
        subNodes.forEach(sub => {
            const miniNodes = sub.querySelectorAll('.mini-nodes > .mini-node');

            sub.addEventListener('click', e => {
                e.stopPropagation(); // منع انتشار الحدث للmain-node
                sub.classList.toggle('open');

                subNodes.forEach(otherSub => {
                    if(otherSub !== sub) otherSub.classList.remove('open');
                });
            });

            sub.addEventListener('mouseenter', () => sub.classList.add('hovered'));
            sub.addEventListener('mouseleave', () => sub.classList.remove('hovered'));
        });
    });
});
