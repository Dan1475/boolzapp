function testAddMessage(){

  var wrapper = $('.wrapper');
  var input = $('#usr-input')
  var mex = input.val();
  var message = document.createElement('div');
  var messageContent = document.createElement('p');
  var messageDetail = document.createElement('small');


  $(message).addClass('message sent');
  $(messageContent).text(mex);
  $(messageDetail).text('dettaglio messaggio dinamico');

  message.append(messageContent);
  message.append(messageDetail);

  wrapper.append(message);
}


function init(){
  var btn = $('#button');
  btn.click(testAddMessage);
}

$(document).ready(init);
