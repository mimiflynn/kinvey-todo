/**
 * @class Todo.store.Tasks
 * @extends Ext.data.Store
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The tasks store
 */
Ext.define('Todo.store.Tasks', {
    extend: 'Ext.data.Store',
    alias : 'store.tasks',
    requires : 'Todo.model.Task',
    config: {
        model : 'Todo.model.Task',
        proxy : {
            type    : 'memory',
            reader  : {
                type         : 'json',
                rootProperty : 'tasks'
            }
        }
    }
});