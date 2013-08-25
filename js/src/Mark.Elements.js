MARK.Elements = (function(mrk, undefined){
	var colorsBackground = {
		position : 0,
		arrColors : ['bg-item-0', 'bg-item-1', 'bg-item-2', 'bg-item-3', 'bg-item-4', 'bg-item-5', 'bg-item-6', 'bg-item-7', 'bg-item-8', 'bg-item-9']
	};

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

	var _favico = function(url){
		var _url = url.replace(/^(http:\/\/[^\/]+).*$/, '$1') + '/favicon.ico';
		var xhr = new window.XMLHttpRequest();
		xhr.open('GET', _url, false);
		xhr.setRequestHeader('timeout', '200');
		xhr.responseType = 'blob';

		xhr.onload = function(e) {
		  if (this.status !== 200) _url = '/img/mark-default.png';
		};
		xhr.send();
		return _url;
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
			_html += '<div data-id-parent="' + _el.parentId + '" data-id-bookmark="' + _el.id + '" class="box-dir opacito">'  + /*_row() +*/ '<a ref="directory" href="#"><span class="dir-title-text">' + _el.title + '</span></a></div>';
			_html += '<div class="dir subdir hide opacito"><ul></ul></div></li>';
		return _html;
	};

	var listItem = function(){
		var cadena = '<article><header><img src="" alt="icono de la pagina">';
			cadena += '<a class="clicleable" href="' + this.url + '"><div>' + this.title + '</div></a></header>';
            cadena += '</article>';

        return cadena;
	};

	var html = function(){
		return '<li class="dir" data-id-bookmark="' + this.id + '"><span class="text-dir">' + this.title + '</span></li>';
	};

	//el titulo no es el del nivel superior, revisar
	var itemUp = function(id, text){
		return '<li class="dir nivelUp" data-id-bookmark="' + id + '"><span class="text-dir">"' + text + '"</span></li>'
	};

	var _sectionRoot = '<section><div class="root"><a ref="directory" href="#">Directorios</a></div><div class="dir"><ul id="sidebarfirstul"></ul></div></section>';

	var domSectionRoot = function(){
		var _a = document.createElement('a');
		_a.setAttribute('ref', 'directory');
		_a.setAttribute('href', '#');
		_a.innerHTML = 'Directorios';

		var _divRoot = document.createElement('div');
		_divRoot.className = 'root';
		_divRoot.appendChild(_a);

		var _ul = document.createElement('ul');
		_ul.className = 'sidebarfistul';
		var _div = document.createElement('div');
		_div.className = 'dir';
		_div.appendChild(_ul);

		var _section = document.createElement('section');
		_section.appendChild(_divRoot);
		_section.appendChild(_div);

		return _section;
	};

	var addItemBookmark = function(item){
		//console.log(item);
		/**
		 * imgane del logo, contenedor del logo
		 */
		var logoimg = document.createElement('img');
		logoimg.setAttribute('src', mrk.Core.urlFavIco(item.url));
		logoimg.setAttribute('alt', 'icon bookmark');
		// logoimg.setAttribute('data-url', item.url);
		logoimg.className = 'item-logo-img';

		var divLogo = document.createElement('div');
		divLogo.className = 'item-logo-container';
		divLogo.setAttribute('data-url', item.url);
		divLogo.appendChild(logoimg);
		divLogo.addEventListener("click", mrk.Accions.openBookmark, false);

		/**
		 * contenerdor links
		 */
		var spanLink = document.createElement('span');
		spanLink.setAttribute('data-url', _urlMain);
		spanLink.className = 'item-accion-copyurl';
		//spanLink.addEventListener("click", _openItemBookmark, false);

		var iconClic = document.createElement('div');
		iconClic.className = 'item-accion-icon-container';

		var icon = document.createElement('img');
		icon.setAttribute('href', '#');
		icon.setAttribute('src', '/img/icons/history.png');

		iconClic.appendChild(icon);


		var divAccion = document.createElement('div');
		divAccion.className = 'item-accion-container';
		divAccion.appendChild(spanLink);

		var strSvg = '<svg width="500.00000000000006" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#CACACA"><path d="M 385.05,360.075l-65.65-188.40c-18.075-51.85-74.175-80.50-127.325-66.35L 142.675,9.475C 138.20,0.80, 127.725-2.525, 119.25,2.05 C 110.775,6.65, 107.525,17.40, 112.00,26.075l 48.225,93.575c-38.425,25.50-58.40,73.825-45.75,119.325l 53.50,192.40 c 15.05,54.075, 77.00,81.625, 139.275,62.575C 368.725,472.375, 403.525,413.025, 385.05,360.075z M 222.475,223.075C 204.25,229.05, 184.70,218.775, 178.85,200.05 C 173.00,181.35, 183.05,161.325, 201.30,155.35c 18.25-6.00, 37.80,4.30, 43.65,23.00S 240.75,217.075, 222.475,223.075z" ></path></svg>';
		var svgMouse = document.createElement('object');
		svgMouse.setAttribute('type', 'image/svg+xml');
		svgMouse.setAttribute('data', 'data:image/svg+xml,' + strSvg);
		svgMouse.setAttribute('height', '16');
		svgMouse.setAttribute('width', '16');
		svgMouse.setAttribute('fill', '#CACACA');
		//svgMouse.className = 'item-accion-icon';


		//var canvas = document.createElement('canvas');
		//canvas.setAttribute('style', 'height:16px;width:16px;');
		//canvg(canvas, svgMouse);

		divAccion.appendChild(svgMouse);
		//divAccion.appendChild(iconClic);

		/**
		 * link dominio, contenerdor del link
		 */
		var _urlMain = mrk.Core.getUrlMain(item.url);
		var aHeader = document.createElement('a');
		aHeader.setAttribute('ref', 'itemBookmarkHeader');
		aHeader.setAttribute('href', _urlMain);
		aHeader.setAttribute('data-url', _urlMain);
		aHeader.setAttribute('data-id', item.id);
		aHeader.className = 'item-header-urlmain';
		aHeader.addEventListener("click", mrk.Accions.openBookmark, false);
		if (_urlMain.search('http://') > -1) aHeader.innerHTML = _urlMain.replace('http://', '');
		if (_urlMain.search('https://') > -1) aHeader.innerHTML = _urlMain.replace('https://', '');

		var divHeader = document.createElement('div');
		divHeader.className = 'item-header-container';
		divHeader.appendChild(aHeader);

		/**
		 * link del bookmar, contenerdor del bookmark
		 * @type {[type]}
		 */
		var aTitle = document.createElement('a');
		aTitle.setAttribute('ref', 'itemBookmark');
		aTitle.setAttribute('href', item.url);
		aTitle.setAttribute('data-url', item.url);
		aTitle.setAttribute('data-id', item.id);
		aTitle.className = 'item-bodyitem-title';
		aTitle.innerHTML = item.title;
		aTitle.addEventListener("click", mrk.Accions.openBookmark, false);

		var divBodyitem = document.createElement('div');
		divBodyitem.className = 'item-bodyitem-container ' + getColorBackground();
		divBodyitem.appendChild(aTitle);

		var article = document.createElement('article');
		//console.log(item);
		if (item.title.length > 35) article.className = 'item-large';
		else article.className = 'item-short ';// + getColorBackground();
		article.appendChild(divBodyitem);
		article.appendChild(divLogo);
		article.appendChild(divHeader);
		article.appendChild(divAccion);

		mrk.Dom.ContentBookmarks.appendChild(article);
	};

	var getColorBackground = function(){
		//console.log(colorsBackground.position);
		if (colorsBackground.position >= 9) colorsBackground.position = 0;
		else colorsBackground.position++;
		return colorsBackground.arrColors[colorsBackground.position];
	};

	var getColorIconAccion = function(){
		return colorsBackground.arrColors[colorsBackground.position];
	};

	return{
		dirItem:dirItem,
		getContentBar:getContentBar,
		listItem:listItem,
		TempleteSeccionRoot:_sectionRoot,
		Section:domSectionRoot,
		addItemBookmark:addItemBookmark
	}
})(MARK);