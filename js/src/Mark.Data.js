/**
 * @copyright 2012 Randev Inc (c)
 * @link      https://github.com/randev/mark.js
 * @author   Marcos Josué Rangel Aguilar <micorreoes81@gmail.com> || @josh_bassplayer
 */

// MARK.Data = MARK.Data || {};
// MARK.Data.json = MARK.Data.json || [];
// MARK.Data.json.top10 = MARK.Data.json.top10 || ['3019','3020','3021','3025','3026','3027','3028','245','246','247'];

MARK.Data = (function (mrk, undefined) {
	var _top10 = ['3019','3020','3021','3025','3026','3027','3028'];
	var _dirs = [];
	var _items = [];

	var saveDataInit = function(){
		var bookmarkTreeNodes = chrome.bookmarks.getChildren("2", function(bookmarks){
			for (var i = 0, len = bookmarks.length; i < len; i++) {
				if (bookmarks[i].url == undefined) _dirs.push(bookmarks[i]);
			};
		});
	};

	return {
		top10:_top10,
		setDataInit:saveDataInit,
		Dirs:_dirs
	};
})(MARK);