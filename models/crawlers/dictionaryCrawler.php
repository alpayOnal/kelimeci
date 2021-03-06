<?php
namespace crawlers;
abstract class dictionaryCrawler{

	/**
	 * veri çekilecek sayfanın url'si
	 *  
	 * */ 
	public $crwlUrl;

	/**
	 * veri çekilecek sayfada eğer banlanma durumu söz konusu ise
	 * bekletme yapılarak data çekilebilir.
	 * */
	public $interval=0;
	
	/**
	 * çekilen html verisini tutar
	 * */
	public $content;
	
	/**
	 * sorgulama yapılan kelimeyi saklar
	 * */
	public $word;
	
	/**
	 * gönderilen kelimeye ait html sayfa verisini çeker
	 * */ 
	public function fetch($word,$content=null){}
	
	/**
	 * içeriği parse eder ve veri nesnesi olarak geri
	 * döndürür.
	 * 
	 * @return object
	 * 
	 * */ 
	public function parse(){}
	
	/**
	 * verilen kelimeye ait html verisini çeker ve parse eder.
	 * 
	 * @param string $word
	 * 
	 * @return object
	 * */
	public function get($word,$content=null){
		return $this->parse($this->fetch($word,$content));
	}
}
?>
