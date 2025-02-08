import { Viewer } from '@photo-sphere-viewer/core';

'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

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
const modalContent = document.querySelector("[data-modal-content]");
const modalImg = document.querySelector("[data-modal-img]");
const projDesc = document.querySelector("[data-modal-desc]");

const modalTitle = document.querySelector("[data-modal-title]");
const modalThumbnail = document.querySelector("[data-project-thumbnail]");

// modal toggle function
const projectModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  modalBody.scrollTop = 0; // Scroll the modal content to the top
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
      const contentType = content.getAttribute("data-type");

      if (contentType === "image") {
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
      } else if (contentType === "video") {
        const videoElement = document.createElement("video");
        videoElement.src = content.getAttribute("data-src");
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsInline = true;
        videoElement.style.width = "80%";
        videoElement.style.maxHeight = "455px";
        videoElement.style.objectFit = "cover";
        videoElement.style.marginTop = "10px";
        videoElement.style.marginBottom = "10px";
        videoElement.style.borderRadius = "10px";
        videoElement.style.display = "block";
        videoElement.style.marginLeft = "auto";
        videoElement.style.marginRight = "auto";
        modalBody.appendChild(videoElement);
      } else if (contentType === "panorama") {
        // Create a container div for the 360 viewer
        const panoramaContainer = document.createElement("div");
        panoramaContainer.style.width = "80%";
        panoramaContainer.style.height = "500px";
        panoramaContainer.style.margin = "10px auto";
        panoramaContainer.style.borderRadius = "10px";
        modalBody.appendChild(panoramaContainer);

        // Retrieve the panorama source URL from the element
        const panoramaSrc = content.getAttribute("data-src");
        console.log("Panorama URL:", panoramaSrc);

        // Initialize the Viewer using the imported Viewer from @photo-sphere-viewer/core
        const viewer = new Viewer({
          container: panoramaContainer,
          panorama: panoramaSrc,
          defaultYaw: 0,
          navbar: true,
        });
      } else if (contentType === "text") {
        const textElement = document.createElement("div");
        textElement.innerHTML = content.innerHTML;
        textElement.style.paddingTop = "10px";
        textElement.style.textAlign = "left";
        textElement.style.paddingBottom = "10px";
        modalBody.appendChild(textElement);
      }
    });
    modalContent.scrollTop = 0; // Scroll the modal content to the top

    projectModalFunc();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", projectModalFunc);
overlay.addEventListener("click", projectModalFunc);

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
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