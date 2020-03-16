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

    // Our initial burgers array
  var burgers = [];

  // Getting burgers from database when page loads
  getBurgers();

  // This function resets the burgers displayed with new burgers from the database
  function initializeRows() {
    $burgerContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < burgers.length; i++) {
      console.log(burgers[i])
      rowsToAdd.push(createNewRow(burgers[i]));
    }
    $burgerContainer.prepend(rowsToAdd);
  }

   // This function grabs burgers from the database and updates the view
   function getBurgers() {
    $.get("/api/burgers", function(data) {
      burgers = data;
      initializeRows();
    });
  }

   // This function deletes a burger when the user clicks the delete button
   function deleteBurger(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(getBurgers);
  }
