var guides = [
//enrollment
  {
    title: "Freshman Enrollment Walkthrough",
    category: "enrollment",
    summary: "Official 5-step onboarding procedure for incoming first-year college students.",
    step1: "1. Confirm Admission: Proceed to the College Admissions and Aid Office (Bellarmine 1st Floor).",
    step2: "2. Medical Check: Visit the University Infirmary (Bellarmine-Campion 1st Floor) for medical/dental procedures.",
    step3: "3. Schedule & Assessment: Log into MyAdZU Portal for class schedules (Scholars: print assessment form at Registrar).",
    step4: "4. Payment & ID: Validate fees at Finance (LRC 1st Floor) and process your ID at Office of Student Affairs.",
    image1: "../images/guides/freshman-1.jpg",
    image2: "../images/guides/freshman-2.jpg"
  },
  {
    title: "Old Student Re-enrollment Procedure",
    category: "enrollment",
    summary: "Semester registration procedure for continuing undergraduate students.",
    step1: "1. Pre-clearance Check: Clear all office hold tags on your MyAdZU Portal profile prior to assessment.",
    step2: "2. Online Consultation: Conduct subject/course consultation via portal or consult your Department Chair.",
    step3: "3. Assessment: Proceed to Registrar's Office C104 D window (Scholars: Main College Registrar Window).",
    step4: "4. Validation: Pay and validate fees at the Finance Office, then confirm validation status on MyAdZU Portal.",
    image1: "../images/guides/oldstudent-1.jpg",
    image2: "../images/guides/oldstudent-2.jpg"
  },
  {
    title: "Program Shifting Process (Shiftees)",
    category: "enrollment",
    summary: "Procedure for transferring from one academic program/department to another.",
    step1: "1. Fill out the Program Change Form via MyAdZU Portal or home department and secure approval.",
    step2: "2. Verify CET results at Admissions and Aid Office.",
    step3: "3. Submit form to receiving department for evaluation, consult, then assess at Registrar's Office.",
    step4: "4. Pay fees at Finance Office and check schedule status on MyAdZU Portal.",
    image1: "../images/guides/shifting-1.jpg",
    image2: "../images/guides/shifting-2.jpg"
  },

  //portal
  {
    title: "MyAdZU Portal Access & Usage Guide",
    category: "portal",
    summary: "How to access university services, academic records, schedules, and clearance details online.",
    step1: "1. Portal Access: Open browser, visit portal.adzu.edu.ph, and select 'Sign in with Google' using your @adzu.edu.ph email.",
    step2: "2. Profile & Records: Open Student Profile to check personal info or access 'Academic Records' for midterm/final grades.",
    step3: "3. Class Schedule & Clearance: Check registered subject schedules and view live hold tags under 'Clearance Details'.",
    step4: "4. Faculty Evaluation: Complete required end-of-term online teacher evaluations to prevent clearance holds.",
    image1: "../images/guides/portal-1.jpg",
    image2: "../images/guides/portal-2.jpg"
  },
//clearance
  {
    title: "Moving Up Clearance Requirements",
    category: "clearance",
    summary: "End-of-term obligations required for advancing to the next academic level.",
    step1: "1. Academic & Attendance: Complete all exams, assignments, and satisfy AdZU attendance policies.",
    step2: "2. Financial Obligations: Settle all tuition fees, miscellaneous balances, and pending penalties in full at Finance.",
    step3: "3. Library & Labs: Return all borrowed books and lab equipment; settle outstanding library fines.",
    step4: "4. Admin Compliance: Complete online faculty evaluations on MyAdZU and submit Form 137 / Good Moral documents.",
    image1: "../images/guides/clearance-moveup-1.jpg",
    image2: "../images/guides/clearance-moveup-2.jpg"
  },
  {
    title: "Graduation Clearance & Exit Procedures",
    category: "clearance",
    summary: "Mandatory clearance steps for graduating senior students.",
    step1: "1. Academic Completion: Complete all degree requirements including internships, thesis, or capstone projects.",
    step2: "2. Zero Balance: Ensure zero financial outstanding balance across all university offices.",
    step3: "3. Graduation Form & Exit Survey: Submit graduation application form and complete institutional exit survey.",
    step4: "4. Non-Compliance Warning: Uncleared students will be ineligible to join graduation or receive official diplomas/TOR.",
    image1: "../images/guides/grad-clearance-1.jpg",
    image2: "../images/guides/grad-clearance-2.jpg"
  }
];

function showGuides() {
  var container = document.getElementById("guidesList");
  var searchElem = document.getElementById("guideSearch");
  var categoryElem = document.getElementById("guideCategorySelect");

  if (!container || !searchElem || !categoryElem) return;

  var searchInput = searchElem.value.toLowerCase();
  var categoryInput = categoryElem.value;
  var htmlContent = "";

  for (var i = 0; i < guides.length; i++) {
    var g = guides[i];

    var matchesSearch = g.title.toLowerCase().indexOf(searchInput) !== -1 || 
                          g.summary.toLowerCase().indexOf(searchInput) !== -1;
    var matchesCategory = (categoryInput === "all") || (g.category === categoryInput);

    if (matchesSearch && matchesCategory) {
      htmlContent += '<div class="guide-card">';
      htmlContent += '  <span class="badge">' + g.category.toUpperCase() + '</span>';
      htmlContent += '  <h3>' + g.title + '</h3>';
      htmlContent += '  <p class="guide-summary">' + g.summary + '</p>';
      htmlContent += '  <div class="guide-steps">';
      htmlContent += '    <div class="step-item">' + g.step1 + '</div>';
      htmlContent += '    <div class="step-item">' + g.step2 + '</div>';
      htmlContent += '    <div class="step-item">' + g.step3 + '</div>';
      if (g.step4) {
        htmlContent += '    <div class="step-item">' + g.step4 + '</div>';
      }
      htmlContent += '  </div>';
      htmlContent += '  <div class="location-images">';
      htmlContent += '    <div class="img-placeholder">';
      htmlContent += '      <img src="' + g.image1 + '" alt="Diagram 1" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';">';
      htmlContent += '      <span class="img-label" style="display:none;">Diagram 1 Placeholder</span>';
      htmlContent += '    </div>';
      htmlContent += '    <div class="img-placeholder">';
      htmlContent += '      <img src="' + g.image2 + '" alt="Diagram 2" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';">';
      htmlContent += '      <span class="img-label" style="display:none;">Diagram 2 Placeholder</span>';
      htmlContent += '    </div>';
      htmlContent += '  </div>';
      htmlContent += '</div>';
    }
  }

  if (htmlContent === "") {
    container.innerHTML = '<p style="text-align:center; font-size: 14px; color: #888; width:100%;">No guides found.</p>';
  } else {
    container.innerHTML = htmlContent;
  }
}

window.onload = function() {
  showGuides();

  var searchElem = document.getElementById("guideSearch");
  var categoryElem = document.getElementById("guideCategorySelect");

  if (searchElem) searchElem.addEventListener("keyup", showGuides);
  if (categoryElem) categoryElem.addEventListener("change", showGuides);
};