function formatNumber (num, format) {
    const dotIdx = format.split('').indexOf('.');
    const countNumsAfterDot = format.length - 1 - dotIdx;
    let formatNum = '';

    num = num.toFixed(countNumsAfterDot);

    for(let i = 0, l = num.length - 1; l >= 0; i++, l-- ) {
        if(format[format.length - i -1] === '#' || (format[format.length - i -1] === '.' && num[l] === '.')) {
            formatNum += num[l];
        } else if (format[format.length - i -1] === ' ' ) {
            formatNum += " ";
            l++
        }
    }

    return formatNum.split('').reverse().join('');
}

console.log(formatNumber(12345.1234, '# ### ###.##'));
console.log(formatNumber(2.3, '# ### ###.##'));