var apiText = document.getElementById('api-text')
var slides = document.getElementsByClassName('slideshow');
var ip = ["WebFinal/images/8E3E780-C1B2-4703-9CD2-ACEA47E0B819.jpg", "WebFinal/images/HEREITCOMES.png", ".../.../libert.jpg"];
var slideCount = 0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideCount].style.display = "block"; 

    slideCount++;
    if (slideCount > ip.length - 1) {
        slideCount = 0;
    }
}

showSlide();

setInterval(showSlide, 2000);


function table(row){
    row.style.backgroundColor = 'white';
}

function normal(row) {
    row.style.backgroundColor = '';
}

fetch("https://api.kanye.rest").then((response) => {
    response.json().then(data =>{
        console.log(data)
        apiText.textContent = data.quote
    })
})