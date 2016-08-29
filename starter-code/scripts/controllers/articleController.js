(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO:DONE Use your DOM skills to reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn(1500);
  };

  module.articleController = articleController;
})(window);
