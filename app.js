// constructor for my projects object
var Project = function (projects) {
  name = projects.name;
  img = projects.img;
  desc = projects.desc;
  gitRepo = projects.gitRepo;
  tech = projects.tech;
}
// object of my work projects
var projects = [
  {name: "Market Analysis App",
  img: "images/XXX.jpg",
  desc: "Blahblah",
  gitRepo:"https://github.com/oneEyedBunny/market-analysis-app",
  tech: "Blah",
},
  {name: "Crop Swap",
  img: "images/crop_swap.jpg",
  desc: "Blahblah",
  gitRepo:"https://github.com/oneEyedBunny/Crop-Swap",
  tech: "Focus was on JavaScript",
},
  {name: "Cookie Stand App",
  img: "images/XXX.jpg",
  desc: "Blahblah",
  gitRepo:"https://github.com/oneEyedBunny/cookie-stand",
  tech: "Blah",
},
]
//function that shows menu when user clicks on hamburger
$(document).ready(function() {
  $('.icon-menu').on("click", function(){
    $('.page-nav').toggle();
  });
});
