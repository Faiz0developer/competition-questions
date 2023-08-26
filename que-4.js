const createCounter = (init) => {
  let newNum = init;
  const increment = () => ++newNum;
  const decrement = () => --newNum;
  const reset = () => (newNum = init);
  return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
