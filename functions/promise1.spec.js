describe('Promise 1', function() {

  it('resolves', (done) => {
    //  promise1 = new Promise( (resolve) => {
    //    resolve('promise resolved');
    // });
    promise1.then( (result) => {
      expect(result).to.equal('promise resolved');
      done();
    });
  })

});
