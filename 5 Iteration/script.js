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

function CityChange(){
    document.getElementById('address').innerHTML = document.getElementById(document.getElementById('city').value).innerHTML;
}

function ChangeColor(Element){
    Element.style.backgroundColor = "rgb(255, 225, 185)";
}

function ReturnColor(Element){
    Element.style.backgroundColor = "rgb(255, 240, 221)";
}

function formClick(Element) {
    Element.style.border = "3px solid #9d9fff";
};

//События focusin/focusout
form.addEventListener("focus", () => form.classList.add('focused'), true);
form.addEventListener("blur", () => form.classList.remove('focused'), true);

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
    if (obj.txt1.value == obj.txt2.value) {obj.data4.value = obj.txt1.value + " = " + obj.txt2.value;}
    if (obj.txt1.value > obj.txt2.value) {obj.data4.value = obj.txt1.value + " > " + obj.txt2.value;}
    if (obj.txt1.value < obj.txt2.value) {obj.data4.value = obj.txt1.value + " < " + obj.txt2.value;}
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

function arr(obj){
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

    let Name = document.querySelector('#nameAnimal');
    let Type = document.querySelector('#typeAnimal');
    let Age = document.querySelector('#ageAnimal');

    if (Age.value > 30) {alert("Введен очень большой возраст, введите поменьше");}
    if (Name.value == "") {alert("Введите имя питомца");}
    if (Age.value == "") {alert("Введите возраст питомца");}

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

    //проверка массива методом Array.isArray
    if (Array.isArray(arrValues)) obj.test1.value = "true";
    else obj.test1.value = "false";

    //метод .reduce()
    const sumValues = (total, value) => total + value;
    document.getElementById("test2").value = arrValues.reduce(sumValues);
    
    //метод .map()
    const Transform = function(value) { 
        return value * 2;
    }
    document.getElementById("test3").value = arrValues.map(Transform);

    //spread/rest
    let Spread = (x,y,z,k,l,m) => console.log("... Как оператор расширения: " + x,y,z,k,l,m);
    Spread(...arrValues);
    let Rest = (...args) => console.log("Остаточные параметры: " + args);
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