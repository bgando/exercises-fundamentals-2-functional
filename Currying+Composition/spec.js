describe('Currying', () => {
  it('is most applicable in functions that take multiple arugments', () => {
    const expected = 'It was Professor Plum with the Revolver in the Billiard Room.';
    const result = solveTheMurder('Professor Plum', 'Revolver', 'Billiard Room');
    expect(result).to.equal(expected);
  })

  it('works the same as noncurried functions if the expected number of arguments is supplied', () => {
    const expected = solveTheMurder('Professor Plum', 'Revolver', 'Billiard Room');
    const result = solveTheMurder_curry('Professor Plum', 'Revolver', 'Billiard Room');
    expect(result).to.equal(expected);
  });

  it(`allows you to supply less than the expected number of arguments, producing 
    new functions that can be invoked at a later time`, () => {
      const functionWithTwoArgumentsExpected = solveWithMrGreen.length;
      const functionWithOneArgumentExpected = solveWithMrGreenAndCandlestick.length;
      const expected = 'It was Mr. Green with the Candlestick in the Hall.';
      const resultWithMrGreen = solveWithMrGreen('Candlestick', 'Hall');
      const resultWithMrGreenAndCandlestick = solveWithMrGreenAndCandlestick('Hall');

      expect(functionWithTwoArgumentsExpected).to.equal(2);
      expect(functionWithOneArgumentExpected).to.equal(1);
      expect(resultWithMrGreen).to.equal(expected);
      expect(resultWithMrGreenAndCandlestick).to.equal(expected);
    });
});

describe('Composition', () => {
  it('allows you to apply several functions sequentially to a set of data', () => {
    const possibilitiesArr = [
      {
        name: 'Miss Scarlett',
        weapon: 'Wrench',
        room: 'Lounge'
      },
      {
        name: 'Colonel Mustard',
        weapon: 'Rope',
        room: 'Lounge'
      },
      {
        name: 'Mrs. Peacock',
        weapon: 'Dagger',
        room: 'Dining Room'
      },
      {
        name: 'Mrs. White',
        weapon: 'Dagger',
        room: 'Study'
      },
      {
        name: 'Miss Scarlett',
        weapon: 'Lead Pipe',
        room: 'Library'
      },
    ];

    const expected = [
      {
        name: 'MISS SCARLETT',
        weapon: 'WRENCH',
        room: 'LOUNGE'
      },
      {
        name: 'MISS SCARLETT',
        weapon: 'LEAD PIPE',
        room: 'LIBRARY'
      },
    ]
    const result = filterUpper(possibilitiesArr);
    expect(result).to.be.an('array');
    expect(result[0].name).to.be.a('string');
    expect(result[0].name).to.equal('MISS SCARLETT');
    expect(result[1].room).to.equal(expected[1].room);
  });
})