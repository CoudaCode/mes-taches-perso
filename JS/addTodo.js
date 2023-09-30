const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const button = document.querySelector('#button');
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

button.addEventListener('click', (e) => {
e.preventDefault();

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  if (
    title.value === "" ||
    description.value === "" ||
    time.value === "" ||
    time.value === ""
  ) {
    alert("veuillez remplir tous les champs");
  }
  let session = sessionStorage.getItem('user');
  session = JSON.parse(session);
  let data = {
    user: session.username,
    tache :{
      title: title.value,
      description: description.value,
      date: date.value,
      time: time.value,
    }
  };
  todoList.push(data)
  
  var json = JSON.stringify(todoList);
  localStorage.setItem("todoList", json);



  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${data.tache.title}</td>
    <td>${data.tache.description}</td>
    <td>${data.tache.date}</td>
    <td>${data.tache.time}</td>
  `;
  todoList.appendChild(newRow);


})



