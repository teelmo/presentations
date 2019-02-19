$(document).ready(function() {
  $('.slide').each(function(index, element) {
    $(this).prepend('<div class="logo"></div>');
    $(this).append('<footer><a href="http://teelmo.info" target="_blank">Teemo Tebest</a>, <a href="http://http://twitter.com/teelmo" target="_blank">@teelmo</a> | 11.10.2013 | <a href="http://journalistiliitto.fi/jp13/" target="_blank">Journalismin Päivä</a> | <a href="https://twitter.com/search?q=%23datajournalismi&src=hash" target="_blank"><img src="img/twitter_logo.png" alt="" /> #datajournalismi</a> | <a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC BY-SA</a</footer>');

  });
  $('a').each(function(index) {
    $(this).attr('target', '_blank');
  });
         
});