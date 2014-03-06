/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 25/2/2557
 * Time: 9:11 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('MyContact.view.view_MainApp',{
    extend:'Ext.Container',
    alias:'widget.wg_view_MainApp',
    requires:['Ext.TitleBar','Ext.dataview.List'],
    config:{
//        html:'Main Page'
        //Must have with table for show on page.
        layout:'fit',
        items:[
            {
                xtype:'titlebar',
                title:'MainApp',
                //กำหนดแนวตั้งให้กับ object.
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'About Us',
                        itemId:'btn_AboutUs',
                        //กำหนดแนวนอนให้กับ object.
                        align:'right'
                    }
                ]
            },{
                xtype:'list',
                store:'store_MainApp',
                itemTpl:'<table><tr><td width="60"><img src="resources/images/{img_name}"></td><td>Name : {field_name}<br>Nickname: {field_nickname}</td></tr></table>',
                onItemDisclosure:true,
                itemId:'list_MainApp'
            }
        ]
    }
});
