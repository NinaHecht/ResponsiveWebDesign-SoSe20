var windowwidth;
$(window).load(function(){
    windowwidth = window.innerWidth;
});
$(window).resize(function(){
    if(window.innerWidth != windowwidth){
        if((window.innerWidth < 992 &&  windowwidth > 991) || (window.innerWidth > 991 &&  windowwidth < 992)){
            if($('.stromkreis-infos.open').length){
                $('.stromkreis-infos.open').removeClass('open');
                $('#stromkreis-container .card__layer-2.closed').removeClass('closed');
                $('#stromkreis-container.open').removeClass('open');
            }
        }
        windowwidth = window.innerWidth;        
    }
});

$('#stromkreis').on('click', function() {
    if($('.stromkreis-infos').hasClass('open')){
        $('.stromkreis-infos').removeClass('open');
        if(window.innerWidth > 991){
            setTimeout(function(){ $('#stromkreis-container').removeClass('open') }, 500);
        }else{
            $('.stromkreis-infos').animate({height: '0'}, 500);
        }
    }else{
        if(window.innerWidth > 991){
            $('#stromkreis-container').addClass('open');
        }else{
            $('.stromkreis-infos').animate({height: $('.stromkreis-infos p').innerHeight()}, 500);
        }
        setTimeout(function(){ $('.stromkreis-infos').addClass('open') }, 500);
    }
    $(this).parent().toggleClass('closed');
});

$('.components .interaction-marker').on('click', function() {
    var id = $(this).attr('id')+'-infos';
    var container = $('#components-card-container');
    var formerId = container.children('.card.open').attr('id');

    if (container.hasClass('card-open')){
        container.children('.card.open').removeClass('open').fadeOut();
        $(this).parent().children('.interaction-marker--active').removeClass('interaction-marker--active');
    }else{
        container.addClass('card-open');
    }
    
    if(formerId === id){
        container.removeClass('card-open');
    }else{
        $('#'+id).addClass('open').fadeIn();
        $(this).addClass('interaction-marker--active');
    }
});

$('body').on('click', function(e) {
    if(! $( e.target ).hasClass('interaction-marker') && ! $( e.target ).hasClass('card')){
        $('.components .interaction-marker.interaction-marker--active').removeClass('interaction-marker--active');
        $('#components-card-container .card.open').removeClass('open').fadeOut();
        $('#components-card-container.card-open').removeClass('card-open');
    }
});

$(document).ready(function(){
    $('.no-js').removeClass('no-js');
    $('.favorites').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
