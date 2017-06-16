// Part 1



// Part 2



// Part 3
var tomBrady = {
    firstName: 'Tom',
    lastName: 'Brady',
    height: [6, 4],
    weight: 225,
    specialSkills: 'Cultivating Falcon tears'
    teammates: [
      {
        firstName: 'Rob',
        lastName: 'Gronkowski',
        age: 27,
      },
      {
        firstName: 'Julian',
        lastName: 'Edelman',
        age: 30
      },
      {
        firstName: 'Dion',
        lastName: 'Lewis',
        age: 26
      }
    ],
    superBowlRings: 5,
    throwFootball: function() {
      return 'Touchdown!';
    },
    introduce: function() {
      console.log(`I am ${this.firstName} ${this.lastName}`);
    }
};
