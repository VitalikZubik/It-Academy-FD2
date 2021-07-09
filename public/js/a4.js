const answer = prompt('Введите фразу для проверки на палиндром.', '');

function isPalindrome(str){
    const cleanStr = clearOutString(str);

    if(cleanStr.length === 1){
        return true;
    }

    if(cleanStr.length === 2) {
       return cleanStr[0] === cleanStr[1]; 
    }

    if(cleanStr[0] === cleanStr.slice(-1)) {
       return isPalindrome(cleanStr.slice(1,-1)) 
    } 

    return false;
}

function clearOutString(str) {
    str = str.toLowerCase().replace(/ё/g, 'е')
    str = str.replace(/[ьъ.,$&#*()\/:;\s]/g, '')
    return str
}

console.log(isPalindrome(answer));
