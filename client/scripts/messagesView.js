var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    console.log('Render being invoked');
    console.log(MessagesView.$chats);
    //grab data on server
    //iterate over data
    //setup display of (username and text)
    //append to chats div
    App.fetch(results => {
      console.log(results);
      var i, html = '';
      for (var i = 0; i < results.length; i++) {
        html += MessageView.render(results[i]);
        // MessagesView.$chats.append(html);
      }
      MessagesView.$chats.append(html);
    });
  },

};

  