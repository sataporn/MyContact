/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 25/2/2557
 * Time: 9:50 น.
 * To change this template use File | Settings | File Templates.
 */
// d  e a c
Ext.define('MyContact.controller.controller_MainApp', {
    extend:'Ext.app.Controller',
    requires:['Ext.MessageBox'],
    config:{
        refs:{
            ref_wg_view_MainApp_list_MainApp:'wg_view_MainApp #list_MainApp',
            ref_wg_view_MainApp_btn_AboutUs:'wg_view_MainApp #btn_AboutUs',
            ref_wg_view_AboutUs:'wg_view_AboutUs',
            ref_wg_view_MobileCall:'wg_view_MobileCall'
        },
        control:{
            ref_wg_view_MainApp_btn_AboutUs:{
                //Event for single button.
                tap:'FNC_btn_AboutUs'
            },
            ref_wg_view_MainApp_list_MainApp:{
                //Event for table list button.
                itemtap:'FNC_list_Detail'
            }
        }

    },
    launch:function(){
        console.log('Controller --> mainapp start...');
    },
    FNC_btn_AboutUs:function(){
        //Debug function.
        console.log('AboutUs tap...');
        var _view = this.getRef_wg_view_AboutUs();
        //Debug _view variable.
//        console.log(_view);
        //var _view = this.getRefs_wg_view_AboutUs();
//        Ext.Viewport.animateActiveItem(_view,{ type:'slide', direction:'left' });
//        Ext.Viewport.animateActiveItem(_view,{ type:'fade', direction:'left' });
//        Ext.Viewport.animateActiveItem(_view,{ type:'pop' });
        Ext.Viewport.animateActiveItem(_view,{ type:'slide', direction:'left' });
    },
    FNC_list_Detail:function(){
        //Debug function.
  //      console.log(record.data);
        //Ext.Msg.alert(record.data.field_name+' '+record.data.field_surname);
        console.log('Mobile tap...');
        var _view = this.getRef_wg_view_MobileCall();
        //Debug _view variable.
 //       console.log(_view);
        //var _view = this.getRefs_wg_view_AboutUs();
//        Ext.Viewport.animateActiveItem(_view,{ type:'slide', direction:'left' });
//        Ext.Viewport.animateActiveItem(_view,{ type:'fade', direction:'left' });
//        Ext.Viewport.animateActiveItem(_view,{ type:'pop' });
        Ext.Viewport.animateActiveItem(_view,{ type:'slide', direction:'left' });
    }
});
