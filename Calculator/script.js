let btn = document.querySelectorAll(".btn");
let display = document.getElementById("display");

let clear = document.getElementById("btn-clear");
let equals = document.getElementById("btn-equals");
let backspace = document.getElementById("btn-delete");


btn.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.innerHTML;
        console.log(`Button clicked: ${button.innerHTML}`);
    });
});

clear.addEventListener("click", () => {
    display.value = "";
    console.log("Display cleared");
});

backspace.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
    console.log("Last character deleted");
});

equals.addEventListener("click", () => {

    try {
        display.value = eval(display.value);
        console.log(`Result: ${display.value}`);
    } catch (error) {
        display.value = "Error";
        console.error("Error in calculation:", error);
    }
    

});
