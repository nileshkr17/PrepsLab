
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

    const desc = document.createElement("p");
    desc.innerText = menu[i].desc;
    desc.style.textAlign = "justify";
   
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
    read.style.color = "white";
   
    read.addEventListener("click",()=>{
        if(desc.style.display === "none")
        {
            desc.style.display = "block";
            read.innerText = "Read Less";
           
        }
        else
        {
            desc.style.display = "none";
            read.innerText = "Read More";
            
        }
    }
    )
    div.append(image,menuTitle,rating,price,button,desc,read);
    menu_box.append(div);
   
}
})
