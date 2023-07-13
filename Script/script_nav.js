// Create the nav bar
const nav = document.createElement("nav");
nav.className = "top-nav";

const links = document.createElement("ul");
nav.appendChild(links);
links.className = "link-list";

// Create all link on the nav bar
const home = document.createElement("a");
home.className = "nav-link";
home.textContent = "HOME";
home.href = "index.html";
links.appendChild(home);

const aboutMe = document.createElement("a");
aboutMe.className = "nav-link";
aboutMe.textContent = "ABOUT ME";
aboutMe.href = "about_me.html";
links.appendChild(aboutMe);

const project = document.createElement("a");
project.className = "nav-link";
project.textContent = "PROJECT";
project.href = "project.html";
links.appendChild(project);

const devLog = document.createElement("a");
devLog.className = "nav-link";
devLog.textContent = "DEVELOPEMENT LOG";
devLog.href = "dev_log.html";
links.appendChild(devLog);

document.body.prepend(nav);
