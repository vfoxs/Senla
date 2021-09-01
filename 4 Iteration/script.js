
function sumInputs() {
    alert( Number(document.getElementById("x").value) +  Number(document.getElementById("y").value));
}
function subInputs() {
    alert( Number(document.getElementById("x").value) -  Number(document.getElementById("y").value));
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
        if (obj.price.value < 50) alert("Введите цену больше 50");
        if (obj.procent.value < 12) alert("Введите больше 12 процентов");
    }
    console.log(obj.itog.value);
}

function Weather(obj) {
    let weather = {
        temperature: Number(obj.temp.value),
        iceCreamVanOutside: obj.choice1.value,
        houseStatus: obj.choice2.value,
    };
    if ((weather.temperature > 0) && (weather.temperature < 30)) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию — хорошо и солнечно.');
    if (weather.temperature >= 30) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию — Жара!');
    if (weather.temperature <= 0) alert( 'Сейчас ' + weather.temperature + ' градусов по Цельсию. Одевайте теплую одежду');

    if (weather.iceCreamVanOutside === 'true') alert( "На улице подъехало мороженное ");
    if (weather.houseStatus  === 'true') alert( "Дом горит");
    if (!(weather.iceCreamVanOutside === "true" || weather.houseStatus === 'true')) {
        alert('Вероятно, можно оставаться в доме.');
    } else {
        alert('Вы должны покинуть дом.');
    }
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