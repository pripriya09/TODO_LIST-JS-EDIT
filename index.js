

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


let isEditing = false;

form.onsubmit = (e) => {
  e.preventDefault();
  if (isEditing === false) {
    //ADD A NEW LI
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = input.value;
    li.append(span)

    const editButton = document.createElement("span");
    editButton.classList.add("fa-regular", "fa-pen-to-square");

    editButton.addEventListener("click", (e) => {
      input.value = e.target.parentElement.innerText;
      isEditing = e.target.parentElement.innerText
    });

    // li.appendChild(spn1) 
    li.append(editButton);



    const deleteButton = document.createElement("span");
    deleteButton.classList.add("fa-solid", "fa-trash");

    deleteButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    li.append(deleteButton);
    ul.append(li);
  }

  else {
    //EDIT AN EXISTING LI
    const allLi = document.querySelectorAll("li")
    allLi.forEach((li) => {
      if (li.children[0].innerText === isEditing) {
        li.children[0].innerText = input.value
        // console.log(li.children[0]);
      }
    })
    isEditing = false
  }

  clearInput();
};

function clearInput() {
  input.value = "";
  input.focus();
}
  












