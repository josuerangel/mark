MARK.Sidebar = (function(mrk, $, undefined){
	var _borderColors = ['#E02A24', '#E05F23', '#DFE022'];
	var _stop = false;
	var _domSidebarUl;

	var config = {
		beginID : "0"
	}

	var init = function init(){
		loadFistTime();
		//var bookmarkTreeNodes = chrome.bookmarks.getChildren(config.beginID, loadFisrtLevel);
	};

	var addDir = function(dir, idContent){
		//console.log(dir);
		var _span = document.createElement('span');
		_span.className = 'dir-title-text';
		_span.innerHTML = dir.title;

		var _a = document.createElement('a');
		_a.setAttribute('ref', 'directory');
		_a.setAttribute('href', '#');
		_a.appendChild(_span);

		var _divBox = document.createElement('div');
		_divBox.setAttribute('id', 'dir-' + dir.id);
		_divBox.setAttribute('data-id-bookmark', dir.id);
		_divBox.setAttribute('data-id-parent', 'dir-' + dir.parentId);
		_divBox.setAttribute('data-id-content', 'content-' + dir.id);
		_divBox.className = 'box-dir';
		_divBox.addEventListener("click", _loadContentBar, false);
		_divBox.appendChild(_a);

		var _ul = document.createElement('ul');
		_ul.setAttribute('id', 'content-' + dir.id);
		var _div = document.createElement('div');
		_div.className = 'dir subdir hide';
		_div.appendChild(_ul);

		_li = document.createElement('li');
		_li.appendChild(_divBox);
		_li.appendChild(_div);
		_li.className = 'animate-fadeleft box-dir-li';

		var _content = document.getElementById(idContent);
		_content.appendChild(_li);

		if (_content.parentElement.classList.contains('hide')) _content.parentElement.classList.remove('hide');
	};

	var loadFisrtLevel = function(btn, query){
		for (var i = 0, len = btn.length; i < len; i++) addDir(btn[i], 'sidebarfirstul');
	};

	var loadFistTime = function(){
		var cacheSearch = window.localStorage.getItem('searchquery');
		if (cacheSearch === '' || cacheSearch === undefined){
			chrome.bookmarks.get(mrk.Data.top10, function(arrBookmarks){
				//console.log(arrBookmarks);
				var oneShort = false;
				arrBookmarks.sort(function(a, b){
					//console.log(a,b);
					var _a = 0, _b = 0, diference = 0;
					if (a.title.length > 35) _a = 1;
					if (b.title.length > 35) _b = 1;
					diference = _a - _b;
					if (diference = -1) oneShort = true;
					else oneShort = false;

					console.log(diference, oneShort);

					//if (oneShort) diference = 0;
					return _a - _b;
				});
				mrk.Data.setDataInit();
				_loadfromarray(mrk.Data.Dirs);
				_loadfromarray(arrBookmarks);
			});
		}
		else {
			document.getElementById('searchquery').value = cacheSearch;
			mrk.Search.search();
		}
	}

	var _setSelected = function(selected){
		var el = document.getElementById(selected);
		var parent = mrk.Core.parentDiv(el);
		var elSelected = parent.querySelector('.box-dir-selected');

		/**
		 * Si otro dir esta seleccionado, oculta su menu y quita la clase de seleccion.
		 */
		if (elSelected != undefined) {
			var menuForHide = elSelected.nextElementSibling;
			menuForHide.classList.add('hide');
			elSelected.classList.remove('box-dir-selected');
		}

		el.classList.add('box-dir-selected');
	};


	var _loadContentBar = function(clearDom){
		clearDom = typeof clearDom !== undefined ? clearDom : true;
		_setSelected(this.id);
		if (clearDom) mrk.Dom.ContentBookmarks.innerHTML = '';
		var el = document.getElementById(this.id);
		var elContent = document.getElementById(el.getAttribute("data-id-content"));
		var elContentCount = elContent.querySelectorAll('li').length;
		if (elContentCount == 0) {
			var _bookmark = chrome.bookmarks.getChildren(el.getAttribute('data-id-bookmark'),
				function(_bookmarks){
					for (var i = 0, len = _bookmarks.length; i < len; i++) {
				  		if (_bookmarks[i].url == undefined) addDir(_bookmarks[i], el.getAttribute("data-id-content"));
				  		else mrk.Elements.addItemBookmark(_bookmarks[i]);
					}
				}
			)
		}
		else {
			var elDiv = mrk.Core.parentDiv(elContent);
			elDiv.classList.remove('hide');
		}
	};

	/**
	 * Cargar directamente de un array de bookmarks
	 * Primera implementacion en el search
	 * @param  {array} _bookmarks [array de bookmarks]
	 */
	var _loadfromarray = function(bookmarks){
		_stop = false;
		mrk.Dom.ContentBookmarks.innerHTML = '';
		//for (var i = 0, len = bookmarks.length; i < len; i++) {
		for (var i = 0, len = 50; i < len; i++) {
			if (_stop) { console.log('stop sidebar!'); return; }
	  		if (bookmarks[i].url == undefined) addDir(bookmarks[i], 'sidebarfirstul');
	  		else mrk.Elements.addItemBookmark(bookmarks[i]);
		}
	};

	/**
	 * Agrega un item al DOM, asincronamente, se intentara manejar automaticamente los error que no permiten,
	 * 	insertar el item, mandarlos a la base para revision
	 * @param  {[Object]} item [Objeto json del bookmark]
	 * @return {[Boolean]}      [Si se agrego correctamente TRUE, en caso contrario FALSE]
	 */
	var _showIcons = function(items){
		$.each(items, function(){
			var _url = $(this).find('a').eq(0).attr('href');
			var _urlCache = _url.replace(/^(http:\/\/[^\/]+).*$/, '$1');
			_url = 'http://g.etfv.co/' + _urlCache + '/favicon.ico';
			$(this).find('img').eq(0).attr('src',_url);
		});
	}

	var stop = function(){
		console.log('stoping side bar...');
		_stop = true;
	};

	return {
		start:init,
		renderfromarray:_loadfromarray,
		stop:stop
	}

})(MARK, Zepto);