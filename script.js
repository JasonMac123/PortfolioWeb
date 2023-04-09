const skills = document.getElementById("skills");
const about = document.getElementById("about");
const project = document.getElementById("projects");
const contact = document.getElementById("contact");

const sectionArray = [about, skills, project, contact];

const links = document.getElementsByClassName("links");
[...links].forEach((element, index) => {
  element.addEventListener("click", () => {
    sectionArray[index].scrollIntoView();
  });
});
