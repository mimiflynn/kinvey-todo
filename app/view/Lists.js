/**
 * @class Todo.view.Lists
 * @extends Ext.Container
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * This component shows the available lists of tasks
 */
Ext.define('Todo.view.Lists', {
    extend  : 'Ext.Container',
    xtype   : 'mylists',
    requires: [
        'Todo.store.Lists',
        'Ext.dataview.List'
    ],

    config  : {
        hideAnimation : {type :"slide",direction : "right", duration : 500},
        showAnimation : {type :"slide",direction : "left", duration : 500},
        items : [{
            xtype : 'toolbar',
            docked: 'top',
            cls   : 'todo-lists-title',
            tpl   : [
                '<img src="http://www.gravatar.com/avatar/{avatar}?s=30">',
                '<h1>My Lists</h1>'
            ].join('')
        },{
            xtype   : 'component',
            html    : 'All Tasks',
            padding : '10 10 0 10'
        },{
            xtype   : 'list',
            //hidden  : true,
            cls     : 'todo-list-view',
            padding : '10 0',
            store   : {type:'lists'},
            itemTpl : '<div class="item-remove"></div> <p>{title}</p>',
        },{
            xtype   : 'container',
            padding : '0 10 0 10',
            items   : [{
                xtype   : 'component',
                html    : 'Add List...',
                padding : '0 0 10 0'
            },{
                xtype   : 'textfield',
                name    : 'title',
                margins : '0 10 0 10',
                hidden  : true
            }]
        }]
    }
});