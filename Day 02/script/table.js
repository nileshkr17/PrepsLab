const button1 = document.getElementById("clickable1");
const hide = document.getElementById("clickable2");
const table = document.querySelector("tbody");

 button1.addEventListener("click", () => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = "01";
    const td2 = document.createElement("td");
    td2.innerText = "nilesh";
    const td3 = document.createElement("td");
    td3.innerText = "Male";
    tr.append(td1,td2,td3);
    table.append(tr);
});

hide.addEventListener("click", () => {
    const tr = document.querySelector("tr");
    tr.remove();
}
);