
fetch("http://localhost:3001/menu",{
    method: "GET",
}).then((response)=>response.json()).then((menu)=>{
    console.log(menu);
    
const menu_box = document.getElementById("menu-box");

for(let i =0; i<menu.length;i++)
{
    const div = document.createElement("div");
    div.style.backgroundColor = "#f1f2f4";
    div.style.padding = "10px";
    const image = document.createElement("img");
    image.src=menu[i].img;
    image.alt=menu[i].title;
    image.style.height = "200px";
    image.style.width = "270px";
    const menuTitle = document.createElement("h3");
    menuTitle.innerText = menu[i].title;

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
    deleteBtn.addEventListener("click",()=>{
        fetch(`http://localhost:3001/menu/${menu[i].id}`,{
            method: "DELETE",
        }).then((response)=>response.json()).then((menu)=>{
            alert(`Delete ${menu[i].title} now!` );
        }
        )
    } )
const updateBtn = document.createElement("button");
    updateBtn.id = "updateBtn";
    updateBtn.style.margin = "0 10px 0 10px";
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click",()=>{
        const title = prompt("Enter Title");
        const updateObj = {
            title: title,
            price:menu[i].price,
            description: menu[i].description,
            img:menu[i].img,
            rating: menu[i].rating,
        }
        fetch(`http://localhost:3001/menu/${menu[i].id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                updateObj
              ),
        }).then((response)=>response.json()).then((menu)=>{
            alert(`Update ${menu[i].title} now!` );
        }
        )
    } )
    


    // adding button
    button = document.createElement("button");
    button.style.margin = "0 10px 0 0";
    button.innerText = "Order Now";
    button.addEventListener("click",()=>{
        alert(`Order ${menu[i].title} now!` );
    } )
    const read = document.createElement("button");
    read.innerText = "Read More";
    read.style.backgroundColor = "black";
    read.style.width = "100%";
    read.style.color = "white";
   
    read.addEventListener("click",()=>{
        if(description.style.display === "none")
        {
            description.style.display = "block";
            read.innerText = "Read Less";
           
        }
        else
        {
            description.style.display = "none";
            read.innerText = "Read More";
            
        }
    }
    )
    // div.append(image,menuTitle,rating,price,description,read,deleteBtn);
    div.append(image,menuTitle,rating,price,description,updateBtn,deleteBtn,read);
    menu_box.append(div);
   
}
})
