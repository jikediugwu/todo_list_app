$(document).ready(function() {
    $("#todo").selectable();
    $("#add").click(function(){
       var taskToAdd = prompt ("Please Enter a task");
            $("#todo").prepend("<li>" + taskToAdd + "</li>");          
    });

   $("#delete").click(function() {
   $(".ui-selected").remove();

});
});
