new Vue({
  el:'#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods : {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth  = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.appendPlayerDamage(damage);
      if (this.checkWin()){
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.appendPlayerDamage(damage);
      if (this.checkWin()){
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {
      if(this.playerHealth <= 90){
        this.playerHealth += 10;
        }else{
          this.playerHealth = 100;
        }
      this.turns.unshift({
        isPlayer: true,
        text:'Player heals for 10 hp'
      });
      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function(){
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.appendMonsterDamage(damage);
    },
    calculateDamage: function(min, max) {
      //math.max() returns the larger of two numbers so we calculate a random number between 1 and 10, but run it through max.max() and insert our min damage amount to make sure no attack is less than 3 and no greater than 10
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0){
          if(confirm('you done did it! New game?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        } else if (this.playerHealth <= 0) {
            if(confirm('you fucked up! New game?')){
              this.startGame();
            } else {
              this.gameIsRunning = false;
            }
            return true;
        }
        return false;
    },
    calculateHeal: function(healMin, healMax) {
      return Math.max(Math.floor(Math.random() * healMax) + 1, healMin);
    },
    appendPlayerDamage: function(damage) {
      this.turns.unshift({
        isPlayer: true,
        text:'Player hits moster for ' + damage + ' hp'
      }); //push to the beginning of the array
    },
    appendMonsterDamage: function(damage) {
      this.turns.unshift({
        isPlayer: false,
        text:'Monster hits player for ' + damage + ' hp'
      }); //push to the beginning of the array
    }
  }
});
