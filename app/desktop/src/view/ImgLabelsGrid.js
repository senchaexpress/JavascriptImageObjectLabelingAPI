Ext.define('ImgLabels.view.ImgLabelsGrid', {
extend: 'Ext.grid.Grid',
xtype: 'imgLabelsGrid',
columns: [
 {
    type: 'column',
    text: 'Caption',
    dataIndex: 'caption',
    width: 600
 }, 
 {
    text: 'Confidence',
    dataIndex: 'captionConfidence',
    width: 200
 },
 {
 	text: 'Bounding Box',
 	dataIndex: 'boundingBox',
 	width: 200
 }]
});