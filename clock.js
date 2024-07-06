let Name = prompt("Lütfen adınızı giriniz: ");

let nameDOM = document.querySelector("#myName");
let myclockDom = document.querySelector("#myClock");
let gunDOM = document.querySelector("#gun");

nameDOM.innerHTML = Name;

setInterval(simdikiZaman, 1000);


function simdikiZaman(){
    let zaman = new Date();
    myclockDom.innerHTML = `${zaman.toLocaleTimeString()}`
    zaman.getDate() == 1 ? (gunDOM.innerHTML = "Pazartesi") : 
    zaman.getDate() == 2 ? (gunDOM.innerHTML = "Salı") :
    zaman.getDate() == 3 ? (gunDOM.innerHTML = "Çarşamba") :
    zaman.getDate() == 4 ? (gunDOM.innerHTML = "Perşembe") :
    zaman.getDate() == 5 ? (gunDOM.innerHTML = "Cuma") :
    zaman.getDate() == 6 ? (gunDOM.innerHTML = "Cumartesi") :
    zaman.getDate() == 7 ? (gunDOM.innerHTML = "Pazar") :
    gunDOM.innerHTML = "Yok";

}