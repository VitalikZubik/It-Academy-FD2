function replaceСharacters (str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/'/g, '&apos;');
    str = str.replace(/"/g, '&quot;');

    return str;
}

function buildWrapper(teg) {
    return function (str, attributes = {}) {
        str = replaceСharacters(str);
        let attributesStr = '';
        if (attributes) {
            for (let key in attributes) {
                attributesStr += ` ${key}='${replaceСharacters(attributes[key])}'`
            }
        }
        return `<${teg}${attributesStr}>${str}</${teg}>`
    }
}



const wrapH1 = buildWrapper('H1');

console.log(wrapH1('Заголовок в <H1> теге', {align: 'center', title: "M&M's"}));
console.log(wrapH1('Заголовок в <H1> теге'));