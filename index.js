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

function tailsNeverFails(gifts){
  let countdown = 10;
  while (maybeTrue()) {
    console.log('And I ran... I ran so far away!');
  }
}
