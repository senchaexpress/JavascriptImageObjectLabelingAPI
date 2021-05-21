Ext.define('ImgLabels.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  align : 'stretch',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [
    {
      xtype: 'textfield',
      label: 'URL of Input Image: ',
      reference: 'imgUrl',
      value: 'https://images.pexels.com/photos/4198322/pexels-photo-4198322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      xtype: 'button',
      text: 'Label Image',
      handler: 'onLabelImage'
    },
    {
      xtype: 'image',
      reference: 'srcImage',
      width: 200,
      height: 200
    },
    {
      xtype: 'imgLabelsGrid',
      title: 'Image Labels',
      bind: { store: '{imgLabelsStore}'},     
      height:500,
      widht: 800

    }
  ],
  viewModel: {
    stores: {
      imgLabelsStore: {
        type: 'store',
        storeId: 'dStore',
        autoLoad: true,
        fields:[
        {
          name: 'caption',
          mapping: 'caption'
         },
        {
          name: 'captionConfidence',
          mapping: 'confidence'
        },
        {
          name: 'boundingBox',
          mapping: 'bounding_box'
        }],
        proxy: 
        {
          type: 'memory',
          data: null,
          reader: {
            rootProperty: 'captions'
            }
        }
      }
    }
  },
   defaults: {
      flex: 1,
      margin: 10
  }
})
