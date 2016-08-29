(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: PARTIALLY DONE: Use your DOM skills to reveal only the articles section! */
    $('#articles').show();
    $('section').not('#articles').hide();
  };

  module.articleController = articleController;
})(window);
