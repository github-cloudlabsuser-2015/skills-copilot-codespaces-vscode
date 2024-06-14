  // take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript

  function reverseSentence(sentence) {
    // Split the sentence into words, reverse the array, and join back into a string
    let reversed = sentence.split(' ').reverse().join(' ');
  
    // Ensure the first letter is uppercase and the rest are lowercase
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  
    return reversed;
  }
  
  // Example usage
  const inputSentence = "hello world";
  console.log(reverseSentence(inputSentence)); // Output: "World hello"f

  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    
  // As an illustration, pull names out of the data array
    const names = data.map(group => group.map(person => person.name));
    console.log(names); // Output: [ [ 'John', 'Jane' ], [ 'Bob' ] ]
    // Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
    const names1 = data.flatMap(group => group.map(person => person.name));
    console.log(names1); // Output: [ 'John', 'Jane', 'Bob' ]
    // Map through an array of arrays of objects
    // Example: Extract names from the data array
    // Desired outcome: ['John', 'Jane', 'Bob']
    const names2 = data.flatMap(group => group.map(person => person.name));
    console.log(names2); // Output: [ 'John', 'Jane', 'Bob' ]
    // Map through an array of arrays of objects
    // Example: Extract names from the data array
    // Desired outcome: ['John', 'Jane', 'Bob']
    const names3 = data.flatMap(group => group.map(person => person.name));
    console.log(names3); // Output: [ 'John', 'Jane', 'Bob' ]
    // Map through an array of arrays of objects
    // Example: Extract names from the data array
    // Desired outcome: ['John', 'Jane', 'Bob']
