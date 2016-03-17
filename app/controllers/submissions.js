import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'My Blog Submissions',
  body: 'This is the body of my blog submissions',
  authors: ["Robert", "Michele", "Bruce"],
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


