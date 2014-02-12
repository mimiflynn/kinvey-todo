/**
 * @class Todo.view.Lists
 * @extends Ext.Container
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * This component shows the available lists of tasks
 */
Ext.define('Todo.view.Lists', {
    extend: 'Ext.Container',
    xtype: 'mylists',
    requires: [
        'Todo.store.Lists',
        'Ext.dataview.List'
    ],

    config: {
        hideAnimation: {type: "slide", direction: "right", duration: 500},
        showAnimation: {type: "slide", direction: "left", duration: 500},
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                cls: 'todo-lists-title',
                tpl: [
                    '<h1>',
                    '<img src="http://www.gravatar.com/avatar/{avatar}?s=30">',
                    'My Lists',
                    '</h1>'
                ].join('\n')
            },
            {
                xtype: 'list',
                itemId: 'mylist',
                cls: 'todo-list-view',
                store: {type: 'lists'},
                itemTpl: '<div class="item-remove"></div> <p>{title}</p>'
            }
        ]
    }
});