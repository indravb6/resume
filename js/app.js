function reset(){
    for(var i = 1; i <= 6; i++){
        $("#layer" + i).hide();
        $("#menu" + i).css("background-color","#3B3738");
        $("#menu" + i).hover(function(){
            $(this).css("background-color", "rgb(70, 70, 70)");
            }, function(){
            $(this).css("background-color", "#3B3738");
        });
    }
}
function display(layer){
    reset();
    $("#menu" + layer).hover(function(){
        $(this).css("background-color", "rgb(33, 32, 32)");
        }, function(){
        $(this).css("background-color", "rgb(33, 32, 32)");
    });
    $("#menu" + layer).css("background-color","rgb(33, 32, 32)");
    $("#layer" + layer).fadeIn();
}
display(1);