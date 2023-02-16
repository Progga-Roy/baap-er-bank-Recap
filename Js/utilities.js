function getInputValueById(inputId){
    const inputField =document.getElementById(inputId)
    const inputFieldText = inputField.value ;
    const inputFieldTextString = parseFloat(inputFieldText)
    inputField.value ='';
    return inputFieldTextString;
    }
    
    
    function getElementByIdForAmount(elementId){
        const amount = document.getElementById(elementId)
        const amountText = amount.innerText;
        const amountTextString = parseFloat(amountText)
        return amountTextString;
    }
    
    function setTextElementById(elementId,newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
    }