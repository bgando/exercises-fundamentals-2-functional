describe('(Part1): Converting callbacks to promises', () => {

  describe('Converting findKillerPlayer to a promise', () => {

    it('findKillerPromise should be defined', () => {
      expect(findKillerPlayerPromise).to.be.a('function')
    });

    it('findKillerPlayerPromise should return a promise when called', () => {
      let promise = findKillerPlayerPromise()
      expect(promise).to.be.a('promise')
    });

    it('findKillerPlayerPromise should make use of findKillerPlayer inside', () => {
      let callbackisUsed = findKillerPlayerPromise.toString().includes('findKillerPlayer')
      expect(callbackisUsed).to.equal(true)
    });

    it('findKillerPlayerPromise.then() should eventually resolve to a value', () => {
      return findKillerPlayerPromise().then((response) => {
        expect(response).to.equal('Jonny Ives')
      })
    });

  });

  describe('Converting `endGame` to a promise', () => {

    it('`endGamePromise` should be defined', () => {
      expect(endGamePromise).to.be.a('function')
    });

    it('`endGamePromise` should return a promise when called', () => {
      let promise = endGamePromise()
      expect(promise).to.be.a('promise')
    });
    it('`endGamePromise` should make use of `endGame` inside', () => {
      let callbackisUsed = endGamePromise.toString().includes('endGame')
      expect(callbackisUsed).to.equal(true)
    });

    it('a successfull call to `endGamePromise`()s then method should eventually resolve to a value', () => {
      let gameStatus = 'active';
      return endGamePromise(gameStatus)
        .then((response) => {
          expect(response).to.equal(true)
        })
    });

    it('a rejection from `endGamePromise` give us the message `game is still active` inside `endGamePromise`s catch method', () => {
      let gameStatus = 'complete';
      return endGamePromise(gameStatus)
        .then((response) => {
          expect(response).to.equal(true)
        })
        .catch((errorMessage) => {
          expect(errorMessage).to.equal('game is still active')
        })
    });

  });

})

describe('(Part2): Converting promises to async await', () => {

  describe('Converting findKillerPlayerPromise to an async function', () => {

    it('findKillerAsync should be defined', () => {
      expect(findKillerAsync).to.be.a('function')
    });

    it('makes use of the `async` keyword inside findKillerAsync', () => {
      let asyncKeywordIsUsed = findKillerAsync.toString().includes('async ')
      expect(asyncKeywordIsUsed).to.equal(true)
    });

    it('makes use of `findKillerPlayerPromise` inside findKillerAsync', () => {
      let promisedUsedInternally = findKillerAsync.toString().includes('findKillerPlayerPromise')
      expect(promisedUsedInternally).to.equal(true)
    });

    it('makes use of the `await` inside findKillerAsync', () => {
      let awaitKeyWordIsUsed = findKillerAsync.toString().includes('await ')
      expect(awaitKeyWordIsUsed).to.equal(true)
    });

    it('awaiting a promise inside `findKillerAsync` should eventually resolve to a value', async () => {
      const result = await findKillerPlayerPromise()
      expect(result).to.equal('Jonny Ives')
    });
  });

  describe('Converting endGamePromise to an async function', () => {

    it('endGameAsync should be defined', () => {
      expect(endGameAsync).to.be.a('function')
    });

    it('makes use of the `async` inside endGameAsync', () => {
      let asyncKeywordIsUsed = endGameAsync.toString().includes('async ')
      expect(asyncKeywordIsUsed).to.equal(true)
    });

    it('makes of use of `endGamePromise` inside endGameAsync', () => {
      let promisedUsedInternally = endGameAsync.toString().includes('endGamePromise')
      expect(promisedUsedInternally).to.equal(true)
    });

    it('make use of `await` keyword inside endGameAsync', () => {
      let awaitKeyWordIsUsed = endGameAsync.toString().includes('await ')
      expect(awaitKeyWordIsUsed).to.equal(true)
    })

    it('awaiting a promise inside `endGameAsync` should eventually resolve to a value', async () => {
      const result = await endGamePromise('active')
      expect(result).to.equal(true)
    });

    it('handles promise rejections/exceptions using try/catch inside endGameAsync', async () => {
      try {
        const result = await endGamePromise('complete')
        expect(result).to.equal(true)
      } catch (error) {
        expect(error).to.equal("game is still active")
      }
    });

    it('makes use of `try` and `catch` inside endGameAsync', async () => {
      let tryKeywordIsUsed = endGameAsync.toString().includes('try')
      let catchKeywordIsUsed = endGameAsync.toString().includes('catch')
      expect(tryKeywordIsUsed).to.equal(true)
      expect(catchKeywordIsUsed).to.equal(true)
    });
  });

})
