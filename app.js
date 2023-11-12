var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // Set aria-expanded to false
      this.setAttribute("aria-expanded", "false");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // Set aria-expanded to true
      this.setAttribute("aria-expanded", "true");
    }
  });
}

document.querySelectorAll("a.scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default action

    const sectionID = this.getAttribute("data-section");
    const section = document.getElementById(sectionID);

    // Scroll smoothly to the section using 'scrollIntoView()'
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function applyChanges() {
  var windowWidth = $(window).width();
  var elem = document.getElementsByClassName("hero-cont")[0];

  $(".enroll").toggle(windowWidth > 991);

  $(".video-wrapper, .small-picture, .about-h3").toggle(windowWidth > 796);

  if (windowWidth > 576) {
    $(".container-fluid")
      .removeClass("container-fluid text-center")
      .addClass("container");
    $(".div-margin").removeClass("div-margin").addClass("div-padd");
    $(".foot").removeClass("container-fluid").addClass("container text-center");
    $(".about-cont")
      .removeClass("container")
      .addClass("container-fluid text-center");
    if ($(elem).hasClass("container")) {
      $(elem).removeClass("container").addClass("container-fluid text-center");
    }
  } else {
    $(".container")
      .removeClass("container")
      .addClass("container-fluid text-center");
    $(".div-padd").removeClass("div-padd").addClass("div-margin");
  }
}

// Apply changes on page load and resize
$(window).on("load resize", applyChanges);
