(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    $('.tab-content').fadeOut();
    $('#filters').fadeIn();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
