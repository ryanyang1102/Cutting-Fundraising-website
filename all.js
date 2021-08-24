// tooltip show
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// click nav&tab go there & click go to form
const form = document.getElementById("form");
function heightToTop(ele) {
  let bridge = ele;
  let root = document.body;
  let height = 0;
  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);

  return height;
}
function goToTab() {
  window.scrollTo({
    top: heightToTop(document.getElementsByClassName("tab-content")[0]) - 90,
    behavior: "smooth"
  });
}
function goForm() {
  window.scrollTo({
    top: heightToTop(form) - 120,
    behavior: "smooth"
  });
}

// mobile btn toggle
let buttonBtn = document.getElementById("buttonBtn");
buttonBtn.style.display = "none";
window.onscroll = function () {
  let t = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(document.documentElement.scrollTop);
  console.log(document.body.scrollTop);
  console.log(heightToTop(document.getElementsByClassName("tab-content")[0]));
  console.log(heightToTop(form));
  if (buttonBtn !== null) {
    if (
      t >
        heightToTop(document.getElementsByClassName("tab-content")[0]) + 650 &&
      t < heightToTop(form) - 210
    ) {
      buttonBtn.style.display = "block";
    } else {
      buttonBtn.style.display = "none";
    }
  }
};

// form validation
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
