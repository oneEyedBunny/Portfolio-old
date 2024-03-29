//function that shows menu when user clicks on hamburger icon
$(document).ready(function() {
  $('.icon-menu').on("click", function(){
    $('.page-nav').toggle();
  });
});

// constructor for my projects object
var Project = function (projectObject) {
  this.title = projectObject.title;
  this.img = projectObject.img;
  this.desc = projectObject.desc;
  this.gitRepo = projectObject.gitRepo;
  this.tech = projectObject.tech;
}

Project.all= []; //empty array to hold all the projects

//creating a new project object
Project.prototype.toHtml = function(project) {
  var templateFiller = Handlebars.compile($("#handlebar-template").html());
  return templateFiller(this);
}

//function that gets the data from the server, then pushes a new project object (coconut) to the projects array. Then loops through the projects array to publish the items to the body

Project.fetchAll = function(callback) {
$.getJSON('/raw-data.json', function(pineapple) {
    pineapple.forEach(function(coconuts) {
    Project.all.push(new Project(coconuts));
   });
   Project.all.forEach(function(banana) {
    $('#body-of-work').append(banana.toHtml());
  }); 
  callback()
 });
}






