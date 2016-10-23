$(function () {


    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300, 'easeInOutExpo');
        event.preventDefault();
    });


    //GESTION DU CLIC SUR "JE LE VEUX"

    $('#button-send-1').on('click', function (e) {
        $('#button-send-1').hide();
        $('#button-send').show();
        $('#field-group-name').fadeIn('slow');
        $('#field-group-mail').css('display', 'none');
        $('#legend2').fadeIn('slow');
        $('#legend1').css('display', 'none');
    });


    /// GESTION DU BURGER

    $('#burger').on('click', function () {
        if ($('#nav-bis').offset().left < 0) {
            $('#nav-bis').stop().animate({'left': '0px'}, 300);
           //$('#burger span').css('background-color','rgb(212, 151, 216)');
            $('#burger:hover span:last-child').css('opacity', '0');
            $('#burger:hover span:nth-child(2)').css('transform', 'rotate(48deg)');
            $('#burger:hover span:first-child').css('transform', 'rotate(-48deg) translate(-8px,6px)');
            $('#wrapper').stop().animate({'margin-left': '150px'}, 300);
            $('#content-burger').fadeOut('fast');
        } else {
            $('#nav-bis').stop().animate({'left': '-152px'}, 300);
            //$('#burger span').css('background-color','rgb(123,36,129)');
            $('#burger:hover span:last-child').css('opacity', '1');
            $('#burger:hover span:nth-child(2)').css('transform', 'rotate(0deg)');
            $('#burger:hover span:first-child').css('transform', 'rotate(0deg)');
            $('#wrapper').stop().animate({'margin-left': '0px'}, 300);
            $('#content-burger').fadeIn('slow');

        }


    });


    //GESTION DU CLIC SUR TROIS PETITS POINTS

    $('#trois-points-1').on('click', function () {
        $('#hide-section-1').fadeIn('slow');
        $('#trois-points-1').css('opacity', '0');

    });

    $('#trois-points-2').on('click', function () {
        $('#hide-section-2').fadeIn('slow');
        $('#trois-points-2').css('opacity', '0');

    });

    $(window).width(function () {


        if ($(window).width() < 941) {
            $('#article33 .photo-article').attr('src', 'images/article-33(responsive).jpg');
            $('#article32 .photo-article').attr('src', 'images/article-32(responsive).png');
            $('#article31 .photo-article').attr('src', 'images/article-31(responsive).jpeg');
            $('#article30 .photo-article').attr('src', 'images/article-30(responsive).jpeg');
            $('#article29 .photo-article').attr('src', 'images/article-29(responsive).jpeg');
            $('#article28 .photo-article').attr('src', 'images/article-28(responsive).jpg');
            $('#article27 .photo-article').attr('src', 'images/article-27(responsive).jpg');
            $('#article26 .photo-article').attr('src', 'images/article-26(responsive).jpg');
            $('#article25 .photo-article').attr('src', 'images/article-25(responsive).jpg');
            $('#article24 .photo-article').attr('src', 'images/article-24(responsive).jpg');
            $('#article23 .photo-article').attr('src', 'images/skyscraper(responsive).jpg');
            $('#article22 .photo-article').attr('src', 'images/trois_siecles(responsive).jpg');
            $('#article21 .photo-article').attr('src', 'images/consommation(responsive).jpg');
            $('#article20 .photo-article').attr('src', 'images/fruits-legumes(responsive).jpg');
            $('#article19 .photo-article').attr('src', 'images/viande(responsive).jpg');
            $('#article18 .photo-article').attr('src', 'images/climat(responsive).jpg');
            $('#article17 .photo-article').attr('src', 'images/moyen-orient(responsive).jpg');
            $('#article16 .photo-article').attr('src', 'images/terrorisme(responsive).jpg');
            $('#article15 .photo-article').attr('src', 'images/amazonie(responsive).jpg');
            $('#article14 .photo-article').attr('src', 'images/roses(responsive).jpg');
            $('#article13 .photo-article').attr('src', 'images/bebe(responsive).jpg');
            $('#article12 .photo-article').attr('src', 'images/commerce(responsive).jpg');
            $('#article11 .photo-article').attr('src', 'images/continent(responsive).jpg');
            $('#article10 .photo-article').attr('src', 'images/afro2(responsive).jpg');
            $('#article9 .photo-article').attr('src', 'images/palestine(responsive).jpg');
            $('#article8 .photo-article').attr('src', 'images/afro1(responsive).jpg');
            $('#article7 .photo-article').attr('src', 'images/palme(responsive).jpg');
            $('#article6 .photo-article').attr('src', 'images/bit(responsive).jpg');
            $('#article5 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article4 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article3 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article2 .photo-article').attr('src', 'images/terre(responsive).jpg');
            $('#article1 .photo-article').attr('src', 'images/madagascar(responsive).jpg');

        }

        if ($(window).width() > 941) {
            $('#article30 .photo-article').attr('src', 'images/article-30(600x700).jpeg');
            $('#article29 .photo-article').attr('src', 'images/article-29(600x700).jpeg');
            $('#article28 .photo-article').attr('src', 'images/article-28(600x700).jpg');
            $('#article27 .photo-article').attr('src', 'images/article-27(600x700).jpg');
            $('#article26 .photo-article').attr('src', 'images/article-26(600x700).jpg');
            $('#article25 .photo-article').attr('src', 'images/article-25(600x700).jpg');
            $('#article24 .photo-article').attr('src', 'images/article-24(600x700).png');
            $('#article23 .photo-article').attr('src', 'images/skyscraper(600x700).jpg');
            $('#article22 .photo-article').attr('src', 'images/trois_siecles(700x600).jpg');
            $('#article21 .photo-article').attr('src', 'images/consommation(600x700).jpg');
            $('#article20 .photo-article').attr('src', 'images/fruits-legumes(600x700).jpg');
            $('#article19 .photo-article').attr('src', 'images/viande(600x700).jpg');
            $('#article18 .photo-article').attr('src', 'images/climat(600x700).jpg');
            $('#article17 .photo-article').attr('src', 'images/moyen-orient(600x700).jpg');
            $('#article16 .photo-article').attr('src', 'images/terrorisme(600x700).jpg');
            $('#article15 .photo-article').attr('src', 'images/amazonie(600x700).jpg');
            $('#article14 .photo-article').attr('src', 'images/roses(600x700).jpg');
            $('#article13 .photo-article').attr('src', 'images/bebe(600x700).jpg');
            $('#article12 .photo-article').attr('src', 'images/commerce(600x700).jpg');
            $('#article11 .photo-article').attr('src', 'images/continent(600x700).jpg');
            $('#article10 .photo-article').attr('src', 'images/afro2(600x700).jpg');
            $('#article9 .photo-article').attr('src', 'images/palestine(600x700).jpg');
            $('#article8 .photo-article').attr('src', 'images/afro1(600x700).jpg');
            $('#article7 .photo-article').attr('src', 'images/palme(600x700).jpg');
            $('#article6 .photo-article').attr('src', 'images/bit(600x700).jpg');
            $('#article5 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article4 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article3 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article2 .photo-article').attr('src', 'images/terre(600x700).jpg');
            $('#article1 .photo-article').attr('src', 'images/madagascar(600x700).jpg');

        }


        if ($(window).width() > 700) {
            $('#nav-bis').stop().animate({'left': '-152px'}, 100);
            $('#wrapper').stop().animate({'margin-left': '0px'}, 100);
            $('#content-burger').css('display', 'none');
        }

    });



    $('#slideshow').animate({'opacity': 1}, 800);
    $('#chapeau h2').stop().animate({'opacity': '1', 'margin-top': '1em'}, 800);
    $('#content').animate({'opacity': 1}, 800);
    $('#introduction-team-directory').animate({'opacity': 1}, 800);



    //GESTION DU RESIZE WINDOW

    $(window).resize(function () {

        if ($(window).width() < 941) {
            $('#article33 .photo-article').attr('src', 'images/article-33(responsive).jpg');
            $('#article32 .photo-article').attr('src', 'images/article-32(responsive).png');
            $('#article31 .photo-article').attr('src', 'images/article-31(responsive).jpeg');
            $('#article30 .photo-article').attr('src', 'images/article-30(responsive).jpeg');
            $('#article29 .photo-article').attr('src', 'images/article-29(responsive).jpeg');
            $('#article28 .photo-article').attr('src', 'images/article-28(responsive).jpg');
            $('#article27 .photo-article').attr('src', 'images/article-27(responsive).jpg');
            $('#article26 .photo-article').attr('src', 'images/article-26(responsive).jpg');
            $('#article25 .photo-article').attr('src', 'images/article-25(responsive).jpg');
            $('#article24 .photo-article').attr('src', 'images/article-24(responsive).jpg');
            $('#article23 .photo-article').attr('src', 'images/skyscraper(responsive).jpg');
            $('#article22 .photo-article').attr('src', 'images/trois_siecles(responsive).jpg');
            $('#article21 .photo-article').attr('src', 'images/consommation(responsive).jpg');
            $('#article20 .photo-article').attr('src', 'images/fruits-legumes(responsive).jpg');
            $('#article19 .photo-article').attr('src', 'images/viande(responsive).jpg');
            $('#article18 .photo-article').attr('src', 'images/climat(responsive).jpg');
            $('#article17 .photo-article').attr('src', 'images/moyen-orient(responsive).jpg');
            $('#article16 .photo-article').attr('src', 'images/terrorisme(responsive).jpg');
            $('#article15 .photo-article').attr('src', 'images/amazonie(responsive).jpg');
            $('#article14 .photo-article').attr('src', 'images/roses(responsive).jpg');
            $('#article13 .photo-article').attr('src', 'images/bebe(responsive).jpg');
            $('#article12 .photo-article').attr('src', 'images/commerce(responsive).jpg');
            $('#article11 .photo-article').attr('src', 'images/continent(responsive).jpg');
            $('#article10 .photo-article').attr('src', 'images/afro2(responsive).jpg');
            $('#article9 .photo-article').attr('src', 'images/palestine(responsive).jpg');
            $('#article8 .photo-article').attr('src', 'images/afro1(responsive).jpg');
            $('#article7 .photo-article').attr('src', 'images/palme(responsive).jpg');
            $('#article6 .photo-article').attr('src', 'images/bit(responsive).jpg');
            $('#article5 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article4 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article3 .photo-article').attr('src', 'images/jet(responsive).jpg');
            $('#article2 .photo-article').attr('src', 'images/terre(responsive).jpg');
            $('#article1 .photo-article').attr('src', 'images/madagascar(responsive).jpg');

        }

        if ($(window).width() > 941) {
            $('#article29 .photo-article').attr('src', 'images/article-29(600x700).jpeg');
            $('#article28 .photo-article').attr('src', 'images/article-28(600x700).jpg');
            $('#article27 .photo-article').attr('src', 'images/article-27(600x700).jpg');
            $('#article26 .photo-article').attr('src', 'images/article-26(600x700).jpg');
            $('#article25 .photo-article').attr('src', 'images/article-25(600x700).jpg');
            $('#article24 .photo-article').attr('src', 'images/article-24(600x700).png');
            $('#article23 .photo-article').attr('src', 'images/skyscraper(600x700).jpg');
            $('#article22 .photo-article').attr('src', 'images/trois_siecles(700x600).jpg');
            $('#article21 .photo-article').attr('src', 'images/consommation(600x700).jpg');
            $('#article20 .photo-article').attr('src', 'images/fruits-legumes(600x700).jpg');
            $('#article19 .photo-article').attr('src', 'images/viande(600x700).jpg');
            $('#article18 .photo-article').attr('src', 'images/climat(600x700).jpg');
            $('#article17 .photo-article').attr('src', 'images/moyen-orient(600x700).jpg');
            $('#article16 .photo-article').attr('src', 'images/terrorisme(600x700).jpg');
            $('#article15 .photo-article').attr('src', 'images/amazonie(600x700).jpg');
            $('#article14 .photo-article').attr('src', 'images/roses(600x700).jpg');
            $('#article13 .photo-article').attr('src', 'images/bebe(600x700).jpg');
            $('#article12 .photo-article').attr('src', 'images/commerce(600x700).jpg');
            $('#article11 .photo-article').attr('src', 'images/continent(600x700).jpg');
            $('#article10 .photo-article').attr('src', 'images/afro2(600x700).jpg');
            $('#article9 .photo-article').attr('src', 'images/palestine(600x700).jpg');
            $('#article8 .photo-article').attr('src', 'images/afro1(600x700).jpg');
            $('#article7 .photo-article').attr('src', 'images/palme(600x700).jpg');
            $('#article6 .photo-article').attr('src', 'images/bit(600x700).jpg');
            $('#article5 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article4 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article3 .photo-article').attr('src', 'images/jet(600x700).jpg');
            $('#article2 .photo-article').attr('src', 'images/terre(600x700).jpg');
            $('#article1 .photo-article').attr('src', 'images/madagascar(600x700).jpg');

        }

        if ($(window).width() > 700) {
            $('#nav-bis').stop().animate({'left': '-152px'}, 100);
            $('#wrapper').stop().animate({'margin-left': '0px'}, 100);
            $('#burger:hover span:last-child').css('opacity', '1');
            $('#burger:hover span:nth-child(2)').css('transform', 'rotate(0deg)');
            $('#burger:hover span:first-child').css('transform', 'rotate(0deg)');
            $('#content-burger').css('display', 'none');

        }

        if ($(window).width() < 700) {
            $('#burger:hover span:last-child').css('opacity', '1');
            $('#burger:hover span:nth-child(2)').css('transform', 'rotate(0deg)');
            $('#burger:hover span:first-child').css('transform', 'rotate(0deg)');
            $('#content-burger').css('display', 'block');

        }

    });




//GESTION DU SROLL WINDOW


    $(window).scroll(function () {
        
        posScroll = $(document).scrollTop();
        
        if (posScroll >= 80)
        $('.arrow-down').fadeOut('fast');
	         else
        $('.arrow-down').fadeIn('fast');

        if(posScroll >= 200)
        $('#chapeau').fadeOut('slow');
	         else
        $('#chapeau').fadeIn('slow');
        
        
        if ($(window).scrollTop() > 300) {
            $('header').slideUp('fast');
            $('#content-burger').stop().animate({'opacity': 1}, 100);
            $('#introduction-team-directory').css('opacity', '0');
        } else {
            $('header').slideDown('fast');
            $('#content-burger').css('opacity', '0');
            $('#introduction-team-directory').css('opacity', '1');
        }



	    


/// GESTION DES APPARITIONS CSS PAGE AUTEUR

        if ($(window).scrollTop() > 400) {

            $('#biography-alexandra').stop().animate({'opacity': 1}, 100);
        }

        if ($(window).scrollTop() > 470) {
            $('#alexandra').css('transform', 'scale(1)');
        }


        if ($(window).scrollTop() > 1100) {
            $('#biography-justine').stop().animate({'opacity': 1}, 100);
        }


        if ($(window).scrollTop() > 1170) {
            $('#justine').css('transform', 'scale(1)');
        }



        if ($(window).scrollTop() > 1630) {
            $('#biography-ingrid').stop().animate({'opacity': 1}, 100);
        }

        if ($(window).scrollTop() > 1700) {
            $('#ingrid').css('transform', 'scale(1)');
        }



        if ($(window).scrollTop() > 2100) {

            $('#introduction-auteurs-participatifs').stop().animate({'opacity': 1}, 100);
        }

        if ($(window).scrollTop() > 2750) {

            $('#aurelien').css('transform', 'scale(1)');
        }


        if ($(window).scrollTop() > 2800) {

            $('#aida').css('transform', 'scale(1)');
        }


        if ($(window).scrollTop() > 3250) {

            $('#nicolas').css('transform', 'scale(1)');
        }


        if ($(window).scrollTop() > 3300) {

            $('#noemie').css('transform', 'scale(1)');
        }

        if ($(window).scrollTop() > 3750) {

            $('#etienne').css('transform', 'scale(1)');
        }

        if ($(window).scrollTop() > 3800) {

            $('#gri').css('transform', 'scale(1)');
        }

        if ($(window).scrollTop() > 4200) {

            $('#lisa').css('transform', 'scale(1)');
        }


    });


    /// GESTION DU HOVER SUR BOUTON BAOBAB


    $(".baobab button").hover(function () {
        $(this).css({'background': 'rgb(123,36,129)', 'color': 'white'});
    }, function () {
        $(this).css({'background': 'white', 'color': 'rgb(123,36,129)'});
    });


    /// GESTION DES BOUTONS BAOBAB AU SCROLL

    var targetOffset1 = $("#rub1").offset().top;
    var targetOffset2 = $("#rub2").offset().top;
    var targetOffset3 = $("#rub3").offset().top;
    var targetOffset4 = $("#rub4").offset().top;
    var targetOffset5 = $("#rub5").offset().top;
    var targetOffset6 = $("#rub6").offset().top;
    var targetOffset7 = $("#rub7").offset().top;
    var targetOffset8 = $("#rub8").offset().top;
    var targetOffset9 = $("#rub9").offset().top;

    var $w = $(window).scroll(function () {
        if ($w.scrollTop() > targetOffset1) {
            $('.baobab .L').css({'background': 'rgb(123,36,129)', 'color': 'white'});
            $('.baobab .E,.baobab .trois,.baobab .B,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
        } else {
        }

        if ($w.scrollTop() > targetOffset2) {
            $('.baobab .L,.baobab .trois,.baobab .B,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .E').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset3) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .trois').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset4) {
            $('.baobab .L,.baobab .E,.baobab .trois,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .B').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset5) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .trois,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .A').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset6) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .A,.baobab .trois,.baobab .Bbis,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .O').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset7) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .A,.baobab .O,.baobab .trois,.baobab .Abis,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .Bbis').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset8) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .trois,.baobab .Bter').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .Abis').css({'background': 'rgb(123,36,129)', 'color': 'white'});
        } else {
        }

        if ($w.scrollTop() > targetOffset9) {
            $('.baobab .L,.baobab .E,.baobab .B,.baobab .A,.baobab .O,.baobab .Bbis,.baobab .Abis,.baobab .trois').css({'background': 'white', 'color': 'rgb(123,36,129)'});
            $('.baobab .Bter').css({'background': 'rgb(123,36,129)', 'color': 'white'});
            $('#baobabis').css('opacity', '0');
        } else {
            $('#baobabis').css('opacity', '1');
        }


    });






});
