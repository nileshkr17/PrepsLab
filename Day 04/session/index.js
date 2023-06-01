// const menu =[
//     {
//         id:1,
//         title:"Biriyani",
//         category:"Lunch",
//         price:70,
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1200px-%22Hyderabadi_Dum_Biryani%22.jpg",
//         desc:"Biriyani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties."
//     },
//     {
//         id:2,
//         title:"Chicken Soup",
//         category:"Breakfast",
//         price:40,
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chicken_Noodle_Soup.jpg/1200px-Chicken_Noodle_Soup.jpg",
//         desc:"Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients. The classic chicken soup consists of a clear chicken broth, often with pieces of chicken or vegetables; common additions are pasta, noodles, dumplings, or grains such as rice and barley."
//     },
//     {
//         id:3,
//         title:"Shawarma",
//         category:"Snacks",
//         price:89,
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0_%D0%B2_%D0%BB%D0%B0%D0%B2%D0%B0%D1%88%D0%B5_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_2_%28cropped%29.jpg/1024px-%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0_%D0%B2_%D0%BB%D0%B0%D0%B2%D0%B0%D1%88%D0%B5_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_2_%28cropped%29.jpg",
//         desc:"Shawarma is a dish in Middle Eastern cuisine consisting of meat cut into thin slices, stacked in a cone-like shape, and roasted on a slowly-turning vertical rotisserie or spit. Originally made of lamb or mutton, today's shawarma may also be chicken, turkey, beef, or veal."
//     },
//     {
//         id:4,
//         title:"Chowmein",
//         category:"Dinner",
//         price:50,
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg/330px-Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg",
//         desc:"Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or tofu; the name is a romanization of the Taishanese chāu-mèing. The dish is popular throughout the Chinese diaspora and appears on the menus of most Chinese restaurants."
//     },
//     {
//         id:5,
//         title:"Paw Bhaji",
//         category:"Lunch",
//         price:60,
//         img:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
//         desc:"Pav bhaji is a fast food dish from India, consisting of a thick vegetable curry, fried and served with a soft bread roll. Its origins are in the state of Maharashtra. Pav bhaji was later served at restaurants throughout the state of Maharashtra."    
//     },
//     {
//         id:6,
//         title:"Fried rice",
//         category:"Dinner",
//         price:50,
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg/1280px-Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg",
//         desc:"Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish."
//     }
// ]


fetch("http://localhost:3004/menu",{
    method: "GET",
}).then((response)=>response.json()).then((menu)=>{
    console.log(menu);
    


const menu_box = document.getElementById("menu-box");

for(let i =0; i<menu.length;i++)
{
    const div = document.createElement("div");
    div.style.bImageDataackgroundColor = "#f1f2f4";
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
    const desc = document.createElement("p");
    desc.innerText = menu[i].desc;
    desc.style.textAlign = "justify";
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
    div.append(image,menuTitle,price,button,desc,read);
    menu_box.append(div);
   
}
    
})








