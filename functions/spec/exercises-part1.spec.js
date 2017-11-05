describe('(Part1) Function Declaration VS Invocation', () => {

  //Instructions
  //I recommend you think about these problems for a little bit before answering these
  it('saving a function definition to a variable should not return the result of calling the function', function() {
    function sayName(name){
      return `My name is ${name}`
    }
    let person1 = sayName


    expect(person1)
  });


  it('invoking a variable containing the function definition should return a value', function() {
    function sayName(name){
      return `My name is ${name}`
    }
    function sayGreeting(){
      return 'Hello there'
    }

    let person1 = sayName;
    let myGreeting = sayGreeting;

    let result1 = person1('Jonathan')
    let result2 = sayGreeting()

    //TODO: Make these tests pass.
    expect(person1).to.be.a('fill_me_in')
    expect(result1).to.equal('fill_me_in')






    function greetPerson(name){
      let result;
      function greeting1(){
        return "Hi nice to meet you";
      }
      function greeting2(){
        return "Hey hows it going";
      }

      if(name === 'Ben'){
        result = greeting1();
      }
      else {
        result = greeting2;
      }
      return result;
    }
    let result3 = greetPerson('Ben')
    let result4 = greetPerson('Larry')
    let result5 = result4()

    //TODO: Make these tests pass.
    expect(result3).to.equal('fill_me_in')
    expect(result4).to.be.a('fill_me_in')
    expect(result5).to.equal('fill_me_in')
  });


  it('should understand the difference between defining and invoking a function', () => {
    function getNumber(){
      return 1
    }
    function whisper(){
      return 'This is a secret.'
    }
    let resultsList1 = [];
    resultsList1.push(whisper())
    resultsList1.push(getNumber)
    resultsList1.push(whisper)
    resultsList1.push(getNumber())

    let resultsList2 = []
    resultsList2.push(getNumber)
    resultsList2.push(whisper)

    //TODO: make these pass
    expect(resultsList1[0]).to.equal('fill_me_in')
    expect(resultsList1[1]()).to.equal('fill_me_in')
    expect(resultsList1[2]).to.be.a('fill_me_in')
    expect(resultsList1[3]).to.equal('fill_me_in')


    for(var i = 0; i < resultsList2.length; i++){
      let value = resultsList2[i];
      value()
    }
    expect(resultsList1[0]).to.be.a('fill_me_in')
    expect(resultsList1[1]).to.be.a('fill_me_in')
  })

});