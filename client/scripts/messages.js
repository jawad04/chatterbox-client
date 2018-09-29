var Messages = function (username, text, roomname) { //message class
  this.username = username;
  this.text = text;
  this.roomname = roomname;
};

var $chats = $('#chats');
var $button = $('.submit');
var $text = $('#message');

$button.on('click', function() {
  // $chats.prepend(`<div>${$text.val()}</div>`);
  //console.log($text.val());
  var username = window.location.search;
  var msg = new Messages(username, $text.val());
  //console.log(App.fetch);
  Parse.create(msg, App.fetch(callback = ()=>{}));
});


Messages.prototype.render = function() {
  
};
