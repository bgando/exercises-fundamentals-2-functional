describe('Part(2) Using Functions', () => {

  describe('Exercise1: Applying functions on a list', () => {

    it('printName should be a function', () => {
      expect(printName).to.be.a('function')
    });

    it('nameList should be an array of name strings', () => {
      let containsOnlyStrings = nameList.every((item) => {
        return typeof item === 'string' && item.length > 0
      })
      expect(nameList).to.be.a('array')
      expect(containsOnlyStrings).to.equal(true)
    });

    it('logAllNames should be a function', () => {
      expect(logAllNames).to.be.a('function')
      let containsOnlyStrings = nameList.every((item) => {
        return typeof item === 'string' && item.length > 0
      })
      expect(nameList).to.be.a('array')
      expect(containsOnlyStrings).to.equal(true)
    });

    it('printName should be called for each item in a nameList when passed to logAllNames', function() {
      var spyPrintName = chai.spy(printName);
      logAllNames(spyPrintName, nameList)
      expect(spyPrintName).to.have.been.called.exactly(nameList.length);
    });
  })

  describe('Transforming each item in a list with a function', () => {

    it('doubler should be a function', () => {
      expect(doubler).to.be.a('function')
    });
    it('doubler should double a number', () => {
      expect(doubler(2)).to.equal(4)
      expect(doubler(6)).to.equal(12)
    });

    it('integerList should be an array of numbers', () => {
      let containsOnlyNumbers = integerList.every((item) => {
        return typeof item === 'number'
      })
      expect(integerList).to.be.a('array')
      expect(containsOnlyNumbers).to.equal(true)
    });

    it('doubleIntegerList should be a function', () => {
      let doubledIntegerListResult = integerList.map((number) => number*2)
      var spyDoubler = chai.spy(doubler);
      doubleIntegerList(spyDoubler, integerList)
      expect(spyDoubler).to.have.been.called.exactly(integerList.length);

      expect(doubleIntegerList(spyDoubler, integerList)).to.deep.equal(doubledIntegerListResult);
    });

    it('printName should be called for each item in a nameList when passed to logAllNames', function() {
      var spyPrintName = chai.spy(printName);
      logAllNames(spyPrintName, nameList)
      expect(spyPrintName).to.have.been.called.exactly(nameList.length);

    });
  })



  describe('Excercise 3: Implementing map', () => {

    it('map should be a function', () => {
      expect(map).to.be.a('function')
    });

    it('map implementation should not use native map or forEach functions', () => {
      expect(map.toString().includes('.map')).to.equal(false)
      expect(map.toString().includes('.forEach')).to.equal(false)
    });
  
    it('should apply a function to every value in an array', function() {
      var modifiedNames = map(['ann', 'ben', 'john'], function(name) {
        return name + '!';
      });

      expect(modifiedNames).to.deep.equal(['ann!', 'ben!', 'john!']);
    });

    it('should return a brand new array instead of modifying the original', function() {
      var names = ['ann', 'ben', 'john']
      var newNames = map(names, function(name) {
        return name + "!";
      });

      expect(names).to.not.deep.equal(newNames);
      expect(names).to.deep.equal(names);
    });


  })
});

