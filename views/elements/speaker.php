<?php
	if(!isset($o->noScriptStyle)){
		echo '
		<script type="text/javascript" src="../js/jplayer/jquery.jplayer.min.js"></script>
		<link rel="stylesheet" type="text/css" href="../css/speaker.css" />
		<script type="text/javascript" src="../js/speaker.js"></script>
		';
	}

	// Generate a unique number for id
	$uniqueId=time();

	// If incContIdBy is set, increment cont. id by this value
	//	- Why is it needed?
	//	- Because, prevent generating a same (unique) id for speaker
	//		element container
	if(isset($o->incContIdBy) && is_numeric($o->incContIdBy))
		$uniqueId+=$o->incContIdBy;

	$contId='speaker'.$uniqueId;
	$jPlayerId='jplayer'.$uniqueId;

	// If there is the media file to play, show the html
	if($o->mediaFile){
		$autoPlay=(isset($o->autoPlay) && $o->autoPlay) ? 'true' : 'false';

		echo '
		<span id="'.$contId.'" class="speaker">
			<a href="#" class="player">
				<img src="../images/speaker/speakerPlay.png" alt="" />
			</a>
			<span id="'.$jPlayerId.'" class="speakerJPlayer"></span>
			<input type="hidden" name="mediaFile" value="'.$o->mediaFile.'" />
			<input type="hidden" name="autoPlay" value="'.$autoPlay.'" />
		</span>';

		echo '<script type="text/javascript">new Speaker(\''.$contId.'\');</script>';
	}
?>
