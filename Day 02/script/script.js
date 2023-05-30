function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  document.getElementById("clickable").addEventListener("click", function(){
    document.getElementById("more").innerHTML = " meaning - its return value is only determined by the input values (it does not use-values outside of those passed to it as input), its return values are always the same given the same input. Pure functions are the way to be as they are much easier to encapsulate, test, maintain, and read. By design, functional components are stateless; meaning they donot have access to state or have a lifcecyle; this was until the addition of hooks in React 16.8. Nowwith hooks, we can use React Functional Components that interact with our state as well. Hooks areamazing and I will be writing another post about hooks in this article series; stay tuned. React workson the component concept that allows us to build components and then compose them together. Our Appcomponent defined here will be our top-level component where we will compose our other components aschildren. I like to think of this as our App shell where we can define components that will be sharedacross our app; things such as our app header, with navigation, authenticated user info, etc; an appfooter if needed, our top-level route definitions if needed; etc. We will build a couple of componentsin this article and add them to this App component. App Header To start, let’s create a header component that will sit at the top of our app; show the app title, a short description, and a couple of navigationlinks. Create a folder inside of ./src named containers; this is where we will place smart “containing”components. ";
});