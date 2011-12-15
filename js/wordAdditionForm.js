/**
 * Bu sınıf kelime dağarcığına yeni kelimeler eklemek için
 * kullanılan form için yazılmıştır. 
 * */
wordAdditionForm={};

wordAdditionForm.bind=function(){
	
	$('.wordAdditionForm').unbind('submit')
	.bind('submit',function(e){
		wordAdditionForm.add(this);
		e.preventDefault();
	});


}

wordAdditionForm.add=function(f){
	var tag=$('input[name="tag"]',f).val();
	var word=$('input[name="word"]',f).val();
	var ajax=new simpleAjax();
	
	ajax.send(
		'vocabulary?_ajax=vocabulary/addWord&word='
		+word+'&tag='+tag,
		null,
		{onSuccess:function(rsp){
			/**
			 * is there a callback function, call it.
			 * */
			if(wordAdditionForm.onAdd)
				wordAdditionForm.onAdd(rsp,f)
		}}
	);
}
