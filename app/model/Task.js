Ext.define('Todo.model.Task', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: '_id',
        fields: [
            { name: '_id', type: 'string' },
            { name: '_kmd', type: 'auto' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'completed', type: 'boolean' },
            { name: 'listId', type: 'string' }
        ]
    }
});