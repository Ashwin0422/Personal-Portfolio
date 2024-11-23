// SnowFall
snowFall.snow(document.querySelector(".home-bg-img-container"), {
    round :true,
    minSize: 1,
    maxSize : 10,
    shadow : true,
    flakeCount : 100,
    flakeColor : "#c7dfea",
    
});

let HamburgerMenu = document.getElementById("HamburgerMenu");
let sideBar = document.getElementById("sideBar");

HamburgerMenu.addEventListener("click", () => {
    sideBar.classList.toggle("d-none");
});


// typing animations 
let typed = new Typed("#typingAni" , {
    strings : ["Full Stack Developer"],
    typeSpeed : 200,
    backSpeed : 200,
    loop:true
})

// switching between pages 

let animationNames = ["animation1","animation2","animation3","animation4","animation5"];
function getAnimations() {
    let randomAnimation = Math.round(Math.random() * animationNames.length) - 1;      
    return randomAnimation
}

let homeSection = document.getElementById("homeSection");
let aboutSection = document.getElementById("aboutSection");
let projectSection = document.getElementById("projectSection");
let contactSection = document.getElementById("contactSection");

let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");
let ProjectBtn = document.getElementById("ProjectBtn");
let contactBtn = document.getElementById("contactBtn");
let spinnerEl = document.getElementById("spinnerEl");

let homeTopBtn = document.getElementById("homeTopBtn");
let aboutTopBtn = document.getElementById("aboutTopBtn");
let ProjectTopBtn = document.getElementById("ProjectTopBtn");
let contactTopBtn = document.getElementById("contactTopBtn");

let prevChecked = [homeBtn, homeSection];

aboutBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    aboutSection.classList.add(animationNames[randomAnimation]);
    aboutSection.classList.remove("d-none");
    aboutBtn.classList.add("icons-checked");

    prevChecked[0] = aboutBtn;
    prevChecked[1] = aboutSection;
});

ProjectBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    projectSection.classList.add(animationNames[randomAnimation]);
    projectSection.classList.remove("d-none");
    ProjectBtn.classList.add("icons-checked");

    prevChecked[0] = ProjectBtn;
    prevChecked[1] = projectSection;
});

contactBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    contactSection.classList.add(animationNames[randomAnimation]);
    contactSection.classList.remove("d-none");
    contactBtn.classList.add("icons-checked");


    prevChecked[0] = contactBtn;
    prevChecked[1] = contactSection;
});

homeBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    homeBtn.classList.add(animationNames[randomAnimation]);
    homeSection.classList.remove("d-none");
    homeBtn.classList.add("icons-checked");

    prevChecked[0] = homeBtn;
    prevChecked[1] = homeSection;
});



aboutTopBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    aboutSection.classList.add(animationNames[randomAnimation]);
    aboutSection.classList.remove("d-none");
    aboutBtn.classList.add("icons-checked");

    prevChecked[0] = aboutBtn;
    prevChecked[1] = aboutSection;
});

ProjectTopBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    projectSection.classList.add(animationNames[randomAnimation]);
    projectSection.classList.remove("d-none");
    ProjectBtn.classList.add("icons-checked");

    prevChecked[0] = ProjectBtn;
    prevChecked[1] = projectSection;
});

contactTopBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    contactSection.classList.add(animationNames[randomAnimation]);
    contactSection.classList.remove("d-none");
    contactBtn.classList.add("icons-checked");


    prevChecked[0] = contactBtn;
    prevChecked[1] = contactSection;
});

homeTopBtn.addEventListener("click" , () => {
    prevChecked[0].classList.remove("icons-checked");
    prevChecked[1].classList.add("d-none");

    let randomAnimation = getAnimations();
    homeBtn.classList.add(animationNames[randomAnimation]);
    homeSection.classList.remove("d-none");
    homeBtn.classList.add("icons-checked");

    prevChecked[0] = homeBtn;
    prevChecked[1] = homeSection;
});

