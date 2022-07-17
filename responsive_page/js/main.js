'use strict';
{
    $(function () {
        $('.hamburger').on('click', function () {
            $(this).toggleClass('active');
            $('.globalNav').toggleClass('active');
        });

        $('.globalNav__item a').on('click', function () {
            $('.hamburger').removeClass('active');
            $('.globalNav').removeClass('active');
        });
    });

}
