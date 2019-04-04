// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function printBadges(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Welcome ${gifts[i]}! You are employee #${i+1}.`);
    }

    return gifts;
}

function maybeTrue() {
    return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let count = 0;
  while (maybeTrue()) {
    count++;
    console.log('You got ${count} tails in a row!');
  }
  return `You got ${count} tails in a row!`;
}
