//= require      buildit_desktop
//= require_tree ./ps_desktop/logic
//= require_tree ./ps_desktop/model
//= require_tree ./ps_desktop/store
//= require_tree ./ps_desktop/view
//= require_tree ./ps_desktop/controller



Buildit.desktopApplication({
	name:'Ps',

	autoCreateViewport:false,

	launch:function () {

		// LAUNCH INITIAL COMPONENT
		Ext.widget('buildit-Viewport', {
      items:[
      {
        xtype: 'buildit-Canvas',
        flex: 1, 
        id: 'canvas',
        title: 'buildit.io',
        subtitle: 'Enterprise Application',
        items: [
          {
            xtype: 'buildit-SecurityCheckpoint',
            id: 'login'
          }
          
        ]
      }
      ]
    });

		Ext.FocusManager.enable();
	}

});
