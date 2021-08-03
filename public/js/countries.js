const addBtn = document.querySelector('.addBtn');
const infoBtn = document.querySelector('.infoBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const getAllBtn = document.querySelector('.getAllBtn');

var countrysH={};

function addCountry(countryName,capitalName) {
    countrysH[countryName]=capitalName;
}

function deleteCountry(countryName) {
    delete countrysH[countryName];
}

function getCountryInfo(countryName) {
    if ( countryName in countrysH )
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
    else
        return 'нет информации о стране ' + countryName + '!' ;
}

function listCountrys() {
    var res="";
    for ( var CN in countrysH )
        res+='\n'+getCountryInfo(CN);
    return res;
}

addCountry('Германия','Берлин');
addCountry('Венгрия','Будапешт');
addCountry('Франция','Париж');

const onAddCountry = () => {
    let countryName = prompt('Введите название страны', '');
    let capitalName = prompt('Введите название столицы', '');

    addCountry(countryName, capitalName);
}

const onGetCountryInfo = () => {
    let countryName = prompt('Введите название страны', '');

    const result = getCountryInfo(countryName);
    alert(result);
}

const onListCountrys = () => {
    const list = listCountrys();
    console.log(list);
}

const onDeleteCountry = () => {
    let countryName = prompt('Введите название страны', '');

    deleteCountry(countryName);
}

addBtn.addEventListener('click', onAddCountry);
infoBtn.addEventListener('click', onGetCountryInfo);
deleteBtn.addEventListener('click', onDeleteCountry);
getAllBtn.addEventListener('click', onListCountrys);

console.log( "список стран:" + listCountrys() );