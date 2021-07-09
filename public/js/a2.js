const answer = prompt('Введите строку.', '');

function trim(str) {
    let strStart = 0;
    let strEnd = str.length - 1;

    for (let i = 0 , k = str.length - 1; i < str.length; i++, k--) {
        if(i > strStart && k < strEnd) {
            break;
        } 

        if(str[i] === ' ' && i <= strStart){
           strStart++;
        }
        
        if (str[str.length - i - 1] === ' ' && k >= strEnd) {
            strEnd--;
        } 
    }   

    let result = str.slice(strStart, strEnd + 1);
    result = `$${result}$`;

    return result;
}

console.log(trim(answer));
