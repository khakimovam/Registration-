function check() {
    let firstName = document.getElementById("firstNameValue").value;
    let lastName = document.getElementById("lastNameValue");
    let birthday = document.getElementById("birthdayValue");
    let email = document.getElementById("emailValue");
    let password = document.getElementById("passwordValue");
    let isError;


    document.getElementById('errorMessage').innerHTML = "";

    if (firstName.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Поле 'имя' не заполнено<br>";
        isError = true;
    }
    if (lastName.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Поле 'фамилия' не заполнено<br>";
        isError = true;
    }
    if (birthday.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Поле 'дата рождения' не заполнено<br>";
        isError = true;
    }
    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Поле 'почта' не заполнено<br>";
        isError = true;
    }
    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Поле 'пароль' не заполнено<br>";
        isError = true;
    }
    if (password.value.length <= 6) {
        document.getElementById('errorMessage').innerHTML+= "Поле 'пароль' слишком короткое<br>";
        isError = true;
    }
    if (!isError){
        alert(`Привет, ${firstName}!`);
    }
    
}

let inputs = document.querySelectorAll("input");
console.log(inputs);

for (let input of inputs) {
    console.log(input.classList);
}