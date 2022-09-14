const PV = require("./modules/PV");
const loanModels = require("./data/loanModels");

const { loanOne, loanTwo, loanThree, loanFour, loanFive } = loanModels;
const loans = [loanOne, loanTwo, loanThree, loanFour, loanFive];

let runningTotal = 0;

loans.forEach((loan, idx) => {
  const { interest, payment, loanTermYears, loanAmount, loanType } = loan;

  const totalLoan = PV(interest, payment, loanTermYears, loanAmount, loanType);
  console.log(totalLoan);

  if (idx === loans.length - 1) {
    console.log(`Grand Total: ${runningTotal}`);
  } else {
    console.log(`Running Total: ${(runningTotal += totalLoan)}`);
  }
});
