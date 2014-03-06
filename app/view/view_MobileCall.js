/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 25/2/2557
 * Time: 9:11 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('MyContact.view.view_MobileCall',{
    extend:'Ext.Container',
    alias:'widget.wg_view_MobileCall',
    requires:['Ext.TitleBar','Ext.dataview.List'],
    config:{
//        html:'Main Page'
        //Must have with table for show on page.
        layout:'fit',
        items:[
            {
                xtype:'titlebar',
                title:'Mobile No.',
                //กำหนดแนวตั้งให้กับ object.
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        itemId:'btn_Back',
                        ui:'back',
                        //กำหนดแนวนอนให้กับ object.
                        align:'left'
                    }
                ]
            },{
                xtype:'image',
                src:'resources/images/tel.png'
         //       docked:'middle'
            },{
                xtype:'button',
                text:'Call',
                itemId:'btn_Call',
                ui:'confirm',
                //width:'100px',
                //centered:true,
                //กำหนดแนวนอนให้กับ object.
                iconAlign:'center',
                docked:'bottom'
            }
        ]
    }
});
