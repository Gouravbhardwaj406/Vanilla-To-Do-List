import { projects, validateProject, addProject, clearInputs, filterOptions, displayProjects, filterProjects, completeButton, exitButton, createTag } from "./utils.js";
import { ERROR_MESSAGES, FILTERVALUES, MESSAGES } from "./constants.js"


let ProjectName = document.querySelector("#projectname");
let TechnologyUsed = document.querySelector("#technology");
let startDate, completeDate;
document
  .querySelector("#starting-date")
  .addEventListener("change", function () {
    startDate = this.value;
  });
document
  .querySelector("#completion-date")
  .addEventListener("change", function () {
    completeDate = this.value;
  });

let homeButton = document.querySelector(".home");
homeButton.addEventListener("click", function () {
  homeButton.style.background = "green";
  document.querySelector(".addprojectdiv").style.height = "0px";
  document.querySelector(".addproject").style.background = "#2B1451";
  document.querySelector(".project-list").style.height = "0px";
  document.querySelector(".myprojects").style.background = "#2B1451";

})

let addProjectdiv = document.querySelector(".addproject");
addProjectdiv.addEventListener("click", function () {
  addProjectdiv.style.background = "green";
  document.querySelector(".addprojectdiv").style.height = "500px";
  document.querySelector(".home").style.background = "#2B1451";
  document.querySelector(".project-list").style.height = "0px";
  document.querySelector(".myprojects").style.background = "#2B1451";
})

let projectlist = document.querySelector(".myprojects");
projectlist.addEventListener("click", function () {
  projectlist.style.background = "green";
  document.querySelector(".project-list").style.height = "500px";
  document.querySelector(".home").style.background = "#2B1451";
  document.querySelector(".addproject").style.background = "#2B1451";
  let filter = document.querySelector(".filter-todo1");
  let index = filter.selectedIndex;
  console.log(filter.options[index].value)
  displayProjects(filter.options[index].value);
})

let addButton = document.querySelector(".ToDo");
addButton.addEventListener("click", function () {
  let project = {
    name: ProjectName.value,
    technologyUsed: TechnologyUsed.value,
    startingDate: startDate,
    completionDate: completeDate
  }
  let isValid = validateProject(project);
  if (isValid.valid) {
    addProject(project);
    clearInputs();
    alert(MESSAGES.SUCCESS);
  }
  else {
    alert(isValid.error);
  }
})
filterProjects();





