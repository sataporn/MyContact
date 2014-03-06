/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 24/2/2557
 * Time: 15:24 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('MyContact.controller.controller_MobileCall',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
//            ref_wg_view_MainApp_btn_Add:'wg_view_MainApp #btn_Add'
            ref_wg_view_MainApp:'wg_view_MainApp',
            ref_wg_view_MobileCall_btn_Back:'wg_view_MobileCall #btn_Back',
            ref_wg_view_MobileCall_btn_Call:'wg_view_MobileCall #btn_Call'
        },
        control:{
//            ref_wg_view_MainApp_btn_Add:{ tap:'FNC_btn_Add' }
            ref_wg_view_MobileCall_btn_Back:{ tap:'FNC_btn_Back' },
            ref_wg_view_MobileCall_btn_Call:{ tap:'FNC_btn_Call' }
        }
    },
    launch:function(){
        console.log('Controller --> mobilecall start...');
    },
    FNC_btn_Back:function(){
//        console.log('Add tap...');
        console.log('mobile: back tap...');
        //Define page referer as variable.
        var _view = this.getRef_wg_view_MainApp();
        //var _view = this.getRefs_wg_view_AboutUs();

        //EVa
        Ext.Viewport.animateActiveItem(_view,{ type:'slide', direction:'right' });
        //No wipe and cube.
//        Ext.Viewport.animateActiveItem(_view,{ type:'wipe' });
    },
    FNC_btn_Call:function(){
//        console.log('Add tap...');
        console.log('mobile: call tap...');
        //Define page referer as variable.
        //Debug function.
//        console.log(record.data);
        Ext.Msg.alert('0801234567');
    }
});
