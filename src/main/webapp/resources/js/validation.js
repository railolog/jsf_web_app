let X, Y, R;

let xInputs = document.querySelectorAll(".xInput");
let rInputs = document.querySelectorAll('.rInput');

rInputs.forEach(i => i.addEventListener('click', function () {
    rInputs.forEach(r => r.style.background = "white");
    this.style.background = "#2e93ff";
}))

xInputs.forEach(i => i.addEventListener('click', function () {
    xInputs.forEach(j => j.checked = false);
    this.checked = true;
}))

function xOnClick(val){
    X = val;
}

// for Y

function rOnClick(val){
    R = val;
    draw();
}

function validateX(){
    let xError = document.querySelector('.error.x');
    if (X == null) {
        xError.textContent = 'Выберите X перед отправкой формы';
        return false
    } else if (isNaN(Number(X))) {
      xError.textContent = 'X присвоеное некорректное значение, перезагрузите страницу и повторите попытку';
      return false;
    } else {
        xError.textContent = '';
        return true;
    }
}

function validateY(){
    let yInput = document.querySelector('.yInput');
    let yError = document.querySelector('.error.y');

    if (yInput.value.length < 1){
        yError.textContent = 'Пожалуйста, введите число';
        return false;
    }

    let preY = Number(yInput.value.replace(',', '.'));

    if (isNaN(preY)){
        yError.textContent = 'Пожалуйста, введите число';
        return false;
    } else if (preY < -3 || preY > 3) {
        yError.textContent = 'Значение Y должно быть в отрезке [-3, 3]';
        return false;
    } else {
        yError.textContent = '';
        Y = preY;
        return true;
    }
}

function validateR(){
    let rError = document.querySelector('.error.r');

    if (R == null) {
        rError.textContent = 'Выберите R перед отправкой формы';
        return false;
    } else if (isNaN(Number(R))) {
        rError.textContent = 'R присвоено некорректное значение, перезагрузите страницу и повторите попытку';
        return false;
    } else {
        rError.textContent = '';
        return true;
    }
}

document.querySelector('.submitBtn').addEventListener('click', function (event) {
    event.preventDefault();

    let vX = validateX();
    let vY = validateY();
    let vR = validateR();
    if (vX && vY && vR){
        document.getElementById('formHidden:xHidden').value = X;
        document.getElementById('formHidden:yHidden').value = Y;
        document.getElementById('formHidden:rHidden').value = R;
        document.getElementById('formHidden:sbtHidden').click();
        console.log(X, Y, R);
    }
})