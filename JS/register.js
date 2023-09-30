const username = document.getElementById("username");
const password = document.getElementById("Password");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  // e.preventDefault();
  let userList = JSON.parse(localStorage.getItem('userList')) || [];
  if (
    username.value === "" ||
    password.value === "" ||
    fullname.value === "" ||
    email.value === ""
  ) {
    alert("veuillez remplir tous les champs");
  }

  let data = {
    username: username.value,
    password: password.value,
    fullname: fullname.value,
    email: email.value,
  };

  userList.push(data)

  var json = JSON.stringify(userList);

  localStorage.setItem("userList", json);
  window.location.href = "http://127.0.0.1:5500/HTML/login.html";
});
