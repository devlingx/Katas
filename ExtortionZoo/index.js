// Paste question here

const TheAmountOfExtortionIHaveToPayToTheLocalMafia = 25;

function MyPrettyLittleZooAdventureWhileWorkingAtTheRegister(MoneyInTheHandsOfPeopleStandingInTheLineToTheZoo) {
  try {
    const TheBankNotesCurrentlyLyingInTheRegister = (function () {
      return new Array(0);
    }());

    for (const TheAmountOfMoneyInTheHandOfPersonStandingInFrontOfMe of MoneyInTheHandsOfPeopleStandingInTheLineToTheZoo) {
      const TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax = TheAmountOfMoneyInTheHandOfPersonStandingInFrontOfMe - TheAmountOfExtortionIHaveToPayToTheLocalMafia;
      TakeOutMoneyFromRegisterOtherwiseKnownAsWithdraw(TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax, TheBankNotesCurrentlyLyingInTheRegister);
      PutMoneyInTheRegister(TheAmountOfMoneyInTheHandOfPersonStandingInFrontOfMe, TheBankNotesCurrentlyLyingInTheRegister);
    }
    return 'YES';
  } catch (TheErrorThatOccuredWhenTheZooHadAPowerIssue) {
    // In case of a power outage we have to instatly tell our customers 'NO'
    return 'NO';
  }
}

function TakeOutMoneyFromRegisterOtherwiseKnownAsWithdraw(TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax, TheBankNotesCurrentlyLyingInTheRegister) {
  while (TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax > 0) {
    const ThePositionOfTheBankNoteFromThePileOfMoneyIActuallyMakeFromSellingDrugsIMean25DollarsItObviouslySomethingShady = TheBankNotesCurrentlyLyingInTheRegister.reduce((m, n, i) => (n <= TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax && n > m ? i : m), -1);
    if (ThePositionOfTheBankNoteFromThePileOfMoneyIActuallyMakeFromSellingDrugsIMean25DollarsItObviouslySomethingShady === -1) throw new Error('no');
    const TheAmountOfMoneyIGrabbedFromTheRegisterAtThisStepOfMeTakingOutMoney = TheBankNotesCurrentlyLyingInTheRegister.splice(ThePositionOfTheBankNoteFromThePileOfMoneyIActuallyMakeFromSellingDrugsIMean25DollarsItObviouslySomethingShady, 1);
    TheAmountOfMoneyIHaveToGiveBackToTheCustomerAfterTheExtortionTax -= TheAmountOfMoneyIGrabbedFromTheRegisterAtThisStepOfMeTakingOutMoney;
  }
}

function PutMoneyInTheRegister(AmountOfMoneyIHaveToPutInTheRegister, TheBankNotesCurrentlyLyingInTheRegister) {
  if (!AmountOfMoneyIHaveToPutInTheRegister) return;
  TheBankNotesCurrentlyLyingInTheRegister.push(AmountOfMoneyIHaveToPutInTheRegister);
}

const tickets = MyPrettyLittleZooAdventureWhileWorkingAtTheRegister;

exports.solution = tickets;
