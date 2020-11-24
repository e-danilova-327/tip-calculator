const totalBillAmount = document.querySelector('.billAmount');
const serviceLevel = document.querySelector('.service');
const numberOfPersons = document.querySelector('.guests');

let outstandingServ = document.querySelector('#outstanding');
outstandingServ = 0.3;
let goodServ = document.querySelector('#good');
goodServ = 0.2;
let okServ = document.querySelector('#ok');
okServ = 0.15;
let badServ = document.querySelector('#bad');
badServ = 0.1;
let ncbServ = document.querySelector('#ncb');
ncbServ = 0;

const tipBtn = document.querySelector('.tipButton');

tipBtn.addEventListener('click', checkTip);

function checkTip () {
    let billAmount = Number(totalBillAmount.value);
    let service = Number(serviceLevel.value);
    let guests = Number(numberOfPersons.value);
    let tip = (billAmount * service) / guests;

    return tip;
}


    