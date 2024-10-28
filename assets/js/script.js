'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// project variables
const projectsItem = document.querySelectorAll("[data-project-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalBody = document.querySelector("[data-modal-body]");
const modalImg = document.querySelector("[data-modal-img]");
const projDesc = document.querySelector("[data-modal-desc]");

const modalTitle = document.querySelector("[data-modal-title]");
const modalThumbnail = document.querySelector("[data-project-thumbnail]");

// modal toggle function
const projectModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
projectsItem.forEach(item => {
  item.addEventListener("click", function () {

    modalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    projDesc.innerHTML = this.querySelector("[data-project-desc]").innerHTML;

    // Clear existing modal body content
    modalBody.innerHTML = '';

    const projectContent = item.querySelector("[data-project-content]").children;
    Array.from(projectContent).forEach(content => {
      if (content.getAttribute("data-type") === "image") {
        const imgElement = document.createElement("img");
        imgElement.src = content.getAttribute("data-src");
        imgElement.alt = "Project Image";
        imgElement.style.width = "80%";
        imgElement.style.maxHeight = "455px";
        imgElement.style.objectFit = "cover";
        imgElement.style.marginTop = "10px";
        imgElement.style.marginBottom = "10px";
        imgElement.style.borderRadius = "10px";
        imgElement.style.marginLeft = "auto";
        imgElement.style.marginRight = "auto";
        modalBody.appendChild(imgElement);
      } else if (content.getAttribute("data-type") === "text") {
        const textElement = document.createElement("div");
        textElement.innerHTML = content.innerHTML;
        textElement.style.paddingTop = "10px";
        textElement.style.textAlign = "left";
        textElement.style.paddingBottom = "10px";
        modalBody.appendChild(textElement);
      }
    });

    projectModalFunc();

  });

});

// add click event to modal close button
modalCloseBtn.addEventListener("click", projectModalFunc);
overlay.addEventListener("click", projectModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}