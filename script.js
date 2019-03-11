function testAddMessage(){

  var chat = $('.selected-chat');
  var input = $('#text-message');
  var mex = input.val();
  var message = document.createElement('div');
  var messageContent = document.createElement('p');
  var messageDetail = document.createElement('small');


  $(message).addClass('message sent');
  $(messageContent).text(mex);
  $(messageDetail).text('17:10');

  message.append(messageContent);
  message.append(messageDetail);

  chat.append(message);
}

function clearInput(){
  var input = $('#text-message');
  input.val("");
}


function textEnterEvent(e){
  if (e.which == 13) {
    testAddMessage();
    clearInput();

    setTimeout(function() {
      var chat = $('.selected-chat');
      var message = document.createElement('div');
      var messageContent = document.createElement('p');
      var messageDetail = document.createElement('small');


      $(message).addClass('message received');
      $(messageContent).text("ok, va bene!");
      $(messageDetail).text('17:10');

      message.append(messageContent);
      message.append(messageDetail);

      chat.append(message);
    },3000 );
  }
}


function init(){

  var text = $('#text-message');
  text.keyup(textEnterEvent)

}

$(document).ready(init);
