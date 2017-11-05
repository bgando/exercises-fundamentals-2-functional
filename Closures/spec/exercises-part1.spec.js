describe('(Part1): Using closures to create utility functions', () => {

  describe('makeAdder', () => {

    it('makeAdder should be defined', () => {
      expect(makeAdder).to.be.a('function')
    });

    it('makeAdder should return a function', () => {
      let addByOne = makeAdder(1);
      expect(addByOne).to.be.a('function');
    });

    it("should add the orginal value (passed to makeAdder the first time) and the second value (passed into makeAdder return function)", () => {
      let addByOne = makeAdder(1)
      expect(addByOne(3)).to.equal(4)
    })
  });


  describe('callOnce', () => {

    it('callOnce should be defined', () => {
      expect(callOnce).to.be.a('function')
    });

    it('callOnce should return a function', () => {
      let result = callOnce(function(){})
      expect(result).to.be.a('function')
    });

    it('repeated calls to the function that callOnce returns should return a message that the function was already used.', () => {
      let num = 0;
      function addOne() {
        return num += 1;
      }
      let addOneOnce = callOnce(addOne);

      addOneOnce();
      expect(num).to.equal(1);
      expect(addOneOnce()).to.equal('Function already used.');

    });
  });
})

