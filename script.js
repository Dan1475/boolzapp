function testAddMessage(){

 var mex = $('#text-message').val();
  var data = {
    messaggio: mex,
    orario: getTime(),
    class: 'message sent'
  };

  var template = $('#box-template').html();
  var compiled = Handlebars.compile(template);
  var finalHTML = compiled(data);

   var chat = $('.chat-container.show> .selected-chat');
  chat.append(finalHTML);
  chat.animate({scrollTop: chat.prop("scrollHeight")});


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


   var data = {
     messaggio: "Ok, ricevuto",
     orario: getTime(),
     class: 'message received'
   };

   var template = $('#box-template').html();
   var compiled = Handlebars.compile(template);
   var finalHTML = compiled(data);

    var chat = $('.chat-container.show> .selected-chat');
    chat.append(finalHTML);
    chat.animate({scrollTop: chat.prop("scrollHeight")});



  createDeleteMex();
}




function searchInput(){

 var search = $('#search-input');
 var key = search.val().toLowerCase();

 var names = $('.chat-message p');
 var chat = $('.chat');
 chat.removeClass('hidden');
 for (var i = 0; i < names.length; i++) {
  var chatInd = chat.eq(i);
  var chatText = chatInd.find('p').text().toLowerCase();

  if (!chatText.includes(key)) {
    chatInd.addClass('hidden');
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


function getTime(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var time = hour + ":" + minutes;

  return time;
}

function deleteMex(){
  var cancelMex = $('.option-delete');
  var mex = $('.deleted-message');
  cancelMex.click(function(){

    var message = $('.message');

    mex.hide();
  })
}




function changeChat(){
   var chat = $('.chat-container');
   chat.removeClass('show');
   var me = $(this);
   var chatInd = me.index();


   var selectedChat = chat.eq(chatInd);
   selectedChat.removeClass('hidden').addClass('show');
   chat.addClass('hidden');
}



function init(){

  var text = $('#text-message');
  text.keyup(textEnterEvent)


  var input = $('#search-input');
  input.keyup(searchInput);

  var chatCont = $('.chat');
  chatCont.click(changeChat);


  createDeleteMex();
}

$(document).ready(init);
