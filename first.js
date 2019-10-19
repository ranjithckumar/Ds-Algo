// Here we have given two arrays array1 and array2 .
// Each array contains set of characters like array1=['a','b','x','y'];
// array2=['d','c','x','z'];
// you have to check wether the arrays contains common elements are not.
//If exists print true otherwise false.
// Code should be readable and scalable("Sapace complexity" "Time complexity")


function findCommonElements(array1,array2){
    // loop through the first array and create object where properties === items in the array
    let map={};
    for(i=0;i<array1.length;i++){
        if(!map[array1[i]]){
            const item=array1[i];
            map[item]=true;
        }
    }
//    loop through the second array and check if the item in second array exists on created object.
for(j=0;j<array2.length;i++){

    if(map[array2[j]]){
        console.log("True");
        return true;
    }

}
return false;
}
const array1=['a','b','x','y'];
const array2=['d','c','x','z'];
let result=findCommonElements(array1,array2);
if(result){
    console.log("Element found");
}

