// function that fetches and renders the project work.
(function(module) {
  const workController = {};
  
  workController.index = function () {
    $('#tech-filter').show();
    $('#body-of-work').show();
    $('#about-me').hide();
    $('footer').hide();
  };

  module.workController = workController;
})(window);


  // function that hides all main section elements, and then reveals just the #about-me section
(function(module) {
  const aboutController = {};

  aboutController.index = function () {
    $('#tech-filter').hide();
    $('#body-of-work').hide();
    $('#about-me').show();
    $('footer').show();
  };

  module.aboutController = aboutController;
})(window);
