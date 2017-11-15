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
//creating a new project object
Project.prototype.toHtml = function(project) {
  var templateFiller = Handlebars.compile($("#handlbar-template").html());
  // var $newProject = $('div.template').clone();
  // $newProject.attr('data-bananas', this.tech);
  // $newProject.removeClass('template');//ensures the template with the data will show
  // $newProject.find('header h2').text(this.title);
  // $newProject.find('img').attr('src', this.img);
  // $newProject.find('.tech-list').text('Technology Used: ' + this.tech.join(', '));
  // $newProject.find('p.github a').attr('href', this.gitRepo);
  // $newProject.find('p.description').html(this.desc);
  // return $newProject;
  return templateFiller(this);
}

//function that pushes a new project object to the projects array
rawData.forEach(function(coconuts) {
  projects.push(new Project(coconuts));
});

//function that loops through the array and appends each article to the page
projects.forEach(function(pineapple) {
  $('#body-of-work').append(pineapple.toHtml());
});
