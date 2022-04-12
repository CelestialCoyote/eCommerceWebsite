document.getElementById('submit').addEventListener('click', function(event) {
    // Stop page refresh.
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let message = document.getElementById('message').value;

    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(message);

    alert(`${firstName} ${lastName}\n${emailAddress}\n${message}`);

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('emailAddress').value = '';
    document.getElementById('message').value = '';
}); 