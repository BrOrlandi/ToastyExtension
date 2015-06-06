// Generated by CoffeeScript 1.9.3
(function() {
  (function() {
    return $("body").ready(function() {
      var keys, nextKey;
      $("body").toasty({
        sound: true,
        image: chrome.extension.getURL('toasty.png'),
        sound: chrome.extension.getURL('toasty.mp3')
      });
      $("#toasty-guy-dan").css("z-index", "99999999");
      keys = [84, 79, 65, 83, 84, 89];
      nextKey = 0;
      return $(window).keydown(function(e) {
        var key;
        key = e.which;
        if (key === keys[nextKey]) {
          nextKey++;
        } else {
          nextKey = 0;
        }
        if (nextKey === keys.length) {
          $("body").toasty('pop');
          nextKey = 0;
        }
        console.log("pressed " + key);
        return console.log("" + nextKey);
      });
    });
  })();

}).call(this);