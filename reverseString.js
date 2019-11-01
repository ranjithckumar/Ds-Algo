// Reverse the characters of the string 
// Example: Input:Apple, Output:elppA

function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
//   Using Spread operator
  const reverse3 = str => [...str].reverse().join('');
  
  console.log(reverse('Aplle'));
  console.log(reverse2('Aplle'));
  console.log(reverse3('Aplle'));