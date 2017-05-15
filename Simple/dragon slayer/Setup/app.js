var vm = new Vue({
  el: '#app',
  data: {
    playerHealth  : 100,
    dragonHealth  : 100,
    gameIsRunning : false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.turns = [];
      this.gameIsRunning = true;
      var newThis = this;
      setTimeout(function(){
        newThis.playerHealth = 100;
        newThis.dragonHealth = 100;
      }, 500);
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.dragonHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      this.checkWin();
      var newThis = this;
      setTimeout(function(){
        var playerDamage = Math.floor(damage/1.25);
        newThis.playerHealth -= playerDamage;
        newThis.turns.unshift({
          isPlayer: false,
          text: 'Dragon hits player for ' + playerDamage
        });
      }, 150);
    },
    specialAttack: function() {
      var damage = this.calculateDamage(5, 15);
      this.dragonHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      this.checkWin();
      var newThis = this;
      setTimeout(function(){
        var playerDamage = Math.floor(damage/1.25);
        newThis.playerHealth -= playerDamage;
        newThis.turns.unshift({
          isPlayer: false,
          text: 'Dragon hits player for ' + playerDamage
        });
      }, 150);

    },
    heal: function() {
      var healing = this.calculateHealing(5, 15);
      var damage = this.calculateDamage(3, 10);
      this.playerHealth += healing;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for ' + healing
      });
      var newThis = this;
      setTimeout(function(){
        newThis.playerHealth -= damage;
        newThis.turns.unshift({
          isPlayer: false,
          text: 'Dragon hits player for ' + damage
        });
      }, 500);
    },
    giveUp: function() {
      if(confirm('Give Up?? Are you sure??')){
        if(confirm('Play again?')){
          this.startGame();
        }else {
          this.gameIsRunning = false;
        }
      }
    },
    calculateHealing: function(min, max){
      return Math.max(Math.floor((Math.random() * max) + 1, min));
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor((Math.random() * max) + 1, min));
    },
    checkWin: function() {
      if(this.dragonHealth <= 0){
          this.dragonHealth = 0;
          if(confirm('You won! New Game?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          } return true;
        } else if (this.playerHealth <= 0) {
            this.playerHealth = 0;
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
