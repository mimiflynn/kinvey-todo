Ext.define('Todo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype : 'main',
    requires: [
        'Ext.TitleBar',
        'Todo.view.Tasks',
        'Todo.view.Login',
        'Todo.view.About'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar : {
            hidden : true
        },

        items: [{
            xtype : 'login',
            scrollable : null
        },{
            xtype : 'tasks'
        },{
            xtype : 'about'
        }]
    }
});