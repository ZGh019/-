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


    
