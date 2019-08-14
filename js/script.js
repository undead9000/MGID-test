(function ($, root, undefined) {
    $(document).ready(function(){
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: false,
            prevArrow: $('.slider__prev'),
            nextArrow: $('.slider__next'),
        });
        $("#form-select").chosen({
            disable_search: true,
        });
        $('.header__menu').slicknav({
            label: '',
            appendTo: 'header .wrapper'
        });
        $('#form-select').on('chosen:showing_dropdown', function() {
            $('.chosen-results:visible').mCustomScrollbar({
                theme: 'minimal-dark'
            });
        });
        $('#form-select').on('chosen:hiding_dropdown', function() {
            if($(".chosen-results").length) {
                $('.chosen-results').mCustomScrollbar('destroy');
            }
        });
    });
})(jQuery, this);
