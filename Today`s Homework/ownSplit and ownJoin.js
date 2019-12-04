// var arr = [1, 2, 3];

// Array.prototype.ownJoin = function(separator){
//     let string = '';
//     this.forEach(function(item, index) {
//             string += item += separator;
//     });
//     string = string.slice(0, string.length - separator.length);
//     return string;
// }

// var t = arr.ownJoin("qwe");
// console.log(t);


String.prototype.ownSplit = function(separator){
    let arr = [];
    let index = 0;

    for(let i in this){
        if(i == this.length - 1){
            let tmp = this.slice(index, +i + 1);
            if(tmp) arr.push(tmp);
        }
        if(this.slice(+i, +i + separator.length) == separator){
            let tmp = this.slice(index, i);
            if(tmp) arr.push(tmp);
            index = +i + separator.length;
        } else {
            continue;
        }
    }
    return arr;
}

let str = 'q11w11e11r11t11t11u11ioiri';
// // let y = str.split('11');
let y = str.ownSplit('11');
console.log(y);
let r = str.slice(0, 3);
console.log(r);