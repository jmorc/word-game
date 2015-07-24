WordGame.Views.wordsNew = Backbone.View.extend({
    template: JST['word/show'],

    initialize: function () {
        this.listenTo(this.collection, "sync", this.scrambleCollection);
        var currentView = this;
        $(window).bind('keypress', function(e) {
            if ( currentView._active ) {
                var wordIdx = currentView.collection._currentWord;
                currentView.collection
                           .models[ wordIdx ]
                           .updateScramble(String.fromCharCode(e.charCode));
                currentView.render();
            }
        });
        this.startTimer();
    },

    events: {
        'click .restart' : 'restart',
        'submit form.newUserForm' : 'submitNewUser'
    },

    _active: true,

    gameOver: function() {
        this._active = false;
        var timer = $('#timer-container');
        timer.text('Game Over!');
        var playAgain = $('<button class="restart btn">Play Again</button>');
        timer.append(playAgain);

        if ( this.sumScore() > WordGame.Collections.users.fifthScore() ) {
            var newUserView = new WordGame.Views.usersNew();
            newUserView.render();
        }
    },

    submitNewUser: function(e){
        e.preventDefault();
        var params = $(e.currentTarget).serializeJSON();

        var newUser = new WordGame.Models.User(params['user']);
        newUser.set('score', this.sumScore());
        newUser.save([], {
            success: function(response){
              $('.newUserForm').remove();
              WordGame.Collections.users.fetch();

            }
        });
    },

    scrambleCollection: function() {
        this.collection.models.forEach(function(word){
            word.scramble();
        });

        this.render({ flip: true });
    },

    startTimer: function(){
        this.time = 60;
        $('#timer').text(this.time);
        this.timer = setInterval(function(){
            this.time -= 1;
            if ( this.time >= 0 ) {
                $('#timer').text(this.time);
            } else {
                this.gameOver();
                clearInterval(this.timer);
            }
        }.bind(this), 1000);
    },

    sumScore: function() {
        var words = this.collection.models;
        var score = 0;
        for ( var i = 0; i < words.length; i++ ) {
            if ( words[i].score ) score += words[i].score;
        }
        return score;
    },

    restart: function(){
        location.reload();
    },

    render: function( options ) {
        options = options || {};
        var wordIdx = this.collection._currentWord;
        var content = this.template({
            words: this.collection.models,
            wordIdx: wordIdx,
            flip: options.flip
        });

        this.$el.html(content);

        if ( options.flip ) {
            setTimeout(function(){
                $(".flip-container").toggleClass("flip");
            }, 500);
        }

        WordGame.Collections.users.fetch();
        var usersShowView = new WordGame.Views.usersShow({
            collection: WordGame.Collections.users
        });
        usersShowView.render();
        return this;
    },
});