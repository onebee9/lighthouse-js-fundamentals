const conditionalSum = function(values, condition) {
    let sum = 0;
    if (values && condition){
        if (condition == "even"){
            for(let i=0; i<values.length; i++){
                if (values[i] % 2 == 0){
                    sum +=values[i];
                    
                }
                
            }
        }
        else if (condition == "odd"){
            for(let i=0; i<values.length; i++){
                if (values[i] % 2 !== 0){
                    sum +=values[i];
                }
            }

        }
        else {
            console.log('please enter a valid variable');
        }

    }
return sum;
}
  console.log('even output'+ conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log('odd output'+ conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log('even output'+ conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log('empty output'+ conditionalSum([], "odd"));