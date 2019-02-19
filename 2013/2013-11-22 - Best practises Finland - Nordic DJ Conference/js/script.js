$(document).ready(function() {
  $('.slide').each(function(index, element) {
    $(this).append('<footer><a href="http://teelmo.info" target="_blank">Teemo Tebest</a>, <a href="http://http://twitter.com/teelmo" target="_blank">@teelmo</a> | 22.11.2013 | <a href="http://webappo.web.sh.se/datajournalistik2013" target="_blank">Nordic Datajournalism Conference</a> | <a href="https://twitter.com/search?q=%23ddj&src=hash" target="_blank"><img src="img/twitter_logo.png" alt="" /> #ddj</a> | <a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC BY-SA</a</footer>');

  });
  $('.logoslide').each(function(index, element) {
    $(this).prepend('<div class="logo"></div>');
  });
  $('a').each(function(index) {
    $(this).attr('target', '_blank');
  });
         
});