const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector('.list');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const listUL = listDiv.querySelector('ul');
const lis = listUL.children;
const firstListItem = listUL.firstElementChild;
const lastListItem = listUL.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = "up";
    up.textContent = "Up";
    //add up button element to list
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);

}

for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}


listUL.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == "up") {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);

            }

        }
        if (event.target.className == "down") {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }


        }
    }

});



button.addEventListener('click', () => {
    description.innerHTML = input.value;



});

toggleList.addEventListener('click', () => {
    //hide the divList


    if (listDiv.style.display == "none") {

        toggleList.textContent = "Hide List";
        listDiv.style.display = "block";

    } else {

        toggleList.textContent = "Show List";
        listDiv.style.display = "none";

    }


})

addItemButton.addEventListener('click', () => {
    //add to the unordered list
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(li);
    //autoclear
    addItemInput.value = "";
    //add buttons to it



})