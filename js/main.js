// Check of specific todos by click
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Brisem Todo klikom na X
$("ul").on("click", "span", function(event){
     $(this).parent().fadeOut(500, function(){
        $(this).remove();
     });
    event.stopPropagation();
});

// Selektujem input polje
$("input[type='text']").keypress(function(){

    // Proveravam da li je pritisnuto enter na tastaturi
    if(event.which === 13){

        // Uzimam iz input-a sta je korisnik upisao
       var todoText = $(this).val();

       $(this).val("");
       // Kreiram novi li i dodajem u ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
    }
});

// Toggle efekat za input polje
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle("slow");
});