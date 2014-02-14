/**
 * @class Todo.view.EditListSelect
 * @extends Ext.dataview.component.DataItem
 * @author Mimi Flynn <mimi@moduscreate.com>
 *
 * Modal panel to edit a task
 */
Ext.define('Todo.view.EditListSelect', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'editListSelect',
    config: {
        cls: 'edit-list-select',
        layout: {
            type: 'hbox',
            align: 'center'
        },
        dataMap: {
            getTitle: {
                setHTML: 'title'
            }
        },
        title: {
            setHtml: 'title'
        }
    },
    applyTitle: function(config) {
        return Ext.factory(config, Ext.Component, this.getTitle());
    },
    updateTitle: function(newItem, oldItem) {
        if (newItem) {
            this.add(newItem);
        }

        if (oldItem) {
            this.remove(oldItem);
        }
    }
});