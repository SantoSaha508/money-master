// function for expenses
function expensesSave(costId){
    const peekCost = document.getElementById(costId);
    const peekValue = parseFloat(peekCost.value);
    //peekCost.value = '';
    return peekValue;
}

// function for peek total Expenses & Balance & save, remaining input field
function expensBalance(expensBalanceId){
    const peekField = document.getElementById(expensBalanceId);
    return peekField;
}

// for calculate button
document.getElementById('calculateSubmit').addEventListener('click', function(){

    // income value
    const incomeValue = expensesSave('incomeInput');
    // peek foood cost
    const foodValue = expensesSave('foodInput');
    // peek rent cost
    const rentValue = expensesSave('rentInput');
    // peek cloth cost
    const clothValue = expensesSave('clothInput');

    // peek total expenses///////////////
    const totalExpenField = expensBalance('totalExpn');
    const expenses = foodValue + rentValue +clothValue;
    totalExpenField.innerText = expenses;

    // peek balance ////////////////
    const balanceInputField = expensBalance('balance');
    const totalBalance = incomeValue - expenses
    balanceInputField.innerText = totalBalance;
    
})

document.getElementById('save').addEventListener('click', function(){
    // income value
    const incomeValue = expensesSave('incomeInput');
    // peek save input field
    const savePercent = expensesSave('savePercent');
    
    // peek saving amount field
    const saveAmount = expensBalance('savaAmount');
    
    // calculate saving amount
    const calculate = incomeValue * (savePercent /100);
    saveAmount.innerText = calculate;
    // calculate remaning balance
    const balanceText = expensBalance('balance');
    const balance = balanceText.innerText;
    console.log(balance);
    const remBalance = expensBalance('remaningBalance')
    const remaningBalance = parseFloat(balance - calculate);
    remBalance.innerText = remaningBalance;

})