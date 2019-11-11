var a = 45;
var b = 40;
function NOD(a, b){
    if(a % b == 0){
        console.log(b);
    }else{
            let tmp = a % b;
            a = b;
            b = tmp;
            NOD(a, b);
    }
}
NOD(a,b);