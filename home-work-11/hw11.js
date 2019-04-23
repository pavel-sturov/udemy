
let age = document.getElementById('age');
let name = 'John';
let surname = 'Smith';
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    showUser.ap(age, surname, name);