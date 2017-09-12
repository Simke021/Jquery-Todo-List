// Check of specific todos by click
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event){
    alert("click on span");
});

$("ul").click(function(){
    alert("click on ul");
});

$("body").click(function(){
    alert("click on body");
});