var first = ['Freedom', 'Eagle', 'Liberty', 'Ultimate', 'Weekend', 'Dream', 'Travel', 
'Boundless', 'Mystic', 'Discovery', 'Country', 'Pleasure', 'Blue Sky', 'Road', 
'Path', 'Lazy', 'Wind', 'American', "N'Tense", 'Celebrity', "Rage'n", 'Wilderness', 
'Desert', 'Safari', 'Mountain', 'Sun', 'Super', 'Comfort', 'Adventure', 'Globe', 
'Alpine', 'Trail', 'Fun', 'Vision', 'Land'];

var second = ['Chariot', 'Ambassador', 'Intruder', 'Wanderer', 'Desperado', 
'Explorer', 'Elite', 'Trekker', 'Rendezvous', 'Ranger', 'Dreamer', 'Seeker', 
'Commander', 'Nomad', 'Express', 'Drifter', 'Baron', 'Stormer', 'Cruiser', 
'Coach', 'Bullet', 'Warrior', 'Deluxe', 'Mountaineer', 'Patriot', 'Rover', 
'Companion', 'Tracker', 'Zephyr', 'Squire', 'Marauder', 'Raider', 'Leprechaun', 
'Angler', 'Hideout', 'Scamp', 'Prowler', 'Wildcat', 'Challenger', 'Conquest', 
'Avenger', 'Rampage', 'Scout', 'Hunter', 'Bounder', "Cruis'r"];

var imgs = ["rvs/rv1.png", "rvs/rv10.png", "rvs/rv11.png", "rvs/rv12.png", "rvs/rv13.png", "rvs/rv14.png", "rvs/rv2.png", "rvs/rv3.png", "rvs/rv4.png", "rvs/rv5.png", "rvs/rv6.png", "rvs/rv7.png", "rvs/rv8.png", "rvs/rv9.png"];


$().ready(function() {
   $("#another").click(function(evt) {
      var idx1 = Math.floor(Math.random() * first.length);
      var idx2 = Math.floor(Math.random() * second.length);
      var idx3 = Math.floor(Math.random() * imgs.length);

      var front = first[idx1];
      var back = second[idx2];
      var img = imgs[idx3];
      var whole = front + " " + back;
      $("#rv-img").attr("src", img);
      $("#rv_name").text(whole)
   })
   $("#another").trigger("click");
});