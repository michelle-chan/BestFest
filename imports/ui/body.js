import { Template } from 'meteor/templating';
 
import './body.html';
import {Artists} from '../api/artists.js';
 
var preferences = new Array();

Template.artists.helpers({
    artists() {
    return Artists.find({});
  }
});

Template.artists.events({
	'click .artistChip': function(event, template){
		event.preventDefault();
		var newArtist = Meteor.call('getArtist', this._id);
		console.log(this.name);
		preferences.push(newArtist);
		$(event.currentTarget).addClass("blue");
	}
});

var intervalScheduler = function() {
	var i;
	var smallest = preferences[0];
	for(i=0; i<preferences.length; i++) {
		if(preferences[i].end < smallest.end) {
			smallest = preferences[i];
		}
	} // select interval with earliest finishing time
	var index = preferences.indexOf(smallest.end);
	preferences.splice(index,1);
	// remove scheduled item
	var j;
	var intersecting = [];
	var count=0;
	for(j=0; j<preferences.length; j++) {
		if((preferences[i].start < smallest.start && preferences[i].end < smallest.end) || (preferences[i].start > smallest.start && preferences[i].end > smallest.end) || (preferences[i].start < smallest.start && preferences[i].end > smallest.end) || (preferences[i].start > smallest.start && preferences[i].end < smallest.end)) {
			intersecting.push(preferences[i]);
			count++;
		}
	} // find all intervals intersecting x
	var k;
	while(stack.length != 0) {
		var lindex = preferences.indexOf(intersecting[0])
		preferences.splice(lindex,1);
	}// remove intersecting intervals from list
}