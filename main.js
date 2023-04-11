// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


const validateCred = cardNumber => {
  var newList = cardNumber.slice(0, -1);
  var revList = [];
  var doubledList = [];
  
  for (let i = newList.length - 1; i >= 0; i--) {
    revList.push(newList[i]);
  }
  for (let q = 0; q <= revList.length - 1; q += 2) {
    if (revList[q] * 2 > 9) {
      doubledList.push((revList[q] * 2) - 9);
      //console.log((revList[q] * 2) - 9);
        }
    else {
      doubledList.push(revList[q] * 2);
    }
  }
    for (let z = 1; z <= revList.length - 1; z += 2) {
      doubledList.push(revList[z]);
    }
  var totalSum = 0
  for (let x = 0; x <= doubledList.length - 1; x++) {
    totalSum += doubledList[x];
  }
  totalSum += cardNumber[cardNumber.length - 1];
  
  /*console.log(newList);
  console.log(revList);
  console.log(doubledList);
  console.log(totalSum);
  */
  
  if (totalSum % 10 === 0) {
    return true;
  }
  else {
    return false;
}};

let validCards = [];
let invalidCards = [];
const findInvalidCards = (cardArray) => {
  for(let i = 0; i < cardArray.length; i++){
    if (validateCred(cardArray[i]) === true){
      validCards.unshift(cardArray[i]);
    }
    else{
      invalidCards.unshift(cardArray[i]);
    }
  }
  return validCards;
}

const idInvalidCardCompanies = creditCards =>{

  let companiesWithInvalidCards = [];
    for (let i = 0; i < creditCards.length; i++){
        switch (creditCards[i][0]){
            case 3:
                if (!companiesWithInvalidCards.includes('Amex (American Express')){
                    companiesWithInvalidCards.push('Amex (American Express)');
                };
                
            case 4:
                if (!companiesWithInvalidCards.includes('Visa')){
                companiesWithInvalidCards.push('Visa');
                }
            case 5:
                if (!companiesWithInvalidCards.includes('Mastercard')){
                companiesWithInvalidCards.push('Mastercard');
                }
            case 6:
                if (!companiesWithInvalidCards.includes('Discover')){
                companiesWithInvalidCards.push('Discover');
                }
            default:
                if (!companiesWithInvalidCards.includes('Company not found')){
                companiesWithInvalidCards.push('Company not found');
                }
        }
            
    }
    return console.log(companiesWithInvalidCards);
}

idInvalidCardCompanies(findInvalidCards(batch));







