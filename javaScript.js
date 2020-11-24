const totalBillAmount = document.querySelector('.billAmount').innerHTML;
const serviceLevel = document.querySelector('.service').innerHTML;
const numberOfPersons = document.querySelector('.guests').innerHTML;

let outstandingServ = document.querySelector('#outstanding').innerHTML;
outstandingServ = 0.3;
let goodServ = document.querySelector('#good').innerHTML;
goodServ = 0.2;
let okServ = document.querySelector('#ok').innerHTML;
okServ = 0.15;
let badServ = document.querySelector('#bad').innerHTML;
badServ = 0.1;
let ncbServ = document.querySelector('#ncb').innerHTML;
ncbServ = 0;



function checkTip () {
    let billAmount = Number(totalBillAmount.value);
    let service = Number(serviceLevel.value);
    let guests = Number(numberOfPersons.value);
    let tip = Number((billAmount * service) / guests);

    document.getElementById('tipResult').innerHTML = `You should pay ${tip} each.`;  
}


    