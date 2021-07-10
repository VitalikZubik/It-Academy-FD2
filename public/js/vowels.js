const str = prompt('Введите строку, для подсчета количества русских гласных букв в ней.', '');

function findVowels(str) {
    let count = 0;
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    str = str.toLowerCase();

    for(let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }

    return count
}

alert(findVowels(str));