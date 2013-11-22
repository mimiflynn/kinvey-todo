/**
 * @class Todo.controller.Main
 * @extends Ext.app.Controller
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The main controller
 */
Ext.define('Todo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        views : [
            'Login',
            'Main'
        ],
        refs   : {
            tabs    : 'main',
            dataview: 'tasks #tasks-items'
        },
        control: {
            'login' : {
                submit : 'doLogin'
            },
            'tasks' : {
                addtask     : 'addTask',
                removetask  : 'removeTask',
                completetask: 'updateTask'
            }
        },
        appKey       : 'kid_PTjfzpOmKq',
        appSecret    : '4b753cfb1c9e4192bc4861d5d1244c1a'
    },

    init  : function(){
        var me = this,
            promise = Kinvey.init({
                appKey    : this.getAppKey(),
                appSecret : this.getAppSecret()
            });

        promise.then(function(activeUser) {
            if(activeUser){
                me.skipLogin();
            }else{
                me.showLogin();
            }
        }, function(error) {
            Ext.Msg.alert('Error','An error occurred while getting the connection to our servers. Make sure you have internet connection.');
        });

        Todo.MD5 = {hash:md5};
    },

    doLogin     : function(form,values){
        var me = this,
            promise = Kinvey.User.login(values, {
                success: function(user) {
                    me.loadTasks();
                },
                error  : function(response){
                    me.showErrorMessage(response);
                }
            });
    },

    loadTasks        : function(data){
        var me = this,
            tabs = this.getTabs(),
            login = tabs.down('login');

        tabs.remove(login,true);
        tabs.getTabBar().show();

        var promise = Kinvey.DataStore.find('tasks', null, {
            success: function(tasks) {
                me.showTasks({tasks:tasks});
            }
        });

        Todo.app.getController('Lists').loadMyLists();
    },

    addTask          : function(task){
        var me = this,
            promise = Kinvey.DataStore.save('tasks', task, {
                success   : function(response) {
                    me.getDataview().getStore().add(response);
                }
            });
    },

    removeTask         : function(task){
        var me = this,
            promise = Kinvey.DataStore.destroy('tasks', task.getId(), {
                success: function(response) {
                    console.log(arguments);
                    me.getDataview().getStore().remove(task);
                }
            });
    },

    updateTask       : function(record){
        var me = this,
            task = {
                _id         : record.get('_id'),
                title       : record.get('title'),
                completed   : !record.get('completed')
            };

        var promise = Kinvey.DataStore.save('tasks', task, {
            success   : function(response) {
                record.set('completed',task.completed);
            }
        });
    },

    showTasks        : function(data){
        this.getDataview().getStore().setData(data);
    },

    showErrorMessage : function(data){
        var msg;

        if(data){
            switch(data.name){
                case "IncompleteRequestBody" :
                        msg = "Username and Password are required.";
                        break;
                case "InvalidCredentials" :
                        msg = "Wrong credentials, please try again.";
                        break;
                default:
                        msg = "Unknow error, please try again later.";
            }
            
            Ext.Msg.alert('Error',msg);
        }
    },

    skipLogin : function(user){
        this.showLogin();
        this.loadTasks(user);
    },

    showLogin : function(){
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Todo.view.Main'));
    }
});