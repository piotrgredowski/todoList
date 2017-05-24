// check off specific todos by clicking
// var liStructure = [
//   "<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> ",
//   "<span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span></li>"
// ];
var liStructure = [
  "<div class=\"deleteButton\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></div><div class=\"content\">",
  "</div><div class=\"editButton\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></div>"
];

var inputStructure = [
  "<div><input class=\"editInput\" type=\"text\"></input></div><div class=\"confirm\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div>"
];

$("ul").on("click", ".content", function () {
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", ".deleteButton", function (event){
  $(this).parent().fadeOut(500, function () {
    // these 'this's are not the same - that from up is to span, that down is for its parent, li
    $(this).remove();
  });
  event.stopPropagation();
});

// click on edit icon to edit
$("ul").on("click", ".editButton", function (event){
  var li = $(this).parent();
  var textFromLi = li.text();
  textFromLi = textFromLi.trim();
  // var testLi = $('#test');
  var parent = $(this).parent();


  li.html(inputStructure[0]);
  var inputToEdit = li.find("input");
  inputToEdit.attr("value", textFromLi);
  inputToEdit.focus();

  function saveChangedTodo() {
    parent.html(liStructure[0] + inputToEdit.val() + liStructure[1]);
    parent.off();
    console.log(parent);
  }

  $(parent.find('.confirm')).on("click", function () {
    saveChangedTodo();
    // console.log(inputToEdit.val());
  });
  $(parent.find("input[type='text']")).keypress(function (event) {
    if (event.which === 13) {
      saveChangedTodo();
    }
  })

  // console.log(parent.find('.confirm'));
  // console.log(inputToEdit.val());



  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li>" + liStructure[0] + todoText + liStructure[1] + "</li>");
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
