let menu = document.querySelector(".menu");
let but = document.querySelector(".back");
let links = document.querySelectorAll(".link");
let ham = document.querySelector(".hamburger");

function show() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   } else {
      menu.classList.add("active");
   }
}

function back() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   }
}

for (let link of links) {
   link.addEventListener("click", back);
}

but.addEventListener("click", back);
ham.addEventListener("click", show);

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}

const sectionObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 // Adjust the threshold as needed
});

const sectionElements = document.querySelectorAll("section");
sectionElements.forEach(section => {
  sectionObserver.observe(section);
});

const footerObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 // Adjust the threshold as needed
});

const footerElements = document.querySelectorAll("footer");
footerElements.forEach(footer => {
  footerObserver.observe(footer);
});
