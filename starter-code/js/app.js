console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", [])
                .controller('hangmanCtrl', hangmanCtrl);


function hangmanCtrl() {
  var vm = this;

  var wordList = [
    'jigglypuff', 'oddish', 'ekans', 'eevee', 'squirtle', 'paras'
  ]

// console.log(wordList[Math.floor(6 * Math.random())])

  this.game = new HangmanGame(wordList[Math.floor(wordList.length * Math.random())]);

  vm.guessLetter = function() {
    console.log(this.game.secretWord)
    this.game.guess(this.game.input.toLowerCase())
    this.game.input=''
  }

}
