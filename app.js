//app na luk EVa
Ext.application({
    name:'MyContact',
    views:['view_MainApp','view_AboutUs','view_MobileCall'],
    models:['model_MainApp'],
    stores:['store_MainApp'],
    controllers:['controller_MainApp','controller_AboutUs','controller_MobileCall'],
    launch:function(){
        //Log for debug.
        console.log('app start...');
        //define page as variable.
        var page_MainApp = {
            xtype: 'wg_view_MainApp'
        };
        var page_AboutUs = {
            xtype: 'wg_view_AboutUs'
        };
        var page_MobileCall = {
            xtype: 'wg_view_MobileCall'
        };
        //port to screen.
        Ext.Viewport.add([page_MainApp,page_AboutUs,page_MobileCall]);
        //Define store as variable.
        var _store = Ext.getStore('store_MainApp');
        //Debug for store.
        console.log(_store.data.all);
    }
});