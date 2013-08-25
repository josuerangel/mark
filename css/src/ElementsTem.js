		var _contentBarId = function(){
			return 'contentBar-' + _el.id;
		};

		var _contentBar = function(){
			return '<div id="' + _contentBarId() + '" class="bar bar-inside hide"><ul></ul></div>';
		}

		/*var _html = '<li data-id-parent="' + _el.parentId + '" data-id-bookmark="' + _el.id + '"><div>';
			_html += _row() + '<span class="text-dir">' + _el.title + '</span>'
			_html += '</div></li>';*/
		
		/*var _html = '<li data-id-parent="' + _el.parentId + '" data-id-bookmark="' + _el.id + '"><div>';
			_html += _row() + '<a>' + _el.title + '</a>'
			_html += '</div></li>';*/