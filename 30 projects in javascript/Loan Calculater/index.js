 function calculateLoan() {
    const loanAmount = document.getElementById("loan-amount").value;
    const intestRate = document.getElementById("intrest-rate").value;
    const monthstToPay = document.getElementById("months-to-pay").value;
    
    const intrest = (loanAmount * (intestRate / 100)) /monthstToPay;
    const monthlyPayment = (loanAmount / monthstToPay + intrest).toFixed(2);

    document.querySelector(".payment").innerHTML = `Monthly Payment: $${monthlyPayment}`
 }
 calculateLoan();