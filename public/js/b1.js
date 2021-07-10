const year = prompt('Введите год.', '');

function centuryFromYear (year) {
    year = parseInt(year);
    return `${year} год - это ${Math.ceil(year / 100)} век.`; 
}

alert(centuryFromYear(year));