let locationData = {
  locations : [
    {
      name: "Platform",
      address: "123 fakestreet",
      storeHours : [
        "Monday-Sunday - 7am - 8pm"
      ],
      img : {
        thumb: "./img/location-thumbnails/location-thumb_platform.jpg"
      },
      url : "#"
    },
    {
      name: "DTLA",
      address: "123 fakestreet",
      storeHours : [
        "Monday - Sunday - 7am - 8pm"
      ],
      img : {
        thumb: "./img/location-thumbnails/location-thumb_dtla.jpg"
      },
      url : "#"
    },
    {
      name: "Pasadena",
      address: "123 fakestreet",
      storeHours : [
        "Monday - Saturday - 7:30am - 7pm",
        "Sunday - 8am - 6pm"
      ],
      img : {
        thumb: "./img/location-thumbnails/location-thumb_platform.jpg"
      },
      url : "#"
    },
    {
      name: "Venice",
      address: "123 fakestreet",
      storeHours : [
        "Monday-Sunday - 7am - 8pm"
      ],
      img : {
        thumb: "./img/location-thumbnails/location-thumb_venice.jpg"
      },
      url : "#"
    }
  ]
};

let locationPreview = new Vue({
  el : '#locations',
  data : locationData
});



module.exports = {
  locationPreview
};