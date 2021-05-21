Ext.define('ImgLabels.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onLabelImage: function (button) {
  	//clear the source image
  	this.lookupReference('srcImage').setSrc("");
  	imgUrl = this.lookupReference('imgUrl').getValue();
    this.lookupReference('srcImage').setSrc(imgUrl);
    this.labelImage(imgUrl);
  },
  labelImage: async function(imgUrl) {
   try{
   	//replace with your API key 
  	deepai.setApiKey('42638949-3cf9-486b-a063-eaf5f4df0634');
	//call the DeepAI API
	//ref: https://deepai.org/machine-learning-model/densecap
    var resp = await deepai.callStandardApi("densecap", {
            image: imgUrl,
		});
    console.log(`Response:${JSON.stringify(resp)}`);
    var data = resp.output;
    //connect the response to the data store
    var store = Ext.data.StoreManager.lookup('dStore');
                                         
    store.getProxy().data = data;
    store.reload();
  }
  
  catch(err){alert(err);}
 }

})



