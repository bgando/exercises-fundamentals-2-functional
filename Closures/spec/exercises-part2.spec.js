describe('(Part2): Module Revealing Pattern', () => {

  describe('Counter', () => {

    it('Counter should be function', () => {
      expect(Counter).to.be.a('function')
    });

    it("Counter should have a 'count' variable with a value of 0", () => {
      let containsZero = Counter.toString().includes('count = 0') || Counter.toString().includes('count=0') || Counter.toString().includes('count =0') || Counter.toString().includes('count= 0')
      expect(containsZero).to.equal(true);
    });

    it("Instantiating Counter should give us access only to public methods increment, decrement & showCount, but not private variables like 'counter'", () => {
      let myCounter = Counter();
      let containsPrivateMethod = Counter.toString().includes('destroyCounter')
      expect(myCounter.increment).to.be.a('function');
      expect(myCounter.decrement).to.be.a('function');
      expect(myCounter.showCount).to.be.a('function');
      expect(myCounter.count).to.be.undefined
    });


    it("calling increment should update our counter", () => {
      let myCounter = Counter();
      myCounter.increment()
      expect(myCounter.showCount()).to.equal(1)
    })

    it("calling decrement should update our counter", () => {
      let myCounter = Counter();
      myCounter.decrement()
      expect(myCounter.showCount()).to.equal(-1)
    })

    it("calling showCount should return the current value of our counter", () => {
      let myCounter = Counter();
      expect(myCounter.showCount()).to.equal(0)
      myCounter.increment()
      expect(myCounter.showCount()).to.equal(1)
    })

    it("if the user is an 'admin then the 'resetCounter' should be accessible'", () => {
      let myCounter = Counter('admin');
      expect(myCounter.showCount()).to.equal(0)
      myCounter.increment()
      expect(myCounter.showCount()).to.equal(1)
      myCounter.resetCounter()
      expect(myCounter.showCount()).to.equal(0)
    })

  });

})

