menu_icon = document.getElementById("menu_icon")
cancel_icon = document.getElementById("cancel_icon")
navigation = document.getElementById("navigation")
navItems = document.querySelectorAll(".navi");



        
menu_icon.addEventListener("click",function(){
    navigation.classList.add("active")
    menu_icon.style.display = "none"
    document.body.style.overflow = "hidden";
})

cancel_icon.addEventListener("click",function(){
    navigation.classList.remove("active")
    menu_icon.style.display = "block"
    document.body.style.overflowY = "auto"; 
    document.body.style.overflowX = "hidden"; 
})

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
    menu_icon.style.display = "block";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  });
});



const progressContainer = document.querySelector(".progress_group");

const Courses = [
    {Course: "Python", Percent: 80, Color: "#fa1302"},
    {Course: "Django", Percent: 75, Color: "#fa1302"},
    {Course: "MySQL", Percent: 70, Color: "#fa1302"},
    {Course: "HTML", Percent: 85, Color: "#fa1302"},
    {Course: "CSS", Percent: 70, Color: "#fa1302"},
    {Course: "JavaScript", Percent: 60, Color: "#fa1302"},
];      

// Build progress circles
Courses.forEach((Course) => {
  progressContainer.innerHTML += `
    <div class="progress">
      <div class="progress_circle">
        <p class="course_value" style="color:white">0%</p>
      </div>
      <h2 style="color:white">${Course.Course}</h2>
    </div>
  `;
});

const progressGroup = document.querySelectorAll(".progress");

// function to animate one circle
function animateProgress(progress, index) {
  let progressStartValue = 0;
  const progressEndValue = Courses[index].Percent;
  const speed = 20;

  const courseValue = progress.querySelector(".course_value");
  const circle = progress.querySelector(".progress_circle");

  // reset before replay
  courseValue.innerHTML = "0%";
  circle.style.background = `conic-gradient(${Courses[index].Color} 0deg, #000 0deg)`;

  const progressTimer = setInterval(() => {
    progressStartValue++;

    courseValue.innerHTML = progressStartValue + "%";

    const degrees = 3.6 * progressStartValue;
    circle.style.background = `conic-gradient(${Courses[index].Color} ${degrees}deg, #000 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progressTimer);
    }
  }, speed);
}

// observer to restart on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const index = [...progressGroup].indexOf(progress);
      animateProgress(progress, index);
    }
  });
}, { threshold: 0.5 });

// observe each progress element
progressGroup.forEach(progress => observer.observe(progress));





const slides = document.querySelectorAll(".progress");
const arrowNext = document.getElementById("arrow_next");
const arrowPrevious = document.getElementById("arrow_previous");

var itemsPerPage = 3

function showSlide(i) {
  progressContainer.style.transform = `translateX(-${i * (105 / itemsPerPage)}%)`;
}

let index = 0; // current slide index
const totalSlides = slides.length-2; // number of slides

arrowNext.addEventListener("click", () => {
  index = (index + 1) % totalSlides; // loop forward
  showSlide(index);
});

arrowPrevious.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides; // loop backward
  showSlide(index);
});
