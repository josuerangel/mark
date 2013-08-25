MARK.Search = (function(mrk, undefined){
	var doneTypingInterval = 450;
	var typingTimer;
	var RegExPattern = /\w/;

	var _keydown = function(e){
		clearTimeout(typingTimer);
	};

	var _keyup = function(e){
		//var c = String.fromCharCode(e.keyCode);
		//if (e.keyCode === 13) typingTimer = setTimeout(searchchange, doneTypingInterval);
		//if (c.match(RegExPattern) || e.keyCode === 13) typingTimer = setTimeout(searchchange, doneTypingInterval);
		 typingTimer = setTimeout(searchchange, doneTypingInterval);
	};

	var searchchange = function(){
		//mrk.Sidebar.stop();
		//mrk.Data.Storage.persistent('searchquery', q.value);
		window.localStorage.setItem('searchquery', q.value);
		console.log('searchquery =>' + window.localStorage.getItem('searchquery'));
		chrome.bookmarks.search(q.value, mrk.Sidebar.renderfromarray);
	};

	var q = document.getElementById('searchquery');
	q.addEventListener("keydown", _keydown, false);
	q.addEventListener("keyup", _keyup, false);

	return {
		search:searchchange
	};
})(MARK);