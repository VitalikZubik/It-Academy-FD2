let name = prompt('Ваше имя?', '');
let surname =  prompt('Ваша фамилия?', '');
let patronymic =  prompt('Ваше отчество?', '');
let age = prompt('Ваш возраст?', '');
let sex = confirm('Ваш пол - мужской? ок - да, отмена - нет.');
let pension;

if (sex) {
    sex = 'мужской';
} else {
    sex = 'женский';
}

for(let i = 0; i < 1; i++) {
    age = parseInt(age);

    if(name === null || name === '') {
        name = prompt('Ваше имя?', '');
        i--;
    } else if (surname === null || surname === '') {
        surname = prompt('Ваша фамилия?', '');
        i--
    } else if (patronymic === null || patronymic === '') {
        patronymic = prompt('Ваше отчество?', '');
        i--
    } else if (isNaN(age)) {
        age = prompt('Ваш возраст?', '');
        i--
    } else {
        break;
    }    
}

if (age >= 65 && sex === 'мужской') {
    pension = 'да';
} else if (age >= 60 && sex === 'женский') {
    pension = 'да';
} else {
    pension = 'нет';
}

const ageInDays = age * 365;
const afterFive = age + 5;

alert(`
    ваше ФИО: ${surname} ${name} ${patronymic}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${ageInDays}
    через 5 лет вам будет: ${afterFive}
    ваш пол: ${sex}
    вы на пенсии: ${pension}
`);