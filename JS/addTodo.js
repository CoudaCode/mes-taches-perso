/*const title = document.querySelector('#title');
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
  console.log(todoList)
  console.log(todoList.tache)
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${todoList.tache.title}</td>
    <td>${todoList.tache.description}</td>
    <td>${todoList.tache.date}</td>
    <td>${todoList.tache.time}</td>
    <td><button style="background-color:green; outline:none; border:none;">editer<button/></td>
    <td><button style="background-color:red; outline:none; border:none;">supprimer<button/></td>
  `;
  todoList.appendChild(newRow);
})
*/

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${taskText}
                <button class="deleteTask">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('.deleteTask');
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });
        }
    });
});



