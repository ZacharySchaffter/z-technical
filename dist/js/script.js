(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var locationData = {
  locations: [{
    name: "Platform",
    address: "123 fakestreet",
    storeHours: ["Monday-Sunday - 7am - 8pm"],
    img: {
      thumb: "./img/location-thumbnails/location-thumb_platform.jpg"
    },
    url: "#"
  }, {
    name: "DTLA",
    address: "123 fakestreet",
    storeHours: ["Monday - Sunday - 7am - 8pm"],
    img: {
      thumb: "./img/location-thumbnails/location-thumb_dtla.jpg"
    },
    url: "#"
  }, {
    name: "Pasadena",
    address: "123 fakestreet",
    storeHours: ["Monday - Saturday - 7:30am - 7pm", "Sunday - 8am - 6pm"],
    img: {
      thumb: "./img/location-thumbnails/location-thumb_platform.jpg"
    },
    url: "#"
  }, {
    name: "Venice",
    address: "123 fakestreet",
    storeHours: ["Monday-Sunday - 7am - 8pm"],
    img: {
      thumb: "./img/location-thumbnails/location-thumb_venice.jpg"
    },
    url: "#"
  }]
};

var locationPreview = new Vue({
  el: '#locations',
  data: locationData
});

module.exports = {
  locationPreview: locationPreview
};

},{}],2:[function(require,module,exports){
"use strict";

//Navigation source data
var source = {
  navMenu1: [{
    name: "Shop",
    url: "#",
    subMenu: "shop-sub"
  }, {
    name: "Cleanses",
    url: "#"
  }, {
    name: "Build a Box",
    url: "#"
  }],

  navMenu2: [{
    name: "The Unconventional",
    url: "#"
  }, {
    name: "Who We Are",
    url: "#"
  }],

  subMenu: {
    "shop-sub": [{
      title: "Drinks",
      links: [{
        name: "All",
        url: "#"
      }, {
        name: "Juices",
        url: "#"
      }, {
        name: "Smoothies",
        url: "#"
      }, {
        name: "Cleanse Packs",
        url: "#"
      }, {
        name: "Shots",
        url: "#"
      }, {
        name: "Coffee",
        url: "#"
      }, {
        name: "Water",
        url: "#"
      }]
    }, {
      title: "Goods",
      links: [{
        name: "All",
        url: "#"
      }, {
        name: "Teas",
        url: "#"
      }, {
        name: "Coffees",
        url: "#"
      }, {
        name: "Vitals",
        url: "#"
      }, {
        name: "Snacks",
        url: "#"
      }, {
        name: "Coffee",
        url: "#"
      }, {
        name: "Water",
        url: "#"
      }]
    }, {
      title: "Boxes",
      links: [{
        name: "All",
        url: "#"
      }, {
        name: "Favorites Box",
        url: "#"
      }, {
        name: "Sweet Cream Box",
        url: "#"
      }, {
        name: "Detox Box",
        url: "#"
      }, {
        name: "Greens Box",
        url: "#"
      }]
    }, {
      title: "Cleanses",
      links: [{
        name: "All",
        url: "#"
      }, {
        name: "Soft Cleanse",
        url: "#"
      }, {
        name: "Semi Cleanse",
        url: "#"
      }, {
        name: "Hard Cleanse",
        url: "#"
      }]
    }]
  },

  navDrawer: {
    isOpen: false, //boolean as to whether its open or not
    hasHover: false,

    open: function open() {
      this.isOpen = true;
    },

    close: function close() {
      var self = this;
      setTimeout(function () {
        if (!self.hasHover) {
          self.isOpen = false;
        }
      }, 500);
    },

    handleMouseover: function handleMouseover() {
      this.hasHover = true;
    },

    handleMouseout: function handleMouseout() {
      this.hasHover = false;
    }
  }
};

var siteNav1 = new Vue({
  el: '#siteNav1',
  data: source
});

var siteNav2 = new Vue({
  el: '#siteNav2',
  data: source
});

var navDrawer = new Vue({
  el: '#navDrawer',
  data: source
});

module.exports = {
  siteNav1: siteNav1,
  siteNav2: siteNav2,
  navDrawer: navDrawer
};

},{}],3:[function(require,module,exports){
"use strict";

var productData = {
  products: [{
    name: "Juice 01",
    id: 1,
    cost: 5,
    url: "#",
    img: {
      thumb: "./img/product-thumbnails/product-thumb-01.jpg"
    }
  }, {
    name: "Juice 02",
    id: 2,
    cost: 7,
    url: "#",
    img: {
      thumb: "./img/product-thumbnails/product-thumb-02.jpg"
    }
  }, {
    name: "Juice 03",
    id: 3,
    cost: 5,
    url: "#",
    img: {
      thumb: "./img/product-thumbnails/product-thumb-03.jpg"
    }
  }, {
    name: "Juice 04",
    id: 4,
    cost: 7,
    url: "#",
    img: {
      thumb: "./img/product-thumbnails/product-thumb-04.jpg"
    }
  }]
};

var productPreview = new Vue({
  el: '#product-preview',
  data: productData
});

module.exports = {
  productPreview: productPreview
};

},{}],4:[function(require,module,exports){
'use strict';

var nav = require('./navigation-menu');

var shoppingCart = require('./shopping-cart');

var productPreview = require('./products.js');

var locationPreview = require('./locations.js');

},{"./locations.js":1,"./navigation-menu":2,"./products.js":3,"./shopping-cart":5}],5:[function(require,module,exports){
"use strict";

var shoppingCart = {
  items: [{
    name: "Juice 01",
    id: 1,
    cost: 5
  }, {
    name: "Juice 02",
    id: 2,
    cost: 7
  }]
};

var shoppingCartComponent = new Vue({
  el: '#shopping-cart',
  data: shoppingCart,
  computed: {
    totalItems: function totalItems() {
      return this.items.length;
    }
  }
});

module.exports = {
  shoppingCartComponent: shoppingCartComponent
};

},{}]},{},[4]);
