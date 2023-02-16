
document.getElementById('deposit-btn').addEventListener('click',function(){
const newDeposit = getInputValueById('deposit-field');
const previousDeposit = getElementByIdForAmount('deposit-amount')
const depositTotal = previousDeposit+newDeposit
setTextElementById('deposit-amount',depositTotal)

const  previousBalance = getElementByIdForAmount('balance')
const newBalanceTotal = previousBalance + newDeposit;
setTextElementById('balance',newBalanceTotal);


})