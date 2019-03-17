
(function(window, document) {
  'use strict';

  var CookieManager = {

    /**
    * Create cookie with given parameters
    * @param {String} name cookie name
    * @param {String} value cookie value
    * @param {Number} [expires] cookie expiration in days
    * @param {String} [domain] cookie domain
    * @param {String} [path] cookie path
    * @param {Boolean} [secure] cookie ssl flag
    */
    set: function(name, value, expires, domain, path, secure){

      var cookieStr = name + '=' + value;
      if(expires){
        var now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ';' + 'expires=' + now.toUTCString();
      }
      if(domain){
        cookieStr += ';' + 'domain=' + domain;
      }
      if(path){
        cookieStr += ';' + 'path=' + path;
      }
      if(secure){
        cookieStr += ';' + 'secure';
      }
      // Create Cookie
      document.cookie = cookieStr;
    },

    /**
    * Retrieve a cookie with given name (key)
    * @param {String} name cookie name
    */
    get: function(name){

      var cookies = document.cookie.split(";").map(function(cookies){
        return cookies.trim();
      });

      for (var i=0; i <cookies.length; i++){
        var cookie = cookies[i].split("=");
        var key = cookie[0];
        var value = cookie[1];

        if (key === name){
          return value;
        }
      }
      return undefined;
    },

    /**
    * Updatee cookie with given parameters
    * @param {String} name cookie name
    * @param {String} value cookie value
    * @param {Number} [expires] cookie expiration in days
    * @param {String} [domain] cookie domain
    * @param {String} [path] cookie path
    * @param {Boolean} [secure] cookie ssl flag
    */
    update: function(name, value, expires, domain, path, secure){
      this.set(name, value, expires, domain, path, secure);
    },

    /**
    * Delete a cookie with given name (key)
    * @param {String} name cookie name
    */
    delete: function(name){
      this.set(name, "", -1);
    },

    /**
    * Retrieve all cookies
    */
    getAll: function(){

      var cookies = document.cookie.split(";").map(function(cookies){
        return cookies.trim();
      });

      var cookieList = [];

      for (var i=0; i <cookies.length; i++){
        var cookie = cookies[i].split("=");
        var key = cookie[0];
        var value = cookie[1];
        cookieList.push({key: key, value: value});
      }
      return cookieList;
    },

    /**
    * Delete all cookies
    */
    clear: function(){

      var cookies = document.cookie.split(";").map(function(cookies){
        return cookies.trim();
      });

      var cookieList = [];

      for (var i=0; i <cookies.length; i++){
        var cookie = cookies[i].split("=");
        var key = cookie[0];
        var value = cookie[1];
        this.delete(key);
      }
    },
  };

  /**
  * AMD support
  */
  if (typeof define === "function" && define.and){
    define(function(){
      return CookieManager;
    });
  } else if (typeof exports !== "undefined"){
    if (typeof module !== "undefined" && module.exports){
      exports = module.exports = CookieManager;
    }
    exports.CookieManage = CookieManager;
  } else {
    window.CookieManager = CookieManager;
  }


})(window, document);
