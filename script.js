function testAddMessage(){

  var chat = $('.selected-chat');
  var input = $('#text-message');
  var mex = input.val();
  var message = document.createElement('div');
  var messageContent = document.createElement('p');
  var messageDetail = document.createElement('small');
  var check = document.createElement('i');



  $(message).addClass('message sent');
  $(messageContent).text(mex);
  $(messageDetail).text('17:10');
  $(check).addClass('fas fa-check-double check');

  message.append(messageContent);
  message.append(messageDetail);
  message.append(check);
  chat.append(message);

  viewCheck();
  createDeleteMex();
}

function clearInput(){
  var input = $('#text-message');
  input.val("");
}


function textEnterEvent(e){
  if (e.which == 13) {
    testAddMessage();
    clearInput();
    setTimeout(answerMessage, 1000 );
  }
}


function answerMessage(){

  var chat = $('.selected-chat');
  var message = document.createElement('div');
  var messageContent = document.createElement('p');
  var messageDetail = document.createElement('small');
  var check = document.createElement('i');

  $(message).addClass('message received');
  $(messageContent).text("ok, va bene!");
  $(messageDetail).text('17:10');
  $(check).addClass('fas fa-check-double check');
  message.append(messageContent);
  message.append(messageDetail);
  message.append(check);
  chat.append(message);

  viewCheck();
  createDeleteMex();
}


function viewCheck(){
  var message = $('.message');
  var time = $('.message small');
  var check = $('.check');
  message.mouseenter(function(){
    time.hide();
    check.show();

  });
  message.mouseleave(function(){
    time.show();
    check.hide();

  })
}


function searchInput(){


 var search = $('#search-input');
 var key = search.val();
 var names = $('.chat-message p');
 var chat = $('.chat');
 chat.removeClass('hidden');
 for (var i = 0; i < names.length; i++) {
  var name = chat.eq(i);
  var nameCont = name.text();
 var chatFinded = chat.eq(i);
  if (!nameCont.includes(key)) {
    chatFinded.addClass('hidden');
  }
 }
}

function createDeleteMex(){
  var message = $('.message');
  message.click(function(){
    me = $(this);
    var cancelMex = document.createElement('div');
    $(cancelMex).addClass('option-delete');
    $(cancelMex).text('CANCEL');
    me.addClass('deleted-message'); ////aggiungo questa classe al messaggio cliccato per poi cancellare solo il messaggio in questione.
    var chat = $('.selected-chat');
    me.append(cancelMex);

    me.mouseleave(function(){
      $(cancelMex).remove();
      me.removeClass('deleted-message');
    })
    deleteMex();

  })
}

function deleteMex(){
  var cancelMex = $('.option-delete');
  var mex = $('.deleted-message');
  cancelMex.click(function(){

    var message = $('.message');

    mex.hide();
  })
}
function init(){

  var text = $('#text-message');
  text.keyup(textEnterEvent)
  viewCheck();

  var input = $('#search-input');
  input.keyup(searchInput);

  createDeleteMex();
}

$(document).ready(init);
