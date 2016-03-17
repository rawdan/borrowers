import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path:'about'});
  this.route('services', {path:'services'});
  this.route('contact', {path:'contact'});

  this.resource('posts', {path: '/posts'}, function(){
    this.route('new');
    this.route('post', {path:':post_id'});
  });
  this.route('events');

  this.route('submissions');
});

export default Router;
