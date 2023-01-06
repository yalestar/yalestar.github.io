var first = ["Summit", "Bear", "Fox", "Raccoon", "Palomino", "Eagle", "Tamarac", "Aspen", "Orchard", "Sandstone", "Willow", "Marmot", "Wolf", "Elk", "Sunset", "Sundance", "Chardonnay", "Lake", "Redstone", "Coyote", "Buffalo", "Falcon", "Heritage"];

var second = ["Creek", "Run", "Hollow", "Ranch", "Grove", "Meadow", "Park", "Reserve", "Prairie", "Promenade", "Woods", "Preserve", "Glen", "Estates", "Village", "Terrace", "Homestead", "Acres", "Ridge", "Run", "Village", "Greens", "Heights"];

var third = ["Prairie", "at Fox Hollow", "at Wolf Hollow", "at The Greens", "at RidgeGate", "Estates", "at SkyRidge"];

var images = ["subd/subd8.jpg", "subd/subd7.jpg", "subd/subd5.jpg", "subd/subd6.jpg", "subd/subd4.jpg", "subd/subd3.jpg", "subd/subd2.jpg", "subd/subd1.jpg", "subd/subd8.jpg", "subd/subd7.jpg", "subd/subd6.jpg", "subd/subd5.jpg", "subd/subd4.jpg", "subd/subd3.jpg", "subd/subd2.jpg", "subd/subd1.jpg", "subd/subd1.jpg", "subd/subd2.jpg", "subd/subd3.jpg", "subd/subd4.jpg", "subd/subd8.jpg", "subd/subd5.jpg", "subd/subd8.jpg"];

$().ready(function() {
   $("#another").click(function(evt) {
      var firstIndex = Math.floor(Math.random() * first.length);
      var secondIndex = Math.floor(Math.random() * second.length);
      var back
      if (Math.random() < 0.5) {
         thirdIndex = Math.floor(Math.random() * third.length);
         var back = third[thirdIndex];
      } else {
         back = "";
      }

      var imgIndex = Math.floor(Math.random() * images.length);

      var front = first[firstIndex];
      var middle = second[secondIndex];
      var whole = front + " " + middle + " " + back;
      var img = images[imgIndex];
      $("#subdivision").text(whole);
      $("#subd-img").attr("src", img);
   })
   $("#another").trigger("click");
});