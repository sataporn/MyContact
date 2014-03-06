/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 25/2/2557
 * Time: 9:24 น.
 * To change this template use File | Settings | File Templates.
 */
//d e a c
Ext.define('MyContact.store.store_MainApp',{
    extend:'Ext.data.Store',
    config:{
        model:'MyContact.model.model_MainApp',
        /*
         fields:[
         { name:'field_name', type:'string' },
         { name:'field_surname', type:'string' },
         { name:'field_age', type:'string' }
         ]
         * */
        data:[
            { field_name:'Sataporn', field_nickname:'Mix', img_name:'icon1.png' },
            { field_name:'Santi', field_nickname:'Tong', img_name:'icon2.png' },
            { field_name:'Pimpaka', field_nickname:'Nuch', img_name:'icon3.png' },
            { field_name:'Doraemon', field_nickname:'Do-mon', img_name:'icon4.png' },
            { field_name:'Nobita', field_nickname:'No-jung', img_name:'icon1.png' },
            { field_name:'SenchaBox', field_nickname:'Sencha', img_name:'icon2.png' }
        ]
    }
});
