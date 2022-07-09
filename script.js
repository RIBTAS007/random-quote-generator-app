var quote = [
'I love you the more in that I believe you had liked me for my own sake and for nothing else. -John Keats',
'But man is not made for defeat. A man can be destroyed but not defeated.  -Ernest Hemingway ',
'When you reach the end of your rope, tie a knot in it and hang on.  -Franklin D. Roosevelt',
'Try to be a rainbow in someone\'s cloud. -Maya Angelou ',
' Find a place inside where there\'s joy, and the joy will burn out the pain. -Joseph Campbell',
'Nothing is impossible, the word itself says \'I\'m possible\'!-Audrey Hepburn',
'Don\'t judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson',
'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha ',
'The only thing necessary for the triumph of evil is for good men to do nothing. -Edmund Burke ',
'One of the most beautiful qualities of true friendship is to understand and to be understood. -Lucius Annaeus Seneca ',
'Where there is love there is life. - Mahatma Gandhi ', 'Love is composed of a single soul inhabiting two bodies. -Aristotle ',
'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson ',
'Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill ',
'Do all things with love. -Og Mandino '];


function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='+encodeURIComponent( message));
}
                                          
var msg;
                                          
                                          
$(document).ready(function() {
    $("#getMessage").on("click", function(){
        var randomquote = Math.floor(Math.random()*(quote.length-1));
        msg = quote[randomquote];
        $(".message").html(msg);
    });
    $("#tweetMessage").on("click", tweetHandler);
    $(".jumbotron").addClass("animated bounceInLeft");
    $(".quotes").addClass("animated bounceInRight");
});
                                          
function tweetHandler() {
    tweet($(msg).text()); 
    //tweet(msg);
}
                                          
var currentQuote = quote[0];

function setRandomQuote() {
  currentQuote = quote[Math.floor(Math.random() * quote.length)];

  $('#comment').html(currentQuote);
  $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote).attr('target', '_blank');
}

$(function () {
  $('#randomQuote').click(function () {
    setRandomQuote();
  });
});
