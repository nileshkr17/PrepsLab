const button = document.getElementById("mybutton");
const error = document.getElementById("error");
const success = document.getElementById("sucess");
button.addEventListener("click", () => {
  const emailinput = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (emailinput != "" || pass != "") {
    fetch("http://localhost:3004/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        email: emailinput,
        password: pass,
      })
    }) 
  } else {
    error.innerHTML = "Please fill all the fields";
  }
  console.log(emailinput, pass);
});
