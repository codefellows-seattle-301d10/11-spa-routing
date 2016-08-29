(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    $('#articles, #ajax-spinner').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
