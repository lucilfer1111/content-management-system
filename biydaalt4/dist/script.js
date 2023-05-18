var submitButton = document.getElementById('submit-button');
var greetingDiv = document.getElementById('greeting');
submitButton.addEventListener('click', function () {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var greeting = "Hello, " + firstName + " " + lastName + "!";
    greetingDiv.innerText = greeting;
});
