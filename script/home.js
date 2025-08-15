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
    header.classList.add('animate-gold');

    // إزالة الحركة بعد 4 ثواني
    setTimeout(() => {
        header.classList.remove('animate-gold');
    }, 4000);
});


    
