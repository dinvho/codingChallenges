// IQTest
function iqTest(numbers) {
  numbers = numbers.split(' ');

  var positions = [[], []];

  for (var i = 0; i < numbers.length; i++) {
      positions[numbers[i] % 2].push(i + 1);
  }

  if(positions[0].length === 1) return positions[0][0];
  if(positions[1].length === 1) return positions[1][0];

  return 0;
