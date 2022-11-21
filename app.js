let a = 0

while (a < 101) {
    document.getElementById('fizz').innerHTML = a++;
    if (a % 3) {
        document.getElementById('fizz').innerHTML = "fizz";
    }
    if (a % 5) {
        document.getElementById('fizz').innerHTML = "buzz";
    }
    if (a % 3 && a % 5) {
        document.getElementById('fizz').innerHTML = "fizzbuzz";
    }
    if (a ** 3 && a ** 5) {
        document.getElementById('fizz').innerHTML = "nombre";
    }
    console.log(a);
}

