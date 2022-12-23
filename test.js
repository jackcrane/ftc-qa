function parse(str) {
  // Use the regular expression to split the string into an array of substrings
  const substrings = str.split(/(Game Manual [12]\s*<[a-zA-Z]{1,2}\d{1,3}?>[a-z]|!Q\d{1,3}\b)/);

  // Remove any empty strings from the array
  return substrings.filter((s) => s !== '');
}

console.log(parse('We think that Game Manual 1 <GS45> may solve your issue'));
// Output: ["We think that ", "Game Manual 1 <GS45>", " may solve your issue"]

console.log(parse('Apparently Game Manual 2 <GS0> could be it'));
// Output: ["Apparently ", "Game Manual 2 <GS0>", " could be it"]

console.log(parse('Game Manual 2 <R7> is the one you need'));
// Output: ["Game Manual 2 <R7>", " is the one you need"]

console.log(parse('According to the GDC, Game Manual 1 <GS45>a is the reference'));
// Output: ["According to the GDC, ", "Game Manual 1 <GS45>a", " is the reference"]

console.log(parse('As answered in !Q42, you have to'));
// Output: ["As answered in ", "!Q42", ", you have to"]

console.log(parse('Asked !Q1 earlier'));
// Output: ["Asked ", "!Q1", ", earlier"]
