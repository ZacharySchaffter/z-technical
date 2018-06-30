let productData = {
  products : [
    {
      name: "Juice 01",
      id : 1,
      cost: 5,
      url: "#",
      img : {
        thumb: "./img/product-thumbnails/product-thumb-01.jpg"
      }
    },
    {
      name: "Juice 02",
      id: 2,
      cost: 7,
      url: "#",
      img : {
        thumb: "./img/product-thumbnails/product-thumb-02.jpg"
      }
    },
    {
      name: "Juice 03",
      id : 3,
      cost: 5,
      url: "#",
      img : {
        thumb: "./img/product-thumbnails/product-thumb-03.jpg"
      }
    },
    {
      name: "Juice 04",
      id: 4,
      cost: 7,
      url: "#",
      img : {
        thumb: "./img/product-thumbnails/product-thumb-04.jpg"
      }
    }
  ]
};

let productPreview = new Vue({
  el : '#product-preview',
  data : productData
});



module.exports = {
  productPreview
};