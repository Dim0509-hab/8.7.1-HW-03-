let minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

if (isNaN(maxValue) || isNaN(minValue) || maxValue == '' || minValue == '') {
    minValue = -999;
    maxValue = 999;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {//Заново
     window.location.reload()
    })

document.getElementById('btnLess').addEventListener('click', function () {// Меньше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom == 0) {                                      // Калапс алгоритма
                answerPhrase  = `Прошу вас, будьте внимательны!\n\u{1F914}`;
            } else 
            if (phraseRandom == 1) {
                answerPhrase  = `Всё фигня, давай заново..\n\u{1F92F}`;
            } else 
            if (phraseRandom == 2) {
                answerPhrase  = `Ваш IQ отрицательный?\n\u{1F910}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber ;                                   //Средняя по команде меньше
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вот фантазёр, это же ${answerNumber }?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase  = `Число в студию и это ${answerNumber }?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Вжух, мы видим цифру ${answerNumber }?`;
            } 
            answerField.innerText = answerPhrase ;
            console.log(minValue);
             console.log(maxValue);

        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {// Больше
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom == 0) {                                    // Калапс алгоритма
                answerPhrase  = `Прошу вас, будьте внимательны!\n\u{1F914}`;
            } else 
            if (phraseRandom == 1) {
                answerPhrase  = `Всё фигня, давай заново..\n\u{1F92F}`;
            } else 
            if (phraseRandom == 2) {
                answerPhrase  = `Ваш IQ отрицательный?\n\u{1F910}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {                                                         //Средняя по команде больше               
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вот фантазёр, это же ${answerNumber }?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase  = `Число в студию и это ${answerNumber }?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Вжух, мы видим цифру ${answerNumber }?`;
            }    
            answerField.innerText = answerPhrase ;
            console.log(minValue);
            console.log(maxValue);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {//Число отгадано
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `100% концентрации и вот результат!\n\u{1F60E}`;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Это было увлекательно!\n\u{1F60E}`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Я чёртов гений! Жми ещё!\n\u{1F60E}`;
            }
        answerField.innerText =  answerPhrase;
        gameRun = false;
    }
})

