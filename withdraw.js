document.getElementById('btn-withdraw').addEventListener('click', function () {
    //call
    const withdrawAmount = getInputFieldValueById('withdraw-field');
    const withdrawTotalAmount = getTextElementValueById('withdraw-total');
    //calculation
    const withdrawTotalValue = withdrawAmount + withdrawTotalAmount;
    //set withdraw total
    setTextElementValueById('withdraw-total', withdrawTotalValue);
    //for call balance

    const balanceTotal = getTextElementValueById('balance-total');
    //calculation
    const newBalance = balanceTotal - withdrawAmount;
    //set
    setTextElementValueById('balance-total', newBalance);

})