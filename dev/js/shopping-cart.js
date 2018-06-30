let shoppingCart = {
  items : [
    {
      name: "Juice 01",
      id : 1,
      cost: 5
    },
    {
      name: "Juice 02",
      id: 2,
      cost: 7
    }
  ]
};

let shoppingCartComponent = new Vue({
  el : '#shopping-cart',
  data : shoppingCart,
  computed: {
    totalItems : function(){
      return this.items.length;
    }
  }
});



module.exports = {
  shoppingCartComponent
};