/*
  TODO:
  Using the module-revealing pattern create a module called `Counter`, which should allow us to increment, decrement and show our counter's count.
  Using the module revealing pattern and closure's, you'll create a Counter that a user can use, but only
  with the methods you expose publicly.

  Correct example usage of counter:
    let myCounter = Counter()
    myCounter.increment()
    myCounter.showCount() === 1
    myCounter.decrement()
    myCounter.showCount() === 1

    //If the user using the Counter is an 'admin', then expose the 'resetCounter' only for an admin user.
    let myCounter = Counter('admin')
    myCounter.increment()
    myCounter.showCount() === 1
    myCounter.decrement()
    myCounter.showCount() === 1
    myCounter.resetCounter()
    myCounter.showCount() === 0

  Reminder: Counter's 'count' value should only be accessible
        via our 'showCount' function. User's should not be able to modify
        'count' directly like this:

        let myCounter = Counter()
        myCounter.count = 1;
        myCounter.showCount() === 1 <--- we don't want this to work this way.
*/

function Counter(userType){
  var count = 0;
  let result = {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    showCount: () => {
      return count;
    }
  }

  if(userType === 'admin'){
    result.resetCounter = () => {
      count = 0;
    }
  }

  return result
}