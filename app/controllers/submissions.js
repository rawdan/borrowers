import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    sayHello: function(){
      alert('Hello')
    },
    toggleBody: function(){
      this.toggleProperty('isShowingBody')
    },
    submitAction: function(){
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },

  title: 'My Blog Submissions',
  body: 'This is the body of my blog submissions',
  authors: ["Robert", "Michele", "Bruce"],
  created: new Date(),
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'John Doe',
      comment: 'Nice Post!'
    },
    {
      name: 'Jeff Williams',
      comment: 'Good job!'
    }
  ]
});


