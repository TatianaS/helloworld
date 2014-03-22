Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.List',
        'Ext.data.Store'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: 
        	[
         	{
        	 	title: 'First Tab',
        	 	iconCls: 'home',
                layout: 'fit',
                items:[
                {
                	docked: 'top',
                    xtype: 'titlebar',
                    title: 'First Tab'
                },
                {
            		xtype: 'list',
                	width: null,
                	height: null,
                	store: {
                        fields: ['name'],
                        data: [
                            {name: 'Bicycle'},
                            {name: 'Car'},
                            {name: 'Motorbicycle'},
                            {name: 'Airplane'}
                        ]
                    },

                    itemTpl: '{name}'
            	}
                ]
        	},
            {
                title: 'Second Tab',
                iconCls: 'info',
                layout: 'fit',
                items: [
                {
                	docked: 'top',
                    xtype: 'titlebar',
                    title: 'Second Tab'
                },
                {
                	xtype: 'carousel',
                	width: null,
                	height: null,
                	items: [
                	        {
                	            html : 'Item 1',
                	            style: 'background-color: #5E99CC'
                	        },
                	        {
                	            html : 'Item 2',
                	            style: 'background-color: #759E60'
                	        },
                	        {
                	            html : 'Item 3'
                	        }
                	    ]
                }
                ]
                
            },
            {
                title: 'Third Tab',
                iconCls: 'favorites',
                layout: 'fit',
                items: [
                        {
                        	docked: 'top',
                            xtype: 'titlebar',
                            title: 'Third Tab'
                        },
                        {
                        	width: 100,
                        	height: 20,
                        	xtype: 'button',
                        	flex: 1,
                        	margin: 10,
                        	text: 'A button'
                        }                    
                ]
            }
        ]
    }
});
