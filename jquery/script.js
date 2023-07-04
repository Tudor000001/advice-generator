var button = document.getElementById("button");
var content = document.getElementById("content");
var idi = document.getElementById("idi");

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        // Handle the API response data here
        console.log(data);
        var advice = data.slip.advice;
        var id = data.slip.id;
        content.innerHTML = advice;
        idi.innerHTML = id;
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.log('Error:', error);
    });

button.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Handle the API response data here
            console.log(data);
            var advice = data.slip.advice;
            var id = data.slip.id;
            content.innerHTML = advice;
            idi.innerHTML = id;
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log('Error:', error);
        });
});