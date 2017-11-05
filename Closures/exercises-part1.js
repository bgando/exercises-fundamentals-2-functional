/*
  TODO:
  Create a function called 'makeAdder' which will take in a number 'num' and return a function. When 'makeAdder's
  return function is called, it should add the orginal value (passed to makeAdder the first time) and the
  second value (passed into makeAdder return function)

  Example:
    let addByOne = makeAdder(1);
    let result = addByOne(100)
    result === 101
*/



/*
  TODO:
  Create a function called 'onlyOnce' will take in a function and return a version of the passed in function
  that can only be called once.

  Example 1:
  let num = 0;
  function addOne() {
    return num += 1;
  }
  let addOneOneTime = callOnce(addOne);
  addOneOneTime();
  num === 1

  addOneOneTime() === 'Function already used.'



  Example 2:
  let appInitialized = false;
  let bootstrapAppOnce = onlyOnce(bootstrapApp);

  bootstrapAppOnce();
  appInitialized === true;

  bootstrapAppOnce() === 'Function already used.'
*/
