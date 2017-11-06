describe('Arrays', () => {
  it('should be able to access values in specific indexes', () => {
    const snacks = ['peanuts', 'popcorn', 'hot dogs', 'candy', 'ice cream'];
    const result = chooseMovieSnacks(snacks, 0, 2);
    const expected = 'My favorite movies snacks are peanuts and hot dogs.';
    expect(result).to.equal(expected);
  })
});

describe('Objects', () => {
  it('should be able to access specific properties on objects', () => {
    const tuesdayMenu = {
      breakfast: 'waffles',
      lunch: 'pizza',
      dinner: 'super salad'
    };
    
    const result = getLunch(tuesdayMenu);
    expect(result).to.equal('pizza');
  })
  
  it('should use the bracket notation for access when accessing a user-supplied property', () => {
    const tuesdayMenu = {
      breakfast: 'waffles',
      lunch: 'pizza',
      dinner: 'super salad'
    };
    const result = getMeal(tuesdayMenu, 'dinner');
    expect(result).to.equal('super salad');
  });
})

describe('Objects and Arrays', () => {
  it('can be nested inside of each other to utilize the properties of both', () => {
    const mondayMenu = {
      breakfast: 'eggs',
      lunch: 'sandwiches',
      dinner: {
        item: 'stir-fry',
        lowSugar: false
      }
    };
    
    const tuesdayMenu = {
      breakfast: 'waffles',
      lunch: 'sandwiches',
      dinner: {
        item: 'pork chops',
        lowSugar: true
      }
    }
    
    const wednesdayMenu = {
      breakfast: 'pancakes',
      lunch: 'banh mi',
      dinner: {
        item: 'tomatillo soup',
        lowSugar: true
      }
    }
    const menuArr = [mondayMenu, tuesdayMenu, wednesdayMenu];
    
    const result = getLowSugarMenu(menuArr);
    expect(result.length).to.equal(2);
    expect(result[0].breakfast).not.to.equal('eggs');
    expect(result[1].lunch).to.equal('banh mi');
  })
  
  it('pass primitives by value and objects by reference', () => {
    const mondayMenu = {
      breakfast: 'eggs',
      lunch: 'sandwiches',
      dinner: {
        item: 'stir-fry',
        lowSugar: false
      }
    };
  
    const tuesdayMenu = {
      breakfast: 'waffles',
      lunch: 'sandwiches',
      dinner: {
        item: 'pork chops',
        lowSugar: true
      }
    }
  
    const wednesdayMenu = {
      breakfast: 'pancakes',
      lunch: 'banh mi',
      dinner: {
        item: 'tomatillo soup',
        lowSugar: true
      }
    }
    
    const menuArr = [mondayMenu, tuesdayMenu, wednesdayMenu];
    
    let newMenuArr = copyMenu(menuArr);
    
    newMenuArr[1].lunch = 'fish sticks';
    expect(newMenuArr[1].lunch).to.equal('fish sticks');
    expect(menuArr[1].lunch).to.equal('sandwiches');
  })
})