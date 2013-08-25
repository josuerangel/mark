(function($){
      $.extend($.fn, {
        fadeIn: function(ms){
          if(ms == undefined){
            ms = 3000;
          }
          $(this).css({            
            opacity:0
          }).animate({
            opacity: 1
          }, ms);
          return this;
        }
      })
    })(Zepto);