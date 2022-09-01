// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1
    }
  }), $(".filters a").click(function () {
    $(".filters .active").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-filter");
    return t.isotope({
      filter: i,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
      }
    }), !1
  });
});


// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}

// data pare

function experienceData() {
  return [
    {
      id: 1,
      company: "NurtureLabs",
      position: "Backend Developer",
      date: "2019 - Present",
      description: [
        "Collecting data from leading social media channels & communities feeding them into NLP models to generate desired output.",
        "Developed the REST APIs for multiple ongoing projects.",
        "Deploying back end apps on EC2 instances using docker."
      ]
    },
    {
      id: 2,
      company: "THE LIVE LEAD",
      position: "Web Developer",
      url: "https://www.thelivelead.com/",
      date: "2018 - 2019",
      description: [
        "Built a fin-tech product for financial advisors and their clients.",
        "Integrated sendgrid mail sending API in the application."
      ]
    },
    {
      id: 3,
      company: "AICTE-UHV",
      position: "Backend Developer",
      date: "2017 - 2018",
      description: [
        "Collaborated with the officials of the All India Council for Technical Education to build a dashboard to track human values workshops records.",
        "Bulk/ individual email sending, printing reports, efficient searching using React integrated with a Django backend."
      ]
    }
  ]
}

function educationData() {
  return [
    {
      id: 1,
      school: "Ajay Kumar Garg Engineering College",
      degree: "Bachelor of Technology",
      major: "Computer Science",
      date: "2019 - Present",
      description: "Completed my Bachelor of Technology in Computer Science with a major in Software Engineering.",
      grade: "CGPA: 7.8"
    },
    {
      id: 2,
      school: "Maharishi Vidya Mandir Sr. Sec. School",
      degree: "XII",
      major: "Maths",
      date: "2017 - 2018",
      description: "Completed my Master of Technology in Computer Science with a major in Software Engineering.",
      grade: "Percentage: 92.8%"
    },
    {
      id: 3,
      school: "Maharisi Vidya Mandir Sr. Sec. School",
      degree: "X",
      major: "Science",
      date: "2015 - 2016",
      description: "Completed my Master of Technology in Computer Science with a major in Software Engineering.",
      grade: "CGPA: 10.0"
    }
  ]
}

function skillsData() {
  return [
    {
      id: 1,
      header: "Programming Languages",
      data: ["C, C++","Python", "GoLang (beginner)"],
      // "<ul><li>C</li><li> C++</li><li>Python</li></ul>",
    },
    {
      id: 2,
      header: "Framework & Libraries",
      data: ["Django","Django RESTFramework", "React.Js",],
    },
    {
      id: 3,
      header: "Web Technologies",
      data: ["HTML", "CSS, SaSS","Javascript, TypeScript",]
    },
    {
      id: 4,
      header: "Tools",
      data: ["Git", "Docker"]
    },
    {
      id: 5,
      header: "Other",
      data: ["AWS, Azure", "Nginx", "Firebase", "Figma"],
    }
  ]
}