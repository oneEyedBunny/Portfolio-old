
var projectView= {};
projectView.uniqueTech= []; //array to hold the final list of tech for the drop down box

//function to populate the filter with a unique set of values
projectView.createFilterList = function () {
  var allTechUsed= []; //array to hold all the tech values from the merged JSON data
  rawData.forEach(function (project) {
    allTechUsed = $.merge(allTechUsed, project.tech); //merges 2 arrays
  });
  //removing duplicate values and placing only unique items in a final array
  $.each(allTechUsed, function(index, el){
    if($.inArray(el, projectView.uniqueTech) === -1) {
      projectView.uniqueTech.push(el);
    }
  });
};
// function to populate the drop down list
projectView.populateFilterList = function () {
  $.each(projectView.uniqueTech, function (index, tech) {
    $('#tech-filter').append($('<option></option>').val(tech).text(tech));
  })
};
//function to show what the user selects froom drop down list
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
