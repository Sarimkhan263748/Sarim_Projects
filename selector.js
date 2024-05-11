let container = document.getElementById("container");
let colorSelector = document.getElementById("colorSelector");
colorSelector.addEventListener("input",()
=> {
    container.style.background = colorSelector.
    value;
})


