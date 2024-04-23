const totalToPay = document.querySelector('.total');
const calculateBtn = document.querySelector('#calculate-btn');

const inputField = document.querySelector('.input-field');

const calculateTotalCost = () =>{
    let amount = inputField.value
    if (amount >= 50) {
        totalToPay.innerHTML = `Your total for the order is $${(amount)} enjoy free shipping
        on orders  over $50
        `
    } else {
        totalToPay.innerHTML = `Your total for the order is $${parseInt(amount) + 10}`
    }
    console.log(amount);
}

const enterToCalcBill = (e) =>{
    if (e.keyCode === 13) {
        calculateTotalCost()
    }
}

calculateBtn.addEventListener('click', calculateTotalCost)

inputField.addEventListener('keydown', enterToCalcBill)