const wrapperForms = document.querySelector('.wrapper_forms');

const formDef1 = [
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

const formDef2 = [
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];

const dynForm = (arr) => {
    const form = document.createElement('form');

    for(let elem of arr) {
        const div = document.createElement('div');
        div.setAttribute('class', 'wrapper_element');
        
        for(let key in elem) {
            switch(key) {
                case 'label':
                    if (elem.label !== 'Опубликовать:' && elem.label !== 'Зарегистрироваться:') {
                        const label = document.createElement('label');
                        label.setAttribute('for', elem.name);

                        const value = document.createTextNode(elem.label);

                        label.appendChild(value);

                        div.appendChild(label)
                    }                    
                    break;
                case 'kind':
                    const input = document.createElement('input');
                    switch(elem.kind) {
                        case 'longtext':
                            input.setAttribute('type', 'text');
                            input.setAttribute('name', elem.name);
                            input.setAttribute('id', elem.name);
                            input.setAttribute('class', elem.kind);
                            
                            div.appendChild(input);
                            break;
                        case 'number':
                            input.setAttribute('type', 'number');
                            input.setAttribute('name', elem.name);
                            input.setAttribute('id', elem.name);
                            input.setAttribute('class', elem.kind);

                            div.appendChild(input);
                            break;
                        case 'shorttext':
                            input.setAttribute('type', 'text');
                            input.setAttribute('name', elem.name);
                            input.setAttribute('id', elem.name);
                            input.setAttribute('class', elem.kind);
                            
                            div.appendChild(input);
                            break;
                        case 'combo':
                            const select = document.createElement('select');
                            select.setAttribute('name', elem.name);
                            select.setAttribute('class', elem.name);
                            input.setAttribute('id', elem.name);

                            for (let obj of elem.variants) {
                                const option = document.createElement('option');
                                option.setAttribute('value', obj.value);

                                const text = document.createTextNode(obj.text);
                                option.appendChild(text);

                                if(obj.text === 'бытовая техника') {
                                    option.setAttribute('selected','');
                                }

                                select.appendChild(option);
                            }

                            div.appendChild(select);
                            break;
                        case 'radio':
                            const wrapperRadio = document.createElement('div');
                            for (let obj of elem.variants) {
                                const input = document.createElement('input');
                                input.setAttribute('type', 'radio');
                                input.setAttribute('name', elem.name);
                                input.setAttribute('value', obj.value);
                                input.setAttribute('id', elem.name);

                                const span = document.createElement('span');
                                span.setAttribute('class','radio_value');
                                const text = document.createTextNode(obj.text);
                                span.appendChild(text);

                                wrapperRadio.appendChild(input);
                                wrapperRadio.appendChild(span);
                            }
                            div.appendChild(wrapperRadio);
                            break;
                        case 'check':
                            input.setAttribute('type', 'checkbox');
                            input.setAttribute('name', elem.name);
                            input.setAttribute('checked','');
                            input.setAttribute('id', elem.name);

                            div.appendChild(input);
                            break;
                        case 'memo':
                            const textarea = document.createElement('textarea');
                            textarea.setAttribute('name', elem.name);
                            textarea.setAttribute('class', elem.kind);
                            textarea.setAttribute('id', elem.name);

                            div.appendChild(textarea);
                            break;
                        case 'submit':
                            const button = document.createElement('button');
                            const btnValue = document.createTextNode(elem.label);
                            button.appendChild(btnValue);

                            div.appendChild(button);
                            break;
                    }
                    break;                
            }            
        }
        form.appendChild(div)
    }
    wrapperForms.appendChild(form);
}

dynForm(formDef1);
dynForm(formDef2);