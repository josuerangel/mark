/**
 * @copyright 2012 Randev Inc (c)
 * @link      https://github.com/randev/mark.js
 * @author   Marcos Josué Rangel Aguilar <micorreoes81@gmail.com> || @josh_bassplayer
 */

var MARK = MARK || {};

MARK.App = MARK.App || {};
MARK.App.version = '0.1';
MARK.App.start = (function(mrk, undefined){
	return function(){
		mrk.Boot();
	}
})(MARK);

MARK.Dom = MARK.Dom || {};
MARK.Dom.ContentBookmarks = document.getElementById('bookmarks');
//MARK.Data = MARK.Data || {};
//MARK.Data.json = MARK.Data.json || [];