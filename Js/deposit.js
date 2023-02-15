document.getElementById('deposit-btn').addEventListener('click',function(){

const  depositField = document.getElementById('deposit-field')
const newDeposit= depositField.value;
const newDepositString = parseFloat(newDeposit);
console.log(newDepositString)

const depositAmount = document.getElementById('deposit-amount')
const depositAmountText = depositAmount.innerText;
const depositAmountTextString = parseFloat(depositAmountText);


const calculateDepositAmount = newDepositString+depositAmountTextString;
depositAmount.innerText= calculateDepositAmount

const balance = document.getElementById('balance');
const balanceText = balance.innerText
const balanceTextString = parseFloat(balanceText)

const calculateBalance = balanceTextString+newDepositString;
balance.innerText = calculateBalance;

depositField.value='';

})