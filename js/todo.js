$(document).ready(function() {
    $("#todo").selectable();
    $("#add").click(function(){
       var taskToAdd = prompt ("Please Enter a task");
            $("#todo").prepend("<li>" + taskToAdd + "</li>");          
    }); // end of click function for adding a task

   $("#delete").click(function() {
   $(".ui-selected").remove();

}); // end of click function for deleting a task
}); // end of ready 
