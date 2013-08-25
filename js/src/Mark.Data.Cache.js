/**
 * Temporary cache system
 *
 * @namespace MARK.Data
 * @class Cache
 *
 * @author   Marcos Josué Rangel Aguilar <micorreoes81@gmail.com> || @josh_bassplayer
 */

MARK.Data.Cache = (function(mrk, undefined) {

    var _cache = {};

    /**
     * Sets in the MARK cache system a new key/value
     *
     * @method set
     *
     * @param {string} Key for the new value
     * @param {string} Value for set on cache
     */
    var set = function(key, value) {
        if (exists(key)) {
            //_cache[key] = mrk.Core.mix(get(key), value);
            _cache[key] = mrk.Core.extend(value, get(key));
        } else {
            _cache[key] = value;
        }
    };

    /**
     * Returns the value of a given key.
     *
     * @method get
     *
     * @param {string} Key in MARK Cache System
     * @param {string} [OPTIONAL] Subkey in MARK Cache System
     * @return {object} Value
     */
    var get = function(key, value) {
        if (arguments.length === 1) {
            return _cache[key];
        } else {
            return (_cache[arguments[0]]) ? _cache[arguments[0]][arguments[1]] : undefined;
        }
    };

    /**
     * Removes the instance in MARK Cache System of a given key
     *
     * @method remove
     *
     * @param {string} Key in MARK Cache System
     * @param {string} [OPTIONAL] Subkey in MARK Cache System
     */
    var remove = function(key, value) {
        if (arguments.length === 1) {
            delete _cache[key];
        } else {
            delete _cache[arguments[0]][arguments[1]];
        }
    };

    /**
     * Returns the existence of a key in mark Cache System
     *
     * @method exists
     *
     * @param {String} Key in mark Cache System
     * @return {Boolean} true if exists, false if not
     */
    var exists = function(key) {
        return (_cache[key]) ? true : false;
    };

    return {
        set: set,
        get: get,
        remove: remove,
        exists: exists,
        json: _cache,
    };

})(MARK);