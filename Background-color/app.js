var simpleColor = ["Red", "Green", "RGBA(255, 200, 200, 1)", "#f15025"]; 

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

function getRandomNummber () {
    return Math.floor((Math.random() * simpleColor.length));
}


btn.addEventListener("click", function() {
    let currentColor=getRandomNummber();
    document.body.style.backgroundColor = simpleColor[currentColor];
    color.textContent = simpleColor[currentColor];  
})


