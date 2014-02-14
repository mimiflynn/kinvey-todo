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
        'Todo.view.Lists',
        'Ext.dataview.List'
    ],

    config: {
        height: '80%',
        width: '80%',
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        scrollable: true,
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'Edit Task',
                docked: 'top'
            },
            {
                xtype: 'container',
                html: 'This is where one can edit a task'
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