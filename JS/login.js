const password = document.getElementById("Password");
const email = document.getElementById("email");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (password.value === "" || email.value === "") {
    alert("veuillez remplir tous les champs");
  }
  let result;
  userList.forEach((user) => {
    console.log("user", user);
    if (email.value === user.email && password.value === password.value) {
      result = user;
      console.log("result", result);
      
      window.location.replace("http://127.0.0.1:5500/HTML/addTodo.html");
      sessionStorage.setItem("user", JSON.stringify(result));
    } else {
      alert("email ou mot de passe incorrect");
    }
  });
  if (result !== undefined) {
    alert("Vous êtes connecté");
  }
});
