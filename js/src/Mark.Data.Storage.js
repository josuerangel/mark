/**
 * Wrapper for using LocalStorage & SessionStorage (HTML5 Feature)
 *
 * @namespace MARK.Data
 * @class Storage
 *
 * @author   Marcos Josué Rangel Aguilar <micorreoes81@gmail.com> || @josh_bassplayer
 */

MARK.Data.Storage = (function(mrk, undefined) {

    var STORAGE = {
        PERSISTENT: 'localStorage',
        SESSION: 'sessionStorage'
    };

    /**
     * Wrapper for SessionStorage
     *
     * @method persistent
     *
     * @param {string} Key
     * @param {object} Value
     * @return {string} If no value assigned returns the value of established key
     */
	var persistent = function(key, value) {
        return _handler(STORAGE.PERSISTENT, key, value);
	};

    /**
     * Wrapper for SessionStorage
     *
     * @method session
     *
     * @param {string} Key
     * @param {object} Value
     * @return {string} If no value assigned returns the value of established key
     */
	var session = function(key, value) {
        return _handler(STORAGE.SESSION, key, value);
	};

    var _handler = function(storage, key, value) {
        var storage = window[storage];

        if (value) {
            _saveKey(storage, key, value);
        } else {
            return _getKey(storage, key, value);
        }
    };

    var _saveKey = function(storage, key, value) {
        value = JSON.stringify(value);
        storage.setItem(key, value);
    };

    var _getKey = function(storage, key, value) {
        value = storage.getItem(key);
        return JSON.parse(value);
    };

    return {
    	session: session,
    	persistent: persistent
    };

})(MARK);