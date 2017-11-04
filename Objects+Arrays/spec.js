describe('Arrays', () => {
  it('should be able to add values in specific indexes', () => {
    const example = [1, 2, 3];
    const result = addValuesAtIndexes(example, 0, 2);
    expect(result).to.equal(4);
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
})

describe('Objects and Arrays', () => {
  it('can be nested inside of each other to utilize the properties of both', () => {

    const mondayMenu = {
      breakfast: 'eggs',
      lunch: 'sandwich',
      dinner: {
        item: 'stir-fry',
        lowSugar: false
      }
    };

    const tuesdayMenu = {
      breakfast: 'waffles',
      lunch: 'sandwich',
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
})