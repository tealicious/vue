var vm = new Vue({
  el: '#app',
  data: {
    playerHealth  : 100,
    dragonHealth  : 100,
    gameIsRunning : false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.dragonHealth = 100;
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.dragonHealth -= damage;

      this.checkWin();

      var newThis = this;
      setTimeout(function(){
        newThis.playerHealth -= Math.floor(damage/1.25);
      }, 150);


    },
    specialAttack: function() {
      var damage = this.calculateDamage(5, 15);
      this.dragonHealth -= damage;

      if(this.dragonHealth <= 0){
          alert('You won!');
          this.gameIsRunning = false;
          return;
      }

      var newThis = this;
      setTimeout(function(){
        newThis.playerHealth -= Math.floor(damage/1.11);
      }, 150);

      if (this.playerHealth <= 0){
          alert('you lost! that dragon just fucking ate you bro.');
          this.gameIsRunning = false;
          return;
      }
    },
    heal: function() {

    },
    giveUp: function() {

    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor((Math.random() * max) + 1, min));
    },
    checkWin: function() {
      if(this.dragonHealth <= 0){
          if(confirm('You won! New Game?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          } return true;
        } else if (this.playerHealth <= 0) {
            if(confirm('you lost! that dragon just fucking ate you bro. play again?')) {
              this.startGame();
            } else {
              this.gameIsRunning = false;
            }
          }
            return true;
      }
    }
  });
