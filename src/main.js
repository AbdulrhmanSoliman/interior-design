// Dark Mode
let pageModeBtn = document.getElementById("page-mode");
let isDarkMode = false;
let lightSvg = `
<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 20 20">
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
`;
let darkSvg = `
<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        </svg>`;
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  pageModeBtn.innerHTML = lightSvg;
  isDarkMode = true;
} else {
  document.documentElement.classList.remove("dark");
}
pageModeBtn.onclick = function () {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    localStorage.theme = "dark";
    pageModeBtn.innerHTML = lightSvg;
  } else {
    localStorage.theme = "light";
    pageModeBtn.innerHTML = darkSvg;
  }
  document.documentElement.classList.toggle("dark");
};

// toggle manu
let toggleBtn = document.getElementById("nav-toggle");
let menuLinks = document.getElementById("navbar-default");

toggleBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
});
// Accrodation toggle
let accrosTitle = document.querySelectorAll(".item-title");
let accrosContent = document.querySelectorAll(".content");
accrosTitle.forEach((title) => {
  title.addEventListener("click", () => {
    let nextContent = title.nextElementSibling;
    if (nextContent.style.maxHeight && nextContent.style.maxHeight !== "0px") {
      console.log(title);
      nextContent.style.maxHeight = "0";
      title.lastElementChild.classList.replace(
        "fa-minus-circle",
        "fa-plus-circle"
      );
    } else {
      nextContent.style.maxHeight = nextContent.scrollHeight + "px";
      title.lastElementChild.classList.replace(
        "fa-plus-circle",
        "fa-minus-circle"
      );
    }
  });
});
//
