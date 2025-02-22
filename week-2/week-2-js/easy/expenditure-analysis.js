/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spentEstimates = {};

  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];

    if (spentEstimates[t.category]) {
      spentEstimates[t.category] += t.price;
    } else {
      spentEstimates[t.category] = 0;
      spentEstimates[t.category] += t.price;
    }
  }

  var key = Object.keys(spentEstimates);

  let answer = [];
  for (var i = 0; i < key.length; i++) {
    var category = key[i];

    var obj = {
      category: category,
      totalSpent: spentEstimates[category] 
    };
    answer.push(obj);
  }

  console.log(answer);
  return answer
}

var transactions = [
  { item: "Milk", category: "Dairy", price: 10, timestamp: "10:30" },
  { item: "Face Wash", category: "Beauty", price: 20, timestamp: "10:30" },
  { item: "T-shirt", category: "Fashion", price: 30, timestamp: "10:31" },
  { item: "Paneer", category: "Dairy", price: 40, timestamp: "10:33" },
  { item: "Powder", category: "Fashion", price: 50, timestamp: "10:34" },
];

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;