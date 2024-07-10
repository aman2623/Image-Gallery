let scrollContainer = document.querySelector(".gallary");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

scrollContainer.addEventListener("whell", (event) => {
  event.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";
  scrollContainer.scrollLeft += event.deltaY;
 
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
prevBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});