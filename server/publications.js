Meteor.publish("squeeders", function() {
   return Squeeders.find({});
});
