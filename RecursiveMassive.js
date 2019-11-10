var arr = [1, 2, 3, 4, 5, 6, 7, [1, 2, 3, 4, 5, 6, 7, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9]]];


function RecursiveArr(arr){
    for(let item of arr){
        if(typeof(item) === 'object'){
            RecursiveArr(item);
        }else{
            console.log(item);
        }
    }
}

RecursiveArr(arr);