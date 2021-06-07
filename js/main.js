$(document).ready(() => {
    // Вызов функции переключения между товарами (карусели)
    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();
        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nuv').slick('refresh');
    })
// Карусель товаров
    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nuv'
    });
    $('#burgers-container .products-nuv').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nuv'
    });
    $('#fries-container .products-nuv').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('#sauces-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauces-container .products-nuv'
    });
    $('#sauces-container .products-nuv').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces-container .products',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nuv'
    });
    $('#drinks-container .products-nuv').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });


    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });
    $('#reservation-cancel-close , #reservation-container').click((e) => {
        e.target
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close')
            $('#reservation-container').hide();
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');
        if (name.val() && count.val() && phone.val() && time.val()) {
            $('#reservation-sent').show();
            $('#reservation-content').hide();

            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
            //     success: () => {
            //         $('#reservation-sent').show();
            //         $('#reservation-content').hide();
            //     },
            //     error: () => {
            //         $('#reservation-container').hide();
            //         alert('Ошибка бронирование. Свяжитесь, пожалуйста, по номеру телефона.');
            //     }
            // });

        } else {
            $('#reserve-error').show();
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });
    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    });
});