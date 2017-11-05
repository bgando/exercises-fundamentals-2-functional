/**
 * NOTE: Do not modify
 * An asynchronous function that finds the killer player and then passes the killer player value to our passed
 * in callback function at some time later in the future.
 * @return {undefined}
 */
function findKillerPlayer(callback){
  let waitTime = (Math.floor(Math.random() * 8) + 1) * 100; //a random number between 1-8 *100
  let response = "Jonny Ives";
  setTimeout(() => { callback(response) }, waitTime);
}




/*
  GOAL: Convert our `findKillerPlayer` function to a promise called `findKillerPlayerPromise`.
  TODO: Create a function called 'findKillerPlayerPromise' which should return a promise.
        Hint:findKillerPlayerPromise' should make use 'findKillerPlayer' inside.

        Example usage:
        findKillerPlayerPromise()
          .then((response) => {
            response === 'Jonny Ives'
          })
*/























/**
 * NOTE: Do not modify
 * An asynchronous function that updates our server that the game has ended and return a boolean of
 * true if our game has ended.
 * @return {undefined}
 */
function endGame(callback){
  let waitTime = (Math.floor(Math.random() * 8) + 1) * 100; //a random number between 1-8 *100
  let response = true
  setTimeout(() => { callback(response) }, waitTime);
}






/*
  GOAL: Convert our `endGame` function to a promise called `endGamePromise`.
  TODO: Create a function called 'endGamePromise' which should return a promise.
        `endGamePromise` also takes in a string called `gameStatus` which could either be of the value `complete` any other string value the user passes in.
        Hint: endGamePromise' should make use 'endGame' inside.

        Example usage #1:
        endGame('active')
          .then((response) => {
            response === true'
          })

        Example usage #2:
        endGame('complete')
          .then((response) => {
            //NOTE: this code won't run anymore
            response === 'Jonny Ives'
          })
          .catch((error) => {
            //NOTE: this code should run though
            error === 'game is still active'
          })
*/















/*
  TODO: Create an async function called 'findKillerAsync'.
        It should make use of 'findKillerPlayerPromise' inside
*/







/*
    TODO: Create an async function called 'endGameAsync'. Like `endGamePromise`, `endGameAsync`
         takes in a string called `gameStatus` which could either be of the value `complete` any other string value the user passes in.
         You should make use of `endGamePromise` inside
*/

