const html = document.querySelector('html');
const content = document.querySelector('.content');
let count = 1;

//html.onclick = doSomething;


function doSomething() {
    const li = document.createElement('ul');
    li.textContent = 'test ' + count++;
    content.appendChild(li);
}