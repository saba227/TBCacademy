// Variables for DOM manipulation
let mobbileMenuIcon = document.getElementById("menuIcon");
let coursesDiv = document.getElementById("cardContainer");
let accordion = document.querySelectorAll(".accordion-header");

// Window manipulation varibles
let scrollYPos = window.scrollY;
let windowSize = window.innerHeight;

// Courses data.
const coursesData = [
  {
    id: 1,
    url: "./images/1.webp",
    title: "iOS Development",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 2,
    url: "./images/2.webp",
    title: "React",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 3,
    url: "./images/3.webp",
    title: "Intro to Python",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 4,
    url: "./images/4.webp",
    title: "Advanced Python",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 5,
    url: "./images/5.webp",
    title: "Advanced Cybersecurity Course",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 6,
    url: "./images/6.webp",
    title: "ToT - Training of Trainers",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 7,
    url: "./images/7.webp",
    title: "Blockchain",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 8,
    url: "./images/8.webp",
    title: "DevOps",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
  {
    id: 9,
    url: "./images/9.webp",
    title: "Information Security Governance",
    description: "რეგისტრაცია დასრულებულია",
    button: "კურსის დეტალები",
  },
];

// Header scroll effects
const webScreenScroll = (scrollPos) => {
  if (scrollPos > 0) {
    document.getElementById("header").style.opacity = "0.9";
  } else {
    document.getElementById("header").style.opacity = "1";
  }
};

const mobileScreenScroll = () => {
  let currentScrollPos = window.scrollY;

  if (scrollYPos < 0) {
    scrollYPos = 0;
  } else if (scrollYPos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
    mobbileMenuIcon.style.top = "26px";
  } else {
    document.getElementById("header").style.top = "-80px";
    mobbileMenuIcon.style.top = "-80px";
  }
  scrollYPos = currentScrollPos;
};

// Menu version selection ternary operator
const handleScroll = () => {
  const currentWindowSize = window.innerWidth;
  const scrollPos = window.scrollY;

  if (currentWindowSize > 768) {
    webScreenScroll(scrollPos);
  } else {
    mobileScreenScroll();
  }
};

window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", (e) => {
  let width = e.target.innerWidth;
  // Two menu version for dekstop and mobile devises
  handleScroll;

  // remove slider fade effect when screen is less 576px.
  if (width > 576) {
    document.getElementById("carousel").classList.remove("carousel__fade");
  }
});

// Add toggle menu function
mobbileMenuIcon.addEventListener("click", () => {
  let toggleMenu = document.getElementById("mobbileMenu");
  toggleMenu.classList.toggle("active");
  document.body.classList.toggle("hidden");
  document.querySelector("main").classList.toggle("hidden");

  let menuLines = document.querySelectorAll(".menu-icon div");
  let [one, two, three] = menuLines;
  one.classList.toggle("active");
  two.classList.toggle("active");
  three.classList.toggle("active");
});

// add courses cards
const courseCard = (url, title, description, button) => {
  return `<div class="card">
              <img src="${url}" alt="${title} course image" />
              <div class="card-information">
               <div>
                    <h5>${title}</h5>
                    <p>${description}</p>
                </div>
                <a>
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__12a0b52d-d2f4-498f-8668-ef4342a659a0 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
                        <g>
                            <path fill="#ffffff" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
                        </g>
                     </svg>
                    <span>${button}</span>
                </a>
              </div>
            </div>`;
};

// Move cards to parent tag
coursesData.forEach((itm) => {
  return (coursesDiv.innerHTML += courseCard(
    itm.url,
    itm.title,
    itm.description,
    itm.button
  ));
});

// Add partner slider
let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel_item");
const sliderIndicator = document.querySelectorAll(".slider-indicator div"); // carousel indicator
const maxIndex = carouselItems.length - 1;

// remove slider fade effect when screen is less 576px.
if (windowSize < 576) {
  document.getElementById("carousel").classList.remove("carousel__fade");
}

// slider indicator function
const updateIndicator = () => {
  sliderIndicator.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
};

const showItem = (index, direction) => {
  carouselItems.forEach((carouselItem) => {
    carouselItem.classList.remove("carousel_item-active");
    carouselItem.classList.remove("carousel_item-active-from-right");
    carouselItem.classList.remove("carousel_item-active-from-left");
  });

  if (direction == "next") {
    document
      .querySelector(".carousel_item:nth-child(" + (index + 1) + ")")
      .classList.add("carousel_item-active-from-right");
  } else {
    document
      .querySelector(".carousel_item:nth-child(" + (index + 1) + ")")
      .classList.add("carousel_item-active-from-left");
  }

  setTimeout(() => {
    document
      .querySelector(".carousel_item:nth-child(" + (index + 1) + ")")
      .classList.add("carousel_item-active");
  }, 20);

  // Call slider indicator function
  updateIndicator();
};

const nextSlide = () => {
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  showItem(currentIndex, "next");
};

const prevSlide = () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  showItem(currentIndex, "prev");
};

let autoSlideInterval = setInterval(nextSlide, 3000);

const nextSlideClick = () => {
  clearInterval(autoSlideInterval);
  nextSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
};

const prevSlideClick = () => {
  clearInterval(autoSlideInterval);
  prevSlide();
  autoSlideInterval = setInterval(nextSlide, 3000);
};

// swipe area for mobbile version
const swipeElement = document.getElementById("carousel");
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchEndX = event.touches[0].clientX;
};

swipeElement.addEventListener("touchstart", handleTouchStart, false);
swipeElement.addEventListener("touchmove", handleTouchMove, false);
swipeElement.addEventListener("touchend", function (event) {
  handleSwipe();
});

const handleSwipe = () => {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 0) {
    prevSlideClick();
  } else if (swipeDistance < 0) {
    nextSlideClick();
  }
};

// Add accordion function
accordion.forEach((item, index) => {
  item.addEventListener("click", () => {
    const content = document.getElementById(`content${index}`);
    const arrows = document.getElementById(`arrow${index}`);

    content.classList.toggle("active");
    arrows.classList.toggle("active");

    const accordionItems = document.querySelectorAll(".accordion-item");
    const arrowItems = document.querySelectorAll(".arrow");

    accordionItems.forEach((item) => {
      if (item !== content.parentNode) {
        item.querySelector(".accordion-content").classList.remove("active");
      }
    });

    arrowItems.forEach((itm) => {
      if (itm.id !== arrows.id) {
        itm.classList.remove("active");
      }
    });
  });
});
