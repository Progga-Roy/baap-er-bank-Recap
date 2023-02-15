document.getElementById('withdraw-btn').addEventListener('click',function(){

const withdrawField = document.getElementById('withdraw-field')
const withdrawFieldText = withdrawField.value ;
const withdrawFieldTextString = parseFloat(withdrawFieldText)

// console.log(withdrawFieldTextString)

const withdrawAmount = document.getElementById('withdraw-amount');
const withdrawAmountText = withdrawAmount.innerText;
const withdrawAmountTextString = parseFloat(withdrawAmountText)
const countWithdrawAmount = withdrawAmountTextString+withdrawFieldTextString;

withdrawAmount.innerText=countWithdrawAmount;

const balance = document.getElementById('balance');
const balanceText = balance.innerText;
const balanceTextString = parseFloat(balanceText);
const countWithdrawBalance = balanceTextString - withdrawFieldTextString;
balance.innerText = countWithdrawBalance;

withdrawField.value = '';
})