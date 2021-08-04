const wrapperForms = document.querySelector('.wrapper_forms');

const formDef1 = [
    {label:'Разработчики:',kind:'longtext',name:'developers'},
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Дата запуска сайта:',kind:'date',name:'date'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'выбор рубрики',value:1},{text:'здоровье',value:2},{text:'домашний уют',value:3},{text:'бытовая техника',value:4}]},
    {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'}
];

const dynForm = (arr) => {
    const form = document.createElement('form');
    form.setAttribute('id', 'dyn_form')

    for(let elem of arr) {
        const div = document.createElement('div');
        div.setAttribute('class', 'wrapper_element');
        
        for(let key in elem) {
            switch(key) {
                case 'label':
                    if (elem.label !== 'Опубликовать:') {
                        const wrapperLabel = document.createElement('div');
                        const label = document.createElement('label');
                        label.setAttribute('for', elem.name);

                        const spanError = document.createElement('span');
                        spanError.setAttribute('class', 'error hide');
                        spanError.innerHTML = ' Обязательное поле'

                        const value = document.createTextNode(elem.label);

                        label.appendChild(value);
                        wrapperLabel.appendChild(label);
                        wrapperLabel.appendChild(spanError);
                        
                        div.appendChild(wrapperLabel);
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
                        case 'date':
                            input.setAttribute('type', 'date');
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
                            select.setAttribute('id', elem.name);

                            for (let obj of elem.variants) {
                                const option = document.createElement('option');
                                option.setAttribute('value', obj.value);

                                const text = document.createTextNode(obj.text);
                                option.appendChild(text);

                                if(obj.text === 'выбор рубрики') {
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

const form = document.getElementById('dyn_form');

const chekValue = (elem) => {
    if (elem.id === 'division') {
        if(elem.value === '1') {
            elem.classList.add('error_valedation');
            elem.classList.remove('successful_valedation');                
            elem.labels[0].nextElementSibling.classList.remove('hide');
        } else {
            elem.classList.remove('error_valedation');
            elem.classList.add('successful_valedation');
            elem.labels[0].nextElementSibling.classList.add('hide');
        }
    } else if (elem.id === 'payment') {
        let isChekedCount = 0;
        const radioBtn = document.querySelectorAll('#payment');
        radioBtn.forEach(elem => {
            if(elem.checked) {
                isChekedCount++;
            }
        })

        if (isChekedCount !== 1) {
            elem.classList.add('error_valedation');
            elem.classList.remove('successful_valedation');
                
            if (elem.value === '1') {
                elem.labels[0].nextElementSibling.classList.remove('hide');
            }
            isChekedCount = 0;
        } else {
            if (elem.checked) {
                elem.classList.remove('error_valedation');
                elem.classList.add('successful_valedation');
            }

            radioBtn.forEach(elem => {
                if(!elem.checked) {
                    elem.classList.remove('error_valedation');
                    elem.classList.remove('successful_valedation');
                }
            })                

            if (elem.value === '1') {
                elem.labels[0].nextElementSibling.classList.add('hide');
            }
            isChekedCount = 0;
        }
    } else if (elem.id === 'votes') {

    } else {
        if(elem.value === '') {
            elem.classList.add('error_valedation');
            elem.classList.remove('successful_valedation');
            elem.labels[0].nextElementSibling.classList.remove('hide');
        } else {
            elem.classList.remove('error_valedation');
            elem.classList.add('successful_valedation');
            elem.labels[0].nextElementSibling.classList.add('hide');
        }
    }    
}

const validateElem = (e, elem) => {
    switch(e? e.target.id : elem.id) {
        case 'developers':
            chekValue(e? e.target : elem);
            break;
        case 'sitename':
            chekValue(e? e.target : elem);
            break;
        case 'siteurl':
            chekValue(e? e.target : elem);
            break;
        case 'date':
            chekValue(e? e.target : elem);
            break;
        case 'visitors':
            chekValue(e? e.target : elem);
            break;
        case 'email':
            chekValue(e? e.target : elem);
            break;
        case 'division':
            chekValue(e? e.target : elem);
            break;
        case 'payment':
            chekValue(e? e.target : elem);
            break;
        case 'votes':
            chekValue(e? e.target : elem);
            break;
        case 'description':
            chekValue(e? e.target : elem);
            break;
    }
}

for(let elem of form) {
    if(elem.tagName !== 'BUTTON') {
        elem.addEventListener('blur',validateElem)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for(let elem of form) {
        if(elem.tagName !== 'BUTTON') {
            validateElem(null, elem);
        }
    }

    const elemError = document.querySelector('.error_valedation');
    if (elemError) {
        elemError.focus();
    } else {
        alert("Успешное заполнение формы!!!");
    }
})