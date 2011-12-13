IONUX.Views.DataResourceView = Backbone.View.extend({

  el:$("#data-resources"),

  initialize: function(){
    _.bindAll(this, "render");
    this.collection.bind("reset", this.render);
  },
  
  render: function(){
    this.el.empty();
    _.each(this.collection.models, function(dataresource) {
        $(this.el).append(new IONUX.Views.DataResourceItemView({model:dataresource}).render().el);
    }, this);
    return this;
  },

})


IONUX.Views.DataResourceItemView = Backbone.View.extend({

  template: _.template($("#data-resource-item-tmpl").html()),

  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }

});
