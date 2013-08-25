MARK.Core = (function(mrk, undefined){
	var config = {
		beginID : "2"
	}

	var extend = function(m, e){
    	var e = e || this;
    	//for (var x in m) e[x] = m[x];
    	for (var i = 0, len = m.length; i < len; i++) e[i] = m[i];
    	return e;
	};

	var isEmpty = function(obj) {
	    if (typeof obj == 'undefined' || obj === null || obj === '') return true;
	    if (typeof obj == 'number' && isNaN(obj)) return true;
	    if (obj instanceof Date && isNaN(Number(obj))) return true;
	    return false;
	};

	var parentDiv = function(obj) {
		var parent = obj.parentNode;
		while (parent.tagName != "DIV")	parent = parent.parentNode;
		return parent;
	};

	/**
	 * Seccion del FavIco y metodos necesarios
	 */
	var _getURLMain = function(url){
		var _url = url.replace(/^(http:\/\/[^\/]+).*$/, '$1');
		return _url.replace(/(www.)/, '');
	}
	var urlFavIco = function(url){
		var urlCache = _getURLMain(url);
		var favicon = 'chrome://favicon/' + url;
		return favicon;
	};

	return {
		extend:extend,
		isEmpty:isEmpty,
		parentDiv:parentDiv,
		urlFavIco:urlFavIco,
		getUrlMain:_getURLMain
	}

})(MARK);