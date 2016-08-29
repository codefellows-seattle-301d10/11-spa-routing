(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: ** DONE **: Use your DOM skills to reveal only the about section! */
    $('#about').show();
    $('#articles').hide();
  };

  module.aboutController = aboutController;
})(window);
