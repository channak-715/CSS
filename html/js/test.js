/*let str = '7';
str = ((Number(str) + 7)**2).toFixed(2);

// callback function


function display(x){
    document.write(`<h1>${x}</h1>`);
    function show(x){
        window.alert(x);
    }
}



function calculate(x, y, callback){
    let z = x + y;
    callback(z);
}
calculate(1, 4,display)

*/

//create object
/*
function song(title, name){
    this.title = title;
    this.name = name;
    this.addprice = addprice;
}
function addprice(amount){
    this.price = ++amount;
}

let W = new song();
W.title = "save your tears";
W.name = "me";
W.addprice(200);
console.log(W.price);*/
/*
const radioMale = document.getElementById("radioMale");
const radioFmale = document.getElementById("radioFemale");
const Gender = document.getElementById("resultGender");
const btnsub = document.getElementById("btnsub");

btnsub.onclick = () => {
    (radioFmale || radioMale).checked ? Gender.textContent = `you are check`: Gender.textContent = `you need to do it`;
};

*/

// promise
/*
let vb = () => {
    setInterval(() => {
        document.write(`<h1>ME</h1> ${Date()}`);
    }, 1000);
}

vb;

*/

let cb = [2,4,6];

cb.forEach(d);

function d(elemnt){
    console.log(elemnt);
}