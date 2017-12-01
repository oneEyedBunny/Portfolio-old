
var projectView= {};
projectView.uniqueTech= []; //empty array to hold the results of the duplicate function below

//function to populate the filter with a unique set of values from the raw data arrays
projectView.createFilterList = function () {
  //creating an empty array to hold the values of all the merged arrays
  var allTechUsed= [];

  Project.all.forEach(function (project) {
    allTechUsed = $.merge(allTechUsed, project.tech);
  });
  //removing duplicate values and placing only unique items in a final array
  $.each(allTechUsed, function(index, el){
    if($.inArray(el, projectView.uniqueTech) === -1) {
      projectView.uniqueTech.push(el);
    }
  });
};

//function to populate the filter list of items
projectView.populateFilterList = function () {
  $.each(projectView.uniqueTech, function (index, tech) {
    $('#tech-filter').append($('<option></option>').val(tech).text(tech));
  })
};

//function that displays projects based on what the user selected in the drop-down
projectView.handleFilter = function () {
  $('#tech-filter').on('change', function() {
    if($(this).val()) {
      console.log($(this).val());
      $('.projectItem').hide();
      //$(`.projectItem[data*= "${$(this).val()}"]`).show(); //using template literal
      $('.projectItem[data-bananas*="'+$(this).val()+'"]').show(); //using string concate
    }
  });
}

projectView.initIndexPage = function () {
    projectView.createFilterList();
    projectView.populateFilterList();
    projectView.handleFilter();
}

$(document).ready(function() {
    Project.fetchAll(projectView.initIndexPage);
});
