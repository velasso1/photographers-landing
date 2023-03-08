
    const btnWhats = document.querySelector(".whatsapp").onclick = function() {
    window.location.href = 'https://api.whatsapp.com/send/?phone=79133104123&text=Здравствуйте%2C+Можно+узнать+подробнее+о+фотосессиях?';
                                                                



};

const btnInst = document.querySelector(".inst").onclick = function() {
    window.location.href = 'https://instagram.com/za.kadrom.krd?igshid=YmMyMTA2M2Y=';
};


const btn = document.querySelector(".btn").onclick = function() {
    window.location.href = 'https://api.whatsapp.com/send/?phone=79133104123&text=Здравствуйте%2C+Можно+узнать+подробнее+о+фотосессиях?';
};


$('.slider').slick({
    arrows:true,
    adaptiveHeigth:true,
    slidesToShow:2,
    slidesToScroll:1,
    speed:1000,
    easing:'ease',
    infinite:false,
    initialSlide:1,
    variableWidth:true,
    autoPlay:false,
    autoPlaySpeed:5000,
    touchTreshold:15,
    centerMode:true,
    responsive:[
        {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                infinite:false,
            }

        },{
            breakpoint: 992,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                infinite:false,
            }

        },{
            breakpoint: 767,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                infinite:false,
            }

        },{
            breakpoint: 420,
            settings:{
                slidesToShow:1,
                slidesToScroll:2,
                infinite:false,
            }

        }
    ]
});


$('.menu_burger').click(function(event) {
    $('.menu_burger, .header_nav').toggleClass('active');
    $('body').toggleClass('lock');
})

$('.nav_item').click(function(event) {
    $('.menu_burger, .header_nav').removeClass('active');
})



