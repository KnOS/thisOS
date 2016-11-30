$(function() {
    $('.button.desktop').on('click', function(event) {
        $('.os.active').removeClass("active");
        $('.desktop.os').addClass('active');
        $('.button.active').removeClass('active');
        $(this).addClass('active');
    })
    $('.button.mobile').on('click', function(event) {
        $('.os.active').removeClass("active");
        $('.mobile.os').addClass('active');
        $('.button.active').removeClass('active');
        $(this).addClass('active');
        
    })
})