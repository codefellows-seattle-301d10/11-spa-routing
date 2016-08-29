(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE-ish Use your DOM skills to reveal only the about section! */
    $('#tab-content').hide();
    $('#about').fadeIn(1500);
  };
  // aboutController.reveal();
  module.aboutController = aboutController;
})(window);
