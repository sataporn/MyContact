/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 25/2/2557
 * Time: 9:19 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('MyContact.model.model_MainApp', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            { name:'field_name', type:'string' },
            { name:'field_nickname', type:'string' },
            { name:'img_name', type:'string' },
        //    { name:'field_age', type:'string' }
        ]
    }
});
