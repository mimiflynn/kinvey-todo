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
        refs: {
            lists: 'tasks mylists',
            toolbar: 'tasks mylists toolbar',
            myLists: 'tasks mylists #mylist',
            tasks: 'tasks #tasks-items'
        },
        control: {
            'tasks titlebar #toggle': {
                tap: 'toggleLists'
            },
            myLists: {
                itemtap: 'filterTasks'
            }
        }
    },

    toggleLists: function () {
        var list = this.getLists();

        list.setHidden(!list.isHidden());
    },

    loadMyLists: function () {
        var me = this;

        var user = Kinvey.getActiveUser(),
            promise = Kinvey.DataStore.find('lists', null, {
                success: function (response) {
                    //response.unshift({title:'All Tasks'});
                    me.getMyLists().getStore().setData(response);
                }
            });

        me.getToolbar().setData({
            avatar: Todo.MD5.hash(user.email)
        });
    },

    filterTasks: function (item, index, target, record, e, eOpts) {
        var tasks = this.getTasks().getStore(),
            listId = record.getData()._id;

        tasks.filter('listId', listId);
    }
});