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
	var index;
	for(index=0; index<preferences.length; index++) {
		if()
	}
}