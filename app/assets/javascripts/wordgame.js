window.WordGame = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
      new WordGame.Routers.Router({
          $rootEl: $("#main")
      });
      Backbone.history.start();
  }
};

$(document).ready(function(){
  WordGame.initialize();
});
