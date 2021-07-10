const addBtn = document.querySelector('.addBtn');
const infoBtn = document.querySelector('.infoBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const getAllBtn = document.querySelector('.getAllBtn');

function HashStorageFunc () {
    const storage = {}

    this.addValue = function (key, value){
        storage[key] = value;
        console.log(storage);
    }

    this.getValue = function (key) {
        return storage[key];        
    }

    this.deleteValue = function (key) {
        if (key in storage) {
            delete storage[key];
            return `Напиток с названием ${key}, успешно удален.`
        } else {
            return `Напиток с названием ${key}, в хранилище не найден.`
        }
        
    }

    this.getKeys = function () {
        return Object.keys(storage)
    }
}

const drinkStorage = new HashStorageFunc();

function onAddDrink () {
    let nameDrink = prompt('Название напитка?', '');
    let isAlcohol = confirm('Алкогольный напиток? ок - да, отмена - нет.');
    let recipe = prompt(`Рецепт приготовления напитка ${nameDrink}?`);

    const infoDrink = {};

    if (isAlcohol) {
        isAlcohol = 'да';
    } else {
        isAlcohol = 'нет';
    }

    for (let i = 0; i < 1; i++) {
        if(nameDrink === null || nameDrink === '') {
            i--;
            nameDrink = prompt('Название напитка?', '');
        } else if (recipe === null || recipe === '') {
            i--;
            recipe = prompt(`Рецепт приготовления напитка ${nameDrink}?`);
        } 
    }

    infoDrink.name = nameDrink;
    infoDrink.alcohol = isAlcohol;
    infoDrink.recipe = recipe;

    drinkStorage.addValue(nameDrink, infoDrink)
}

function onInfoDrink () {
    let nameDrink = prompt('Введите название напитка, для получения информации о нём.', '');

    for (let i = 0; i < 1; i++) {
        if (nameDrink === null || nameDrink === '') {
            i--;
            prompt('Введите название напитка, для получения информации о нём.', '');
        }
    }

    const drink = drinkStorage.getValue(nameDrink);

    if (drink) {
        alert(`
            Напиток:  ${drink.name}
            Алкогольный:  ${drink.alcohol}
            Рецепт приготовления: 
            ${drink.recipe}
        `)
    } else {
        alert(`Информация о напитке ${nameDrink}, отсутствует в хранилище.`)
    }
}

function onDeleteDrink () {
    const nameDrink = prompt('Введите название напитка для удаления его из хранилища.', '');

    const message = drinkStorage.deleteValue(nameDrink);

    alert(message);
}

function ongetAllDrinks () {
    const drinks = drinkStorage.getKeys();

    const message = drinks.join(",  ");
    alert(`
    Перечень всех напитков в хранилище:
    ${message}
    `)
}


addBtn.addEventListener('click', onAddDrink);
infoBtn.addEventListener('click', onInfoDrink);
deleteBtn.addEventListener('click', onDeleteDrink);
getAllBtn.addEventListener('click', ongetAllDrinks);