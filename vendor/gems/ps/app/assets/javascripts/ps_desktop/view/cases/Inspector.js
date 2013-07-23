Ext.define('Ps.view.cases.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.ps-cases-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'case_id',
        value:      this.record.get('case_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'ps-cases-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Case',
      subtitle:  this.record.get('case_id')
    });
    // TITLES (End)

    this.callParent();
  }
});