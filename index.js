import { projects, validateProject, addProject, clearInputs, filterOptions, displayProjects, filterProjects, completeButton, exitButton, createTag } from "./utils.js";
import { ERROR_MESSAGES, FILTERVALUES,MESSAGES } from "./constants.js"


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
let addButton=document.querySelector(".ToDo");
addButton.addEventListener("click",function()
{
  
  let project = {
    name: ProjectName.value,
    technologyUsed: TechnologyUsed.value,
    startingDate: startDate,
    completionDate: completeDate
  }
  let isvalid = validateProject(project);
  if (isvalid) {
    addProject(project);
    console.log(project);
    console.log(projects);
    alert(MESSAGES.SUCCESS);
  }
  
})
let projectdiv=document.querySelector(".myprojects");
projectdiv.addEventListener("click",function()
{
  projectdiv.style.fontSize="40px";
  let filter = document.querySelector(".filter-todo1");
  let index = filter.selectedIndex;
  displayProjects(filter.options[index].value);
})




