IONUX.Router = Backbone.Router.extend({

  routes: {
    "": "init",
    "data_resource_details/:data_resource_id": "data_resource_details"
  },

  init: function(){
    this.dataResourceList = new IONUX.Collections.DataResources();
    //console.log("Router.init - this.dataResourceList:", this.dataResourceList);
    this.dataResourceListView = new IONUX.Views.DataResourceView({collection:this.dataResourceList});
    this.dataResourceList.fetch();
  },

  data_resource_details: function(data_resource_id){
    var details = new IONUX.Models.DataResourceDetails({data_resource_id:data_resource_id});
    details.fetch({success:function(data){
        alert("got details for id="+data.get("data_resource_id"));}
    });
  }

});
