//= require ./HubContextMenu

Ext.define('Ps.view.app.Hub', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.ps-app-Hub',
	bodyStyle: 'background: transparent',
    cls: 'desktop',

  initComponent: function(){
    var me = this;  

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout      : true,      
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'ps-app-HubContextMenu'
      },
      sections: [

    // Section: Projections //

    ,{
    title: 'Customer Relationship Management',
      columns: 4,
      rows: 3,
      tiles: [
        {title: 'Cases', colspan: 2, rowspan: 2, cls: 'period_results', target: { xtype: 'ps-cases-Explorer', allowInlineEdit: true} }
     ] 
     }

   // Section: Next //




 ] 
 }); 

 this.callParent(); 
 },

 // handleNewEvents : function(data){
 //    var me = this;
 //    Ext.Array.each(data, function(event){
 //      var newEvent = Ext.create('Buildit.model.Event', event);
 //      // me.store.add(newEvent);
 //        Buildit.infoMsg(event.message)
 //      // Buildit.infoMsg(newEvent.get('message'))
 //    });
 //  }

 
 });