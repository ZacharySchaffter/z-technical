//Navigation source data
let source = {
  navMenu1 : [
    {
      name: "Shop",
      url: "#",
      subMenu : "shop-sub"
    },
    {
      name: "Cleanses",
      url: "#",
    },
    {
      name: "Build a Box",
      url: "#",
    }
  ],

  navMenu2 : [
    {
      name: "The Unconventional",
      url: "#",
    },
    {
      name: "Who We Are",
      url: "#",
    }
  ],

  subMenu : {
    "shop-sub": [
      {
        title: "Drinks",
        links : [
          {
            name: "All",
            url : "#"
          },
          {
            name: "Juices",
            url : "#"
          },
          {
            name: "Smoothies",
            url : "#"
          },
          {
            name: "Cleanse Packs",
            url : "#"
          },
          {
            name: "Shots",
            url : "#"
          },
          {
            name: "Coffee",
            url : "#"
          },
          {
            name: "Water",
            url : "#"
          }
        ]
      },
      {
        title: "Goods",
        links : [
          {
            name: "All",
            url : "#"
          },
          {
            name: "Teas",
            url : "#"
          },
          {
            name: "Coffees",
            url : "#"
          },
          {
            name: "Vitals",
            url : "#"
          },
          {
            name: "Snacks",
            url : "#"
          },
          {
            name: "Coffee",
            url : "#"
          },
          {
            name: "Water",
            url : "#"
          }
        ]
      },
      {
        title: "Boxes",
        links : [
          {
            name: "All",
            url : "#"
          },
          {
            name: "Favorites Box",
            url : "#"
          },
          {
            name: "Sweet Cream Box",
            url : "#"
          },
          {
            name: "Detox Box",
            url : "#"
          },
          {
            name: "Greens Box",
            url : "#"
          }
        ]
      },
      {
        title: "Cleanses",
        links : [
          {
            name: "All",
            url : "#"
          },
          {
            name: "Soft Cleanse",
            url : "#"
          },
          {
            name: "Semi Cleanse",
            url : "#"
          },
          {
            name: "Hard Cleanse",
            url : "#"
          }
        ]
      }
    ]
  },
  

  navDrawer : {
    isOpen : false, //boolean as to whether its open or not
    hasHover : false,

    open : function(){
      this.isOpen = true;
    },
    
    close : function(){
      let self = this;
      setTimeout(function(){
        if (!self.hasHover) {
          self.isOpen = false;
        }
      }, 500);
    },

    handleMouseover: function(){
      this.hasHover = true;
    },

    handleMouseout: function(){
      this.hasHover = false;
    }
  }
};

let siteNav1 = new Vue({
  el : '#siteNav1',
  data : source,
});

let siteNav2 = new Vue({
  el : '#siteNav2',
  data : source,
});

let navDrawer = new Vue({
  el : '#navDrawer',
  data : source,
})



module.exports = {
  siteNav1,
  siteNav2,
  navDrawer
};