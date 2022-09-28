var buah = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
buah.shift();

// 2. Sort the array in order.
buah.sort();

// 3. Put "Kiwi" at the end of the array.
buah.push("Kiwi");

// 4. Remove "Apples" from the array.
buah.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
buah.reverse();

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1];
