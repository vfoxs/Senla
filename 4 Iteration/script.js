
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
function numword(obj) 
{   let t = obj.textin.value;
    t = t.substring(0, t.length) + " ";
    obj.res1.value = t.length;
    
    let k = 0;
    let p1 = 0;
    let ind = 0;
    let cnt = 0;
    let cnt2 = 0;
    let r = 0;
    let h = 0;
    while (k < t.length)
    {   
        let b = t.substr(k, 1);
	    if (b == ' ')
	    {   ind = k;
	        str = t.slice(p1, ind); 
            while (r < str.length)
		    {   
                let x = str.substr(r, 1);
		        if (isNaN(x)) { h += 1;}	
		        r++;
		    }
            if (str.length != h) {cnt +=1;}
            if (str.length == h) {cnt2 +=1;}
	    }
        p1 = ind;
        k++;
    }
    obj.res2.value = cnt;
    obj.res22.value = cnt2;

    let res3 = 0, 
        j = 0,
        kol = 0, //кол-во букв
        kol2 = 0; //кол-во пробелов 
    while (j < t.length)
	{   
        let sim = t.substr(j,1)
	    if (isNaN(sim)) 
        { 
            kol += 1; 
            obj.data1.value += sim;
        }
	    else {obj.data2.value += sim;}
	    if (sim == ' ') 
        { 
            kol2 += 1; 
            obj.data1.value += sim;
        }
	    j++;
	}
    res3 = t.length - kol - kol2;
    obj.res3.value = res3;
}
function concWord(obj){
    obj.data3.value = obj.txt1.value + obj.txt2.value;
    return obj.data3.value;
}
function comWord(obj){
    if (obj.txt1.value == obj.txt2.value) {obj.data4.value = obj.txt1.value + " = " + obj.txt2.value;}
    if (obj.txt1.value > obj.txt2.value) {obj.data4.value = obj.txt1.value + " > " + obj.txt2.value;}
    if (obj.txt1.value < obj.txt2.value) {obj.data4.value = obj.txt1.value + " < " + obj.txt2.value;}
}
function escapeRegExp(obj){
    obj.data5.value = obj.txt1.value.match(/[.*+?^${}()|[\]\\]/);
}
function Word(obj){
    alert(`txt1 + txt2 = ${concWord(forma1)}.`); 
}
function Itog(obj){
    if (obj.price.value > 50 && obj.procent.value > 12) {
        obj.itog.value = Number(obj.price.value) * (Number(obj.procent.value)/100);
    }
    else {
        if (obj.price.value < 50) alert("Введите цену больше 50");
        if (obj.procent.value < 12) alert("Введите больше 12 процентов");
    }
    console.log(obj.itog.value);
}

function Weather(obj){
    let weather = {    
        choice: "sunny",  
        temperature: Number(obj.temp.value), 
        iceCreamVanOutside: obj.choice1.value,
        houseStatus: obj.choice2.value,
    };
    alert( "На улице " + weather.choice );
    alert( "Температура: " + weather.temperature );
    if (weather.choice === 'sunny' && weather.temperature < 86) {
        alert( 'Сейчас ' + weather.temperature + ' градусов по фаренгейту — хорошо и солнечно.');
    } else if (weather.choice === 'sunny' && weather.temperature >= 86) {
        alert( 'Сейчас ' + weather.temperature + ' градусов по фаренгейту — Жара!');
    }
    if (weather.iceCreamVanOutside === 'true') alert( "На улице подъехало мороженное ");
    if (weather.houseStatus  === 'true') alert( "Дом горит");
    if (!(weather.iceCreamVanOutside === "true" || weather.houseStatus === 'true')) {
        alert('Вероятно, можно оставаться в доме.');
    } else {
        alert('Вы должны покинуть дом.');
    }
}
function Error(){
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
function Error2(){
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