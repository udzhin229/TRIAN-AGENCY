$(document).ready(function() {
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate ({
            scrollTop: blockOffset
        }, 500);
    })
});
$(window).on('load scroll', function() {
    $('.anim').each(function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass('show');
        }
        // else {
        //     $(this).removeClass('show');
        // }
    });
});