describe('Add Number', function() {
  // var addNumber;
  //
  // beforeEach(function() {
  //   addNumber = function(){};
  // });

  it('addNumber should be defined and be a function', function() {
    expect(addNumber).to.be.a("function");
  });

  it('adding should work', function(){
    expect(addNumber(1,2)).to.equal(3)
  });


  // it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
  //   var array = [];
  //   var func = function(value){ array.push(value); };
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.depthFirstLog(func);
  //   console.log(array);
  //   expect(array).to.eql([5,2,3]);
  // });
});
