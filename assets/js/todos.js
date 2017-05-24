// check off specific todos by clicking
var liStructure = [
  "<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> ",
  "<span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span></li>"
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
  console.log($(this).parent().text());

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
