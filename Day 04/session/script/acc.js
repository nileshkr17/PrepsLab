const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
  const emailinput = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  fetch("http://localhost:3004/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailinput,
      password: pass,
    })
  });
  console.log(emailinput, pass); 
});
