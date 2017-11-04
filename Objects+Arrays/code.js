/* 
1)
Implement addFirstToThird so that it returns the sum of values at two 
inputted indexes. Don't forget about that arrays are zero-based 
*/
const addValuesAtIndexes = (arr, index1, index2) => {
  // YOUR CODE HERE
  return arr[index1] + arr[index2];
};

/* 
2)
Given a daily menu object, write a function getLunch that returns 
the menu item that is for lunch

*** EXAMPLE ***

const mondayMenu = {
  breakfast: 'eggs',
  lunch: 'sandwich',
  dinner: 'stir-fry'
};

const result = getLunch(mondayMenu) // result should equal 'sandwich'

*/

const getLunch = (menu) => {
  // YOUR CODE HERE
  return menu['lunch'];
};

/*
Given an array of menu objects, return an array of the menu objects where the dinner
property has a lowSugar equal to true.

*** EXAMPLE ***

const mondayMenu = {
  breakfast: 'eggs',
  lunch: 'sandwich',
  dinner: {
    item: 'stir-fry',
    lowSugar: false
  }
};

const tuesMenu = {
  breakfast: 'waffles',
  lunch: 'sandwich', 
  dinner: {
    item: 'pork chops',
    lowSugar: true
  }
}

const menuArr = [mondayMenu, tuesdayMenu];

const result = getLowSugarMenu(menuArr) 
// result should be an array contain only the tuesMenu object 
*/
const getLowSugarMenu = (menuArr) => {
  return menuArr.filter(item => {
    return item.dinner.lowSugar === true;
  });
};