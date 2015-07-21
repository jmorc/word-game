WordGame.Models.Word = Backbone.Model.extend({
  urlRoot: '/api/words',

  checkWin: function() {
      if ( this._scrambledWord === this.get('word') ) {
          this.score = 10;
      } else {
          this.score = 0;
      }
  },

  scramble: function() {
    var wordArr = this.get('word').split('');
    for (var i = wordArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
    }
    this._letterPosition = 0;
    this._scrambledWord = wordArr.join('');
  },

  updateScramble: function(letter) {
    if ( !this._scrambledWord ) this.scramble();
    if ( !this._letterPosition ) this._letterPosition = 0;
    var wordArr = this._scrambledWord.split('');
    for ( var i = this._letterPosition; i < wordArr.length; i++ ) {
        if ( wordArr[i] === letter ) {
            wordArr[i] = wordArr[this._letterPosition];
            wordArr[this._letterPosition] = letter;
            this._letterPosition += 1;
            break
        }
    }

    this._scrambledWord = wordArr.join('');
    if ( this._letterPosition === wordArr.length ) {
        this.checkWin();
        this.collection.playNextWord();
    }
  }
});
