WordGame.Views.usersNew = Backbone.View.extend({
    template: JST['user/new'],

    render: function(){
        var content = this.template();
        $('#new-user').html(content);
        return this;
    },
});