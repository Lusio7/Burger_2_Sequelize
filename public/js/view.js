$(document).ready(function() {
    // Getting a reference to the input field where user adds a new burger
    var $newItemInput = $("input.new-item");
    // Our new burgers will go inside the burgerContainer
    var $burgerContainer = $(".burger-list");
    // Adding event listeners for deleting, editing, and adding burgers
    $(document).on("click", "button.delete", deleteBurger);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".burger-item", editBurger);
    $(document).on("keyup", ".burger-item", finishEdit);
    $(document).on("blur", ".burger-item", cancelEdit);
    $(document).on("submit", "#burger-form", insertBurger);

    