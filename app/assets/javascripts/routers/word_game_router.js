WordGame.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "newWords",
  },

  newWords: function () {
    WordGame.Collections.words.fetch();
    var newWordView = new WordGame.Views.wordsNew({
      collection: WordGame.Collections.words
    });

    this.$rootEl.html(newWordView.render().$el);
  },
});