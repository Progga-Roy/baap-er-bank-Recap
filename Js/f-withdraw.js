


document.getElementById('withdraw-btn').addEventListener('click',function(){

const newWithdrawField = getInputValueById('withdraw-field');
const previousWithdraw = getElementByIdForAmount('withdraw-amount')
const totalWithdraw = previousWithdraw+newWithdrawField;
setTextElementById('withdraw-amount',totalWithdraw)

const previousBalance = getElementByIdForAmount('balance');
const calculateWithdrawBalance = previousBalance-newWithdrawField;
setTextElementById('balance',calculateWithdrawBalance)



})