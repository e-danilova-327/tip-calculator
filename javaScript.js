const totalBillAmount_input = document.querySelector('.billAmount');
const serviceLevel_input = document.querySelector('.service');
const numberOfPersons_input = document.querySelector('.guests');




function checkTip () {
    let billAmount = Number(totalBillAmount_input.value);
    let service = Number(serviceLevel_input.value) / 100;
    let guests = Number(numberOfPersons_input.value);
    let tip = (billAmount * service) / guests; 
    if (guests>1) {
        document.getElementById('tipResult').innerHTML =`This much ${tip.toFixed(2)}`;
    } else {
        alert("Please pay attention to the real number of guests!");
    }
}


