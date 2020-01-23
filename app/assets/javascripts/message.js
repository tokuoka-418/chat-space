$(function(){
      function buildHTML(message){
        if ( message.image ) {
          var html =
          `<div class="message">
                <div class="message__text">
                  <div class="message__text__name">
                    ${message.user_name}
                  </div>
                  <div class="message__text__time">
                    ${message.created_at}
                  </div>
               </div>
               <div class="message__content>
                 <p class="message__content__image">
                   ${message.content}
                 </p>
               </div>
               <img src=${message.image} >
           </div>`
          return html;
        } else {
          var html =
          `<div class="message">
                <div class="message__text">
                    <div class="message__text__name">
                      ${message.user_name}
                    </div>
                    <div class="message__text__time">
                      ${message.created_at}
                    </div>
                </div>
                <div class="message__conten>
                  <p class="message__conten__image">
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
      $('.messages').append(html)
      $('#massage_conten').val('')
      $('form')[0].reset();
    })

  });
});
