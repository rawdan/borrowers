import Ember from 'ember';

/*
var cars = [
  {
    "id": 1,
    "make": "Ford",
    "model": "Transit",
    "year": "1995"
  },
  {
    "id": 2,
    "make": "Dacia",
    "model": "Duster",
    "year": "2015"
  },
  {
    "id": 3,
    "make": "BMW",
    "model": "M3",
    "year": "2005"
  }
]
*/
export default Ember.Route.extend({
  model: function(){
    return Ember.$.getJSON('cars.json').then(function(data){
      return data;
    });
  }
});
