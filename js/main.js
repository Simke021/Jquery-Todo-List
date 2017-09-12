// Check of specific todos by click
$("li").click(function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");
    
    // if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black and text decorate to none
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }else{
        //turn it gray and text decorate to line-through
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
        // turn it gray
    
});