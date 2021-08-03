const str = prompt('Введите строку, для подсчета количества русских гласных букв в ней.', '');

function findVowels(str) {
    let count = 0;
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    arrayChars = str.toLowerCase().split(' ').join('').split('');
    
    arrayChars.forEach(char => {
        if(vowels.includes(char)) {
            count++
        }
    });

    const countFilter = arrayChars.filter(char => vowels.includes(char)).length;

    const countReduce = arrayChars.reduce((acc, char) => {
        if(vowels.includes(char)) {
            acc++
        }
        return acc;
    }, 0)

    return `forEach - ${count}, filter - ${countFilter}, reduce - ${countReduce}.`
}

alert(findVowels(str));