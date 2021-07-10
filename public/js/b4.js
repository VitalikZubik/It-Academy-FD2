function replaceСharacters (str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/'/g, '&apos;');
    str = str.replace(/"/g, '&quot;');

    return str;
}

function buildWrapper(teg) {
    return function (str) {
        str = replaceСharacters(str);

        return `<${teg}>${str}</${teg}>`
    }
}

const wrapH1 = buildWrapper('H1');

console.log(wrapH1('Заголовок в <H1> теге'));