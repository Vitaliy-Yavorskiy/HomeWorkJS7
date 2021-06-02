// Завдання 2

// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// Створіть порожній об'єкт MyMath.
// Cтворіть властивість a зі значенням 5.
// Cтворіть властивість b зі значенням 2.
// Створіть 4 методи які будуть робити наступне:
// sum – обчислює суму a+b та повертає значення console.log().
// multiplication – обчислює множення a*b та повертає значення console.log().
// division – обчислює ділення a/b та повертає значення console.log().
// subtraction – обчислює віднімання a-b та повертає значення console.log().
// Запустіть кожен з цих методів, результат має бути наступним:
// MyMath.sum() – має повернути 5 + 2 = 7
// MyMath.multiplication() – має повернути 5 * 2 = 10
// MyMath.division() – має повернути 5 / 2 = 2.5
// MyMath.subtraction() – має повернути 5 - 2 = 3

const MyMath = {
    a : 5,
    b : 2,
    sum() {
        sum = this.a + this.b;
        console.log(sum);

    },
    multiplication() {
        multiplication = this.a * this.b;
        console.log(multiplication);
    },
    division() {
        division = this.a / this.b;
        console.log(division);

    },
    subtraction() {
        division = this.a - this.b;
        console.log(division);
    }
}

MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.subtraction()



// sum(){
//     sum = this.a + this.b
//     console.log(this.a,'-', this.b, '=' ,sum);
// }
// MyMath.sum()