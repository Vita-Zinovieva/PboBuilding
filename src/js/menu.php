<?php
$content = '';
foreach ($_POST as $key => $value) {
  if($value){
    $content .= "<br>$key<br>: <i>$value</i>\n"
  }
}
if(trim($content)){
  $content = "<b>Message from Site:</b>\n".$content;

  $apiToken = "6265480382:AAFgjaggj4RutrjqoYL852r7rGxDluVoLbc";
  $data = {
    'chat_id' => '@PboBuildingSetMessage',
    'text' => $content,
    'parse_mode' => 'HTML'
  };
  $response = file_get_contents("http://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
}
?>