/**
 * @class Todo.store.Lists
 * @extends Ext.data.Store
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The lists store
 */
Ext.define('Todo.store.Lists', {
    extend: 'Ext.data.Store',
    alias : 'store.lists',
    requires : 'Todo.model.List',
    config: {
        model : 'Todo.model.List',
        proxy : {
            type    : 'memory',
            reader  : {
                type    : 'json'
            }
        }
    }
});