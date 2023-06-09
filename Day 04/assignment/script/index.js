if (localStorage.getItem("userid") === null) {
  const footer = document.getElementById("footer");
  const logout = document.getElementById("logout");
  // logout.innerHTML="login"
  const pagenotfound = document.getElementById("pagenotfound");
  footer.style.display = "none";
  logout.innerHTML = "Login";
  logout.addEventListener("click", () => {
    window.location.href = "./pages/login.html";
  });
  pagenotfound.style.display = "block";
  pagenotfound.style.textAlign = "center";
  pagenotfound.style.marginTop = "100px";
  pagenotfound.style.fontSize = "50px";
} else {
  const user = document.getElementById("id");
  user.innerText = localStorage.getItem("userid");
  console.log(localStorage.getItem("userid"));

  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html";
  });

  fetch("http://localhost:3001/menu", {
    method: "GET",
  })
    .then(response => response.json())
    .then(menu => {
      console.log(menu);

      const menu_box = document.getElementById("menu-box");

      for (let i = 0; i < menu.length; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "#f1f2f4";
        div.style.padding = "10px";

        const image = document.createElement("img");
        //   center the image
        image.style.display = "block";
        image.style.margin = "auto";
        image.addEventListener("click", () => {
          window.location.href = `http://localhost:3001/menu/${menu[i].id}`;
        });

        image.src = menu[i].img;
        image.alt = menu[i].title;
        image.style.height = "200px";
        image.style.width = "270px";
        const menuTitle = document.createElement("h3");
        menuTitle.innerText = menu[i].title;
        // user

        // Price
        const price = document.createElement("h4");
        price.innerText = menu[i].price;
        const rupee = document.createElement("span");
        rupee.innerText = "₹";
        price.prepend(rupee);
        price.style.display = "inline-block";
        price.style.margin = "0 10px 0 0";
        price.style.padding = "5px";
        price.style.borderRadius = "5px";
        price.style.width = "50px";
        price.style.textAlign = "center";
        const description = document.createElement("p");
        description.innerText = menu[i].description;
        description.style.textAlign = "justify";

        // adding rating
        const rating = document.createElement("div");
        rating.style.margin = "0 10px 0 0";
        rating.style.padding = "5px";
        rating.style.borderRadius = "5px";
        rating.style.fontWeight = "bold";
        rating.style.width = "50px";
        rating.style.textAlign = "center";
        rating.innerText = menu[i].rating;
        const star = document.createElement("span");
        star.innerText = "⭐";
        rating.prepend(star);
       

        const deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteBtn";
        deleteBtn.style.margin = "0 10px 0 10px";
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
          fetch(`http://localhost:3001/menu/${menu[i].id}`, {
            method: "DELETE",
          })
            .then(response => response.json())
            .then(menu => {
              alert(`Delete ${menu[i].title} now!`);
            });
        });
        const updateBtn = document.createElement("button");
        updateBtn.id = "updateBtn";
        updateBtn.style.margin = "0 10px 0 10px";
        updateBtn.innerText = "Update";
        updateBtn.addEventListener("click", () => {
          const title = prompt("Enter Title");
          const updateObj = {
            title: title,
            price: menu[i].price,
            description: menu[i].description,
            img: menu[i].img,
            rating: menu[i].rating,
          };
          fetch(`http://localhost:3001/menu/${menu[i].id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
          })
            .then(response => response.json())
            .then(menu => {
              alert(`Update ${menu[i].title} now!`);
            });
        });

        //add to later
        const Later = document.createElement("button");
        Later.innerText = "Eat Later";
        Later.style.backgroundColor = "black";
        Later.style.width = "100%";
        Later.style.color = "white";
        Later.addEventListener("click", () => {
          localStorage.setItem(menu[i].id, JSON.stringify(menu[i]));
          alert(`Added ${menu[i].title} to Eat Later!`);
        });

        // adding button
        button = document.createElement("button");
        button.style.margin = "0 10px 0 0";
        button.innerText = "Order Now";
        button.addEventListener("click", () => {
          alert(`Order ${menu[i].title} now!`);
        });
        const read = document.createElement("button");
        read.innerText = "Read More";
        read.style.backgroundColor = "black";
        read.style.width = "100%";
        read.style.color = "white";

        read.addEventListener("click", () => {
          if (description.style.display === "none") {
            description.style.display = "block";
            read.innerText = "Read Less";
          } else {
            description.style.display = "none";
            read.innerText = "Read More";
          }
        });
        // div.append(image,menuTitle,rating,price,description,read,deleteBtn);
        div.append(
          image,
          menuTitle,
          rating,
          price,
          description,
          updateBtn,
          deleteBtn,
          read,
          Later
        );
        menu_box.append(div);
      }
    });
}
