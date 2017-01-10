(function() {

  var output  = document.querySelector('.output'),
      input   = document.querySelector('input'),
      button  = document.querySelector('button'),
      avatar  = document.querySelector('.avatar'),
      channel = 'simple-chat';

  // Random Avatar
  avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

  // PubNub Keys
  var p = PUBNUB.init({
    subscribe_key: 'sub-c-182105ac-0001-11e5-8fd4-0619f8945a4f',
    publish_key: 'pub-c-ce04f67b-0f26-43ce-8be2-192e9821d1a3',
    ssl: true
  });

  // Format
  p.subscribe({
    channel: channel,
    callback: function(m) {
      output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' + m.text.replace(/[<>]/ig, '') + '</span></p>' + output.innerHTML;
    }
  });

  // Events
  input.addEventListener('keyup', function(e) {
    (e.keyCode || e.charCode) === 13 && send()
  }, false);
  button.addEventListener('click', send, false);

  function send() {
    if(input.value !== '') {
      p.publish({
        channel: channel,
        message: {
          avatar: avatar.className,
          text: input.value
        },
        callback: function(){
          input.value = '';
        }
      });
    }
  }

})();