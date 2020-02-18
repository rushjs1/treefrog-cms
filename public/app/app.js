function initButtons() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");
    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());
  });
  $("#home").click(function(e) {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());
  });
  $(".main-nav").click(function(e) {
    $(".modal").css("display", "block");
    $(".alert-box").html(TREEFROG_SERVICE.getMainModalContent());
    initButtons();
  });
}

$(document).ready(function() {
  initButtons();
});
