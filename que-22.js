const maxProfit = (prices) => {
  let oneDay = 0;
  let diff = 0;
  let arr = [];
  while (oneDay < prices.length) {
    for (i = oneDay; i < prices.length; i++) {
      diff = prices[oneDay] - prices[i];
      arr.push(diff);
    }
    oneDay++;
  }
  return -Math.min(...arr);
};

const prices = [7, 1, 5, 3, 6, 4];

const max_profit = maxProfit(prices);
console.log(max_profit);
