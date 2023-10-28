// $(document).ready(function(){
//     $(".show").click(function () {
//       $(".services .no").slideToggle(1000);
//     });
// })

$(document).ready(function () {
  $("#bar").on("click", () => {
    $("#navbar").addClass("active");
  });
  $("#close").on("click", () => {
    $("#navbar").removeClass("active");
  });
});


//loader
  let lod = document.querySelector(".loader");
console.log(lod);
window.onload = function(){
    $(".loader").fadeOut(3000);
}

$(document).ready(function () {
  $("div:first").css("display", "block");
  $("h3").click(function () {
    $(this).next().slideToggle(500);
    $("div").not($(this).next()).slideDown(500);
  });
});
