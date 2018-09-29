var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(messages) {
    //console.log('Render being invoked');
    //console.log(MessagesView.$chats);
    //grab data on server
    //iterate over data
    //setup display of (username and text)
    //append to chats div
    var html = "";
    html += MessageView.render(messages);
    MessagesView.$chats.append(html);
  },
};

  