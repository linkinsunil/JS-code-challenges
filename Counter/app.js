const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const increment = document.querySelector(".increment");
const count = document.getElementById("container");

let setCount = 0;

count.textContent = setCount;

    decrement.addEventListener("click", () => {
        setCount -= 1;
        count.textContent = setCount;
    })

    increment.addEventListener("click", () => {
        setCount += 1;
        count.textContent = setCount;
    })

    reset.addEventListener("click", () => {
        setCount = 0;
        count.textContent = setCount;
    })
