$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    document.getElementById("first-content").addEventListener("click", function(){
        const element = document.querySelector('.first-content');

        if(!element.classList.contains('active-content')) {
            $('.first-content').addClass("active-content");
            $('.second-content').removeClass("active-content");
            $('.third-content').removeClass("active-content");

            $('#first-content').addClass("button-active");
            $('#second-content').removeClass("button-active");
            $('#third-content').removeClass("button-active");
        }
    });

    document.getElementById("second-content").addEventListener("click", function(){
        const element = document.querySelector('.second-content');

        if(!element.classList.contains('active-content')) {
            $('.first-content').removeClass("active-content");
            $('.second-content').addClass("active-content");
            $('.third-content').removeClass("active-content");~

            $('#first-content').removeClass("button-active");
            $('#second-content').addClass("button-active");
            $('#third-content').removeClass("button-active");
        }
    });

    document.getElementById("third-content").addEventListener("click", function(){
        const element = document.querySelector('.third-content');

        if(!element.classList.contains('active-content')) {
            $('.first-content').removeClass("active-content");
            $('.second-content').removeClass("active-content");
            $('.third-content').addClass("active-content");

            $('#first-content').removeClass("button-active");
            $('#second-content').removeClass("button-active");
            $('#third-content').addClass("button-active");
        }
    });
});

