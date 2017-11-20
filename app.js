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
  return templateFiller(this);
}

 
//function that gets the data from the server, then pushes a new project object (coconut) to the projects array. Loops through it to publish it to the body
var rawData = [];
$.getJSON('/raw-data.json', function(pineapple) {
  rawData= pineapple;
  rawData.forEach(function(coconuts) {
    projects.push(new Project(coconuts));
   });
   projects.forEach(function(banana) {
    $('#body-of-work').append(banana.toHtml());
  });
 });






