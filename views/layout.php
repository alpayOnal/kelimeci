<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="tr" lang="tr">
<head>
<title><?php echo $this->title;?></title>
<meta http-equiv="content-type" charset="text/html;charset=utf-8" />

<script type="text/javascript" src="js/createXHR.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/layout.js"></script>
<script type="text/javascript" src="js/feedback.js"></script>
<script type="text/javascript" src="js/jquery.qtip.min.js"></script>
<script type="text/javascript" src="js/jquery.autocomplete.js"></script>

<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/common.css" />
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<link rel="stylesheet" type="text/css" href="css/ui-lightness/jquery-ui-1.8.16.custom.css" />
<link rel="stylesheet" type="text/css" href="css/feedback.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.qtip.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.autocomplete.css" />

</head>
<body>

<div id="banner">
	<a href="/" id="logo"></a>
	<?php
		echo '<ul id="topMenu">';

		$menus=array(
			'vocabulary'=>'Kelimelerim',
			'tests'=>'Testlerim',
			'status'=>'Durumum'
		);

		foreach($menus as $k=>$i)
			echo '<li><a href="'.$k.'" 
				'.($this->name==$k ? ' class="active" ' : '').'
				alt="">'.$i.'</a></li>';
		
		echo '</ul>';

		// Set the top user menu with its sub menu
		$o2=new stdClass();
		$o2->isLogined=$o->isLogined;
		echo $this->loadView('userTopMenu.php',$o2);
	?>
	<form id="wordSearch" method="post" action="search">
		<input type="text" name="word" id="word" placeholder="kelime ara" />
		<img src="images/search.png" />
	</form>
	<a href="#" id="feedbackImg"></a>
</div>

<?php
	/**
	 * If the user logined, 
	 *	store the email in a global var. for js
	 * 	to add it into email textbox on feedback form
	 */
	$usrEmail='null';
	if($o->isLogined){
		$usrEmail='\''.$this->u->email.'\'';
	}
	echo '<script type="text/javascript">var __usrEmail='.$usrEmail.';</script>';

echo $this->loadPageLayout();
?>

</body>
</html>
