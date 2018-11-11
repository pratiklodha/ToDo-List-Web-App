// Check-off specific todo by clicking
$("ul").on("click","li", function() {
    // Whenevey 'li' is clicked inside 'ul' run line below
    // we want this code to run only when 'li' is clicked inside 'ul'. Adding
    // event listeners to element present when the page was loaded.
    $(this).toggleClass("completed"); // check '.completed' in style.css file
});

// click on X to delete to-do
$("ul").on("click","span", function(event) {
    $(this).parent().fadeOut(500, function(){ // Here 'this' refers to span
        $(this).remove(); // Here 'this' refers to li
        // first fadeOut and then --> remove the element
    });
    event.stopPropagation(); // to prevent event bubbling i.e. firing event on child fires even on li as wee
})

// Add new todo
$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        // grabbing new todo from input
        var todoText = $(this).val(); 
        $(this).val("");
        // create new li and append it to the list
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
        

    }
})

// Click '+' to add new todo
$('.fa-plus').click(function() {
    $("input[type='text']").fadeToggle();
});