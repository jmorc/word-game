WordGame.Views.usersShow = Backbone.View.extend({
    initialize: function(options) {
        this.listenTo(this.collection, "sync", this.render);
    },

    template: JST['user/show'],

    render: function(){
        var users = this.collection.sortUsers();
        var content = this.template({
            users: users,
        });

        $('.leaderboard').html(content);
        return this;
    },
});