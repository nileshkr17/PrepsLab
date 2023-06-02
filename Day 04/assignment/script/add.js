const add = document.getElementById("submit");
const error = document.getElementById("error");
const success = document.getElementById("success");
add.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const image = document.getElementById("url").value;
  const rating = document.getElementById("rating").value;
  if (
    title != "" ||
    price != "" ||
    description != "" ||
    image != "" ||
    rating != ""
  ) {
    fetch("http://localhost:3004/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        price: price,
        description: desc,
        image: image,
        rating: rating,
      }),
    }).then((response) => response.json());
    success.innerHTML = "Item added successfully";
    alert("Item added successfully");
    
  }else{
    error.innerHTML = "Please fill all the fields";
    alert("Please fill all the fields");
  }
});
