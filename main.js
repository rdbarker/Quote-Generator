var genImage = true;
var genQuote = true;

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", function(){
    getQuote();
    setWall();
  });
  $("#tweetQuote").on("click", function(){
    tweetQuote();
  });

});
function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getQuote(){
  $.ajax({
    url: ' https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1 ',
    type: "GET",
    dataType: "json",
    success: function(q){
      var quote = q.shift();
      $('#qTitle').html(quote.title);
      $('#qContent').html(quote.content);
    },
    cache: false
  })

}
function setWall(){
  var rand = getRandom(1,300);
  var baseUrl = "https://source.unsplash.com/category/people";
  var url = "url('" + baseUrl +"?sig="+rand+"')"
  $('body').css('background-image',url);

}
function tweetQuote(){
  var contentText = document.getElementById('qContent').textContent;
  var contentTitle = document.getElementById('qTitle').textContent;
  var text = contentText + " -" + contentTitle;
  console.log(contentText);
  var win = window.open('https://twitter.com/intent/tweet?text=' +text, '_blank');
  win.focus();

}
