WordGame.Collections.Users = Backbone.Collection.extend({
  model: WordGame.Models.User,

  url: 'api/users',

  sortUsers: function(){
    var users = this.models;
    users.sort(function(a, b) {
        return b.get('score') - a.get('score');
    });

    return users;
  },

  fifthScore: function(){
      var users = this.sortUsers();
      return (users[4] && users[4].score) ? users[4].score : 0;
  }

});

WordGame.Collections.users = new WordGame.Collections.Users();