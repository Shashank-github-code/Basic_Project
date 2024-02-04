
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();// to prevent the default action of submit form 

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {// adding a check NaN is not a number check
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //add text to the result div
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        const category = document.querySelector('.category')
        if (bmi < 18.6) {
            category.innerHTML = `You in underweight category`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            category.innerHTML = `You are in normal category`;
        }
        else {
            category.innerHTML = `You are in overweight category`;
        }
    }
});
