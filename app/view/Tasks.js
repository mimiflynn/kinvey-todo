/**
 * @class Todo.view.Tasks
 * @extends Ext.Container
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * This view manages the tasks
 */
Ext.define('Todo.view.Tasks', {
    extend: 'Ext.Container',
    xtype : 'tasks',
    requires: [
        'Todo.store.Tasks',
        'Ext.dataview.DataView'
    ],

    config : {
        layout : {
            type : 'vbox'
        },
        title: 'Tasks',
        iconCls: 'bookmarks',

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'My Todo List'
        },{
            xtype   : 'dataview',
            flex    : 1,
            cls     : 'tasks-view',
            padding : '20 0',
            store   : {type:'tasks'},
            itemTpl : '<div class="item-remove"></div> <p <tpl if="completed == true">class="item-completed"</tpl>>{title}</p>',
            listeners : {
                itemtap : function(dataview,index,target,record,event){
                    var view = this.up('tasks');
                    if(event.getTarget('.item-remove')){
                        view.fireEvent('removetask',record);
                    }else{
                        view.fireEvent('completetask',record);
                    }
                }
            }
        },{
            xtype   : 'container',
            docked  : 'top',
            layout  : 'hbox',
            cls     : 'x-tabbar-dark',
            items : [{
                xtype : 'textfield',
                flex  : 1,
                margin: '10 5'
            },{
                xtype : 'button',
                text  : 'Add Task',
                width : 100,
                margin: '10 5',
                handler : function(btn){
                    var view = this.up('tasks'),
                        textfield = view.down('textfield');

                    if(textfield.getValue() !== ''){
                        view.fireEvent('addtask',{title:textfield.getValue(),completed:false});
                        textfield.reset();
                    }
                }
            }]
        }]
    }
});