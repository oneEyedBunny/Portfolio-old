//function that shows menu when user clicks on hamburger icon
$(document).ready(function() {
  $('.icon-menu').on("click", function(){
    $('.page-nav').toggle();
  });
});

var projects=[];

// constructor for my projects object
var Project = function (projectObject) {
  this.title = projectObject.title;
  this.img = projectObject.img;
  this.desc = projectObject.desc;
  this.gitRepo = projectObject.gitRepo;
  this.tech = projectObject.tech;
}

Project.prototype.toHtml = function(project) {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');//ensures the template with the data will show
  $newProject.find('header h2').text(this.title);
  $newProject.find('img').attr('src', this.img);
  $newProject.find('p#github').attr('href', this.gitRepo);
  $newProject.find('p#description').html(this.desc);
  return $newProject;
}

//function that pushes a new project object to the projects array
rawData.forEach(function(coconuts) {
  projects.push(new Project(coconuts));
});

projects.forEach(function(pineapple) {
  $('#body-of-work').append(pineapple.toHtml());
});
