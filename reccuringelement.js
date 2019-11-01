// Given array [2,5,3,7,2,5,1]
// It should return 2   i.e first reccuring number
// Given array [2,5,5,2,3,7,1]
// It should return 5  i.e first reccuring number
// Given array [2,5,3,7,1]
// It should return undefined  No reccuring elements

function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined
  }
//   O(n*2)
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
//   O(n)
  
  firstRecurringCharacter1([1,4,5,1,3,4,6])
  firstRecurringCharacter2([1,5,5,1,3,4,6])