Ext.define('Todo.model.List', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty : '_id',
        fields: [
            { name: '_id', type: 'string' },
            { name: '_kmd', type: 'auto' },
            { name: 'title', type: 'string' }
        ]
    }
});