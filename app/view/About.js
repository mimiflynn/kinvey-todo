/**
 * @class Todo.view.About
 * @extends Ext.Container
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The about page to describe credits and stuff
 */
Ext.define('Todo.view.About', {
    extend: 'Ext.Container',
    alias : 'widget.about',

    config: {
        title: 'About',
        iconCls: 'more',
        padding : 10,
        html : '<h1>About</h1><p>This application has been develop by ModusCreate to evaluate the Kinvey Service.</p>'
    }
});