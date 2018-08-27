function nextPage(){}
function previousPage() {
    // body...
}

$("body").click(function(){
    nextPage();
    console.log("click");
})

$("body").contextmenu(function(event){
    event.preventDefault();
    previousPage();
    console.log("right click");
})

/*
$("body").dblclick(function(){
    previousPage();
    console.log("double click");
})
*/
