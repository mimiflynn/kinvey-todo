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

    config: {
        height: 300,
        width: 300,
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Edit Task'
            },
            {
                xtype: 'container',
                html: 'this is the inside of the edit panel'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Done',
                        action: 'saveItem'
                    }
                ]
            }
        ]
    }
});