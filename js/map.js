var locations = [
  // OFFICES
  {
    name: "College Admissions and Aid Office",
    category: "office",
    categoryLabel: "Administrative Office",
    building: "Bellarmine Hall (1st Floor)",
    description: "Handles student admission confirmation, CET verification, and scholarships.",
    image1: "../images/locations/admissions-1.jpg",
    image2: "../images/locations/admissions-2.jpg"
  },
  {
    name: "College Registrar's Office",
    category: "office",
    categoryLabel: "Administrative Office",
    building: "Gonzaga Hall (1st Floor)",
    description: "Main window for subject evaluations, schedule assessment (C104 D Window), and scholar forms.",
    image1: "../images/locations/registrar-1.jpg",
    image2: "../images/locations/registrar-2.jpg"
  },
  {
    name: "Finance Office",
    category: "office",
    categoryLabel: "Administrative Office",
    building: "Learning Resource Center (1st Floor)",
    description: "Handles fee assessments, tuition validation, and account payments.",
    image1: "../images/locations/finance-1.jpg",
    image2: "../images/locations/finance-2.jpg"
  },
  {
    name: "Office of Student Affairs (OSA)",
    category: "office",
    categoryLabel: "Administrative Office",
    building: "Canisius-Gonzaga Building (1st Floor)",
    description: "Manages student ID processing, clearance sign-offs, and student organization accreditation.",
    image1: "../images/locations/osa-1.jpg",
    image2: "../images/locations/osa-2.jpg"
  },
  {
    name: "University Infirmary",
    category: "office",
    categoryLabel: "Administrative Office",
    building: "Bellarmine-Campion Building (1st Floor)",
    description: "Provides medical and dental health procedures for student onboarding and medical clearance.",
    image1: "../images/locations/infirmary-1.jpg",
    image2: "../images/locations/infirmary-2.jpg"
  },
  {
    name: "CSITE Workroom",
    category: "office",
    categoryLabel: "Faculty Workroom",
    building: "Canisius-Gonzaga Building (2nd Floor)",
    description: "Faculty workroom for Computer Science, Information Technology, and Engineering faculty.",
    image1: "../images/locations/csite-1.jpg",
    image2: "../images/locations/csite-2.jpg"
  },

  // FACILITIES & LABS
  {
    name: "Basic & Advanced Computer Laboratories",
    category: "facility",
    categoryLabel: "Campus Facility",
    building: "Canisius-Gonzaga Building (3rd Floor)",
    description: "Equipped PC suites for CS/IT programming classes, practical exams, and software labs.",
    image1: "../images/locations/complab-1.jpg",
    image2: "../images/locations/complab-2.jpg"
  },
  {
    name: "Animation Laboratory",
    category: "facility",
    categoryLabel: "Campus Facility",
    building: "Canisius-Gonzaga Building (2nd Floor)",
    description: "Specialized multimedia workstation lab for digital design and animation classes.",
    image1: "../images/locations/anim-1.jpg",
    image2: "../images/locations/anim-2.jpg"
  },
  {
    name: "Multi-Purpose Covered Courts 1 & 2",
    category: "facility",
    categoryLabel: "Campus Facility",
    building: "Campus Sports Complex",
    description: "Venues for physical education classes, athletic meets, and major university assemblies.",
    image1: "../images/locations/mpcc-1.jpg",
    image2: "../images/locations/mpcc-2.jpg"
  },

  // STUDY AREAS
  {
    name: "College Library",
    category: "study",
    categoryLabel: "Quiet Study Area",
    building: "Learning Resource Center (2nd Floor)",
    description: "Main quiet study zone, research PC terminals, airconditioned reading rooms, and book stacks.",
    image1: "../images/locations/library-1.jpg",
    image2: "../images/locations/library-2.jpg"
  },
  {
    name: "Backfield Kiosks & Benches",
    category: "study",
    categoryLabel: "Quiet Study Area",
    building: "Campus Backfield",
    description: "Open-air shaded kiosks for group study sessions, student meetings, and relaxation.",
    image1: "../images/locations/backfield-1.jpg",
    image2: "../images/locations/backfield-2.jpg"
  },
  {
    name: "Sauras Extension Benches & Kiosks",
    category: "study",
    categoryLabel: "Quiet Study Area",
    building: "Sauras Hall Grounds",
    description: "Outdoor seating area adjacent to the campus cafeteria for quick reviews and dining.",
    image1: "../images/locations/sauras-ext-1.jpg",
    image2: "../images/locations/sauras-ext-2.jpg"
  }
];

function showLocations() {
  var container = document.getElementById("locationList");
  var searchElem = document.getElementById("mapSearch");
  var categoryElem = document.getElementById("categorySelect");

  if (!container || !searchElem || !categoryElem) return;

  var searchInput = searchElem.value.toLowerCase();
  var categoryInput = categoryElem.value;
  var htmlContent = "";

  for (var i = 0; i < locations.length; i++) {
    var loc = locations[i];

    var matchesSearch = loc.name.toLowerCase().indexOf(searchInput) !== -1 || 
                          loc.building.toLowerCase().indexOf(searchInput) !== -1;
    var matchesCategory = (categoryInput === "all") || (loc.category === categoryInput);

    if (matchesSearch && matchesCategory) {
      htmlContent += '<div class="card">';
      htmlContent += '  <span class="badge">' + loc.categoryLabel + '</span>';
      htmlContent += '  <h3>' + loc.name + '</h3>';
      htmlContent += '  <p><strong>Location:</strong> ' + loc.building + '</p>';
      htmlContent += '  <p>' + loc.description + '</p>';
      htmlContent += '  <div class="location-images">';
      htmlContent += '    <div class="img-placeholder">';
      htmlContent += '      <img src="' + loc.image1 + '" alt="Photo 1" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';">';
      htmlContent += '      <span class="img-label" style="display:none;">Photo 1 Placeholder</span>';
      htmlContent += '    </div>';
      htmlContent += '    <div class="img-placeholder">';
      htmlContent += '      <img src="' + loc.image2 + '" alt="Photo 2" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';">';
      htmlContent += '      <span class="img-label" style="display:none;">Photo 2 Placeholder</span>';
      htmlContent += '    </div>';
      htmlContent += '  </div>';
      htmlContent += '</div>';
    }
  }

  if (htmlContent === "") {
    container.innerHTML = '<p style="font-size: 14px; color: #888;">No locations found matching your search.</p>';
  } else {
    container.innerHTML = htmlContent;
  }
}

window.onload = function() {
  showLocations();

  var searchElem = document.getElementById("mapSearch");
  var categoryElem = document.getElementById("categorySelect");

  if (searchElem) searchElem.addEventListener("keyup", showLocations);
  if (categoryElem) categoryElem.addEventListener("change", showLocations);

  var mapImg = document.getElementById("campusMapImage");
  var btnExpand = document.getElementById("btnExpandMap");
  var modal = document.getElementById("mapModal");
  var btnClose = document.getElementById("btnCloseModal");

  function openMapModal() {
    if (modal) modal.style.display = "block";
  }

  function closeMapModal() {
    if (modal) modal.style.display = "none";
  }

  if (mapImg) mapImg.addEventListener("click", openMapModal);
  if (btnExpand) btnExpand.addEventListener("click", openMapModal);
  if (btnClose) btnClose.addEventListener("click", closeMapModal);

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.className === "modal-content-wrapper") {
        closeMapModal();
      }
    });
  }
};