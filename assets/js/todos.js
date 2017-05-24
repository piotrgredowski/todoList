// check off specific todos by clicking
var liStructure = [
  "<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> ",
  "<span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span></li>"
];

var inputStructure = [
  "<input class=\"edit\" type=\"text\"></input>"
];

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span:first-of-type", function (event){
  $(this).parent().fadeOut(500, function () {
    // these 'this's are not the same - that from up is to span, that down is for its parent, li
    $(this).remove();
  });
  event.stopPropagation();
});

// click on edit icon to edit
$("ul").on("click", "span:nth-of-type(2)", function (event){
  var li = $(this).parent();
  var textFromLi = li.text();
  textFromLi = textFromLi.trim();
  // var testLi = $('#test');


  li.html(inputStructure[0]);
  var inputToEdit = li.find("input");
  inputToEdit.attr("value", textFromLi);
  inputToEdit.focus();
  console.log(inputToEdit);

  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(liStructure[0] + todoText + liStructure[1]);
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
