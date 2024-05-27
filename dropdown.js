let selectedCountry = "world";

document.querySelector(".dropbtn").addEventListener("click", () => {
  document.getElementById("country-dropdown").classList.toggle("show");
});

document.querySelectorAll(".dropdown-item").forEach((e) => {
  e.addEventListener("click", (e) => {
    selectedCountry = e.target.innerHTML;
    document.querySelector(".dropbtn").innerHTML = selectedCountry;
    load(selectedCountry.toLowerCase());
  });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
