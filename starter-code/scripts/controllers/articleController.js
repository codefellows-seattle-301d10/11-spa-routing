(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO:DONE Use your DOM skills to reveal only the articles section! */
    $('.tab-content').hide();
    console.log('articleController we just hid some shit');
    $('#articles').fadeIn();
  };
  module.articleController = articleController;
})(window);
