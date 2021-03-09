// Take 10 minutes walk kyu 6 codewars

// You live in the city of Cartesia where all roads are laid out in a perfect
// grid. You arrived 10 minutes too early to an appointment, so you decided
// to take the opportunity to go for a short walk.
//
// The city provides its citizens with a Walk Generating App on their phones
// -- every time you press the button it sends you an array of one-letter
// strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
//
// You always walk only a single block in a direction and you know it takes
// you 1 minute to traverse one city block, so create a function that will
// return true if the walk the app gives you will take you exactly 10
// minutes (you don't want to be early or late!) and will, of course, return
// you to your starting point. Return false otherwise.
//
// Note: you will always receive a valid array containing a random assortment
// of direction letters ('n', 's', 'e', or 'w' only). It will never give you
// an empty array (that's not a walk, that's standing still!).

// Pseudo Code
// 1 block = 1 minute
// if walk = 10 minutes, true
// otherwise false
// must return to starting point
// if paths start with 0 (set equal to 0) we can increment or decrement
// then, if a path ends again with 0, we know it can return true

function isValidWalk(walk) {
  let ns = 0, we = 0;
    for (let dir of walk) {
      if (dir == 'n') ns += 1;
      if (dir == 's') ns -= 1;
      if (dir == 'w') we += 1;
      if (dir == 'e') we -= 1;
    }

    return walk.length == 10 && ns === 0 && we === 0;
}
