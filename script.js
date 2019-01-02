//Spell #1

$(".spellOne").click(function(){
    $(".trickOne").fadeIn();
     $(".spellOne").fadeOut();
});


//Spell #2

$(".spellTwo").click(function(){
    $(".trickTwo").toggle();
});



//Spell #3

$(".spellThree").click(function(){
        $(".trickThree").slideDown();
});

$("button").click(function(){
        $("p").slideDown();
        $(".map").slideDown();
});


