/**
 * @class Todo.controller.Lists
 * @extends Ext.app.Controller
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The lists controller
 */
Ext.define('Todo.controller.Lists', {
    extend: 'Ext.app.Controller',

    config: {
        refs   : {
            lists   : 'tasks mylists',
            toolbar : 'tasks mylists toolbar',
            myLists : 'tasks mylists list'
        },
        control: {
            'tasks titlebar #toggle' : {
                tap : 'toggleLists'
            }
        }
    },

    toggleLists : function(){
        var list = this.getLists();

        list.setHidden(!list.isHidden());
    },

    loadMyLists : function(){
        var me = this;

        var user = Kinvey.getActiveUser(),
            promise = Kinvey.DataStore.find('lists', null, {
                success: function(response) {
                    me.getMyLists().getStore().setData({lists:response});
                }
            });

        me.getToolbar().setData({
            avatar : Todo.MD5.hash(user.email)
        });
    }
});