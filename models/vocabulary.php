<?php
/**
 * vocabulary class contains operations that perform for only one user
 * 
 * @copyright copyleft
 * @author Mustafa Atik <muatik@gmail.com>
 * @date 07 Sep 2011 01:42
 */
class vocabulary
{

	/**
	 * the initial level of a word which is being learned by a user
	 * 
	 * @var int
	 * @access private
	 */
	private $level=0;
	
	/**
	 * indicates the user for whom operations perform for
	 * 
	 * @var int
	 * @access public
	 */
	public $userId;
	
	
	
	/**
	 * returns the words array which is in the user's vocabulary
	 * 
	 * @param int $start 
	 * @param int $length 
	 * @param array $classes 
	 * @access public
	 * @return void
	 */
	public function getWords($start=0, $length=100, $classes=array()){
		
		
	}
	
	
	/**
	 * adds a word into the user's vocabulary
	 * 
	 * @param words $word  words object
	 * @param string $tags tag of the word
	 * @access public
	 * @return bool
	 */
	public function addWord($word, $tags=null){
		
	}
	
	
	/**
	 * suggests tags which contain the keyword
	 * 
	 * @param string $keyword 
	 * @access public
	 * @return array tags array
	 */
	public function suggestTags($keyword){
	}
	
	/**
	 * suggests words which contain the keyword
	 * 
	 * @param string $keyword
	 * @access public
	 * @return array words array
	 */
	public function suggestWords($keyword){
	}
}
?>