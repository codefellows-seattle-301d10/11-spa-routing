(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: ** DONE **: Use your DOM skills to reveal only the articles section! */
    $('#articles').show();
    $('#about').hide();
  };

  module.articleController = articleController;
})(window);
