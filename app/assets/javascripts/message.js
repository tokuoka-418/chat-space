$(function(){
      function buildHTML(message){
        if ( message.image ) {
          let html =
          `<div class="messages__message" data-message-id="${message.id}">
                <div class="message__text">
                  <div class="message__text__name">
                    ${message.user_name}
                  </div>
                  <div class="message__text__time">
                    ${message.created_at}
                  </div>
               </div>
               <div class="message__content">
                 <p class="message__content__text">
                   ${message.content}
                 </p>
               </div>
               <img src=${message.image} >
           </div>`
          return html;
        } else {
          let html =
          `<div class="messages__message" data-message-id="${message.id}">
                <div class="message__text">
                    <div class="message__text__name">
                      ${message.user_name}
                    </div>
                    <div class="message__text__time">
                      ${message.created_at}
                    </div>
                </div>
                <div class="message__content">
                  <p class="message__content__text">
                    ${message.content}
                  </p>
                </div>
           </div>`
           return html;
      };
    }
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({  
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);      
      $('form')[0].reset();
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
    return false;
  });
  let reloadMessages = function () {
    last_message_id = $('.messages__message:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      data: {id: last_message_id}
    })
      .done(function(messages) {
        if (messages.length != 0) {
          var insertHTML = '';
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
        });
          $('.chat-main__messages').append(insertHTML);
          $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
        }
      })
      .fail(function() {
        alert("通信エラーです。");
      })
    
  }
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
