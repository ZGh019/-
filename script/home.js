document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.top-bar');

    // تأثير الذهب عند التحميل
    header.classList.add('animate-gold');
    setTimeout(() => {
        header.classList.remove('animate-gold');
    }, 4000);

    // تأثير التقلص عند التمرير
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shrink', 'animate-gold');
        } else {
            header.classList.remove('shrink', 'animate-gold');
        }
    });
});


    //window.addEventListener('scroll', function() {
    //    if (window.scrollY > 50) {
    //       header.classList.add('shrink', 'animate-gold');
    //    } else {
    //        header.classList.remove('shrink', 'animate-gold');
     //   }
  //  });
//});
