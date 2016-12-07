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
    
    $('body>i.fa').on('click', function(event) {
        $('body').animate({scrollTop:0})
    })
    
    $(window).on('scroll', function(event) {
        console.log("I've been TRIGGGGERED")
        if($(window).scrollTop()>600){
            $('body>i.fa').fadeIn()
        }
        else{
            $('body>i.fa').fadeOut()
        }
            
        
    })
    
})