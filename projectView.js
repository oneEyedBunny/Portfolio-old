
var projectView= {};
projectView.uniqueTech= [];

//function to populate the filter with a unique set of values from the raw data arrays
projectView.createFilterList = function () {
  //creating an empy array to hold the values of all the merged arrays
  var allTechUsed= [];
  rawData.forEach(function (project) {
    allTechUsed = $.merge(allTechUsed, project.tech);
  });
  //removing duplicate values and placing only unique items in a final array
  $.each(allTechUsed, function(index, el){
    if($.inArray(el, projectView.uniqueTech) === -1) {
      projectView.uniqueTech.push(el);
    }
  });
};

projectView.populateFilterList = function () {
  $.each(projectView.uniqueTech, function (index, tech) {
    $('#tech-filter').append($('<option></option>').val(tech).text(tech));
  })
};

projectView.handleFilter = function () {
  $('#tech-filter').on('change', function() {
    if($(this).val()) {
      console.log($(this).val());
      $('.projectItem').hide();
      //$(`.projectItem[data*= "${$(this).val()}"]`).show(); //using template literal
      $('.projectItem[data-bananas*="'+$(this).val()+'"]').show(); //using string contate
    }
  });
}

$(document).ready(function() {
  projectView.createFilterList();
  projectView.populateFilterList();
  projectView.handleFilter();
});
