(function(module) {
  const repos = {};

  repos.all = []; //array that holds repo objects

  //function that gets the repos from github using my token and populates it into rep.all
  repos.requestRepos = function(callback) {
      $.ajax(`https://api.github.com/user/repos?access_token=${token}`)
      .then(
        results => {
          repos.all = results;
          console.log(results);
          callback();
        }
      )
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);


//FUNCTION
(function(module) {
    const repoView = {};
    var render = Handlebars.compile($('#repo-template').html());
    repoView.index = function() {
      $('#about-me').append(
        repos.with('name').map(render) // Want to filter by a different property other than name?
      );
    };
  
    module.repoView = repoView;
  })(window);