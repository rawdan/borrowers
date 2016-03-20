import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path:'about'});
  this.route('services', {path:'services'});
  this.route('contact', {path:'contact'});

  this.route('posts', {path: '/posts', resetNamespace: true}, function(){
    this.route('new');
    this.route('post', {path:':post_id'});
  });
  this.route('events');

  this.route('submissions', {path:'/submissions'});
  this.route('cars');
  this.route('users');
  this.route('orgs');
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: 'id'}, function() {
      this.route('contributors');
      this.route('issues');
    });
  });
});

export default Router;
