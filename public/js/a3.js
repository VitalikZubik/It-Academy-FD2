const answer = prompt('Введите фразу для проверки на палиндром.', '');

function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/ё/g, 'е')
    cleanStr = cleanStr.replace(/[ьъ.,$&#*()\/:;\s]/g, '')
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome(answer));
