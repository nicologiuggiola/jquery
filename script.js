$(document).ready(() => {
  // $('p').on('click', function(){
  //     $('p').hide();
  // })

  $.getJSON("./assets/array.json", (array) => {
    $.each(array, (index, value) => {
      $("#main-container").append("<p>" + value + "</p>");
    });

    $("p").each(function (index) {
      $(this).on("click", () => {
        const text = $(this).text();
        $("p:contains(" + text + ")").hide();
      });
    });

    $("p").each(function (index) {
      $(this).mouseenter(() => {
        //const text = $(this).text();
        $("p:contains(" + $(this).text() + ")").css("color", "green");
      });

      $(this).mouseleave(() => {
        //const text = $(this).text();
        $("p:contains(" + $(this).text() + ")").css("color", "");
      });
    });
  });
});

// window.addEventListener('load', () => {

//     document.getElementById('ciao').className = "ciao"

//     document.getElementById('ciao').classList.add()

// });
