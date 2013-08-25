/**
 * Boot for a new MARK Application instance
 *
 * @namespace MARK
 * @class App
 *
 * @author   Marcos Josué Rangel Aguilar <micorreoes81@gmail.com> || @josh_bassplayer
 */

MARK.Boot = (function(mrk, undefined) {
    return function() {               
        mrk.Boot.Resources.start();
        mrk.Sidebar.start();
    };

})(MARK);

MARK.Boot.Resources = (function(mrk, $, undefined){
    var start = function(){
        //$.getJSON('js/data/data.json', function(data){
            //console.log(data);
        //});
        //console.log("runing app MARK");
    };

    return {
        start : start
    }
})(MARK, Zepto);






