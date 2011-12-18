$(function(){
	var
		// User top menu
		$usrMenu=$('#userTopMenu'),
		// User sub top menu
		$usrSubMenu=$('#userSubTopMenu'),
		// Object to cancel time out 
		timeOutObjForSubMenu=null;

	// If the user menu clicked, show the sub user menu
	$usrMenu.click(function(){
		var
			$t=$(this);

		// If hidden
		if($usrSubMenu.is(':hidden')){
			// If it has any forms - user not logined/registered,
			// 	toggle forms properly
			if($usrSubMenu.find('form').length>0)
				toggleFormsInUserMenu();

			$usrSubMenu.show();
		}
		else{
			$usrSubMenu.hide();
			clearTimeout(timeOutObjForSubMenu);
		}

		return false;
	});

	// Hide the user sub menu within 1,25 second when it is leaved
	$usrSubMenu.mouseleave(function(){
		timeOutObjForSubMenu=setTimeout(
			function(){$usrSubMenu.hide();},1250
		);
		return false;
	});

	// Cancel to hide the sub menu when it is entered
	$usrSubMenu.mouseenter(function(){
		clearTimeout(timeOutObjForSubMenu);
	});

	// If no any forms - user logined, don't do anthing for the forms
	if($usrSubMenu.find('form').length<1)
		return;

	// Hide the register form on load
	toggleFormsInUserMenu();

	// Insert a link into the login form to show register form
	$usrSubMenu.find('.loginForm .fInput:last')
		.append('<a href="#" class="showRegisterForm">&#187; Hesap oluştur</a>')
		.find('a.showRegisterForm').click(function(){
			toggleFormsInUserMenu('registerLink');
			return false;
		});

	// Insert a link into the register form to show login form
	$usrSubMenu.find('.registerForm .fInput:last')
		.append('<a href="#" class="showLoginForm">&#187; Giriş formu</a>')
		.find('a.showLoginForm').click(function(){
			toggleFormsInUserMenu();
			return false;
		});

});

/**
 * Show/hide the form of login or register
 *
 * @param string Where called from
 */
function toggleFormsInUserMenu(where){
	var
		// Login form
		$lFrm=$('#userSubTopMenu .loginForm');
		// Register form
		$rFrm=$('#userSubTopMenu .registerForm');

	// Reset the forms
	$lFrm.get(0).reset();
	$rFrm.get(0).reset();

	// Hide the form alerts
	$lFrm.find('.frmAlert').hide();
	$rFrm.find('.frmAlert').hide();
	
	if(where=='registerLink'){
		$lFrm.hide();
		$rFrm.show();
	}
	else{
		$lFrm.show();
		$rFrm.hide();
	}
}