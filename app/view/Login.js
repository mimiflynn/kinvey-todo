/**
 * @class Todo.view.Login
 * @extends Ext.form.Panel
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The login view
 */
Ext.define('Todo.view.Login', {
    extend: 'Ext.form.Panel',
    xtype : 'login',
    requires : [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password'
    ],

    config : {
        title : 'Login',
        items : [{
            xtype : 'fieldset',
            title : 'Please login',
            items : [{
                xtype : 'emailfield',
                name  : 'username',
                placeHolder : 'Username'
            },{
                xtype : 'passwordfield',
                name  : 'password',
                placeHolder : 'Password'
            }]
        },{
            xtype : 'button',
            text  : 'Submit',
            ui    : 'action',
            margin: 10,
            handler : function(button){
                var form = button.up('login');
                form.fireEvent('submit',form,form.getValues());
            }
        }]
    }
});