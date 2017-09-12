// Check of specific todos by click
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Brisem Todo klikom na X
$("span").click(function(event){
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

       $(this).val = "";
       // Kreiram novi li i dodajem u ul
       $("ul").append("<li><span>X</span> "+ todoText +"</li>");

    }
});