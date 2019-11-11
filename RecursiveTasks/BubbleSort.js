var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, -10];
function SortBubble(arr, i){
        if (i < arr.length){
            for(let j = 0; j < arr.length - 1; ++j){
                if(arr[j] > arr[j + 1]){
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
            SortBubble(arr, ++i);
        }
}
SortBubble(arr, 0);
console.log(arr);