<?php
    /*$url = 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=CosmoFund';
    $curl = curl_init( $url );
    curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $curl, CURLOPT_TIMEOUT, 30 );
    curl_setopt( $curl, CURLOPT_POST, 1 );
    curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
    $result = curl_exec( $curl );
    curl_close( $curl );*/
    $dir  = '../assets/followers/';
$files1 = scandir($dir);
    $tw_username = 'CosmoFund'; 
$data = file_get_contents('https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names='.$tw_username); 
$parsed =  json_decode($data,true);
$tw_followers =  $parsed[0]['followers_count'];


    echo json_encode(array('files' => $files1,'follow' => $tw_followers));
?>