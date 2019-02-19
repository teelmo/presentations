$(document).ready(function() {
  $('.slide').each(function(index, element) {
    $(this).append('<footer><a href="http://teelmo.info" target="_blank">Teemo Tebest</a>, <a href="http://http://twitter.com/teelmo" target="_blank">@teelmo</a> | 8.11.2013 | <a href="http://www.haaga-helia.fi" target="_blank">HAAGA-HELIA</a> | <a href="https://twitter.com/search?q=%23datajournalismi&src=hash" target="_blank"><img src="img/twitter_logo.png" alt="" /> #datajournalismi</a> | <a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC BY-SA</a</footer>');

  });
  $('.logoslide').each(function(index, element) {
    $(this).prepend('<div class="logo"></div>');
  });
  $('a').each(function(index) {
    $(this).attr('target', '_blank');
  });
         
});