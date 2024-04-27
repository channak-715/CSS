/*
setTimeout(() => {
    window.alert("hi");
},1000);*/

setInterval(() =>{
    let hours = new Date();
    document.write(`<h1> The time is
    ${hours.getHours()} : ${hours.getMinutes()} : ${hours.getSeconds()}</h1>`)

    document.close();
});