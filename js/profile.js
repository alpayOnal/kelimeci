$(document).ready(function(){

	// Prepare
	var 
		$f=$('.profileForm'),
		$storedCity=$f.find('input#storedCity'),
		$city=$f.find('select#city');

	// If there is storedCity
	if($storedCity.length>0){
		var t;
		$city.find('option').each(function(){
			t=$(this);
			// Select storedCity
			if(t.val().toLowerCase()==$storedCity.val().toLowerCase()){
				t.attr('selected','selected');
				return;
			}
		});
	}
	else{
		// Disable the city select box
		$city.attr('disabled','disabled');
	}

	// Update personel information
	$f.find('input[name="updatePersonelInfo"]').click(function(){
		
		var 
			fname=$f.find('input#fname').val(),
			lname=$f.find('input#lname').val(),
			birthDate=$f.find('input#birthDate').val();

		// If empty
		//if(fname=='' || lname=='' || birthDate=='') return;
		
		var 
			infoObj={
				'fname':fname,
				'lname':lname,
				'birthDate':birthDate
			},
			result=null;				

		result=updateInformation('personelInfo',infoObj);

		if(result!==true)
			alert(result);
	});

	// Update email
	$f.find('input[name="updateEmail"]').click(function(){
		
		var email=$f.find('input#email').val();
		
		// If empty
		if(email=='') return;
		
		// If not valid
		if(!validateEmail(email)){
			alert('Geçerli bir e-posta adresi giriniz!');
			$f.find('input#email').focus();
			return;
		}
		
		var 
			infoObj={'email':email},
			result=null;				

		result=updateInformation('email',infoObj);

		if(result!==true)
			alert(result);
	});

	// Update password
	$f.find('input[name="updatePassword"]').click(function(){
		
		var 
			curPass=$f.find('input#currentPassword').val(),
			newPass=$f.find('input#newPassword').val(),
			newPass2=$f.find('input#newPassword2').val();
		
		// If empty
		if(curPass=='' || newPass=='' || newPass2==''){
			alert('Şifre ile ilgili tüm alanları doldurmalısınız!');
			$f.find('input#currentPassword');
			return;
		}

		// The length of the password must be 5
		if(newPass.length<5){
			alert('Şifre en az 5 karakterden oluşmalı!');
			$f.find('input#newPassword');
			return;
		}

		// If the new passwords not the same
		if(newPass!=newPass2){
			alert('Yeni şifre ve Yeni şifre(tekrar) bilgileri aynı değil!');
			$f.find('input#newPassword');
			return;
		}
		
		var 
			infoObj={
				'currentPassword':curPass,
				'newPassword':newPass
			},
			result=null;				

		result=updateInformation('password',infoObj);

		if(result!==true)
			alert(result);
	});

	
	// On change for practice checkbox
	$f.find('input#practiceYes').change(function(){
		var
			$t=$(this),
			// Is checkbox checked
			isChecked=$t.is(':checked'),
			// the <p> cityForPractice
			$city=$f.find('select#city');

		if(isChecked){
			$city.removeAttr('disabled');
		}
		else{
			$city.attr('disabled','disabled');
		}	
	});

	// Update practice information
	$f.find('input[name="updatePractice"]').click(function(){
		
		var 
			// Is checkbox checked
			isChecked=$f.find('input#practiceYes').is(':checked'),
			practice='',
			$city=$f.find('select#city'),
			infoObj={},
			result=null;

		// If checked
		if(isChecked){
			if($city.val().toLowerCase()=='seçiniz'){
				alert('Pratik yapmak için bir şehir seçmelisiniz!');
				$city.focus();
				return;
			}
			practice='yes';
			infoObj.city=$city.val();
		}
		else{
			practice='no';
		}
		
		infoObj.practice=practice;

		result=updateInformation('practice',infoObj);

		if(result!==true)
			alert(result);
	});

});

// Validate the email
function validateEmail(data){
	var patt=new RegExp("^[a-zA-Z0-9_\\-.]*@[a-zA-Z0-9_\\-]+.[a-zA-Z]{3,4}.*[a-zA-Z]*$","g"); 
	if(patt.test(data)) return true;
	else false;
}

// Update information according to type(such email, password)
function updateInformation(type,infoObj){
	
	var
		data='',
		ajax=null;

	for(var i in infoObj)
		data+=i+'='+encodeURI(infoObj[i])+'&';

	data=data.substring(0,data.length-1);
	
	ajax=new simpleAjax();
	ajax.send(
		'?_ajax=users/update',
		'type='+type+'&'+
			data,
		{'onSuccess':function(rsp,o){

			// Okay
			if(rsp=='1')
				return true;
			// Error
			else
				return rsp;

		}}
	);

}

