document.addEventListener("DOMContentLoaded", () => {
    let f = document.getElementById("form");
    f.addEventListener("focus", () => f.classList.add('focused'), true);
    f.addEventListener("blur", () => f.classList.remove('focused'), true);
    
    let input = document.getElementById("input");
    input.onblur = function() {
      if (!input.value.includes('.')) {
        input.classList.add('invalid');
        error.innerHTML = 'Пожалуйста, введите точку в первом слове.';
      }
    };
    
    input.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML = "";
      }
    };
});

function sumInputs(text = "Сумма = ") {
    alert(String(text) + (Number(document.getElementById("x").value) +  Number(document.getElementById("y").value)));
}
function subInputs(text = "Разница = ") {
    alert(String(text) + (Number(document.getElementById("x").value) -  Number(document.getElementById("y").value)));
}
function mulInputs() {
    alert( Number(document.getElementById("x").value) *  Number(document.getElementById("y").value));
}
function delInputs() {
    alert( Number(document.getElementById("x").value) /  Number(document.getElementById("y").value));
}
function modInputs() {
    alert( Number(document.getElementById("x").value) %  Number(document.getElementById("y").value));
}
function powInputs() {
    alert( Number(document.getElementById("x").value) **  Number(document.getElementById("y").value));
}

function CityChange() {
    document.getElementById('address').innerHTML = document.getElementById(document.getElementById('city').value).innerHTML;
}

function ChangeColor(Element) {
    Element.style.backgroundColor = "rgb(255, 225, 185)";
}

function ReturnColor(Element) {
    Element.style.backgroundColor = "rgb(255, 240, 221)";
}

function formClick(Element) {
    Element.style.border = "3px solid #9d9fff";
};
function numword(obj) {   
    obj.res1.value = "";
    obj.res2.value = "";
    obj.res22.value = "";
    obj.res3.value = "";
    obj.data1.value = "";
    obj.data2.value = "";

    let t = obj.textin.value;
    t = t.substring(0, t.length) + " ";
    obj.res1.value = t.length;
    
    let k = 0;
    let position = 0;
    let index = 0;
    let cnt = 0;
    let cnt2 = 0;
    let smbl = 0; //кол-во символов в слове
    let letter = 0; //кол-во букв в слове
    while (k < t.length) {   
        let b = t.substr(k, 1);
        if (b == ' ') {   
            index = k;
            str = t.slice(position, index); 
            if (str.length != 1) {
                while (smbl < str.length) {   
                    let x = str.substr(smbl, 1);
                    if (isNaN(x)) { letter += 1;}	
                    smbl++;
                }
                if ((str.length != letter) && (position == 0)) {cnt +=1;}
                if ((str.length == letter) && (position == 0)) {cnt2 +=1;}
    
                if ((str.length-1 != letter) && (position != 0)) {cnt +=1;}
                if ((str.length-1 == letter) && (position != 0)) {cnt2 +=1;}
            }
        }
        position = index;
        k++;
        smbl = 0;
        letter = 0;
    }
    obj.res2.value = cnt;
    obj.res22.value = cnt2;

    let res3 = 0, 
        j = 0,
        kol = 0, //кол-во букв
        kol2 = 0; //кол-во пробелов 
    while (j < t.length) {   
        let sim = t.substr(j,1)
        if (isNaN(sim)) { 
            kol += 1; 
            obj.data1.value += sim;
        }
        else {obj.data2.value += sim;}
        if (sim == ' ') { 
            kol2 += 1; 
            obj.data1.value += sim;
        }
        j++;
    }
    res3 = t.length - kol - kol2;
    obj.res3.value = res3;
}
function concWord(obj) {
    obj.data3.value = obj.txt1.value + obj.txt2.value;
    return obj.data3.value;
}
function comWord(obj) {
    if (obj.txt1.value == obj.txt2.value) obj.data4.value = obj.txt1.value + " = " + obj.txt2.value;
    if (obj.txt1.value > obj.txt2.value) obj.data4.value = obj.txt1.value + " > " + obj.txt2.value;
    if (obj.txt1.value < obj.txt2.value) obj.data4.value = obj.txt1.value + " < " + obj.txt2.value;
}
function escapeRegExp(obj) {
    obj.data5.value = "";
    a = obj.txt1.value.match(/[&\/\#,+()$~%.!@#$%^&'":*?<>{}]/g);
    b = obj.txt2.value.match(/[&\/\#,+()$~%.!@#$%^&'":*?<>{}]/g);
    obj.data5.value = a + b;
}
function Word(obj) {
    alert(`txt1 + txt2 = ${concWord(forma1)}`); 
}
function Itog(obj) {
    if (obj.price.value > 50 && obj.procent.value > 12) {
        obj.itog.value = Number(obj.price.value) * (Number(obj.procent.value)/100);
    }
    else {
        if (obj.price.value < 50) alert("Цена должна быть больше 50");
        if (obj.procent.value < 12) alert("Введите больше 12 процентов");
    }
    console.log(obj.itog.value);
}
function Weather(obj) {
    let weather = {
        temperature: Number(obj.temp.value),
        iceCreamVanOutside: obj.choice1.value,
        houseStatus: obj.choice2.value,
        foo() {
            console.log("Object weather");
        }
    };

    let child = {
        foo(){
            super.foo();
            console.log("Object child");
        }
    }
    Object.setPrototypeOf(child, weather);
    child.foo();

    if ((weather.temperature > 5) && (weather.temperature < 30)) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию — хорошо и солнечно.');
    if (weather.temperature >= 30) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию — Жара!');
    if (weather.temperature <= 5) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию. Одевайте теплую одежду');

    if (weather.iceCreamVanOutside === 'true') alert( "На улице подъехало мороженное ");
    if (weather.houseStatus  === 'true') alert( "Дом горит");
    if (!(weather.iceCreamVanOutside === "true" || weather.houseStatus === 'true')) {
        alert('Вероятно, можно оставаться в доме.');
    } else {
        alert('Вы должны покинуть дом.');
    }

    let { temperature: temp, iceCreamVanOutside: ice, houseStatus: house} = weather;
    console.log("Температура: " + temp + ". На улице подъехало мороженное: " + ice + ". Дом горит: " + house);
}

function Error() {
    let json = "{ некорректный JSON }";
    try {
        let user = JSON.parse(json); // ошибка
        alert( user.name ); // не сработает
    } catch (e) {
        alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
        alert( e.name );
        alert( e.message );
    }
}
function Error2() {
    let json = '{"name":"John", "age": 30}';
    try {
        let user = JSON.parse(json);
        alert( user.name );
        alert( user.age );
    } catch (e) {
        alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
        alert( e.name );
        alert( e.message );
    }
}
function arr(obj) {
    obj.arrayAge.value = "";
    document.querySelector('.list').innerHTML = "";
    document.querySelector('.animalSound').innerHTML = "";

    function* idGenerator() {
        let i = 0;
        while (true) {
          yield i++;
        }
      }
    const ids = idGenerator();

    let animals = [
        {
            name: "Вася", 
            type: "Кот", 
            age: 4,
            id: ids.next().value, // 0
        },
        {
            name: "Том", 
            type: "Кот", 
            age: 6,
            id: ids.next().value, // 1
        },
        {
            name: "Пуфик", 
            type: "Собака", 
            age: 12,
            id: ids.next().value, // 2
        },
        {
            name: "Кеша", 
            type: "Попугай", 
            age: 2,
            id: ids.next().value, // 3
        },
        {
            name: "Омлет", 
            type: "Черепаха", 
            age: 1,
            id: ids.next().value, // 4
        },
    ];

    const Name = document.querySelector('#nameAnimal');
    const Type = document.querySelector('#typeAnimal');
    const Age = document.querySelector('#ageAnimal');

    if (Age.value > 30) alert("Введен очень большой возраст, введите поменьше");
    if (Name.value == "") alert("Введите имя питомца");
    if (Age.value == "") alert("Введите возраст питомца");

    if ((Age.value <= 30) && (Name.value != "") && (Age.value != "")) {
        let new_obj = {
            name: Name.value, 
            type: Type.value, 
            age: Number(Age.value),
            id: ids.next().value, // 5
        };
        animals.push(new_obj);
        console.log("ID нового питомца: " + new_obj.id);
    }
    document.querySelector('.listAnimals').style.display = "block";
    
    animals.forEach(animal => {
        document.querySelector('.list').innerHTML += `<br>${animal.type} ${animal.name}, возраст: `;
        if ((`${animal.age}` == 1) || (`${animal.age}` == 21)) document.querySelector('.list').innerHTML += `${animal.age} год. <br>`;
        if ((`${animal.age}` >= 5) && (`${animal.age}` <= 20) || (`${animal.age}` >= 25) && (`${animal.age}`<= 30)) {
            document.querySelector('.list').innerHTML += `${animal.age} лет. <br>`;
        }
        if ((`${animal.age}` >= 2) && (`${animal.age}` <= 4) || (`${animal.age}` >= 22) && (`${animal.age}`<= 24)) {
            document.querySelector('.list').innerHTML += `${animal.age} года. <br>`;
        }
    });
    //массив возрастов
    const arrValues = [];
    for (let i = 0; i < animals.length; i++) {
        const elem = animals[i];
        arrValues.push(elem.age);
    }
    obj.arrayAge.value = arrValues;

    if (Array.isArray(arrValues)) obj.test1.value = "true";
    else obj.test1.value = "false";

    const sumValues = (total, value) => total + value;
    document.getElementById("test2").value = arrValues.reduce(sumValues);
    
    const Transform = function(value) { 
        return value * 2;
    }
    document.getElementById("test3").value = arrValues.map(Transform);

    const Spread = (x,y,z,k,l,m) => console.log("... Как оператор расширения: " + x,y,z,k,l,m);
    Spread(...arrValues);
    const Rest = (...args) => console.log("Остаточные параметры: " + args);
    Rest(1,2,3,4,5);

    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `Ваш питомец издает звук. `;
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `${this.name} лает.`;
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `${this.name} мурлычет.`;
        }
    }
    class Hamster extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `${this.name} шипит, когда очень расстроен и испуган.`;
        }
    }
    class Turtle extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `${this.name} шипит, когда чем-то не довольна.`;
        }
    }
    class Parrot extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            document.querySelector('.animalSound').innerHTML += `К основным звукам, которые издает ${this.name}, относится «пик», 
            в котором в самой громкой фазе несложно расслышать «чивик», напоминающее воробьиное «чирик».`;
        }
    }

    let animal = new Animal(Name.value);
    if ((Name.value != "") && (Age.value != "")) {animal.speak();}
    
    if ((Type.value == "Собака") && (Name.value != "") && (Age.value != "")) {
        let d = new Dog(Name.value);
        d.speak();
    }
    if (Type.value == "Кот" && (Name.value != "") && (Age.value != "")) {
        let d = new Cat(Name.value);
        d.speak();
    }
    if (Type.value == "Хомяк" && (Name.value != "") && (Age.value != "")) {
        let d = new Hamster(Name.value);
        d.speak();
    }
    if (Type.value == "Черепаха" && (Name.value != "") && (Age.value != "")) {
        let d = new Turtle(Name.value);
        d.speak();
    }
    if (Type.value == "Попугай" && (Name.value != "") && (Age.value != "")) {
        let d = new Parrot(Name.value);
        d.speak();
    }
}

function updateVariables() {
    idPost = document.getElementById("propertiesLocation"); 
    idPost.innerHTML += `<b>Все свойства и методы объекта location:</b> <br><br>`;

    var stringPropertiesLocation = "";
        for (var property in location){
            stringPropertiesLocation += "Свойство/метод: <strong>" + property + "</strong>. ";
            stringPropertiesLocation += "Значение: <strong>" + location[property] + "</strong> ";
            stringPropertiesLocation += "<strong>Тип: </strong>" + typeof location[property]; 
            stringPropertiesLocation += "<br /><br>";
        }
    idPost.innerHTML += `${stringPropertiesLocation}`;
        
}

let newWindow;
function openWindow() {
    newWindow = window.open('https://itchief.ru/', '', 'width=400,height=500');
    newWindow.focus();
}
function assignWindow() {
    newWindow = window.location.assign('https://itchief.ru');
    newWindow.focus();
}
function replaceWindow() {
    newWindow = window.location.replace('https://itchief.ru');
    newWindow.focus();
}
function getInfo() {
    var nav = window.navigator;
    var parent = document.getElementsByTagName("section")[0];//хранит свойства
    var div = document.createElement("div");
    var strOut = "";
    
    for(var property in nav) {
      console.dir(typeof property);
      strOut += "<b>" + property + "</b><p>" + nav[property] + "</p>";
    }
    div.innerHTML = strOut;
    parent.appendChild(div);
    document.getElementById("hideInfo").style.display = "block";

}

function hideInfo() {
    document.getElementById("hideInfo").style.display = "none";
    document.getElementsByTagName("section")[0].innerHTML = "";
}

window.onpopstate = function(event) {
    console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.pushState({page: 3}, "title 3", "?page=3");
history.replaceState({page: 4}, "title 4", "?page=4");
history.back();
history.back();
history.go(2);

function screenInfo1() {
    alert("Ширина - " + window.screen.width + ", Высота - " + window.screen.height);
}
function screenInfo2() {
    alert("Ширина - " + window.screen.availWidth + ", Высота - " + window.screen.availHeight);
}

if (navigator.cookieEnabled === false) {
    console.log("Cookies отключены!");
} else {
    console.log("Cookies включены!");
}

localStorage.setItem('key1', 'ObjLocalStorage');
const localValue = localStorage.getItem('key1');
console.log(localValue);
localStorage.removeItem('key1');
localStorage.clear();

var obj = {
    item1: 1,
    item2: [123, "abc", 3.0],
    item3: "hello"
};
const serialObj = JSON.stringify(obj);
localStorage.setItem('key2', serialObj);
const returnObj = JSON.parse(localStorage.getItem('key2'));
console.log(returnObj);

sessionStorage.clear();
sessionStorage.setItem('key1', 'a');
const data = sessionStorage.getItem('key1');
console.log(data);
sessionStorage.setItem('key2', 'b');
sessionStorage.setItem('key3', 'c');
console.log("Кол-во sessionStorage: " + sessionStorage.length);
for (var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    console.log(key + ' = ' + sessionStorage[key]);
}

//запрос на получение репозиторев с помощью async/await
async function getRepos() {
    try {
        document.getElementById('repos').innerHTML = "";
        let name = document.getElementById('userName').value;
        let respons = await fetch(`https://api.github.com/users/${name}/repos`);
        let results = await respons.json();
        document.getElementById('reposUser').style.display = "block";
        results.forEach(repos => {
            document.getElementById('repos').innerHTML += `<br>${repos.name}`;       
        });
        document.getElementById('repos').innerHTML += `<br>`; 
    } catch(err) {
        document.getElementById('reposUser').style.display = "none";
        alert('Ошибка!');
    }      
}

//запрос на получение репозиторев с помощью promise
function getRepos1() {
    document.getElementById('repos1').innerHTML = "";
    document.getElementById('reposUser1').style.display = "block";
    let name = document.getElementById('userName1').value;
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(results => { 
        results.forEach(repos => {
            document.getElementById('repos1').innerHTML += `<br>${repos.name}`;       
            });
        document.getElementById('repos1').innerHTML += `<br>`;
        }
    ).catch(err => { 
        document.getElementById('reposUser1').style.display = "none";
        alert('Ошибка!'); 
        });       
}