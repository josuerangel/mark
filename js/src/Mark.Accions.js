MARK.Accions = (function(mrk, undefined){

	var _openItemBookmark = function(){
		console.log(this);
		window.open(this.getAttribute('data-url'), '_blank');
		window.localStorage.setItem('item', this.getAttribute('data-url'));
		console.log(window.localStorage.getItem('item'));
	};

	return {
		openBookmark:_openItemBookmark
	}

})(MARK);