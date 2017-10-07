//stores the api value that is return from the site
var result;
//function to get the quote from the website www.quoteondesign.com
function getQuote() {
  // force the browser not to cache the requested page
  $.ajaxSetup({ cache: false });
  //api url for the quote
  var url ="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
  // jquery function to get data in json format from the url
  $.getJSON(url, function(result) {
    // sets the quote to be displayed in the browser
    $("#message").html(result[0].content + " - " + result[0].title);
  });
}
// calls the getQuote function on load
getQuote();
//function to handle the sharing of quote on twitter
function twitter() {
  //the function opens the twitter sharing post in new tab
  window.open(
    //twitter sharing api url which gets the data from the box and encode it
    "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent($("#message").text())
  );
};
