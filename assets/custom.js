$(document).ready(function(){
    $('.megamenu').mouseleave(function(){
        $('.megamenu').fadeOut('fast');
    });
    $('.list-menu__item').mouseenter(function(){
        $('.megamenu').fadeOut('fast');
        $('.megamenu').removeClass('active');
        var id = $(this).data('megamenu-id');
        $(`#${id}`).slideDown('fast');
    });

    $('.menu-drawer__menu').find('.list-menu__item').each(
        function(){
            var id = $(this).data('megamenu-drawer-id');
            if ($(`#${id}`).length > 0) {
                $(this).append(`
                    <span class="icons">
                        <span class="icon-plus"></span>
                        <span class="icon-minus"></span>
                    </span>
                `);
                $(this).closest('li').append($(`#${id}`));
            }
        }
    );

    $('.icon-plus').click(function(e){
        e.preventDefault();
        $(this).closest('li').addClass('active');
    });

    $('.icon-minus').click(function(e){
        e.preventDefault();
        $(this).closest('li').removeClass('active');
    });
});