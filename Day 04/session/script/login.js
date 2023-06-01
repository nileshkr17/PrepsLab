const login = document.getElementById("mybutton");
login.addEventListener("click", () => {
  const emailinput = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (emailinput != "" || pass != "") {
    fetch("http://localhost:3004/employees")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const user = data.find(
          item => item.email == emailinput && item.password == pass
        );
        if (user) {
          alert("Login sucessfull");
          window.location.href = "./home.html";
        } else {
          alert("Invalid credentials");
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    error.innerHTML = "Please fill all the fields";
  }
});
