var apiText = document.getElementById('api-text')


fetch("https://api.kanye.rest").then((response) => {
    response.json().then(data =>{
        console.log(data)
        apiText.textContent = data.quote
    })
})