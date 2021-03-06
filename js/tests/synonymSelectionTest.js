$(document).ready(function(){

	var 
		test=new Test('synonymSelectionTest'),
		// To show the tooltip once
		isToolTipShown=false;

	test.bindItems=function(){
		$('.testPageOl li span.synonyms span').click(function(){
			// If the question answered
			if($(this).parent().parent().parent().
				find('input[type="submit"]').attr('disabled'))
					return;
			// If not selected
			if(!$(this).hasClass('selected'))
				$(this).addClass('selected');
			// If selected
			else
				$(this).removeClass('selected');
			

		});

		$('.testPageOl li input[type=submit]').click(function(){
		
			var selectedItems=$(this).parent().find('span.synonyms span.selected');
			
			if($(selectedItems).length>0){

				// Disable the input that is operated for
				$(this).attr('disabled',true);
				
				var selected2=new Array();

				$(selectedItems).each(function(){
					selected2.push($(this).html());
				});

				var params={
					"wordId":$(this).parent().find('.wordId').val(),
					"selected":selected2
				};
				
				test.checkAnswers(params);

			}

			return false;
		
		});

	}

	test.afterChecked=function(rsp){
		if(rsp!=null){

			var $resultSpan=$(
				'input[class="wordId"][value="'+rsp.wordId+'"]'  
			).parent().find('span.synonyms');

		
			// If correct
			if(rsp.result){
				$resultSpan.find('span.selected').addClass('correct');			
			}
			else{
				$resultSpan.find('span').each(function(){
					var
						$t=$(this),
						val=$t.html();

					// If the current in the correction
					if($.inArray(val,rsp.corrections)!=-1){
						// If not selected
						if(!$t.hasClass('selected'))
							$t.addClass('unselectedCorrect');	
						else
							$t.addClass('correct');	
					}
					// If the current is a incorrect answer
					else{
						// If not selected
						if($t.hasClass('selected'))
							$t.addClass('incorrect');	
					}
				});
			}
			
			// Show the tooltip once
			if(!isToolTipShown){
				isToolTipShown=true;
				toolTips.show($resultSpan,'result','test');
			}
			
			$.scrollTo({top:'+=90px',left:'10px'},900)
		}

	}
	
	test.start();

});
