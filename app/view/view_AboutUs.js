/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 24/2/2557
 * Time: 13:48 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('MyContact.view.view_AboutUs',{
    extend:'Ext.Container',
    alias:'widget.wg_view_AboutUs',
    //requires คือ การเรียนใช้ครั้งเดียวแต่มีหลาย คลาสได้
    requires:['Ext.TitleBar'],
    config:{
        items:[
            {
                xtype:'titlebar',
                title:'About Us',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        ui:'back',
                        itemId:'btn_Back'
                    }
                ]
            }
        ],
        html:'Team: HiThree inculde:Santi,Sataporn,Pimpaka'
    }
});