/**
 * @class Todo.view.Edit
 * @extends Ext.Panel
 * @author Mimi Flynn <mimi@moduscreate.com>
 *
 * Modal panel to edit a task
 */
Ext.define('Todo.view.Edit', {
    extend: 'Ext.Panel',
    xtype: 'edit',
    requires: [
        'Todo.store.Lists',
        'Todo.view.Lists',
        'Ext.dataview.List'
    ],

    config: {
        height: '80%',
        width: '80%',
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'Edit Task',
                docked: 'top'
            },
            {
                xtype: 'list',
                itemId: 'taskLists',
                cls: 'todo-task-lists',
/*
                data: [
                    { title: 'Kickstart', _id: '52fa7cbb4971b80c3905a930' },
                    { title: 'Set Up', _id: '52fa8a694609ba980405bbdb' }
                ],
*/
                store: 'store.lists',
                itemTpl: '<p>{title}</p>'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [{
                    text: 'Save',
                    ui: 'confirm',
                    action: 'updateItem'
                },{
                    text: 'Cancel',
                    ui: 'decline',
                    action: 'closeModal'
                }]
            }
        ]
    }
});