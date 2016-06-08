$('document').ready(function() {
	$('.partners-owl').owlCarousel({
		items: 7,
		loop: true,
		nav: true,
		navText: ['<div class="partners-left-arrow"></div>', '<div class="partners-right-arrow"></div>'],
		responsive: {
			0: {
				items: 2,
				nav: false,
				autoplay: true
			},
			720: {
				items: 4
			},
			992: {
				items: 7,
			}
		}		
	});
	$('.banner-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true
	});
	$('.goodteam-speech-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<div class="goodteam-left-arrow"></div>', '<div class="goodteam-right-arrow"></div>'],
		autoplay: true,
		dots: true
	});
	$('.cites-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		center: true,
		navText: ['<div class="goodteam-left-arrow"></div>', '<div class="goodteam-right-arrow"></div>'],
		autoplay: true,
		responsive: {
			0: {
				nav: false
			},
			800: {
				nav: true
			}
		}		
	});
	$('.humour-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		center: true,
		navText: ['<div class="goodteam-left-arrow"></div>', '<div class="goodteam-right-arrow"></div>'],
		autoplay: false,
		responsive: {
			0: {
				nav: false
			},
			600: {
				nav: true
			}
		}
	});

	$('.menu.row').slicknav({
		label: 'МЕНЮ',
		prependTo: ".header-nav"
	});

	$('.call-me-please').click(function(){
		swal( {
			title: "Заказать звонок",
			html: "\
					<div class=\"swal-close close\" onclick=\"swal.closeModal()\">x</div>\
					<form action=\"https://formspree.io/info@amarcom.ru\">\
						<input type=\"text\" placeholder=\"Ваше имя\">\
						<input type=\"text\" placeholder=\"Ваш номер телефона\">\
						<input type=\"text\" placeholder=\"В какое время лучше позвонить?\">\
						<input type=\"submit\" value=\"Оставить заявку\">\
					</form>\
			",
			showConfirmButton: false
		});
	});
});