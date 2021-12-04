$("#b").on("click", function(){
    console.log(777);
});
var request = $.get("http://localhost:591/quote");
request.done(function(data){
    console.log(data);
});
request.fail(function(jkXHR, textStatus, errorThrown){
    console.log(textStatus, errorThrown);
});