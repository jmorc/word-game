WordGame.Collections.Words = Backbone.Collection.extend({
  model: WordGame.Models.Word,

  url: 'api/words/new',

  _currentWord: 0,

  playNextWord: function() {
      this._currentWord += 1;
  }

});

WordGame.Collections.words = new WordGame.Collections.Words();