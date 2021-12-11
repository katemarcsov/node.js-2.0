var request = $.get("http://localhost:591/quote");
request.done(function(data){
    var dict_quote = JSON.parse(data);
    var title = "Цитата" + dict_quote["number"];
    var content = dict_quote["quote"];
    $("title").text(title);
    $("#text").text(content);
    console.log(dict_quote);
});
request.fail(function(jkXHR, textStatus, errorThrown){
    console.log(textStatus, errorThrown);
});