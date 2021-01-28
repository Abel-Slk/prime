//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu = $('.header-menu');
		var headerLang = $('.header-top-lang');
	if(w < 767){ // если ширина меньше 767 и у моего блока нету класса done то этот блок закидывать в блок headerMenu (мобильное меню разворачиваемое):
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{ // если ширина >= 767 то убирать этот класс и перемещать его обратно обратно это у нас начало блока header-top
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}

	// следующее условие:
	if(w < 767) {
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}
	else { // нам нужно вернуть разные меню в разные колонки поэтому тут все будет не так просто как в условии для headerLang. я могу сделать цикл и так буду перебирать все меню:
		$.each($('.header-bottom-menu'), function(index, val) { // для каждого эемента  классом header-bottom-menu выполнить след ф-ию:
			// если это меню имеет класс right то делаем что-то одно а если нет то что то другое:
			if ($(this).hasClass('header-bottom-menu--right')) { // $(this) is the current element of the class header-bottom-menu (the current el that is being looped through). For some reason can't use $('.header-bottom-menu') here - doesn't work
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			}
			else {
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();