/* que-4)-->>
Write a function createCounter. It should accept an initial integer init. It should return an object with three 
functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

//sol ->
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
