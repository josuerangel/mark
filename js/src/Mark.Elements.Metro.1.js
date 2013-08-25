MARK.Elements = (function(mrk, undefined){
	var baseMark = {
		id : 0,
		parentId: 0,
		title : '',
		dateAdd : {},
		dateGroupModified : {},		
	};

	var _row = function(){
		var _rowHTML = '<a class="dir-arrow"><svg class="dir-row-svg" viewBox="0 0 500 500" data-tags="arrow, right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><metadata><license name="CC BY-SA 3.0" href="http://creativecommons.org/licenses/by-sa/3.0/"></license><author name="Daniel Bruce" href="mailto:daniel@precinct.net"></author></metadata><path d="M 214.321,112.938c 10.445,10.191, 112.555,117.398, 112.555,117.398c 5.571,5.438, 8.36,12.563, 8.36,19.695';
			_rowHTML += '	c0.00,7.136-2.789,14.265-8.36,19.699c0.00,0.00-102.109,107.207-112.555,117.398s-29.238,10.883-40.395,0.00';
			_rowHTML += 'c-11.145-10.871-12.031-26.051, 0.008-39.391l 93.672-97.707L 173.934,152.332c-12.039-13.344-11.152-28.52-0.008-39.395';
	 		_rowHTML += 'C 185.082,102.055, 203.875,102.75, 214.321,112.938z"></path></svg></a>';
	 	return _rowHTML;
	}

	var dirBase = {
		click : function(){},
		html : function(){},
	}

	var getContentBar = function(el){
		console.log('el', el, 'this', this);
		var _el = el || this;
		console.log('_el', _el);
		var _html = '#contentBar-' + _el + ' ul';
		//var _html = '#contentBar-' + _el + '';
		console.log('_html', _html);
		var $el = $(_html);
		console.log($el);
		return $el;
	};

	var dirItem = function(){
		var _el = this;
		var _html = '<li>';
			_html += '<div data-id-parent="' + _el.parentId + '" data-id-bookmark="' + _el.id + '" class="box-dir opacito">'  + _row() + '<a ref="directory" href="#"><span class="dir-title-text">' + _el.title + '</span></a></div>';
			_html += '<div class="dir subdir hide opacito"><ul></ul></div></li>';
		return _html;
	};

/*	var listItem = function(){
		var cadena = '';
		cadena += '<li class="item" data-id-bookmark="' + this.id + '">';
		cadena += '<div class="item-content">';
		cadena += '<span class="item-title">' + this.title + '</span>';
		cadena += '<span class="item-slogan">' + 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' + '</span>';
		cadena += '<div class="item-info">' + '<span class="item-last-access">2 weeks</span>' + '<span class="item-share">share</span>';
		cadena += '<span class="item-like">like</span>';
		cadena += '<span class="item-more">more</span>';
		cadena += '</div></li>';
		return cadena;
	};*/

	var listItem = function(){
		var cadena = '<article><header><img src="img/bg-header.png" alt="icono de la pagina">';
			cadena += '<a href="#">' + this.title + '</a></header>';
            cadena += '<section>Descripcion del metatag, donde debe decir a que segun se refiere la pagina, lo que sea que lo describa mas.</section>';
            cadena += '<nav><ul><li>2 weeks age</li><li>share</li><li>like</li><li>more</li></ul></nav></article>';

        return cadena;
	}

	var html = function(){
		return '<li class="dir" data-id-bookmark="' + this.id + '"><span class="text-dir">' + this.title + '</span></li>';
	};

	//el titulo no es el del nivel superior, revisar
	var itemUp = function(id, text){
		return '<li class="dir nivelUp" data-id-bookmark="' + id + '"><span class="text-dir">"' + text + '"</span></li>'
	};

	var _section = function(id) {
		return '<section><div class="root"><a ref="directory" href="#">Directorios</a></div><div class="dir"><ul></ul></div></section>';
	};

	return{
		dirItem:dirItem,
		getContentBar:getContentBar,
		listItem:listItem,
		seccion:_section
	}
})(MARK);