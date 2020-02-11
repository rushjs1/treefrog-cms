function initButtons() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("acitve");
    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());
  });
  $("#home").click(function() {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("acitve");

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartContent());
  });
}

$(document).ready(function() {
  initButtons();
});
