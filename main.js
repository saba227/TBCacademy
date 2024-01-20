// Variables for DOM manipulation
let coursesDiv = document.getElementById("cardContainer");

// Data variables
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

// Functions
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
