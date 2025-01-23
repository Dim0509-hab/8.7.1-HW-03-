
let minValue =  parseInt(prompt('Минимальное значение числа для игры','-999')); 
let maxValue =  parseInt(prompt('Максимальное значение числа для игры','999'));

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

if (isNaN(maxValue) || isNaN(minValue) || maxValue == '' || minValue == '') {
    minValue = -999;
    maxValue = 999;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((parseInt(minValue) + parseInt(maxValue)) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');



    const n = answerNumber;                                         //  Интерпритатор число - текст
    const result = [];
    if (n === 0) {
        result.push('ноль');
    }
    if (n < 0) {
        result.push('минус');
    }
        
    const ediniz = Math.abs(n) % 10;
    const desyat = Math.floor(Math.abs(n) % 100 / 10);
    const sotni = Math.floor(Math.abs(n) / 100);
    if (sotni > 0) {
        result.push([
            undefined, 'сто' , 'двести' , 'триста'   , 'четыреста',
            'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
        ][sotni]);
    }
    if (desyat === 1) {
        result.push([
            'десять' , 'одиннадцать' ,'двенадцать'  , 'тринадцать'  ,
            'четырнадцать', 'пятнадцать'  ,'шестнадцать' , 'семнадцать'  ,
            'восемнадцать', 'девятнадцать'
        ][ediniz]);
    } else {
        if (desyat > 1) {
            result.push([
                undefined , undefined ,    'двадцать'   , 'тридцать' , 'сорок' ,
                 'пятьдесят','шестьдесят' , 'семьдесят',  'восемьдесят', 'девяносто'
            ][desyat]);
        }
        if (ediniz > 0) {
            result.push([
                undefined, 'один' , 'два' , 'три'   , 'четыре',
                'пять'   , 'шесть', 'семь', 'восемь', 'девять'
            ][ediniz]);
        }
    }
    
    
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число \n ${result.join(' ')} ?`;



document.getElementById('btnRetry').addEventListener('click', function () {  //Заново
     window.location.reload()
    })

document.getElementById('btnLess').addEventListener('click', function () {  // Меньше
    if (gameRun){
        if (minValue === answerNumber){                                         // Калапс алгоритма
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom == 0) {  
                answerPhrase  = `Прошу вас, будьте внимательны !\n\u{1F914}`;
            } else 
            if (phraseRandom == 1) {
                answerPhrase  = `Всё фигня, давай заново..\n\u{1F92F}`;
            } else 
            if (phraseRandom == 2) {
                answerPhrase  = `Ваш IQ отрицательный ?\n\u{1F910}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {                                                        // Средняя по команде меньше
            maxValue = answerNumber ;  
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;

            const n = answerNumber;                                    //  Интерпритатор число - текст
            const result = [];
            if (n === 0) {
             result.push('ноль');
              }
              if (n < 0) {
             result.push('минус');
            }
            const ediniz = Math.abs(n) % 10;
            const desyat = Math.floor(Math.abs(n) % 100 / 10);
            const sotni = Math.floor(Math.abs(n) / 100);
            if (sotni > 0) {
             result.push([
            undefined, 'сто'  , 'двести' , 'триста'   , 'четыреста',
            'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
             ][sotni]);
             }
            if (desyat === 1) {
             result.push([
            'десять'      , 'одиннадцать' , 'двенадцать'  , 'тринадцать'  ,
            'четырнадцать', 'пятнадцать'  , 'шестнадцать' , 'семнадцать'  ,
            'восемнадцать', 'девятнадцать'
            ][ediniz]);
             } else {
             if (desyat > 1) {
            result.push([
                undefined    , undefined  , 'двадцать' , 'тридцать' , 
                'сорок'      , 'пятьдесят', 'шестьдесят' , 'семьдесят',
                'восемьдесят', 'девяносто'
            ][desyat]);
            }
            if (ediniz > 0) {
                result.push([
                undefined, 'один' , 'два' , 'три' , 'четыре',
                'пять'   , 'шесть', 'семь', 'восемь', 'девять'
            ][ediniz]);
            }
            }

            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вот фантазёр, это же \n ${result.join(' ') } ?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase  = `Число в студию и это \n ${result.join(' ') } ?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Вжух, мы видим цифру \n ${result.join(' ') } ?`;
            } 
            answerField.innerText = answerPhrase ;
           

        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {     // Больше
    if (gameRun){
        if (minValue === maxValue){                                       // Калапс алгоритма
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom == 0) {   
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

            const n = answerNumber;                                      //  Интерпритатор число - текст
            const result = [];
            if (n === 0) {
             result.push('ноль');
              }
              if (n < 0) {
             result.push('минус');
            }
            const ediniz = Math.abs(n) % 10;
            const desyat = Math.floor(Math.abs(n) % 100 / 10);
            const sotni = Math.floor(Math.abs(n) / 100);
            if (sotni > 0) {
             result.push([
               undefined, 'сто'     , 'двести' , 'триста'   , 'четыреста',
            'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
             ][sotni]);
             }
            if (desyat === 1) {
             result.push([
            'десять'      , 'одиннадцать' , 'двенадцать'  , 'тринадцать'  ,
            'четырнадцать', 'пятнадцать'  ,'шестнадцать' , 'семнадцать'  ,
            'восемнадцать', 'девятнадцать'
            ][ediniz]);
             } else {
             if (desyat > 1) {
            result.push([
                undefined    , undefined  , 'двадцать'   , 'тридцать' ,
                'сорок'      , 'пятьдесят', 'шестьдесят' , 'семьдесят',
                'восемьдесят', 'девяносто'
            ][desyat]);
            }
            if (ediniz > 0) {
            result.push([
                undefined, 'один' , 'два' , 'три'   , 'четыре',
                'пять'   , 'шесть', 'семь', 'восемь', 'девять'
            ][ediniz]);
            }
            }

            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вот фантазёр, это же \n ${result.join(' ') } ?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase  = `Число в студию и это \n ${result.join(' ')} ?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Вжух, мы видим цифру \n ${result.join(' ')} ?`;
            }    
            answerField.innerText = answerPhrase ;
            }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {  //Число отгадано
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `100% концентрации \n и вот наш результат !\n\u{1F60E}`;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Это было увлекательно !\n\u{1F60E}`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Я чёртов гений! Жми ещё !\n\u{1F60E}`;
            }
        answerField.innerText =  answerPhrase;
        gameRun = false;
        }
})

