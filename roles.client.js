import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

if(Meteor.isClient) {
  Tracker.autorun(function () {
    Meteor.subscribe("_roles");
  });
}
