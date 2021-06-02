// Завдання 1

// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// Створіть порожній об'єкт person.
// Додайте властивість firstName зі значенням Ivan.
// Додайте властивість secondName зі значенням Ivanov.
// Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
// Скопіюйте об'єкт person в об'єкт newPerson.
// Поміняйте в newPerson властивість firstName на Petro.
// Поміняйте в newPerson властивість secondName на Petriv.
// Запустіть метод showData з person і newPerson, результат має бути наступним:
// person.showData() – має повернути Ivan Ivanov
// newPerson.showData() – має повернути Petro Petriv
// ------------------------------------------------------------------------------------------



const person = {
    firstName : 'Ivan',
    secoundName : 'Ivanov',   
    showData: function() {
        console.log(this.firstName, this.secoundName);
    }
}

const newPerson = {
    firstName : 'Petro',
    secoundName : 'Petriv',   
    showData: function() {
        console.log(this.firstName, this.secoundName);
    }
}
person.showData()
newPerson.showData()

